(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{192:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/peliculas_index"}},[t._v("Peliculas")])],1)}),[],!1,null,null,null);e.default=component.exports},193:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[n("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[t._v("\n    Copyright (c) 2021 - Eduard Arauz - José Gómez\n  ")])])}],!1,null,null,null);e.default=component.exports},206:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("peliculas").fetch();case 3:return r=e.sent,e.abrupt("return",{peliculas:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(32),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("HeaderView"),t._v(" "),n("h3",{staticStyle:{"margin-top":"15px"}},[t._v("Información de peliculas")]),t._v(" "),n("p",[t._v("Esta sección presenta información acerca de películas")]),t._v(" "),n("ul",t._l(t.peliculas,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:{name:"peliculas-slug",params:{slug:e.slug}}}},[t._v(t._s(e.name)+" - { pelicula.slug }")])],1)})),0),t._v(" "),n("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:n(192).default,FooterView:n(193).default})}}]);