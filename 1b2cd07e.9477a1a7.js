(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(2),a=n(6),o=(n(0),n(237)),c={id:"Introducao",title:"Introdu\xe7\xe3o",hide_title:!0,sidebar_label:"Introdu\xe7\xe3o"},i={id:"Carnes/Introducao",isDocsHomePage:!1,title:"Introdu\xe7\xe3o",description:"Introdu\xe7\xe3o",source:"@site/docs\\Carnes\\Introducao.md",permalink:"/documentation.github.io/docs/Carnes/Introducao",sidebar_label:"Introdu\xe7\xe3o"},s=[{value:"Pr\xf3ximos Passos",id:"pr\xf3ximos-passos",children:[]}],u={rightToc:s};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Introdu\xe7\xe3o"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Um carn\xea \xe9 um conjunto de transa\xe7\xf5es (parcelas) geradas em lote e com forma de pagamento j\xe1 definida. As parcelas de um carn\xea vencem mensalmente, de acordo com a data definida pelo integrador."),Object(o.b)("p",null,"Por exemplo, ao gerar um carn\xea com o vencimento da primeira parcela em 10/02, o vencimento da segunda parcela ser\xe1 10/03, e assim sucessivamente. O intervalo \xe9 sempre de 1 (um) m\xeas entre elas."),Object(o.b)("p",null,"Para gerar um carn\xea, basta enviar o n\xfamero de parcelas e o modo como ser\xe1 gerado, juntamente com os dados da transa\xe7\xe3o e do cliente."),Object(o.b)("p",null,"Cabe frisar, ainda, que cada carn\xea gerado possui uma identifica\xe7\xe3o \xfanica denominada ",Object(o.b)("inlineCode",{parentName:"p"},"carnet_id"),", e cada parcela desse carn\xea tamb\xe9m possui um identificador \xfanico denominado ",Object(o.b)("inlineCode",{parentName:"p"},"charge_id"),"."),Object(o.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos Passos"),Object(o.b)("p",null,"Como voc\xea j\xe1 viu um pouco sobre os carn\xeas, que tal explorarmos a fundo os recursos? Voc\xea pode come\xe7ar vendo como funcionam os carn\xeas. Depois, pode ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"CriarCarne.md"}),"criar os carn\xeas via API"),". N\xe3o se esque\xe7a que possu\xedmos um ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../AmbienteTestes/PlaygroundCarne"}),"ambiente de sandbox exclusivo para testes"),".")))}d.isMDXComponent=!0},237:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=d(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),l=t,b=p["".concat(c,".").concat(l)]||p[l]||m[l]||o;return n?a.a.createElement(b,i(i({ref:r},u),{},{components:n})):a.a.createElement(b,i({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);