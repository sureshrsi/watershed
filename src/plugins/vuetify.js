import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa', // Use FontAwesome icons
    aliases: {
      fa: {
        component: 'fa',
      },
    },
  },
});

export default vuetify;