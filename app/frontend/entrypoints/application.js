import { createInertiaApp } from '@inertiajs/inertia-svelte'

const pages = import.meta.glob("../Pages/**/*.svelte")

createInertiaApp({
  resolve: name => pages[`../Pages/${name}.svelte`](),
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})