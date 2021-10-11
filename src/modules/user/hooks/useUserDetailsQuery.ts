import { RouteProp, useRoute } from '@react-navigation/native';

import { useQuery } from '../../../hooks';
import { MainRouterScreens } from '../../../router';
import { useService } from '../../../services';
import { ReactQueryKey } from '../../../util';

export const useUserDetailsQuery = () => {
  const { params } = useRoute<RouteProp<MainRouterScreens, 'UserDetails'>>();
  const { userService } = useService();

  const { id } = params ?? {};

  return useQuery([ReactQueryKey.Users, id], () => userService.get(id));
};
