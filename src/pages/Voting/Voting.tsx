import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import VotingImage from '../../components/VotingImage/VotingImage';
import UserActionList from '../../components/UserActionList/UserActionList';
import {getImageForVoting} from '../../api/requests';
import {Picture} from '../../types/types';
import VotingControls from '../../components/VotingControls/VotingControls';

import styles from './Voting.module.scss';

function Voting() {
  const [picture, setPicture] = useState<Picture>({} as Picture);
  const [isLoaded, setLoad] = useState(false);
  const [changeVote, setChangeVote] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      const data = await getImageForVoting();
      setPicture(data[0]);
      setLoad(true);
    };
    fetchImage();
  }, []);

  const handleButtonClick = () => {
    setChangeVote(!changeVote);
  };

  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Voting page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Voting'} />
          <VotingImage picture={picture} isLoaded={isLoaded}/>
          <VotingControls
            imageId={picture.id}
            isLoaded={!isLoaded}
            onClickButton={handleButtonClick}
          />
          <UserActionList changeVote={changeVote} />
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Voting;
