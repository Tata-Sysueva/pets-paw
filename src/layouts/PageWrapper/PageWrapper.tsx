import {ReactNode} from 'react';

import styles from './PageWrapper.module.scss';

function PageWrapper({children}: {children: ReactNode}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default PageWrapper;
