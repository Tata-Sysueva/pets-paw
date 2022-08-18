import React from 'react';
import {BreedInfo} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constans';

import styles from './ImageBreed.module.scss';

function ImageBreed({ picture }: {picture: BreedInfo}) {
  const { id, image, name} = picture;

  return (
    <Link
      className={styles.imageContainer}
      to={`${AppRoute.Breeds}/${id}`}
      key={id}
    >
      <img
        className={styles.image}
        src={image.url}
        alt={name}
      />
      <div className={styles.imageHover}>
        <span className={styles.textHover}>{name}</span>
      </div>
    </Link>
  );
}

export default ImageBreed;
