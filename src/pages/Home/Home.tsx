import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <section className={styles.homeSection}>
      <h2 className='visually-hidden'>Home page</h2>
      <Header />
      <Welcome />
      <Menu />
    </section>
  );
}

export default Home;
