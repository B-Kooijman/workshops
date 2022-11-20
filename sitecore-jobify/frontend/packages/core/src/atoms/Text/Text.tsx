import * as React from "react";
import { Text as JSSText } from '@sitecore-jss/sitecore-jss-react';
import { TextProps as JSSTextProps } from "@sitecore-jss/sitecore-jss-react/types/components/Text";

export type TextProps = JSSTextProps;

export const Text = (props: TextProps) =>
    <JSSText {...props} />