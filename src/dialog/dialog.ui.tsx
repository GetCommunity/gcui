import { Dialog as KBDialog } from '@kobalte/core/dialog';
import { Match, ParentComponent, Show, Switch, children, lazy } from 'solid-js';
import { Button } from '../button';
import { CloseIcon } from '../icon';
import { DialogProps } from './dialog.types';

const DialogButton = lazy(() => import('./dialog.button.ui'));
const DialogLink = lazy(() => import('./dialog.link.ui'));
const DialogNavLink = lazy(() => import('./dialog.navlink.ui'));

const Dialog: ParentComponent<DialogProps> = (props) => {
  const showFooterActions = (): boolean => {
    // check if the props.footerActions is defined
    // return true if not undefined, false otherwise
    return props.footerActions ? true : false;
  };
  const dialogTrigger = children(() => props.triggerElm);
  const footerBody = children(() => props.children);
  const footerActions = children(() => props.footerActions);
  return (
    <KBDialog open={props.open()} onOpenChange={props.handleOpen}>
      <KBDialog.Trigger class='dialog__trigger'>
        <Switch>
          <Match when={props.triggerType === 'jsx'}>{dialogTrigger()}</Match>
          <Match when={props.triggerType === 'button'}>
            <DialogButton handleOpen={props.handleOpen} handleClose={props.handleClose}>
              {dialogTrigger()}
            </DialogButton>
          </Match>
          <Match when={props.triggerType === 'link'}>
            <DialogLink handleOpen={props.handleOpen} handleClose={props.handleClose}>
              {dialogTrigger()}
            </DialogLink>
          </Match>
          <Match when={props.triggerType === 'nav'}>
            <DialogNavLink
              handleOpen={props.handleOpen}
              handleClose={props.handleClose}
            >
              {dialogTrigger()}
            </DialogNavLink>
          </Match>
        </Switch>
      </KBDialog.Trigger>
      <KBDialog.Portal>
        <KBDialog.Overlay class='dialog__overlay' />
        <div class='dialog__positioner'>
          <KBDialog.Content
            // onEscapeKeyDown={props.handleClose}
            onPointerDownOutside={props.handleClose}
            // onFocusOutside={props.handleClose}
            // onInteractOutside={props.handleClose}
            class='dialog__content'
          >
            <div class='dialog__header'>
              <KBDialog.Title class='dialog__title'>{props.title}</KBDialog.Title>
              <KBDialog.CloseButton
                class='dialog__close-button'
                onClick={props.handleClose}
              >
                <CloseIcon />
              </KBDialog.CloseButton>
            </div>
            <Show when={props.description}>
              <KBDialog.Description class='dialog__description'>
                {props.description}
              </KBDialog.Description>
            </Show>
            <div class='dialog__body'>{footerBody()}</div>
            <div class='dialog__footer'>
              <Show
                when={showFooterActions()}
                fallback={
                  <Button styleType='outline' color='error' onClick={props.handleClose}>
                    Close
                  </Button>
                }
              >
                {footerActions()}
              </Show>
            </div>
          </KBDialog.Content>
        </div>
      </KBDialog.Portal>
    </KBDialog>
  );
};

export default Dialog;
