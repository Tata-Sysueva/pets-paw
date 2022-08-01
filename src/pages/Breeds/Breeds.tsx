import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';
import {BreedInfo} from '../../types/types';
import {getBreeds} from '../../api/requests';
import SortBreeds from '../../components/SortBreeds/SortBreeds';
import {SortType} from '../../constants/constans';
import {SingleValue} from 'react-select';
import NoItemFound from '../../components/NoItemFound/NoItemFound';

import styles from './Breeds.module.scss';

type Filter = {
  sort: SortType,
  limit: undefined | number,
  attach_breed: undefined | number,
}

function Breeds() {
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);
  const [filter, setFilter] = useState<Filter>({
    sort: SortType.Asc,
    limit: 10,
    'attach_breed': undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds(filter);
      setBreeds(data);
    };
    fetchData();
  }, [filter]);

  // const handleSortButtonClick = (sortType: SortType) => {
  //   if (sortType === filter.sort) {
  //     return;
  //   }
  //
  //   setFilter((prev) => ({ ...prev, sort: sortType }));
  // };
  //
  // const handleSelectButtonClick = (option: SingleValue<{ value: number; label: string; }>) => {
  //   setFilter((prev) => ({ ...prev, 'attach_breed': option?.value }));
  // };

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

          { breeds.length <= 0 ? <NoItemFound /> : <ImagesLayout picturesArray={breeds}/> }

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Breeds;
