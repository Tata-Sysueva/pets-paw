import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';

import styles from './Promo.module.scss';

function Promo() {
  return  (
    <MainLayout >
      <div className={styles.wrapper}>
        <h2 className="visually-hidden">Promo</h2>
        <div className={styles.box}/>
      </div>
    </MainLayout>
  );
}

export default Promo;
