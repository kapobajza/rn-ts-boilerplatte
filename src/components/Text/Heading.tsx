import React, { FC } from 'react';

import { Text } from './Text';
import { TextProps } from './types';

export const Heading: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text size={24} weight="bold" {...rest}>
      {children}
    </Text>
  );
};

export default Heading;
