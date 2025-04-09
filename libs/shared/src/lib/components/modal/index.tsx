import './style.scss';
import { Box, Modal, ModalProps } from '@mui/material';

export function BytebankModal({ onClose, open, children }: ModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="bytebank-modal">{children}</Box>
    </Modal>
  );
}
