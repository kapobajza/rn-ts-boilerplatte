import { useInfiniteQuery } from '../../../hooks';
import { useService } from '../../../services';
import { ReactQueryKey } from '../../../util';
import { UserModel } from '../models';

export const useUserListQuery = () => {
  const { userService } = useService();

  return useInfiniteQuery<UserModel>(
    ReactQueryKey.Users,
    async (limit, page) => {
      const data = await userService.getAll({ limit, page, sortBy: 'createdAt', order: 'desc' });

      return {
        records: data,
        count: 0,
      };
    },
    {
      limit: 20,
    },
  );
};
