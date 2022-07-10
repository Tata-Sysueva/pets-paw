import React, { ReactNode } from 'react';
import Home from '../../pages/Home/Home';

import styles from './MainLayout.module.scss';

function MainLayout({ children}: {children: ReactNode}) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className='visually-hidden'>PetsPaw site</h1>
        <Home />
        <div className={styles.wrapper}>
          { children }
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
