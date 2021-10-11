import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from '../../styles';

import { ImageProps, Image } from './Image';

interface Props extends Omit<ImageProps, 'defaultImageSource'> {
  uri: string | undefined;
  size?: number;
}

export const Avatar: React.FC<Props> = ({ style, uri, size = 122 }) => {
  const imageStyle = useMemo(
    () => [styles.oval, { width: size, height: size }, style],
    [size, style],
  );

  return (
    <Image
      style={imageStyle}
      uri={uri}
      defaultImageSource={require('../../../assets/images/default/profile.png')}
    />
  );
};

const styles = StyleSheet.create({
  oval: {
    borderRadius: 99999,
    backgroundColor: Colors.white,
  },
});
