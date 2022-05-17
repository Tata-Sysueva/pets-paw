import styles from './UploadPhotoBox.module.scss';

function UploadPhotoBox() {
  return (
    <>
      <div className={styles.photoContainer}>
        <p>
          <b className={styles.accent}>Drag here</b> your file or  <b className={styles.accent}>Click here</b> to upload
        </p>
      </div>
      <p className={styles.note}>
        No file selected
      </p>
    </>
  );
}

export default UploadPhotoBox;
