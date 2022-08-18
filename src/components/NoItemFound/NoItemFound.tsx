import React from 'react';

import styles from './NoItemFound.module.scss';

function NoItemFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>No item found</p>
    </div>
  );
}

export default NoItemFound;
