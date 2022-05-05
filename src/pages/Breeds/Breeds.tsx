import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constans';
import Navigation from '../../components/Navigation/Navigation';

import styles from './Breeds.module.scss';

function Breeds() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <Navigation />
        <h2>Breeds</h2>
        <Link to={`${AppRoute.Breeds}/${1}`}>Breed Card</Link>
      </section>
    </MainLayout>
  );
}

export default Breeds;
