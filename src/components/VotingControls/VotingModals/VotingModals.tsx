import React, {useEffect} from 'react';
import {selectModalIsOpen, selectModalType} from '../../../store/modalSlice/selectors';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {TextModal, TypeModal} from '../../../constants/constans';
import ConfirmModal from '../../../shared/ConfirmModal/ConfirmModal';
import {hideModal} from '../../../store/modalSlice/modalSlice';
import {isEscapeKey} from '../../../utils/utils';

interface ActionModalProps {
  onClose: () => void;
  onConfirm: ({ payload, type }: { payload?: number, type?: string }) => void;
}

interface VotingModalProps {
  onCreateVote: ({ payload, type }: { payload?: number, type?: string }) => void;
}

function LikeModal ({ onClose, onConfirm }: ActionModalProps) {
  return (
    <ConfirmModal
      title={TextModal.AddLikes}
      onCancel={onClose}
      onConfirm={() => onConfirm({ payload: 1})}
    />
  );
}

function DislikeModal ({ onClose, onConfirm }: ActionModalProps) {
  return (
    <ConfirmModal
      title={TextModal.AddDislikes}
      onCancel={onClose}
      onConfirm={() => onConfirm({ payload: 0 })}
    />
  );
}

function FavoritesModal ({ onClose, onConfirm }: ActionModalProps) {
  return (
    <ConfirmModal
      title={TextModal.AddFavorites}
      onCancel={onClose}
      onConfirm={() => onConfirm({type: TypeModal.Favorites})}
    />
  );
}

function VotingModals({ onCreateVote }: VotingModalProps) {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(selectModalIsOpen);
  const type = useAppSelector(selectModalType);

  const closeModal = () => dispatch(hideModal());

  useEffect(() => {
    const onPopupEscKeydown = (evt: KeyboardEvent) => {
      if (isEscapeKey(evt)) {
        closeModal();
      }
    };

    document.addEventListener('keydown', onPopupEscKeydown);

    return () => {
      document.removeEventListener('keydown', onPopupEscKeydown);
    };
  }, []);

  const renderModal = () => {
    switch (type) {
      case TypeModal.Like:
        return <LikeModal onClose={closeModal} onConfirm={onCreateVote} />;
      case TypeModal.Dislike:
        return <DislikeModal onClose={closeModal} onConfirm={onCreateVote} />;
      case TypeModal.Favorites:
        return <FavoritesModal onClose={closeModal} onConfirm={onCreateVote} />;
      default:
        return null;
    }
  };

  return (
    isOpened ? <>{renderModal()} </> : null
  );
}

export default VotingModals;
