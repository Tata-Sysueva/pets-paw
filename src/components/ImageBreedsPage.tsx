import React, {useState} from 'react';
import {BreedInfo} from '../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../constants/constans';

import styles from './ImageBreedPage.module.scss';

function ImageBreedPage({ picture }: {picture: BreedInfo}) {
  const { id, image, name} = picture;
  const [isHover, setHover] = useState(false);

  return (
    <Link
      className={styles.images}
      to={`${AppRoute.Breeds}/${id}`}
      key={id}
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
    >
      <img
        className={styles.image}
        src={image.url}
        alt={name}
      />
      {isHover &&
      <div className={styles.imageHover}>
        <span className={styles.textHover}>{name}</span>
      </div>}
    </Link>
  );
}

export default ImageBreedPage;
