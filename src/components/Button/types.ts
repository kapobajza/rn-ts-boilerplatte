import { Insets } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  hitSlop?: Insets;
  type?: 'primary' | 'secondary';
  bottomSpace?: number;
  loading?: boolean;
}
