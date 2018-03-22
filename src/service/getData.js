import fetch from '../config/fetch';
const urlPart = '';

// 登录相关
export const doRegister = data => fetch(urlPart + 'user/register', data, 'post');

export const doLogin = data => fetch(urlPart + 'user/login', data, 'post');

export const doLogout = () => fetch(urlPart + 'user/logout', {}, 'post');

export const checkIsLogin = () => fetch(urlPart + 'user/checkLogin');

export const getTestUser = id => fetch(urlPart + 'user?id=' + id);

export const getValidationCode = data => fetch(urlPart + 'user/getValidationCode', data, 'post');

// 保存文章作品
export const saveArticle = article => fetch(urlPart + 'blog/saveBlog', article, 'post');

export const saveWork = work => fetch(urlPart + 'work/saveWork', work, 'post');

// 共用接口
export const like = data => fetch(urlPart + 'common/like', data, 'post');

export const favorite = data => fetch(urlPart + 'common/favorite', data, 'post');

// 首页
export const getRecommendBlogList = data => fetch(urlPart + 'blog/getRecommendBlogList', data);

export const getRecommendWorkList = data => fetch(urlPart + 'work/getRecommendWorkList', data);

// 博客列表页
export const getBlogList = data => fetch(urlPart + 'blog/getBlogList', data);

// 博客详情页
export const getBlogDetail = data => fetch(urlPart + 'blog/getBlogDetail', data);

export const getCommentList = data => fetch(urlPart + 'blog/getCommentList', data);

export const addBlogComment = data => fetch(urlPart + 'blog/addBlogComment', data, 'post');

export const likeComment = data => fetch(urlPart + 'blog/likeCommet', data, 'post');

// 作品列表页
export const getWorkList = data => fetch(urlPart + 'work/getWorkList', data);

// 个人主页
export const getUserInfo = userId => fetch(urlPart + 'user/getUserInfo', userId);

export const getCounts = userId => fetch(urlPart + 'user/getCounts', userId);

export const getPersonalBlog = data => fetch(urlPart + 'user/getBlogList', data);

export const getPersonalWork = data => fetch(urlPart + 'user/getWorkList', data);

export const getPersonalFavorited = data => fetch(urlPart + 'user/getFavouriteList', data);

export const getPersonalLiked = data => fetch(urlPart + 'user/getLikeList', data);

export const getPersonalDraft = data => fetch(urlPart + 'user/getDraft', data);
