import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62a6cade = () => interopDefault(import('..\\pages\\directores_index.vue' /* webpackChunkName: "pages/directores_index" */))
const _088c650c = () => interopDefault(import('..\\pages\\peliculas_index.vue' /* webpackChunkName: "pages/peliculas_index" */))
const _62a46ed4 = () => interopDefault(import('..\\pages\\productoras_index.vue' /* webpackChunkName: "pages/productoras_index" */))
const _bbaf13e2 = () => interopDefault(import('..\\pages\\directores\\_slug.vue' /* webpackChunkName: "pages/directores/_slug" */))
const _8e13bcbe = () => interopDefault(import('..\\pages\\peliculas\\_slug.vue' /* webpackChunkName: "pages/peliculas/_slug" */))
const _91fda152 = () => interopDefault(import('..\\pages\\productoras\\_slug.vue' /* webpackChunkName: "pages/productoras/_slug" */))
const _f37e2a5e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/directores_index",
    component: _62a6cade,
    name: "directores_index"
  }, {
    path: "/peliculas_index",
    component: _088c650c,
    name: "peliculas_index"
  }, {
    path: "/productoras_index",
    component: _62a46ed4,
    name: "productoras_index"
  }, {
    path: "/directores/:slug?",
    component: _bbaf13e2,
    name: "directores-slug"
  }, {
    path: "/peliculas/:slug?",
    component: _8e13bcbe,
    name: "peliculas-slug"
  }, {
    path: "/productoras/:slug?",
    component: _91fda152,
    name: "productoras-slug"
  }, {
    path: "/",
    component: _f37e2a5e,
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
