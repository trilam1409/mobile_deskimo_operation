import {StyleSheet} from 'react-native';
import {
  fontByPlatform,
  MediumWeight,
  RegularSize,
} from '../../styles/Fonts.variable';
import {
  PRIMARY_YELLOW,
  DEFAULT_TEXT,
  PRIMARY_GREY,
  LIGHTEST_TEXT,
  WHITE_COLOR,
  SECONDARY_GREY,
  BLACK_COLOR,
} from '../../styles/Colors.variable';

const styles = StyleSheet.create({
  title: {
    fontSize: RegularSize,
    ...fontByPlatform,
    color: DEFAULT_TEXT,
    fontWeight: MediumWeight,
  },
  titleDisabled: {
    color: LIGHTEST_TEXT,
  },
  labelUppercase: {
    textTransform: 'uppercase',
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: PRIMARY_YELLOW,
    height: 56,
    paddingHorizontal: 12,
    zIndex: 0,
  },
  buttonDisabled: {
    backgroundColor: PRIMARY_GREY,
  },
});

export const BackButtonStyles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: WHITE_COLOR,
    borderWidth: 1,
    borderColor: SECONDARY_GREY,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    shadowColor: BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
  },
  containerLeft: {
    transform: [{rotate: '0deg'}],
  },
  containerUp: {
    transform: [{rotate: '90deg'}],
  },
  containerRight: {
    transform: [{rotate: '180deg'}],
  },
  containerDown: {
    transform: [{rotate: '275deg'}],
  },
  icon: {
    width: 8,
    resizeMode: 'contain',
  },
});

export default styles;
