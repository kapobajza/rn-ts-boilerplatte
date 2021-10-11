import { TextProps as RNTextProps } from 'react-native';

import { Colors } from '../../styles';

export interface TextProps extends RNTextProps {
  center?: boolean;
  size?: number;
  color?: keyof typeof Colors;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
