import moment from 'moment';

import { UserModel } from '../modules/user';

import { BaseService } from './Base';
import { GetQueryParams } from './types';

export class UserService extends BaseService {
  constructor() {
    super('users');
  }

  async getAll(params?: GetQueryParams) {
    return this.getRequest<UserModel[]>({
      queryParams: params,
    });
  }

  get(id: string) {
    return this.getRequest<UserModel>(id);
  }

  add(name: string) {
    return this.postRequest({
      body: {
        name,
        createdAt: moment().add(10, 'days').utc().toISOString(),
      },
    });
  }

  update(data: UserModel) {
    return this.putRequest({
      body: data,
    });
  }
}
