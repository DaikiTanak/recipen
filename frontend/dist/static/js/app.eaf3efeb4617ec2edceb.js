webpackJsonp([1],{"1uuo":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"text-white px-3",attrs:{to:"/"}},[this._v("レシピ登録")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"text-white px-3",attrs:{to:"/saved"}},[this._v("登録済みレシピ")])],1)])])])])},staticRenderFns:[]},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar-wrapper"},[s("div",{staticClass:"sidebar-link-area"},[s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/counselings"}},[t._v("カウンセリング")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/expenses"}},[t._v("経費")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/problems"}},[t._v("悩み")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/calendars"}},[t._v("カレンダー")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/admins"}},[t._v("管理者")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/users"}},[t._v("生徒一覧")])],1),t._v(" "),s("p",[s("router-link",{staticClass:"sidebar-link",attrs:{to:"/tasks"}},[t._v("イベント一覧")])],1)])])])},staticRenderFns:[]};var r={name:"App",components:{myheader:s("VU/8")(null,n,!1,null,null,null).exports,sidebar:s("VU/8")(null,i,!1,function(t){s("QTQg")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("myheader"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=s("VU/8")(r,o,!1,function(t){s("uT6y")},null,null).exports,l=s("Tqaz"),c=s("/ocq"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var _=s("Xxa5"),v=s.n(_),h=s("exGp"),f=s.n(h),p=s("mtWM").create({baseURL:"http://localhost:3000"}),m={name:"RegistDish",data:function(){return{registering_dish:!0,registering_stuffs:!1,stuffs:[],methods:[],createdat:"",dishname:"",stuff_name:"",stuff_quantity:"",method_input:""}},created:function(){var t=new Date;t.setDate(t.getDate());var e=t.getFullYear(),s=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2);this.createdat=e+"-"+s+"-"+a},methods:{clear:function(){this.created_at="",this.dishname="",this.stuffs=[],this.methods=[],this.stuff_name="",this.stuff_quantity="",this.method_input="",this.registering_dish=!0,this.registering_stuffs=!1},regist_dish:function(){this.registering_dish=!1,this.registering_stuffs=!0},cancel_regist:function(){this.clear()},add_stuff:function(t,e){this.stuff_name.length>0&&(this.stuff_counter+=1,this.stuffs.push({name:t,quantity:e}))},remove_stuff:function(t){var e=this.stuffs.indexOf(t);this.stuffs.splice(e,1),this.stuff_counter-=1},add_method:function(){this.method_input.length>0&&this.methods.push({method:this.method_input})},remove_method:function(t){var e=this.methods.indexOf(t);this.methods.splice(e,1)},save_dish:function(){var t=f()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={created_at:this.createdat,dishname:this.dishname,stuffs:this.stuffs,show_detail:!1},t.next=3,p.post("/api/spam",e);case 3:t.sent,this.clear();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-text"},[s("form",[s("div",{staticClass:"form-group",attrs:{id:"registdate"}},[s("label",{attrs:{for:"formGroupExampleInput"}},[t._v("日付を入力")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.createdat,expression:"createdat"}],staticClass:"form-control",attrs:{type:"date",id:"createdat",placeholder:"Example input"},domProps:{value:t.createdat},on:{input:function(e){e.target.composing||(t.createdat=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group",attrs:{id:"registdishname"}},[s("label",{attrs:{for:"formGroupExampleInput"}},[t._v("料理名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dishname,expression:"dishname"}],staticClass:"form-control",attrs:{type:"text",id:"dishname",placeholder:"Example input"},domProps:{value:t.dishname},on:{input:function(e){e.target.composing||(t.dishname=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"buttons"},[s("tr",[s("td",[s("div",{attrs:{id:"regist_button"}},[t.registering_dish&t.dishname.length>0?s("button",{staticClass:"btn btn-outline-primary",on:{click:t.regist_dish}},[t._v("材料・手順の入力")]):!t.registering_dish&t.dishname.length>0?s("button",{staticClass:"btn btn-outline-secondary",on:{click:t.cancel_regist}},[t._v("Cancel")]):t._e()])]),t._v(" "),s("td",[s("div",{attrs:{id:"save_button"}},[t.dishname?s("button",{staticClass:"btn btn-success",on:{click:t.save_dish}},[t._v("保存")]):t._e()])])])]),t._v(" "),t.registering_stuffs?s("div",{attrs:{id:" extrainfo"}},[s("div",{attrs:{id:"AddStuff"}},[s("div",{staticClass:"StuffAddForm"},[s("form",[s("table",[s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.stuff_name,expression:"stuff_name"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"材料名"},domProps:{value:t.stuff_name},on:{input:function(e){e.target.composing||(t.stuff_name=e.target.value)}}})]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.stuff_quantity,expression:"stuff_quantity"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"量"},domProps:{value:t.stuff_quantity},on:{input:function(e){e.target.composing||(t.stuff_quantity=e.target.value)}}})]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){return t.add_stuff(t.stuff_name,t.stuff_quantity)}}},[t._v("材料を追加")])])])])])])]),t._v(" "),s("div",{attrs:{id:"AddedStuffs"}},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.stuffs,function(e,a){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.quantity))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger",on:{click:function(s){return t.remove_stuff(e)}}},[t._v("削除")])])])}),0)])]),t._v(" "),s("div",[s("div",{attrs:{id:"AddMethods"}},[s("div",{staticClass:"MethodForm"},[s("form",[s("table",[s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.method_input,expression:"method_input"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"作り方を入力"},domProps:{value:t.method_input},on:{input:function(e){e.target.composing||(t.method_input=e.target.value)}}})]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){return t.add_method()}}},[t._v("手順を追加")])])])])])])]),t._v(" "),s("div",{attrs:{id:"AddedStuffs"}},[s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",t._l(t.methods,function(e,a){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.method))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger",on:{click:function(s){return t.remove_method(e)}}},[t._v("削除")])])])}),0)])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[this._v("材料No.")]),this._v(" "),e("th",[this._v("材料名")]),this._v(" "),e("th",[this._v("量")]),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[this._v("手順No.")]),this._v(" "),e("th",[this._v("手順")]),this._v(" "),e("th")])])}]};var g={components:{inputdish:s("VU/8")(m,b,!1,function(t){s("noGc")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mybody"},[e("inputdish")],1)},staticRenderFns:[]};var w=s("VU/8")(g,C,!1,function(t){s("erUB")},null,null).exports,k=s("mtWM").create({baseURL:"http://localhost:3000"}),x={data:function(){return{saved_data:[],if_show_detail:!1,shown_recipe:{}}},created:function(){var t=f()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/api/spam");case 2:e=t.sent,this.saved_data=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{show_detail:function(t){!this.shown_recipe==={}&&(this.shown_recipe.show_detail=!1);t.stuffs;t.show_detail=!0,this.if_show_detail=!0,this.shown_recipe=t},close_detail:function(t){this.shown_recipe.show_detail=!1,this.if_show_detail=!1},remove_recipe:function(t){var e=this.saved_data.indexOf(t);this.saved_data.splice(e,1);k.delete("/spam/"+t.id)}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"ShowSavedRecipes"}},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.saved_data,function(e,a){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.dishname))]),t._v(" "),s("td",[t._v(t._s(e.created_at))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.show_detail(e)}}},[t._v("詳細")])]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger",on:{click:function(s){return t.remove_recipe(e)}}},[t._v("削除")])])])}),0)]),t._v(" "),t.if_show_detail?s("div",{attrs:{id:"ShowDetail"}},[s("table",{staticClass:"table"},[s("tr",[s("th",[t._v("料理名")]),t._v(" "),s("th",[t._v(t._s(t.shown_recipe.dishname))])]),t._v(" "),s("tr",[s("th",[t._v("作成日時")]),t._v(" "),s("th",[t._v(t._s(t.shown_recipe.created_at))])]),t._v(" "),s("tr",[s("th",[t._v("材料")]),t._v(" "),s("th",[t._v(t._s(t.shown_recipe.stuffs))])]),t._v(" "),s("tr",[s("th",[t._v("手順")]),t._v(" "),s("th",[t._v(t._s(t.shown_recipe.methods))])])]),t._v(" "),s("td",[t.shown_recipe.show_detail?s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.close_detail(t.shown_recipe)}}},[t._v("詳細を閉じる")]):t._e()])]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-light"},[s("tr",[s("th",[t._v("レシピNo.")]),t._v(" "),s("th",[t._v("料理名")]),t._v(" "),s("th",[t._v("作成日時")]),t._v(" "),s("th"),t._v(" "),s("th"),t._v(" "),s("th")])])}]},E=s("VU/8")(x,y,!1,null,null,null).exports;s("Jmt5"),s("9M+g");a.default.use(c.a),a.default.use(l.a);var $=new c.a({routes:[{path:"/",name:"Top",component:w},{path:"/saved",name:"saved_dishes",component:E}]});a.default.config.productionTip=!1,new a.default({el:"#app",router:$,components:{App:u},template:"<App/>"})},QTQg:function(t,e){},erUB:function(t,e){},noGc:function(t,e){},uT6y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eaf3efeb4617ec2edceb.js.map