import styles from './Search.module.scss';
import {ReactComponent as SearchSvg} from '../../assets/icons/search.svg';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';


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
        <Button
          icon={<SearchSvg />}
          size={BtnSize.Square}
          variants={[BtnVariant.Secondary]}
          type={'submit'}
          element={TypeElement.Button}
        >
          <span className="visually-hidden">Search button</span>
        </Button>
      </div>
    </form>
  );
}

export default Search;
