import React, {forwardRef} from 'react';
import Styles from './styles';
import Input, {InputProps} from './Input';
import {View, Text} from 'react-native';

export interface InputPipeProps extends InputProps {
  errors?: string;
  touched?: string;
  label?: string;
  style?: object;
  labelStyle?: object;
  value: string;
  [x: string]: any;
}

const InputPipe = forwardRef<any, InputPipeProps>(
  ({errors, touched, label, labelStyle, value, style, ...props}, ref) => {
    return (
      <View>
        <Input
          ref={ref}
          {...props}
          errors={errors}
          touched={touched}
          style={[Styles.pipeInput, style]}
          value={value}
        />
        {label && (
          <Text style={[Styles.pipeInputLabel, labelStyle]}>{label}</Text>
        )}
      </View>
    );
  },
);

export default InputPipe;
