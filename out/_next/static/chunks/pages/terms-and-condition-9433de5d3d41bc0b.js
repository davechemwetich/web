(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6240],{5733:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-and-condition",function(){return n(92351)}])},25182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(38754),n(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return f},useSearchParams:function(){return p},usePathname:function(){return A},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return g},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return y},redirect:function(){return u.redirect},notFound:function(){return c.notFound}});let r=n(67294),o=n(24224),i=n(78463),s=n(25182),a=n(72526),l=n(43014),u=n(48781),c=n(78147),d=Symbol("internal for urlsearchparams readonly");function m(){return Error("ReadonlyURLSearchParams cannot be modified")}class f{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw m()}delete(){throw m()}set(){throw m()}sort(){throw m()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function p(){(0,s.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(i.SearchParamsContext),t=(0,r.useMemo)(()=>e?new f(e):null,[e]);return t}function A(){return(0,s.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(i.PathnameContext)}function h(){(0,s.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,s.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){var r;void 0===n&&(n={});let o=t[1],i=null!=(r=o.children)?r:Object.values(o)[0];if(!i)return n;let s=i[0],a=Array.isArray(s),l=a?s[1]:s;return!l||l.startsWith("__PAGE__")?n:(a&&(n[s[0]]=s[1]),e(i,n))}(e.tree):null}function v(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let i;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)i=t[1][n];else{var s;let e=t[1];i=null!=(s=e.children)?s:Object.values(e)[0]}if(!i)return o;let l=i[0],u=(0,a.getSegmentValue)(l);return!u||u.startsWith("__PAGE__")?o:(o.push(u),e(i,n,!1,o))}(t,e)}function y(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48781:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{redirect:function(){return r},isRedirectError:function(){return o},getURLFromRedirectError:function(){return i}});let n="NEXT_REDIRECT";function r(e){let t=Error(n);throw t.digest=n+";"+e,t}function o(e){return"string"==typeof(null==e?void 0:e.digest)&&e.digest.startsWith(n+";")&&e.digest.length>n.length+1}function i(e){return o(e)?e.digest.slice(n.length+1):null}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return i},useServerInsertedHTML:function(){return s}});let r=n(61757),o=r._(n(67294)),i=o.default.createContext(null);function s(e){let t=(0,o.useContext)(i);t&&t(e)}},92351:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return A},default:function(){return h}});var r=n(85893),o=n(67294);n(49824);var i=n(34774),s=n(85715),a=n(82267),l=n(9473),u=n(50549),c=n(24404),d=n(25789),m=n(64297);let f=()=>{let e=(0,l.v9)(a.vV),t=null==e?void 0:e.terms_conditions,[n,i]=(0,o.useState)(null),[f,p]=(0,o.useState)(!0);(0,o.useEffect)(()=>{setTimeout(()=>{i(t),p(!1)},2e3)},[]);let A=(0,l.v9)(d.iT);return(0,o.useEffect)(()=>{},[A]),(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(s.Z,{title:(0,c.Iu)("terms&condition")}),(0,r.jsx)("section",{id:"termsSect",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"card",children:f?(0,r.jsx)("div",{className:"col-12 loading_data",children:(0,r.jsx)(u.Z,{height:20,count:20})}):(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n||""}})})})})]})},p=e=>{let{seoData:t,currentURL:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_title,description:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_description,keywords:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_keywords,ogImage:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_image,pathName:n}),(0,r.jsx)(f,{})]})};var A=!0,h=p},85715:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),o=n(67294),i={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3},s=n(38138),a=n(47516),l=n(9473),u=n(82267),c=n(86501),d=n(51183),m=n(8193),f=n(82610),p=n(11163),A=n(68258),h=n(24404);let g=e=>{let t=(0,p.useRouter)(),{data:n,title:g}=e,v=(0,l.v9)(u.vV),y=v&&v.currency_symbol;v&&v.company_name;let x=(0,l.v9)(e=>e.User_signup);x&&x.data&&x.data.data.id;let[j,b]=(0,o.useState)(e.data&&e.data.is_favourite),[_,E]=(0,o.useState)(!1),w=t=>{t.preventDefault(),t.stopPropagation(),x&&x.data&&x.data.token?(0,d.pw)(e.data.propId,"1",e=>{b(!0),E(!1),c.Am.success(e.message)},e=>{console.log(e)}):c.Am.error("Please login first to add this property to favorites.")},S=t=>{t.preventDefault(),t.stopPropagation(),(0,d.pw)(e.data.propId,"0",e=>{b(!1),E(!0),c.Am.success(e.message)},e=>{console.log(e)})};return"".concat("https://ebrokerweb.wrteam.me").concat(t.asPath),(0,o.useEffect)(()=>{b(e.data&&1===e.data.is_favourite),E(!1)},[e.data&&e.data.is_favourite]),f.Z,f.Z.Item,A.Dk,null==n||n.title,A.Vq,(0,h.Iu)("Facebook"),f.Z.Item,A.B,A.b0,(0,h.Iu)("Twitter"),f.Z.Item,A.N0,null==n||n.title,A.ud,(0,h.Iu)("Whatsapp"),f.Z.Item,s.dmD,(0,h.Iu)("Copy Link"),(0,r.jsx)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(i.src,")")},children:e.data?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,r.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"left-side-content",children:[(0,r.jsx)("span",{className:"prop-types",children:n.type}),(0,r.jsx)("span",{className:"prop-name",children:n.title}),(0,r.jsxs)("span",{className:"prop-Location",children:[(0,r.jsx)(s.v2c,{size:25})," ",n.loc]}),(0,r.jsxs)("div",{className:"prop-sell-time",children:[(0,r.jsx)("span",{className:"propertie-sell-tag",children:n.propertyType}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(a.YFw,{size:20})," ",n.time]})]})]})}),(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"right-side-content",children:[(0,r.jsxs)("span",{children:[" ",y," ",(0,h.pw)(n.price)," ","rent"===n.propertyType&&n.rentduration?"/ ".concat(n.rentduration):""]}),(0,r.jsxs)("div",{className:"rightside_buttons",children:[(0,r.jsx)("div",{children:j?(0,r.jsx)("button",{onClick:S,children:(0,r.jsx)(m.M_L,{size:25,className:"liked_property"})}):_?(0,r.jsx)("button",{onClick:w,children:(0,r.jsx)(m.lo,{size:25,className:"disliked_property"})}):(0,r.jsx)("button",{onClick:w,children:(0,r.jsx)(m.lo,{size:25})})}),null]})]})})]})})}):(0,r.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,r.jsx)("h2",{children:e.title})})})};var v=g},64297:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(85893),o=n(67294),i=n(87650),s=n(96392),a=n(9473),l=n(25789),u=n(69998),c=n(82267),d={src:"/_next/static/media/under_maintain.69392bf7.svg",height:1080,width:1080,blurWidth:0,blurHeight:0},m=n(24404),f=n(25675),p=n.n(f),A=n(11163),h=n(78269),g=n(39332),v=n(86455),y=n.n(v);let x=e=>{let{children:t}=e,[n,f]=(0,o.useState)(!0),v=(0,a.v9)(e=>e.User_signup),x=v&&v.data?v.data.data.id:null,j=(0,A.useRouter)(),b=(0,a.v9)(c.vV);(0,o.useEffect)(()=>{(0,c.PH)(null,v?x:"",e=>{var t,n,r;f(!1),document.documentElement.style.setProperty("--primary-color",null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.system_color),document.documentElement.style.setProperty("--primary-category-background",null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.category_background),document.documentElement.style.setProperty("--primary-sell",null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.sell_background)},e=>{console.log(e)})},[v,null==b?void 0:b.svg_clr]);let _=(0,g.usePathname)(),E=h.Fl.includes(_);(0,o.useEffect)(()=>{w()},[E]);let w=()=>{E&&!x&&y().fire({icon:"error",title:"Oops...",text:"You have notLogin. Please Login First",allowOutsideClick:!1,customClass:{confirmButton:"Swal-confirm-buttons"}}).then(e=>{e.isConfirmed&&j.push("/")})};return(0,o.useEffect)(()=>{x||"/user-register"!==window.location.pathname||j.push("/")},[]),(0,a.v9)(l.iT),(0,r.jsx)("div",{children:n?(0,r.jsx)(u.Z,{}):(0,r.jsx)(r.Fragment,{children:(null==b?void 0:b.maintenance_mode)==="1"?(0,r.jsx)("div",{className:"under_maintance",children:(0,r.jsxs)("div",{className:"col-12 text-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)(p(),{loading:"lazy",src:d.src,alt:"underMaintance",width:600,height:600})}),(0,r.jsxs)("div",{className:"no_page_found_text",children:[(0,r.jsx)("h3",{children:(0,m.Iu)("underMaintance")}),(0,r.jsx)("span",{children:(0,m.Iu)("pleaseTryagain")})]})]})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),t,(0,r.jsx)(i.Z,{})]})})})};var j=x},34774:function(e,t,n){"use strict";var r=n(85893),o=n(9008),i=n.n(o);let s=e=>{let{title:t,description:n,keywords:o,ogImage:s,pathName:a}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"name",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{name:"keywords",content:o||"Unique Properties Search,Tailored Real Estate Experiences,Exclusive Property Deals,Personalised Realty Services,Seamless Property Transactions,Prime Residential Properties,Bespoke Property Search,Exceptional Real Estate Guidance,,Premium Housing Options,Innovative Property Solutions"}),(0,r.jsx)("meta",{name:"image",content:s||null}),(0,r.jsx)("meta",{property:"og:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{property:"og:description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{property:"og:image",content:s||null}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,r.jsx)("meta",{property:"og:image:height",content:"608"}),(0,r.jsx)("meta",{property:"og:url",content:a||"Kabu Comrades"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"twitter:description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{name:"twitter:image",content:s||null}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("link",{rel:"canonical",href:"".concat("https://ebrokerweb.wrteam.me")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})};t.Z=s},78269:function(e,t,n){"use strict";n.d(t,{Fl:function(){return o},i1:function(){return r}});let r=["/user/dashboard/","/user/advertisement/","/user/properties/","/user/subscription/","/user/transaction-history/"],o=["/user/chat/","/user-register/","/user/profile/","/user/favorites-properties/"]},9008:function(e,t,n){e.exports=n(42636)},39332:function(e,t,n){e.exports=n(31414)},50549:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294);let o=r.createContext({});function i({count:e=1,wrapper:t,className:n,containerClassName:i,containerTestId:s,circle:a=!1,style:l,...u}){var c,d,m;let f=r.useContext(o),p={...u};for(let[e,t]of Object.entries(u))void 0===t&&delete p[e];let A={...f,...p,circle:a},h={...l,...function({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:i,direction:s,duration:a,enableAnimation:l=!0}){let u={};return"rtl"===s&&(u["--animation-direction"]="reverse"),"number"==typeof a&&(u["--animation-duration"]=`${a}s`),l||(u["--pseudo-element-display"]="none"),("string"==typeof n||"number"==typeof n)&&(u.width=n),("string"==typeof r||"number"==typeof r)&&(u.height=r),("string"==typeof o||"number"==typeof o)&&(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==e&&(u["--base-color"]=e),void 0!==t&&(u["--highlight-color"]=t),u}(A)},g="react-loading-skeleton";n&&(g+=` ${n}`);let v=null!==(c=A.inline)&&void 0!==c&&c,y=[],x=Math.ceil(e);for(let t=0;t<x;t++){let n=h;if(x>e&&t===x-1){let t=null!==(d=n.width)&&void 0!==d?d:"100%",r=e%1,o="number"==typeof t?t*r:`calc(${t} * ${r})`;n={...n,width:o}}let o=r.createElement("span",{className:g,style:n,key:t},"‌");v?y.push(o):y.push(r.createElement(r.Fragment,{key:t},o,r.createElement("br",null)))}return r.createElement("span",{className:i,"data-testid":s,"aria-live":"polite","aria-busy":null===(m=A.enableAnimation)||void 0===m||m},t?y.map((e,n)=>r.createElement(t,{key:n},e)):y)}}},function(e){e.O(0,[5937,8166,4617,4980,3874,3609,9401,5675,913,631,1664,3789,155,5529,6958,7545,2610,8258,354,9774,2888,179],function(){return e(e.s=5733)}),_N_E=e.O()}]);