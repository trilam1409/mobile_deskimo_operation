import React, {forwardRef, useEffect, useState} from 'react';
import {TextInput, StyleSheet, View, TextInputProps, Text} from 'react-native';
import {CaptionSmallSize, RegularSize} from '../../styles/Fonts.variable';
import {
  ACTIVE_TEXT_FIELD,
  DEFAULT_TEXT_FIELD,
  PRIMARY_RED,
  WHITE_COLOR,
} from '../../styles/Colors.variable';

export interface InputProps extends TextInputProps {
  containerStyle?: object;
  style?: object;
  right?: JSX.Element;
  errors?: string;
  touched?: string;
  [x: string]: any;
}

const Input = forwardRef<any, InputProps>(
  ({containerStyle, style, right, errors, touched, ...props}, ref) => {
    // 'show' state is used to trigger autocomplete input on Android
    const [shown, setShown] = useState(false);
    useEffect(() => {
      if (props.autoCompleteType) {
        setShown(true);
      }
    }, []);

    if (!shown && props.autoCompleteType) {
      return null;
    }
    return (
      <View style={[Styles.inputContainer, containerStyle]}>
        {right ? (
          <View>
            <TextInput
              ref={ref}
              {...props}
              style={[Styles.inputRight, style]}
              placeholderTextColor={DEFAULT_TEXT_FIELD}
            />
            <View style={Styles.rightContent}>{right}</View>
          </View>
        ) : (
          <TextInput
            ref={ref}
            {...props}
            style={[Styles.input, style]}
            placeholderTextColor={DEFAULT_TEXT_FIELD}
          />
        )}
        {errors && touched && (
          <Text numberOfLines={1} style={Styles.errors}>
            {errors}
          </Text>
        )}
      </View>
    );
  },
);

const Styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: 24,
    height: 48,
    fontSize: RegularSize,
    color: ACTIVE_TEXT_FIELD,
    backgroundColor: WHITE_COLOR,
  },
  inputRight: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 60,
    height: 48,
    fontSize: RegularSize,
    color: ACTIVE_TEXT_FIELD,
    backgroundColor: WHITE_COLOR,
  },
  rightContent: {
    position: 'absolute',
    right: 24,
    top: 0,
    bottom: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  errors: {
    fontSize: CaptionSmallSize,
    color: PRIMARY_RED,
    paddingLeft: 20,
  },
});

export default Input;
