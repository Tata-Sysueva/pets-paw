import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import NavMenu from '../../components/NavMenu/NavMenu';
import Header from '../../components/Header/Header';

import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <section className={styles.homeSection}>
      <h2 className='visually-hidden'>Home page</h2>
      <Header />
      <Welcome />
      <NavMenu />
    </section>
  );
}

export default Home;
