import React from 'react';
import {AllPictures, BreedInfo} from '../../types/types';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ImageBreed from '../../components/ImageBreed/ImageBreed';

import styles from './ImagesLayout.module.scss';

const IMG_COUNT_PER_STEP = 20;

interface ImagesLayoutProps {
  picturesArray: BreedInfo[] | AllPictures[],
}

function ImagesLayout( { picturesArray }: ImagesLayoutProps) {
  const getImageComponent = (image: BreedInfo | AllPictures) => 'width' in image
    ? <ImageGallery key={image.id} picture={image}/>
    : <ImageBreed key={image.id} picture={image}/>;

  return (
    <div className={styles.imagesWrapper}>
      <div className={styles.container}>
        {picturesArray
          .slice(0, 10)
          .map((picture) => getImageComponent(picture))}
      </div>
      {IMG_COUNT_PER_STEP > 10 &&
        <div className={styles.container}>
          {picturesArray
            .slice(11, 20)
            .map((picture) => getImageComponent(picture))}
        </div>}
    </div>
  );
}

export default ImagesLayout;
