import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import HeaderPages from '../../components/HeaderPages/HeaderPages';

import styles from './Voting.module.scss';

function Voting() {
  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Voting page</h2>
        <Navigation />
        <PageWrapper >
          <HeaderPages namePage={'Voting'} />
        </PageWrapper>
      </section>
    </MainLayout>
  );
}

export default Voting;
