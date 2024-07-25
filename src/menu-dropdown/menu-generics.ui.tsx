import { Component, JSX } from 'solid-js';
import {
  MenuCheckboxItemProps,
  MenuGroupProps,
  MenuItemProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuSubGroupProps,
} from './menu.types';

export const MenuItem: Component<MenuItemProps> = (props) => {
  props.type = 'item';
  return props as unknown as JSX.Element;
};

export const MenuCheckboxItem: Component<MenuCheckboxItemProps> = (props) => {
  props.type = 'item-checkbox';
  return props as unknown as JSX.Element;
};

export const MenuRadioItem: Component<MenuRadioItemProps> = (props) => {
  props.type = 'item-radio';
  return props as unknown as JSX.Element;
};

export const MenuSeparator: Component<MenuSeparatorProps> = (props) => {
  props.type = 'separator';
  return props as unknown as JSX.Element;
};

export const MenuGroup: Component<MenuGroupProps> = (props) => {
  props.type = 'group';
  return props as unknown as JSX.Element;
};

export const MenuRadioGroup: Component<MenuRadioGroupProps> = (props) => {
  props.type = 'group-radio';
  return props as unknown as JSX.Element;
};

export const MenuSubGroup: Component<MenuSubGroupProps> = (props) => {
  props.type = 'group-sub';
  return props as unknown as JSX.Element;
};
