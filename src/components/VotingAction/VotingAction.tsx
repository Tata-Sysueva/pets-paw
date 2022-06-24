import React from 'react';
import dayjs from 'dayjs';
import {Votes} from '../../types/types';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';
import {TypeModal} from '../../constants/constans';

import styles from './VotingAction.module.scss';
import cn from 'classnames';

type UserActionProps = {
  info: Votes,
}

function VotingAction({ info }: UserActionProps) {
  let nameAction;
  let icon;
  let classIcon;

  if (info.value === 0) {
    nameAction = TypeModal.Dislike;
    icon = <SadnessSvg />;
    classIcon = 'dislike';
  } else if (info.value === 1) {
    nameAction = TypeModal.Like;
    icon = <SmileSvg />;
    classIcon = 'like';
  } else {
    nameAction = TypeModal.Favorites;
    icon = <HeartSvg />;
    classIcon = 'favorites';
  }

  return (
    <li className={styles.item}>
      <time className={styles.time}>{dayjs(info.createdAt).format('HH:mm')}</time>
      <p className={styles.text}>
        Image ID: <span className={styles.id}>{info.imageId}</span> was added to {nameAction}
      </p>
      <div className={cn(styles.icon, styles[classIcon])}>
        {icon}
      </div>
    </li>
  );
}

export default VotingAction;
