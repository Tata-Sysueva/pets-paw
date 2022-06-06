import React from 'react';

import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';

import styles from './VotingImage.module.scss';
import {Picture} from '../../types/types';

interface VotingImageProps {
  picture: Picture,
}

function VotingImage({ picture }: VotingImageProps) {
  return (
    <section className={styles.container}>
      <img
        src={picture.url}
        alt="Vote of breed"
        className={styles.image}
      />
      <div className={styles.btnWrap}>
        <button className={styles.button}>
          <SmileSvg />
          <span className="visually-hidden">Add to likes</span>
        </button>
        <button className={styles.button}>
          <HeartSvg />
          <span className="visually-hidden">Add to favourites</span>
        </button>
        <button className={styles.button}>
          <SadnessSvg />
          <span className="visually-hidden">Add to dislikes</span>
        </button>
      </div>
    </section>
  );
}

export default VotingImage;
