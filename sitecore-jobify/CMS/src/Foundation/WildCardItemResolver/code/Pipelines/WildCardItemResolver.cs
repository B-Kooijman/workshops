using Sitecore;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Pipelines.HttpRequest;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Jobify.Foundation.WildCardItemResolver.Pipelines
{
    public class WildCardItemResolver : HttpRequestProcessor
    {
        public override void Process(HttpRequestArgs args)
        {
            Assert.ArgumentNotNull(args, nameof(args));
            if (Context.Site.Name.Equals("shell", StringComparison.InvariantCultureIgnoreCase) || Context.Domain.Name.Equals("sitecore", StringComparison.InvariantCultureIgnoreCase))
            {
                return;
            }

            if (Context.Item == null || Context.Database == null || args.Url.ItemPath.Length == 0)
            {
                return;
            }

            var newContextItem = GetContextItemByWildCard(args.Url.FilePath);

            if (newContextItem != null)
            {
                Context.Item = newContextItem;
                return;
            }

            //TODO: Handle 404 to override wildcard resolving

            return;
        }

        public static Item GetContextItemByWildCard(string urlPath)
        {
            try
            {
                if (string.IsNullOrEmpty(urlPath))
                {
                    return null;
                }

                Item newContextItem = null;

                var urlParts = urlPath.Split(new[] { "/" }, StringSplitOptions.RemoveEmptyEntries);
                if(urlParts.Count() > 3)
                {
                    Log.Warn($"Path requested with more than 3 url parts: {urlPath}", nameof(WildCardItemResolver));
                    return null;
                }

                var friendlyUrl = urlParts.Last();
                if (string.IsNullOrEmpty(friendlyUrl))
                {
                    return null;
                }

                friendlyUrl = friendlyUrl.ToLower();
                var index = ContentSearchManager.GetIndex($"sitecore_{Context.Database.Name}_index");
                using (var context = index.CreateSearchContext())
                {
                    List<SearchResultItem> results = context.GetQueryable<SearchResultItem>()
                        .Where(i => i["friendlyurl"] == friendlyUrl).ToList();

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
                Log.Error("An error occured on GetContextItemByWildCard", e.InnerException, nameof(WildCardItemResolver));
                return null;
            }
        }
    }
}