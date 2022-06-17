import React, {ReactNode} from 'react';
import Modal from '../Modal/Modal';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import Button from '../Button/Button';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';

import styles from './FeedbackModal.module.scss';

interface ErrorModalProps {
  onConfirm: () => void,
  title: string | ReactNode,
  confirmText?: string,
  isError: boolean,
}

function FeedbackModal({
  onConfirm,
  title,
  confirmText = 'Ok',
  isError,
}: ErrorModalProps) {
  return (
    <Modal onClose={onConfirm}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.icon}>
          {isError ? <SadnessSvg/> : <SmileSvg />}
        </div>

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
    </Modal>
  );
}

export default FeedbackModal;
