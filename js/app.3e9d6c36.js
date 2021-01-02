(function(t){function A(A){for(var a,o,r=A[0],i=A[1],l=A[2],c=0,u=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);E&&E(A);while(u.length)u.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,A=0;A<n.length;A++){for(var e=n[A],a=!0,r=1;r<e.length;r++){var i=e[r];0!==s[i]&&(a=!1)}a&&(n.splice(A--,1),t=o(o.s=e[0]))}return t}var a={},s={app:0},n=[];function o(A){if(a[A])return a[A].exports;var e=a[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,A,e){o.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,A){if(1&A&&(t=o(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var a in t)o.d(e,a,function(A){return t[A]}.bind(null,a));return e},o.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(A,"a",A),A},o.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=A,r=r.slice();for(var l=0;l<r.length;l++)A(r[l]);var E=i;n.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},"56d7":function(t,A,e){"use strict";e.r(A);var a=e("2b0e"),s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e("v-spacer"),e("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e("v-icon",[t._v("mdi-open-in-new")])],1)],1),e("v-main",[e("HelloWorld")],1)],1)},n=[],o=function(){var t=this,A=t.$createElement,a=t._self._c||A;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:e("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(A,e){return a("a",{key:e,staticClass:"subheading mx-3",attrs:{href:A.href,target:"_blank"}},[t._v(" "+t._s(A.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(A,e){return a("a",{key:e,staticClass:"subheading mx-3",attrs:{href:A.href,target:"_blank"}},[t._v(" "+t._s(A.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(A,e){return a("a",{key:e,staticClass:"subheading mx-3",attrs:{href:A.href,target:"_blank"}},[t._v(" "+t._s(A.text)+" ")])})),0)],1)],1)],1)},r=[],i={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},l=i,E=e("2877"),c=e("6544"),u=e.n(c),w=e("62ad"),f=e("a523"),g=e("adda"),p=e("0fd9"),m=Object(E["a"])(l,o,r,!1,null,null,null),h=m.exports;u()(m,{VCol:w["a"],VContainer:f["a"],VImg:g["a"],VRow:p["a"]});var d={name:"App",components:{HelloWorld:h},data:()=>({})},v=d,y=e("7496"),b=e("40dc"),I=e("8336"),F=e("132d"),B=e("f6c4"),x=e("2fa4"),k=Object(E["a"])(v,s,n,!1,null,null,null),C=k.exports;u()(k,{VApp:y["a"],VAppBar:b["a"],VBtn:I["a"],VIcon:F["a"],VImg:g["a"],VMain:B["a"],VSpacer:x["a"]});var V=e("8c4f"),D=function(){var t=this,A=t.$createElement,a=t._self._c||A;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],O={name:"Home",components:{HelloWorld:h}},S=O,G=Object(E["a"])(S,D,j,!1,null,null,null),T=G.exports;a["a"].use(V["a"]);const M=[{path:"/",name:"Home",component:T}],_=new V["a"]({mode:"history",base:"/",routes:M});var U=_,W=e("2f62");a["a"].use(W["a"]);var Q=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=e("f309");a["a"].use(X["a"]);var J=new X["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:U,store:Q,vuetify:J,render:function(t){return t(C)}}).$mount("#app")},"9b19":function(t,A,e){t.exports=e.p+"img/logo.63a7d78d.svg"},cf05:function(t,A){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.3e9d6c36.js.map