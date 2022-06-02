import React, {useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {ReactComponent as UploadSvg} from '../../assets/icons/upload.svg';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal';

import styles from './Gallery.module.scss';

function Gallery() {
  const [open, setOpen] = useState(false);

  return  (
    <MainLayout>
      <section className={styles.containerGallery}>
        <h2 className="visually-hidden">Gallery page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Gallery'} />
          <Button
            icon={<UploadSvg />}
            type={'button'}
            size={BtnSize.Medium}
            variants={[BtnVariant.Secondary]}
            element={TypeElement.Button}
            onClick={() => setOpen(true)}
          >
            <span>Upload</span>
          </Button>
        </PageLayout>
      </section>
      {open && (
        <ConfirmModal
          title="Are you sure you want to add to like?"
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      )}
    </MainLayout>
  );
}

export default Gallery;
