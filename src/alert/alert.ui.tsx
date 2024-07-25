import { Alert } from '@kobalte/core/alert';
import { Show, children, createSignal, onCleanup, onMount } from 'solid-js';
import { CloseIcon } from '../icon';
import { AlertMessageProps } from './alert.types';

export default function AlertMessage(props: AlertMessageProps) {
  let alertElm: HTMLElement | null = null;
  let icon = () => <CloseIcon />;
  if (props.closeIcon !== undefined) {
    icon = children(() => props.closeIcon as any);
  }
  const closable = () => (props.closeable ? 'true' : 'false');
  const color = props.color ?? 'default';
  const alertColorKey = {
    default:
      'border-blue-200 bg-blue-100 text-blue-600 focus:outline-blue-600/40 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600',
    info: 'border-blue-200 bg-blue-100 text-blue-600 focus:outline-blue-600/40 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600',
    error:
      'border-red-200 bg-red-100 text-red-600 focus:outline-red-600/40 dark:bg-red-900 dark:text-red-200 dark:border-red-700',
    warning:
      'border-yellow-200 bg-yellow-100 text-yellow-700 focus:outline-yellow-600/40 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-600',
    success:
      'border-emerald-200 bg-emerald-100 text-emerald-700 focus:outline-emerald-600/40 dark:bg-emerald-900 dark:text-emerald-300 dark:border-emerald-700',
    light:
      'border-black-200 bg-black-100 text-black-500 focus:outline-black-600/40 dark:bg-black-100 dark:text-black-200 dark:border-black-700',
    dark: 'border-gray-200 bg-gray-100 text-gray-800 focus:outline-gray-600/40 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',
  };
  const alertHoverAction = {
    true: 'hover:bg-opacity-90 hover:cursor-pointer',
    false: '',
  };
  const [tKey, setTKey] = createSignal<NodeJS.Timeout | undefined>(undefined);
  const close = () => {
    if (props.onClose) props.onClose();
    alertElm?.remove();
  };
  const triggerTimeout = () => {
    let tKey = setTimeout(() => {
      close();
    }, props.timeout);
    setTKey(tKey);
  };
  onMount(() =>
    props.timeout
      ? props.triggerTimeoutOnClick
        ? alertElm?.addEventListener('click', triggerTimeout)
        : triggerTimeout()
      : undefined
  );
  onCleanup(() => (tKey() ? clearTimeout(tKey()) : undefined));
  return (
    <Alert
      class={`alert ${alertColorKey[color]} ${alertHoverAction[closable()]}`}
      ref={(elm: HTMLElement) => (alertElm = elm)}
      tabindex={props.closeable ? 0 : undefined}
      onClick={() => {
        alertElm?.focus();
      }}
    >
      {props.message}
      <Show when={props.closeable}>
        <button type='button' class='alert__close' aria-label='Close' onClick={close}>
          {icon()}
        </button>
      </Show>
    </Alert>
  );
}
