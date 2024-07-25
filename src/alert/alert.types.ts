import { JSX } from 'solid-js';
import { ThemeElementColor } from '../core';

export type AlertMessageProps = {
  message: string;
  color?: ThemeElementColor;
  closeable?: boolean;
  onClose?: () => void;
  closeIcon?: JSX.Element | Element | string;
  timeout?: number;
  triggerTimeoutOnClick?: boolean;
};
