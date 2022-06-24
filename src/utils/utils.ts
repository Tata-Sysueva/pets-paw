import {Vote, VoteReactions, Votes} from '../types/types';
import dayjs from 'dayjs';
import {toast} from 'react-toastify';
import {TextModal} from '../constants/constans';

export const adaptToServer = (data: VoteReactions | Vote) => {
  const adaptData = {
    ...data,
    'image_id': data.imageId,
  };

  delete adaptData.imageId;

  return adaptData;
};

export const sortedVotes = (voteArray: Votes[]) => {
  const copiedVotes = voteArray.slice();

  if(copiedVotes.length > 0){
    copiedVotes.sort((a,b) => +dayjs(b.createdAt) - +dayjs(a.createdAt));
  }

  return copiedVotes;
};

export const feedbackMessage = (isSuccess: boolean) => {
  const options = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  return isSuccess ? toast.success(TextModal.Success, options) : toast.error(TextModal.Error, options);
};

export const isEscapeKey = (evt: KeyboardEvent) => evt.key === 'Escape';
