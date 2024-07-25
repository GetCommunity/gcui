import {
  FaSolidChevronDown,
  FaSolidChevronLeft,
  FaSolidChevronRight,
  FaSolidChevronUp,
} from 'solid-icons/fa';
import {
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
} from 'solid-icons/fi';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const KeyboardArrowUpIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidChevronUp
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardArrowDownIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidChevronDown
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardArrowLeftIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidChevronLeft
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardArrowRightIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidChevronRight
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardDoubleArrowUpIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FiChevronsUp
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardDoubleArrowDownIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FiChevronsDown
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardDoubleArrowLeftIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FiChevronsLeft
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeyboardDoubleArrowRightIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FiChevronsRight
      class={`icon keyboard-arrow ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};
