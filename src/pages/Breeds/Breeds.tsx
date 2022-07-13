import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';

import styles from './Breeds.module.scss';
import {BreedInfo} from '../../types/types';
import {getBreeds} from '../../api/requests';
import SortBreeds from '../../components/SortBreeds/SortBreeds';

function Breeds() {
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds();
      setBreeds(data);
    };
    fetchData();
  }, []);

  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Breeds page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Breeds'} >
            <SortBreeds breedsInfo={breeds}/>
          </PageHeader>
          <ImagesLayout picturesArray={breeds}/>
        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Breeds;
