import React from 'react';
import { StyleSheet } from 'react-native';

import { Avatar, Container, Heading, TitledNavBar } from '../../../components';
import { strings } from '../../../strings';
import { useUserDetailsQuery } from '../hooks';

export const UserDetailsScreen = () => {
  const { data, isLoading } = useUserDetailsQuery();
  const { avatar, name } = data ?? {};

  return (
    <Container>
      <TitledNavBar title={strings.userDetails} />
      <Container isLoading={isLoading} centerHorizontal>
        <Avatar uri={avatar} style={styles.avatar} />
        <Heading>{name}</Heading>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 25,
  },
});
