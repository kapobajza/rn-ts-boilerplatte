import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ListRenderItemInfo, TouchableOpacity, View, StyleSheet } from 'react-native';

import { MainRouterScreens } from '../../../router';
import { Avatar, Container, ListView, TitledNavBar, Text } from '../../../components';
import { strings } from '../../../strings';
import { useUserListQuery } from '../hooks';
import { UserModel } from '../models';
import { useRefresh } from '../../../hooks';
import { sizes } from '../../../styles';

interface Props {
  navigation: NativeStackNavigationProp<MainRouterScreens, 'UserList'>;
}

export const UserListScreen: FC<Props> = ({ navigation }) => {
  const { data, isLoading, isFetchingNextPage, refetch, onEndReached } = useUserListQuery();

  const { onRefresh, refreshing } = useRefresh(async () => {
    await refetch();
  });

  const renderItem = ({ item }: ListRenderItemInfo<UserModel>) => {
    const onItemPress = () => {
      navigation.navigate('UserDetails', { id: item.id });
    };

    return (
      <TouchableOpacity style={styles.item} onPress={onItemPress}>
        <Avatar uri={item.avatar} style={styles.avatar} size={90} />
        <View>
          {item.name ? (
            <Text weight="bold" size={18}>
              {item.name}
            </Text>
          ) : null}
          {item.createdAt ? (
            <Text color="bunker" size={15}>
              {item.createdAt}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  const renderNavRightComponent = () => {
    const onAddUserPress = () => {
      navigation.navigate('AddUser');
    };

    return (
      <TouchableOpacity hitSlop={sizes.buttonMediumHitSlop} onPress={onAddUserPress}>
        <Text weight="bold" transform="uppercase">
          {strings.addUser}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <TitledNavBar title={strings.userList} renderRightComponent={renderNavRightComponent} />
      <ListView
        data={data}
        renderItem={renderItem}
        initialLoading={isLoading}
        loading={isFetchingNextPage}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onEndReached}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  avatar: {
    marginRight: 15,
  },
});
