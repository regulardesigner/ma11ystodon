(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a");var o=a("7a23"),c=Object(o["createStaticVNode"])('<section class="container"><h1 class="heading">About Ally for Mastodon</h1><p class="medium text--color-light"> The &quot;Ally for Mastodon&quot; project is a client for the Mastodon social network focused on accessibility. It is under development and currently only displays the public feed. It aims to offer a more user-friendly interface and make reading toots simpler than the official Mastodon client, while retaining the core features of this social network. </p><p class="medium text--color-light"> The project is open to suggestions and will be gradually updated. </p><p class="medium text--color-light">Here some toots about this project.</p></section>',1),n={key:0,class:"is-loading"},s=Object(o["createVNode"])("div",{class:"loading"},null,-1),r=Object(o["createTextVNode"])("Loading toots…"),i={key:1,class:"container"},l={class:"user-header"},d={key:0},u={class:"medium"};function m(e,t,a,m,p,b){var g=Object(o["resolveComponent"])("Header");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(g,{search:"About"}),c,p.isLoading?(Object(o["openBlock"])(),Object(o["createBlock"])("span",n,[s,r])):Object(o["createCommentVNode"])("",!0),p.isLoading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("section",i,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(p.toots,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("article",{class:"toot",key:e.id},[Object(o["createVNode"])("header",l,[Object(o["createVNode"])("img",{class:"avatar",width:"32",height:"32",src:e.account.avatar,alt:e.account.username},null,8,["src","alt"]),Object(o["createVNode"])("strong",null,Object(o["toDisplayString"])(e.account.display_name||e.account.username),1),Object(o["createTextVNode"])(" - @"+Object(o["toDisplayString"])(e.account.username),1)]),Object(o["createVNode"])("div",{class:"large",innerHTML:e.content},null,8,["innerHTML"]),0!=e.media_attachments.length&&"image"===e.media_attachments[0].type?(Object(o["openBlock"])(),Object(o["createBlock"])("figure",d,[Object(o["createVNode"])("img",{class:"attachment-image",src:e.media_attachments[0].preview_url,alt:e.media_attachments[0].description},null,8,["src","alt"]),Object(o["createVNode"])("figcaption",u,Object(o["toDisplayString"])(e.media_attachments[0].description),1)])):Object(o["createCommentVNode"])("",!0)])})),128))]))],64)}a("96cf");var p=a("1da1"),b=a("0418"),g={data:function(){return{toots:void 0,isLoading:!0}},components:{Header:b["a"]},mounted:function(){this.getMyMastodonStatus()},methods:{getMyMastodonStatus:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="109389638020491291",t.next=3,e.$axios.get("https://mastodon.social/api/v1/accounts/".concat(a,"/statuses?tagged=DamsMastCli")).then((function(t){e.toots=t.data,e.isLoading=!1}));case 3:case"end":return t.stop()}}),t)})))()}}};g.render=m;t["default"]=g}}]);
//# sourceMappingURL=about.eff0f635.js.map