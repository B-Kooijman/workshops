import {
  Field,
  ComponentParams,
  ComponentFactory,
  ComponentRendering,
  LayoutServiceContext,
  RouteData,
} from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * Styleguide sitecore context value shape
 */
export type ISitecoreContextValue = LayoutServiceContext & {
  itemId?: string;
  route: RouteData;
};

/**
 * Shared styleguide specimen fields
 */
export type ISpecimenFields = {
  fields: {
    description: Field<string>;
    heading: Field<string>;
  };
};

/**
 * Shared styleguide component props
 */
export type IComponentProps = {
  componentFactory: ComponentFactory;
  rendering: ComponentRendering;
  params: ComponentParams;
};

/**
 * Styleguide component props with context
 * You can access `sitecoreContext` by withSitecoreContext/useSitecoreContext
 * @example withSitecoreContext()(ContentBlock)
 * @example const { sitecoreContext } = useSitecoreContext()
 */
export type IComponentWithContextProps = IComponentProps & {
  sitecoreContext: ISitecoreContextValue;
};
