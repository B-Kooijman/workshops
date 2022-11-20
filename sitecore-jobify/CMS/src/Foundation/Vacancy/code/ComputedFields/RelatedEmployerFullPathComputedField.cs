using Sitecore.ContentSearch;
using Sitecore.ContentSearch.ComputedFields;
using Sitecore.Data;
using Sitecore.Data.Items;
using System;

namespace Jobify.Foundation.Vacancy.ComputedFields
{
    public class RelatedEmployerFullPathComputedField : IComputedIndexField
    {
        public string FieldName { get; set; }

        public string ReturnType { get; set; }

        public object ComputeFieldValue(IIndexable indexable)
        {
            if (indexable == null) throw new ArgumentNullException(nameof(indexable));

            if (!(indexable is SitecoreIndexableItem sitecoreIndexable))
            {
                return default;
            }

            var item = (Item)sitecoreIndexable;
            if (item == null)
            {
                return default;
            }

            if (string.Compare(item.Database.Name, "core", StringComparison.OrdinalIgnoreCase) == 0)
            {
                return default;
            }

            if (!item.TemplateID.Equals(new ID("{4B2FF096-08B8-41B8-8AC1-597329D3D5DC}")))
            {
                return default;
            }

            var relatedEmployerFieldValue = item.Fields[new ID("{AC47FFEC-343E-40D8-81FD-FC65BB5929F6}")]?.Value;
            if(string.IsNullOrWhiteSpace(relatedEmployerFieldValue))
            {
                return default;
            }

            var relatedEmployerItem = item.Database.GetItem(new ID(relatedEmployerFieldValue));
            if (relatedEmployerItem == null)
            {
                return default;
            }

            return relatedEmployerItem.Paths.FullPath.ToLower();
        }
    }
}