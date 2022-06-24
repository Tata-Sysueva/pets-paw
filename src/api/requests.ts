import ApiService from './api';
import {
  BreedInfo, Favorites,
  PictureVoting,
  Vote,
  VoteReactions,
  Votes
} from '../types/types';
import camelcaseKeys from 'camelcase-keys';

export const getBreeds = () =>
  ApiService.Instance.get<BreedInfo[]>('/v1/breeds')
    .then(({data}) => camelcaseKeys(data));

export const getImageForVoting = () =>
  ApiService.Instance.get<PictureVoting[]>('/v1/images/search')
    .then(({data}) => camelcaseKeys(data));

export const getImageForBreedCard = () =>
  ApiService.Instance.get<PictureVoting[]>('/v1/images/search?=limit=3')
    .then(({data}) => camelcaseKeys(data));

export const createVote = (data: VoteReactions) => {
  ApiService.Instance.post<Vote>('https://api.thedogapi.com/v1/votes', data);
};

export const addFavoriteImage = (data: Vote) =>
  ApiService.Instance.post<Vote>('https://api.thedogapi.com/v1/favourites', data);

export const deleteFavoriteImage = ({id}:  { id: number | string | undefined }) =>
  ApiService.Instance.delete<string | number>(`https://api.thedogapi.com/v1/favourites/${id}`);

export const getVotes = () =>
  ApiService.Instance.get<Votes[]>('https://api.thedogapi.com/v1/votes?limit=2000')
    .then(({data}) => camelcaseKeys(data));

export const getFavorites = () =>
  ApiService.Instance.get<Favorites[]>('https://api.thedogapi.com/v1/favourites')
    .then(({data}) => camelcaseKeys(data));
