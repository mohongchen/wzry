(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/web/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01bf":function(t,e,s){"use strict";var a=s("b714"),i=s.n(a);i.a},"0972":function(t,e,s){},1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"2d56":function(t,e,s){"use strict";var a=s("5e92"),i=s.n(a);i.a},3457:function(t,e,s){t.exports=s.p+"img/4a383e2e30b71879d276b48d0923affd.4a383e2e.jpeg"},"49c5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-invers pb-1 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xss"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],v=(s("a006"),{}),f=Object(r["a"])(v,d,p,!1,null,null,null),m=f.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("3457"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("c114"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("a845"),alt:"",srcset:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right pr-3",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3  text-center pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(12,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),a("m-list-card",{attrs:{icon:"menu",title:"新闻资讯",categories:t.newsData},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"helmet-battle-li",title:"英雄列表",categories:t.heroData},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heros/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-card",{attrs:{icon:"menu",title:"精彩视频"}}),a("m-card",{attrs:{icon:"menu",title:"图文攻略"}})],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],g=(s("d3b7"),s("96cf"),s("5a0c")),b=s.n(g),C={filters:{date:function(t){return b()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"},autoplay:{delay:1500}},newsData:[],heroData:[]}},methods:{fetchNewsCats:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("news/list"));case 2:t=e.sent,this.newsData=t.data;case 4:case"end":return e.stop()}}),null,this)},fetchHeroData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("heros/list"));case 2:t=e.sent,this.heroData=t.data;case 4:case"end":return e.stop()}}),null,this)}},created:function(){this.fetchNewsCats(),this.fetchHeroData()}},x=C,y=(s("01bf"),Object(r["a"])(x,_,h,!1,null,null,null)),w=y.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"text-blue icon-Back"},[t._v(" < ")]),s("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(" "+t._s(t.model.title)+" ")]),s("div",{staticClass:"text-grey fs-xs"},[t._v(" 2019-12-12 ")])]),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-2"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.model.related,(function(e){return s("router-link",{key:e.id,staticClass:"py-2 text-dark fs-lg",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(" "+t._s(e.title)+" ")])})),1)])]):t._e()},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-menu"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],S={props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:function(){this.fetch()}},methods:{fetch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("articles/".concat(this.id)));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}}),null,this)}},created:function(){this.fetch()}},O=S,$=(s("1399"),Object(r["a"])(O,k,j,!1,null,null,null)),E=$.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v("皮肤: 2 >")])],1)])]),a("div",[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey-1"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3"})],2)],1)]),a("swiper-slide")],1)],1)]):t._e()},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-white"},[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-3"},[s("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],R={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("heroes/".concat(this.id)));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}}),null,this)}},created:function(){this.fetch()}},T=R,q=(s("6e94"),Object(r["a"])(T,D,P,!1,null,null,null)),M=q.exports;a["a"].use(u["a"]);var I=[{path:"/",component:m,children:[{path:"/",name:"home",component:w},{path:"/articles/:id",name:"article",component:E,props:!0}]},{path:"/heros/:id",name:"hero",component:M,props:!0}],L=new u["a"]({routes:I}),A=L,N=(s("78a7"),s("7212")),H=s.n(N),U=(s("dfa4"),s("be35"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card p-3 bg-white mt-3"},[s("div",{staticClass:"card-header d-flex ai-center pb-3"},[s("i",{class:"iconfont icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),s("i",{staticClass:"iconfont icon-menu1"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])])}),B=[],J={props:{title:{type:String,requird:!0},icon:{type:String,requird:!0}}},V=J,z=(s("2d56"),Object(r["a"])(V,U,B,!1,null,"688814d8",null)),F=z.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},K=[],Q={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},W=Q,X=Object(r["a"])(W,G,K,!1,null,null,null),Y=X.exports,Z=s("bc3a"),tt=s.n(Z);a["a"].use(H.a),a["a"].config.productionTip=!1,a["a"].component("m-card",F),a["a"].component("m-list-card",Y),a["a"].prototype.$http=tt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_URL||"/admin/api"}),new a["a"]({router:A,render:function(t){return t(o)}}).$mount("#app")},"5e92":function(t,e,s){},"6e94":function(t,e,s){"use strict";var a=s("49c5"),i=s.n(a);i.a},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("0972"),i=s.n(a);i.a},a845:function(t,e,s){t.exports=s.p+"img/650b13c2e6299fee025307204aea297b.650b13c2.jpeg"},b714:function(t,e,s){},be35:function(t,e,s){},c114:function(t,e,s){t.exports=s.p+"img/8af0478779a94d0a9278477fb9bff3e7.8af04787.jpeg"},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.76a409d5.js.map