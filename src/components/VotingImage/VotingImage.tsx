import React from 'react';
import {Picture} from '../../types/types';
import Spinner from '../Spinner/Spinner';

import styles from './VotingImage.module.scss';

interface VotingImageProps {
  picture: Picture,
  isLoaded: boolean,
}

function VotingImage({ picture, isLoaded }: VotingImageProps) {
  return (
    <section className={styles.container}>
      <div className={styles.containerImage}>
        {
          isLoaded ?
            <img
              src={picture.url}
              alt="Vote of breed"
              className={styles.image}
            /> :
            <Spinner />
        }
      </div>
    </section>
  );
}

export default VotingImage;
