import { StyleProp, ViewStyle } from 'react-native';

export interface NavigationBarProps {
  withoutBackButton?: boolean;
  renderCenterComponent?: (() => React.ReactElement | null) | null;
  renderRightComponent?: (() => React.ReactElement | null) | null;
  onBackPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface TitledNavigationBarProps
  extends Omit<NavigationBarProps, 'renderCenterComponent'> {
  title: string;
}
