import { Toast as KBToast } from '@kobalte/core/toast';
import { ParentComponent } from 'solid-js';
import { CloseIcon } from '../icon';
import { ToastProps } from './toast.types';

const Toast: ParentComponent<ToastProps> = (props) => {
  const color = () => props.color ?? 'default';
  const size = () => props.size ?? 'default';
  const curve = () => props.curve ?? 'default';
  const progressSize = () => props.progressSize ?? props.size ?? 'default';
  const progressCurve = () => props.progressCurve ?? props.curve ?? 'default';
  const toastColorKey = {
    default:
      'border-gray-200 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700',
    info: 'border-blue-600 bg-white text-blue-600',
    error: 'border-red-600 bg-white text-red-600',
    warning: 'border-yellow-500 bg-white text-yellow-500',
    success: 'border-green-600 bg-white text-green-600',
    light: 'border-gray-400 bg-gray-50 text-gray-700',
    dark: 'border-gray-700 bg-gray-200 text-gray-900',
  };
  const toastEdgeCurve = {
    default: 'rounded',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-2xl',
    none: 'rounded-none',
  };
  const toastSizeKey = {
    default: 'p-3',
    small: 'p-2 text-sm',
    medium: 'p-4 text-lg',
    large: 'p-6 text-xl',
  };
  const progressColorKey = {
    default: 'bg-gray-400 data-[progress=complete]:bg-gray-600',
    info: 'bg-blue-400 data-[progress=complete]:bg-blue-500',
    error: 'bg-red-400 data-[progress=complete]:bg-red-500',
    warning: 'bg-yellow-400 data-[progress=complete]:bg-yellow-500',
    success: 'bg-green-400 data-[progress=complete]:bg-green-500',
    light: 'bg-gray-500 data-[progress=complete]:bg-gray-400',
    dark: 'bg-gray-700 data-[progress=complete]:bg-gray-800',
  };
  const progressEdgeCurve = {
    default: 'rounded',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-full',
    none: 'rounded-none',
  };
  const progressSizeKey = {
    default: 'h-3',
    small: 'h-2',
    medium: 'h-4',
    large: 'h-6',
  };
  return (
    <KBToast
      toastId={props.id}
      class={`toast ${toastSizeKey[size()]} ${toastEdgeCurve[curve()]} ${toastColorKey[color()]}`}
    >
      <div class={`toast__content`}>
        <div>
          <KBToast.Title class={`toast__title`}>{props.label}</KBToast.Title>
          <KBToast.Description class={`toast__description`}>
            {props.children}
          </KBToast.Description>
        </div>
        <KBToast.CloseButton class={`toast__close-button`}>
          <CloseIcon />
        </KBToast.CloseButton>
      </div>
      <KBToast.ProgressTrack
        class={`toast__progress-track ${progressSizeKey[progressSize()]} ${progressEdgeCurve[progressCurve()]}`}
      >
        <KBToast.ProgressFill
          class={`toast__progress-fill ${progressColorKey[color()]} ${progressEdgeCurve[progressCurve()]}`}
        />
      </KBToast.ProgressTrack>
    </KBToast>
  );
};

export default Toast;
