import React, {forwardRef, useContext} from 'react';
import {View, Text} from 'react-native';
import Input, {InputProps} from './Input';
import {DEFAULT_TEXT_FIELD} from '../../styles/Colors.variable';
import Styles from './styles';
import {splitTextToGroupFour} from '../../services/FormatTextService';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import MasterStyle from '../../styles/Master.style';
import {LocalizationContext} from '../../locales/Translation';

interface Props extends InputProps {
  errors?: string | undefined;
  touched?: string | undefined;
  countryCode: CountryCode;
  value: string;
  onChangeText: (text: string) => void;
  changeCountry: (value: object) => void;
  label?: string;
  [x: string]: any;
}

export const InputPhoneWithFlag = forwardRef(
  (
    {
      errors,
      touched,
      countryCode,
      value,
      onChangeText,
      changeCountry,
      label,
      ...props
    }: Props,
    ref,
  ) => {
    const {translations} = useContext(LocalizationContext);
    const isError = errors && touched;

    return (
      <View
        style={[
          Styles.phoneContainer,
          Boolean(isError) && Styles.phoneContainerPadding,
        ]}>
        <View style={Styles.phoneFlagZone}>
          <CountryPicker
            {...{
              countryCode,
              withCallingCodeButton: true,
              withCallingCode: true,
              withFilter: true,
              onSelect: value => changeCountry(value),
              filterProps: {placeholder: translations.fieldLabel.countryFilter},
            }}
          />
        </View>
        <View style={MasterStyle.flex}>
          <Input
            ref={ref}
            {...props}
            value={countryCode === 'SG' ? splitTextToGroupFour(value) : value}
            onChangeText={(text: string) => {
              let result = text;
              if (countryCode === 'SG') {
                result = splitTextToGroupFour(text);
              }
              onChangeText(result);
            }}
            placeholderTextColor={DEFAULT_TEXT_FIELD}
            placeholder={'0000 0000 0000'}
            style={Styles.phoneInput}
            keyboardType={'number-pad'}
            importantForAutofill={'yes'}
            autoCompleteType={'tel'}
            textContentType={'telephoneNumber'}
          />
        </View>
        {label ? <Text style={Styles.pipeInputLabel}>{label}</Text> : null}
        {isError && (
          <Text style={Styles.errors} numberOfLines={1}>
            {errors}
          </Text>
        )}
      </View>
    );
  },
);

export default InputPhoneWithFlag;
