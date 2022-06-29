import React from 'react';
import {Image, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {FuncVoidType} from '../../configs/DeclareType';
import {BackButtonStyles} from './styles';

interface Props extends TouchableOpacityProps {
  onPress: FuncVoidType;
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
  containerStyle?: object;
}

const ButtonArrow = ({onPress, arrowDirection, containerStyle}: Props) => {
  const _renderArrowDirection = () => {
    switch (arrowDirection) {
      case 'up':
        return 'containerUp';
      case 'down':
        return 'containerDown';
      case 'right':
        return 'containerRight';
      default:
        return 'containerLeft';
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        BackButtonStyles.container,
        BackButtonStyles[_renderArrowDirection()],
        containerStyle,
      ]}>
      <Image
        source={require('../../assets/icon/arrowLeftIcon.png')}
        style={BackButtonStyles.icon}
      />
    </TouchableOpacity>
  );
};

export default ButtonArrow;
