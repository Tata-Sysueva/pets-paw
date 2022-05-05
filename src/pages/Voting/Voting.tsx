import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';

import styles from './Voting.module.scss';

function Voting() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <Navigation />
        <h2>Voting</h2>
      </section>
    </MainLayout>
  );
}

export default Voting;
