import {Link} from 'react-router-dom';
import ButtonPrimary from '../../shared/ButtonPrimary/ButtonPrimary';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';

import styles from './NavControls.module.scss';
import {AppRoute, BtnSize, BtnVariant} from '../../constants/constans';

function NavControls() {
  return(
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to={AppRoute.Likes}>
          <ButtonPrimary
            icon={<SmileSvg />}
            size={BtnSize.Medium}
            variant={BtnVariant.SpecSize}
          >
            <span className="visually-hidden" >Go to Likes Page</span>
          </ButtonPrimary>
        </Link>
      </li>
      <li className={styles.item}>
        <Link to={AppRoute.Favorites}>
          <ButtonPrimary
            icon={<HeartSvg />}
            size={BtnSize.Medium}
            variant={BtnVariant.SpecSize}
          >
            <span className="visually-hidden" >Go to Favorites Page</span>
          </ButtonPrimary>
        </Link>
      </li>
      <li className={styles.item}>
        <Link to={AppRoute.Dislikes}>
          <ButtonPrimary
            icon={<SadnessSvg />}
            size={BtnSize.Medium}
            variant={BtnVariant.SpecSize}
          >
            <span className="visually-hidden" >Go to Dislikes Page</span>
          </ButtonPrimary>
        </Link>
      </li>
    </ul>
  );
}

export default NavControls;
