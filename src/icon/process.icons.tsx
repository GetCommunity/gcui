import { SiPagespeedinsights } from 'solid-icons/si';
import { VsSymbolKeyword } from 'solid-icons/vs';
import { Component } from 'solid-js';
import { IconSizeKey } from './icons.constants';
import { TIconProps } from './icons.types';

export const PageSpeedInsightsIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <SiPagespeedinsights
      class={`icon edit-website-psi ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};

export const KeywordCorpusIcon: Component<TIconProps> = (props) => {
  const size = props.size ?? 'default';
  return (
    <VsSymbolKeyword
      class={`icon edit-website-kwc ${props.classes}`}
      size={IconSizeKey[size]}
    />
  );
};
