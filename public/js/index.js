(self.webpackChunk=self.webpackChunk||[]).push([[396],{136:(t,e,r)=>{"use strict";var a=r(538),n=r(464),o=r.n(n),i=(r(177),r(480),r(193),r(187));a.default.use(o());const c=new(o())({theme:{options:{customProperties:!0},themes:{light:{primary:"#096ed1",secondary:"#001526",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#096ed1",secondary:"#001526",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},dark:!0},lang:{locales:{ru:i.Z},current:"ru"}});const s={data:function(){return{drawer:!1,items:[{title:"Закуски",to:{name:"Category",params:{categorySlug:"1"}}},{title:"Стритфуд",to:{name:"Category",params:{categorySlug:"2"}}},{title:"Салаты",to:{name:"Category",params:{categorySlug:"3"}}},{title:"Горячее",to:{name:"Category",params:{categorySlug:"4"}}},{title:"Пицца",to:{name:"Category",params:{categorySlug:"5"}}},{title:"Суши",to:{name:"Category",params:{categorySlug:"6"}}},{title:"Десерты",to:{name:"Category",params:{categorySlug:"7"}}},{title:"Винная карта",to:{name:"Category",params:{categorySlug:"8"}}},{title:"Коктейли",to:{name:"Category",params:{categorySlug:"9"}}},{title:"Пиво",to:{name:"Category",params:{categorySlug:"10"}}},{title:"Без алкоголя",to:{name:"Category",params:{categorySlug:"11"}}},{title:"Чайная карта",to:{name:"Category",params:{categorySlug:"12"}}}]}}};const u=(0,r(900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{app:""}},["Product"!==t.$route.name?r("v-toolbar-title",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Cinema menu")]):r("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.$router.push({name:"Category",params:t.$route.params})}}},[r("v-icon",[t._v("mdi-chevron-left")]),t._v("Назад")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),t._v(" "),r("v-main",[r("transition",{attrs:{name:"fade-transition",mode:"out-in"}},[r("router-view")],1)],1)],1)}),[],!1,null,null,null).exports;var l=r(345);a.default.use(l.Z);var m=[{path:"/:categorySlug",name:"Category",component:function(){return r.e(652).then(r.bind(r,652))}},{path:"/:categorySlug/:productId",name:"Product",component:function(){return r.e(806).then(r.bind(r,806))}}];const g=new l.Z({mode:"history",routes:m});r(67).keys().forEach((function(t){var e=t.replace(/^.*[\\/]/,"").replace(/\.[^.]+$/,"");a.default.component(e,(function(t){r.e(53).then(function(){var a=[r(53)("./".concat(e))];t.apply(null,a)}.bind(this)).catch(r.oe)}))}));new a.default({vuetify:c,router:g,render:function(t){return t(u)}}).$mount("#menu")},597:()=>{},23:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const a={};const n=(0,r(900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",t._b({},"v-card",t.$attrs,!1),[r("v-img",{staticClass:"white--text align-end",attrs:{src:"/public/files/cooking.png",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","min-height":"250px"}},[r("v-card-title",{staticClass:"text-bold"},[r("h2",[t._v("490 Р")])]),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-subtitle-1 mb-4"},[r("h3",[t._v("Cafe Badilico")])]),t._v(" "),r("div",{staticClass:"text-right"},[t._v("100 г")])])],1)],1)],1)}),[],!1,null,null,null).exports},67:(t,e,r)=>{var a={"./components/ProductCard.vue":23};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id=67}},t=>{var e=e=>t(t.s=e);t.O(0,[425,898],(()=>(e(136),e(597))));t.O()}]);