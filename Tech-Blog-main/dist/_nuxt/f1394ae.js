(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,n,e){"use strict";e.r(n);var o={name:"AdminAuthPage",layout:"admin",data:function(){return{isLogin:!0,email:"",password:""}},methods:{onSubmit:function(){var t=this;this.checkFields()?this.checkEmail()?this.$store.dispatch("authenticateUser",{isLogin:this.isLogin,email:this.email,password:this.password}).then((function(n){var e;if(null!=n&&null!==(e=n.response)&&void 0!==e&&e.status){var o,r=(null==n||null===(o=n.response)||void 0===o?void 0:o.status)||null,l=t.$checkStatus(r,t.isLogin);l?t.$toastr.e(l):t.$router.push("/admin")}else t.$toastr.s("You are logged in"),t.$router.push("/admin")})):this.$toastr.e("Please enter a valid Email"):this.$toastr.e(this.isLogin?"Login details required":"Signup details required")},checkEmail:function(){return/\S+@\S+\.\S+/.test(this.email)},checkFields:function(){return""!==this.email&&""!==this.password}}},r=e(8),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"admin-auth-page u-margin-top-huge"},[e("div",{staticClass:"row"},[e("form",{on:{submit:function(n){return n.preventDefault(),t.onSubmit(n)}}},[e("AppControlInput",{attrs:{type:"text"},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}},[t._v("E-Mail Address")]),t._v(" "),e("AppControlInput",{attrs:{type:"password"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}},[t._v("Password")]),t._v(" "),e("AppButton",{attrs:{type:"submit",classes:"btn btn-text"}},[t._v(t._s(t.isLogin?"Login":"Sign Up"))]),t._v(" "),e("AppButton",{staticStyle:{"margin-left":"15px"},attrs:{type:"button",classes:"btn btn-text"},on:{click:function(n){t.isLogin=!t.isLogin}}},[t._v("\n                    Switch to "+t._s(t.isLogin?"Signup":"Login")+"\n            ")])],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);