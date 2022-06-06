import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import VotingImage from '../../components/VotingImage/VotingImage';
import {breedInfoArray as breeds}  from '../../mocks/BreedInfo';

import styles from './Voting.module.scss';
import UserActionList from '../../components/UserActionList/UserActionList';

function Voting() {
  const breedPicture = breeds[0].image[0];

  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Voting page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Voting'} />
          <VotingImage picture={breedPicture}/>
          <UserActionList />
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Voting;
