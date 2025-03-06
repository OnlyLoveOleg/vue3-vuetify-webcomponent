// defineCustomElementWithStyles.js
import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'

export const defineCustomElement = (component, { plugins = [] } = {}) =>
  VueDefineCustomElement({
    styles: component.styles,
    render: () => h(component),
    setup() {
      const app = createApp()

      // install plugins
      plugins.forEach(app.use)

      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
  })