(function(t){function e(e){for(var a,o,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ma11ystodon/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("5530"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),r=n("bc3a"),o=(n("a4d3"),n("e01a"),n("ac1f"),n("841c"),{class:"mallystodon"}),s={class:"heading"},i=Object(c["f"])("div",{class:"switch"},[Object(c["f"])("input",{type:"checkbox",name:"switch",id:"switch"}),Object(c["f"])("label",{for:"switch"},"Color theme inverter")],-1),u={key:0,class:"is-loading"},l=Object(c["f"])("div",{class:"loading"},null,-1),d=Object(c["e"])("Loading toots…"),f={key:1,class:"toots"},b={class:"search"},h=Object(c["f"])("input",{class:"search-form--submit",type:"submit",value:"search"},null,-1),p={class:"tags"},O={class:"user-header"},j={key:0},m={class:"medium"};function g(t,e,n,a,r,g){return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["f"])("header",o,[Object(c["f"])("h1",s,Object(c["i"])("M".concat(r.search,"stodon")),1),i]),r.isLoading?(Object(c["g"])(),Object(c["c"])("span",u,[l,d])):Object(c["d"])("",!0),r.isLoading?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])("section",f,[Object(c["f"])("div",b,[Object(c["f"])("form",{class:"search-form",onSubmit:e[2]||(e[2]=Object(c["l"])((function(){return g.handleTagSeach.apply(g,arguments)}),["prevent"]))},[Object(c["k"])(Object(c["f"])("input",{class:"search-form--input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.search=t})},null,512),[[c["j"],r.search]]),h],32),Object(c["f"])("ul",p,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(r.searched,(function(t){return Object(c["g"])(),Object(c["c"])("li",{class:"tag medium",key:t},Object(c["i"])(t),1)})),128))])]),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(r.toots,(function(t){return Object(c["g"])(),Object(c["c"])("article",{class:"toot",key:t.id},[Object(c["f"])("header",O,[Object(c["f"])("img",{class:"avatar",width:"32",height:"32",src:t.account.avatar,alt:t.account.username},null,8,["src","alt"]),Object(c["f"])("strong",null,Object(c["i"])(t.account.display_name||t.account.username),1),Object(c["e"])(" - @"+Object(c["i"])(t.account.username),1)]),Object(c["f"])("div",{class:"large",innerHTML:t.content},null,8,["innerHTML"]),0!=t.media_attachments.length&&"image"===t.media_attachments[0].type?(Object(c["g"])(),Object(c["c"])("figure",j,[Object(c["f"])("img",{class:"attachment-image",src:t.media_attachments[0].preview_url,alt:t.media_attachments[0].description},null,8,["src","alt"]),Object(c["f"])("figcaption",m,Object(c["i"])(t.media_attachments[0].description),1)])):Object(c["d"])("",!0)])})),128))]))],64)}var v=n("2909"),y=(n("96cf"),n("1da1")),w={name:"App",data:function(){return{search:"a11y",searched:[],toots:void 0,tootsCount:0,isLoading:!0}},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.mastodonTagSearch(t.search);case 1:case"end":return e.stop()}}),e)})))()},methods:{handleTagSeach:function(){this.mastodonTagSearch(this.search)},mastodonTagSearch:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("/api/v1/timelines/tag/".concat(t,"?limit=4")).then((function(n){var a;e.toots?((a=e.toots).unshift.apply(a,Object(v["a"])(n.data)),e.tootsCount=e.toots.length):(e.toots=n.data,e.tootsCount=n.data.length);console.info("Toots: ".concat(e.tootsCount)),e.addTagToSearchedList(t),e.isLoading=!1}));case 2:case"end":return n.stop()}}),n)})))()},addTagToSearchedList:function(t){this.searched.unshift(t)}}};n("64be");w.render=g;var T=w,x=Object(c["b"])(T),S=r["a"].create({baseURL:"https://mastodon.social",withCredentials:!1});x.config.globalProperties.$axios=Object(a["a"])({},S),x.mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},c894:function(t,e,n){}});
//# sourceMappingURL=app.d9f1a04d.js.map