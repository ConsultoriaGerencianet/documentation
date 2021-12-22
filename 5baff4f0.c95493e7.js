(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(237)),i=n(244),l=n(245),o={id:"ruby",title:"Ruby",hide_title:!0,sidebar_label:"Ruby"},s={id:"Instalacao/ruby",isDocsHomePage:!1,title:"Ruby",description:"Ruby",source:"@site/docs\\Instalacao\\Ruby.md",permalink:"/docs/Instalacao/ruby",sidebar_label:"Ruby",sidebar:"someSidebar",previous:{title:"GO",permalink:"/docs/Instalacao/go"},next:{title:"Delphi",permalink:"/docs/Instalacao/delphi"}},u=[{value:"Installing via RubyGems",id:"installing-via-rubygems",children:[]},{value:"Testesd with",id:"testesd-with",children:[]},{value:"Basic use",id:"basic-use",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Tests",id:"tests",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{className:"titulo"},"Ruby"),Object(c.b)("div",{className:"subtitulo"},Object(c.b)("p",null,"Our API is ",Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(c.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Gerencianet uses ",Object(c.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our NodeJS SDK is already prepared to perform this authentication automatically."),Object(c.b)("p",null,"Below, check out the procedures for installing the Gerencianet SDK in ",Object(c.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-ruby",target:"_blank",title:"Link Externo"},"Ruby"),":"),Object(c.b)("h2",{id:"installing-via-rubygems"},"Installing via RubyGems"),Object(c.b)("p",null,"Add this line to your application's Gemfile:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gem 'gerencianet'\n")),Object(c.b)("p",null,"And then run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ bundle\n")),Object(c.b)("p",null,"Or install it as:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gem install gerencianet\n")),Object(c.b)("h2",{id:"testesd-with"},"Testesd with"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Ruby ",Object(c.b)("inlineCode",{parentName:"li"},"2.1.0"))),Object(c.b)("h2",{id:"basic-use"},"Basic use"),Object(c.b)(i.a,{defaultValue:"ruby",values:[{label:"Ruby",value:"ruby"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'require "gerencianet"\n\noptions = {\n  client_id: "client_id",\n  client_secret: "client_secret",\n  sandbox: true\n}\n\ngerencianet = Gerencianet.new(options)\n\ncharge = {\n  items: [{\n    name: "Product A",\n    value: 1000,\n    amount: 2\n  }]\n}\n\nresponse = gerencianet.create_charge(body: charge)\n}\n')))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"You can run the examples inside the ",Object(c.b)("inlineCode",{parentName:"p"},"examples")," directory with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ruby examples/create_charge.rb\n")),Object(c.b)("p",null,"Remember to set the correct credentials inside ",Object(c.b)("inlineCode",{parentName:"p"},"examples/credentials.rb")," before running."),Object(c.b)("h2",{id:"tests"},"Tests"),Object(c.b)("p",null,"To run the tests, just run rspec:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ rspec\n")),Object(c.b)("p",null,"Or use ",Object(c.b)("inlineCode",{parentName:"p"},"guard")," to monitor files and automatically run rspec:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ guard -n false -c\n"))))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},241:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},242:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},243:function(e,t,n){"use strict";var r=n(0),a=n(242);t.a=function(){return Object(r.useContext)(a.a)}},244:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(243),i=n(241),l=n(92),o=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(c.a)(),[O,f]=Object(r.useState)(l);if(null!=p){const e=d[p];null!=e&&e!==O&&b.some(t=>t.value===e)&&f(e)}const j=e=>{f(e),null!=p&&m(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},245:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);