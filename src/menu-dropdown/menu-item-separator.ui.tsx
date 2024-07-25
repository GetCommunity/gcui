import { DropdownMenu } from '@kobalte/core/dropdown-menu';
import { Component } from 'solid-js';
import { MenuSeparatorProps } from './menu.types';

export const DropdownMenuSeparator: Component<MenuSeparatorProps> = (props) => {
  const size = () => props.size ?? 'default';
  const menuSepSizeKey = {
    default: 'h-1',
    small: 'h-0.5',
    medium: 'h-2',
    large: 'h-4',
  };
  return (
    <DropdownMenu.Separator
      class={`dropdown-menu__separator ${menuSepSizeKey[size()]}`}
    />
  );
};
