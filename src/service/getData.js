import fetch from '../config/fetch';
const urlPart = 'leaf-club-server/';

export const getTestUser = id => fetch(urlPart + 'user?id=' + id);

export const saveArticle = article => fetch(urlPart + 'article/save', article, 'post');

export const like = data => fetch(urlPart + 'article/like', data, 'post');

export const favorite = data => fetch(urlPart + 'article/favorite', data, 'post');
