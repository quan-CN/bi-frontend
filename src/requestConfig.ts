﻿import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { BACKEND_HOST_LOCAL, BACKEND_HOST_PROD } from './constants';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  baseURL: IS_DEV ? BACKEND_HOST_LOCAL : BACKEND_HOST_PROD,
  withCredentials: true,
  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 拦截请求配置，进行个性化处理。
      // const url = config?.url?.concat('?token = 123');
      // return { ...config, url };
      return config;
    },
  ],

  // 响应拦截器
  // responseInterceptors: [
  //   (response) => {
  //     // 拦截响应数据，进行个性化处理
  //     const { data } = response as unknown as ResponseStructure;

  //     if (data?.success === false) {
  //       message.error('请求失败！');
  //     }
  //     return response;
  //   },
  // ],
  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 请求地址
      const requestPath: string = response.config.url ?? '';

      // 响应
      const { data } = response as unknown as ResponseStructure;
      if (!data) {
        throw new Error('服务异常');
      }

      // 错误码处理
      const code: number = data.code;
      // 未登录，且不为获取用户登录信息接口
      if (
        code === 40100 &&
        !requestPath.includes('user/get/login') &&
        !location.pathname.includes('/user/login')
      ) {
        // 跳转至登录页
        window.location.href = `/user/login?redirect=${window.location.href}`;
        throw new Error('请先登录');
      }

      if (code !== 0) {
        
        throw new Error(data.message ?? '服务器错误');
      }
      return response;
    },
  ],
};
