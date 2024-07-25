import { Button } from '@kobalte/core/button';
import { ParentComponent } from 'solid-js';
import { DialogButtonProps } from './dialog.types';

const DialogButton: ParentComponent<DialogButtonProps> = (props) => {
  return (
    <Button class={'dialog__trigger--button'} onClick={() => props.handleOpen()}>
      {props.children}
    </Button>
  );
};

export default DialogButton;
