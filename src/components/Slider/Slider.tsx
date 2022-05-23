import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/scss';
import styles from './Slider.module.scss';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import {BreedInfo} from '../../mocks/BreedInfo';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

interface SliderProps {
  infoBreed: BreedInfo,
}

function Slider({ infoBreed }: SliderProps) {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      horizontalClass: styles.swiperPaginationHorizontal,
      bulletActiveClass: styles.swiperBulletActive,
      bulletClass: styles.swiperBullet,
    },
  };

  return (
    <Swiper {...params} >
      {infoBreed.image
        .map(({url}) => (
          <div key={Math.floor(Math.random() * (250 - 1 + 1)) + 1}>
            <img
              className={styles.image}
              src={url}
              alt={infoBreed.name}
            />
          </div>
        ))}
    </Swiper>
  );
}

export default Slider;
