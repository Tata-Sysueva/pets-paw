import React, {ReactNode} from 'react';
import Home from '../../pages/Home/Home';
import styles from './MainLayout.module.scss';
import {useTheme} from '../../ThemeContext';
import classNames from 'classnames';
import Promo from '../../pages/Promo/Promo';

function MainLayout({ children }: { children?: ReactNode}) {
  const lightTheme = useTheme();

  const MainClasses = classNames(
    styles.page,
    {[styles.lightMain]: lightTheme},
    {[styles.darkMain]: !lightTheme},
  );

  return (
    <main className={MainClasses}>
      <div className={styles.container}>
        <h1 className={styles.visuallyHidden}>PetsPaw site</h1>
        <Home />
        <div className={styles.wrapper}>
          <Promo />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
