import React, {ReactNode, useEffect} from 'react';
import Home from '../../pages/Home/Home';
import {getBreeds} from '../../api/requests';

import styles from './MainLayout.module.scss';

function MainLayout({ children}: {children: ReactNode}) {
  // удалить
  useEffect(() => {
    const fetchData = async () => {
      const breeds = await getBreeds();
      console.log({breeds})
    }
    fetchData();
  }, [])

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
