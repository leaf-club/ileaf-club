import fetch from '../config/fetch';
// 获取用户名
export const getuserNmae = () => fetch('', {
  type: 'get'
});
// 获取用户头像
export const getHeadPic = () => fetch('', {
  type: 'get'
});
// 获取博客数
export const getTotalBlog = () => fetch('', {
  type: 'get'
});
// 获取作品数
export const getTotalWork = () => fetch('', {
  type: 'get'
});
// 获取收藏数
export const getTotalCollection = () => fetch('', {
  type: 'get'
});
