import { QueryKey, QueryFunction, useQuery, UseQueryOptions } from 'react-query';

export default function useQueryHelper<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
) {
  return useQuery<TQueryFnData, TError, TData, QueryKey>(queryKey, queryFn, options);
}
