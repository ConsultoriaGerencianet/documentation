(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{170:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return s})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return i})),r.d(a,"default",(function(){return u}));var t=r(2),n=r(6),o=(r(0),r(237)),s={id:"DetalharTransacoes",title:"Detalhar Transa\xe7\xf5es",hide_title:!0,sidebar_label:"Detalhar Transa\xe7\xf5es"},c={id:"OutrosRecursos/DetalharTransacoes",isDocsHomePage:!1,title:"Detalhar Transa\xe7\xf5es",description:"Detalhar Transa\xe7\xf5es",source:"@site/docs\\OutrosRecursos\\DetalharTransacoes.md",permalink:"/documentation.github.io/docs/OutrosRecursos/DetalharTransacoes",sidebar_label:"Detalhar Transa\xe7\xf5es"},i=[],l={rightToc:i};function u(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Detalhar Transa\xe7\xf5es"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"\xc9 poss\xedvel consumir webservices espec\xedficos para buscar o detalhamento de alguma transa\xe7\xe3o, carn\xea ou assinatura. Para obter tais informa\xe7\xf5es, voc\xea precisar\xe1 fornecer o identificador ",Object(o.b)("code",null,"charge_id"),", ",Object(o.b)("code",null,"carnet_id"),", ",Object(o.b)("code",null,"plan_id")," e/ou ",Object(o.b)("code",null,"subscription_id"),", conforme sua necessidade."),Object(o.b)("p",null,"O restante desta p\xe1gina apresenta os procedimentos detalhados, mas voc\xea precisa instalar uma de nossas bibliotecas em seu servidor para executar os c\xf3digos de exemplo. ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../VisaoGeral/introducao#bibliotecas"}),"Certifique-se de que a SDK da Gerencianet foi instalada"),"."),Object(o.b)("p",null,"V\xe1 direto ao ponto \xad- utilize o \xedndice abaixo e veja diretamente o que voc\xea precisa:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../PagamentoBoleto/EndpointsBoletos#6-retornar-informa%C3%A7%C3%B5es-sobre-transa%C3%A7%C3%A3o"}),"Retornar informa\xe7\xf5es sobre transa\xe7\xe3o"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../Carnes/EndpointsCarne#1-retornar-informa%C3%A7%C3%B5es-sobre-um-carn%C3%AA"}),"Retornar informa\xe7\xf5es sobre um carn\xea"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#3-retornar-informa%C3%A7%C3%B5es-de-assinatura-vinculada-a-um-plano"}),"Retornar informa\xe7\xf5es de assinatura vinculada a um plano"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#1-listar-os-planos-de-assinatura-existentes"}),"Listar os planos de assinatura existentes"))))))}u.isMDXComponent=!0},237:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var a=n.a.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},p=function(e){var a=u(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=t,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:a},l),{},{components:r})):n.a.createElement(m,c({ref:a},l))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);