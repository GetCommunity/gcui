import { JSX, Setter } from 'solid-js';
import {
  ThemeElementColor,
  ThemeElementCurve,
  ThemeElementSize,
  ThemeElementStyleType,
} from '../core';

type AccordionBaseProps = {
  styleType?: ThemeElementStyleType;
  color?: ThemeElementColor;
  size?: ThemeElementSize;
  curve?: ThemeElementCurve;
};

export type AccordionItemProps = {
  label: string;
  value: string;
  children: JSX.Element;
} & AccordionBaseProps;

export type AccordionProps = {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void | Setter<string[]>;
  collapsible?: boolean;
  multiple?: boolean;
  fullWidth?: boolean;
} & AccordionBaseProps;
