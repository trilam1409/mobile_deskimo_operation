import axios from 'axios';
import Toast from 'react-native-simple-toast';
import {errorMessage} from '../locales/en.json';
import {INTERNAL_SERVER_ERROR, UNAUTHORIZED} from '../configs/Constants';
import {removeSession} from '../modules/Authentication/services/AuthServices';

const RequestHandle = {
  init() {
    axios.interceptors.response.use(
      response => response,
      async error => {
        if (error?.message?.includes('timeout')) {
          Toast.show(errorMessage.timeoutConnection, Toast.LONG);
          return Promise.reject();
        }

        const response = error?.response;

        switch (response?.status) {
          case UNAUTHORIZED:
            Toast.show(errorMessage.expiredToken, Toast.LONG);
            await removeSession();
            return Promise.reject();
          case INTERNAL_SERVER_ERROR:
            Toast.show(errorMessage.contactAdmin, Toast.LONG);
            return Promise.reject();
        }

        return Promise.reject(error);
      },
    );
  },
};

export default RequestHandle;
