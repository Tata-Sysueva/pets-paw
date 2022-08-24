import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../shared/Button/Button';
import { BtnSize, BtnVariant, TypeElement } from '../../constants/constans';
import Slider from '../../components/Slider/Slider';
import BreedInfo from '../../components/BreedInfo/BreedInfo';
import { useParams } from 'react-router-dom';
import {getImageForBreedCard } from '../../api/requests';
import {AllPictures} from '../../types/types';

import styles from './BreedCard.module.scss';

function BreedCard() {
  const [pictures, setPictures] = useState<AllPictures[]>([]);

  const { id: breedId } = useParams<{ id:string}>();
  const cardBreedId = Number(breedId);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getImageForBreedCard(cardBreedId);
      setPictures(data);
    };
    fetchPhotos();
  }, [cardBreedId]);

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
            <Slider picturesBreed={pictures}/>
          </div>

          <BreedInfo infoBreed={pictures[0]}/>

        </PageLayout>
      </section>
    </MainLayout>
  );
}

export default BreedCard;
