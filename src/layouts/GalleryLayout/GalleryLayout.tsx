import React from 'react';
import {AllPictures} from '../../types/types';

import styles from './GalleryLayout.module.scss';
import ImageGallery from '../../components/ImageGallery/ImageGallery';


const IMG_COUNT_PER_STEP = 20;

interface GalleryLayoutProps {
  picturesArray: AllPictures[],
}

function GalleryLayout({ picturesArray }: GalleryLayoutProps) {
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
          .map((picture) => <ImageGallery key={picture.id} picture={picture}/>)}
      </div>
      {IMG_COUNT_PER_STEP > 10 &&
        <div className={styles.container}>
          {picturesArray
            .slice(11, 20)
            .map((picture) => <ImageGallery key={picture.id} picture={picture}/>)}
        </div>}
    </div>
  );
}

export default GalleryLayout;
