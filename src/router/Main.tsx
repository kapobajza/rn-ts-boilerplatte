import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddUserScreen, UserDetailsScreen, UserListScreen } from '../modules/user';
import { FormScreen, HomeScreen } from '../modules/home';

import { MainRouterScreens } from './types';
import StackNavWithoutHeader from './StackNavWithoutHeader';

const Stack = createNativeStackNavigator<MainRouterScreens>();

export function MainRouter() {
  return (
    <NavigationContainer>
      <StackNavWithoutHeader>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </StackNavWithoutHeader>
    </NavigationContainer>
  );
}
