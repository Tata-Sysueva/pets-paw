import React, {useState} from 'react';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TIMEOUT_MESSAGE, TypeElement} from '../../constants/constans';
import {uploadImage} from '../../api/requests';
import {showFeedbackMessage} from '../../utils/utils';
import {ReactComponent as TickSvg} from '../../assets/icons/tick.svg';
import {ReactComponent as ErrorSvg} from '../../assets/icons/error.svg';
import cn from 'classnames';

import styles from './UploadPhotoBox.module.scss';

type UploadFormProps = {
  onDragStart: (evt: React.DragEvent<HTMLLabelElement>) => void,
  onDragLeave: (evt: React.DragEvent<HTMLLabelElement>) => void,
  onDragOver: (evt: React.DragEvent<HTMLLabelElement>) => void,
  onDrop: (evt: React.DragEvent<HTMLLabelElement>) => void,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

function UploadForm ({
  onDragStart,
  onDragLeave,
  onDragOver,
  onDrop,
  onChange,
}: UploadFormProps) {
  return(
    <form
      method="post"
      encType="multipart/form-photoFile"
      className={styles.photoContainer}
    >
      <label
        htmlFor={'uploadPhoto'}
        onDragStart={onDragStart}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <input
          id={'uploadPhoto'}
          type={'file'}
          hidden
          multiple
          onChange={onChange}
        />
        <b className={styles.accent}>Drag here</b>&nbsp;your file or&nbsp;
        <b className={styles.accent}>Click here</b>&nbsp;to upload
      </label>
    </form>
  );
}

function UploadPhotoBox() {
  const [photoFile, setPhotoFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccessUpload, setIsSuccessUpload] = useState(false);
  const [isError, setError] = useState(false);

  const handleChange= (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (evt.target && evt.target.files) {
      const file = evt.target.files[0];
      setPhotoFile(file);
    }
  };

  const handleDrag = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
  };

  const handleDrop = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    const file = evt.dataTransfer.files[0];
    setPhotoFile(file);
  };

  const handleButtonClick = async () => {
    const formData = new FormData();
    if(photoFile) {
      formData.append('file', photoFile);
    }

    try {
      setIsUploading(true);
      await uploadImage(formData);
      showFeedbackMessage(true);
      setIsUploading(false);
      setIsSuccessUpload(true);
      setPhotoFile(null);
      setError(false);
      setTimeout(() => setIsSuccessUpload(false), TIMEOUT_MESSAGE);
    } catch {
      showFeedbackMessage(false);
      setError(true);
      setIsUploading(false);
      setTimeout(() => setError(false), TIMEOUT_MESSAGE);
    }
  };

  const handleClean = () => {
    setPhotoFile(null);
  };

  const classes = cn(styles.photoContainer, {
    [styles.error]: isError,
  });

  return (
    <>
      {!photoFile ? (
        <UploadForm
          onDragStart={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onChange={handleChange}
        />
      ) : (
        <div className={classes}>
          <img src={URL.createObjectURL(photoFile)} alt="UploadPhoto"/>
        </div>
      )}

      <p className={styles.note}>
        {photoFile ? `Image File Name: ${photoFile.name}` : 'No file selected'}
      </p>

      {(photoFile && !isError) &&
        <>
          <Button
            type="submit"
            size={BtnSize.Medium}
            variants={[BtnVariant.Secondary]}
            element={TypeElement.Button}
            className="uploadPhotoButton"
            onClick={handleButtonClick}
            disabled={isUploading}
          >
            <span>{isUploading ? 'Uploading...' : 'Upload photo'}</span>
          </Button>

          <button
            className={styles.buttonReset}
            onClick={handleClean}
            disabled={isUploading}
          >
            Reset photo
          </button>
        </>}

      {isSuccessUpload &&
        <p className={styles.textConfirm}>
          <TickSvg />
          <span>Thanks for the Upload!</span>
        </p>}

      {isError &&
        <p className={styles.textConfirm}>
          <ErrorSvg />
          <span>No Dog found - try a different one</span>
        </p>}
    </>
  );
}

export default UploadPhotoBox;
