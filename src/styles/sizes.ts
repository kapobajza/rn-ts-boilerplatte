import { Dimensions, Insets, PixelRatio } from 'react-native';

export const screenSize = Dimensions.get('screen');
export const windowSize = Dimensions.get('window');

const MEDIUM_HIT_SLOP_SIZE = 20;

export const buttonMediumHitSlop: Insets = {
  bottom: MEDIUM_HIT_SLOP_SIZE,
  right: MEDIUM_HIT_SLOP_SIZE,
  left: MEDIUM_HIT_SLOP_SIZE,
  top: MEDIUM_HIT_SLOP_SIZE,
};

const SMALL_HIT_SLOP_SIZE = 10;

export const buttonSmallHitSlop: Insets = {
  bottom: SMALL_HIT_SLOP_SIZE,
  right: SMALL_HIT_SLOP_SIZE,
  left: SMALL_HIT_SLOP_SIZE,
  top: SMALL_HIT_SLOP_SIZE,
};

export const screenSizePx = {
  width: PixelRatio.getPixelSizeForLayoutSize(screenSize.width),
  height: PixelRatio.getPixelSizeForLayoutSize(screenSize.height),
};

export const navigationHeaderHeight = 60;
