import ApiService from './api';

export const getBreeds = () => ApiService.Instance.get('/v1/breeds');
