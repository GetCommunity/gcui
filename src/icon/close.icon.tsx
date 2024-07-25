import { FaSolidXmark } from 'solid-icons/fa';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const CloseIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidXmark size={IconSizeKey[size]} class={`icon icon-close ${props.classes}`} />
  );
};
