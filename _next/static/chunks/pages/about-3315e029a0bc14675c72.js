(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7063:function(e,n,t){"use strict";var a=t(5893);n.Z=function(e){var n=e.children;return(0,a.jsx)("div",{className:"container mx-auto px-5",children:n})}},9798:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(7063),i=t(5893),r=function(){return(0,i.jsx)("footer",{className:"",children:(0,i.jsx)(a.Z,{})})},s=t(9008),o=t(2624),l=function(){return(0,i.jsxs)(s.default,{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:o.l1}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:o.l1}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"description",content:o.dz}),(0,i.jsx)("meta",{property:"og:image",content:o.vC})]})},c=function(e){e.preview;var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),(0,i.jsx)("div",{children:(0,i.jsx)("main",{children:n})}),(0,i.jsx)(r,{})]})}},2458:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(1664),i=t(1163),r=t(5893),s=function(){var e=(0,i.useRouter)(),n=function(n){var t,i=n.link;return(0,r.jsx)("li",{className:"text-gray-700 hover:text-gray-900"+(t=i.path,e.pathname===t?"font-bold":""),children:(0,r.jsx)(a.default,{href:i.path,children:i.label})})};return(0,r.jsxs)("ul",{className:"flex space-x-8",children:[(0,r.jsx)(n,{link:{label:"About",path:"/about"}}),!1]})},o=function(){return(0,r.jsxs)("div",{className:"flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12",children:[(0,r.jsx)("h2",{className:"font-normal tracking-tight md:tracking-tighter leading-tight",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsxs)("a",{className:"hover:underline",children:[(0,r.jsx)("b",{children:"GIANCARLO"}),"BUOMPRISCO"]})})}),(0,r.jsx)("div",{children:(0,r.jsx)(s,{})})]})}},2624:function(e,n,t){"use strict";t.d(n,{vC:function(){return a},dz:function(){return i},R:function(){return r},l1:function(){return s}});var a="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg",i="Giancarlo Buomprisco's Website",r="Giancarlo Buomprisco",s="#000"},2167:function(e,n,t){"use strict";var a=t(3038);n.default=void 0;var i,r=(i=t(7294))&&i.__esModule?i:{default:i},s=t(1063),o=t(4651),l=t(7426);var c={};function d(e,n,t,a){if(e&&s.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=o.useRouter(),f=r.default.useMemo((function(){var n=s.resolveHref(i,e.href,!0),t=a(n,2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(i,e.as):o||r}}),[i,e.href,e.as]),h=f.href,u=f.as,p=e.children,m=e.replace,x=e.shallow,g=e.scroll,j=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var v=(n=r.default.Children.only(p))&&"object"===typeof n&&n.ref,b=l.useIntersection({rootMargin:"200px"}),y=a(b,2),w=y[0],k=y[1],I=r.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);r.default.useEffect((function(){var e=k&&t&&s.isLocalURL(h),n="undefined"!==typeof j?j:i&&i.locale,a=c[h+"%"+u+(n?"%"+n:"")];e&&!a&&d(i,h,u,{locale:n})}),[u,h,k,j,t,i]);var N={ref:I,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,a,i,r,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==o&&a.indexOf("#")>=0&&(o=!1),n[i?"replace":"push"](t,a,{shallow:r,locale:l,scroll:o}))}(e,i,h,u,m,x,g,j)},onMouseEnter:function(e){s.isLocalURL(h)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(i,h,u,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof j?j:i&&i.locale,A=i&&i.isLocaleDomain&&s.getDomainLocale(u,C,i&&i.locales,i&&i.domainLocales);N.href=A||s.addBasePath(s.addLocale(u,C,i&&i.defaultLocale))}return r.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var a=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,l=i.useRef(),c=i.useState(!1),d=a(c,2),f=d[0],h=d[1],u=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var a=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:i,elements:a}),t}(t),i=a.id,r=a.observer,s=a.elements;return s.set(e,n),r.observe(e),function(){s.delete(e),r.unobserve(e),0===s.size&&(r.disconnect(),o.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!s&&!f){var e=r.requestIdleCallback((function(){return h(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[f]),[u,f]};var i=t(7294),r=t(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},5655:function(e,n,t){"use strict";t.r(n);var a=t(7063),i=t(9798),r=t(2458),s=t(9008),o=t(5893);n.default=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(s.default,{children:(0,o.jsx)("title",{children:"About"})}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.Z,{}),(0,o.jsxs)("div",{className:"max-w-2xl mx-auto leading-loose text-lg",children:[(0,o.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-10 md:pr-8 mx-auto",children:"About Me"}),(0,o.jsxs)("div",{className:"flex-col space-y-8 pb-12",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,o.jsx)("p",{children:(0,o.jsx)("img",{className:"rounded",style:{width:"120px",height:"120px"},src:"/assets/giancarlo.jpeg",alt:"Gincarlo"})}),(0,o.jsx)("p",{className:"text-xs text-gray-800 py-3",children:"Me, in the Taipei 101, in 2020"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"In a Nutshell"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsx)("p",{children:"I am a Software Engineer, in love with programming and making stuff with code"}),(0,o.jsx)("p",{children:"Originally from Italy, I spent the largest part of the past decade in London (UK), where I worked for many companies (especially in the financial sector)."}),(0,o.jsx)("p",{children:"Due to Covid and other personal reasons, I've recently returned to Italy, temporarily."})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2021"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsx)("p",{children:"After a short-stint at Tradeweb at the end of the year, I decided to take a break from full-time consulting."}),(0,o.jsx)("p",{children:"Both the project, my relocation back to Italy and a distressing Covid-related situation took the tool, so I decided to take a small break."}),(0,o.jsxs)("p",{children:["In this timeframe I also worked on"," ",(0,o.jsx)("a",{target:"_blank",href:"https://formtoro.com",children:"Formtoro"}),", a Marketing application for collecting data and measuring the quality of an eCommerce's advertisements thanks to zero-party data."]})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2020"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsx)("p",{children:"At the beginning of the year, I left Barclays Bank due to a change in regulations that made working there less appealing (thanks, IR35). I was planning on getting back to consulting after my trip to Taiwan and Japan, but then Covid happened."}),(0,o.jsxs)("p",{children:["After a few months of building some side projects, I took on a contract with ",(0,o.jsx)("b",{children:"TradeWeb"}),", one of the most important Electronic Trading services in the world."]}),(0,o.jsx)("p",{children:"Needless to say, the project got me out of my comfort zone, having to deal with a difficult transition from a Flash/C++ based charting library to a new, Angular and Highcharts stack."}),(0,o.jsx)("p",{children:"This was one fo the hardest projects I have ever worked one, but thankfully we were able to swap all the charts in the system before the Flash kill-switch in January 2021."})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2019"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsxs)("p",{children:["At the beginning of the year, I joined ",(0,o.jsx)("b",{children:"OneTrust"}),", a unicorn in the Privacy space, and likely one of the highest growing startups in the world."]}),(0,o.jsx)("p",{children:"I was hired to grow and lead the London's front-end engineering team, focused on Angular."}),(0,o.jsxs)("p",{children:["OneTrust was a pretty great company, but not the ideal one for me personally. I decided to take on a more challenging contract with ",(0,o.jsx)("b",{children:"Barclays Bank"}),", where I was tasked to co-lead a project that had to be delivered within 6-months. Challenge accepted!"]}),(0,o.jsx)("p",{children:"This project was absolutely fascinating: it involved building a reusable, customizable framework for building interactive forms driven by a custom syntax that could be written by anyone, without any coding knowledge required."}),(0,o.jsx)("p",{children:"The hardest part was dispatching actions that would affect dozens, if not more, other forms on the same pricing page. For each given action, the affected forms could be could, changed in value, options, andf so on. And the cascade would continue affecting other forms as a result!"}),(0,o.jsx)("p",{children:"It wasn't easy, but we did it!"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2017-2018"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsxs)("p",{children:["In 2017 I finally joined my first financial institution:"," ",(0,o.jsx)("b",{children:"Societe Generale"}),", one of the largest banks in Europe."]}),(0,o.jsx)("p",{children:"My goal was to modernize the stack from Angular.js to modern Angular and ngRx, while maintaining a functional existing application."}),(0,o.jsx)("p",{children:"For the first time, I had a major responsibility on my hands: financial applications, as you can imagine, can cause financial losses!"}),(0,o.jsx)("p",{children:"The experience was both exciting and terrifying, but this was one of the most valuable experiences in my career."})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2015-2016"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsx)("p",{children:"After I left eFinancialCareers, I went to work for Klood, a social-media planner and analytics company, then turned market-research analyzer."}),(0,o.jsx)("p",{children:"It never caught on, but these were fundamental years in my growth - at a time when London's tech-sector was probably at its peak before the Brexit meltdown happened. A wonderful time to be there."})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2013-2014"}),(0,o.jsxs)("p",{className:"font-serif flex-col space-y-6",children:[(0,o.jsx)("p",{children:"After my graduation I went to work for King's College London, in the DIgital Humanities Department, on a project named DigiPal. Funded by the EU, it provided paleographers with computer-based tools to enhance their studies."}),(0,o.jsx)("p",{children:"It was my first experience being a professional developer, in a wonderful, friendly environment."}),(0,o.jsx)("p",{children:"After the expiration of my contract, I went on to work in the private sector. I landed at eFinancialCareers, one of the most important Job boards in the financial sector."}),(0,o.jsx)("p",{children:"Despite being in an office full of awesome poeple, the experience didn't last long for me, as I was enver really welcome to the offshore company that took complete ownership of the code."})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-3xl",children:"2010-2013"}),(0,o.jsx)("p",{className:"font-serif flex-col space-y-6",children:(0,o.jsx)("p",{className:"font-serif",children:"I studied Digital Humanties at University of Pisa, a subject which taught me both Computer Science and literary studies notions, such as writing, linguistics, and some much less useful (but still super-interesting) subjects."})})]})]})]})]})]})})}},4613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(5655)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=4613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);