// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** daily POST /api/points/daily */
export async function dailyUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/points/daily', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getMyPoints GET /api/points/my/get */
export async function getMyPointsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseInt_>('/api/points/my/get', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updatePoints POST /api/points/update */
export async function updatePointsUsingPost(
  body: API.PointsUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/points/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
