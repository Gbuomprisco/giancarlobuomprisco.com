(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{3905:function(a,b,c){"use strict";c.r(b),c.d(b,{MDXContext:function(){return i},MDXProvider:function(){return l},mdx:function(){return o},useMDXComponents:function(){return k},withMDXComponents:function(){return j}});var d=c(7294);function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(){return(f=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function g(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function h(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?g(Object(c),!0).forEach(function(b){e(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var i=d.createContext({}),j=function(a){return function(b){var c=k(b.components);return d.createElement(a,f({},b,{components:c}))}},k=function(a){var b=d.useContext(i),c=b;return a&&(c="function"==typeof a?a(b):h(h({},b),a)),c},l=function(a){var b=k(a.components);return d.createElement(i.Provider,{value:b},a.children)},m={inlineCode:"code",wrapper:function(a){var b=a.children;return d.createElement(d.Fragment,{},b)}},n=d.forwardRef(function(a,b){var c=a.components,e=a.mdxType,f=a.originalType,g=a.parentName,i=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components","mdxType","originalType","parentName"]),j=k(c),l=e,n=j["".concat(g,".").concat(l)]||j[l]||m[l]||f;return c?d.createElement(n,h(h({ref:b},i),{},{components:c})):d.createElement(n,h({ref:b},i))});function o(a,b){var c=arguments,e=b&&b.mdxType;if("string"==typeof a||e){var f=c.length,g=new Array(f);g[0]=n;var h={};for(var i in b)hasOwnProperty.call(b,i)&&(h[i]=b[i]);h.originalType=a,h.mdxType="string"==typeof a?a:e,g[1]=h;for(var j=2;j<f;j++)g[j]=c[j];return d.createElement.apply(null,g)}return d.createElement.apply(null,c)}n.displayName="MDXCreateElement"},8093:function(a,b,c){"use strict";var d,e=c(7294),f=c(3905),g=(d=e)&&"object"==typeof d&&"default"in d?d:{"default":d},h=function(a){if(a&&a.__esModule)return a;var b=Object.create(null);return a&&Object.keys(a).forEach(function(c){if("default"!==c){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d.get?d:{enumerable:!0,get:function(){return a[c]}})}}),b.default=a,Object.freeze(b)}(f);"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(a){clearTimeout(a)}),b.R=function({compiledSource:a,scope:b,components:c={},lazy:d}){const[f,i]=e.useState(!d||"undefined"==typeof window);e.useEffect(()=>{if(d){const a=window.requestIdleCallback(()=>{i(!0)});return()=>window.cancelIdleCallback(a)}},[]);const j=e.useMemo(()=>{const c=Object.assign({mdx:h.mdx,React:g.default},b),d=Object.keys(c),e=Object.values(c),f=Reflect.construct(Function,d.concat(`${a}; return MDXContent;`));return f.apply(f,e)},[b,a]);if(!f)return g.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const k=g.default.createElement(h.MDXProvider,{components:c},g.default.createElement(j,null));return d?g.default.createElement("div",null,k):k}},3532:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.color,c=a.collectionUrl,e=a.title,f=a.height,g=a.width,h=a.fontSize,i=function(a){for(var b=3,c=a.split(" "),d=[],e=0;d.join(" ").length<a.length;){var f=e+b,g=c.slice(e,f).join(" ");g.length>=22&&(g=c.slice(e,f-1).join(" "),e--),e+=b,d.push(g)}return d}(e),j=null!=g?g:"100%",k=null!=f?f:"415";return(0,d.jsxs)("svg",{width:j,height:k,viewBox:"0 0 100% 415",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{width:j,height:k,fill:"white"}),(0,d.jsx)("text",{y:"15%",fontFamily:"inherit",fontWeight:"800",fontSize:null!=h?h:60,fill:"#222",children:i.map(function(a,b){return(0,d.jsx)("tspan",{x:"5%",dy:"1.2em",children:a},b)})}),(0,d.jsx)("image",{x:"50%",y:"15%",width:"60%",height:"60%",href:c,preserveAspectRatio:"xMidYMid",opacity:0.15}),(0,d.jsx)("rect",{width:"100%",height:"15",fill:b})]})}},4303:function(a,b,c){"use strict";var d=c(5893),e=c(242),f=c.n(e);b.Z=function(a){var b=a.collection;return(0,d.jsx)("div",{style:{"--from":b.primaryColorLight,"--to":b.primaryColor},className:f().gradient})}},4567:function(a,b,c){"use strict";var d=c(5893);b.Z=function(){return(0,d.jsx)("script",{async:!0,"data-uid":"3e3126f064",src:"https://thoughtful-inventor-7842.ck.page/3e3126f064/index.js"})}},2636:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(5893),e=c(8093),f=c(9953),g=c(8489),h=c(1485),i=c(4298);function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var k={img:function(a){return(0,d.jsx)("img",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}({className:a.class,src:a.src,alt:a.alt,loading:"lazy"},a))},a:function(a){var b=a.href,c=a.children;return b.startsWith(f._O)||"/"===b[0]?(0,d.jsx)("a",{href:b,children:c}):(0,d.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:c})},ArticlesList:g.Z,PostsList:h.Z,TweetEmbed:function(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:b}),(0,d.jsx)(i.default,{async:!0,defer:!0,src:"https://platform.twitter.com/widgets.js"})]})},CodeSandboxSnippet:function(a){var b=a.src;return(0,d.jsxs)("div",{className:"my-4",children:[(0,d.jsx)("div",{children:(0,d.jsx)("span",{style:{backgroundColor:"var(--accent)",color:"var(--accent-contrast"},className:"font-bold text-sm font-sans p-2 pb-4 rounded-tr-md rounded-tl-md",children:"CodeSandbox Demo"})}),(0,d.jsx)("iframe",{src:b,style:{width:"100%",height:"500px",border:0,overflow:"hidden"},title:"condescending-tree-r0mki",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]})}};function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var m=function(a){var b=a.content;return(0,d.jsx)(e.R,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){l(a,b,c[b])})}return a}({},b,{components:k}))}},1485:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(1664),f=c(3797),g=c(294),h=c(3532),i=function(a){var b,c=a.post,i=c.title,j=c.slug,k=c.date,l=c.collection,m=c.readingTime,n=l.name.toLowerCase(),o="/".concat(n,"/").concat(j);return(0,d.jsxs)("div",{className:"shadow-lg rounded-md hover:shadow-xl transition-shadow duration-500",children:[(0,d.jsx)("div",{className:"mb-3",children:(0,d.jsx)("div",{className:"h-full w-full lg:h-48 xl:h-48 rounded-t-md",children:(0,d.jsx)(e.default,{as:o,href:"/[collection]/[slug]",passHref:!0,children:(0,d.jsx)("a",{children:(0,d.jsx)(h.Z,{fontSize:22,height:"100%",width:"100%",title:i,color:l.primaryColor,collectionUrl:null!==(b=l.logo)&& void 0!==b?b:""})})})})}),(0,d.jsx)("div",{className:"px-4 py-2",children:(0,d.jsx)("h2",{className:"text-2xl font-bold mb-2 leading-snug",children:(0,d.jsx)(e.default,{as:o,href:"/[collection]/[slug]",children:(0,d.jsx)("a",{className:"hover:underline",children:i})})})}),(0,d.jsxs)("div",{className:"text-xs mb-6 flex flex-row space-x-2 items-center px-4",children:[(0,d.jsx)("div",{className:"text-gray-600",children:(0,d.jsx)(f.Z,{dateString:k})}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("span",{className:"text-gray-600",children:m}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("div",{className:"text-xs",children:(0,d.jsx)(g.Z,{collection:l})})]})]})},j=c(9409),k=function(a){var b=a.posts;return(0,d.jsx)(j.Z,{children:b.map(function(a){return(0,d.jsx)(i,{post:a},a.slug)})})}},242:function(a){a.exports={gradient:"collection-branding-bar_gradient__1Ie5x"}},4298:function(a,b,c){a.exports=c(699)}}])