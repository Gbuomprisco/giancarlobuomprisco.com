(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2912:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return c(4178)}])},294:function(a,b,c){"use strict";var d=c(5893),e=c(4184),f=c.n(e),g=c(1664),h=c(8117);function i(a){var b=a.name,c=a.size;return l(b)?(0,d.jsx)("span",{style:{fontSize:c},children:k(b)}):(0,d.jsx)("img",{className:"object-contain",loading:"lazy",style:{width:c,height:c},src:j(b),alt:b})}function j(a){return(0,h.g)(a).logo}function k(a){switch(a){case"thoughts":return"🤔"}}function l(a){return["thoughts"].includes(a)}b.Z=function(a){var b,c,e=a.name,h=a.logoSize;return(0,d.jsx)(g.default,{href:"/[collection]",as:"/".concat(e),passHref:!0,children:(0,d.jsxs)("div",{className:f()("text-center flex flex-row space-x-1 items-center cursor-pointer",(b=e,"collection--".concat(b))),children:[(0,d.jsx)(i,{name:e,size:null!=h?h:"16px"}),(0,d.jsx)("span",{className:"hover:underline",children:(c=e).slice(0,1).toUpperCase()+c.slice(1)})]})})}},7518:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("div",{className:"container mx-auto px-5",children:b})}},3797:function(a,b,c){"use strict";var d=c(5893),e=c(3855),f=c(4797);b.Z=function(a){var b=a.dateString,c=(0,e.Z)(b);return(0,d.jsx)("time",{dateTime:b,children:(0,f.Z)(c,"LLLL\td, yyyy")})}},7322:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-8 text-center",children:b})}},7905:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893),e=c(7518),f=c(8497),g=c(8126),h=c(9008),i=c(9953),j=function(a){a.preview;var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(function(){return(0,d.jsxs)(h.default,{children:[(0,d.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon.png"}),(0,d.jsx)("link",{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Merriweather:wght@300;400;700&display=swap"}),(0,d.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,d.jsx)("link",{rel:"mask-icon",href:"/favicon/favicon.png",color:"#000000"}),(0,d.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,d.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,d.jsx)("meta",{name:"msapplication-TileColor",content:i.l1}),(0,d.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,d.jsx)("meta",{name:"theme-color",content:i.l1}),(0,d.jsx)("meta",{name:"author",content:i.S7}),(0,d.jsx)("meta",{property:"og:title",content:i.R}),(0,d.jsx)("meta",{name:"description",content:i.dz}),(0,d.jsx)("meta",{property:"og:description",content:i.dz}),(0,d.jsx)("meta",{property:"og:site_name",content:i.px}),(0,d.jsx)("meta",{property:"twitter:title",content:i.px}),(0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{property:"twitter:creator",content:i.OX})]})},{}),(0,d.jsx)("div",{children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(function(){return(0,d.jsx)("footer",{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(g.Z,{}),(0,d.jsx)(f.Z,{})]})})},{})]})}},8497:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893),e=c(1664),f=function(){return(0,d.jsx)("h2",{className:"font-normal tracking-tight md:tracking-tighter leading-tight",children:(0,d.jsx)(e.default,{href:"/",passHref:!0,children:(0,d.jsxs)("a",{className:"hover:underline",children:[(0,d.jsx)("b",{children:"GIANCARLO"}),"BUOMPRISCO"]})})})},g=c(1163),h=c(7294),i=function(){var a=function(){var a=c.current;a&&(a.classList.contains(k)?a.classList.remove(k):a.classList.add(k))},b=(0,g.useRouter)(),c=(0,h.createRef)(),i={Articles:{label:"Articles",path:"/articles"},Blog:{label:"Blog",path:"/blog"},About:{label:"About",path:"/about"},Contact:{label:"Contact me",path:"/contact"}},j=function(a){var c=a.link;return(0,d.jsx)("li",{className:"active:text-black text-lg lg:text-base "+((c.path,b.pathname.split("/").includes(c.path.slice(1)))?"font-bold":"text-gray-800 hover:text-gray-900 font-medium hover:underline"),children:(0,d.jsx)(e.default,{href:c.path,passHref:!0,children:(0,d.jsx)("a",{className:"block",children:c.label})})})},k="nav-open";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"justify-end lg:hidden flex",children:(0,d.jsxs)("button",{"aria-label":"Open Menu",className:"navbar-burger",type:"button",onClick:a,children:[(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1"}),(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1 mt-1"}),(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1 mt-1"})]})}),(0,d.jsxs)("ul",{className:"lg:space-x-8 px-4 hidden flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row nav",ref:c,children:[(0,d.jsxs)("li",{className:"flex flex-row justify-between mb-6 lg:hidden",children:[(0,d.jsx)(f,{}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)("span",{onClick:a,className:"rounded bg-gray-50 shadow-lg p-4",children:"Close"})})]}),(0,d.jsx)(j,{link:i.Blog}),(0,d.jsx)(j,{link:i.Articles}),(0,d.jsx)(j,{link:i.About}),(0,d.jsx)(j,{link:i.Contact})]})]})},j=function(){return(0,d.jsxs)("div",{className:"flex-row flex justify-between items-center my-8 md:my-12",children:[(0,d.jsx)(f,{}),(0,d.jsx)(i,{})]})}},1485:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(1664),f=c(3797),g=c(294),h=function(a){var b=a.post,c=b.title,h=b.slug,i=b.collection,j=b.date,k=b.readingTime;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-2xl font-bold mb-2 leading-snug",children:(0,d.jsx)(e.default,{as:"/".concat(i,"/").concat(h),href:"/[collection]/[slug]",children:(0,d.jsx)("a",{className:"hover:underline",children:c})})}),(0,d.jsxs)("div",{className:"text-xs mb-2 flex flex-row space-x-2 items-center",children:[(0,d.jsx)("div",{className:"text-gray-600",children:(0,d.jsx)(f.Z,{dateString:j})}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("span",{className:"text-gray-600",children:k}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("div",{className:"text-xs",children:(0,d.jsx)(g.Z,{name:i})})]})]})},i=function(a){var b=a.posts;return(0,d.jsx)(d.Fragment,{children:b.map(function(a){return(0,d.jsx)(h,{post:a},a.slug)})})}},8126:function(a,b,c){"use strict";var d=c(5893);b.Z=function(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-16 mb-14"})}},8117:function(a,b,c){"use strict";c.d(b,{g:function(){return f}});var d=function(a){return["/assets/images/collections/",a].join("")},e={typescript:{colorPrimary:"#358ef1",colorPrimaryLight:"#358ef175",logo:d("typescript.png")},rxjs:{colorPrimary:"#d81b60",colorPrimaryLight:"#d81b6085",logo:d("rxjs.webp")},angular:{colorPrimary:"#e23236",colorPrimaryLight:"#dd00316e",logo:d("angular.webp")},firebase:{colorPrimary:"#ffcb2c",colorPrimaryLight:"#ffcb2c8f",logo:d("firebase.webp")},stencil:{colorPrimary:"#16161d",colorPrimaryLight:"#0000009e",logo:d("stencil.svg")},javascript:{colorPrimary:"#f7e017",colorPrimaryLight:"#f7e0178c",logo:d("javascript.webp")},emoji:{colorPrimary:"#ffb300",colorPrimaryLight:"#ffb30075"}};function f(a){return e[a]||e.emoji}},9953:function(a,b,c){"use strict";c.d(b,{dz:function(){return d},R:function(){return e},S7:function(){return f},l1:function(){return g},"_O":function(){return h},px:function(){return i},OX:function(){return j},"N$":function(){return k},dm:function(){return l},VZ:function(){return m},Kd:function(){return n}});var d="Giancarlo Buomprisco's Website",e="Giancarlo Buomprisco",f="Giancarlo Buomprisco",g="#212121",h="https://giancarlobuomprisco.com",i="giancarlobuomprisco.com",j="@gc_psk",k="https://twitter.com/".concat(j),l="/assets/giancarlo-2.png",m="https://www.linkedin.com/in/giancarlobuomprisco/",n="https://github.com/gbuomprisco"},4178:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return l}});var d=c(5893),e=c(9008),f=c(7518),g=c(1485),h=c(7905),i=c(8497),j=c(7322),k=c(9953),l=!0;b.default=function(a){var b=a.posts;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(e.default,{children:(0,d.jsxs)("title",{children:[k.R," - Blog"]})}),(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)(j.Z,{children:"Blog"}),(0,d.jsx)("div",{className:"space-y-12 mt-8 md:mt-16",children:(0,d.jsx)("div",{className:"w-full md:w-8/12 lg:w-6/12",children:(0,d.jsx)("div",{className:"mx-auto flex flex-col space-y-8",children:(0,d.jsx)(g.Z,{posts:b})})})})]})]})})}}},function(a){a.O(0,[501,774,888,179],function(){return a(a.s=2912)}),_N_E=a.O()}])