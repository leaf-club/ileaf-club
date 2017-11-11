import fetch from '../config/fetch';
// 获取个人信息
export const getUserInfo = () => fetch('', {
  type: 'get'
});
// 获取个人文章
export const getPersonalArticle = () => fetch('', {
  type: 'get'
});
// 获取个人作品
export const getPersonalWork = () => fetch('', {
  type: 'get'
});
// 获取个人收藏
export const getCollection = () => fetch('', {
  type: 'get'
});
