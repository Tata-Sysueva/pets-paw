import Search from '../Search/Search';
import NavControls from '../NavControls/NavControls';

import styles from './Navigation.module.scss';

function Navigation() {
  return(
    <article className={styles.container}>
      <Search />
      <NavControls />
    </article>
  );
}

export default Navigation;
