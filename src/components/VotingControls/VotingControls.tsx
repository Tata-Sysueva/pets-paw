import React, {useState} from 'react';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal';
import {ConfirmText} from '../../constants/constans';
import {addFavoriteImage, createVote} from '../../api/requests';
import FeedbackModal from '../../shared/FeedbackModal/FeedbackModal';
import {adaptToServer} from '../../utils/utils';

import styles from './VotingControls.module.scss';

type VotingControlsProps = {
  imageId: number | string,
  isLoaded: boolean,
  onClickButton: () => void,
}

function VotingControls({ imageId, isLoaded, onClickButton }: VotingControlsProps) {
  const [open, setOpen] = useState(false); // открывает попап
  const [title, setTitle] = useState(''); // меняет надпись в зависимости от того, на какую кнопку нажали
  const [isReaction, setReaction] = useState(false); // проверяет, это кнопки лайк/дизлайк или фейворитс
  const [isLikes, setLikes] = useState(false); // меняет value
  const [error, setError] = useState(false); // проверяет на ошибку
  const [success, setSuccess] = useState(false); // проверяет на успех

  const onOpenModal = (text: string, reaction: boolean) => {
    setOpen(true);
    setTitle(text);
    setReaction(reaction);
  };

  const postVote = async () => {
    const value = Number(isLikes);

    const data = {
      imageId: imageId,
      value: value,
    };

    try {
      await createVote(adaptToServer(data));
      setOpen(false);
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  const addFavorites = async () => {
    try {
      await addFavoriteImage(adaptToServer({imageId}));
      setOpen(false);
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  const onCreateVote = () => {
    if (isReaction) {
      setLikes(!isLikes);
      postVote();
    } else {
      addFavorites();
    }
  };

  return (
    <div className={styles.btnWrap}>
      <button
        className={styles.button}
        onClick={() => {
          onOpenModal(ConfirmText.AddLikes, true);
          onClickButton();
        }}
        disabled={isLoaded}
      >
        <SmileSvg />
        <span className="visually-hidden">Add to likes</span>
      </button>
      <button
        className={styles.button}
        onClick={() => {
          onOpenModal(ConfirmText.AddFavorites, false);
          onClickButton();
        }}
        disabled={isLoaded}
      >
        <HeartSvg />
        <span className="visually-hidden">Add to favourites</span>
      </button>
      <button
        className={styles.button}
        onClick={() => {
          onOpenModal(ConfirmText.AddDislikes, true);
          onClickButton();
        }}
        disabled={isLoaded}
      >
        <SadnessSvg />
        <span className="visually-hidden">Add to dislikes</span>
      </button>
      {open && (
        <ConfirmModal
          title={title}
          onCancel={() => setOpen(false)}
          onConfirm={() => onCreateVote()}
        />
      )}
      {error && (
        <FeedbackModal
          title={'Something went wrong. Try again'}
          onConfirm={() => setError(false)}
          isError
        />
      )}
      {success && (
        <FeedbackModal
          title={'Thanks for your vote!'}
          onConfirm={() => setSuccess(false)}
          isError={false}
        />
      )}

    </div>
  );
}

export default VotingControls;
