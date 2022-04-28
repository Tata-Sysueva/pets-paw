import styles from './Welcome.module.scss';
import {useTheme} from '../../ThemeContext';
import classNames from 'classnames';

function Welcome() {
  const lightTheme = useTheme();

  const titleClasses = classNames(
    styles.title,
    {[styles.lightTitle]: !lightTheme},
    {[styles.darkTitle]: lightTheme},
  );

  return  (
    <section className={styles.section}>
      <h2 className={titleClasses}>Hi, friends!</h2>
      <p className={styles.text}>Welcome our site</p>
    </section>
  );
}

export default Welcome;
