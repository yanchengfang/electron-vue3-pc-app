import http from '@utils/request'

export function loginService(data) {
  return http({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}