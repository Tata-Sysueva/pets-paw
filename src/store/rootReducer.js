import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/constans';
import modalReducer from './modalSlice/modalSlice';

export const rootReducer = combineReducers({
  [NameSpace.Modal]: modalReducer,
});
