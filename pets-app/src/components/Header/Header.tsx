import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import { ReactComponent as LightLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as DarkLogo } from '../../assets/icons/logo-dark.svg';

import styles from './Header.module.scss';

function Header() {
  const {theme, updateTheme} = useTheme();
  const Logo = theme === 'light' ? <LightLogo /> : <DarkLogo />;

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return  (
    <header className={styles.header}>
      <a href="/#">
        {Logo}
      </a>
      <button onClick={updateTheme} className={styles.button} />
    </header>
  );
}

export default Header;
