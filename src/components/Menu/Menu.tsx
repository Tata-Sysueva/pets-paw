import cn from 'classnames';
import styles from './Menu.module.scss';
import {AppRoute, BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import Button from '../../shared/Button/Button';

function Menu() {
  return  (
    <section>
      <h3 className={styles.title}>Lets start using The Dogs API</h3>
      <nav className={styles.navContainer}>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageVoting)}/>
          <Button
            size={BtnSize.Small}
            variants={[BtnVariant.Primary]}
            element={TypeElement.Link}
            link={AppRoute.Voting}
          >
            <span>Voting</span>
          </Button>
        </div>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageBreeds)}/>
          <Button
            size={BtnSize.Small}
            variants={[BtnVariant.Primary]}
            element={TypeElement.Link}
            link={AppRoute.Breeds}
          >
            <span>Breeds</span>
          </Button>
        </div>
        <div className={styles.linkCard}>
          <div className={cn(styles.image, styles.imageGallery)}/>
          <Button
            size={BtnSize.Small}
            variants={[BtnVariant.Primary]}
            element={TypeElement.Link}
            link={AppRoute.Gallery}
          >
            <span>Gallery</span>
          </Button>
        </div>
      </nav>
    </section>
  );
}

export default Menu;
