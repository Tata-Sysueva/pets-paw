import styles from './UploadPhoto.module.scss';
import UploadPhotoBox from '../UploadPhotoBox/UploadPhotoBox';

function UploadPhoto() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Upload a .jpg or .png Dog Image</h2>
      <p className={styles.description}>
        Any uploads must comply with the <span className={styles.accentNote}>upload guidelines</span> or face deletion.
      </p>
      <UploadPhotoBox />
    </div>
  );
}

export default UploadPhoto;
