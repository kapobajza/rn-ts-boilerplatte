import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { Button, Container, TitledNavBar } from '../../../components';
import { MainRouterScreens } from '../../../router';
import { strings } from '../../../strings';

interface Props {
  navigation: NativeStackNavigationProp<MainRouterScreens, 'Home'>;
}

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const onGoToUserListPress = () => {
    navigation.navigate('UserList');
  };

  const onGoToFormWithManyFieldsPress = () => {
    navigation.navigate('Form');
  };

  return (
    <Container>
      <TitledNavBar title={strings.home} withoutBackButton />
      <Container center>
        <Button onPress={onGoToUserListPress} title={strings.goToUserList} bottomSpace={10} />
        <Button
          onPress={onGoToFormWithManyFieldsPress}
          title={strings.goToFormWManyFields}
          type="secondary"
        />
      </Container>
    </Container>
  );
};
