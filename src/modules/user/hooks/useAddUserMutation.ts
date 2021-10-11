import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from 'react-query';

import { useMutation } from '../../../hooks';
import { useService } from '../../../services';
import { ReactQueryKey } from '../../../util';

export const useAddUserMutation = () => {
  const { userService } = useService();
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation(
    async ({ name }: { name: string }) => {
      await userService.add(name);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ReactQueryKey.Users);
        navigation.goBack();
      },
    },
  );
};
