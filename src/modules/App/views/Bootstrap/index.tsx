import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {LocalizationContext} from '../../../../locales/Translation';
import MasterStyle from '../../styles/Master.style';
import SplashScreen from 'react-native-splash-screen';
import {isAuthAction} from '../../../Authentication/actions/AuthAction';
import {IS_AUTH_STORAGE} from '../../../../configs/GlobalStorageKey';
import {getFromStorage} from '../../../../services/AsyncStorageService';
import {useNavigation} from '@react-navigation/native';

const BootstrapContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {initializeAppLanguage} = useContext(LocalizationContext);

  useEffect(() => {
    (async () => {
      let isAuth: boolean = await getFromStorage(IS_AUTH_STORAGE);
      await _preProcessApp(isAuth);
      await _checkAppStatus(isAuth);
      SplashScreen.hide();
    })();
  }, []);

  const _preProcessApp = async (isAuth: boolean) => {
    initializeAppLanguage();
    dispatch(isAuthAction(isAuth));
  };

  const _checkAppStatus = async (isAuth: boolean) => {
    if (isAuth) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Authentication',
          },
        ],
      });
    }
  };

  return <View style={MasterStyle.flex} />;
};

export default BootstrapContainer;
