import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { config } from '../config';
import { strings } from '../strings';
import { BadRequestException, ForbiddenException, HttpException, NotFoundException } from '../util';

import { RequestParams } from './types';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  // baseURL: '',
  timeout: 30 * 1000,
});

axiosInstance.interceptors.request.use(async (cfg: AxiosRequestConfig) => {
  cfg.headers = {
    ...(cfg.headers || {}),
    'X-Request-ID': 'Some request ID',
    'User-Agent': 'Custom user agent',
  };

  // Get auth token from local storage
  const authToken = '';

  // If it exists, set it as a JWT token
  if (authToken) {
    cfg.headers.Authorization = `Bearer ${authToken}`;
  }

  return cfg;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (err) => {
    let responseErr: Error | null = null;
    const { status, data } = err?.response ?? {};
    const { code, summary } = data ?? {};

    if (status === 404) {
      responseErr = new NotFoundException(summary, code);
    } else if (status === 400) {
      responseErr = new BadRequestException(summary, code);
    } else if (status === 403) {
      responseErr = new ForbiddenException(summary, code);
    } else if (status) {
      responseErr = new HttpException(status, summary ?? strings.errorsGeneral, code);
    }

    return Promise.reject(responseErr ?? err);
  },
);

export class BaseService {
  protected routePrefix: string | undefined;

  constructor(routePrefix?: string) {
    this.routePrefix = routePrefix;
  }

  private getRouteWithPrefix(route: string | undefined) {
    return `${this.routePrefix ? `${this.routePrefix}/` : ''}${route ? `${route}/` : ''}`;
  }

  private getRequestParams<RequestBody = any>(paramsOrRoute?: RequestParams<RequestBody>) {
    if (typeof paramsOrRoute === 'string') {
      return { route: this.getRouteWithPrefix(paramsOrRoute) };
    }

    return {
      ...(paramsOrRoute ?? {}),
      route: this.getRouteWithPrefix(paramsOrRoute?.route),
    };
  }

  protected async getRequest<ResponseData>(paramsOrRoute?: RequestParams) {
    const { route, options, queryParams } = this.getRequestParams(paramsOrRoute);
    const { limit = 10, page = 1 } = queryParams ?? {};

    const { data } = await axiosInstance.get<ResponseData>(route, {
      ...(options ?? {}),
      params: {
        ...(queryParams ?? {}),
        limit,
        page,
      },
    });

    return data;
  }

  protected async postRequest<RequestBody = any>(paramsOrRoute?: RequestParams) {
    const { route, options, body } = this.getRequestParams<RequestBody>(paramsOrRoute);
    const { data } = await axiosInstance.post(route, body, options);
    return data;
  }

  protected async putRequest<RequestBody = any>(paramsOrRoute?: RequestParams) {
    const { route, options, body } = this.getRequestParams<RequestBody>(paramsOrRoute);
    const { data } = await axiosInstance.put(route, body, options);
    return data;
  }

  protected async deleteRequest(paramsOrRoute?: RequestParams) {
    const { route, options } = this.getRequestParams(paramsOrRoute);
    const { data } = await axiosInstance.delete(route, options);
    return data;
  }
}
