import React, {ReactNode} from 'react';

import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import Button from '../../shared/Button/Button';
import {ReactComponent as CloseSvg} from '../../assets/icons/close.svg';

import styles from './Modal.module.scss';
import cn from 'classnames';

interface ModalProps {
  className: string,
  children: ReactNode,
  callback: () => void,
}

function Modal({className, children, callback}: ModalProps) {
  const mainClasses = cn(
    styles.modal,
    styles[className],
  );

  const modalShowClasses = cn(
    styles.modalOverflow,
  );

  return (
    <>
      <div className={mainClasses}>
        <PageWrapper isModal>
          <div className={styles.buttonWrapper}>
            <Button
              icon={<CloseSvg />}
              type={'button'}
              size={BtnSize.Square}
              variants={[BtnVariant.Primary]}
              element={TypeElement.Button}
              onClick={callback}
            >
              <span className="visually-hidden">Close</span>
            </Button>
          </div>
          {children}
        </PageWrapper>
      </div>
      <div className={modalShowClasses} />
    </>
  );
}

export default Modal;
