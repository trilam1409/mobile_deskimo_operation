import React from 'react';
import configureStore from './Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './configs/Routes';
import {navigationRef} from './services/NavigationService';
import {LocalizationProvider} from './locales/Translation';
import NetInfoContainer from './modules/App/views/NetInfo';
import RequestHandle from './services/RequestHandle';

RequestHandle.init();

const App = () => {
  return (
    <Provider store={configureStore().store}>
      <SafeAreaProvider>
        <LocalizationProvider>
          <NetInfoContainer />
          <NavigationContainer ref={navigationRef}>
            <Routes />
          </NavigationContainer>
        </LocalizationProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
