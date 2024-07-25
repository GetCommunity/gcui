import { Image } from '@kobalte/core/image';
import { Component } from 'solid-js';
import { AvatarProps } from './avatar.types';

const AvatarImage: Component<AvatarProps> = (props) => {
  const width = () => {
    if (props.width === undefined) return 80;
    if (props.width < 20) return 20;
    if (props.width > 480) return 480;
    return props.width;
  };
  return (
    <Image class='avatar'>
      <Image.Img
        class={`avatar__img shadow ${props.className}`}
        src={props.src ?? 'https://www.gravatar.com/avatar/?d=identicon'}
        srcset={props.srcset}
        alt={props.alt ?? 'Avatar'}
        style={{ width: `${width()}px` }}
      />
      <Image.Fallback
        class='avatar__img-fallback shadow'
        style={{ width: `${width()}px` }}
      >
        A
      </Image.Fallback>
    </Image>
  );
};

export default AvatarImage;
