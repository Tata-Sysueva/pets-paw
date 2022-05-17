import React, {useEffect} from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import { ReactComponent as LightLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as DarkLogo } from '../../assets/icons/logo-dark.svg';

import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constans';

function Header() {
  const {theme, updateTheme} = useTheme();
  const logo = theme === 'light' ? <LightLogo /> : <DarkLogo />;

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return  (
    <header className={styles.header}>
      <Link to={AppRoute.Promo}>
        {logo}
      </Link>
      <button onClick={updateTheme} className={styles.button} />
    </header>
  );
}

export default Header;
