(function(e){function n(n){for(var c,r,u=n[0],i=n[1],d=n[2],h=0,s=[];h<u.length;h++)r=u[h],o[r]&&s.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(s.length)s.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d92d176","chunk-15edf87e":"4d52f374","chunk-1663649e":"0b000664","chunk-16653202":"a545a579","chunk-167ae816":"a814c137","chunk-1e9d8c96":"c36471af","chunk-2d0d2af5":"89537461","chunk-2d0d5c71":"b4d1047b","chunk-2d20861f":"5bcdfd77","chunk-2d20e828":"b5ce7039","chunk-2d2163d7":"59b8dc0d","chunk-490284be":"e0000375","chunk-511a50e2":"9aa6ba8c","chunk-7473f403":"6a6ec247","chunk-77b917ae":"61307eef","chunk-8cec365c":"5d2ddc31","chunk-9ed57f46":"9df6d282"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1e9d8c96":1,"chunk-7473f403":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-15edf87e":"31d6cfe0","chunk-1663649e":"31d6cfe0","chunk-16653202":"31d6cfe0","chunk-167ae816":"31d6cfe0","chunk-1e9d8c96":"87b515ef","chunk-2d0d2af5":"31d6cfe0","chunk-2d0d5c71":"31d6cfe0","chunk-2d20861f":"31d6cfe0","chunk-2d20e828":"31d6cfe0","chunk-2d2163d7":"31d6cfe0","chunk-490284be":"31d6cfe0","chunk-511a50e2":"31d6cfe0","chunk-7473f403":"87b515ef","chunk-77b917ae":"31d6cfe0","chunk-8cec365c":"31d6cfe0","chunk-9ed57f46":"31d6cfe0"}[e]+".css",o=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===c||h===o))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],h=d.getAttribute("data-href");if(h===c||h===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)}).then(function(){r[e]=0}));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise(function(n,t){c=o[e]=[n,t]});n.push(c[2]=a);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e),d=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+c+": "+r+")");a.type=c,a.request=r,t[1](a)}o[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:h})},12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var f=h;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=t("2f62"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("5c0b"),t("2877")),i={},d=Object(u["a"])(i,o,a,!1,null,null,null),h=d.exports,s=t("8c4f");c["a"].use(s["a"]);var f=new s["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-7473f403").then(t.bind(null,"bb51"))},children:[{path:"/",name:"Carousel",component:function(){return t.e("chunk-490284be").then(t.bind(null,"3693"))}},{path:"character",name:"Character",component:function(){return t.e("chunk-8cec365c").then(t.bind(null,"e5a5"))}},{path:"storyrole",name:"Storyrole",component:function(){return t.e("chunk-9ed57f46").then(t.bind(null,"a505"))}},{path:"career",name:"Career",component:function(){return t.e("chunk-77b917ae").then(t.bind(null,"533b"))}},{path:"orderform",name:"OrderForm",component:function(){return t.e("chunk-15edf87e").then(t.bind(null,"075c"))}},{path:"ordercheckout/:orderId",name:"OrderCheckout",component:function(){return t.e("chunk-2d0d2af5").then(t.bind(null,"5a0c"))}},{path:"buyitem",name:"BuyItem",component:function(){return t.e("chunk-2d20861f").then(t.bind(null,"a50e"))},children:[{path:"/",name:"Sword",component:function(){return t.e("chunk-16653202").then(t.bind(null,"6007"))}},{path:"shield",name:"Shield",component:function(){return t.e("chunk-1663649e").then(t.bind(null,"2131"))}},{path:"prop",name:"Prop",component:function(){return t.e("chunk-167ae816").then(t.bind(null,"deb6"))}}]}]},{path:"/test",name:"test",component:function(){return t.e("chunk-2d2163d7").then(t.bind(null,"c22d"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-1e9d8c96").then(t.bind(null,"7277"))},children:[{path:"products",name:"Products",component:function(){return t.e("chunk-2d0d5c71").then(t.bind(null,"7079"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"Orderlist",component:function(){return t.e("chunk-2d20e828").then(t.bind(null,"b059"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return t.e("chunk-511a50e2").then(t.bind(null,"f43e"))},meta:{requiresAuth:!0}}]},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),l=t("bc3a"),p=t.n(l),m={namespaced:!0,strict:!0,state:{cart:{},nub:0},mutations:{CART:function(e,n){e.cart=n},NUB:function(e,n){e.nub=n}},actions:{getCart:function(e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/cart");e.commit("LOADING",!0,{root:!0}),p.a.get(n).then(function(n){e.commit("CART",n.data.data),e.commit("NUB",n.data.data.carts.length),e.commit("LOADING",!1,{root:!0})})},removeCartItem:function(e,n){var t=n.id,r=n.title,o=n.qty,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/cart/").concat(t);p.a.delete(a).then(function(){(new c["a"]).$bus.$emit("messsage:push",r+o+"個刪除成功","danger"),e.dispatch("getCart")})},addtoCart:function(e,n){var t=n.id,r=n.qty,o=n.title,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/cart"),u={product_id:t,qty:r};p.a.post(a,{data:u}).then(function(n){(new c["a"]).$bus.$emit("messsage:push",o+r+"個已加到購物車中","success"),e.dispatch("getCart")})}},getters:{cart:function(e){return e.cart},nub:function(e){return e.nub}}},b={namespaced:!0,strict:!0,state:{products:[]},mutations:{PRODUCTS:function(e,n){e.products=n}},actions:{getProducts:function(e,n){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/products/all");e.commit("LOADING",!0,{root:!0}),p.a.get(t).then(function(t){e.commit("PRODUCTS",t.data.products.filter(function(e){if(e.category===n)return!0})),e.commit("LOADING",!1,{root:!0})})}},getters:{products:function(e){return e.products}}};c["a"].use(r["a"]);var k=new r["a"].Store({strict:!0,state:{isLoading:!1},mutations:{LOADING:function(e,n){e.isLoading=n}},actions:{updateLoading:function(e,n){e.commit("LOADING",n)}},getters:{},modules:{cartModules:m,productsModules:b}}),g=t("a7fe"),v=t.n(g),y=(t("4989"),t("9062")),w=t.n(y),O=(t("e40d"),t("a481"),t("c5f6"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c}))});c["a"].prototype.$bus=new c["a"];var C=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},A=t("7bb1"),S=t("427f"),x=t.n(S);c["a"].use(r["a"]),c["a"].config.productionTip=!1,c["a"].use(v.a,p.a),p.a.defaults.withCredentials=!0,c["a"].component("Loading",w.a),c["a"].filter("currency",O),c["a"].filter("date",C),c["a"].use(A["a"]),A["a"].Validator.localize("zh_Th",x.a),new c["a"]({router:f,store:k,render:function(e){return e(h)}}).$mount("#app"),f.beforeEach(function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");p.a.post(c).then(function(e){e.data.success?t():t({path:"/"})})}else t()})},"5c0b":function(e,n,t){"use strict";var c=t("5e27"),r=t.n(c);r.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.e68be2a4.js.map