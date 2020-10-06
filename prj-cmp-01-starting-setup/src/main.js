import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import PrimaryButton from './components/UI/PrimaryButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('primary-button', PrimaryButton)
app.component('base-dialog', BaseDialog)
app.mount('#app');