import React from 'react';

import styles from  './UserAction.module.scss';

//dateTime={}

function UserAction() {
  return (
    <li className={styles.item}>
      <time className={styles.time}>22:35</time>
      <p className={styles.text}>Image ID: <span className={styles.id}>fQSunHvl8</span> was added to Favourites</p>
    </li>
  );
}

export default UserAction;
