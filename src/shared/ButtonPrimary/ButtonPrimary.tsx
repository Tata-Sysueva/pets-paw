import {ReactNode} from 'react';
import cn from 'classnames';
import {BtnSize, BtnVariant} from '../../constants/constans';

import styles from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps {
  children: ReactNode,
  type?: 'submit' | 'button' | 'reset',
  size: string,
  variant: string,
  icon?: ReactNode,
}

function ButtonPrimary({
  children,
  type,
  size,
  variant,
  icon,
  ...attrs
}: ButtonPrimaryProps) {
  const classes = cn(
    styles.button, {
      [styles.sizeSmall]: size === BtnSize.Small,
      [styles.sizeMedium]: size === BtnSize.Medium,
      [styles.sizeLarge]: size === BtnSize.Large,

      [styles.primary]: variant === BtnVariant.Primary,
      [styles.secondary]: variant === BtnVariant.Secondary,
      [styles.specColor]: variant === BtnVariant.SpecColor,
      [styles.specSize]: variant === BtnVariant.SpecSize,
    }
  );

  return(
    <button
      {...attrs}
      type={type}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}

export default ButtonPrimary;
