import {
  BytebankIllustration,
} from '../illustration';
import './style.scss';
import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BytebankModalProps } from '../../shared';

export function BytebankModal({
  onClose,
  open,
  children,
  title,
  illustration,
  illustrationSize,
}: BytebankModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="bytebank-modal">
        <button
          onClick={(event) => onClose?.(event, 'backdropClick')}
          className="bytebank-modal-close"
        >
          <CloseIcon />
        </button>
        <Box display="flex" justifyContent="center">
          <BytebankIllustration
            variant={illustrationSize}
            name={illustration}
          />
        </Box>
        <Typography alignContent="center" fontWeight="bold" color="textPrimary">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
}
