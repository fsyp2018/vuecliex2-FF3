(function(e){function n(n){for(var c,r,a=n[0],i=n[1],d=n[2],f=0,h=[];f<a.length;f++)r=a[f],o[r]&&h.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d92d176","chunk-15edf87e":"d158e877","chunk-1663649e":"3ff3745e","chunk-16653202":"96d03dfa","chunk-167ae816":"fcf1bf2c","chunk-1e9d8c96":"9ee01750","chunk-2d0d2af5":"adddd444","chunk-2d0d5c71":"9af72480","chunk-2d20861f":"5bcdfd77","chunk-2d20e828":"45f41133","chunk-2d2163d7":"9d1dd75e","chunk-490284be":"e0000375","chunk-511a50e2":"064f7b48","chunk-7473f403":"707aa49c","chunk-77b917ae":"61307eef","chunk-8cec365c":"5d2ddc31","chunk-9ed57f46":"9df6d282"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1e9d8c96":1,"chunk-7473f403":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-15edf87e":"31d6cfe0","chunk-1663649e":"31d6cfe0","chunk-16653202":"31d6cfe0","chunk-167ae816":"31d6cfe0","chunk-1e9d8c96":"87b515ef","chunk-2d0d2af5":"31d6cfe0","chunk-2d0d5c71":"31d6cfe0","chunk-2d20861f":"31d6cfe0","chunk-2d20e828":"31d6cfe0","chunk-2d2163d7":"31d6cfe0","chunk-490284be":"31d6cfe0","chunk-511a50e2":"31d6cfe0","chunk-7473f403":"87b515ef","chunk-77b917ae":"31d6cfe0","chunk-8cec365c":"31d6cfe0","chunk-9ed57f46":"31d6cfe0"}[e]+".css",o=i.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===c||f===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){d=h[a],f=d.getAttribute("data-href");if(f===c||f===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],s.parentNode.removeChild(s),t(u)},s.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(s)}).then(function(){r[e]=0}));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise(function(n,t){c=o[e]=[n,t]});n.push(c[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e),d=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+c+": "+r+")");u.type=c,u.request=r,t[1](u)}o[e]=void 0}};var h=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var s=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=t("2f62"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a=(t("5c0b"),t("2877")),i={},d=Object(a["a"])(i,o,u,!1,null,null,null),f=d.exports,h=t("8c4f");c["a"].use(h["a"]);var s=new h["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-7473f403").then(t.bind(null,"bb51"))},children:[{path:"/",name:"Carousel",component:function(){return t.e("chunk-490284be").then(t.bind(null,"3693"))}},{path:"character",name:"Character",component:function(){return t.e("chunk-8cec365c").then(t.bind(null,"e5a5"))}},{path:"storyrole",name:"Storyrole",component:function(){return t.e("chunk-9ed57f46").then(t.bind(null,"a505"))}},{path:"career",name:"Career",component:function(){return t.e("chunk-77b917ae").then(t.bind(null,"533b"))}},{path:"orderform",name:"OrderForm",component:function(){return t.e("chunk-15edf87e").then(t.bind(null,"075c"))}},{path:"ordercheckout/:orderId",name:"OrderCheckout",component:function(){return t.e("chunk-2d0d2af5").then(t.bind(null,"5a0c"))}},{path:"buyitem",name:"BuyItem",component:function(){return t.e("chunk-2d20861f").then(t.bind(null,"a50e"))},children:[{path:"/",name:"Sword",component:function(){return t.e("chunk-16653202").then(t.bind(null,"6007"))}},{path:"shield",name:"Shield",component:function(){return t.e("chunk-1663649e").then(t.bind(null,"2131"))}},{path:"prop",name:"Prop",component:function(){return t.e("chunk-167ae816").then(t.bind(null,"deb6"))}}]}]},{path:"/test",name:"test",component:function(){return t.e("chunk-2d2163d7").then(t.bind(null,"c22d"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-1e9d8c96").then(t.bind(null,"7277"))},children:[{path:"products",name:"Products",component:function(){return t.e("chunk-2d0d5c71").then(t.bind(null,"7079"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"Orderlist",component:function(){return t.e("chunk-2d20e828").then(t.bind(null,"b059"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return t.e("chunk-511a50e2").then(t.bind(null,"f43e"))},meta:{requiresAuth:!0}}]},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),l=t("bc3a"),p=t.n(l),m={namespaced:!0,strict:!0,state:{cart:{},nub:0},mutations:{CART:function(e,n){e.cart=n},NUB:function(e,n){e.nub=n}},actions:{getCart:function(e){var n="".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_CUSTOM,"/cart");e.commit("LOADING",!0,{root:!0}),p.a.get(n).then(function(n){e.commit("CART",n.data.data),e.commit("NUB",n.data.data.carts.length),e.commit("LOADING",!1,{root:!0})})},removeCartItem:function(e,n){var t=n.id,r=n.title,o=n.qty,u="".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_CUSTOM,"/cart/").concat(t);p.a.delete(u).then(function(){(new c["a"]).$bus.$emit("messsage:push",r+o+"個刪除成功","danger"),e.dispatch("getCart")})},addtoCart:function(e,n){var t=n.id,r=n.qty,o=n.title,u="".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_CUSTOM,"/cart"),a={product_id:t,qty:r};p.a.post(u,{data:a}).then(function(n){(new c["a"]).$bus.$emit("messsage:push",o+r+"個已加到購物車中","success"),e.dispatch("getCart")})}},getters:{cart:function(e){return e.cart},nub:function(e){return e.nub}}},b={namespaced:!0,strict:!0,state:{products:[]},mutations:{PRODUCTS:function(e,n){e.products=n}},actions:{getProducts:function(e,n){var t="".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_CUSTOM,"/products/all");e.commit("LOADING",!0,{root:!0}),p.a.get(t).then(function(t){e.commit("PRODUCTS",t.data.products.filter(function(e){if(e.category===n)return!0})),e.commit("LOADING",!1,{root:!0})})}},getters:{products:function(e){return e.products}}};c["a"].use(r["a"]);var k=new r["a"].Store({strict:!0,state:{isLoading:!1},mutations:{LOADING:function(e,n){e.isLoading=n}},actions:{updateLoading:function(e,n){e.commit("LOADING",n)}},getters:{},modules:{cartModules:m,productsModules:b}}),g=t("a7fe"),_=t.n(g),v=(t("4989"),t("9062")),E=t.n(v),O=(t("e40d"),t("a481"),t("c5f6"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c}))});c["a"].prototype.$bus=new c["a"];var A=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},P=t("7bb1"),y=t("427f"),N=t.n(y);c["a"].use(r["a"]),c["a"].config.productionTip=!1,c["a"].use(_.a,p.a),p.a.defaults.withCredentials=!0,c["a"].component("Loading",E.a),c["a"].filter("currency",O),c["a"].filter("date",A),c["a"].use(P["a"]),P["a"].Validator.localize("zh_Th",N.a),new c["a"]({router:s,store:k,render:function(e){return e(f)}}).$mount("#app"),s.beforeEach(function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var c="".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API,"/api/user/check");p.a.post(c).then(function(e){e.data.success?t():t({path:"/"})})}else t()})},"5c0b":function(e,n,t){"use strict";var c=t("5e27"),r=t.n(c);r.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.7ebab31b.js.map