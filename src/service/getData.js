import fetch from '../config/fetch';
const urlPart = 'leaf-club-server/';

export const getTestUser = id => fetch(urlPart + 'user?id=' + id);

export const saveArticle = (article) => fetch('leaf-club-server/article/save', article, 'post');

export const getUserInfo = (id) => fetch('leaf-club-server/user/getUserInfo?id=' + id);

export const getPersonalArticle = (id) => fetch('leaf-club-server/article/getUserArticles?id=' + id);

export const like = data => fetch(urlPart + 'article/like', data, 'post');

export const favorite = data => fetch(urlPart + 'article/favorite', data, 'post');
