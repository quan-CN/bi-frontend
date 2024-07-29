// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addGroup POST /api/group/add */
export async function addGroupUsingPost(
  body: API.GroupAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/group/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteGroup POST /api/group/delete */
export async function deleteGroupUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/group/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editGroup POST /api/group/edit */
export async function editGroupUsingPost(
  body: API.GroupEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/group/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGroupVOById GET /api/group/get/vo */
export async function getGroupVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGroupVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseGroupVO_>('/api/group/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** joinGroup POST /api/group/join */
export async function joinGroupUsingPost(
  body: API.GroupJoinRequest,
  options?: { [key: string]: any },
) {
  return request<boolean>('/api/group/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** leaveGroup POST /api/group/leave */
export async function leaveGroupUsingPost(
  body: API.GroupLeaveRequest,
  options?: { [key: string]: any },
) {
  return request<boolean>('/api/group/leave', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listGroupByPage POST /api/group/list/page */
export async function listGroupByPageUsingPost(
  body: API.GroupQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGroup_>('/api/group/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listGroupVOByPage POST /api/group/list/page/vo */
export async function listGroupVoByPageUsingPost(
  body: API.GroupQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGroupVO_>('/api/group/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyGroupVOByPage POST /api/group/my/list/page/vo */
export async function listMyGroupVoByPageUsingPost(
  body: API.GroupQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGroupVO_>('/api/group/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateGroup POST /api/group/update */
export async function updateGroupUsingPost(
  body: API.GroupUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/group/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
