import request from '@/utils/request'
/**
 * 获取分类
 */

export const getCategory = () => {
  return request({
    url: '/category'
  })
}