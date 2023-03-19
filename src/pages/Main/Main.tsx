import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

import styles from './Main.module.scss';

function Home(): JSX.Element {
  return (
    <>
      <h2 className='visually-hidden'>Home page</h2>
      <Header />
      <Welcome />
      <Menu />
    </>
  );
}

function Main(): JSX.Element {
  return (
    <section className={styles.mainSection}>
      <Home />
    </section>
  );
}

export default Main;
