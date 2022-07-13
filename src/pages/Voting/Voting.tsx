import React, {useCallback, useEffect, useMemo, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import VotingImage from '../../components/VotingImage/VotingImage';
import VotingActionList from '../../components/VotingActionList/VotingActionList';
import {getFavorites, getImageForVoting, getVotes} from '../../api/requests';
import {Favorites, Picture, Votes} from '../../types/types';
import VotingControls from '../../components/VotingControls/VotingControls';

import styles from './Voting.module.scss';
import dayjs from 'dayjs';

function Voting() {
  const [picture, setPicture] = useState<Picture>({} as Picture);
  const [isLoaded, setLoad] = useState(false);
  const [votes, setVotes] = useState<Votes[]>([]);
  const [favorites, setFavorites] = useState<Favorites[]>([]);

  const fetchVotes = useCallback(async () => {
    const data = await getVotes();
    setVotes(data);
  }, []);

  const fetchFavorites = useCallback(async () => {
    const data = await getFavorites();
    setFavorites(data);
  }, []);

  const fetchPhoto = useCallback(async () => {
    const data = await getImageForVoting();
    setPicture(data[0]);
    setLoad(true);
  }, []);

  useEffect(() => {
    fetchPhoto();
    fetchVotes();
    fetchFavorites();
  }, [fetchPhoto, fetchVotes, fetchFavorites]);

  const handleButtonClick = () => {
    fetchVotes();
    fetchPhoto();
    fetchFavorites();
  };

  const userActionData = useMemo(() =>
    [...votes , ...favorites]
      .slice()
      .sort((a,b) => +dayjs(b.createdAt) - +dayjs(a.createdAt)),
  [votes, favorites]);

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
            onClick={handleButtonClick}
            favorites={favorites}
          />
          <VotingActionList votes={userActionData}/>
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Voting;
