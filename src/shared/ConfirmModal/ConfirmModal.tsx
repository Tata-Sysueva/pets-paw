import React, {ReactNode} from 'react';
import Modal from '../Modal/Modal';

import styles from './ConfirmModal.module.scss';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import Button from '../Button/Button';

interface ConfirmationModalProps {
  onCancel: () => void,
  onConfirm: () => void,
  title: string | ReactNode,
  confirmText?: string,
  cancelText?: string,
}

function ConfirmModal({
  onCancel,
  onConfirm,
  title,
  confirmText = 'Ok',
  cancelText = 'Cancel'
}: ConfirmationModalProps) {
  return (
    <Modal onClose={onCancel}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.buttons}>
          <Button
            type={'button'}
            size={BtnSize.Medium}
            variants={[BtnVariant.Primary]}
            element={TypeElement.Button}
            onClick={onCancel}
          >
            <span>{cancelText}</span>
          </Button>
          <Button
            type={'button'}
            size={BtnSize.Medium}
            variants={[BtnVariant.Secondary]}
            element={TypeElement.Button}
            onClick={onConfirm}
          >
            <span>{confirmText}</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
