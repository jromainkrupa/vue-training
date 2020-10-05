import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import PrimaryButton from './components/UI/PrimaryButton.vue'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('primary-button', PrimaryButton)
app.mount('#app');