import { QueryKey, useInfiniteQuery as useInfiniteQueryDefault } from 'react-query';

import { UseInfiniteQueryOptions } from './types';

export interface InfiniteQueryPagination<T> {
  records: T[];
  page: number;
  count: number;
  extraData?: Record<string, any>;
}

export function useInfiniteQuery<TData, TExtraData = Record<string, any>, TError = Error>(
  queryKey: QueryKey,
  action: (
    limit: number,
    page: number,
    queryKey: QueryKey,
  ) => Promise<{ records: TData[]; count: number }>,
  options?: UseInfiniteQueryOptions<InfiniteQueryPagination<TData> | TData, TError, TData>,
) {
  const { limit = 10 } = options ?? {};

  const response = useInfiniteQueryDefault<
    InfiniteQueryPagination<TData>,
    TError,
    InfiniteQueryPagination<TData>
  >(
    queryKey,
    async ({ pageParam = 1, queryKey }) => {
      const res = await action(limit, pageParam, queryKey);
      const { records, count, ...extraData } = res;

      return {
        records,
        page: pageParam,
        limit,
        count,
        extraData,
      };
    },
    {
      getNextPageParam: ({ page, records } = { page: 1, records: [], count: 0 }) => {
        if (records.length >= limit) {
          return page + 1;
        }

        return undefined;
      },
      // @ts-ignore
      select: ({ pages }) => {
        const newData = pages.reduce((arr, val) => {
          return [...arr, ...(val?.records ?? [])];
        }, [] as TData[]);

        const { count = 0, extraData = {} } = pages?.[0] ?? {};

        return {
          records: newData,
          count,
          extraData,
        };
      },
      retry: false,
      ...options,
    },
  );

  const { data, fetchNextPage } = response;
  const infiniteData = data as any as InfiniteQueryPagination<TData>;
  const { records, count, page, extraData } = infiniteData ?? {};

  const onEndReached = ({}: { distanceFromEnd: number }) => {
    fetchNextPage();
  };

  return {
    ...response,
    data: records ?? [],
    onEndReached,
    count: count ?? 0,
    page,
    extraData: extraData as TExtraData | undefined,
  };
}
