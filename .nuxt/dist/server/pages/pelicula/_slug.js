exports.ids = [4,1,2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/HeaderView.vue?vue&type=template&id=d37ea19c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",staticStyle:{"margin-top":"15px"}},[_c('NuxtLink',{staticClass:"three columns button button-primary",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"three columns button button-primary",attrs:{"to":"/peliculas_index"}},[_vm._v("Peliculas")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/HeaderView.vue?vue&type=template&id=d37ea19c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/HeaderView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62ee2ce8"
  
)

/* harmony default export */ var HeaderView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/FooterView.vue?vue&type=template&id=048313b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",staticStyle:{"margin-top":"15px"}},[_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Copyright (c) 2021 - Eduard Arauz - José Gómez\n  </button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/FooterView.vue?vue&type=template&id=048313b1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/FooterView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15edce9a"
  
)

/* harmony default export */ var FooterView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pelicula/_slug.vue?vue&type=template&id=eee79e14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('HeaderView'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"three columns\"><img"+(_vm._ssrAttr("src",'/images/'+_vm.pelicula.image))+" alt=\"Italian Trulli\" class=\"u-max-full-width\"></div> "),_vm._ssrNode("<div class=\"six columns\">","</div>",[_vm._ssrNode("<h4>"+_vm._ssrEscape(_vm._s(_vm.pelicula.name))+"</h4>"+_vm._ssrEscape("\n\t   Nationality: "+_vm._s(_vm.pelicula.nationality)+"; Launch: "+_vm._s(_vm.pelicula.launch_year))+"<br>"+_vm._ssrEscape("\n\t   Times: "+_vm._s(_vm.pelicula.times))+"<br><br> <b>Biography</b><br> "),_c('nuxt-content',{attrs:{"document":_vm.pelicula}})],2),_vm._ssrNode(" "),_c('FooterView')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pelicula/_slug.vue?vue&type=template&id=eee79e14&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pelicula/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const pelicula = await $content('peliculas', params.slug).fetch(); // const books = await $content('books').where({ peliculaId: params.slug }).fetch()

    return {
      pelicula
    };
  }

});
// CONCATENATED MODULE: ./pages/pelicula/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pelicula_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/pelicula/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pelicula_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a7f6a4b4"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderView: __webpack_require__(23).default,FooterView: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map