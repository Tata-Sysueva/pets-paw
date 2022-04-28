import React from 'react';
import styles from './Home.module.scss';
import Welcome from '../../components/Welcome/Welcome';
import NavMenu from '../../components/NavMenu/NavMenu';
import Header from '../../components/Header/Header';

function Home(): JSX.Element {
  return (
    <section className={styles.homeSection}>
      <h2 className={styles.visuallyHidden}>Home page</h2>
      <Header />
      <Welcome />
      <NavMenu />
    </section>
  );
}

export default Home;
