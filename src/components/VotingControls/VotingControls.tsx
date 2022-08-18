import React from 'react';
import {ReactComponent as SmileSvg} from '../../assets/icons/smile.svg';
import {ReactComponent as HeartSvg} from '../../assets/icons/heart.svg';
import {ReactComponent as SadnessSvg} from '../../assets/icons/sadness.svg';
import {TypeModal} from '../../constants/constans';
import {addFavoriteImage, createVote, deleteFavoriteImage} from '../../api/requests';
import {adaptToServer, feedbackMessage} from '../../utils/utils';
import VotingModals from './VotingModals/VotingModals';
import {hideModal, showModal} from '../../store/modalSlice/modalSlice';
import {useAppDispatch} from '../../hooks';
import 'react-toastify/dist/ReactToastify.css';

import styles from './VotingControls.module.scss';
import {Favorites} from '../../types/types';

type VotingControlsProps = {
  imageId: number | string,
  isLoaded: boolean,
  onClick: () => void,
  favorites: Favorites[],
}

function VotingControls({ imageId, isLoaded, onClick, favorites }: VotingControlsProps) {
  const dispatch = useAppDispatch();
  const closeModal = () => dispatch(hideModal());

  const postVote = async (payload: number) => {
    const data = {
      imageId: imageId,
      value: payload,
    };

    try {
      await createVote(adaptToServer(data));
      closeModal();
      onClick();
      feedbackMessage(true);
    } catch {
      feedbackMessage(false);
    }
  };

  const addFavorites = async () => {
    try {
      await addFavoriteImage(adaptToServer({imageId}));
      closeModal();
      feedbackMessage(true);
      onClick();
    } catch (error) {
      feedbackMessage(false);
    }
  };

  const deleteFavorites = async (id: number | string) => {
    try {
      await deleteFavoriteImage({id});
      closeModal();
      feedbackMessage(true);
      onClick();
    } catch (error) {
      feedbackMessage(false);
    }
  };

  const favoriteActions = () => {
    const favoriteItem = favorites.find((favorite) => favorite.imageId === imageId);

    if (favoriteItem?.id) {
      deleteFavorites(favoriteItem.id);
    } else {
      addFavorites();
    }
  };

  const onCreateVote = ({ payload, type }: { payload?: number, type?: string }) => {
    if (type === TypeModal.Favorites) {
      favoriteActions();
    } else {
      postVote(payload || 0);
    }
  };

  return (
    <div className={styles.btnWrap}>
      <button
        className={styles.button}
        onClick={() => dispatch(showModal({type: TypeModal.Like}))}
        disabled={isLoaded}
      >
        <SmileSvg />
        <span className="visually-hidden">Add to likes</span>
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(showModal({type: TypeModal.Favorites}))}
        disabled={isLoaded}
      >
        <HeartSvg />
        <span className="visually-hidden">Add to favourites</span>
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(showModal({type: TypeModal.Dislike}))}
        disabled={isLoaded}
      >
        <SadnessSvg />
        <span className="visually-hidden">Add to dislikes</span>
      </button>

      <VotingModals onCreateVote={onCreateVote}/>

    </div>
  );
}

export default VotingControls;
