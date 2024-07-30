import { JSX, Setter } from 'solid-js';
import {
  ThemeElementColor,
  ThemeElementCurve,
  ThemeElementSize,
  ThemeElementStyleType,
} from '../core';

export type TabsProps = {
  label: string;
  children: JSX.Element;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void | Setter<string>;
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
  disabled?: boolean;
  styleType?: ThemeElementStyleType;
  color?: ThemeElementColor;
  size?: ThemeElementSize;
  curve?: ThemeElementCurve;
};

export type TabItemProps = {
  value: string;
  label: string;
  children: JSX.Element;
  disabled?: boolean;
};
