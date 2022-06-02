import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';

import styles from './Voting.module.scss';

function Voting() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Voting page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Voting'} />
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Voting;
