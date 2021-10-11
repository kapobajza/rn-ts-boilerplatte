import { AxiosRequestConfig } from 'axios';

export interface GetQueryParams extends Record<string, any> {
  limit?: number;
  page?: number;
}

export type RequestParams<RequestBody = any> =
  | string
  | {
      route?: string;
      body?: RequestBody;
      options?: AxiosRequestConfig;
      queryParams?: GetQueryParams;
    };
