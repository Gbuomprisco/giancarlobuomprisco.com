(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{3905:function(a,b,c){"use strict";c.r(b),c.d(b,{MDXContext:function(){return i},MDXProvider:function(){return l},mdx:function(){return o},useMDXComponents:function(){return k},withMDXComponents:function(){return j}});var d=c(7294);function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(){return(f=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function g(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function h(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?g(Object(c),!0).forEach(function(b){e(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var i=d.createContext({}),j=function(a){return function(b){var c=k(b.components);return d.createElement(a,f({},b,{components:c}))}},k=function(a){var b=d.useContext(i),c=b;return a&&(c="function"==typeof a?a(b):h(h({},b),a)),c},l=function(a){var b=k(a.components);return d.createElement(i.Provider,{value:b},a.children)},m={inlineCode:"code",wrapper:function(a){var b=a.children;return d.createElement(d.Fragment,{},b)}},n=d.forwardRef(function(a,b){var c=a.components,e=a.mdxType,f=a.originalType,g=a.parentName,i=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components","mdxType","originalType","parentName"]),j=k(c),l=e,n=j["".concat(g,".").concat(l)]||j[l]||m[l]||f;return c?d.createElement(n,h(h({ref:b},i),{},{components:c})):d.createElement(n,h({ref:b},i))});function o(a,b){var c=arguments,e=b&&b.mdxType;if("string"==typeof a||e){var f=c.length,g=new Array(f);g[0]=n;var h={};for(var i in b)hasOwnProperty.call(b,i)&&(h[i]=b[i]);h.originalType=a,h.mdxType="string"==typeof a?a:e,g[1]=h;for(var j=2;j<f;j++)g[j]=c[j];return d.createElement.apply(null,g)}return d.createElement.apply(null,c)}n.displayName="MDXCreateElement"},8093:function(a,b,c){"use strict";var d,e=c(7294),f=c(3905),g=(d=e)&&"object"==typeof d&&"default"in d?d:{"default":d},h=function(a){if(a&&a.__esModule)return a;var b=Object.create(null);return a&&Object.keys(a).forEach(function(c){if("default"!==c){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d.get?d:{enumerable:!0,get:function(){return a[c]}})}}),b.default=a,Object.freeze(b)}(f);"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(a){clearTimeout(a)}),b.R=function({compiledSource:a,scope:b,components:c={},lazy:d}){const[f,i]=e.useState(!d||"undefined"==typeof window);e.useEffect(()=>{if(d){const a=window.requestIdleCallback(()=>{i(!0)});return()=>window.cancelIdleCallback(a)}},[]);const j=e.useMemo(()=>{const c=Object.assign({mdx:h.mdx,React:g.default},b),d=Object.keys(c),e=Object.values(c),f=Reflect.construct(Function,d.concat(`${a}; return MDXContent;`));return f.apply(f,e)},[b,a]);if(!f)return g.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const k=g.default.createElement(h.MDXProvider,{components:c},g.default.createElement(j,null));return d?g.default.createElement("div",null,k):k}},6184:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hubs/[hub]",function(){return c(5561)}])},7322:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-8 text-center",children:b})}},8553:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d,e=c(5893),f=c(8093),g=c(9953),h=c(7176),i=c(1485);function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var k={img:function(a){return(0,e.jsx)("img",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}({className:null!==(d=a.class)&& void 0!==d?d:" shadow-lg my-4 rounded-lg",src:a.src,alt:a.alt,loading:"lazy"},a))},a:function(a){var b=a.href,c=a.children;return b.startsWith(g._O)||"/"===b[0]?(0,e.jsx)("a",{href:b,children:c}):(0,e.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:c})},ArticlesList:h.Z,PostsList:i.Z};function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var m=function(a){var b=a.content;return(0,e.jsx)(f.R,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){l(a,b,c[b])})}return a}({},b,{components:k}))}},1485:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(1664),f=c(3797),g=c(294),h=function(a){var b=a.post,c=b.title,h=b.slug,i=b.collection,j=b.date,k=b.readingTime;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-2xl font-bold mb-2 leading-snug",children:(0,d.jsx)(e.default,{as:"/".concat(i,"/").concat(h),href:"/[collection]/[slug]",children:(0,d.jsx)("a",{className:"hover:underline",children:c})})}),(0,d.jsxs)("div",{className:"text-xs mb-2 flex flex-row space-x-2 items-center",children:[(0,d.jsx)("div",{className:"text-gray-600",children:(0,d.jsx)(f.Z,{dateString:j})}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("span",{className:"text-gray-600",children:k}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("div",{className:"text-xs",children:(0,d.jsx)(g.Z,{name:i})})]})]})},i=function(a){var b=a.posts;return(0,d.jsx)(d.Fragment,{children:b.map(function(a){return(0,d.jsx)(h,{post:a},a.slug)})})}},5561:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return o}});var d=c(5893),e=c(9008),f=c(7322),g=c(8497),h=c(7905),i=c(7518),j=c(8553),k=c(4567),l=c(4303),m=c(294),n=c(8117),o=!0;b.default=function(a){var b=a.hub,c=a.content,o=(0,n.g)(b.collection),p={"--accent":o.colorPrimary,"--accent-light":o.colorPrimaryLight};return(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(l.Z,{collection:b.collection}),(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(g.Z,{}),(0,d.jsxs)("div",{className:"mb-16",style:p,children:[(0,d.jsxs)(e.default,{children:[(0,d.jsx)("title",{children:b.name}),(0,d.jsx)("meta",{property:"twitter:title",content:b.name})]}),(0,d.jsx)(f.Z,{children:b.name}),(0,d.jsx)("div",{className:"flex justify-center mb-16",children:(0,d.jsx)(m.Z,{name:b.collection})}),(0,d.jsx)("div",{children:(0,d.jsx)(j.Z,{content:c})}),(0,d.jsx)("div",{className:"w-full md:w-8/12 mx-auto",children:(0,d.jsx)(k.Z,{})})]})]})]})}}},function(a){a.O(0,[501,137,774,888,179],function(){return a(a.s=6184)}),_N_E=a.O()}])