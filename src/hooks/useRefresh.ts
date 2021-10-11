import { useState } from 'react';

export function useRefresh(action: () => Promise<any>) {
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<Error>();

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await action();
    } catch (e) {
      setError(e);
    } finally {
      setRefreshing(false);
    }
  };

  return { refreshing, error, onRefresh };
}
