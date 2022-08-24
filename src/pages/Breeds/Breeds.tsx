import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';
import {BreedInfo} from '../../types/types';
import {getBreeds} from '../../api/requests';
import SortBreeds from '../../components/SortBreeds/SortBreeds';
import {SingleValue} from 'react-select';

import styles from './Breeds.module.scss';
import {SizeImage} from '../../constants/constans';
import Spinner from '../../components/Spinner/Spinner';

type Filter = {
  limit: undefined | number,
  size: string,
}

function Breeds() {
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);
  const [filter, setFilter] = useState<Filter>({
    limit: 10,
    size: SizeImage.Med,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds(filter);
      setBreeds(data);
    };
    fetchData();
  }, [filter]);

  const handleLimitButtonClick = (option: SingleValue<{ value: undefined | number; label: string; }>) => {
    setFilter((prev) => ({ ...prev, limit: option?.value }));
  };

  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Breeds page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Breeds'} >
            <SortBreeds onLimitButtonClick={handleLimitButtonClick}/>
          </PageHeader>

          { breeds.length <= 0 ? <Spinner /> : <ImagesLayout picturesArray={breeds}/> }

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Breeds;
