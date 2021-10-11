import { Alert } from 'react-native';
import {
  MutationFunction,
  useMutation as useMutationDefault,
  UseMutationOptions,
  useQueryClient,
  QueryKey,
} from 'react-query';

import { strings } from '../../strings';

export interface ExtendedMutationOptions<TData, TVariables, TContext, TUpdateData>
  extends UseMutationOptions<TData, Error, TVariables, TContext> {
  queryKey?: QueryKey;
  onUpdateData?: (oldData: TUpdateData | undefined, newData: TVariables) => TUpdateData;
  onStartMutating?: (data: TVariables) => void;
}

export function useMutation<TUpdateData = unknown, TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  {
    queryKey,
    onUpdateData,
    onStartMutating,
    ...options
  }: ExtendedMutationOptions<TData, TVariables, TData, TUpdateData> = {},
) {
  const queryClient = useQueryClient();

  return useMutationDefault<TData, Error, TVariables, TData>(mutationFn, {
    onMutate: (data: TVariables) => {
      onStartMutating?.(data);
      let previousData: TData | undefined = undefined;

      if (queryKey) {
        previousData = queryClient.getQueryData<TData | undefined>(queryKey);

        queryClient.setQueryData<TUpdateData | undefined>(queryKey, (old) => {
          if (old) {
            return onUpdateData ? onUpdateData(old, data) : old;
          }

          queryClient.removeQueries(queryKey);
        });
      }

      return previousData;
    },
    onError: (err, variables, context) => {
      Alert.alert(strings.error, err.message, [
        {
          text: strings.ok,
        },
      ]);

      if (context && queryKey) {
        queryClient.setQueryData(queryKey, context);
      }
    },
    ...options,
  });
}
