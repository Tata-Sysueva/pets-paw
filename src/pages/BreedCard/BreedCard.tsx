import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {breedInfoArray}  from '../../mocks/BreedInfo';
import Slider from '../../components/Slider/Slider';
import BreedInfo from '../../components/BreedInfo/BreedInfo';

import styles from './BreedCard.module.scss';
import {useParams} from 'react-router-dom';

function BreedCard() {
  const { id: breedId } = useParams<{ id:string}>();
  const cardBreedId = Number(breedId);

  return  (
    <MainLayout>
      <section className={styles.container}>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Breed'} >
            <Button
              size={BtnSize.Large}
              variants={[BtnVariant.Secondary]}
              element={TypeElement.Button}
              className={styles.active}
            >
              <span>
                <span className="visually-hidden">Breed ID</span>
                {cardBreedId}
              </span>
            </Button>
          </PageHeader>
          <div className={styles.sliderContainer}>
            <Slider infoBreed={breedInfoArray[0]}/>
          </div>

          <BreedInfo breed={breedInfoArray[0]} />

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default BreedCard;
