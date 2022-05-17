import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../Voting/Voting.module.scss';

function BreedCard() {
  return  (
    <MainLayout>
      <section className={styles.container}>
        <Navigation />
        <h2>BreedCard</h2>
      </section>
    </MainLayout>
  );
}

export default BreedCard;
