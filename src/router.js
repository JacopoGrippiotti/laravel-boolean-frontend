import { createRouter, createWebHistory } from 'vue-router';
import Cocktails from './pages/Cocktails.vue';
import AboutUs from './pages/AboutUs.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        name: 'cocktails',
        component: Cocktails
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