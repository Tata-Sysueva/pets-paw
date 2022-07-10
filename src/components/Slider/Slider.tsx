import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/scss';
import { BreedInfoMocks} from '../../types/types';

import styles from './Slider.module.scss';

interface SliderProps {
  infoBreed: BreedInfoMocks,
}

function Slider({ infoBreed }: SliderProps) {
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
      {infoBreed.image
        .map(({url}) => (
          <SwiperSlide key={Math.floor(Math.random() * (250 - 1 + 1)) + 1}>
            <img
              className={styles.image}
              src={url}
              alt={infoBreed.name}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Slider;
