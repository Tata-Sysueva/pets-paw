import React from 'react';
import Modal from '../../shared/Modal/Modal';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

interface UploadPhotoModalProps {
  onClose: () => void,
}

function UploadPhotoModal({onClose}: UploadPhotoModalProps) {
  return (
    <Modal onClose={onClose} className={'uploadPhoto'}>
      <UploadPhoto />
    </Modal>
  );
}

export default UploadPhotoModal;
