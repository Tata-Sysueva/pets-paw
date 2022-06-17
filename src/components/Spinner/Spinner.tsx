import React from 'react';

import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerCircle}>
        <div className={styles.spinnerCircleGradient}/>
        <div className={styles.spinnerCircleInner}/>
      </div>
    </div>
  );
}

export default Spinner;
