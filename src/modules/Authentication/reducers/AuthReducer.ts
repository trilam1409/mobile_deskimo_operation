import {createReducer} from '@reduxjs/toolkit';
import {IS_AUTH_ACTION} from '../configs/Constants';

const initialState = {
  isAuth: false,
};

const HomeReducer = createReducer(initialState, {
  [IS_AUTH_ACTION]: (state, action) => {
    state.isAuth = action.payload;
  },
});
export default HomeReducer;
