import {BreedInfo} from '../types/types';

export const limitsBreeds = [
  { value: 5, label: 'Limit: 5' },
  { value: 10, label: 'Limit: 10' },
  { value: 15, label: 'Limit: 15' },
  { value: 20, label: 'Limit: 20' },
];

export const limitsGallery = [
  { value: 5, label: '5 items per page' },
  { value: 10, label: '10 items per page' },
  { value: 15, label: '15 items per page' },
  { value: 20, label: '20 items per page' },
];

export const getBreedsOptions =(breeds: BreedInfo[]) => breeds.map(({id, name}) => ({
  value: id,
  label: name,
}));

export const orderGallery = [
  { value: 'Random', label: 'Random' },
  { value: 'Desc', label: 'Desc' },
  { value: 'Asc', label: 'Asc' },
];

export const typeGallery = [
  { value: 'All', label: 'All' },
  { value: 'Static', label: 'Static' },
  { value: 'Animated', label: 'Animated' },
];
