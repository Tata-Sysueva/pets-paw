import React, {ReactNode} from 'react';
import {AppRoute, BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import Button from '../../shared/Button/Button';
import {ReactComponent as ArrowSvg} from '../../assets/icons/arrow.svg';

import styles from './PageHeader.module.scss';

interface HeaderPagesProps {
  children?: ReactNode,
  namePage: string,
}

function PageHeader({children, namePage}: HeaderPagesProps ) {
  return (
    <div className={styles.headerContent}>
      <Button
        icon={<ArrowSvg />}
        size={BtnSize.Square}
        variants={[BtnVariant.Secondary]}
        element={TypeElement.Link}
        link={AppRoute.Promo}
      >
        <span className="visually-hidden" >Go to Home</span>
      </Button>
      <Button
        type={'button'}
        size={BtnSize.Medium}
        variants={namePage === 'Breed' ? [BtnVariant.Secondary] : [BtnVariant.Primary]}
        element={TypeElement.Button}
        className={namePage === 'Breed' ? '' : 'namePage'}
      >
        <span>{namePage}</span>
      </Button>
      {children}
    </div>
  );
}

export default PageHeader;
