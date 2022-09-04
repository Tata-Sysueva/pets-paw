import React from 'react';
import { AllPictures } from '../../types/types';

import styles from './BreedInfo.module.scss';
import Spinner from '../Spinner/Spinner';
import camelcaseKeys from 'camelcase-keys';

interface BreedInfoProps {
  infoBreed: AllPictures,
}

function BreedInfo({ infoBreed }: BreedInfoProps) {
  if (!infoBreed) {
    return <Spinner />;
  }

  const {
    name,
    bredFor,
    temperament,
    height,
    weight,
    lifeSpan
  } = camelcaseKeys(infoBreed.breeds[0]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {name}
      </h3>
      <p className={styles.description}>
        {bredFor}
      </p>
      <dl className={styles.list}>
        <div>
          <dt className={styles.noteTitle}>Temperament:</dt>
          <dd className={styles.note}>{temperament}</dd>
        </div>

        <div>
          <div className={styles.noteWrapper}>
            <dt className={styles.noteTitle}>Height:&nbsp;</dt>
            <dd className={styles.note}>{height.metric} cm at the withers</dd>
          </div>

          <div className={styles.noteWrapper}>
            <dt className={styles.noteTitle}>Weight:&nbsp;</dt>
            <dd className={styles.note}>{weight.metric} kgs</dd>
          </div>

          <div className={styles.noteWrapper}>
            <dt className={styles.noteTitle}>Life span:&nbsp;</dt>
            <dd className={styles.note}>{lifeSpan}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

export default BreedInfo;
