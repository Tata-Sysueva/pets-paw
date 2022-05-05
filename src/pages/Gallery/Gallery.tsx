import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';

import styles from './Gallery.module.scss';

function Gallery() {
  return  (
    <MainLayout>
      <section className={styles.container}>
        <Navigation />
        <h2>Gallery</h2>
      </section>
    </MainLayout>
  );
}

export default Gallery;
