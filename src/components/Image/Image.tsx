import React, { useMemo } from 'react';
import {
  Image as NativeImage,
  ImageSourcePropType,
  ImageProps as NativeImageProps,
} from 'react-native';

export interface ImageProps extends Omit<NativeImageProps, 'source'> {
  defaultImageSource: ImageSourcePropType;
  uri: string | undefined;
}

export const Image: React.FC<ImageProps> = ({ defaultImageSource, uri, style, ...rest }) => {
  const imageSource = useMemo(
    () => (uri ? { uri } : defaultImageSource),
    [defaultImageSource, uri],
  );

  return <NativeImage style={style} {...rest} source={imageSource} />;
};
