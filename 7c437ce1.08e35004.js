(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(6),r=(a(0),a(237)),c={id:"LimitesConsumo",title:"Limites de Consumo",hide_title:!0,sidebar_label:"Limites de Consumo"},l={id:"VisaoGeral/LimitesConsumo",isDocsHomePage:!1,title:"Limites de Consumo",description:"Limites de Consumo",source:"@site/docs\\VisaoGeral\\LimitesConsumo.md",permalink:"/docs/VisaoGeral/LimitesConsumo",sidebar_label:"Limites de Consumo"},i=[{value:"Limites de consumo",id:"limites-de-consumo",children:[]},{value:"Transa\xe7\xf5es",id:"transa\xe7\xf5es",children:[]},{value:"Carn\xeas",id:"carn\xeas",children:[]},{value:"Notifica\xe7\xf5es",id:"notifica\xe7\xf5es",children:[]},{value:"Assinaturas",id:"assinaturas",children:[]},{value:"Outros",id:"outros",children:[]}],O={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"Limites de Consumo"),Object(r.b)("div",{className:"subtitulo"},"Nesta p\xe1gina trataremos os limites de uso da API Gerencianet, para que voc\xea possa utilizar nossos servi\xe7os da melhor maneira poss\xedvel.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h2",{id:"limites-de-consumo"},"Limites de consumo"),Object(r.b)("p",null,"Os limites de consumo se referem ao consumo das rotas (",Object(r.b)("em",{parentName:"p"},"endpoints"),") da API, tais limites se aplicam a cada aplica\xe7\xe3o individualmente, ou seja, caso voc\xea possua uma conta com 2 aplica\xe7\xf5es, cada uma ter\xe1 seus limites independentes, sendo estes reiniciados (zerados) diariamente (intervalo de 24 horas).\n\xc9 importante lembrar que \xe9 disparado um aviso quando se atinge 80% de consumo do limite de um ",Object(r.b)("em",{parentName:"p"},"endpoint")," para o ",Object(r.b)("em",{parentName:"p"},"email")," cadastrado no perfil de sua conta Gerencianet.\nEm casos onde se atinge o n\xfamero m\xe1ximo de requisi\xe7\xf5es para um ",Object(r.b)("em",{parentName:"p"},"endpoint")," um aviso de bloqueio ser\xe1 disparado para o ",Object(r.b)("em",{parentName:"p"},"email")," cadastrado no perfil de sua conta Gerencianet, e tal ",Object(r.b)("em",{parentName:"p"},"endpoit")," s\xf3 ser\xe1 liberado para uso ap\xf3s o desbloqueio autom\xe1tico.\nA seguir descreveremos todos os ",Object(r.b)("em",{parentName:"p"},"endpoints")," dispon\xedveis para consumo e seus respectivos limites."),Object(r.b)("br",null),Object(r.b)("h2",{id:"transa\xe7\xf5es"},"Transa\xe7\xf5es"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint (Rota base)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Limite de requisi\xe7\xf5es"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET ")," ",Object(r.b)("code",null,"/v1/charge/:id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT ")," ",Object(r.b)("code",null,"/v1/charge/:id/metadata")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT ")," ",Object(r.b)("code",null,"/v1/charge/:id/billet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT ")," ",Object(r.b)("code",null,"/v1/charge/:id/cancel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge/:id/pay")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge/:id/billet/resend")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge/:id/history")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge/:id/link")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT ")," ",Object(r.b)("code",null,"/v1/charge/:id/link")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST ")," ",Object(r.b)("code",null,"/v1/charge/:id/balance-sheet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT ")," ",Object(r.b)("code",null,"/v1/charge/:id/settle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"carn\xeas"},"Carn\xeas"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint (Rota base)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Limite de requisi\xe7\xf5es"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/carnet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/metadata")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/parcel/:parcel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/cancel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/parcel/:parcel/cancel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/resend")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/parcel/:parcel/resend")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/history")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/parcel/:parcel/settle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/carnet/:id/settle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"notifica\xe7\xf5es"},"Notifica\xe7\xf5es"),Object(r.b)("p",null,"Este ",Object(r.b)("em",{parentName:"p"},"endpoint")," \xe9 de uso exclusivo da API Gerencianet sendo utilizado na comunica\xe7\xe3o com o sistema integrado para atualiza\xe7\xe3o de status das transa\xe7\xf5es."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint (Rota base)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Limite de requisi\xe7\xf5es"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET"),"  ",Object(r.b)("code",null,"/v1/notification/:token")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"30.000")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"assinaturas"},"Assinaturas"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint (Rota base)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Limite de requisi\xe7\xf5es"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/plan")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET"),"  ",Object(r.b)("code",null,"/v1/plans")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/plan/:id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"DELETE"),"  ",Object(r.b)("code",null,"/v1/plan/:id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/plan/:id/subscription")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET"),"  ",Object(r.b)("code",null,"/v1/subscription/:id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/subscription/:id/cancel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"PUT"),"  ",Object(r.b)("code",null,"/v1/subscription/:id/metadata")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/subscription/:id/pay")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"POST"),"  ",Object(r.b)("code",null,"/v1/subscription/:id/history")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"outros"},"Outros"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint (Rota base)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Limite de requisi\xe7\xf5es"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"GET"),"  ",Object(r.b)("code",null,"/v1/installments")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15.000"))))))}o.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),o=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),d=o(a),p=n,m=d["".concat(c,".").concat(p)]||d[p]||j[p]||r;return a?b.a.createElement(m,l(l({ref:t},O),{},{components:a})):b.a.createElement(m,l({ref:t},O))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);