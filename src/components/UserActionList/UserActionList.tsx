import React from 'react';
import UserAction from '../UserAction/UserAction';

import styles from './UserActionList.module.scss';

function UserActionList() {
  return (
    <ul className={styles.list}>
      <UserAction />
      <UserAction />
      <UserAction />
      <UserAction />
    </ul>
  );
}

export default UserActionList;
