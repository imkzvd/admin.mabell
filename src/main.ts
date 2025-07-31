import '@/assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VDateInput } from 'vuetify/labs/VDateInput';
//

// Icons
import '@mdi/font/css/materialdesignicons.css';
//

// Toast
import Toast from 'vue-toastification';
import type { PluginOptions } from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';
//

import App from '@/App.vue';
import router from '@/router/index.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components: {
    ...components,
    VDateInput,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
});

const toastOptions: PluginOptions = {
  hideProgressBar: true,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(Toast, toastOptions);

const { showErrorMessage } = useNotification();

app.config.errorHandler = (e) => {
  const { message } = e as ApiError | Error;

  showErrorMessage(message);
};

app.mount('#app');
