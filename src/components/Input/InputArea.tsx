import React, {forwardRef} from 'react';
import InputPipe, {InputPipeProps} from './InputPipe';
import {StyleSheet, View} from 'react-native';
import {SECONDARY_GREY, WHITE_COLOR} from '../../styles/Colors.variable';

interface Props extends InputPipeProps {
  style?: object;
  editable?: boolean;
  [x: string]: any;
}

const InputArea = forwardRef(({style, editable, ...props}: Props, ref) => {
  return (
    <View style={[Style.container, editable === false && Style.disabled]}>
      <InputPipe
        ref={ref}
        {...props}
        autoCapitalize={'words'}
        multiline={true}
        style={[Style.inputArea, style]}
        containerStyle={Style.containerStyle}
        editable={editable}
        labelStyle={Style.labelStyle}
        textAlignVertical={'top'}
      />
    </View>
  );
});

const Style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: SECONDARY_GREY,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: WHITE_COLOR,
    padding: 16,
    marginBottom: 20,
  },
  containerStyle: {
    marginBottom: 0,
  },
  disabled: {
    backgroundColor: 'rgba(241, 241, 241, 1)',
  },
  inputArea: {
    paddingHorizontal: 0,
    borderWidth: 0,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 96,
    paddingTop: 0,
    paddingBottom: 0,
  },
  labelStyle: {
    top: -3,
    left: 0,
  },
});

export default InputArea;
