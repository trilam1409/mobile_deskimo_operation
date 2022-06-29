import {StyleSheet} from 'react-native';
import {PRIMARY_YELLOW, DEFAULT_TEXT} from './Colors.variable';
import {SmallSize} from './Fonts.variable';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: PRIMARY_YELLOW,
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: DEFAULT_TEXT,
    fontSize: SmallSize,
    textAlign: 'center',
  },
});

export default styles;
