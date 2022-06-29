import {isAuthAction} from '../actions/AuthAction';
import {storeToStorage} from '../../../services/AsyncStorageService';
import {IS_AUTH_STORAGE} from '../../../configs/GlobalStorageKey';

export const isAuthThunk = (data: boolean) => {
  return async (dispatch: any) => {
    await storeToStorage(IS_AUTH_STORAGE, data);
    dispatch(isAuthAction(data));
  };
};
