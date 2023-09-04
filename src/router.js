import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
    path: '/',
    name: 'home',
    component: Home
    },
    {
    path: '/about-us',
    name: 'aboutUs',
    component: AboutUs
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contact
    },
]
});
export { router };