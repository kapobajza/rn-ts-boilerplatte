import React from 'react';
import { StyleSheet, View } from 'react-native';

import { applyColorTransparency, sizes } from '../../styles';

import GoBackButton from './GoBackButton';
import { NavigationBarProps } from './types';

export const NavigationBar: React.FC<NavigationBarProps> = ({
  withoutBackButton,
  renderCenterComponent,
  renderRightComponent,
  onBackPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {!withoutBackButton ? <GoBackButton onPress={onBackPress} /> : null}
      {renderCenterComponent && (
        <View style={styles.centerContainer}>{renderCenterComponent()}</View>
      )}
      {renderRightComponent && <View style={styles.rightContainer}>{renderRightComponent()}</View>}
    </View>
  );
};

const OFFSET = 85;

const styles = StyleSheet.create({
  centerContainer: {
    position: 'absolute',
    left: OFFSET,
    right: OFFSET,
    height: sizes.navigationHeaderHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    position: 'absolute',
    height: 60,
    justifyContent: 'center',
    right: 16,
  },
  container: {
    height: sizes.navigationHeaderHeight,
    backgroundColor: applyColorTransparency('black', 0),
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
