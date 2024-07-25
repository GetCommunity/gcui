/*

const [checkItemA, setCheckItemA] = createSignal<boolean>(true);
const [checkItemB, setCheckItemB] = createSignal<boolean>(false);

<MenuDropdown label='Menu Dropdown' size='small'>
  <MenuItem textValue='Item 1' />
  <MenuItem textValue='Item 2' />
  <MenuItem textValue='Item 3' />
  <MenuGroup label='Group'>
    <MenuItem textValue='Group Item 1' />
    <MenuItem textValue='Group Item 2' />
  </MenuGroup>
  <MenuSubGroup label='Item Submenu'>
    <MenuItem textValue='Sub Item 1' />
    <MenuItem textValue='Sub Item 2' />
    <MenuItem textValue='Sub Item 3' />
  </MenuSubGroup>
  <MenuGroup label='Checkbox Options'>
    <MenuCheckboxItem
      checked={checkItemA()}
      onChange={setCheckItemA}
      textValue='Option 1'
    />
    <MenuCheckboxItem
      checked={checkItemB()}
      onChange={setCheckItemB}
      textValue='Option 2'
    />
  </MenuGroup>
  <MenuRadioGroup label='Select Radio' defaultValue='1'>
    <MenuRadioItem value='1' textValue='Radio 1' />
    <MenuRadioItem value='2' textValue='Radio 2' />
    <MenuRadioItem value='3' textValue='Radio 3' />
  </MenuRadioGroup>
</MenuDropdown>

*/
import { DropdownMenu } from '@kobalte/core/dropdown-menu';
import { children, For, Show } from 'solid-js';
import { KeyboardArrowDownIcon } from '../icon';
import {
  MenuCheckboxItemProps,
  MenuDropdownProps,
  MenuGroupProps,
  MenuItemProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuSubGroupProps,
} from './menu.types';
import { getMenuItems } from './menu.utils';
import { RenderDropdownItems } from './render.menu-dropdown.ui';

export default function MenuDropdown(props: MenuDropdownProps) {
  props.type = 'dropdown';
  const items = getMenuItems(props.children);
  const styleType = () => props.styleType ?? 'fill';
  const color = () => props.color ?? 'default';
  const size = () => props.size ?? 'default';
  const curve = () => props.curve ?? 'default';
  const ddIcon = children(() => props.indicator ?? <KeyboardArrowDownIcon />);
  const triggleColor = {
    default: {
      fill: 'bg-gray-900 text-gray-50 hover:bg-gray-700 focus-visible:outline-gray-700 ui-expanded:bg-gray-600',
      outline:
        'border border-solid border-gray-700 bg-white text-gray-700 focus-visible:outline-gray-700 ui-expanded:bg-gray-200 ui-expanded:text-black',
    },
    info: {
      fill: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600 ui-expanded:bg-blue-500',
      outline:
        'border border-solid border-blue-500 text-blue-500 hover:bg-blue-50 focus-visible:outline-blue-500 ui-expanded:bg-blue-50',
    },
    error: {
      fill: 'bg-red-700 text-white hover:bg-red-600 focus-visible:outline-red-700 ui-expanded:bg-red-600',
      outline:
        'border border-solid border-red-600 text-red-600  hover:bg-red-50 focus-visible:outline-red-600 ui-expanded:bg-red-50',
    },
    warning: {
      fill: 'bg-yellow-500 text-white focus-visible:outline-yellow-500 ui-expanded:bg-yellow-400',
      outline:
        'border border-solid border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus-visible:outline-yellow-500 ui-expanded:bg-yellow-50',
    },
    success: {
      fill: 'bg-green-600 text-white focus-visible:outline-green-600 ui-expanded:bg-green-500',
      outline:
        'border border-solid border-green-600 text-green-600  hover:bg-green-50 focus-visible:outline-green-600 ui-expanded:bg-green-50',
    },
    light: {
      fill: 'bg-gray-300 text-gray-900 focus-visible:outline-gray-300 ui-expanded:bg-gray-400 ui-expanded:text-white',
      outline:
        'border border-solid border-gray-500 text-gray-700 focus-visible:outline-gray-500 ui-expanded:bg-gray-100 ui-expanded:text-gray-900',
    },
    dark: {
      fill: 'bg-gray-900 text-white focus-visible:outline-gray-900 ui-expanded:bg-gray-700',
      outline:
        'border border-solid border-gray-900 text-gray-900 focus-visible:outline-gray-900 ui-expanded:bg-gray-200',
    },
  };
  const triggerEdgeCurve = {
    default: 'rounded',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-full',
    none: 'rounded-none',
  };
  const triggerSizeKey = {
    default: 'px-4 py-0 h-10',
    small: 'px-3 py-0 text-sm h-8',
    medium: 'px-6 py-0 text-lg h-12',
    large: 'px-10 py-0 text-xl h-14',
  };
  const menuWidthKey = {
    default: 'min-w-48',
    small: 'min-w-36',
    medium: 'min-w-60',
    large: 'min-w-72',
  };
  const menuEdgeCurve = {
    default: 'rounded-md',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-3xl',
    none: 'rounded-none',
  };
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        class={`dropdown-menu__trigger ${triggerSizeKey[size()]} ${triggerEdgeCurve[curve()]} ${triggleColor[color()][styleType()]}`}
      >
        <span>{props.label}</span>
        <DropdownMenu.Icon class='dropdown-menu__trigger-icon'>
          {ddIcon()}
        </DropdownMenu.Icon>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          class={`dropdown-menu__content ${menuWidthKey[size()]} ${menuEdgeCurve[curve()]}`}
        >
          <Show when={props.arrowSize && props.arrowSize > 0}>
            <DropdownMenu.Arrow class='dropdown-menu__arrow' size={props.arrowSize} />
          </Show>
          <For each={items}>
            {(
              item:
                | MenuSeparatorProps
                | MenuItemProps
                | MenuCheckboxItemProps
                | MenuRadioGroupProps
                | MenuRadioItemProps
                | MenuGroupProps
                | MenuSubGroupProps
            ) => (
              <RenderDropdownItems
                type='dropdown'
                item={item}
                styleType={styleType()}
                color={color()}
                size={size()}
                curve={curve()}
              />
            )}
          </For>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
}
