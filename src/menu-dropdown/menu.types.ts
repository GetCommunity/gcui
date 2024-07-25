import { JSX } from 'solid-js';
import {
  ThemeBasePlacement,
  ThemeElementColor,
  ThemeElementCurve,
  ThemeElementSize,
  ThemeElementStyleType,
} from '../core';

/**
 *
 * Menubar and Menu Dropdown Generics
 *
 */

/**
 * Menu Base
 */
type MenuBaseProps = {
  type?:
    | 'dropdown'
    | 'menubar-dropdown'
    | 'separator'
    | 'item'
    | 'item-radio'
    | 'item-checkbox'
    | 'group'
    | 'group-radio'
    | 'group-sub';
};

export type MenuBaseThemeProps = {
  styleType?: ThemeElementStyleType;
  color?: ThemeElementColor;
  size?: ThemeElementSize;
  curve?: ThemeElementCurve;
};

/**
 * Menu Group Base
 */
type MenuChildrenProps = MenuBaseProps & {
  children: JSX.Element;
} & MenuBaseThemeProps;

/**
 * Menu Dropdown Base
 */
type MenuDropdownBaseProps = {
  label: string;
  indicator?: JSX.Element;
  // menu
  onOpenChange?: (open: boolean) => void;
  id?: string;
  modal?: boolean;
  preventScroll?: boolean;
  forceMount?: boolean;
  arrowSize?: number;
  // content
  contentPlacement?: ThemeBasePlacement;
  contentGutter?: number;
  contentShift?: number;
  contentFlip?: boolean;
  contentSlide?: boolean;
  contentOverlap?: boolean;
  contentSameWidth?: boolean;
  contentFitViewport?: boolean;
  contentHideWhenDetached?: boolean;
  contentDetachedPadding?: number;
  contentArrowPadding?: number;
  contentOverflowPadding?: number;
};

/**
 * Menu Items Base
 */
type MenuItemBaseProps = MenuBaseProps & {
  textValue: string;
  disabled?: boolean;
  closeOnSelect?: boolean;
  onSelect?: () => void;
} & MenuBaseThemeProps;

/**
 *
 * Menubar and Menu Dropdown Types
 *
 */

/**
 * Menu Dropdown
 */
export type MenuDropdownProps = MenuChildrenProps &
  MenuDropdownBaseProps &
  MenuBaseThemeProps;

/**
 * Menubar
 */
export type MenubarProps = MenuChildrenProps & {
  value: string;
  defaultValue?: string;
  onValueChange?: (value: string | undefined | null) => void;
  loop?: boolean;
  focusOnAlt?: boolean;
  arrowSize?: number;
} & MenuBaseThemeProps;

/**
 * Menubar Dropdown
 */
export type MenubarDropdownProps = MenuChildrenProps &
  MenuDropdownBaseProps & {
    value: string;
  };

/**
 * Menu Group
 */
export type MenuGroupProps = MenuChildrenProps & {
  label?: string;
};

/**
 * Menu Sub Group
 */
export type MenuSubGroupProps = MenuChildrenProps & {
  label: string;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

/**
 * Menu Radio Group
 */
export type MenuRadioGroupProps = MenuChildrenProps & {
  label: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

/**
 * Menu Radio Item
 */
export type MenuRadioItemProps = MenuItemBaseProps & {
  value: string;
};

/**
 * Menu Checkbox Item
 */
export type MenuCheckboxItemProps = MenuItemBaseProps & {
  checked: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

/**
 * Menu Item
 */
export type MenuItemProps = MenuItemBaseProps & {
  rightSlot?: JSX.Element;
};

/**
 * Menu Separator
 */
export type MenuSeparatorProps = MenuBaseProps & MenuBaseThemeProps;
