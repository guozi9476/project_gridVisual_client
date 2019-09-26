import request from '@/utils/request.js'
/**
 * 规划冲突检测模块api接口
*/

/**
 * 获取所有冲突目录
 *
 */
export function getConflictType () {
  return request({
    url: '/conflict/config',
    method: 'get'
  })
}