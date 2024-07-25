import { AiOutlineAudio, AiOutlineAudioMuted } from 'solid-icons/ai';
import { HiOutlineMoon, HiOutlineSun } from 'solid-icons/hi';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const AudioOn: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <AiOutlineAudioMuted
      size={IconSizeKey[size]}
      class={`icon-audio-on w-auto ${props.classes}`}
    />
  );
};

export const AudioOff: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <AiOutlineAudio
      size={IconSizeKey[size]}
      class={`icon-audio-on w-auto ${props.classes}`}
    />
  );
};

export const LightMode: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <HiOutlineSun
      size={IconSizeKey[size]}
      class={`icon-audio-off w-auto ${props.classes}`}
    />
  );
};

export const DarkMode: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <HiOutlineMoon
      size={IconSizeKey[size]}
      class={`icon-audio-off w-auto ${props.classes}`}
    />
  );
};
