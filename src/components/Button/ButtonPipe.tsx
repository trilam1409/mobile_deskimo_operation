import React, {forwardRef} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {DEFAULT_TEXT} from '../../modules/App/styles/Colors.variable';
import Styles from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
  containerStyle?: object;
  labelStyle?: object;
  labelUppercase?: boolean;
  isSubmitting?: boolean;
  disabled?: boolean;
  [x: string]: any;
}

const ButtonPipe = forwardRef<any, Props>(
  (
    {
      label,
      containerStyle,
      labelStyle,
      labelUppercase,
      isSubmitting,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        disabled={disabled || isSubmitting}
        style={[
          Styles.button,
          disabled && Styles.buttonDisabled,
          containerStyle,
        ]}>
        {isSubmitting ? (
          <ActivityIndicator size="small" color={DEFAULT_TEXT} />
        ) : (
          <Text
            style={[
              Styles.title,
              disabled && Styles.titleDisabled,
              labelUppercase && Styles.labelUppercase,
              labelStyle,
            ]}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    );
  },
);

export default ButtonPipe;
