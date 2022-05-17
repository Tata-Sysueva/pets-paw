
import Button from '../../shared/Button/Button';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';

import styles from './NavControls.module.scss';
import {AppRoute, BtnSize, BtnVariant, TypeElement} from '../../constants/constans';

function NavControls() {
  return(
    <ul className={styles.list}>
      <li className={styles.item}>
        <Button
          icon={<SmileSvg />}
          size={BtnSize.SquareSecondary}
          variants={[BtnVariant.Primary]}
          element={TypeElement.Link}
          link={AppRoute.Likes}
        >
          <span className="visually-hidden" >Go to Likes Page</span>
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          icon={<HeartSvg />}
          size={BtnSize.SquareSecondary}
          variants={[BtnVariant.Primary]}
          element={TypeElement.Link}
          link={AppRoute.Favorites}
        >
          <span className="visually-hidden" >Go to Favorites Page</span>
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          icon={<SadnessSvg />}
          size={BtnSize.SquareSecondary}
          variants={[BtnVariant.Primary]}
          element={TypeElement.Link}
          link={AppRoute.Dislikes}
        >
          <span className="visually-hidden" >Go to Dislikes Page</span>
        </Button>
      </li>
    </ul>
  );
}

export default NavControls;
