import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export interface DataSource {
  heading: Field<string>;
  name: string;
  id: string;
}

export interface ChildrenItems {
  results: [
    {
      id: string;
      title: Field<string>;
      text: Field<string>;
      friendlyUrl: Field<string>;
      bottomTitle: Field<string>;
      image: ImageField;
      relatedEmployer: {
        targetItem: {
          id: string;
          bottomTitle: Field<string>;
          image: ImageField;
          friendlyUrl: Field<string>;
        };
      };
    }
  ];
  pageTitle: {
    value: string;
  };
}

export type CardsProps = {
  fields: {
    data: {
      datasource: DataSource;
      item: {
        children: ChildrenItems;
      };
    };
  };
};
