(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3038:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return c(5210)}])},7518:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("div",{className:"container mx-auto px-5",children:b})}},7905:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893),e=c(7518),f=c(6227),g=c(8126),h=c(9008),i=c(9953),j=function(a){a.preview;var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(function(){return(0,d.jsxs)(h.default,{children:[(0,d.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600&display=swap"}),(0,d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"}),(0,d.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,d.jsx)("link",{rel:"mask-icon",href:"/favicon/favicon.png",color:"#000000"}),(0,d.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,d.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,d.jsx)("meta",{name:"msapplication-TileColor",content:i.l1}),(0,d.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,d.jsx)("meta",{name:"theme-color",content:i.l1}),(0,d.jsx)("meta",{name:"author",content:i.S7}),(0,d.jsx)("meta",{property:"og:title",content:i.R}),(0,d.jsx)("meta",{name:"description",content:i.dz}),(0,d.jsx)("meta",{property:"og:description",content:i.dz}),(0,d.jsx)("meta",{property:"og:site_name",content:i.px}),(0,d.jsx)("meta",{property:"twitter:title",content:i.px}),(0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{property:"twitter:creator",content:i.OX})]})},{}),(0,d.jsx)("div",{children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(function(){return(0,d.jsx)("footer",{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(g.Z,{}),(0,d.jsx)(f.Z,{})]})})},{})]})}},6227:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893),e=c(1664),f=c(1163),g=function(){var a=(0,f.useRouter)();return(0,d.jsxs)("ul",{className:"flex space-x-8 px-4",children:[(0,d.jsx)(function(b){var c=b.link;return(0,d.jsx)("li",{className:"text-gray-700 hover:text-gray-900"+((c.path,a.pathname===c.path)?"font-bold":""),children:(0,d.jsx)(e.default,{href:c.path,children:c.label})})},{link:{label:"About Me",path:"/about"}}),!1]})},h=function(){return(0,d.jsxs)("div",{className:"flex-row flex justify-between my-8 md:my-12",children:[(0,d.jsx)("h2",{className:"font-normal tracking-tight md:tracking-tighter leading-tight",children:(0,d.jsx)(e.default,{href:"/",children:(0,d.jsxs)("a",{className:"hover:underline",children:[(0,d.jsx)("b",{children:"GIANCARLO"}),"BUOMPRISCO"]})})}),(0,d.jsx)("div",{children:(0,d.jsx)(g,{})})]})}},8126:function(a,b,c){"use strict";var d=c(5893);b.Z=function(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-16 mb-14"})}},9953:function(a,b,c){"use strict";c.d(b,{dz:function(){return d},R:function(){return e},S7:function(){return f},l1:function(){return g},px:function(){return h},OX:function(){return i}});var d="Giancarlo Buomprisco's Website",e="Giancarlo Buomprisco",f="Giancarlo Buomprisco",g="#000",h="giancarlobuomprisco.com",i="@gc_psk"},8418:function(a,b,c){"use strict";function d(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}b.default=void 0;var e,f=(e=c(7294))&&e.__esModule?e:{default:e},g=c(6273),h=c(387),i=c(7190),j={};function k(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;j[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,e=h.useRouter(),l=f.default.useMemo(function(){var b=d(g.resolveHref(e,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?g.resolveHref(e,a.as):f||c}},[e,a.href,a.as]),m=l.href,n=l.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=f.default.createElement("a",null,o));var t=(b=f.default.Children.only(o))&&"object"==typeof b&&b.ref,u=d(i.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=f.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);f.default.useEffect(function(){var a=w&&c&&g.isLocalURL(m),b=void 0!==s?s:e&&e.locale,d=j[m+"%"+n+(b?"%"+b:"")];a&&!d&&k(e,m,n,{locale:b})},[n,m,w,s,c,e]);var y={ref:x,onClick:function(a){var c,d,f,h,i,j,k,l,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,d=e,f=m,h=n,i=p,j=q,k=r,l=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!g.isLocalURL(f))||(c.preventDefault(),null==k&&h.indexOf("#")>=0&&(k=!1),d[i?"replace":"push"](f,h,{shallow:j,locale:l,scroll:k})))}};if(y.onMouseEnter=function(a){g.isLocalURL(m)&&(b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),k(e,m,n,{priority:!0}))},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:e&&e.locale,A=e&&e.isLocaleDomain&&g.getDomainLocale(n,z,e&&e.locales,e&&e.domainLocales);y.href=A||g.addBasePath(g.addLocale(n,z,e&&e.defaultLocale))}return f.default.cloneElement(b,y)}},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b,c=a.rootMargin,h=a.disabled||!f,i=d.useRef(),j=function(a){if(Array.isArray(a))return a}(b=d.useState(!1))||function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),k=j[0],l=j[1],m=d.useCallback(function(a){i.current&&(i.current(),i.current=void 0),!h&&!k&&a&&a.tagName&&(i.current=g(a,function(a){return a&&l(a)},{rootMargin:c}))},[h,c,k]);return d.useEffect(function(){if(!f&&!k){var a=e.requestIdleCallback(function(){return l(!0)});return function(){return e.cancelIdleCallback(a)}}},[k]),[m,k]};var d=c(7294),e=c(9311),f="undefined"!=typeof IntersectionObserver;function g(a,b,c){var d=i(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),h.delete(e))}}var h=new Map();function i(a){var b=a.rootMargin||"",c=h.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return h.set(b,c={id:b,observer:e,elements:d}),c}},5210:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7518),f=c(7905),g=c(6227),h=c(9008);b.default=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(h.default,{children:(0,d.jsx)("title",{children:"Contact"})}),(0,d.jsx)(e.Z,{children:(0,d.jsx)(g.Z,{})})]})})}},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=3038)}),_N_E=a.O()}])