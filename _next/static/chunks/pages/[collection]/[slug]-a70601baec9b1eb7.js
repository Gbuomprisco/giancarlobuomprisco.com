(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{4995:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[collection]/[slug]",function(){return c(9754)}])},4987:function(a,b,c){"use strict";var d=c(5893);b.Z=function(a){var b=a.children;return(0,d.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-8 text-center",children:b})}},4952:function(a,b,c){"use strict";var d=c(5893),e=c(4184),f=c.n(e),g=c(780),h=c.n(g);b.Z=function(a){var b=a.children,c=a.style;return(0,d.jsx)("div",{style:null!=c?c:{"--backgroundColor":"#eee"},className:f()("text-center flex flex-row space-x-1 items-center cursor-pointer justify-center px-2 py-1 rounded hover:shadow-md transition-shadow font-bold ".concat(h().Tag)),children:b})}},9754:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return M},"default":function(){return N}});var d,e=c(5893),f=c(1163),g=c(2918),h=c(9008),i=c(7518),j=c(602),k=c.n(j),l=c(2636),m=function(a){var b=a.content,c=k().markdown;return(0,e.jsx)("div",{className:"max-w-2xl mx-auto leading-loose ".concat(c),children:(0,e.jsx)(l.Z,{content:b})})},n=c(6240),o=c(1664),p=c(3797),q=c(9371),r=c(4987),s=c(4400),t=c(4952),u=function(a){var b=a.collection,c=a.logoSize,d={"--backgroundColor":b.primaryColor,"--color":b.contrastColor},f="/".concat(b.name.toLowerCase());return(0,e.jsx)(t.Z,{style:d,children:(0,e.jsx)(o.default,{href:"/[collection]",as:f,passHref:!0,children:(0,e.jsxs)("a",{className:"flex flex-row space-x-1 items-center justify-center",children:[(0,e.jsx)(s.Z,{collection:b,size:null!=c?c:"16px"}),(0,e.jsx)("span",{className:"hover:underline",children:b.name})]})})})},v=function(a){var b=a.children;return(0,e.jsx)("span",{className:"py-2 px-4 bg-yellow-200 rounded-md font-semibold",children:b})},w=function(a){var b=a.children,c=a.collection,d={color:c.primaryColor,lineHeight:"1.2"};return(0,e.jsx)("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 text-center",style:d,children:b})},x=c(9953),y=c(3532);function z(a){var b=a.tags,c=a.collection;return(0,e.jsx)(e.Fragment,{children:b.filter(function(a){return a.toLowerCase()!==c.toLowerCase()}).map(function(a){var b="/tags/".concat(a);return(0,e.jsx)(t.Z,{children:(0,e.jsx)(o.default,{href:"/tags/[tag]",as:b,children:a})},a)})})}var A,B=function(a){var b,c=a.post,d=c.title,f=c.date,g=c.readingTime,h=c.slug,i=c.live,j=c.collection,k="series"in c&&c.series,l="coverImage"in c?c.coverImage:"",m="/".concat(j.name.toLowerCase(),"/").concat(h);return(0,e.jsxs)(e.Fragment,{children:[k&&(0,e.jsx)(w,{collection:j,children:k}),(0,e.jsx)(r.Z,{children:d}),(0,e.jsxs)("div",{className:"mb-6 flex space-x-3 items-center justify-center",children:[(0,e.jsx)(u,{logoSize:"22px",collection:j}),(0,e.jsx)(z,{tags:c.tags,collection:j.name})]}),(0,e.jsx)("div",{className:"max-w-2xl mx-auto mb-6",children:(0,e.jsxs)("div",{className:"flex flex-row space-x-2 items-center justify-center",children:[i?null:(0,e.jsx)(v,{children:"Draft"}),(0,e.jsx)(function(){return(0,e.jsxs)("div",{className:"flex flex-row space-x-3 items-center",children:[(0,e.jsx)("a",{target:"_blank",rel:"noreferrer noopened",href:x.N$,children:(0,e.jsx)("img",{width:"45px",height:"45px",src:x.dm})}),(0,e.jsx)("a",{className:"text-sm text-gray-600",target:"_blank",rel:"noreferrer noopened",href:x.N$,children:x.OX})]})},{}),(0,e.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,e.jsx)("div",{className:"text-sm text-center text-gray-600",children:(0,e.jsx)(p.Z,{dateString:f})}),(0,e.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,e.jsx)("span",{className:"text-gray-600 text-sm",children:g})]})}),(0,e.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,e.jsx)("div",{className:"mx-auto w-12/12 lg:w-10/12 xl:w-8/12 justify-center",children:l?(0,e.jsx)(q.Z,{className:"shadow-xl rounded-md",width:"100%",height:"auto",title:d,src:l,href:m}):(0,e.jsx)("div",{className:"shadow-xl rounded-md",children:(0,e.jsx)(y.Z,{color:j.primaryColor,imageUrl:null!==(b=j.logo)&& void 0!==b?b:"",title:c.title})})})})]})},C=c(7905),D=c(8489),E=c(4303),F=c(8126),G=c(4567),H=function(a){var b=a.series,c=a.posts,d=(0,f.useRouter)();return b?(0,e.jsxs)("div",{className:"mx-auto flex flex-col",children:[(0,e.jsx)("h3",{className:"font-medium text-lg md:text-2xl mb-4",children:(0,e.jsxs)("b",{className:"font-bold",children:[b," (",c.length," Part Series)"]})}),(0,e.jsx)("div",{className:"flex flex-col space-y-4",children:c.map(function(a,b){var c=a.collection,f=a.title,g=a.slug,h=a.date,i=a.readingTime,j=d.asPath.includes(g),k=j?{backgroundColor:c.primaryColor}:{},l="/".concat(c.name.toLowerCase(),"/").concat(g);return(0,e.jsxs)("div",{className:"flex flex-row items-center space-x-6",children:[(0,e.jsx)("div",{children:(0,e.jsx)(o.default,{as:l,href:"/[collection]/[slug]",passHref:!0,children:(0,e.jsx)("div",{style:k,className:"rounded-full cursor-pointer w-10 h-10 opacity-90 hover:opacity-100 flex items-center justify-center ".concat(j?"font-bold text-white":"bg-gray-100 hover:bg-gray-200"),children:(0,e.jsx)("span",{children:b+1})})})}),(0,e.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,e.jsx)("h3",{className:"leading-snug text-xl",children:(0,e.jsx)(o.default,{as:l,href:"/[collection]/[slug]",children:(0,e.jsx)("a",{className:"hover:underline ".concat(j?"font-bold":"font-medium"),children:f})})}),(0,e.jsxs)("div",{className:"text-xs mb-2 flex flex-row space-x-2 items-center",children:[(0,e.jsx)("div",{className:"text-gray-600",children:(0,e.jsx)(p.Z,{dateString:h})}),(0,e.jsx)("span",{className:"text-gray-600",children:"\xb7"}),(0,e.jsx)("span",{className:"text-gray-600",children:i})]})]})]},g)})})]}):null},I=c(294),J=function(a){var b,c,d=a.post,f=a.content,g=a.series,j=a.morePosts,k=a.isFallback,l=d.series?"".concat(d.series,": ").concat(d.title):d.title,o=null!==(c=null===(b=d.ogImage)|| void 0===b?void 0:b.url)&& void 0!==c?c:d.coverImage,p=d.collection,q="".concat(x._O).concat(o),s={"--accent":p.primaryColor,"--accent-light":p.primaryColor,"--accent-contrast":p.contrastColor},t={"@context":"https://schema.org/","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},image:[q],headline:d.title,description:d.excerpt,author:{"@type":"Person",name:x.S7,url:x.N$},datePublished:d.date};return(0,e.jsx)(C.Z,{children:(0,e.jsxs)("div",{style:s,children:[(0,e.jsx)(E.Z,{collection:d.collection}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(n.Z,{}),k?(0,e.jsx)(r.Z,{children:"Loading…"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("article",{className:"mb-16",children:[(0,e.jsxs)(h.default,{children:[(0,e.jsx)("title",{children:l}),(0,e.jsx)("meta",{property:"og:type",content:"article"}),(0,e.jsx)("meta",{property:"og:title",content:l},"og:title"),(0,e.jsx)("meta",{property:"article:published_time",content:d.date}),(0,e.jsx)("meta",{property:"twitter:title",content:l},"twitter:title"),(0,e.jsx)("meta",{property:"twitter:description",content:d.excerpt},"twitter:description"),(0,e.jsx)("meta",{property:"twitter:image",content:q},"twitter:image"),d.excerpt&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("meta",{property:"og:description",content:d.excerpt},"og:description"),(0,e.jsx)("meta",{name:"description",content:d.excerpt},"meta:description")]}),d.canonical&&(0,e.jsx)("link",{rel:"canonical",href:d.canonical},"canonical"),(0,e.jsx)("meta",{property:"og:image",content:q}),(0,e.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})]}),(0,e.jsx)(B,{post:d}),(0,e.jsx)("div",{className:"mb-12 max-w-2xl mx-auto",children:(0,e.jsx)(H,{posts:g,series:d.series})}),(0,e.jsx)(m,{content:f})]}),(0,e.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,e.jsx)(H,{posts:g,series:d.series})}),(0,e.jsx)("div",{className:"w-full md:w-8/12 mx-auto my-4",children:(0,e.jsx)(G.Z,{collection:d.collection.name})}),Boolean(j.length)&&(0,e.jsxs)("div",{children:[(0,e.jsx)(F.Z,{}),(0,e.jsxs)("h3",{className:"text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center",children:[(0,e.jsx)("span",{children:"Learn more about"})," ",(0,e.jsx)(I.Z,{logoSize:"28px",collection:p})]}),(0,e.jsx)(D.Z,{posts:j})]})]})]})]})})},K=c(1485),L=function(a){var b=a.post,c=a.content,d=a.morePosts,f=a.moreArticles,g=a.isFallback,j=b.collection,k=b.coverImage,l={"--accent":j.primaryColor,"--accent-light":j.primaryColorLight,"--accent-contrast":j.contrastColor},o="".concat(x._O).concat(k),p={"@context":"https://schema.org/","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:b.title,images:[o],author:{"@type":"Person",name:x.S7,url:x.N$},datePublished:b.date};return(0,e.jsx)(C.Z,{children:(0,e.jsxs)("div",{style:l,children:[(0,e.jsx)(E.Z,{collection:j}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(n.Z,{}),g?(0,e.jsx)(r.Z,{children:"Loading…"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("article",{className:"mb-16",children:[(0,e.jsxs)(h.default,{children:[(0,e.jsx)("title",{children:b.title}),(0,e.jsx)("meta",{property:"og:type",content:"article"}),(0,e.jsx)("meta",{property:"og:title",content:b.title},"og:title"),(0,e.jsx)("meta",{property:"og:site_name",content:x.px}),(0,e.jsx)("meta",{property:"article:published_time",content:b.date}),(0,e.jsx)("meta",{property:"twitter:title",content:b.title},"twitter:title"),(0,e.jsx)("meta",{property:"og:image",content:o},"og:image"),";",(0,e.jsx)("meta",{property:"twitter:image",content:o},"twitter:image"),(0,e.jsx)("script",{type:"application/ld+json",children:JSON.stringify(p)})]}),(0,e.jsx)(B,{post:b}),(0,e.jsx)(m,{content:c})]}),(0,e.jsx)("div",{className:"w-full md:w-8/12 mx-auto",children:(0,e.jsx)(G.Z,{collection:b.collection.name})}),Boolean(f.length)&&(0,e.jsxs)("div",{children:[(0,e.jsx)(F.Z,{}),(0,e.jsxs)("h3",{className:"text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center",children:[(0,e.jsx)("span",{children:"Articles about"})," ",(0,e.jsx)(I.Z,{logoSize:"28px",collection:j})]}),(0,e.jsx)(D.Z,{posts:f})]}),Boolean(d.length)&&(0,e.jsxs)("div",{children:[(0,e.jsx)(F.Z,{}),(0,e.jsxs)("h3",{className:"text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center",children:[(0,e.jsx)("span",{children:"Posts about"})," ",(0,e.jsx)(I.Z,{logoSize:"28px",collection:j})]}),(0,e.jsx)(K.Z,{posts:d})]})]})]})]})})};(A=d||(d={}))[A.BlogPost=0]="BlogPost",A[A.Article=1]="Article";var M=!0,N=function(a){var b=a.post,c=a.type,h=a.morePosts,i=a.moreArticles,j=a.series,k=a.content,l=(0,f.useRouter)();return l.isFallback||(null==b?void 0:b.slug)&&b.collection?c===d.Article?(0,e.jsx)(J,{post:b,morePosts:i,series:j,content:k,isFallback:l.isFallback}):(0,e.jsx)(L,{post:b,morePosts:h,moreArticles:i,content:k,isFallback:l.isFallback}):(0,e.jsx)(g.default,{statusCode:404})}},602:function(a){a.exports={markdown:"markdown-styles_markdown__1x9gM"}},780:function(a){a.exports={Tag:"tag_Tag__tPe2P"}},2918:function(a,b,c){a.exports=c(9185)}},function(a){a.O(0,[501,506,176,774,888,179],function(){return a(a.s=4995)}),_N_E=a.O()}])