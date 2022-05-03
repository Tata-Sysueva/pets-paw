import React from 'react';
import Home from '../../pages/Home/Home';
import Promo from '../../pages/Promo/Promo';

import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className='visually-hidden'>PetsPaw site</h1>
        <Home />
        <div className={styles.wrapper}>
          <Promo />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
