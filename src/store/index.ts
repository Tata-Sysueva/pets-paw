import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import ApiService from '../api/api';

export const api = ApiService;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
