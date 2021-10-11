import React from 'react';

import { Text } from '../Text';

import { NavigationBar } from './NavigationBar';
import { TitledNavigationBarProps } from './types';

export const TitledNavBar: React.FC<TitledNavigationBarProps> = ({
  withoutBackButton,
  title,
  onBackPress,
  renderRightComponent,
  ...rest
}) => {
  const renderCenterComponent = () => (
    <Text weight="bold" size={16} center>
      {title}
    </Text>
  );

  return (
    <NavigationBar
      renderRightComponent={renderRightComponent}
      withoutBackButton={withoutBackButton}
      onBackPress={onBackPress}
      {...rest}
      renderCenterComponent={renderCenterComponent}
    />
  );
};
