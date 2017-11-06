import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home');
const article = r => require.ensure([], () => r(require('../pages/article/article')), 'article');
const work = r => require.ensure([], () => r(require('../pages/work/work')), 'work');
const read = r => require.ensure([], () => r(require('../pages/read/read')), 'read');
const edit = r => require.ensure([], () => r(require('../pages/edit/edit')), 'edit');
const about = r => require.ensure([], () => r(require('../pages/about/about')), 'about');
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login');
const personal = r => require.ensure([], () => r(require('../pages/personal/personal')), 'personal');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/article',
      component: article
    },
    {
      path: '/read',
      component: read
    },
    {
      path: '/edit',
      component: edit
    },
    {
      path: '/work',
      component: work
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/personal',
      component: personal
    }
  ]
});
