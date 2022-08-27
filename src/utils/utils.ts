import {BreedInfo, Vote, VoteReactions, Votes} from '../types/types';
import dayjs from 'dayjs';
import {toast} from 'react-toastify';
import {SortType, TextModal} from '../constants/constans';

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

export const showFeedbackMessage = (isSuccess: boolean) => {
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

export const getSortedBreedsName = (array: BreedInfo[], sortType: string) => array.sort((a: BreedInfo, b: BreedInfo) => {
  if (a.name > b.name) {
    return sortType === SortType.Asc ? 1 : -1;
  }
  if (a.name < b.name) {
    return sortType === SortType.Asc ? -1 : 1;
  }
  return 0;
});

export const getSelectedBreed = (array: BreedInfo[], value: number  | undefined) => {
  const selectedBreedName: BreedInfo[] = [];

  array.filter((breed) => {
    if (value === breed.id) {
      selectedBreedName.push(breed);
    }

    return selectedBreedName;
  });

  return selectedBreedName;
};
