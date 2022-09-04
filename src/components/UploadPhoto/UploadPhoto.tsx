import UploadPhotoBox from '../UploadPhotoBox/UploadPhotoBox';

import styles from './UploadPhoto.module.scss';

function UploadPhoto() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Upload a .jpg or .png Dog Image</h2>
      <p className={styles.description}>
        Any uploads must comply with the <a href={'https://www.thedogapi.com/privacy'} className={styles.link}>upload guidelines</a> or face deletion.
      </p>
      <UploadPhotoBox />
    </div>
  );
}

export default UploadPhoto;
