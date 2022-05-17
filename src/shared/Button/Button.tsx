import cn from 'classnames';
import {ReactNode, MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, BtnSize, BtnVariant, TypeElement} from '../../constants/constans';

import styles from './Button.module.scss';

type ContainerElement = HTMLButtonElement | HTMLAnchorElement;

interface ButtonProps {
  children: ReactNode,
  type?: 'submit' | 'button' | 'reset',
  size: string,
  variants: string[],
  icon?: ReactNode,
  className?:string,
  disabled?: boolean,
  onClick?: (evt: MouseEvent) => void;
  href?: string,
  element?: string,
  link?: string,
}

function Button({
  children,
  type = 'button',
  size,
  variants,
  icon,
  className = '',
  disabled = false,
  onClick,
  element,
  link = AppRoute.Promo,
  ...attrs
}: ButtonProps) {

  const classes = cn(
    styles.button, {
      [styles.small]: size === BtnSize.Small,
      [styles.medium]: size === BtnSize.Medium,
      [styles.large]: size === BtnSize.Large,

      [styles.square]: size === BtnSize.Square,
      [styles.squareSecondary]: size === BtnSize.SquareSecondary,

      [styles.primary]: variants.includes(BtnVariant.Primary),
      [styles.secondary]: variants.includes(BtnVariant.Secondary),
    },
    styles[className],
  );

  const handleActionClick = (evt: MouseEvent<ContainerElement>) => {
    if(disabled) {
      evt.preventDefault();
    }

    onClick?.(evt);
  };

  const getElement = (): JSX.Element | string => {
    switch (element) {
      case TypeElement.Button:
        return (
          <button
            {...attrs}
            type={type}
            disabled={disabled}
            onClick={handleActionClick}
            className={classes}
          >
            <span>{icon}</span>
            {children}
          </button>
        );
      case TypeElement.Link:
        return (
          <Link
            {...attrs}
            to={link}
            className={classes}
          >
            <span>{icon}</span>
            {children}
          </Link>
        );
      default:
        return '';
    }
  };

  return(
    <div>
      {getElement()}
    </div>
  );
}

export default Button;
