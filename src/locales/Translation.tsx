import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState} from 'react';
import LocalizedStrings from 'react-native-localization';
import {APP_LANGUAGE_CACHE} from '../configs/Constants';
import en from './en.json';
import id from './id.json';
import moment from 'moment';
import 'moment/locale/id';
import 'moment/locale/en-sg';

const DEFAULT_LANGUAGE = 'en';

const languages = {en, id};

const translations = new LocalizedStrings(languages);

export const LocalizationContext = createContext({
  translations,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAppLanguage: (language: string) => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

export const LocalizationProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const setLanguage = async (language: string) => {
    if (language === appLanguage) {
      return;
    }
    translations.setLanguage(language);
    setAppLanguage(language);
    moment.locale(language);
    await AsyncStorage.setItem(APP_LANGUAGE_CACHE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage =
      (await AsyncStorage.getItem(APP_LANGUAGE_CACHE)) || DEFAULT_LANGUAGE;
    await setLanguage(currentLanguage);
    moment.locale(currentLanguage);
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
