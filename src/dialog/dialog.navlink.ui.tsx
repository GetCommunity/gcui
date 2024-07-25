import { ParentComponent } from 'solid-js';
import { DialogLinkProps } from './dialog.types';

const DialogNavLink: ParentComponent<DialogLinkProps> = (props) => {
  return (
    <a onClick={props.handleOpen} class='dialog__trigger--navlink'>
      {props.children}
    </a>
  );
};

export default DialogNavLink;
