import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  DEFAULT_TEXT,
  WHITE_COLOR,
  TERTIARY_GREY,
  PRIMARY_YELLOW,
  LIGHTEST_TEXT,
  PRIMARY_BLUE,
} from './Colors.variable';
import {
  SemiboldWeight,
  LargeHeadingSize,
  SmallSize,
  fontByPlatform,
} from './Fonts.variable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    fontSize: 30,
    ...fontByPlatform,
    fontWeight: SemiboldWeight,
    marginBottom: 30,
    color: DEFAULT_TEXT,
    paddingHorizontal: 24,
    // paddingTop: 24,
  },
  headerBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: TERTIARY_GREY,
  },
  headerTopWrap: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
    width: '100%',
  },

  headerTopItem: {
    flex: 2,
  },
  headerTop: {
    flex: 3,
    ...fontByPlatform,
    fontWeight: SemiboldWeight,
    textAlign: 'center',
    color: DEFAULT_TEXT,
    fontSize: 17,
  },
  headerTopOnly: {
    flex: 8,
  },
  headerTopRight: {
    flex: 2,
    alignItems: 'flex-end',
  },
  headerTopRightText: {
    color: LIGHTEST_TEXT,
    fontSize: SmallSize,
    ...fontByPlatform,
  },
  headerStaticWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  headerStaticIcon: {
    position: 'absolute',
    left: 12,
    top: 0,
  },
  //Util
  inlineFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  px0: {
    paddingHorizontal: 0,
  },
  py0: {
    paddingVertical: 0,
  },
  p16: {
    padding: 16,
  },
  px16: {
    paddingHorizontal: 16,
  },
  pt16: {
    paddingTop: 16,
  },
  pt0: {
    paddingTop: 0,
  },
  pt8: {
    paddingTop: 8,
  },
  pr8: {
    paddingRight: 8,
  },
  pb0: {
    paddingBottom: 0,
  },
  pb8: {
    paddingBottom: 8,
  },
  pb16: {
    paddingBottom: 16,
  },
  pl8: {
    paddingLeft: 8,
  },
  mt8: {
    marginTop: 8,
  },
  mx1: {
    marginHorizontal: 5,
  },
  my16: {
    marginVertical: 16,
  },
  mb4: {
    marginBottom: 20,
  },
  pl0: {
    paddingLeft: 0,
  },
  mb0: {
    marginBottom: 0,
  },
  mb8: {
    marginBottom: 8,
  },
  mr0: {
    marginRight: 0,
  },
  ml0: {
    marginLeft: 0,
  },
  ml4: {
    marginLeft: 4,
  },
  fontWeightBold: {
    ...fontByPlatform,
    fontWeight: SemiboldWeight,
  },
  textCenter: {
    textAlign: 'center',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textLinkUppercase: {
    textTransform: 'uppercase',
    color: PRIMARY_BLUE,
    fontSize: 11,
    lineHeight: 13,
  },
  //End Util
  section: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: WHITE_COLOR,
  },
  iconExpand: {
    position: 'absolute',
    top: '25%',
    right: 0,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: TERTIARY_GREY,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderTopColor: TERTIARY_GREY,
  },
  borderNone: {
    borderWidth: 0,
  },
  borderTopNone: {
    borderTopWidth: 0,
  },
  borderBottomNone: {
    borderBottomWidth: 0,
  },
  flex: {
    flex: 1,
  },
  flexWrapWrap: {
    flexWrap: 'wrap',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  horizontalSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWhite: {
    color: WHITE_COLOR,
  },
  //Text
  textPrimary: {
    color: PRIMARY_YELLOW,
  },
  textRight: {
    textAlign: 'right',
  },
  QRContainer: {
    borderWidth: 8,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
  },
  //Badge
  badgePill: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 14,
    color: DEFAULT_TEXT,
    overflow: 'hidden',
    marginTop: 5,
  },
  largeHeading: {
    fontSize: LargeHeadingSize,
    ...fontByPlatform,
    fontWeight: SemiboldWeight,
  },
  // Checkbox
  checkboxWrapper: {
    width: 24,
    height: 24,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_YELLOW,
  },
  checkboxIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  // Route
  iconTab: {
    width: 75,
    height: '100%',
    resizeMode: 'contain',
  },
  fontByPlatform: {
    ...fontByPlatform,
  },
});

export default styles;
