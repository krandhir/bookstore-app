import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import Books from '../components/Books';
import BookDetails from '../components/BookDetails';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/books', component: Books },
    { path: '/books/:id' , component: BookDetails },
    // otherwise redirect to home
    { path: '*', redirect: '/books' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

