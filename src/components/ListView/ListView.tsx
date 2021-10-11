import React, { useMemo } from 'react';
import { FlatList, FlatListProps, RefreshControl, StyleSheet } from 'react-native';

import { containerStyles } from '../../styles';
import { LoadingIndicator } from '../Loading';

export interface ListViewProps<Item> extends FlatListProps<Item> {
  initialLoading?: boolean;
  loading?: boolean;
  isError?: boolean;
  error?: Error;
}

export function ListView<Item = any>({
  onRefresh,
  refreshing = false,
  ListFooterComponent,
  initialLoading,
  loading,
  ...rest
}: ListViewProps<Item>) {
  const RefreshComponent = useMemo(
    () =>
      onRefresh ? (
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing as boolean} />
      ) : undefined,
    [onRefresh, refreshing],
  );

  const { ListFooter, listFooterStyle, contentContainerStyle } = useMemo(() => {
    const ListFooter = (
      <>
        {initialLoading ? <LoadingIndicator /> : null}
        {ListFooterComponent}
        {loading ? <LoadingIndicator style={styles.bottomLoading} /> : null}
      </>
    );

    const listFooterStyle = initialLoading ? containerStyles.fillAndCenter : undefined;
    const contentContainerStyle = initialLoading ? containerStyles.flexGrow : undefined;

    return { ListFooter, listFooterStyle, contentContainerStyle };
  }, [ListFooterComponent, initialLoading, loading]);

  return (
    <FlatList
      contentContainerStyle={contentContainerStyle}
      {...rest}
      ListFooterComponent={ListFooter}
      ListFooterComponentStyle={listFooterStyle}
      refreshControl={RefreshComponent}
    />
  );
}

const styles = StyleSheet.create({
  bottomLoading: {
    marginTop: 20,
  },
});
