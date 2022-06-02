import React from 'react';
import {BreedInfo as BreedInfoType} from '../../mocks/BreedInfo';

import styles from './BreedInfo.module.scss';

interface BreedInfoProps {
  infoBreed: BreedInfoType,
}

function BreedInfo({ infoBreed }: BreedInfoProps) {
  const {
    name,
    breedFor,
    temperament,
    height,
    weight,
    lifeSpan
  } = infoBreed;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {name}
      </h3>
      <p className={styles.description}>
        {breedFor}
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
