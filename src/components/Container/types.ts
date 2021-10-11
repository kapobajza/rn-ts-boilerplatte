import { ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
  center?: boolean;
  fill?: boolean;
  isLoading?: boolean;
  centerHorizontal?: boolean;
  spacing?: number;
}
