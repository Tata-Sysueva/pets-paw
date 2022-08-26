import React, {useState} from 'react';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {uploadImage} from '../../api/requests';
import {feedbackMessage} from '../../utils/utils';
import {ReactComponent as TickSvg} from '../../assets/icons/tick.svg';
import {ReactComponent as ErrorSvg} from '../../assets/icons/error.svg';

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
      encType="multipart/form-data"
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
  const [isDragging, setIsDragging] = useState(true);
  const [note, setNote] = useState<string | string[]>('No file selected');
  const [url, setUrl] = useState<string>('');
  const [data, setData] = useState<any | null>();
  const [isUploading, setIsUploading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isError, setError] = useState(false);

  const handleChange= (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (evt.target && evt.target.files) {
      const file = evt.target.files[0];
      setNote(`Image File Name: ${file.name}`);
      setUrl(URL.createObjectURL(file));
      setData(file);
    }

    setIsDragging(false);
  };

  const handleDragStart = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    const file = evt.dataTransfer.files[0];
    setIsDragging(false);
    setNote(`Image File Name: ${file.name}`);
    setUrl(URL.createObjectURL(file));
    setData(file);
  };

  const handleButtonClick = async () => {
    const formData = new FormData();
    formData.append('file', data);

    try {
      setIsUploading(true);
      await uploadImage(formData);
      feedbackMessage(true);
      setIsUploading(false);
      setIsUpload(true);
      setData(null);
      setNote('No file selected');
      setIsDragging(true);
      setError(false);
      setTimeout(() => setIsUpload(false), 6000);
    } catch {
      feedbackMessage(false);
      setError(true);
      setIsUploading(false);
      setTimeout(() => setError(false), 6000);
    }
  };

  return (
    <>
      {isDragging || isUpload ?
        <UploadForm
          onDragStart={handleDragStart}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragStart}
          onDrop={handleDrop}
          onChange={handleChange}
        />
        :
        <div
          className={styles.photoContainer}
        >
          <img src={url} alt="UploadPhoto"/>
        </div>}

      <p className={styles.note}>
        {note}
      </p>

      {(!isDragging || isError) &&
        <Button
          type={'submit'}
          size={BtnSize.Medium}
          variants={[BtnVariant.Secondary]}
          element={TypeElement.Button}
          className={'uploadPhotoButton'}
          onClick={handleButtonClick}
        >
          <span>{isUploading ? 'Uploading...' : 'Upload photo'}</span>
        </Button>}

      {(isDragging && isUpload) &&
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
