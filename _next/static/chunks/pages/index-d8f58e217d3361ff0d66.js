(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7063:function(e,n,t){"use strict";var s=t(5893);n.Z=function(e){var n=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5",children:n})}},1653:function(e,n,t){"use strict";var s=t(4184),i=t.n(s),r=t(1664),a=t(5893);n.Z=function(e){var n=e.title,t=e.src,s=e.slug,l=(0,a.jsx)("img",{src:t,alt:"Cover Image for ".concat(n),className:i()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":s})});return(0,a.jsx)("div",{className:"sm:mx-0",children:s?(0,a.jsx)(r.default,{as:"/posts/".concat(s),href:"/posts/[slug]",children:(0,a.jsx)("a",{"aria-label":n,children:l})}):l})}},3453:function(e,n,t){"use strict";var s=t(3855),i=t(4790),r=t(5893);n.Z=function(e){var n=e.dateString,t=(0,s.Z)(n);return(0,r.jsx)("time",{dateTime:n,children:(0,i.Z)(t,"LLLL\td, yyyy")})}},9798:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var s=t(7063),i=t(5893),r=function(){return(0,i.jsx)("footer",{className:"",children:(0,i.jsx)(s.Z,{})})},a=t(9008),l=t(2624),c=function(){return(0,i.jsxs)(a.default,{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:l.l1}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:l.l1}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"description",content:l.dz}),(0,i.jsx)("meta",{property:"og:image",content:l.vC})]})},o=function(e){e.preview;var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)("div",{children:(0,i.jsx)("main",{children:n})}),(0,i.jsx)(r,{})]})}},2458:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(1664),i=t(1163),r=t(5893),a=function(){var e=(0,i.useRouter)(),n=function(n){var t,i=n.link;return(0,r.jsx)("li",{className:"text-gray-700 hover:text-gray-900"+(t=i.path,e.pathname===t?"font-bold":""),children:(0,r.jsx)(s.default,{href:i.path,children:i.label})})};return(0,r.jsxs)("ul",{className:"flex space-x-8",children:[(0,r.jsx)(n,{link:{label:"About",path:"/about"}}),!1]})},l=function(){return(0,r.jsxs)("div",{className:"flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12",children:[(0,r.jsx)("h2",{className:"font-normal tracking-tight md:tracking-tighter leading-tight",children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsxs)("a",{className:"hover:underline",children:[(0,r.jsx)("b",{children:"GIANCARLO"}),"BUOMPRISCO"]})})}),(0,r.jsx)("div",{children:(0,r.jsx)(a,{})})]})}},2624:function(e,n,t){"use strict";t.d(n,{vC:function(){return s},dz:function(){return i},R:function(){return r},l1:function(){return a}});var s="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg",i="Giancarlo Buomprisco's Website",r="Giancarlo Buomprisco",a="#000"},8248:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f},default:function(){return g}});var s=t(7063),i=t(3453),r=t(1653),a=t(1664),l=t(5893),c=function(e){var n=e.title,t=e.coverImage,s=e.date,c=e.excerpt,o=e.slug;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(r.Z,{slug:o,title:n,src:t})}),(0,l.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,l.jsx)(a.default,{as:"/posts/".concat(o),href:"/posts/[slug]",children:(0,l.jsx)("a",{className:"hover:underline",children:n})})}),(0,l.jsx)("div",{className:"text-lg mb-4",children:(0,l.jsx)(i.Z,{dateString:s})}),(0,l.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:c})]})},o=function(e){var n=e.posts,t=e.title;return(0,l.jsxs)("section",{children:[(0,l.jsx)("h3",{className:"mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:t||"Posts"}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:n.map((function(e){return(0,l.jsx)(c,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})},d=function(){return(0,l.jsx)("section",{className:"flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:["Ciao. ",(0,l.jsx)("br",{}),"Giancarlo here."]}),(0,l.jsx)("h3",{className:"text-xl md:text-2xl text-gray-800 font-light",children:"I am a Software consultant, technical writer, and maker"})]})})},x=t(9798),m=t(2458),h=t(9008),u=t(2624),f=!0,g=function(e){var n=e.allPosts;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{children:[(0,l.jsx)(h.default,{children:(0,l.jsx)("title",{children:u.R})}),(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(m.Z,{}),(0,l.jsx)(d,{}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"my-5",children:[(0,l.jsx)("p",{children:"Yes, this is still fairly empty."}),(0,l.jsx)("p",{children:"In the meantime, you can connect with me on Social Media:"})]}),(0,l.jsxs)("ul",{className:"flex-col space-y-1 list-decimal ml-5",children:[(0,l.jsxs)("li",{children:["Follow me on"," ",(0,l.jsx)("a",{className:"underline",target:"_blank",href:"https://twitter.com/gc_psk",children:"Twitter"})]}),(0,l.jsxs)("li",{children:["Connect on"," ",(0,l.jsx)("a",{className:"underline",target:"_blank",href:"https://www.linkedin.com/in/giancarlobuomprisco/",children:"Linkedin"})]}),(0,l.jsxs)("li",{children:["Fork my code on"," ",(0,l.jsx)("a",{className:"underline",target:"_blank",href:"https://github.com/gbuomprisco",children:"Github"})]})]})]}),n.length>0&&(0,l.jsx)(o,{posts:n})]})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8248)}])}},function(e){e.O(0,[947,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);