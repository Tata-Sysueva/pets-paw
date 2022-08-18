import {ReactNode} from 'react';
import cn from 'classnames';

import styles from './PageLayout.module.scss';

interface PageWrapperProps {
  children: ReactNode,
  isModal?: boolean,
}

function PageLayout({children, isModal}: PageWrapperProps) {
  const classes = cn(
    styles.wrapper, {
      [styles.isModal]: isModal,
    }
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default PageLayout;
