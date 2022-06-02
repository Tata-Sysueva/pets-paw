import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import HeaderPages from '../../components/HeaderPages/HeaderPages';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {breedInfoArray}  from '../../mocks/BreedInfo';

import styles from './BreedCard.module.scss';
import Slider from '../../components/Slider/Slider';
import BreedInfo from '../../components/BreedInfo/BreedInfo';

function BreedCard() {
  return  (
    <MainLayout>
      <section className={styles.container}>
        <Navigation />
        <PageLayout >
          <HeaderPages namePage={'Breed'} >
            <Button
              size={BtnSize.Large}
              variants={[BtnVariant.Secondary]}
              element={TypeElement.Button}
              className={styles.active}
            >
              <span>
                <span className="visually-hidden" >Breed ID</span>
                {breedInfoArray[0].id}
              </span>
            </Button>
          </HeaderPages>
          <div className={styles.sliderContainer}>
            <Slider infoBreed={breedInfoArray[0]}/>
          </div>

          <BreedInfo infoBreed={breedInfoArray[0]} />

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default BreedCard;
