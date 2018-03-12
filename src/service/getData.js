import fetch from '../config/fetch';
const urlPart = '';

export const doRegister = data => fetch(urlPart + 'user/register', data, 'post');

export const doLogin = data => fetch(urlPart + 'user/login', data, 'post');

export const checkIsLogin = () => fetch(urlPart + 'user/checkLogin');

export const getTestUser = id => fetch(urlPart + 'user?id=' + id);

export const saveArticle = article => fetch(urlPart + 'blog/saveBlog', article, 'post');

export const getUserInfo = id => fetch(urlPart + 'user/getUserInfo', id);

export const getPersonalBlog = data => fetch(urlPart + 'user/getBlogList', data);

export const getPersonalWork = data => fetch(urlPart + 'user/getWorkList', data);

export const getPersonalFavorited = data => fetch(urlPart + 'user/getFavouriteList', data);

export const getPersonalLiked = data => fetch(urlPart + 'user/getLikeList', data);

export const getPersonalDraft = data => fetch(urlPart + 'user/getDraft', data);

export const like = data => fetch(urlPart + 'common/like', data, 'post');

export const favorite = data => fetch(urlPart + 'common/favorite', data, 'post');

export const getRecommendBlogList = data => fetch(urlPart + 'blog/getRecommendBlogList', data);

export const getRecommendWorkList = data => fetch(urlPart + 'work/getRecommendWorkList', data);

export const getBlogDetail = data => fetch(urlPart + 'blog/getBlogDetail', data);

export const getBlogList = data => fetch(urlPart + 'blog/getBlogList', data);

export const getWorkList = data => fetch(urlPart + 'work/getWorkList', data);

export const getCommentList = data => fetch(urlPart + 'blog/getCommentList', data);

export const addBlogComment = data => fetch(urlPart + 'blog/addBlogComment', data, 'post');
