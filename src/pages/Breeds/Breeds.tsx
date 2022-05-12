import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constans';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import HeaderPages from '../../components/HeaderPages/HeaderPages';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';

import styles from './Breeds.module.scss';


function Breeds() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Breeds page</h2>
        <Navigation />
        <PageWrapper >
          <HeaderPages namePage={'Breeds'} />
          <Link to={`${AppRoute.Breeds}/${1}`}>Breed Card</Link>
        </PageWrapper>
      </section>
    </MainLayout>
  );
}

export default Breeds;
