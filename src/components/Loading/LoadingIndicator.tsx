import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

import { Colors } from '../../styles';

type LoadingSize = number | 'small' | 'large';

interface Props {
  color?: keyof typeof Colors;
  size?: LoadingSize;
  style?: StyleProp<ViewStyle>;
}

export const LoadingIndicator: React.FC<Props> = ({ color = 'black', size = 'large', style }) => {
  return <ActivityIndicator color={Colors[color]} size={size} style={style} />;
};
