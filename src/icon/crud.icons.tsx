import { AiOutlineEye, AiOutlinePlusCircle } from 'solid-icons/ai';
import { FaRegularTrashCan, FaSolidPencil, FaSolidRotate } from 'solid-icons/fa';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const EditIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidPencil size={IconSizeKey[size]} class={`icon edit-icon ${props.classes}`} />
  );
};

export const CreateIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <AiOutlinePlusCircle
      size={IconSizeKey[size]}
      class={`icon create-icon ${props.classes}`}
    />
  );
};

export const ViewIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <AiOutlineEye size={IconSizeKey[size]} class={`icon view-icon ${props.classes}`} />
  );
};

export const DeleteIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaRegularTrashCan
      size={IconSizeKey[size]}
      class={`icon delete-icon ${props.classes}`}
    />
  );
};

export const ProcessIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <FaSolidRotate
      size={IconSizeKey[size]}
      class={`icon process-icon ${props.classes}`}
    />
  );
};
