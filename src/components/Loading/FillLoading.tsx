import React from 'react';
import { View } from 'react-native';

import { containerStyles } from '../../styles';

import { LoadingIndicator } from './LoadingIndicator';

export const FillLoading = () => {
  return (
    <View style={containerStyles.fillAndCenter}>
      <LoadingIndicator />
    </View>
  );
};
