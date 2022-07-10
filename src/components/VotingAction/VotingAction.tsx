import React from 'react';
import dayjs from 'dayjs';
import cn from 'classnames';
import {Votes} from '../../types/types';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';
import {TypeModal} from '../../constants/constans';

import styles from './VotingAction.module.scss';

type UserActionProps = {
  info: Votes,
}

function VotingAction({ info }: UserActionProps) {
  const renderActionContent = () => {
    let nameAction = TypeModal.Favorites;
    let icon = <HeartSvg/>;
    let classIcon = 'favorites';

    if ('value' in info) {
      nameAction = info.value ? TypeModal.Like : TypeModal.Dislike;
      icon = info.value ? <SmileSvg/> : <SadnessSvg/>;
      classIcon = info.value ? 'like' : 'dislike';
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
  };

  return <>{renderActionContent()}</>;
}

export default VotingAction;
