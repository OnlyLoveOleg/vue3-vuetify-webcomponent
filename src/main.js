import { defineCustomElement } from 'vue'
import {createVuetify} from 'vuetify'
import MyNavbar from './components/MyNavbar.ce.vue'

const vuetify = createVuetify({})

// convert into custom element constructor
const element = defineCustomElement(MyNavbar, {plugins: [vuetify]})

// register
customElements.define('my-navbar', element)