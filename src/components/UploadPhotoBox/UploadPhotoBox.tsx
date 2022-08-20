import React, {useState} from 'react';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {uploadImage} from '../../api/requests';
import {feedbackMessage} from '../../utils/utils';
import {ReactComponent as TickSvg} from '../../assets/icons/tick.svg';
import {ReactComponent as ErrorSvg} from '../../assets/icons/error.svg';

import styles from './UploadPhotoBox.module.scss';

function UploadPhotoBox() {
  const [drag, setDrag] = useState(true);
  const [note, setNote] = useState<string | string[]>('No file selected');
  const [url, setUrl] = useState<string>('');
  const [photo, setPhoto] = useState<any | null>();
  const [isUpload, setUpload] = useState(false);
  const [noteUpload, setNoteUpload] = useState('Upload photo');
  const [isError, setError] = useState(false);

  function UploadForm() {
    return(
      <form
        method="post"
        encType="multipart/form-data"
        className={styles.photoContainer}
      >
        <label
          htmlFor={'uploadPhoto'}
          onDragStart={(evt) => dragStartHandler(evt)}
          onDragLeave={(evt) => dragLeaveHandler(evt)}
          onDragOver={(evt) => dragStartHandler(evt)}
          onDrop={(evt) => dropHandler(evt)}
        >
          <input
            id={'uploadPhoto'}
            type={'file'}
            hidden
            multiple
            onChange={(evt) => inputChangeHandler(evt)}
          />
          <b className={styles.accent}>Drag here</b>&nbsp;your file or&nbsp;
          <b className={styles.accent}>Click here</b>&nbsp;to upload
        </label>
      </form>
    );
  }

  const inputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (evt.target && evt.target.files) {
      const file = evt.target.files[0];
      setNote(`Image File Name: ${file.name}`);
      setUrl(URL.createObjectURL(file));
      setPhoto(file);
    }

    setDrag(false);
  };

  const dragStartHandler = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    setDrag(false);
  };

  const dropHandler = (evt: React.DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    const file = evt.dataTransfer.files[0];
    setDrag(false);
    setNote(`Image File Name: ${file.name}`);
    setUrl(URL.createObjectURL(file));
    setPhoto(file);
  };

  const clickButtonHandler = async () => {
    const formData = new FormData();
    formData.append('file', photo);

    setNoteUpload('Uploading...');

    try {
      await uploadImage(formData);
      feedbackMessage(true);
      setUpload(true);
      setPhoto(null);
      setNote('No file selected');
      setDrag(true);
      setNoteUpload('Upload photo');
      setError(false);
    } catch {
      feedbackMessage(false);
      setError(true);
      setUpload(false);
    }
  };

  return (
    <>
      {drag || isUpload ?
        <UploadForm />
        :
        <div
          className={styles.photoContainer}
        >
          <img src={url} alt="UploadPhoto"/>
        </div>}

      <p className={styles.note}>
        {note}
      </p>

      {(!drag || isError) &&
        <Button
          type={'submit'}
          size={BtnSize.Medium}
          variants={[BtnVariant.Secondary]}
          element={TypeElement.Button}
          className={'uploadPhotoButton'}
          onClick={clickButtonHandler}
        >
          <span>{noteUpload}</span>
        </Button>}

      {(drag && isUpload) &&
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
