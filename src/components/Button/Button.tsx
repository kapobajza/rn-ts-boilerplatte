import React, { FC, useMemo } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { Colors } from '../../styles';
import { LoadingIndicator } from '../Loading';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  onPress,
  title,
  hitSlop,
  type = 'primary',
  bottomSpace = 0,
  loading,
}) => {
  const { containerStyle, textStyle } = useMemo(() => {
    let containerStyle: StyleProp<ViewStyle> = [
      {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 99999,
        marginBottom: bottomSpace,
      },
    ];

    let textStyle: StyleProp<TextStyle> = [];

    switch (type) {
      case 'primary':
        containerStyle.push({
          backgroundColor: Colors.eucalyptusGreen,
        });
        break;

      case 'secondary':
        containerStyle.push({
          backgroundColor: Colors.bunker,
        });
        textStyle.push({
          color: Colors.white,
        });
        break;

      default:
        break;
    }

    return { containerStyle, textStyle };
  }, [bottomSpace, type]);

  return (
    <TouchableOpacity onPress={onPress} hitSlop={hitSlop} style={containerStyle} disabled={loading}>
      {loading ? (
        <LoadingIndicator size="small" />
      ) : (
        <Text transform="uppercase" weight="bold" color="black" center style={textStyle}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
