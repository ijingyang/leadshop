(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,e,a){"use strict";var n=a("4ea4");a("c740"),a("e25e"),a("ac1f"),a("841c"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=n(a("4b77")),r=n(a("4bc6")),s=n(a("5830")),c=n(a("9990")),l=n(a("23f8")),u=n(a("ae01")),d=n(a("ed5e")),f=n(a("857d")),h=n(a("d545")),b=n(a("30bc")),p=n(a("05a7")),g=n(a("29c6")),v=n(a("b43a")),w=n(a("d2d6")),m=n(a("eca4")),x=a("2f62"),k={},y={components:{videos:s.default,separate:c.default,blank:l.default,banner:u.default,search:d.default,goods:f.default,navigation:r.default,tabs:h.default,titles:o.default,rubik:b.default,notice:p.default,advertising:g.default,coupon:v.default,heNavbar:w.default,userNewuserCoupon:m.default},data:function(){return{is_skip:!1,background:"#F7F7F7",page:[],empty:{name:"blank",icon:this.ipAddress+"/pageicon/blank-icon.png",title:"辅助空白",content:{},facade:{height:10,background_color:"#FFFFFF"}},menuButtonInfo:k,isNewuser:!1,wechatUrl:"/"}},beforeCreate:function(){var t=this;this.is_skip=!0;var e=window.location.search.substring(1).split("_skip=")[1];if(e){var a=this.$h.getQueryVariable("code");a&&(this.$store.state.apply.is_login?this.is_skip=!1:(this.wechatUrl=e,this.$store.dispatch("user/weChatLogin",{code:a}).then((function(){t.is_skip=!1,t.$h.test.isEmpty(t.userInfo.register.coupon_list)?uni.redirectTo({url:e,fail:function(){uni.switchTab({url:e})}}):t.isNewuser=!0})).catch((function(){t.is_skip=!1}))))}else this.is_skip=!1},computed:(0,i.default)((0,i.default)({},(0,x.mapGetters)({searchTop:"components/getSearchTop",fixed:"components/getSearchFixed",searchHeight:"components/getSearchHeight",navbarHeight:"setting/getNavBarHeight",statusBarHeight:"setting/statusBarHeight"})),{},{topHeight:function(){return{height:"".concat(this.statusBarHeight+this.navbarHeight,"px"),lineHeight:"".concat(this.statusBarHeight+this.navbarHeight,"px")}},userInfo:function(){return this.$store.state.apply.userInfo}}),onShow:function(){this.handlePageLoading()},methods:{handlePageLoading:function(){try{var t=this.getStorageSync("micropage");if(t){uni.setNavigationBarTitle({title:t.name}),this.background=t.background,this.page=JSON.parse(t.content);var e=this.page.findIndex((function(t){return"search"===t.name}));this.$store.commit("components/setSearchIndex",e),this.$store.commit("components/setPage",this.page),this.handleLoadData(t)}else this.handleLoadData()}catch(a){this.handleLoadData()}},handleLoadData:function(t){var e=this;this.$heshop.pages("GET").then((function(a){if(e.background=a.background,!t||e.$heshop.MD5(t)!=e.$heshop.MD5(a)){e.page=JSON.parse(a.content);var n=e.page.findIndex((function(t){return"search"===t.name}));e.$store.commit("components/setSearchIndex",n),e.$store.commit("components/setPage",e.page),uni.setStorageSync("micropage",a),uni.setNavigationBarTitle({title:a.name})}})).catch((function(t){e.$toError(t)}))},navigateToDetail:function(){uni.navigateTo({url:"/pages/goods/search"})}},onPageScroll:function(t){var e=this,a=parseInt(t.scrollTop),n=a>=e.searchTop+this.navbarHeight;if(e.searchFixed===n)return!1;this.$store.commit("components/setSearchFixed",n)}};e.default=y},"1d15":function(t,e,a){"use strict";a.r(e);var n=a("7f36"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"259d":function(t,e,a){"use strict";var n=a("bcb7"),i=a.n(n);i.a},"25c6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.u-navbar[data-v-b22f9e66]{width:100%}.u-navbar-fixed[data-v-b22f9e66]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-b22f9e66]{width:100%}.u-navbar-inner[data-v-b22f9e66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-b22f9e66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-b22f9e66]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-b22f9e66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-b22f9e66]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-b22f9e66]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-b22f9e66]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-b22f9e66]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon-wrap[data-v-b22f9e66]{width:%?64?%;height:%?64?%;background:hsla(0,0%,100%,.5);border-radius:50%}.iconbtn_back[data-v-b22f9e66]{color:#191919;font-size:%?40?%}',""]),t.exports=e},"294d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.le-popup[data-v-627f87ec]{width:100%;height:100%}.he-box[data-v-627f87ec]{width:%?660?%;height:%?804?%;margin:10vh auto 0 auto;position:relative}.he-box__close[data-v-627f87ec]{width:%?52?%;height:%?52?%;border:%?2?% solid #fff;border-radius:50%;position:absolute;right:0;top:%?-84?%}.iconpopup_close[data-v-627f87ec]{font-size:%?20?%;color:#fff}.le-box-image[data-v-627f87ec]{height:%?252?%;width:100%;display:block}.le-content[data-v-627f87ec]{width:%?630?%;margin:0 auto;background:#e44;border-radius:%?0?% %?0?% %?16?% %?16?%;padding:%?32?% %?32?% 0 %?32?%}.le-content .le-body[data-v-627f87ec]{min-height:%?160?%;max-height:%?440?%}.le-content .he-item[data-v-627f87ec]{height:%?160?%;margin-bottom:%?16?%}.le-content .he-left[data-v-627f87ec]{width:%?217?%;height:100%;background:#fff;border-top-left-radius:%?16?%;border-bottom-left-radius:%?16?%;padding-left:%?17?%;text-align:center}.le-content .he-left .le-price[data-v-627f87ec]{font-size:%?66?%;font-family:PingFang SC;font-weight:700;color:#e60b30;line-height:%?52?%;margin-top:%?37?%}.le-content .he-left .le-price[data-v-627f87ec]::before{content:"￥";font-size:%?24?%;font-weight:500}.le-content .he-left .le-limit[data-v-627f87ec]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#e60b30;line-height:%?36?%}.le-content .he-center[data-v-627f87ec]{width:%?16?%;height:100%;position:relative;background-color:#fff}.le-content .he-center .he-dot[data-v-627f87ec]{position:absolute;width:%?16?%;height:%?16?%;border-radius:50%;background-color:#e44}.le-content .he-center .he-dot[data-v-627f87ec]:first-child{top:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.le-content .he-center .he-dot[data-v-627f87ec]:last-child{bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.le-content .he-center .he-line[data-v-627f87ec]{width:%?2?%;height:96%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-position:50%;background-size:%?2?% %?14?%;background-repeat:repeat-y;background-image:-webkit-linear-gradient(bottom,#e44,#e44 50%,transparent 0);background-image:linear-gradient(0deg,#e44 0,#e44 50%,transparent 0)}.le-content .le-right[data-v-627f87ec]{height:100%;background:#fff;border-top-right-radius:%?16?%;border-bottom-right-radius:%?16?%;padding-left:%?32?%;font-weight:500;font-family:PingFang SC}.le-content .le-right .le-name[data-v-627f87ec]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#222;line-height:%?40?%;margin-top:%?43?%}.le-content .le-right .le-desc[data-v-627f87ec]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#999;line-height:%?28?%;margin-top:%?5?%}.le-content .le-footer[data-v-627f87ec]{height:%?80?%;line-height:%?80?%;font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#fefefe;text-align:center}',""]),t.exports=e},"2a35":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.is_skip?t._e():a("v-uni-view",{staticClass:"pages fitment-pages",style:{background:t.background}},[t.fixed?a("he-navbar",{attrs:{"is-back":!1,"title-bold":!0,"title-size":"32",background:{background:"#fff"}}},[a("v-uni-view",{staticClass:"he-search flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToDetail.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconsearchbar_search"}),a("v-uni-text",{staticClass:"he-search-text"},[t._v("请输入关键字搜索")])],1)],1):t._e(),t._l(t.page,(function(e,n){return a("v-uni-view",{key:n},["notice"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("notice",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"rubik"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("rubik",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"title"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("titles",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"navigation"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("navigation",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"video"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("videos",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"separate"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("separate",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"banner"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("banner",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"search"===e.name?a("v-uni-view",{attrs:{id:"search"}},[a("search",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"goods"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("goods",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"blank"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("blank",{tag:"component",attrs:{facade:e.facade,content:e.content,"data-index":n}})],1):"tabs"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("tabs",{tag:"component",attrs:{background:t.background,"page-index":n,facade:e.facade,content:e.content,"data-index":n}})],1):"coupon"===e.name?a("v-uni-view",{attrs:{id:e.name+"_"+n}},[a("coupon",{tag:"component",attrs:{background:t.background,"page-index":n,facade:e.facade,content:e.content,"data-index":n}})],1):t._e()],1)})),a("user-newuser-coupon",{attrs:{coupon:t.userInfo.register&&t.userInfo.register.coupon_list,wechatUrl:t.wechatUrl},model:{value:t.isNewuser,callback:function(e){t.isNewuser=e},expression:"isNewuser"}})],2)},o=[]},"426a":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),i={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#000"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"transparent"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack||uni.navigateBack({delta:1})}}};e.default=o},6219:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.pages[data-v-0d5ed00e]{width:100%;min-height:100vh;background-color:#f5f5f5}.he-page-title[data-v-0d5ed00e]{background-color:#fff;position:fixed;z-index:10;width:100%;top:0;text-align:center}.he-search[data-v-0d5ed00e]{background:#fff;border:%?2?% solid #e5e5e5;border-radius:%?32?%;margin:0 %?20?%;width:100%;padding-left:%?24?%;height:%?63?%}.he-search-text[data-v-0d5ed00e]{display:inline-block;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999;margin-left:%?12?%}.iconsearchbar_search[data-v-0d5ed00e]{font-size:%?24?%}',""]),t.exports=e},"7f36":function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c2c4")),o={props:{value:Boolean,coupon:Array,wechatUrl:String},components:{HePopup:i.default},computed:{showModal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},filters:{setNumber:function(t){return Number(t)}},methods:{closeModal:function(){this.showModal=!1,uni.redirectTo({url:this.wechatUrl,fail:function(){uni.switchTab({url:this.wechatUrl})}})}}};e.default=o},8069:function(t,e,a){"use strict";a.r(e);var n=a("0d9b"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"8d6a":function(t,e,a){var n=a("25c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a3ffa88e",n,!0,{sourceMap:!1,shadowMode:!1})},"9fc7":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("he-popup",{attrs:{mode:"center","background-color":"transparent",zoom:!1,width:"100%",height:"100%"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("v-uni-view",{staticClass:"le-popup",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"he-box"},[a("v-uni-view",{staticClass:"he-box__close flex align-center justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconpopup_close"})],1),a("v-uni-image",{staticClass:"le-box-image",attrs:{src:t.ipAddress+"/login-newuser-coupon.png"}}),a("v-uni-view",{staticClass:"le-content"},[a("v-uni-scroll-view",{staticClass:"le-body",attrs:{"scroll-y":!0}},t._l(t.coupon,(function(e,n){return a("v-uni-view",{key:n,staticClass:"he-item flex"},[a("v-uni-view",{staticClass:"he-left"},[a("v-uni-view",{staticClass:"le-price"},[t._v(t._s(t._f("setNumber")(e.coupon.sub_price)))]),a("v-uni-view",{staticClass:"le-limit"},[Number(e.coupon.min_price)>0?[t._v("满"+t._s(Number(e.coupon.min_price))+"可用")]:[t._v("无门槛使用")]],2)],1),a("v-uni-view",{staticClass:"he-center"},[a("v-uni-view",{staticClass:"he-dot"}),a("v-uni-view",{staticClass:"he-line"}),a("v-uni-view",{staticClass:"he-dot"})],1),a("v-uni-view",{staticClass:"le-right flex-sub"},[a("v-uni-view",{staticClass:"le-name"},[t._v(t._s(e.coupon.name))]),a("v-uni-view",{staticClass:"le-desc"},[t._v(t._s(1===e.coupon.appoint_type?"全部商品可用":"部分商品可用"))])],1)],1)})),1),a("v-uni-view",{staticClass:"le-footer"},[t._v("优惠券已发放，请在优惠券账户查看")])],1)],1)],1)],1)},o=[]},bcb7:function(t,e,a){var n=a("6219");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("57e88b24",n,!0,{sourceMap:!1,shadowMode:!1})},d2d6:function(t,e,a){"use strict";a.r(e);var n=a("e884"),i=a("fb50");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("e958");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"b22f9e66",null,!1,n["a"],r);e["default"]=c.exports},dc07:function(t,e,a){"use strict";var n=a("f6aa"),i=a.n(n);i.a},e884:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap flex justify-center align-center"},[a("v-uni-text",{staticClass:"iconfont iconbtn_back"})],1),t.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"600":"normal"}},[t._v(t._s(t.title))])],1):t._e(),a("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1)],1)},o=[]},e958:function(t,e,a){"use strict";var n=a("8d6a"),i=a.n(n);i.a},eca4:function(t,e,a){"use strict";a.r(e);var n=a("9fc7"),i=a("1d15");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("dc07");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"627f87ec",null,!1,n["a"],r);e["default"]=c.exports},f6aa:function(t,e,a){var n=a("294d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a596e616",n,!0,{sourceMap:!1,shadowMode:!1})},f75a:function(t,e,a){"use strict";a.r(e);var n=a("2a35"),i=a("8069");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("259d");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0d5ed00e",null,!1,n["a"],r);e["default"]=c.exports},fb50:function(t,e,a){"use strict";a.r(e);var n=a("426a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);