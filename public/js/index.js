(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/index"],{

/***/ 34:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      drawer: false,
      items: [{
        title: "Закуски",
        to: {
          name: "Category",
          params: {
            categorySlug: "1"
          }
        }
      }, {
        title: "Стритфуд",
        to: {
          name: "Category",
          params: {
            categorySlug: "2"
          }
        }
      }, {
        title: "Салаты",
        to: {
          name: "Category",
          params: {
            categorySlug: "3"
          }
        }
      }, {
        title: "Горячее",
        to: {
          name: "Category",
          params: {
            categorySlug: "4"
          }
        }
      }, {
        title: "Пицца",
        to: {
          name: "Category",
          params: {
            categorySlug: "5"
          }
        }
      }, {
        title: "Суши",
        to: {
          name: "Category",
          params: {
            categorySlug: "6"
          }
        }
      }, {
        title: "Десерты",
        to: {
          name: "Category",
          params: {
            categorySlug: "7"
          }
        }
      }, {
        title: "Винная карта",
        to: {
          name: "Category",
          params: {
            categorySlug: "8"
          }
        }
      }, {
        title: "Коктейли",
        to: {
          name: "Category",
          params: {
            categorySlug: "9"
          }
        }
      }, {
        title: "Пиво",
        to: {
          name: "Category",
          params: {
            categorySlug: "10"
          }
        }
      }, {
        title: "Без алкоголя",
        to: {
          name: "Category",
          params: {
            categorySlug: "11"
          }
        }
      }, {
        title: "Чайная карта",
        to: {
          name: "Category",
          params: {
            categorySlug: "12"
          }
        }
      }]
    };
  }
});

/***/ }),

/***/ 8738:
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      selection: 1
    };
  },
  methods: {
    reserve: function reserve() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        return _this.loading = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ 2041:
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 538);


var requireComponent = __webpack_require__(3067);

requireComponent.keys().forEach(function (fileName) {
  var name = fileName.replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].component(name, function (resolve) {
    __webpack_require__.e(/*! AMD require */ "resources_js_components_sync_recursive_").then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(53)("./".concat(name))]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe);
  });
});

/***/ }),

/***/ 7823:
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ 538);
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/vuetify */ 7317);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ 722);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ 2997);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 2041);





var app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_0__["default"],
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
}).$mount("#menu");

/***/ }),

/***/ 7317:
/*!*****************************************!*\
  !*** ./resources/js/plugins/vuetify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ 538);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify */ 5464);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ 8177);
/* harmony import */ var roboto_fontface_css_roboto_roboto_fontface_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! roboto-fontface/css/roboto/roboto-fontface.css */ 3480);
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.css */ 4193);
/* harmony import */ var vuetify_lib_locale_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/locale/ru */ 3187);






vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_4___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new (vuetify__WEBPACK_IMPORTED_MODULE_4___default())({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#096ed1",
        secondary: "#001526",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#096ed1",
        secondary: "#001526",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    },
    dark: true
  },
  lang: {
    locales: {
      ru: vuetify_lib_locale_ru__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    current: "ru"
  }
}));

/***/ }),

/***/ 2997:
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 538);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ 8345);


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: "/:categorySlug",
  name: "Category",
  component: function component() {
    return __webpack_require__.e(/*! import() */ "resources_js_pages_Category_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Category.vue */ 4858));
  }
}, {
  path: "/:categorySlug/:productId",
  name: "Product",
  component: function component() {
    return __webpack_require__.e(/*! import() */ "resources_js_pages_Product_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Product.vue */ 759));
  }
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: "history",
  routes: routes
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ 3597:
/*!***********************************!*\
  !*** ./resources/scss/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 722:
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a& */ 9003);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 8645);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 1900);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 913:
/*!*************************************************!*\
  !*** ./resources/js/components/ProductCard.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=template&id=1a457ff8& */ 274);
/* harmony import */ var _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=script&lang=js& */ 661);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 1900);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 8645:
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 34);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 661:
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProductCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=script&lang=js& */ 8738);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 9003:
/*!*************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f348271a& */ 1928);


/***/ }),

/***/ 274:
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProductCard.vue?vue&type=template&id=1a457ff8& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_1a457ff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=template&id=1a457ff8& */ 2660);


/***/ }),

/***/ 1928:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", right: "" },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "", nav: "" } },
            _vm._l(_vm.items, function (item) {
              return _c(
                "v-list-item",
                { key: item.title, attrs: { link: "", to: item.to } },
                [
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { app: "" } },
        [
          _vm.$route.name !== "Product"
            ? _c(
                "v-toolbar-title",
                {
                  on: {
                    click: function ($event) {
                      return _vm.$router.push("/")
                    },
                  },
                },
                [_vm._v("Cinema menu")]
              )
            : _c(
                "v-btn",
                {
                  attrs: { depressed: "" },
                  on: {
                    click: function ($event) {
                      return _vm.$router.push({
                        name: "Category",
                        params: _vm.$route.params,
                      })
                    },
                  },
                },
                [_c("v-icon", [_vm._v("mdi-chevron-left")]), _vm._v("Назад")],
                1
              ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-app-bar-nav-icon", {
            on: {
              click: function ($event) {
                _vm.drawer = !_vm.drawer
              },
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "transition",
            { attrs: { name: "fade-transition", mode: "out-in" } },
            [_c("router-view")],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 2660:
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCard.vue?vue&type=template&id=1a457ff8& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        _vm._b({}, "v-card", _vm.$attrs, false),
        [
          _c(
            "v-img",
            {
              staticClass: "white--text align-end",
              attrs: {
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                "min-height": "250px",
              },
            },
            [
              _c("v-card-title", { staticClass: "text-bold" }, [
                _c("h2", [_vm._v("490 Р")]),
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-subtitle-1 mb-4" }, [
                  _c("h3", [_vm._v("Cafe Badilico")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [_vm._v("100 г")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 3067:
/*!*********************************************************!*\
  !*** ./resources/js/ sync components\/[A-Z]\w+\.(vue)$ ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/ProductCard.vue": 913
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3067;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/index","/js/vendor"], () => (__webpack_exec__(7823), __webpack_exec__(3597)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);