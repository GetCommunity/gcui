import { FaRegularCircleCheck, FaSolidArrowsRotate } from 'solid-icons/fa';
import { HiOutlineCheckBadge, HiOutlineXCircle } from 'solid-icons/hi';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const IsProcessedIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaRegularCircleCheck
      class={`icon text-success isprocessed-icon ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const IsNotProcessedIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidArrowsRotate
      class={`icon text-danger isnotprocessed-icon ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const IsActiveIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <HiOutlineCheckBadge
      class={`icon isactive-icon text-success ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const IsNotActiveIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <HiOutlineXCircle
      class={`icon isnotactive-icon text-danger ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};
