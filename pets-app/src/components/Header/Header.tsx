import React from 'react';
import {useTheme, useThemeUpdate} from '../../ThemeContext';
import styles from './Header.module.scss';
import Logo from '../logo/logo';
import classNames from 'classnames';

function Header() {
  const lightTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const buttonClasses = classNames(
    styles.button,
    {[styles.buttonLight] : lightTheme},
    {[styles.buttonDark]: !lightTheme}
  );

  return  (
    <header className={styles.header}>
      <a href="/#">
        <Logo />
      </a>
      <button onClick={toggleTheme} className={buttonClasses} />
    </header>
  );
}

export default Header;
