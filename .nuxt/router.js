import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1eece258 = () => interopDefault(import('..\\pages\\peliculas_index.vue' /* webpackChunkName: "pages/peliculas_index" */))
const _40644348 = () => interopDefault(import('..\\pages\\pelicula\\_slug.vue' /* webpackChunkName: "pages/pelicula/_slug" */))
const _3bd3571d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/peliculas_index",
    component: _1eece258,
    name: "peliculas_index"
  }, {
    path: "/pelicula/:slug?",
    component: _40644348,
    name: "pelicula-slug"
  }, {
    path: "/",
    component: _3bd3571d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
