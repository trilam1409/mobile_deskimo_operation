import {configureStore as configureStoreToolkit} from '@reduxjs/toolkit';
import reducers from './modules/App/reducers/Root';

const store = configureStoreToolkit({reducer: reducers});

export default function configureStore() {
  return {store};
}
