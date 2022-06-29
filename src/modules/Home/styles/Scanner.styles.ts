import {StyleSheet} from 'react-native';
import {PRIMARY_YELLOW, WHITE_COLOR} from '../../App/styles/Colors.variable';
import {
  fontByPlatform,
  Heading1Size,
  RegularSize,
  SemiboldWeight,
} from '../../App/styles/Fonts.variable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(64,64,64, 0.8)',
    flexGrow: 1,
  },
  innerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  cameraWrapper: {
    width: 231,
    height: 231,
    borderWidth: 4,
    borderColor: PRIMARY_YELLOW,
    padding: 6,
    marginTop: 20,
  },
  cameraStyle: {
    width: 211,
    height: 211,
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  topStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Heading1Size,
    color: WHITE_COLOR,
    paddingBottom: 12,
    fontWeight: SemiboldWeight,
    ...fontByPlatform,
    textAlign: 'center',
    letterSpacing: 1,
  },
  description: {
    color: WHITE_COLOR,
    fontSize: RegularSize,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  backText: {
    color: WHITE_COLOR,
    fontSize: RegularSize,
  },
});

export default styles;
