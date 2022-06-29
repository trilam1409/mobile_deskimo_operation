import {StyleSheet} from 'react-native';
import {
  DEFAULT_TEXT,
  DEFAULT_TEXT_FIELD,
  PRIMARY_RED,
  SECONDARY_GREY,
  WHITE_COLOR,
} from '../../styles/Colors.variable';
import {CaptionSmallSize, RegularSize} from '../../styles/Fonts.variable';

const styles = StyleSheet.create({
  pipeInput: {
    borderWidth: 1,
    borderColor: SECONDARY_GREY,
    borderRadius: 41,
    borderTopLeftRadius: 41,
    borderTopRightRadius: 41,
    backgroundColor: WHITE_COLOR,
  },

  pipeInputLabel: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    color: DEFAULT_TEXT_FIELD,
    left: 20,
    top: 13,
    transform: [{translateX: -4}, {translateY: -25}],
    zIndex: 1,
    lineHeight: 21,
    paddingHorizontal: 4,
  },

  phoneContainer: {
    flexDirection: 'row',
  },

  phoneContainerPadding: {
    paddingBottom: 10,
  },

  phoneFlagZone: {
    borderWidth: 1,
    borderColor: SECONDARY_GREY,
    borderBottomLeftRadius: 41,
    borderTopLeftRadius: 41,
    borderRightWidth: 0,
    height: 48,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneTextFlag: {
    color: DEFAULT_TEXT,
    fontSize: RegularSize,
    paddingLeft: 4,
  },

  phonePickerModal: {
    justifyContent: 'center',
  },

  phonePickerMain: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    width: '100%',
  },

  phonePickerItem: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  phonePickerImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    top: 6,
  },

  phonePickerText: {
    color: DEFAULT_TEXT,
    fontSize: RegularSize,
    paddingLeft: 12,
  },

  phoneInput: {
    borderWidth: 1,
    borderColor: SECONDARY_GREY,
    borderBottomRightRadius: 41,
    borderTopRightRadius: 41,
    borderTopLeftRadius: 0,
  },

  errors: {
    position: 'absolute',
    left: 0,
    bottom: 14,
    fontSize: CaptionSmallSize,
    color: PRIMARY_RED,
    paddingLeft: 20,
  },
});

export default styles;
