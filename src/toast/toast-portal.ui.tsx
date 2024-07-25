import { Toast as KBToast, ToastSwipeDirection } from '@kobalte/core/toast';
import { Portal } from 'solid-js/web';
import { ToastPortalProps } from './toast.types';

export default function ToastPortal(props: ToastPortalProps) {
  const duration = () => props.duration ?? 5000;
  const placement = () => props.placement ?? 'bottom-right';
  const limit = () => props.limit ?? 5;
  const pauseOnPageIdle = () => props.pauseOnPageIdle ?? true;
  const pauseOnInteraction = () => props.pauseOnInteraction ?? true;
  const placementKey = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };
  const swipeDirection: Record<string, ToastSwipeDirection> = {
    'top-left': 'left',
    'top-right': 'right',
    'bottom-left': 'left',
    'bottom-right': 'right',
  };
  return (
    <Portal>
      <KBToast.Region
        limit={limit()}
        duration={duration()}
        pauseOnPageIdle={pauseOnPageIdle()}
        pauseOnInteraction={pauseOnInteraction()}
        swipeDirection={swipeDirection[placement()]}
      >
        <KBToast.List class={`toast__list ${placementKey[placement()]}`} />
      </KBToast.Region>
    </Portal>
  );
}
