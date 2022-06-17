import {Vote, VoteReactions, Votes} from '../types/types';
import dayjs from 'dayjs';

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
