import styles from './NavMenu.module.scss';
import classNames from 'classnames';
import {useTheme} from '../../ThemeContext';

function NavMenu() {
  const themeLight = useTheme();

  const titleClasses = classNames(
    styles.title,
    {[styles.titleLight]: themeLight},
    {[styles.titleDark]: !themeLight},
  );

  return  (
    <section>
      <h3 className={titleClasses}>Lets start using The Dogs API</h3>
      <nav className={styles.navContainer}>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageVoting}`}/>
          <a href="/#" className={styles.link}>Voting</a>
        </div>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageBreeds}`}/>
          <a href="/#" className={styles.link}>Breeds</a>
        </div>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageGallery}`}/>
          <a href="/#" className={styles.link}>Gallery</a>
        </div>
      </nav>
    </section>
  );
}

export default NavMenu;
