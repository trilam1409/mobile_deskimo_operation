import {Platform} from 'react-native';

export const SemiboldWeight = 'bold';
export const MediumWeight = '500';
export const RegularWeight = '400';

export const LargeHeadingSize = 32;
export const Heading1Size = 24;
export const Heading2Size = 20;
export const Heading3Size = 18;
export const HeadingTitle = 21;

export const RegularSize = 16;
export const SmallSize = 14;

export const CaptionLargeSize = 13;
export const CaptionSize = 12;
export const CaptionSmallSize = 11;
export const ExtraSmallSize = 9;
export const ExtraSmallSize2 = 8;

export const ButtonTextSize = 16;
export const ButtonTextSmallSize = 12;

export const fontByPlatform = Platform.select({
  ios: {},
  android: {fontFamily: 'system font'},
});
