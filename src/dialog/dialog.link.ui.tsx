import { ParentComponent } from 'solid-js';
import { DialogLinkProps } from './dialog.types';

const DialogLink: ParentComponent<DialogLinkProps> = (props) => {
  const clickAction = () => {
    props.handleOpen();
  };
  return (
    <a class={`dialog__trigger--link`} onClick={clickAction}>
      {props.children}
    </a>
  );
};

export default DialogLink;
