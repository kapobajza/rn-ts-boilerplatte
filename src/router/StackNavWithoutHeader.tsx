import React, { useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NativeStackNavigationOptions,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';

const Stack = createNativeStackNavigator();

// Stack navigator without the header component (a custom header component will be used)
const StackNavWithoutHeader: React.FC<NativeStackNavigatorProps> = ({
  children,
  screenOptions,
  ...rest
}) => {
  const options = useMemo<NativeStackNavigationOptions>(() => {
    return {
      ...(screenOptions ?? {}),
      header: () => null,
    };
  }, [screenOptions]);

  return (
    <Stack.Navigator {...rest} screenOptions={options}>
      {children}
    </Stack.Navigator>
  );
};

export default StackNavWithoutHeader;
