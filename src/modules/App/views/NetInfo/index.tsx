import React, {useContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Text, SafeAreaView, AppState} from 'react-native';
import {LocalizationContext} from '../../../../locales/Translation';
import NetInfoStyles from '../../styles/NetInfo.style';
import Collapsible from 'react-native-collapsible';

const Index = () => {
  const {translations} = useContext(LocalizationContext);

  const [isConnect, setIsConnect] = useState<boolean>(true);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      _handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const unsubscribeNetInfo = netInfoHandle();

    return () => {
      unsubscribeNetInfo();
    };
  }, [isConnect]);

  const netInfoHandle = () => {
    return NetInfo.addEventListener(({isConnected}) => {
      _generalSateChange(isConnected);
    });
  };

  const _handleAppStateChange = (nextAppState: any) => {
    if (nextAppState === 'active') {
      NetInfo.fetch().then(({isConnected}) => {
        _generalSateChange(isConnected);
      });
    }
  };

  const _generalSateChange = (isConnected: boolean | null) => {
    const onlineMode = Boolean(isConnected);
    if (isConnect !== onlineMode) {
      setIsConnect(onlineMode);
    }
  };

  return (
    <Collapsible collapsed={isConnect} style={NetInfoStyles.wrapper} >
      <SafeAreaView>
        <Text style={NetInfoStyles.text}>
          {translations.netInfo.noInternet}
        </Text>
      </SafeAreaView>
    </Collapsible>
  );
};

export default Index;
