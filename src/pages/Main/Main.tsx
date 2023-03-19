import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

import styles from './Main.module.scss';
import SingIn from '../SingIn/SingIn';

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
  let isAuth;
  return (
    <section className={styles.mainSection}>
      {isAuth ? <Home /> : <SingIn />}
    </section>
  );
}

export default Main;
