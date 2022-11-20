using Sitecore;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.JavaScriptServices.Configuration;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService.Pipelines.GetLayoutServiceContext;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Jobify.Foundation.WildCardItemResolver.Pipelines
{

    public class LayoutServiceWildCardItemResolver : JssGetLayoutServiceContextProcessor
    {
        private const string defaultConfigRequestPath = "/sitecore/api/layout/render/default";
        private const string itemQueryStringKey = "item";
        private const string relatedEmployerKey = "relatedEmployer";
        private const string friendlyUrlKey = "friendlyurl";
        private const string wildCardKey = "*";
        private const string errortext = "An error occured on GetContextItemByWildCard";

        public LayoutServiceWildCardItemResolver(IConfigurationResolver configurationResolver) : base(configurationResolver)
        {
        }

        protected override void DoProcess(GetLayoutServiceContextArgs args, AppConfiguration application)
        {
            if (Context.Item?.Name != wildCardKey)
            {
                return;
            }

            var lastPart = this.GetLastPathPart();
            var newContextItem = GetContextItemByWildCard(lastPart);

            if (newContextItem != null)
            {
                Context.Item = newContextItem;
            }

            if (newContextItem != null)
            {
                args.ContextData.Add(relatedEmployerKey, newContextItem.Paths.FullPath.ToLower());
            }
        }

        private string GetLastPathPart()
        {
           return Path.GetFileName(HttpContext.Current.Request.Path == defaultConfigRequestPath
                ? HttpContext.Current.Request.QueryString[itemQueryStringKey]
                : HttpContext.Current.Request.Path);
        }

        private static Item GetContextItemByWildCard(string itemPath)
        {
            try
            {
                if (string.IsNullOrEmpty(itemPath))
                {
                    return null;
                }

                Item newContextItem = null;

                var itemPaths = itemPath.Split(new[] { "/" }, StringSplitOptions.RemoveEmptyEntries);
                var friendlyUrl = itemPaths.Last();
                if (string.IsNullOrEmpty(friendlyUrl))
                {
                    return null;
                }

                friendlyUrl = friendlyUrl.ToLower();
                var index = ContentSearchManager.GetIndex($"sitecore_{Context.Database.Name}_index");
                using (var context = index.CreateSearchContext())
                {
                    List<SearchResultItem> results = context.GetQueryable<SearchResultItem>()
                        .Where(i => i[friendlyUrlKey] == friendlyUrl).ToList();

                    if (results.Any())
                    {
                        newContextItem = results.First().GetItem();
                        return newContextItem;
                    }

                    return null;
                }
            }
            catch (Exception e)
            {
                Log.Error(errortext, e.InnerException, nameof(WildCardItemResolver));
                return null;
            }
        }
    }
}