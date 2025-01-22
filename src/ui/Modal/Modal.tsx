import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalProps } from '@/ui/Modal/Modal.types';

const Modal: FC<ModalProps> = ({ children, open, ...props }) => {
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'auto';

      return;
    }

    document.body.style.overflow = 'hidden';
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(<div {...props}>{children}</div>, document.body);
};

export default Modal;
