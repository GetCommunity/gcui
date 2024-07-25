import { DropdownMenu } from '@kobalte/core/dropdown-menu';
import { Menubar as KBMenubar } from '@kobalte/core/menubar';
import { Component, createMemo, For, Match, Show, Switch } from 'solid-js';
import { KeyboardArrowRightIcon } from '../icon';
import { MenubarCheckboxItem } from './menu-bar-item-checkbox.ui';
import { MenubarItemSeparator } from './menu-bar-item-separator.ui';
import { MenubarItem } from './menu-bar-item.ui';
import { DropdownMenuCheckboxItem } from './menu-item-checkbox.ui';
import { DropdownMenuSeparator } from './menu-item-separator.ui';
import { DropdownMenuItem } from './menu-item.ui';
import {
  MenuBaseThemeProps,
  MenuCheckboxItemProps,
  MenuGroupProps,
  MenuItemProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuSubGroupProps,
} from './menu.types';

type MenuRendererProps = {
  type: 'dropdown' | 'menubar';
  item:
    | MenuSeparatorProps
    | MenuItemProps
    | MenuCheckboxItemProps
    | MenuRadioGroupProps
    | MenuRadioItemProps
    | MenuGroupProps
    | MenuSubGroupProps;
} & MenuBaseThemeProps;

export const RenderDropdownItems: Component<MenuRendererProps> = (props) => {
  if (props.item.type === undefined) return <></>;
  const itemType = () => props.item.type!;
  const styleType = () => props.item.styleType ?? props.styleType ?? 'fill';
  const color = () => props.item.color ?? props.color ?? 'default';
  const size = () => props.item.size ?? props.size ?? 'default';
  const curve = () => props.item.curve ?? props.curve ?? 'default';
  const renderType = () => props.type;
  const renderItem = createMemo<
    | MenuSeparatorProps
    | MenuItemProps
    | MenuCheckboxItemProps
    | MenuRadioGroupProps
    | MenuRadioItemProps
    | MenuGroupProps
    | MenuSubGroupProps
    //   @ts-ignore-next-line
  >(() => {
    switch (itemType()) {
      case 'separator':
        return props.item as MenuSeparatorProps;
      case 'item':
        return props.item as MenuItemProps;
      case 'item-checkbox':
        return props.item as MenuCheckboxItemProps;
      case 'group-radio':
        return props.item as MenuRadioGroupProps;
      case 'group':
        return props.item as MenuGroupProps;
      case 'group-sub':
        return props.item as MenuSubGroupProps;
    }
  });
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
  const menuGroupLabelSizeKey = {
    default: 'px-3 py-0 text-sm',
    small: 'px-2 py-0 text-xs',
    medium: 'px-4 py-0 text-base',
    large: 'px-6 py-0 text-md',
  };
  const menuIndicatorSizeKey = {
    default: 'right-1 h-5 w-5 text-4xl',
    small: 'right-1 h-4 w-4 text-4xl',
    medium: 'right-1 h-6 w-6 text-4xl',
    large: 'right-2 h-8 w-8 text-4xl',
  };
  const menuSubTriggerColor = {
    default: {
      fill: 'ui-expanded:bg-gray-500 ui-expanded:text-white ui-highlighted:bg-gray-600 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-gray-600 ui-expanded:text-gray-800 ui-highlighted:border-gray-500 ui-highlighted:text-gray-900',
    },
    info: {
      fill: 'ui-expanded:bg-blue-100 ui-expanded:text-blue-800 ui-highlighted:bg-blue-500 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-blue-500 ui-expanded:text-blue-800 ui-highlighted:border-blue-500 ui-highlighted:text-blue-500',
    },
    error: {
      fill: 'ui-expanded:bg-red-100 ui-expanded:text-red-900 ui-highlighted:bg-red-700 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-red-700 ui-expanded:text-red-900 ui-highlighted:border-red-700 ui-highlighted:text-red-700',
    },
    warning: {
      fill: 'ui-expanded:bg-yellow-100 ui-expanded:text-yellow-900 ui-highlighted:bg-yellow-500 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-yellow-500 ui-expanded:text-yellow-900 ui-highlighted:border-yellow-500 ui-highlighted:text-yellow-500',
    },
    success: {
      fill: 'ui-expanded:bg-green-100 ui-expanded:text-green-900 ui-highlighted:bg-green-600 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-green-600 ui-expanded:text-green-900 ui-highlighted:border-green-600 ui-highlighted:text-green-600',
    },
    light: {
      fill: 'ui-expanded:bg-gray-200 ui-expanded:text-gray-900 ui-highlighted:bg-gray-300 ui-highlighted:text-gray-900',
      outline:
        'border border-solid border-transparent ui-expanded:border-gray-400 ui-expanded:text-gray-900 ui-highlighted:border-gray-400 ui-highlighted:text-gray-700',
    },
    dark: {
      fill: 'ui-expanded:bg-gray-200 ui-expanded:text-gray-900 ui-highlighted:bg-gray-900 ui-highlighted:text-white',
      outline:
        'border border-solid border-transparent ui-expanded:border-gray-900 ui-expanded:text-gray-900 ui-highlighted:border-gray-900 ui-highlighted:text-gray-900',
    },
  };
  return (
    <Switch>
      {/* Separator */}
      <Match when={itemType() === 'separator'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenuSeparator
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
          <Match when={renderType() === 'menubar'}>
            <MenubarItemSeparator
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
        </Switch>
      </Match>
      {/* Item */}
      <Match when={itemType() === 'item'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenuItem
              textValue={(renderItem() as MenuItemProps).textValue}
              disabled={(renderItem() as MenuItemProps).disabled}
              closeOnSelect={(renderItem() as MenuItemProps).closeOnSelect}
              onSelect={(renderItem() as MenuItemProps).onSelect}
              rightSlot={(renderItem() as MenuItemProps).rightSlot}
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
          <Match when={renderType() === 'menubar'}>
            <MenubarItem
              textValue={(renderItem() as MenuItemProps).textValue}
              disabled={(renderItem() as MenuItemProps).disabled}
              closeOnSelect={(renderItem() as MenuItemProps).closeOnSelect}
              onSelect={(renderItem() as MenuItemProps).onSelect}
              rightSlot={(renderItem() as MenuItemProps).rightSlot}
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
        </Switch>
      </Match>
      {/* Item Checkbox */}
      <Match when={itemType() === 'item-checkbox'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenuCheckboxItem
              checked={(renderItem() as MenuCheckboxItemProps).checked}
              defaultChecked={(renderItem() as MenuCheckboxItemProps).defaultChecked}
              onChange={(renderItem() as MenuCheckboxItemProps).onChange}
              textValue={(renderItem() as MenuCheckboxItemProps).textValue}
              disabled={(renderItem() as MenuCheckboxItemProps).disabled}
              closeOnSelect={(renderItem() as MenuCheckboxItemProps).closeOnSelect}
              onSelect={(renderItem() as MenuCheckboxItemProps).onSelect}
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
          <Match when={renderType() === 'menubar'}>
            <MenubarCheckboxItem
              checked={(renderItem() as MenuCheckboxItemProps).checked}
              defaultChecked={(renderItem() as MenuCheckboxItemProps).defaultChecked}
              onChange={(renderItem() as MenuCheckboxItemProps).onChange}
              textValue={(renderItem() as MenuCheckboxItemProps).textValue}
              disabled={(renderItem() as MenuCheckboxItemProps).disabled}
              closeOnSelect={(renderItem() as MenuCheckboxItemProps).closeOnSelect}
              onSelect={(renderItem() as MenuCheckboxItemProps).onSelect}
              styleType={styleType()}
              color={color()}
              size={size()}
              curve={curve()}
            />
          </Match>
        </Switch>
      </Match>
      {/* Radio Group */}
      <Match when={itemType() === 'group-radio'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenu.Group>
              <DropdownMenu.GroupLabel
                class={`dropdown-menu__group-label ${menuGroupLabelSizeKey[size()]}`}
              >
                {(renderItem() as MenuRadioGroupProps).label}
              </DropdownMenu.GroupLabel>
              <DropdownMenu.RadioGroup
                defaultValue={(renderItem() as MenuRadioGroupProps).defaultValue}
                value={(renderItem() as MenuRadioGroupProps).value}
                onChange={(renderItem() as MenuRadioGroupProps).onChange}
              >
                {/* @ts-ignore-next-line */}
                <For each={(renderItem() as MenuRadioGroupProps).children}>
                  {(radio: MenuRadioItemProps) => {
                    return (
                      <DropdownMenu.RadioItem
                        class={`dropdown-menu__radio-item ${menuItemColor[color()][styleType()]} ${menuItemSizeKey[size()]} ${menuItemEdgeCurve[curve()]}`}
                        value={radio.value}
                        disabled={radio.disabled}
                        aria-disabled={radio.disabled}
                        closeOnSelect={radio.closeOnSelect}
                        onSelect={radio.onSelect}
                      >
                        {radio.textValue}
                        <DropdownMenu.ItemIndicator
                          class={`dropdown-menu__radio-item-indicator ${menuIndicatorSizeKey[size()]}`}
                        >
                          &bull;
                        </DropdownMenu.ItemIndicator>
                      </DropdownMenu.RadioItem>
                    );
                  }}
                </For>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Group>
          </Match>
          <Match when={renderType() === 'menubar'}>
            <KBMenubar.Group>
              <KBMenubar.GroupLabel
                class={`menubar__group-label ${menuGroupLabelSizeKey[size()]}`}
              >
                {(renderItem() as MenuRadioGroupProps).label}
              </KBMenubar.GroupLabel>
              <KBMenubar.RadioGroup
                defaultValue={(renderItem() as MenuRadioGroupProps).defaultValue}
                value={(renderItem() as MenuRadioGroupProps).value}
                onChange={(renderItem() as MenuRadioGroupProps).onChange}
              >
                {/* @ts-ignore-next-line */}
                <For each={(renderItem() as MenuRadioGroupProps).children}>
                  {(radio: MenuRadioItemProps) => {
                    return (
                      <KBMenubar.RadioItem
                        class={`menubar__radio-item ${menuItemColor[color()][styleType()]} ${menuItemSizeKey[size()]} ${menuItemEdgeCurve[curve()]}`}
                        value={radio.value}
                        disabled={radio.disabled}
                        aria-disabled={radio.disabled}
                        closeOnSelect={radio.closeOnSelect}
                        onSelect={radio.onSelect}
                      >
                        {radio.textValue}
                        <KBMenubar.ItemIndicator
                          class={`menubar__radio-item-indicator ${menuIndicatorSizeKey[size()]}`}
                        >
                          &bull;
                        </KBMenubar.ItemIndicator>
                      </KBMenubar.RadioItem>
                    );
                  }}
                </For>
              </KBMenubar.RadioGroup>
            </KBMenubar.Group>
          </Match>
        </Switch>
      </Match>
      {/* Group */}
      <Match when={itemType() === 'group'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenu.Group>
              <Show when={(renderItem() as MenuGroupProps).label}>
                <DropdownMenu.GroupLabel
                  class={`dropdown-menu__group-label ${menuGroupLabelSizeKey[size()]}`}
                >
                  {(renderItem() as MenuGroupProps).label}
                </DropdownMenu.GroupLabel>
              </Show>
              {/* @ts-ignore-next-line */}
              <For each={(renderItem() as MenuGroupProps).children}>
                {(subItem) => (
                  <RenderDropdownItems
                    type={renderType()}
                    item={subItem}
                    styleType={subItem.styleType ?? styleType()}
                    color={subItem.color ?? color()}
                    size={subItem.size ?? size()}
                    curve={subItem.curve ?? curve()}
                  />
                )}
              </For>
            </DropdownMenu.Group>
          </Match>
          <Match when={renderType() === 'menubar'}>
            <KBMenubar.Group>
              <Show when={(renderItem() as MenuGroupProps).label}>
                <KBMenubar.GroupLabel
                  class={`menubar__group-label ${menuGroupLabelSizeKey[size()]}`}
                >
                  {(renderItem() as MenuGroupProps).label}
                </KBMenubar.GroupLabel>
              </Show>
              {/* @ts-ignore-next-line */}
              <For each={(renderItem() as MenuGroupProps).children}>
                {(subItem) => (
                  <RenderDropdownItems
                    type={renderType()}
                    item={subItem}
                    styleType={subItem.styleType ?? styleType()}
                    color={subItem.color ?? color()}
                    size={subItem.size ?? size()}
                    curve={subItem.curve ?? curve()}
                  />
                )}
              </For>
            </KBMenubar.Group>
          </Match>
        </Switch>
      </Match>
      {/* Sub Group */}
      <Match when={itemType() === 'group-sub'}>
        <Switch>
          <Match when={renderType() === 'dropdown'}>
            <DropdownMenu.Sub overlap gutter={4} shift={-8}>
              <DropdownMenu.SubTrigger
                class={`dropdown-menu__sub-trigger ${menuSubTriggerColor[color()][styleType()]} ${menuItemSizeKey[size()]} ${menuItemEdgeCurve[curve()]}`}
              >
                {(renderItem() as MenuSubGroupProps).label}
                <div class='dropdown-menu__item-right-slot'>
                  <KeyboardArrowRightIcon classes='w-full h-full' />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  class={`dropdown-menu__sub-content ${menuWidthKey[size()]} ${menuEdgeCurve[curve()]}`}
                >
                  {/* @ts-ignore-next-line */}
                  <For each={(renderItem() as MenuSubGroupProps).children}>
                    {(subItem) => (
                      <RenderDropdownItems
                        type={renderType()}
                        item={subItem}
                        styleType={subItem.styleType ?? styleType()}
                        color={subItem.color ?? color()}
                        size={subItem.size ?? size()}
                        curve={subItem.curve ?? curve()}
                      />
                    )}
                  </For>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          </Match>
          <Match when={renderType() === 'menubar'}>
            <KBMenubar.Sub overlap gutter={4} shift={-8}>
              <KBMenubar.SubTrigger
                class={`menubar__sub-trigger ${menuSubTriggerColor[color()][styleType()]} ${menuItemSizeKey[size()]} ${menuItemEdgeCurve[curve()]}`}
              >
                {(renderItem() as MenuSubGroupProps).label}
                <div class='menubar__item-right-slot'>
                  <KeyboardArrowRightIcon classes='w-full h-full' />
                </div>
              </KBMenubar.SubTrigger>
              <KBMenubar.Portal>
                <KBMenubar.SubContent
                  class={`menubar__sub-content ${menuWidthKey[size()]} ${menuEdgeCurve[curve()]}`}
                >
                  {/* @ts-ignore-next-line */}
                  <For each={(renderItem() as MenuSubGroupProps).children}>
                    {(subItem) => (
                      <RenderDropdownItems
                        type={renderType()}
                        item={subItem}
                        styleType={subItem.styleType ?? styleType()}
                        color={subItem.color ?? color()}
                        size={subItem.size ?? size()}
                        curve={subItem.curve ?? curve()}
                      />
                    )}
                  </For>
                </KBMenubar.SubContent>
              </KBMenubar.Portal>
            </KBMenubar.Sub>
          </Match>
        </Switch>
      </Match>
    </Switch>
  );
};
