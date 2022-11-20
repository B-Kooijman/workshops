import * as React from "react";
import { Field } from '@sitecore-jss/sitecore-jss-react';
// import { IComponentProps } from 'lib/component-props';
import { RichText, Text } from "../../atoms";

export type ContentBlockProps = {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

export const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
  <>
    <Text tag="h2" className="display-4" field={fields.heading} />
    <RichText className="contentDescription" field={fields.content} />
  </>
);