import React from 'react';
import dayjs from 'dayjs';
import {Votes} from '../../types/types';

import styles from  './UserAction.module.scss';

type UserActionProps = {
  info: Votes,
  nameAction?: string,
}

function UserAction({ info, nameAction }: UserActionProps) {
  return (
    <li className={styles.item}>
      <time className={styles.time}>{dayjs(info.createdAt).format('HH:mm')}</time>
      <p className={styles.text}>Image ID: <span className={styles.id}>{info.imageId}</span> was added to {nameAction}</p>
    </li>
  );
}

export default UserAction;
