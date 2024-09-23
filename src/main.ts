import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/base.css';
// POUR AVOIR UNE DIRECTIVE GLOBAL APPLICABLE DANS PLUSIEURS COMPONENT

import { vClickOutside } from '@/composables/ClickOutside';

createApp(App).directive('click-outside', vClickOutside).mount('#app');
