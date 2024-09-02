import Vue from 'vue';
import Router from 'vue-router';
import PublicAuthentication from './components/PublicAuthentication.vue';
import UserDashboard from './components/UserDashboard.vue';
import AdminDashboard from './components/AdminDashboard.vue';
import TrafficAnalysis from './components/TrafficAnalysis.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/auth' }, // 默认重定向到登录页
    { path: '/auth', component: PublicAuthentication },
    { path: '/user-dashboard', component: UserDashboard },
    { path: '/admin-dashboard', component: AdminDashboard },
    { path: '/traffic-analysis', component: TrafficAnalysis }
  ]
});
