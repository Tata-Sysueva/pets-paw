import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';

import styles from './Gallery.module.scss';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import HeaderPages from '../../components/HeaderPages/HeaderPages';

function Gallery() {
  return  (
    <MainLayout>
      <section className={styles.container}>
        <h2 className="visually-hidden">Gallery page</h2>
        <Navigation />
        <PageWrapper >
          <HeaderPages namePage={'Gallery'} />
        </PageWrapper>
      </section>
    </MainLayout>
  );
}

export default Gallery;
