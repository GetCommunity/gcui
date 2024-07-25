import {
  FaRegularCircleXmark,
  FaSolidArrowDown,
  FaSolidArrowLeft,
  FaSolidArrowRight,
  FaSolidArrowUp,
  FaSolidCheck,
  FaSolidChevronDown,
  FaSolidChevronUp,
  FaSolidUpload,
} from 'solid-icons/fa';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const FileUploadIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidUpload
      class={`icon file-upload-icon ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const CaretSortIcon: Component<TIconProps> = (props) => {
  return (
    <div class={`flex h-full flex-1 flex-col ${props.classes}`}>
      <FaSolidChevronUp class={`relative h-1/2 w-auto`} />
      <FaSolidChevronDown class={`relative h-1/2 w-auto`} />
    </div>
  );
};

export const CheckIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidCheck class={`h-auto w-auto  ${props.classes}`} size={IconSizeKey[size]} />
  );
};

export const CrossIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaRegularCircleXmark
      class={`relative h-5 ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const ArrowUpIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidArrowUp class={`h-auto w-auto ${props.classes}`} size={IconSizeKey[size]} />
  );
};

export const ArrowDownIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidArrowDown
      class={`h-auto w-auto ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const ArrowRightIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidArrowRight
      class={`h-auto w-auto ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const ArrowLeftIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidArrowLeft
      class={`h-auto w-auto ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};
