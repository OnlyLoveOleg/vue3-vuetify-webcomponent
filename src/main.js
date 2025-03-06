import { defineCustomElement } from './defineCustomElementWithStyles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Import the Vue component.
import MyNavbarComponent from './components/MyNavbar.ce.vue'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    },
})

customElements.define(
    'my-navbar',
    defineCustomElement(MyNavbarComponent, {
        plugins: [vuetify],
    })
)