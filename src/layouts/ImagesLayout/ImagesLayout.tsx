import cn from 'classnames';

import styles from './ImagesLayout.module.scss';
import {AppRoute} from '../../constants/constans';
import {Link} from 'react-router-dom';
import React from 'react';

function ImagesLayout() {
  const mainImagesClasses = cn(
    styles.containerImages,
  );

  const imagesClasses1 = cn(
    mainImagesClasses,
    styles.containerImages1,
  );

  const imagesClasses2 = cn(
    mainImagesClasses,
    styles.containerImages2,
  );

  return (
    <div className={styles.imagesWrapper}>
      <div className={imagesClasses1}>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
      </div>
      <div className={imagesClasses2}>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
      </div>
      <div className={imagesClasses1}>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
        <Link
          to={`${AppRoute.Breeds}/${1}`}
          className={styles.images}
        >
          <img src="" alt=""/>
        </Link>
      </div>
    </div>
  );
}

export default ImagesLayout;
