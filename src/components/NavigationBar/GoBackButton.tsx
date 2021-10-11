import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { Insets, StyleSheet, TouchableOpacity } from 'react-native';

import { strings } from '../../strings';
import { Colors } from '../../styles';
import { Text } from '../Text';

interface Props {
  onPress?: () => void;
  color?: keyof typeof Colors;
}

const backButtonHitSlop: Insets = { top: 10, bottom: 10, left: 20, right: 30 };

const GoBackButton: FC<Props> = ({ onPress, color = 'black' }) => {
  const navigation = useNavigation();

  const onBackHandler = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  }, [navigation, onPress]);

  return (
    <TouchableOpacity
      style={styles.backContainer}
      onPress={onBackHandler}
      hitSlop={backButtonHitSlop}>
      <Text weight="bold" transform="uppercase" color={color}>
        {strings.back}
      </Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  backContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 60,
  },
  backText: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
