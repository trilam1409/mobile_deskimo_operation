import {createRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../configs/Routes';
import {StackActions} from '@react-navigation/native';
import {Route} from '@react-navigation/routers';

export const navigationRef = createRef<NavigationContainerRef>();

export const navigationGetCurrentRoute = (): Route<string> | undefined => {
  return navigationRef?.current?.getCurrentRoute();
};

export function navigationNavigate(
  name: keyof RootStackParamList,
  params?: object,
) {
  navigationRef?.current?.navigate(name, params);
}

export function navigationPush(
  name: keyof RootStackParamList,
  params?: object,
) {
  navigationRef?.current?.dispatch(StackActions.push(name, params));
}

export function navigationGoBack() {
  navigationRef?.current?.goBack();
}

export function navigationReset(name: keyof RootStackParamList) {
  navigationRef?.current?.reset({
    index: 0,
    routes: [
      {
        name,
      },
    ],
  });
}
