import React from 'react';
import {AllPictures} from '../../types/types';
import Button from '../../shared/Button/Button';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';

import styles from './ImageGallery.module.scss';

interface ImageGalleryProps {
  picture: AllPictures,
}

function ImageGallery({ picture }: ImageGalleryProps) {
  const { id, url } = picture;

  return (
    <div
      className={styles.imageContainer}
      key={id}
    >
      <img
        className={styles.image}
        src={url}
        alt='Dog'
      />
      <div className={styles.imageHover}>
        <Button
          className={styles.buttonReset}
          icon={<HeartSvg />}
          size={BtnSize.Square}
          variants={[BtnVariant.Primary]}
          type={'submit'}
          element={TypeElement.Button}
        >
          <span className="visually-hidden">Change status of favorites</span>
        </Button>

      </div>
    </div>
  );
}

export default ImageGallery;
