(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),o=(a(0),a(237)),i={id:"AtualizarTransacoes",title:"Atualizar Transa\xe7\xf5es",hide_title:!0,sidebar_label:"Atualizar Transa\xe7\xf5es"},c={id:"OutrosRecursos/AtualizarTransacoes",isDocsHomePage:!1,title:"Atualizar Transa\xe7\xf5es",description:"Atualizar Transa\xe7\xf5es",source:"@site/docs\\OutrosRecursos\\AtualizarTransacoes.md",permalink:"/documentation/docs/OutrosRecursos/AtualizarTransacoes",sidebar_label:"Atualizar Transa\xe7\xf5es"},s=[],l={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Atualizar Transa\xe7\xf5es"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"\xc9 poss\xedvel atualizar/alterar as informa\xe7\xf5es em uma transa\xe7\xe3o, como por exemplo, alterar a data de vencimento de um boleto banc\xe1rio ou de parcela de carn\xea, alterar a URL de notifica\xe7\xe3o e/ou custom_id de transa\xe7\xf5es, carn\xeas ou assinaturas."),Object(o.b)("p",null,"O restante desta p\xe1gina apresenta os procedimentos detalhados, mas voc\xea precisa instalar uma de nossas bibliotecas em seu servidor para executar os c\xf3digos de exemplo. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../VisaoGeral/introducao"}),"Certifique-se de que a SDK da Gerencianet foi instalada"),"."),Object(o.b)("p",null,"V\xe1 direto ao ponto \xad- utilize o \xedndice abaixo e veja diretamente o que voc\xea precisa:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../PagamentoBoleto/EndpointsBoletos#1-alterar-data-de-vencimento-de-boleto-banc%C3%A1rio"}),"Alterar data de vencimento de boleto banc\xe1rio"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Carnes/EndpointsCarne#2-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-carn%C3%AAs"}),"Alterar data de vencimento de parcela do carn\xea"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../PagamentoBoleto/EndpointsBoletos#3-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-transa%C3%A7%C3%A3o"}),"Alterar URL de notifica\xe7\xe3o (notification_url) e/ou custom_id de transa\xe7\xe3o"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Carnes/EndpointsCarne#2-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-carn%C3%AAs"}),"Alterar URL de notifica\xe7\xe3o (notification_url) e/ou custom_id de carn\xeas"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#5-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-assinaturas"}),"Alterar URL de notifica\xe7\xe3o (notification_url) e/ou custom_id de assinaturas"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#8-editar-nome-do-plano-de-assinatura"}),"Editar nome do plano de assinatura"))))))}u.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);