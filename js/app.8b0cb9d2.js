(function(t){function e(e){for(var a,r,s=e[0],i=e[1],u=e[2],l=0,b=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},o=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dac4b22a"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=c[t]=[e,a]}));e.push(n[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=r(t);var u=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}c[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ma11ystodon/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"211d":function(t,e,n){},"3af1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("5530"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),o=n("bc3a"),r=(n("d3b7"),n("6605")),s=(n("a4d3"),n("e01a"),n("ac1f"),n("841c"),{class:"mallystodon"}),i={class:"heading"},u=Object(c["g"])("div",{class:"switch"},[Object(c["g"])("input",{type:"checkbox",name:"switch",id:"switch"}),Object(c["g"])("label",{for:"switch"},"Color theme inverter")],-1),l={key:0,class:"is-loading"},d=Object(c["g"])("div",{class:"loading"},null,-1),b=Object(c["f"])("Loading toots…"),h={key:1,class:"toots"},p={class:"search"},f=Object(c["g"])("input",{class:"search-form--submit",type:"submit",value:"search"},null,-1),g={class:"tags"},m={class:"user-header"},j={key:0},O={class:"medium"};function v(t,e,n,a,o,r){var v=Object(c["u"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",s,[Object(c["g"])("h1",i,[Object(c["g"])(v,{to:{name:"home"}},{default:Object(c["A"])((function(){return[Object(c["f"])(Object(c["w"])("M".concat(o.search,"Stodon")),1)]})),_:1})]),u]),o.isLoading?(Object(c["p"])(),Object(c["d"])("span",l,[d,b])):Object(c["e"])("",!0),o.isLoading?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("section",h,[Object(c["g"])("div",p,[Object(c["g"])("form",{class:"search-form",onSubmit:e[2]||(e[2]=Object(c["C"])((function(){return r.handleTagSeach.apply(r,arguments)}),["prevent"]))},[Object(c["B"])(Object(c["g"])("input",{class:"search-form--input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.search=t})},null,512),[[c["y"],o.search]]),f],32),Object(c["g"])("ul",g,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["t"])(o.searched,(function(t){return Object(c["p"])(),Object(c["d"])("li",{class:"tag medium",key:t},[Object(c["g"])(v,{to:{name:"tags",params:{id:t}}},{default:Object(c["A"])((function(){return[Object(c["f"])(Object(c["w"])(t),1)]})),_:2},1032,["to"])])})),128))])]),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["t"])(o.toots,(function(t){return Object(c["p"])(),Object(c["d"])("article",{class:"toot",key:t.id},[Object(c["g"])("header",m,[Object(c["g"])("img",{class:"avatar",width:"32",height:"32",src:t.account.avatar,alt:t.account.username},null,8,["src","alt"]),Object(c["g"])("strong",null,Object(c["w"])(t.account.display_name||t.account.username),1),Object(c["f"])(" - @"+Object(c["w"])(t.account.username),1)]),Object(c["g"])("div",{class:"large",innerHTML:t.content},null,8,["innerHTML"]),0!=t.media_attachments.length&&"image"===t.media_attachments[0].type?(Object(c["p"])(),Object(c["d"])("figure",j,[Object(c["g"])("img",{class:"attachment-image",src:t.media_attachments[0].preview_url,alt:t.media_attachments[0].description},null,8,["src","alt"]),Object(c["g"])("figcaption",O,Object(c["w"])(t.media_attachments[0].description),1)])):Object(c["e"])("",!0)])})),128))]))],64)}var w=n("2909"),y=(n("96cf"),n("1da1")),T={name:"App",data:function(){return{search:"a11y",searched:[],toots:void 0,tootsCount:0,isLoading:!0}},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.mastodonTagSearch(t.search);case 1:case"end":return e.stop()}}),e)})))()},methods:{handleTagSeach:function(){this.mastodonTagSearch(this.search)},mastodonTagSearch:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("/api/v1/timelines/tag/".concat(t,"?limit=4")).then((function(n){var a;e.toots?((a=e.toots).unshift.apply(a,Object(w["a"])(n.data)),e.tootsCount=e.toots.length):(e.toots=n.data,e.tootsCount=n.data.length);console.info("Toots: ".concat(e.tootsCount)),e.addTagToSearchedList(t),e.isLoading=!1}));case 2:case"end":return n.stop()}}),n)})))()},addTagToSearchedList:function(t){this.searched.unshift(t)}}};n("dfd4");T.render=v;var _=T,k={class:"mallystodon"},L={class:"heading"},S=Object(c["g"])("div",{class:"switch"},[Object(c["g"])("input",{type:"checkbox",name:"switch",id:"switch"}),Object(c["g"])("label",{for:"switch"},"Color theme inverter")],-1),x={key:0,class:"is-loading"},C=Object(c["g"])("div",{class:"loading"},null,-1),M=Object(c["f"])("Loading toots…"),P={key:1,class:"toots"},R={class:"user-header"},A={key:0},H={class:"medium"};function $(t,e,n,a,o,r){var s=Object(c["u"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",k,[Object(c["g"])("h1",L,[Object(c["g"])(s,{to:{name:"home"}},{default:Object(c["A"])((function(){return[Object(c["f"])(Object(c["w"])("M".concat(o.search,"Stodon")),1)]})),_:1})]),S]),o.isLoading?(Object(c["p"])(),Object(c["d"])("span",x,[C,M])):Object(c["e"])("",!0),o.isLoading?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("section",P,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["t"])(o.toots,(function(t){return Object(c["p"])(),Object(c["d"])("article",{class:"toot",key:t.id},[Object(c["g"])("header",R,[Object(c["g"])("img",{class:"avatar",width:"32",height:"32",src:t.account.avatar,alt:t.account.username},null,8,["src","alt"]),Object(c["g"])("strong",null,Object(c["w"])(t.account.display_name||t.account.username),1),Object(c["f"])(" - @"+Object(c["w"])(t.account.username),1)]),Object(c["g"])("div",{class:"large",innerHTML:t.content},null,8,["innerHTML"]),0!=t.media_attachments.length&&"image"===t.media_attachments[0].type?(Object(c["p"])(),Object(c["d"])("figure",A,[Object(c["g"])("img",{class:"attachment-image",src:t.media_attachments[0].preview_url,alt:t.media_attachments[0].description},null,8,["src","alt"]),Object(c["g"])("figcaption",H,Object(c["w"])(t.media_attachments[0].description),1)])):Object(c["e"])("",!0)])})),128))]))],64)}var E={name:"App",data:function(){return{search:this.$route.params.id,searched:[],toots:void 0,tootsCount:0,isLoading:!0}},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.mastodonTagSearch(t.search);case 1:case"end":return e.stop()}}),e)})))()},methods:{handleTagSeach:function(){this.mastodonTagSearch(this.search)},mastodonTagSearch:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("/api/v1/timelines/tag/".concat(t)).then((function(n){var a;e.toots?((a=e.toots).unshift.apply(a,Object(w["a"])(n.data)),e.tootsCount=e.toots.length):(e.toots=n.data,e.tootsCount=n.data.length);console.info("Toots: ".concat(e.tootsCount)),e.addTagToSearchedList(t),e.isLoading=!1}));case 2:case"end":return n.stop()}}),n)})))()},addTagToSearchedList:function(t){this.searched.unshift(t)}}};n("fb9f");E.render=$;var J=E,U=[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/tags/:id",name:"tags",component:J}],q=Object(r["a"])({history:Object(r["b"])("/ma11ystodon/"),routes:U}),B=q;function V(t,e,n,a,o,r){var s=Object(c["u"])("router-view");return Object(c["p"])(),Object(c["d"])(s)}const z={};z.render=V;var D=z,F=Object(c["c"])(D),G=o["a"].create({baseURL:"https://mastodon.social",withCredentials:!1});F.config.globalProperties.$axios=Object(a["a"])({},G),F.use(B),F.mount("#app")},dfd4:function(t,e,n){"use strict";n("211d")},fb9f:function(t,e,n){"use strict";n("3af1")}});
//# sourceMappingURL=app.8b0cb9d2.js.map