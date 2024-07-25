import { DropdownMenu } from '@kobalte/core/dropdown-menu';
import { Component, Show } from 'solid-js';
import { MenuItemProps } from './menu.types';

export const DropdownMenuItem: Component<MenuItemProps> = (props) => {
  const styleType = () => props.styleType ?? 'fill';
  const color = () => props.color ?? 'default';
  const size = () => props.size ?? 'default';
  const curve = () => props.curve ?? 'default';
  const menuItemColor = {
    default: {
      fill: 'ui-highlighted:bg-gray-600 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-gray-600 ui-highlighted:text-gray-800',
    },
    info: {
      fill: 'ui-highlighted:bg-blue-500 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-blue-500 ui-highlighted:text-blue-500',
    },
    error: {
      fill: 'ui-highlighted:bg-red-700 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-red-700 ui-highlighted:text-red-700',
    },
    warning: {
      fill: 'ui-highlighted:bg-yellow-500 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-yellow-500 ui-highlighted:text-yellow-500',
    },
    success: {
      fill: 'ui-highlighted:bg-green-600 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-green-600 ui-highlighted:text-green-600',
    },
    light: {
      fill: 'ui-highlighted:bg-gray-300 ui-highlighted:text-gray-900',
      outline:
        'border border-solid border-transparent ui-highlighted:border-gray-400 ui-highlighted:text-gray-700',
    },
    dark: {
      fill: 'ui-highlighted:bg-gray-900 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-highlighted:border-gray-900 ui-highlighted:text-gray-900',
    },
  };
  const menuItemEdgeCurve = {
    default: 'rounded',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-full',
    none: 'rounded-none',
  };
  const menuItemSizeKey = {
    default: 'px-3 py-0 h-9',
    small: 'px-2 py-0 text-sm h-7',
    medium: 'px-4 py-0 text-lg h-10',
    large: 'px-6 py-0 text-xl h-12',
  };
  return (
    <DropdownMenu.Item
      class={`dropdown-menu__item ${menuItemColor[color()][styleType()]} ${menuItemSizeKey[size()]} ${menuItemEdgeCurve[curve()]}`}
      disabled={props.disabled}
      aria-disabled={props.disabled}
      closeOnSelect={props.closeOnSelect}
      onSelect={props.onSelect}
    >
      {props.textValue}
      <Show when={props.rightSlot}>
        <div class='dropdown-menu__item-right-slot'>{props.rightSlot}</div>
      </Show>
    </DropdownMenu.Item>
  );
};
