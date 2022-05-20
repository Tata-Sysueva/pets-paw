import React, {ReactNode} from 'react';
import {AppRoute} from '../../constants/constans';
import {Link} from 'react-router-dom';
import {BreedInfo} from '../../mocks/Pictures';

import styles from './ImagesLayout.module.scss';

const IMG_COUNT_PER_STEP = 10;

interface ImagesLayoutProps {
  picturesArray: BreedInfo[],
}

const getImages = (images: BreedInfo[], count: number): ReactNode => (
  images
    .slice(0, count)
    .map(({ name, id, url}) => (
      <Link
        className={styles.images}
        to={`${AppRoute.Breeds}/${id}`}
        key={Math.floor(Math.random() * (250 - 1 + 1)) + 1}
      >
        <img
          className={styles.image}
          src={url}
          alt={name}
        />
      </Link>
    ))
);

function ImagesLayout( { picturesArray }: ImagesLayoutProps) {
  // let renderedImgCount = IMG_COUNT_PER_STEP;
  //
  // const imageCount = picturesArray.length;
  // const newRenderedImgCount = Math.min(imageCount, renderedImgCount + IMG_COUNT_PER_STEP);
  // const pictures = picturesArray.slice(renderedImgCount, newRenderedImgCount);
  //
  // renderedImgCount = newRenderedImgCount;


  return (
    <div className={styles.imagesWrapper}>
      <div className={styles.container}>
        {getImages(picturesArray, IMG_COUNT_PER_STEP)}
      </div>
    </div>
  );
}

export default ImagesLayout;
