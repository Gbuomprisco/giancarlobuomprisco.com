(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2912:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return c(4178)}])},4400:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.collection,c=a.size;return b.emoji?(0,d.jsx)("span",{style:{fontSize:c},children:b.emoji}):(0,d.jsx)("img",{className:"object-contain",loading:"lazy",style:{width:c,height:c},src:b.logo,alt:b.name})}},294:function(a,b,c){"use strict";var d=c(5893),e=c(4184),f=c.n(e),g=c(1664),h=c(4400);b.Z=function(a){var b=a.collection,c=a.logoSize;return(0,d.jsx)(g.default,{href:"/[collection]",as:"/".concat(b.name.toLowerCase()),passHref:!0,children:(0,d.jsxs)("div",{className:f()("text-center flex flex-row space-x-1 items-center cursor-pointer",(b.name,"collection--".concat(b.name.toLowerCase()))),children:[(0,d.jsx)(h.Z,{collection:b,size:null!=c?c:"16px"}),(0,d.jsx)("span",{className:"hover:underline",children:b.name})]})})}},7518:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("div",{className:"container mx-auto px-5",children:b})}},3797:function(a,b,c){"use strict";var d=c(5893),e=c(3855),f=c(4797);b.Z=function(a){var b=a.dateString,c=(0,e.Z)(b);return(0,d.jsx)("time",{dateTime:b,children:(0,f.Z)(c,"PP")})}},7322:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-8 text-center",children:b})}},7905:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(5893),e=c(7518),f=c(6240),g=c(8126),h=c(9008),i=c(1163),j=c(9953),k=function(){var a=(0,i.useRouter)().asPath,b="".concat(j._O).concat(a);return(0,d.jsxs)(h.default,{children:[(0,d.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-touch-icon.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,d.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,d.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,d.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,d.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,d.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,d.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,d.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,d.jsx)("link",{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Merriweather:wght@300;400;700&display=swap"}),(0,d.jsx)("link",{rel:"canonical",href:b},"canonical"),(0,d.jsx)("meta",{name:"theme-color",content:j.l1}),(0,d.jsx)("meta",{name:"author",content:j.S7}),(0,d.jsx)("meta",{name:"description",content:j.dz},"meta:description"),(0,d.jsx)("meta",{property:"og:title",content:j.R},"og:title"),(0,d.jsx)("meta",{property:"og:description",content:j.dz},"og:description"),(0,d.jsx)("meta",{property:"og:site_name",content:j.px}),(0,d.jsx)("meta",{property:"twitter:title",content:j.px}),(0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{property:"twitter:creator",content:j.OX})]})},l=function(a){a.preview;var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k,{}),(0,d.jsx)("div",{children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(function(){return(0,d.jsx)("footer",{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(g.Z,{}),(0,d.jsx)(f.Z,{})]})})},{})]})}},6240:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893),e=c(1664),f=function(){return(0,d.jsx)(e.default,{href:"/",passHref:!0,children:(0,d.jsx)("a",{className:"hover:underline",children:(0,d.jsx)(function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("b",{children:"GIANCARLO"}),(0,d.jsx)("span",{children:"BUOMPRISCO"})]})},{})})})},g=c(1163),h=c(7294),i=function(){var a=function(){var a=c.current;a&&(a.classList.contains(k)?a.classList.remove(k):a.classList.add(k))},b=(0,g.useRouter)(),c=(0,h.createRef)(),i={Articles:{label:"Articles",path:"/articles"},Blog:{label:"Blog",path:"/blog"},About:{label:"About",path:"/about"},Contact:{label:"Contact me",path:"/contact"},Consulting:{label:"Consulting",path:"/consulting"}},j=function(a){var c=a.link,f=(c.path,b.pathname.split("/").includes(c.path.slice(1)));return(0,d.jsx)("li",{style:f?{borderColor:"var(--accent, var(--primary-color))"}:{},className:"text-lg lg:text-base border-b-4 pb-1 border-b-transparent transition:border "+(f?"font-bold border-b-yellow-200":"hover:text-gray-900 font-medium border-b-transparent hover:border-b-yellow-200"),children:(0,d.jsx)(e.default,{href:c.path,passHref:!0,children:(0,d.jsx)("a",{className:"block",children:c.label})})})},k="nav-open";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"justify-end lg:hidden flex",children:(0,d.jsxs)("button",{"aria-label":"Open Menu",className:"navbar-burger",type:"button",onClick:a,children:[(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1"}),(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1 mt-1"}),(0,d.jsx)("span",{className:"block relative w-7 rounded-sm bg-black h-1 mt-1"})]})}),(0,d.jsxs)("ul",{className:"lg:space-x-10 text-gray-800 px-4 hidden flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row nav",ref:c,children:[(0,d.jsxs)("li",{className:"flex flex-row justify-between mb-6 lg:hidden",children:[(0,d.jsx)("div",{children:(0,d.jsx)(f,{})}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)("span",{onClick:a,className:"bg-gray-100 font-bold text-sm rounded-full shadow-xl flex items-center justify-center w-16 h-16",children:"Close"})})]}),(0,d.jsx)(j,{link:i.Blog}),(0,d.jsx)(j,{link:i.Articles}),(0,d.jsx)(j,{link:i.Consulting}),(0,d.jsx)(j,{link:i.About}),(0,d.jsx)(j,{link:i.Contact})]})]})},j=function(){return(0,d.jsxs)("div",{className:"flex-row flex justify-between items-center py-2 mt-6 mb-8",children:[(0,d.jsx)(f,{}),(0,d.jsx)(i,{})]})}},1485:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(1664),f=c(3797),g=c(294),h=function(a){var b=a.post,c=b.title,h=b.slug,i=b.date,j=b.collection,k=b.readingTime,l=j.name.toLowerCase(),m="/".concat(l,"/").concat(h);return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"text-2xl font-bold mb-2 leading-snug",children:(0,d.jsx)(e.default,{as:m,href:"/[collection]/[slug]",children:(0,d.jsx)("a",{className:"hover:underline",children:c})})}),(0,d.jsxs)("div",{className:"text-xs mb-2 flex flex-row space-x-2 items-center",children:[(0,d.jsx)("div",{className:"text-gray-600",children:(0,d.jsx)(f.Z,{dateString:i})}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("span",{className:"text-gray-600",children:k}),(0,d.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,d.jsx)("div",{className:"text-xs",children:(0,d.jsx)(g.Z,{collection:j})})]})]})},i=function(a){var b=a.posts;return(0,d.jsx)(d.Fragment,{children:b.map(function(a){return(0,d.jsx)(h,{post:a},a.slug)})})}},8126:function(a,b,c){"use strict";var d=c(5893);b.Z=function(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-16 mb-14"})}},3885:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("h2",{className:"text-xl md:text-2xl text-gray-500 text-center",children:b})}},9953:function(a,b,c){"use strict";c.d(b,{R:function(){return d},dz:function(){return e},ok:function(){return f},S7:function(){return g},l1:function(){return h},"_O":function(){return i},px:function(){return j},OX:function(){return k},"N$":function(){return l},dm:function(){return m},VZ:function(){return n},Kd:function(){return o},xK:function(){return p}});var d="Giancarlo Buomprisco",e="Giancarlo Buomprisco",f="Learn how to build Serverless applications with web\n            technologies such as React, Next.js, Angular, NestJS and Firebase",g="Giancarlo Buomprisco",h="#212121",i="https://giancarlobuomprisco.com",j="giancarlobuomprisco.com",k="@gc_psk",l="https://twitter.com/".concat(k),m="/assets/giancarlo-2.png";"".concat(i,"/assets/giancarlo-2.png");var n="https://www.linkedin.com/in/giancarlobuomprisco/",o="https://github.com/gbuomprisco",p="giancarlopsk@gmail.com"},4178:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return m}});var d=c(5893),e=c(9008),f=c(7518),g=c(1485),h=c(7905),i=c(6240),j=c(7322),k=c(3885),l=c(9953),m=!0;b.default=function(a){var b=a.posts;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(h.Z,{children:[(0,d.jsxs)(e.default,{children:[(0,d.jsxs)("title",{children:[l.R," | Blog"]},"title"),(0,d.jsx)("meta",{name:"description",content:"Short-form posts, notes and tips about Angular, React, Next, Firebase, NestJS, StencilJS"},"meta:description")]}),(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)(j.Z,{children:"Blog"}),(0,d.jsx)(k.Z,{children:"Short-form posts, notes and tips"}),(0,d.jsx)("div",{className:"space-y-12 mt-8 md:mt-16",children:(0,d.jsx)("div",{className:"w-full md:w-8/12 lg:w-6/12",children:(0,d.jsx)("div",{className:"mx-auto flex flex-col space-y-8",children:(0,d.jsx)(g.Z,{posts:b})})})})]})]})})}}},function(a){a.O(0,[501,774,888,179],function(){return a(a.s=2912)}),_N_E=a.O()}])