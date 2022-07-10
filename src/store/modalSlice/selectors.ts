import {State} from '../../types/redux';
import {NameSpace} from '../../constants/constans';

const selectModalState = (state: State) => state[NameSpace.Modal];

export const selectModalIsOpen = (state: State) => selectModalState(state).isOpened;
export const selectModalType = (state: State) => selectModalState(state).type;
