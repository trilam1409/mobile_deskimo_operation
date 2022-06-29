import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {WHITE_COLOR} from '../modules/App/styles/Colors.variable';
import BootstrapContainer from '../modules/App/views/Bootstrap';
import LoginContainer from '../modules/Authentication/views/Login';
import HomeContainer from '../modules/Home/views/Home';
import ScannerContainer from '../modules/Home/views/Scanner';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={'Bootstrap'}
      detachInactiveScreens={false}
      screenOptions={{
        cardStyle: {backgroundColor: WHITE_COLOR},
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Bootstrap"
        component={BootstrapContainer}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="Authentication"
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scanner"
        component={ScannerContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

/**
 * Have to add name of screen to RootStackParamList
 */

export type RootStackParamList = {
  Bootstrap: undefined;
  Authentication: undefined;
  Home: undefined;
  Scanner: undefined;
};
