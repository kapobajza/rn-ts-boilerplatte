import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  fillAndCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillAndCenterHorizontal: {
    flex: 1,
    alignItems: 'center',
  },
  absoluteFillAndCenter: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  centerHorizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexGrow: {
    flexGrow: 1,
  },
});
