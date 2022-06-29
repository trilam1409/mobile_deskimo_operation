import {IS_AUTH_ACTION} from '../configs/Constants';

export const isAuthAction = (data: boolean) => {
  return {
    type: IS_AUTH_ACTION,
    payload: data,
  };
};
