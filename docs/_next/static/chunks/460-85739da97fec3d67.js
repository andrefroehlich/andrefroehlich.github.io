(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{9618:function(e,t,r){var n={"./AuthorLayout":4731,"./AuthorLayout.tsx":4731,"./ListLayout":951,"./ListLayout.tsx":951,"./PostLayout":5104,"./PostLayout.tsx":5104,"./PostSimple":8218,"./PostSimple.tsx":8218};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},7753:function(e,t,r){"use strict";var n=r(7320);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.Z=function(e){var t=i({},e);return(0,n.tZ)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},t))}},1460:function(e,t,r){"use strict";r.d(t,{J:function(){return f}});var n=r(7320),a=r(1720),i=r(3194),o=r(7753),c=r(5741),l=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,o=void 0===i?1:i,c=e.toHeading,l=void 0===c?6:c,s=e.asDisclosure,d=void 0!==s&&s,u=e.exclude,m=void 0===u?"":u,p=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),h=t.filter((function(e){return e.depth>=o&&e.depth<=l&&!p.test(e.value)})),f=(0,n.tZ)("ul",{children:h.map((function(e){return(0,n.tZ)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.tZ)(n.HY,{children:d?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:f})]}):f})},s=function(e){var t=e.children,r=(0,a.useRef)(null),i=(0,a.useState)(!1),o=i[0],c=i[1],l=(0,a.useState)(!1),s=l[0],d=l[1];return(0,n.BX)("div",{ref:r,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1),d(!1)},className:"relative",children:[o&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(s?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout((function(){d(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:s?"text-green-400":"text-gray-300",children:s?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{children:t})]})},d=r(1862);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h={Image:o.Z,TOCInline:l,a:c.Z,pre:s,wrapper:function(e){var t=e.layout,a=p(e,["layout"]),i=r(9618)("./".concat(t)).default;return(0,n.tZ)(i,m({},a))},BlogNewsletterForm:d.w},f=function(e){var t=e.layout,r=e.mdxSource,o=p(e,["layout","mdxSource"]),c=(0,a.useMemo)((function(){return(0,i.getMDXComponent)(r)}),[r]);return(0,n.tZ)(c,m({layout:t,components:h},o))}},1862:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var n=r(8520),a=r.n(n),i=r(7320),o=r(1720),c=r(7059),l=r.n(c);function s(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}var d=function(e){var t,r=e.title,n=void 0===r?"Subscribe to the newsletter":r,c=(0,o.useRef)(null),d=(0,o.useState)(!1),u=d[0],m=d[1],p=(0,o.useState)(""),h=p[0],f=p[1],g=(0,o.useState)(!1),y=g[0],v=g[1],x=(t=a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(l().newsletter.provider),{body:JSON.stringify({email:c.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return m(!0),f("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:c.current.value="",m(!1),v(!0),f("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(e){s(i,n,a,o,c,"next",e)}function c(e){s(i,n,a,o,c,"throw",e)}o(void 0)}))});return(0,i.BX)("div",{children:[(0,i.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:n}),(0,i.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,i.BX)("div",{children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,i.tZ)("input",{autoComplete:"email",className:"px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600",id:"email-input",name:"email",placeholder:y?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:c,required:!0,type:"email",disabled:y})]}),(0,i.tZ)("div",{className:"flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,i.tZ)("button",{className:"py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"Thank you!":"Sign up"})})]}),u&&(0,i.tZ)("div",{className:"pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400",children:h})]})};t.Z=d;var u=function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(d,{title:t})})})}},5941:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},1476:function(e,t,r){"use strict";r.d(t,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),o=r(7059),c=r.n(o),l=function(e){var t=e.title,r=e.description,o=e.ogType,l=e.ogImage,s=e.twImage,d=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:t}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(d.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:c().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:t}),Array.isArray(l)?l.map((function(e){var t=e.url;return(0,n.tZ)("meta",{property:"og:image",content:t},t)})):(0,n.tZ)("meta",{property:"og:image",content:l},l),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:t}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s})]})},s=function(e){var t=e.title,r=e.description,a=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,n.tZ)(l,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:t,description:r,ogType:"website",ogImage:o,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,o=e.summary,s=e.date,d=e.lastmod,u=e.url,m=e.images,p=void 0===m?[]:m,h=(0,i.useRouter)(),f=new Date(s).toISOString(),g=new Date(d||s).toISOString(),y=(0===p.length?[c().socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(e)}})),v={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:f,dateModified:g,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},x=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:r,description:o,ogType:"article",ogImage:y,twImage:x}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:f}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:g}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(c().siteUrl).concat(h.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v,null,2)}})]})]})}},1580:function(e,t,r){"use strict";var n=r(7320),a=r(1720);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];(0,a.useEffect)((function(){var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,n.BX)("div",{className:"fixed flex-col hidden gap-3 right-8 bottom-8 ".concat(t?"md:flex":"md:hidden"),children:[(0,n.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,n.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,n.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},5437:function(e,t,r){"use strict";var n=r(7320),a=r(1664),i=r(423);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},3044:function(e,t,r){"use strict";var n=r(7320),a=r(7059),i=r.n(a),o=r(5152),c=(0,o.default)((function(){return r.e(147).then(r.bind(r,6147))}),{loadableGenerated:{webpack:function(){return[6147]},modules:["../components/comments/index.tsx -> @/components/comments/Utterances"]},ssr:!1}),l=(0,o.default)((function(){return r.e(414).then(r.bind(r,6414))}),{loadableGenerated:{webpack:function(){return[6414]},modules:["../components/comments/index.tsx -> @/components/comments/Giscus"]},ssr:!1}),s=(0,o.default)((function(){return r.e(939).then(r.bind(r,9939))}),{loadableGenerated:{webpack:function(){return[9939]},modules:["../components/comments/index.tsx -> @/components/comments/Disqus"]},ssr:!1});t.Z=function(e){var t,r=e.frontMatter;switch(i().comment.giscusConfig.mapping||i().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,n.BX)(n.HY,{children:[i().comment&&"giscus"===i().comment.provider&&(0,n.tZ)(l,{mapping:t}),i().comment&&"utterances"===i().comment.provider&&(0,n.tZ)(c,{issueTerm:t}),i().comment&&"disqus"===i().comment.provider&&(0,n.tZ)(s,{frontMatter:r})]})}},4731:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n,a,i=r(7320),o=r(1720);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l;function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v={mail:function(e){return o.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),n||(n=o.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=o.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return o.createElement("svg",s({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=o.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return o.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=o.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),m||(m=o.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return o.createElement("svg",f({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=o.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return o.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),g||(g=o.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},x=function(e){var t=e.kind,r=e.href,n=e.size,a=void 0===n?8:n;if(!r||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(r))return null;var o=v[t];return(0,i.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:r,children:[(0,i.tZ)("span",{className:"sr-only",children:t}),(0,i.tZ)(o,{className:"fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})},b=r(7753),Z=r(1476);function w(e){var t=e.children,r=e.frontMatter,n=r.name,a=r.avatar,o=r.occupation,c=r.company,l=r.email,s=r.twitter,d=r.linkedin,u=r.github;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(Z.TQ,{title:"About - ".concat(n),description:"About me - ".concat(n)}),(0,i.tZ)("div",{children:(0,i.BX)("div",{className:"items-start space-y-2 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0",children:[(0,i.BX)("div",{className:"flex flex-col items-center pt-8 space-x-2",children:[(0,i.tZ)(b.Z,{src:a,alt:"avatar",width:"192px",height:"192px",className:"w-48 h-48 rounded-full"}),(0,i.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:n}),(0,i.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:o}),(0,i.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:c}),(0,i.BX)("div",{className:"flex pt-6 space-x-3",children:[(0,i.tZ)(x,{kind:"mail",href:"mailto:".concat(l)}),(0,i.tZ)(x,{kind:"github",href:u}),(0,i.tZ)(x,{kind:"linkedin",href:d}),(0,i.tZ)(x,{kind:"twitter",href:s})]})]}),(0,i.tZ)("div",{className:"pt-8 pb-8 prose dark:prose-dark max-w-none md:col-span-2",children:t})]})})]})}},951:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7320),a=r(5741),i=r(5437),o=r(1720);function c(e){var t=e.totalPages,r=e.currentPage,i=r-1>0,o=r+1<=t;return(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,n.tZ)("button",{children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",t]}),!o&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!o,children:"Next"}),o&&(0,n.tZ)(a.Z,{href:"/blog/page/".concat(r+1),children:(0,n.tZ)("button",{children:"Next"})})]})})}var l=r(2497);function s(e){var t=e.posts,r=e.title,s=e.initialDisplayPosts,d=void 0===s?[]:s,u=e.pagination,m=(0,o.useState)(""),p=m[0],h=m[1],f=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(p.toLowerCase())})),g=d.length>0&&!p?d:f;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,n.BX)("div",{className:"relative max-w-lg",children:[(0,n.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return h(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,n.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,n.BX)("ul",{children:[!f.length&&"No posts found.",g.map((function(e){var t=e.slug,r=e.date,o=e.title,c=e.summary,s=e.tags;return(0,n.tZ)("li",{className:"py-4",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:(0,l.Z)(r)})})]}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:o})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:s.map((function(e){return(0,n.tZ)(i.Z,{text:e},e)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:c})]})]})},t)}))]})]}),u&&u.totalPages>1&&!p&&(0,n.tZ)(c,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},5104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7320),a=r(5741),i=r(5941),o=r(3653),c=r(1476),l=r(7753),s=r(5437),d=r(7059),u=r.n(d),m=r(3044),p=r(1580);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}var g=function(e){return"".concat(u().siteRepo,"/blob/master/data/blog/").concat(e)},y=function(e){return"https://mobile.twitter.com/search?q=".concat(encodeURIComponent("".concat(u().siteUrl,"/blog/").concat(e)))},v={weekday:"long",year:"numeric",month:"long",day:"numeric"};function x(e){var t=e.frontMatter,r=e.authorDetails,d=e.next,h=e.prev,x=e.children,b=t.slug,Z=t.fileName,w=t.date,k=t.title,N=t.tags;return(0,n.BX)(o.Z,{children:[(0,n.tZ)(c.Uy,f({url:"".concat(u().siteUrl,"/blog/").concat(b),authorDetails:r},t)),(0,n.tZ)(p.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.BX)("div",{className:"space-y-1 text-center",children:[(0,n.tZ)("dl",{className:"space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:w,children:new Date(w).toLocaleDateString(u().locale,v)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:k})})]})}),(0,n.BX)("div",{className:"pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.BX)("dl",{className:"pt-6 pb-10 xl:pt-11",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Authors"}),(0,n.tZ)("dd",{children:(0,n.tZ)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,n.BX)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,n.tZ)(l.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"w-10 h-10 rounded-full"}),(0,n.BX)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Name"}),(0,n.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,n.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,n.tZ)("dd",{children:e.twitter&&(0,n.tZ)(a.Z,{href:e.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,n.BX)("div",{className:"xl:pb-0 xl:col-span-3 xl:row-span-2",children:[(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:x}),(0,n.BX)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:[(0,n.tZ)(a.Z,{href:y(b),rel:"nofollow",children:"Discuss on Twitter"})," \u2022 ",(0,n.tZ)(a.Z,{href:g(Z),children:"View on GitHub"})]}),(0,n.tZ)(m.Z,{frontMatter:t})]}),(0,n.BX)("footer",{children:[(0,n.BX)("div",{className:"text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2",children:[N&&(0,n.BX)("div",{className:"py-4 xl:py-8",children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.tZ)("div",{className:"flex flex-wrap",children:N.map((function(e){return(0,n.tZ)(s.Z,{text:e},e)}))})]}),(d||h)&&(0,n.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[h&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(h.slug),children:h.title})})]}),d&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(d.slug),children:d.title})})]})]})]}),(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.tZ)(a.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the blog"})})]})]})]})})]})}},8218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7320),a=r(5741),i=r(5941),o=r(3653),c=r(1476),l=r(7059),s=r.n(l),d=r(2497),u=r(3044),m=r(1580);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function f(e){var t=e.frontMatter,r=e.next,l=e.prev,p=e.children,f=t.slug,g=t.date,y=t.title;return(0,n.BX)(o.Z,{children:[(0,n.tZ)(c.Uy,h({url:"".concat(s().siteUrl,"/blog/").concat(f)},t)),(0,n.tZ)(m.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{children:(0,n.BX)("div",{className:"pb-10 space-y-1 text-center",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:g,children:(0,d.Z)(g)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:y})})]})}),(0,n.BX)("div",{className:"pb-8",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:p})}),(0,n.tZ)(u.Z,{frontMatter:t}),(0,n.tZ)("footer",{children:(0,n.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[l&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(l.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",l.title]})}),r&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},2497:function(e,t,r){"use strict";var n=r(7059),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},423:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}}}]);