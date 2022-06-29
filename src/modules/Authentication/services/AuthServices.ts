import configureStore from '../../../Store';
import {navigationReset} from '../../../services/NavigationService';
import {removeFromStorage} from '../../../services/AsyncStorageService';
import {isAuthThunk} from '../thunk/AuthThunk';
import {ACCESS_TOKEN_CACHE} from '../../../configs/GlobalStorageKey';

export const removeSession = async () => {
  const dispatch = configureStore().store.dispatch;
  navigationReset('Authentication');
  await removeFromStorage(ACCESS_TOKEN_CACHE);
  await dispatch(isAuthThunk(false));
};
