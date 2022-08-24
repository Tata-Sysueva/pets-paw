import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/scss';
import { AllPictures } from '../../types/types';

import styles from './Slider.module.scss';

interface SliderProps {
  picturesBreed: AllPictures[],
}

function Slider({ picturesBreed }: SliderProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      pagination={{
        clickable: true,
        horizontalClass: styles.swiperPaginationHorizontal,
        bulletActiveClass: styles.swiperBulletActive,
        bulletClass: styles.swiperBullet,
      }}
    >
      {picturesBreed && picturesBreed
        .map(({url, id, breeds}) => (
          <SwiperSlide key={id}>
            <img
              className={styles.image}
              src={url}
              alt={breeds[0].name}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Slider;
