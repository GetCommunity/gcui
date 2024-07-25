import { Link as KBLink } from '@kobalte/core/link';
import { children } from 'solid-js';
import { LinkProps } from './link.types';

export default function Link(props: LinkProps) {
  const color = props.color ?? 'default';
  const className = props.className ? props.className : '';
  const weight = () => (props.bold ? 'bold' : 'regular');
  const fontStyle = () => (props.italic ? 'italic' : 'regular');
  const fontLine = () => {
    if (props.underline) {
      return 'underline';
    } else if (props.lineThrough) {
      return 'lineThrough';
    } else if (props.overline) {
      return 'overline';
    }
    return 'default';
  };
  const linkWeightKey = {
    bold: 'font-bold',
    regular: '',
  };
  const linkStyleKey = {
    italic: 'italic',
    regular: '',
  };
  const linkLineKey = {
    default: 'hover:underline ui-disabled:no-underline',
    underline: 'underline',
    lineThrough: 'line-through',
    overline: 'overline',
  };
  const linkColorKey = {
    default: 'text-sky-500 ui-disabled:text-sky-300',
    info: 'text-blue-500 ui-disabled:text-blue-300',
    error: 'text-red-700 ui-disabled:text-red-300',
    warning: 'text-yellow-500 ui-disabled:text-yellow-300',
    success: 'text-green-600 ui-disabled:text-green-600/60',
    light: 'text-gray-500 ui-disabled:text-gray-400/80',
    dark: 'text-black ui-disabled:text-black/50',
  };
  const linkText = children(() => props.children);
  return (
    <KBLink
      href={props.href}
      class={`link ${className} ${linkColorKey[color]} ${linkWeightKey[weight()]} ${linkStyleKey[fontStyle()]} ${linkLineKey[fontLine()]} ui-disabled:cursor-not-allowed`}
      disabled={props.disabled}
    >
      {linkText()}
    </KBLink>
  );
}
