import styles from './Search.module.scss';
import {ReactComponent as SearchSvg} from '../../assets/icons/search.svg';
import ButtonPrimary from '../../shared/ButtonPrimary/ButtonPrimary';
import {BtnSize, BtnVariant} from '../../constants/constans';


function Search() {
  return(
    <form className={styles.form}>
      <label className="visually-hidden" htmlFor="search">Search for breeds by name</label>
      <input
        className={styles.field}
        type="search"
        name="search"
        placeholder={'Search for breeds by name'}
      />
      <div className={styles.button}>
        <ButtonPrimary
          icon={<SearchSvg />}
          size={BtnSize.Small}
          variant={BtnVariant.Secondary}
          type={'submit'}
        >
          <span className="visually-hidden">Search button</span>
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default Search;
