import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import ResetPassword from './components/ResetPassword.vue';

const routes = [
    { path: '/',  component: LoginPage },
    { path: '/forgotpassword',  component: ForgotPassword },
    { path: '/resetpassword',  component: ResetPassword }
  ];

 const router = createRouter({
    history: createWebHistory(),
    routes
  });
export default router;