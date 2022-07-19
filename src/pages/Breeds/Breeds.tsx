import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';
import {BreedInfo} from '../../types/types';
import {getBreeds} from '../../api/requests';
import SortBreeds from '../../components/SortBreeds/SortBreeds';
import {getSelectedBreed, getSortedBreedsName} from '../../utils/utils';
import {SortType} from '../../constants/constans';
import {SingleValue} from 'react-select';
import NoItemFound from '../../components/NoItemFound/NoItemFound';

import styles from './Breeds.module.scss';

function Breeds() {
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);
  const [breedsOptions, setBreedsOptions] = useState<BreedInfo[]>([]);
  const [typeSort, setSortType] = useState<string>(SortType.Asc);
  const [selectedBreed, setSelectedBreed] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds();
      setBreedsOptions(data);
      const sortDataName = getSortedBreedsName(data, typeSort);

      if (selectedBreed) {
        const sortData = getSelectedBreed(sortDataName, selectedBreed);
        setBreeds(sortData);

        //дописать условие, если не найдено ни одной карточки (setState → в зависимости от значения рисовать плашку)
      } else {
        setBreeds(sortDataName);
      }
    };
    fetchData();
  }, [typeSort, selectedBreed]);

  const handleSortButtonClick = (sortType: string) => {
    setSortType(sortType);
  };

  const handleSelectButtonClick = (option: SingleValue<{ value: number; label: string; }>) => {
    setSelectedBreed(option?.value);
  };

  return  (
    <MainLayout >
      <section className={styles.container}>
        <h2 className="visually-hidden">Breeds page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Breeds'} >
            <SortBreeds
              breedsInfo={breedsOptions}
              onSortButtonClick={handleSortButtonClick}
              onSelectButtonClick={handleSelectButtonClick}
            />
          </PageHeader>

          { breeds.length <= 0 ? <NoItemFound /> : <ImagesLayout picturesArray={breeds}/> }

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default Breeds;
