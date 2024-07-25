import { Menubar as KBMenubar } from '@kobalte/core/menubar';
import { Component } from 'solid-js';
import { MenuSeparatorProps } from './menu.types';

export const MenubarItemSeparator: Component<MenuSeparatorProps> = (props) => {
  const size = () => props.size ?? 'default';
  const menuSepSizeKey = {
    default: 'h-1',
    small: 'h-0.5',
    medium: 'h-2',
    large: 'h-4',
  };
  return <KBMenubar.Separator class={`menubar__separator ${menuSepSizeKey[size()]}`} />;
};
