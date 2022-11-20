import * as React from "react";
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';
import { RichTextProps as JSSRichTextProps } from "@sitecore-jss/sitecore-jss-react/types/components/RichText";

export type RichTextProps = JSSRichTextProps;

export const RichText = (props: RichTextProps) =>
    <JSSRichText {...props} />