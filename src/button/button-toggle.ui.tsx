import { ToggleButton } from '@kobalte/core/toggle-button';
import { children, Show } from 'solid-js';
import { ButtonToggleProps } from './button.types';

export default function ButtonToggle(props: ButtonToggleProps) {
  const size = props.size ?? 'default';
  const color = props.color ?? 'default';
  const styleType = props.styleType ?? 'fill';
  const width = props.fullWidth ? 'w-full' : 'w-auto';
  const curve = props.curve ?? 'default';
  const buttonColorKey = {
    default: {
      fill: 'border border-solid border-gray-200 bg-white text-gray-700 hover:bg-gray-200 focus-visible:outline-gray-200 ui-pressed:bg-white ui-pressed:hover:bg-gray-200',
      outline:
        'border border-solid border-gray-200 bg-white text-gray-700 hover:bg-gray-200 focus-visible:outline-gray-200 ui-pressed:bg-white ui-pressed:hover:bg-gray-200',
    },
    info: {
      fill: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-700 ui-pressed:bg-blue-400 ui-disabled:bg-blue-600/90 ui-disabled:border-blue-600 ui-disabled:text-blue-300',
      outline:
        'border border-solid border-blue-600 bg-white text-blue-600 hover:bg-blue-50 focus-visible:outline-blue-700 ui-pressed:bg-blue-100/90 ui-disabled:bg-white ui-disabled:border-blue-200 ui-disabled:text-blue-200',
    },
    error: {
      fill: 'bg-red-700 text-white hover:bg-red-600 focus-visible:outline-red-700 ui-pressed:bg-red-500 ui-disabled:bg-red-700/90 ui-disabled:border-red-700 ui-disabled:text-red-300',
      outline:
        'border border-solid border-red-600 bg-white text-red-600 hover:bg-red-50 focus-visible:outline-red-700 ui-pressed:bg-red-100/90 ui-disabled:bg-white ui-disabled:border-red-300 ui-disabled:text-red-300',
    },
    warning: {
      fill: 'bg-yellow-500 text-white hover:bg-yellow-400 focus-visible:outline-yellow-500 ui-pressed:bg-yellow-400/90 ui-disabled:bg-yellow-500/85 ui-disabled:border-yellow-500 ui-disabled:text-yellow-100',
      outline:
        'border border-solid border-yellow-500 bg-white text-yellow-500 hover:bg-yellow-50 focus-visible:outline-yellow-500 ui-pressed:bg-yellow-100/90 ui-disabled:bg-white ui-disabled:border-yellow-300 ui-disabled:text-yellow-300',
    },
    success: {
      fill: 'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600 ui-pressed:bg-green-400 ui-disabled:bg-green-600/90 ui-disabled:border-green-600 ui-disabled:text-green-300',
      outline:
        'border border-solid border-green-600 bg-white text-green-600 hover:bg-green-50 focus-visible:outline-green-600 ui-pressed:bg-green-100/90 ui-disabled:bg-white ui-disabled:border-green-600/30 ui-disabled:text-green-600/50',
    },
    light: {
      fill: 'border border-solid border-gray-400 bg-gray-50 text-gray-700 hover:bg-gray-200 focus-visible:outline-gray-200 ui-pressed:bg-white ui-disabled:bg-gray-100 ui-disabled:border-gray-200 ui-disabled:text-gray-400',
      outline:
        'border border-solid border-gray-400 bg-white text-gray-700 hover:bg-gray-100 focus-visible:outline-gray-200 ui-pressed:bg-white ui-disabled:bg-gray-50 ui-disabled:border-gray-200 ui-disabled:text-gray-400',
    },
    dark: {
      fill: 'border border-solid border-gray-700 bg-gray-900 text-gray-50 hover:border-gray-800 hover:bg-gray-700 hover:text-white focus-visible:outline-gray-700 ui-pressed:bg-gray-600 ui-disabled:bg-gray-700 ui-disabled:border-gray-800 ui-disabled:text-gray-300',
      outline:
        'border border-solid border-gray-700 bg-white text-gray-700 hover:bg-gray-700 hover:text-white focus-visible:outline-gray-700 ui-pressed:bg-gray-500 ui-disabled:bg-white ui-disabled:border-gray-200 ui-disabled:text-gray-400',
    },
  };
  const buttonEdgeCurve = {
    default: 'rounded',
    small: 'rounded',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-full',
    none: 'rounded-none',
  };
  const buttonSizeKey = {
    default: 'p-3',
    small: 'p-2 text-sm',
    medium: 'p-4 text-lg',
    large: 'p-5 text-xl',
  };
  const iconInactive = children(() => props.iconInactive);
  const iconActive = children(() => props.iconActive);
  return (
    <ToggleButton
      class={`button toggle-button ${width} ${buttonSizeKey[size]} ${buttonEdgeCurve[curve]} ${buttonColorKey[color][styleType]}`}
      aria-label={props.label}
      tabIndex={props.tabIndex ? 0 : undefined}
      defaultPressed={props.defaultPressed}
      pressed={props.pressed}
      onChange={props.onPressed}
    >
      {(state) => (
        <Show when={state.pressed()} fallback={iconInactive()}>
          {iconActive()}
        </Show>
      )}
    </ToggleButton>
  );
}
