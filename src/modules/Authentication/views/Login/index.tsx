import React, {useContext, useRef} from 'react';
import {Text} from 'react-native';
import MasterContainer from '../../../App/views/Master';
import LoginStyles from '../../styles/Login.styles';
import {LocalizationContext} from '../../../../locales/Translation';
import {Formik} from 'formik';
import * as yup from 'yup';
import {InputPipe} from '../../../../components/Input';
import {ButtonPipe} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const {translations} = useContext(LocalizationContext);
  const navigation = useNavigation();

  const passwordRef = useRef(null);

  const _onSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <MasterContainer headerTopLogo>
      <Text style={LoginStyles.title}>{translations.login.title}</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={yup.object().shape({
        //   password: yup.string().required(translations.fieldError.require),
        //   email: yup
        //     .string()
        //     .email(translations.fieldError.email)
        //     .required(translations.fieldError.require),
        // })}
        onSubmit={_onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isSubmitting,
          touched,
        }) => (
          <>
            <InputPipe
              keyboardType={'email-address'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              label={translations.fieldLabel.email}
              errors={errors.email}
              touched={touched.email}
              disabled={isSubmitting}
              returnKeyType={'next'}
              autoCapitalize={'words'}
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />
            <InputPipe
              ref={passwordRef}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              label={translations.fieldLabel.password}
              errors={errors.password}
              touched={touched.password}
              disabled={isSubmitting}
              returnKeyType={'done'}
              onSubmitEditing={handleSubmit}
              secureTextEntry
            />
            <ButtonPipe
              label={translations.label.continue}
              isSubmitting={isSubmitting}
              onPress={handleSubmit}
              //disabled={!values.email.length || !values.password.length}
            />
          </>
        )}
      </Formik>
    </MasterContainer>
  );
};

export default Login;
