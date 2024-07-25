import { OcRocket2 } from 'solid-icons/oc';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const LoadingIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <OcRocket2 class={`icon loading-icon ${props.classes}`} size={IconSizeKey[size]} />
  );
};
