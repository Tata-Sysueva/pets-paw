import React, {useEffect} from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import { ReactComponent as LightLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as DarkLogo } from '../../assets/icons/logo-dark.svg';

import styles from './Header.module.scss';

function Header() {
  const {theme, updateTheme} = useTheme();
  const logo = theme === 'light' ? <LightLogo /> : <DarkLogo />;

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return  (
    <header className={styles.header}>
      <a href="/#">
        {logo}
      </a>
      <button onClick={updateTheme} className={styles.button} />
    </header>
  );
}

export default Header;
