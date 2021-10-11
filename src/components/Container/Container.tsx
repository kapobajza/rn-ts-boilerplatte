import React, { FC, useMemo } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';

import { containerStyles } from '../../styles';
import { FillLoading } from '../Loading';

import { ContainerProps } from './types';

export const Container: FC<ContainerProps> = ({
  center,
  style,
  children,
  fill = true,
  isLoading,
  centerHorizontal,
  spacing,
  ...rest
}) => {
  const rootStyle = useMemo(() => {
    const finalStyle: StyleProp<ViewStyle> = [style];

    if (center) {
      finalStyle.push(containerStyles.fillAndCenter);
    }

    if (fill) {
      finalStyle.push(containerStyles.fill);
    }

    if (centerHorizontal) {
      finalStyle.push(containerStyles.fillAndCenterHorizontal);
    }

    if (spacing) {
      finalStyle.push({ margin: spacing });
    }

    return finalStyle;
  }, [center, centerHorizontal, fill, spacing, style]);

  const Component = useMemo(() => (isLoading ? <FillLoading /> : children), [children, isLoading]);

  return (
    <SafeAreaView {...rest} style={rootStyle}>
      {Component}
    </SafeAreaView>
  );
};

export default Container;
