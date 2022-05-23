import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import HeaderPages from '../../components/HeaderPages/HeaderPages';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';
import {breedInfoArray as pictures}  from '../../mocks/BreedInfo';

import styles from './Breeds.module.scss';

function Breeds() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Breeds page</h2>
        <Navigation />
        <PageLayout >
          <HeaderPages namePage={'Breeds'} />
          <ImagesLayout picturesArray={pictures}/>
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Breeds;
