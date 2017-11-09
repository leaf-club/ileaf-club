import fetch from '../config/fetch';

export const getTestUser = (id) => fetch('leaf-club-server/user?id=' + id);

export const saveArticle = (article) => fetch('leaf-club-server/article/save', article, 'post');
