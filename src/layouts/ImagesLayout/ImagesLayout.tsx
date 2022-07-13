import React from 'react';
import {BreedInfo} from '../../types/types';
import ImageBreedPage from '../../components/ImageBreed/ImageBreed';

import styles from './ImagesLayout.module.scss';


const IMG_COUNT_PER_STEP = 20;

interface ImagesLayoutProps {
  picturesArray: BreedInfo[],
}

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
        {picturesArray
          .slice(0, 10)
          .map((picture) => <ImageBreedPage key={picture.id} picture={picture}/>)}
      </div>
      {IMG_COUNT_PER_STEP > 10 &&
        <div className={styles.container}>
          {picturesArray
            .slice(11, 20)
            .map((picture) => <ImageBreedPage key={picture.id} picture={picture}/>)}
        </div>}
    </div>
  );
}

export default ImagesLayout;
