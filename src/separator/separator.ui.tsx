import { Separator as KBSeparator } from '@kobalte/core/separator';
import { createMemo } from 'solid-js';
import { SeparatorProps } from './separator.types';

export default function Separator(props: SeparatorProps) {
  const size = () => {
    props.size ? `${props.size}%` : '100%';
    if (!props.size || props.size > 100) return '100%';
    if (props.size < 1) return '1%';
    return `${props.size}%`;
  };
  const weight = () => {
    if (!props.weight) return '2px';
    if (props.weight < 1) return '1px';
    if (props.weight > 100) return '100px';
    return `${props.weight}px`;
  };
  const curve = () => (props.rounded ? 'rounded-full' : 'rounded-none');
  const alignPos = () => props.align ?? 'center';
  const alignKey = {
    start: 'separator--align-start',
    center: 'separator--align-center',
    end: 'separator--align-end',
  };
  const sepSizes = createMemo(() => {
    let classprops: any = {};
    if (props.orientation === 'horizontal') {
      classprops.width = size();
      classprops.height = weight();
    } else if (props.orientation === 'vertical') {
      classprops.width = weight();
      classprops.height = size();
    } else {
      classprops.width = size();
      classprops.height = weight();
    }
    return classprops;
  });
  return (
    <KBSeparator
      class={`separator ${curve()} ${alignKey[alignPos()]}`}
      orientation={props.orientation}
      style={sepSizes()}
    />
  );
}
