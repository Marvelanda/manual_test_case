import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}
