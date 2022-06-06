import ApiService from './api';
import {BreedInfo} from '../types/types';

export const getBreeds = () => ApiService.Instance.get<BreedInfo[]>('/v1/breeds');
