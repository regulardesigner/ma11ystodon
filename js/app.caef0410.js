(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,h=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},c=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"eff0f635"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=r(e);var u=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ma11ystodon/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var a=n("7a23"),o={class:"mallystodon"},c={class:"heading"},r=Object(a["createTextVNode"])("Ally "),s=Object(a["createVNode"])("sup",{class:"small"},"for Mastodon",-1),i=Object(a["createTextVNode"])(" | "),u=Object(a["createTextVNode"])("About"),l={class:"switch"},d=Object(a["createVNode"])("label",{for:"switch"},"Color theme inverter",-1);function h(e,t,n,h,m,p){var b=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("header",o,[Object(a["createVNode"])("h1",c,[Object(a["createVNode"])(b,{to:{name:"home"}},{default:Object(a["withCtx"])((function(){return[r,s]})),_:1}),Object(a["createVNode"])("span",null,[i,Object(a["createVNode"])(b,{class:"medium",to:{name:"about"}},{default:Object(a["withCtx"])((function(){return[u]})),_:1})])]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("input",{type:"checkbox",checked:h.userSettings.getThemeSetting,onChange:t[1]||(t[1]=function(e){return h.userSettings.themeSwitcher()}),name:"switch",id:"switch"},null,40,["checked"]),d])])}var m=n("be92"),p=Object(m["b"])("UserSettingStore",{state:function(){return{switchTheme:!1}},getters:{getThemeSetting:function(e){return e.switchTheme}},actions:{themeSwitcher:function(){this.switchTheme=!this.switchTheme}}}),b={setup:function(){var e=p();return{userSettings:e}},props:{search:{type:String,default:""},checked:{type:Boolean,default:!1}}};n("4782");b.render=h;t["a"]=b},"211d":function(e,t,n){},"3af1":function(e,t,n){},4782:function(e,t,n){"use strict";n("933f")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("5530"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),c=n("be92"),r=n("bc3a"),s=(n("d3b7"),n("6605")),i=(n("a4d3"),n("e01a"),n("ac1f"),n("841c"),{key:0,class:"is-loading"}),u=Object(o["createVNode"])("div",{class:"loading"},null,-1),l=Object(o["createTextVNode"])("Loading container…"),d={key:1,class:"container"},h={class:"search"},m=Object(o["createVNode"])("input",{class:"search-form--submit",type:"submit",value:"search"},null,-1),p={class:"tags"},b={class:"user-header"},f={key:0},g={class:"medium"};function O(e,t,n,a,c,r){var s=Object(o["resolveComponent"])("Header"),O=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s,{search:c.search},null,8,["search"]),c.isLoading?(Object(o["openBlock"])(),Object(o["createBlock"])("span",i,[u,l])):Object(o["createCommentVNode"])("",!0),c.isLoading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("section",d,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("form",{class:"search-form",onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((function(){return r.handleTagSeach.apply(r,arguments)}),["prevent"]))},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"search-form--input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.search=e})},null,512),[[o["vModelText"],c.search]]),m],32),Object(o["createVNode"])("ul",p,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.searched,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:"tag medium",key:e},[Object(o["createVNode"])(O,{to:{name:"tags",params:{id:e}}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]})),_:2},1032,["to"])])})),128))])]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.toots,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("article",{class:"toot",key:e.id},[Object(o["createVNode"])("header",b,[Object(o["createVNode"])("img",{class:"avatar",width:"32",height:"32",src:e.account.avatar,alt:e.account.username},null,8,["src","alt"]),Object(o["createVNode"])("strong",null,Object(o["toDisplayString"])(e.account.display_name||e.account.username),1),Object(o["createTextVNode"])(" - @"+Object(o["toDisplayString"])(e.account.username),1)]),Object(o["createVNode"])("div",{class:"large",innerHTML:e.content},null,8,["innerHTML"]),0!=e.media_attachments.length&&"image"===e.media_attachments[0].type?(Object(o["openBlock"])(),Object(o["createBlock"])("figure",f,[Object(o["createVNode"])("img",{class:"attachment-image",src:e.media_attachments[0].preview_url,alt:e.media_attachments[0].description},null,8,["src","alt"]),Object(o["createVNode"])("figcaption",g,Object(o["toDisplayString"])(e.media_attachments[0].description),1)])):Object(o["createCommentVNode"])("",!0)])})),128))]))],64)}var j=n("2909"),v=(n("96cf"),n("1da1")),k=n("0418"),y={name:"App",components:{Header:k["a"]},data:function(){return{search:"accessibility",searched:[],toots:void 0,tootsCount:0,isLoading:!0}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mastodonTagSearch(e.search);case 1:case"end":return t.stop()}}),t)})))()},methods:{handleTagSeach:function(){this.mastodonTagSearch(this.search)},mastodonTagSearch:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/v1/timelines/tag/".concat(e,"?limit=4")).then((function(n){var a;t.toots?((a=t.toots).unshift.apply(a,Object(j["a"])(n.data)),t.tootsCount=t.toots.length):(t.toots=n.data,t.tootsCount=n.data.length);console.info("Toots: ".concat(t.tootsCount)),t.addTagToSearchedList(e),t.isLoading=!1}));case 2:case"end":return n.stop()}}),n)})))()},addTagToSearchedList:function(e){this.searched.unshift(e)}}};n("dfd4");y.render=O;var T=y,w={key:0,class:"is-loading"},N=Object(o["createVNode"])("div",{class:"loading"},null,-1),V=Object(o["createTextVNode"])("Loading container…"),_={key:1,class:"container"},S={class:"user-header"},B={key:0},x={class:"medium"};function L(e,t,n,a,c,r){var s=Object(o["resolveComponent"])("Header");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s,{search:c.search},null,8,["search"]),c.isLoading?(Object(o["openBlock"])(),Object(o["createBlock"])("span",w,[N,V])):Object(o["createCommentVNode"])("",!0),c.isLoading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("section",_,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.toots,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("article",{class:"toot",key:e.id},[Object(o["createVNode"])("header",S,[Object(o["createVNode"])("img",{class:"avatar",width:"32",height:"32",src:e.account.avatar,alt:e.account.username},null,8,["src","alt"]),Object(o["createVNode"])("strong",null,Object(o["toDisplayString"])(e.account.display_name||e.account.username),1),Object(o["createTextVNode"])(" - @"+Object(o["toDisplayString"])(e.account.username),1)]),Object(o["createVNode"])("div",{class:"large",innerHTML:e.content},null,8,["innerHTML"]),0!=e.media_attachments.length&&"image"===e.media_attachments[0].type?(Object(o["openBlock"])(),Object(o["createBlock"])("figure",B,[Object(o["createVNode"])("img",{class:"attachment-image",src:e.media_attachments[0].preview_url,alt:e.media_attachments[0].description},null,8,["src","alt"]),Object(o["createVNode"])("figcaption",x,Object(o["toDisplayString"])(e.media_attachments[0].description),1)])):Object(o["createCommentVNode"])("",!0)])})),128))]))],64)}var C={name:"App",components:{Header:k["a"]},data:function(){return{search:this.$route.params.id,searched:[],trends:void 0,toots:void 0,tootsCount:0,isLoading:!0}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mastodonTrendingTags(),e.mastodonTagSearch(e.search);case 2:case"end":return t.stop()}}),t)})))()},methods:{handleTagSeach:function(){this.mastodonTagSearch(this.search)},mastodonTagSearch:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/v1/timelines/tag/".concat(e)).then((function(n){var a;t.toots?((a=t.toots).unshift.apply(a,Object(j["a"])(n.data)),t.tootsCount=t.toots.length):(t.toots=n.data,t.tootsCount=n.data.length);console.info("Toots: ".concat(t.tootsCount)),t.addTagToSearchedList(e),t.isLoading=!1}));case 2:case"end":return n.stop()}}),n)})))()},addTagToSearchedList:function(e){this.searched.unshift(e)},mastodonTrendingTags:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://mastodon.social/api/v1/trends/tags").then((function(t){e.trends=t.data}));case 2:case"end":return t.stop()}}),t)})))()}}};n("fb9f");C.render=L;var E=C,R=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/tags/:id",name:"tags",component:E}],P=Object(s["a"])({history:Object(s["b"])("/ma11ystodon/"),routes:R}),A=P;function D(e,t,n,a,c,r){var s=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(s)}var M={mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getAppToken();case 1:case"end":return t.stop()}}),t)})))()},methods:{getAppToken:function(){var e=this;this.$axios.post("https://mastodon.social/oauth/token",{client_id:Object({NODE_ENV:"production",BASE_URL:"/ma11ystodon/"}).VUE_APP_CLIENT_ID,client_secret:Object({NODE_ENV:"production",BASE_URL:"/ma11ystodon/"}).VUE_APP_CLIENT_SECRET,grant_type:Object({NODE_ENV:"production",BASE_URL:"/ma11ystodon/"}).VUE_APP_GRANT_TYPE,redirect_uri:"urn:ietf:wg:oauth:2.0:oob"}).then((function(t){return e.addTokenToLocalStorage(t.data)}))},addTokenToLocalStorage:function(e){localStorage.access_token=e.access_token,localStorage.scope=e.scope,localStorage.token_type=e.token_type}}};M.render=D;var U=M,H=Object(o["createApp"])(U),$=Object(c["a"])(),F=r["a"].create({baseURL:"https://mastodon.social",withCredentials:!1});H.config.globalProperties.$axios=Object(a["a"])({},F),H.use($),H.use(A),H.mount("#app")},"933f":function(e,t,n){},dfd4:function(e,t,n){"use strict";n("211d")},fb9f:function(e,t,n){"use strict";n("3af1")}});
//# sourceMappingURL=app.caef0410.js.map