import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import HeaderPages from '../../components/HeaderPages/HeaderPages';

import styles from './Voting.module.scss';

function Voting() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Voting page</h2>
        <Navigation />
        <PageLayout >
          <HeaderPages namePage={'Voting'} />
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Voting;
