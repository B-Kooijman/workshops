import {
  GraphQLSitemapService,
  GraphQLSitemapServiceConfig,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticPathsContext } from 'next';
import config from 'temp/config';
import { config as packageConfig } from '../../package.json';

export interface ExtendedGraphQLSitemapServiceConfig extends GraphQLSitemapServiceConfig {
  /**
   * Item with sub-paths to exclude
   */

  excludeItemId?: string;
}

const emptyId = '{00000000-0000-0000-0000-000000000000}';

export class ExtendedGraphQLSitemapService extends GraphQLSitemapService {
  protected get query(): string {
    return /* GraphQL */ `
      query SitemapQuery(
        $rootItemId: String!
        $language: String!
        $pageSize: Int = 10
        $hasLayout: String = "true"
        $after: String
        $excludeItemId: String = "${this.options.excludeItemId ?? emptyId}"
      ) {
        search(
          where: {
            AND: [
              { name: "_path", value: $rootItemId, operator: CONTAINS }
              { name: "_path", value: $excludeItemId, operator: NCONTAINS }
              { name: "_language", value: $language }
              { name: "_hasLayout", value: $hasLayout }
            ]
          }
          first: $pageSize
          after: $after
        ) {
          total
          pageInfo {
            endCursor
            hasNext
          }
          results {
            url {
              path
            }
          }
        }
      }
    `;
  }

  constructor(public options: ExtendedGraphQLSitemapServiceConfig) {
    super(options);
  }
}

export class RootSitemapFetcher {
  private _graphqlSitemapService: ExtendedGraphQLSitemapService;

  constructor() {
    this._graphqlSitemapService = new ExtendedGraphQLSitemapService({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
      siteName: config.jssAppName,
      //excludeItemId: ItemIds.Products, // Exclude products
    });
  }

  async fetch(context?: GetStaticPathsContext): Promise<StaticPath[]> {
    return (process.env.EXPORT_MODE
      ? this._graphqlSitemapService.fetchExportSitemap(packageConfig.language)
      : this._graphqlSitemapService.fetchSSGSitemap(context?.locales || [])
    ).then((results) => {
      // Compensate for current bug on Delivery Edge where the root '/products' item
      // is being returned from the search query which excludes it ({ name: "_path", value: $productsItemId, operator: NCONTAINS })
      return results.filter((value) => value.params.path[0] !== 'products');
    });
  }
}

export const rootSitemapFetcher = new RootSitemapFetcher();

export class EmployerSitemapFetcher {
  private _graphqlSitemapService: ExtendedGraphQLSitemapService;

  constructor() {
    this._graphqlSitemapService = new ExtendedGraphQLSitemapService({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
      siteName: config.jssAppName,
      rootItemId: '{416961CA-C6B3-4DFF-A176-083F012962C3}', // Only employers
    });
  }

  async fetch(context?: GetStaticPathsContext): Promise<StaticPath[]> {
    return (process.env.EXPORT_MODE
      ? this._graphqlSitemapService.fetchExportSitemap(packageConfig.language)
      : this._graphqlSitemapService.fetchSSGSitemap(context?.locales || [])
    ).then((results) => {
      results.forEach((value) => {
        value.params.path = ['employers', String(value.params.path.pop()?.toLowerCase())];
      });
      return results;
    });
  }
}

export const employerSitemapFetcher = new EmployerSitemapFetcher();
