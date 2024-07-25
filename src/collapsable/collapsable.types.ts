import { JSX, Setter } from 'solid-js';
import {
  ThemeElementColor,
  ThemeElementCurve,
  ThemeElementSize,
  ThemeElementStyleType,
} from '../core';

type CollapsableBaseProps = {
  styleType?: ThemeElementStyleType;
  color?: ThemeElementColor;
  size?: ThemeElementSize;
  curve?: ThemeElementCurve;
};

export type CollapsableProps = {
  label: string | JSX.Element;
  open: boolean;
  onOpenChange: (open: boolean) => void | Setter<boolean>;
  defaultOpen?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
} & CollapsableBaseProps;
