(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,16,22,28],{102:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return i}));var n=a(100),r=a.n(n);a(105)(r.a),a(108).lunrLanguageZh(r.a),a(106)(r.a);var c=["en","zh"],u=!1,l=null,s="471e573f",o=8,i=50},91:function(e,t,a){"use strict";a.r(t);var n=a(123),r=a.n(n),c=a(124),u=a(0),l=a.n(u),s=a(99),o=a(104),i=a(110),m=a(96),f=a(109),h=a(10);var p=function(){var e=Object(f.useHistory)(),t=Object(f.useLocation)(),a=Object(s.a)().siteConfig.baseUrl;return{searchValue:h.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return a+"search?q="+encodeURIComponent(e)}}},d=a(132),b=a(147),j=a(125),E=a(149),O=a(134),g=a(135),v=a(64),S=a.n(v);function w(e){var t=e.searchResult,a=t.document,n=t.type,r=t.page,c=t.tokens,u=t.metadata,s=0===n,o=2===n,i=(s?a.b:r.b).slice(),f=o?a.s:a.t;return s||i.push(r.t),l.a.createElement("article",{className:S.a.searchResultItem},l.a.createElement("h2",null,l.a.createElement(m.a,{to:a.u+(a.h||""),dangerouslySetInnerHTML:{__html:o?Object(j.a)(f,c):Object(E.a)(f,Object(O.a)(u,"t"),c,100)}})),i.length>0&&l.a.createElement("p",{className:S.a.searchResultItemPath},i.join(" \u203a ")),o&&l.a.createElement("p",{className:S.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(E.a)(a.t,Object(O.a)(u,"t"),c,100)}}))}t.default=function(){var e=Object(s.a)().siteConfig.baseUrl,t=p(),a=t.searchValue,n=t.updateSearchPath,m=Object(u.useState)(a),f=m[0],h=m[1],j=Object(u.useState)(),E=j[0],O=j[1],v=Object(u.useState)(),y=v[0],I=v[1],R=Object(u.useMemo)((function(){return f?'Search results for "'+f+'"':"Search the documentation"}),[f]);Object(u.useEffect)((function(){n(f),E&&(f?E(f,(function(e){I(e)})):I(void 0))}),[f,E]);var k=Object(u.useCallback)((function(e){h(e.target.value)}),[]);return Object(u.useEffect)((function(){a&&a!==f&&h(a)}),[a]),Object(u.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(e);case 2:a=t.sent,n=a.wrappedIndexes,c=a.zhDictionary,O((function(){return Object(b.a)(n,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),l.a.createElement(o.a,{title:R},l.a.createElement(i.a,null,l.a.createElement("meta",{property:"robots",content:"noindex, follow"})),l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("h1",null,R),l.a.createElement("form",null,l.a.createElement("input",{type:"search",name:"q",className:S.a.searchQueryInput,"aria-label":"Search",onChange:k,value:f,autoComplete:"off",autoFocus:!0})),!E&&f&&l.a.createElement("div",null,l.a.createElement(g.a,null)),y&&(y.length>0?l.a.createElement("p",null,y.length," document",1===y.length?"":"s"," found"):l.a.createElement("p",null,"No documents were found")),l.a.createElement("section",null,y&&y.map((function(e){return l.a.createElement(w,{key:e.document.i,searchResult:e})})))))}}}]);