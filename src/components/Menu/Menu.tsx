import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import {AppRoute} from '../../constants/constans';

function Menu() {
  return  (
    <section>
      <h3 className={styles.title}>Lets start using The Dogs API</h3>
      <nav className={styles.navContainer}>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageVoting)}/>
          <Link to={AppRoute.Voting} className={styles.link}>Voting</Link>
        </div>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageBreeds)}/>
          <Link to={AppRoute.Breeds} className={styles.link}>Breeds</Link>
        </div>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageGallery)}/>
          <Link to={AppRoute.Gallery} className={styles.link}>Gallery</Link>
        </div>
      </nav>
    </section>
  );
}

export default Menu;
