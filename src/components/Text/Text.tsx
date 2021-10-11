import React, { FC, useMemo } from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';

import { Colors } from '../../styles';

import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  children,
  center = false,
  size = 14,
  color = 'black',
  weight,
  style,
  transform,
  ...rest
}) => {
  const textStyle = useMemo(() => {
    const finalStyle: StyleProp<TextStyle> = {};

    if (center) {
      finalStyle.textAlign = 'center';
    }

    return [
      {
        ...finalStyle,
        fontSize: size,
        color: Colors[color],
        fontWeight: weight,
        textTransform: transform,
      },
      style,
    ];
  }, [center, color, size, style, transform, weight]);

  return (
    <RNText {...rest} style={textStyle}>
      {children}
    </RNText>
  );
};

export default Text;
