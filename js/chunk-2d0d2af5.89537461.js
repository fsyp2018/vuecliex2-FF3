(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2af5"],{"5a0c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.order.products,function(s){return a("tr",{key:s.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(s.final_total))])])}),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),!1===t.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("單價")])])}],d={data:function(){return{orderId:"",order:{user:{}},is_paid:!1}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),this.$http.get(s).then(function(s){t.order=s.data.order,t.is_paid=s.data.order.is_paid,t.$store.dispatch("updateLoading",!1)})},payOrder:function(){var t=this,s=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2000","/pay/").concat(s.orderId);s.$store.dispatch("updateLoading",!0),this.$http.post(a).then(function(a){s.$store.dispatch("updateLoading",!1),a.data.success&&(s.getOrder(),t.$store.dispatch("cartModules/getCart"))})}},created:function(){var t=this;t.orderId=this.$route.params.orderId,t.getOrder()}},i=d,o=a("2877"),c=Object(o["a"])(i,e,r,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d2af5.89537461.js.map