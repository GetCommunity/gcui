import { Accessor, JSX, Setter } from 'solid-js';
import { ThemeElementColor } from '../core';

export type DialogTriggerType = 'button' | 'link' | 'nav' | 'jsx';

export type DialogProps = {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
  handleOpen: () => void;
  handleClose: () => void;
  size?: 'sm' | 'lg' | 'xl';
  triggerType: DialogTriggerType;
  triggerElm: JSX.Element;
  variant?: ThemeElementColor;
  showCloseButton?: boolean;
  title: JSX.Element | string;
  description?: JSX.Element | string;
  footerActions?: JSX.Element;
  formSubmit?: () => Promise<void>;
};

export type DialogButtonProps = {
  handleOpen: () => void;
  handleClose: () => void;
  variant?: ThemeElementColor;
};

export type DialogLinkProps = {
  handleOpen: () => void;
  handleClose: () => void;
};
