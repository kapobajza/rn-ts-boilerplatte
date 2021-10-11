import { QueryKey, UseInfiniteQueryOptions as RQUseInfiniteQueryOptions } from 'react-query';

export interface UseInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends RQUseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {
  limit?: number;
}
