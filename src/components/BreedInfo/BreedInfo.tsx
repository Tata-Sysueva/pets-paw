import React from 'react';
import { BreedInfoMocks as BreedInfoType} from '../../types/types';

import styles from './BreedInfo.module.scss';

interface BreedInfoProps {
  breed: BreedInfoType,
}

function BreedInfo({ breed }: BreedInfoProps) {
  const {
    name,
    bredFor,
    temperament,
    height,
    weight,
    lifeSpan
  } = breed;

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
