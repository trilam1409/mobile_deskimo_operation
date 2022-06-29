import React from 'react';
import {ButtonPipe} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Action = () => {
  const navigation = useNavigation();

  const _onPressCheckIn = () => {
    navigation.navigate('Scanner');
  };

  return (
    <>
      <ButtonPipe label={'Check In'} onPress={_onPressCheckIn} />
      <ButtonPipe label={'Check Out'} onPress={_onPressCheckIn} />
    </>
  );
};

export default Action;
