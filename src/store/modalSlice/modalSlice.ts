import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constans';

interface InitialState {
  isOpened: boolean,
  type: null | string,
}

const initialState: InitialState = {
  isOpened: false,
  type: null,
};

export const modalSlice = createSlice({
  name: NameSpace.Modal,
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpened = true;
      state.type = action.payload.type;
    },
    hideModal: (state) => {
      state.isOpened = false;
      state.type = null;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
