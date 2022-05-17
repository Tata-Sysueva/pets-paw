import React, {useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import HeaderPages from '../../components/HeaderPages/HeaderPages';
import Modal from '../Modal/Modal';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {ReactComponent as UploadSvg} from '../../assets/icons/upload.svg';

import styles from './Gallery.module.scss';

function Gallery() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const onOpenModal = () => {
    setModalVisibility(!isModalVisible);
  };

  const oncloseModal = () => {
    setModalVisibility(!isModalVisible);
  };

  return  (
    <MainLayout>
      <section className={styles.containerGallery}>
        <h2 className="visually-hidden">Gallery page</h2>
        <Navigation />
        <PageWrapper >
          <HeaderPages namePage={'Gallery'} />
          <Button
            icon={<UploadSvg />}
            type={'button'}
            size={BtnSize.Medium}
            variants={[BtnVariant.Secondary]}
            element={TypeElement.Button}
            onClick={onOpenModal}
          >
            <span>Upload</span>
          </Button>
        </PageWrapper>
      </section>
      {isModalVisible && (
        <Modal callback={oncloseModal} className={'uploadPhoto'}>
          <UploadPhoto />
        </Modal>)}
    </MainLayout>
  );
}

export default Gallery;
