(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5127],{63248:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/most-viewed-properties",function(){return a(83433)}])},25182:function(e,t,a){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),a(38754),a(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31414:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{ReadonlyURLSearchParams:function(){return g},useSearchParams:function(){return f},usePathname:function(){return m},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return v},useSelectedLayoutSegments:function(){return b},useSelectedLayoutSegment:function(){return x},redirect:function(){return c.redirect},notFound:function(){return u.notFound}});let r=a(67294),n=a(24224),i=a(78463),s=a(25182),o=a(72526),l=a(43014),c=a(48781),u=a(78147),d=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class g{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function f(){(0,s.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(i.SearchParamsContext),t=(0,r.useMemo)(()=>e?new g(e):null,[e]);return t}function m(){return(0,s.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(i.PathnameContext)}function h(){(0,s.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(n.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function v(){(0,s.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(n.GlobalLayoutRouterContext);return e?function e(t,a){var r;void 0===a&&(a={});let n=t[1],i=null!=(r=n.children)?r:Object.values(n)[0];if(!i)return a;let s=i[0],o=Array.isArray(s),l=o?s[1]:s;return!l||l.startsWith("__PAGE__")?a:(o&&(a[s[0]]=s[1]),e(i,a))}(e.tree):null}function b(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(n.LayoutRouterContext);return function e(t,a,r,n){let i;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)i=t[1][a];else{var s;let e=t[1];i=null!=(s=e.children)?s:Object.values(e)[0]}if(!i)return n;let l=i[0],c=(0,o.getSegmentValue)(l);return!c||c.startsWith("__PAGE__")?n:(n.push(c),e(i,a,!1,n))}(t,e)}function x(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=b(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{notFound:function(){return r},isNotFoundError:function(){return n}});let a="NEXT_NOT_FOUND";function r(){let e=Error(a);throw e.digest=a,e}function n(e){return(null==e?void 0:e.digest)===a}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48781:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{redirect:function(){return r},isRedirectError:function(){return n},getURLFromRedirectError:function(){return i}});let a="NEXT_REDIRECT";function r(e){let t=Error(a);throw t.digest=a+";"+e,t}function n(e){return"string"==typeof(null==e?void 0:e.digest)&&e.digest.startsWith(a+";")&&e.digest.length>a.length+1}function i(e){return n(e)?e.digest.slice(a.length+1):null}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72526:function(e,t){"use strict";function a(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return a}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43014:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{ServerInsertedHTMLContext:function(){return i},useServerInsertedHTML:function(){return s}});let r=a(61757),n=r._(a(67294)),i=n.default.createContext(null);function s(e){let t=(0,n.useContext)(i);t&&t(e)}},83433:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return y},default:function(){return A}});var r=a(85893),n=a(67294),i=a(64297),s=a(85715),o=a(51183),l=a(41664),c=a.n(l),u=a(58474),d=a(67619),p=a(82618),g=a(9473),f=a(24404),m=a(25789),h=a(7134);let v=()=>{let[e,t]=(0,n.useState)(!1),[a,l]=(0,n.useState)([]),[v,b]=(0,n.useState)(0),[x,y]=(0,n.useState)(0),A=(0,g.v9)(e=>e.User_signup),j=A&&A.data?A.data.data.id:null,_=(0,g.v9)(m.iT);(0,n.useEffect)(()=>{},[_]),(0,n.useEffect)(()=>{t(!0),(0,o.RO)({top_rated:"2",offset:x.toString(),limit:"8",current_user:A?j:"",onSuccess:e=>{b(e.total);let a=e.data;t(!1),l(a)},onError:e=>{t(!0),console.log(e)}})},[x,A]);let C=e=>{let t=8*e.selected;y(t),window.scrollTo(0,0)};return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{title:(0,f.Iu)("mostViewedProp")}),(0,r.jsxs)("section",{id:"featured_prop_section",children:[e?(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{id:"feature_cards",className:"row",children:Array.from({length:8}).map((e,t)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 loading_data",children:(0,r.jsx)(d.Z,{})},t))})}):a&&a.length>0?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{id:"feature_cards",className:"row",children:a.map((e,t)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,r.jsx)(c(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.slug_id),passHref:!0,children:(0,r.jsx)(u.Z,{ele:e})})},t))})})}):(0,r.jsx)("div",{className:"noDataFoundDiv",children:(0,r.jsx)(h.Z,{})}),a&&a.length>0?(0,r.jsx)("div",{id:"feature_cards",className:"row",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(p.Z,{pageCount:Math.ceil(v/8),onPageChange:C})})}):null]})]})};a(49824);var b=a(34774);let x=e=>{let{seoData:t,currentURL:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{title:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_title,description:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_description,keywords:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_keywords,ogImage:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_image,pathName:a}),(0,r.jsx)(v,{})]})};var y=!0,A=x},85715:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var r=a(85893),n=a(67294),i={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3},s=a(38138),o=a(47516),l=a(9473),c=a(82267),u=a(86501),d=a(51183),p=a(8193),g=a(82610),f=a(11163),m=a(68258),h=a(24404);let v=e=>{let t=(0,f.useRouter)(),{data:a,title:v}=e,b=(0,l.v9)(c.vV),x=b&&b.currency_symbol;b&&b.company_name;let y=(0,l.v9)(e=>e.User_signup);y&&y.data&&y.data.data.id;let[A,j]=(0,n.useState)(e.data&&e.data.is_favourite),[_,C]=(0,n.useState)(!1),P=t=>{t.preventDefault(),t.stopPropagation(),y&&y.data&&y.data.token?(0,d.pw)(e.data.propId,"1",e=>{j(!0),C(!1),u.Am.success(e.message)},e=>{console.log(e)}):u.Am.error("Please login first to add this property to favorites.")},k=t=>{t.preventDefault(),t.stopPropagation(),(0,d.pw)(e.data.propId,"0",e=>{j(!1),C(!0),u.Am.success(e.message)},e=>{console.log(e)})};return"".concat("https://ebrokerweb.wrteam.me").concat(t.asPath),(0,n.useEffect)(()=>{j(e.data&&1===e.data.is_favourite),C(!1)},[e.data&&e.data.is_favourite]),g.Z,g.Z.Item,m.Dk,null==a||a.title,m.Vq,(0,h.Iu)("Facebook"),g.Z.Item,m.B,m.b0,(0,h.Iu)("Twitter"),g.Z.Item,m.N0,null==a||a.title,m.ud,(0,h.Iu)("Whatsapp"),g.Z.Item,s.dmD,(0,h.Iu)("Copy Link"),(0,r.jsx)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(i.src,")")},children:e.data?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,r.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"left-side-content",children:[(0,r.jsx)("span",{className:"prop-types",children:a.type}),(0,r.jsx)("span",{className:"prop-name",children:a.title}),(0,r.jsxs)("span",{className:"prop-Location",children:[(0,r.jsx)(s.v2c,{size:25})," ",a.loc]}),(0,r.jsxs)("div",{className:"prop-sell-time",children:[(0,r.jsx)("span",{className:"propertie-sell-tag",children:a.propertyType}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(o.YFw,{size:20})," ",a.time]})]})]})}),(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"right-side-content",children:[(0,r.jsxs)("span",{children:[" ",x," ",(0,h.pw)(a.price)," ","rent"===a.propertyType&&a.rentduration?"/ ".concat(a.rentduration):""]}),(0,r.jsxs)("div",{className:"rightside_buttons",children:[(0,r.jsx)("div",{children:A?(0,r.jsx)("button",{onClick:k,children:(0,r.jsx)(p.M_L,{size:25,className:"liked_property"})}):_?(0,r.jsx)("button",{onClick:P,children:(0,r.jsx)(p.lo,{size:25,className:"disliked_property"})}):(0,r.jsx)("button",{onClick:P,children:(0,r.jsx)(p.lo,{size:25})})}),null]})]})})]})})}):(0,r.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,r.jsx)("h2",{children:e.title})})})};var b=v},26990:function(e,t,a){"use strict";a.d(t,{t:function(){return i}});var r=a(85893);a(82267);var n=a(67294);a(9473);let i=e=>{let{imageUrl:t,className:a}=e,[i,s]=(0,n.useState)("");return(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch(t),a=await e.text(),r=a.replace(/<defs>([\s\S]*?)<\/defs>/,"");s(r)}catch(e){console.error("Error converting image to SVG:",e)}};e()},[t]),(0,r.jsx)("div",{className:a,dangerouslySetInnerHTML:{__html:i}})}},58474:function(e,t,a){"use strict";var r=a(85893),n=a(51183),i=a(82267),s=a(24404),o=a(67294),l=a(86501),c=a(8193),u=a(9473),d=a(25675),p=a.n(d),g=a(26990);t.Z=function(e){let{ele:t,onRemoveCard:a,onImageLoad:d}=e,f=(0,u.v9)(i.vV),m=f&&f.currency_symbol,h=(0,u.v9)(e=>e.User_signup),v=()=>{d&&d()},[b,x]=(0,o.useState)(1===t.is_favourite),[y,A]=(0,o.useState)(!1),j=e=>{e.preventDefault(),e.stopPropagation(),h&&h.data&&h.data.token?(0,n.pw)(t.id,"1",e=>{x(!0),A(!1),l.Am.success(e.message)},e=>{console.log(e)}):l.Am.error("Please login first to add this property to favorites.")},_=e=>{e.preventDefault(),e.stopPropagation(),(0,n.pw)(t.id,"0",e=>{x(!1),A(!0),l.Am.success(e.message),a(t.id)},e=>{console.log(e)})};(0,o.useEffect)(()=>{x(1===t.is_favourite),A(!1)},[t.is_favourite]);let C=(0,u.v9)(i.vV),P=null==C?void 0:C.web_placeholder_logo,k=(0,s.$W)();return(0,r.jsx)("div",{className:"verticle_card",children:(0,r.jsxs)("div",{className:"card verticle_main_card",children:[(0,r.jsx)("div",{className:"verticle_card_img_div",children:(0,r.jsx)(p(),{loading:"lazy",className:"card-img",id:"verticle_card_img",src:t.title_image?t.title_image:P,alt:"no_img",width:200,height:200,onLoad:v})}),(0,r.jsxs)("div",{className:"card-img-overlay",children:[t.promoted?(0,r.jsx)("span",{className:"feature_tag",children:(0,s.Iu)("feature")}):null,(0,r.jsx)("span",{className:"like_tag",children:b?(0,r.jsx)(c.M_L,{size:25,className:"liked_property",onClick:_}):y?(0,r.jsx)(c.lo,{size:25,className:"disliked_property",onClick:j}):(0,r.jsx)(c.lo,{size:25,onClick:j})})]}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"sell_teg",children:t.property_type}),(0,r.jsxs)("span",{className:"price_teg",children:[m," ",(0,s.ze)(t.price)]}),(0,r.jsxs)("div",{className:"feature_card_mainbody",children:[(0,r.jsx)("div",{className:"cate_image",children:k?(0,r.jsx)(g.t,{imageUrl:t.category&&t.category.image,className:"custom-svg"}):(0,r.jsx)(p(),{loading:"lazy",src:t.category&&t.category.image,alt:"no_img",width:20,height:20})}),(0,r.jsxs)("span",{className:"feature_body_title",children:[" ",t.category&&t.category.category," "]})]}),(0,r.jsxs)("div",{className:"feature_card_middletext",children:[(0,r.jsx)("span",{children:t.title}),(0,r.jsxs)("p",{children:[t.city," ",t.city?",":null," ",t.state," ",t.state?",":null," ",t.country]})]})]}),(0,r.jsx)("div",{className:"card-footer",id:"feature_card_footer",children:(0,r.jsx)("div",{className:"row",children:t.parameters&&t.parameters.slice(0,4).map((e,t)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 ",children:(0,r.jsxs)("div",{className:"footer_content",children:[(0,r.jsx)("div",{children:k?(0,r.jsx)(g.t,{imageUrl:null==e?void 0:e.image,className:"custom-svg"}):(0,r.jsx)(p(),{loading:"lazy",src:e.image,alt:"no_img",width:20,height:16})}),(0,r.jsxs)("p",{className:"text_footer",children:[" ",e.name]})]},t)},t))})})]})})}},64297:function(e,t,a){"use strict";a.d(t,{Z:function(){return A}});var r=a(85893),n=a(67294),i=a(87650),s=a(96392),o=a(9473),l=a(25789),c=a(69998),u=a(82267),d={src:"/_next/static/media/under_maintain.69392bf7.svg",height:1080,width:1080,blurWidth:0,blurHeight:0},p=a(24404),g=a(25675),f=a.n(g),m=a(11163),h=a(78269),v=a(39332),b=a(86455),x=a.n(b);let y=e=>{let{children:t}=e,[a,g]=(0,n.useState)(!0),b=(0,o.v9)(e=>e.User_signup),y=b&&b.data?b.data.data.id:null,A=(0,m.useRouter)(),j=(0,o.v9)(u.vV);(0,n.useEffect)(()=>{(0,u.PH)(null,b?y:"",e=>{var t,a,r;g(!1),document.documentElement.style.setProperty("--primary-color",null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.system_color),document.documentElement.style.setProperty("--primary-category-background",null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.category_background),document.documentElement.style.setProperty("--primary-sell",null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.sell_background)},e=>{console.log(e)})},[b,null==j?void 0:j.svg_clr]);let _=(0,v.usePathname)(),C=h.Fl.includes(_);(0,n.useEffect)(()=>{P()},[C]);let P=()=>{C&&!y&&x().fire({icon:"error",title:"Oops...",text:"You have notLogin. Please Login First",allowOutsideClick:!1,customClass:{confirmButton:"Swal-confirm-buttons"}}).then(e=>{e.isConfirmed&&A.push("/")})};return(0,n.useEffect)(()=>{y||"/user-register"!==window.location.pathname||A.push("/")},[]),(0,o.v9)(l.iT),(0,r.jsx)("div",{children:a?(0,r.jsx)(c.Z,{}):(0,r.jsx)(r.Fragment,{children:(null==j?void 0:j.maintenance_mode)==="1"?(0,r.jsx)("div",{className:"under_maintance",children:(0,r.jsxs)("div",{className:"col-12 text-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)(f(),{loading:"lazy",src:d.src,alt:"underMaintance",width:600,height:600})}),(0,r.jsxs)("div",{className:"no_page_found_text",children:[(0,r.jsx)("h3",{children:(0,p.Iu)("underMaintance")}),(0,r.jsx)("span",{children:(0,p.Iu)("pleaseTryagain")})]})]})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),t,(0,r.jsx)(i.Z,{})]})})})};var A=y},7134:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(85893);a(67294);var n={src:"/_next/static/media/no_data_found_illustrator.c5c383a7.svg",height:255,width:255,blurWidth:0,blurHeight:0},i=a(24404),s=a(25675),o=a.n(s);let l=()=>(0,r.jsxs)("div",{className:"col-12 text-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)(o(),{loading:"lazy",src:n.src,alt:"no_img",width:200,height:200})}),(0,r.jsxs)("div",{className:"no_data_found_text",children:[(0,r.jsx)("h3",{children:(0,i.Iu)("noData")}),(0,r.jsx)("span",{children:(0,i.Iu)("noDatatext")})]})]});var c=l},82618:function(e,t,a){"use strict";var r=a(85893);a(67294);var n=a(11358),i=a.n(n);let s=e=>{let{pageCount:t,onPageChange:a}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:a,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})};t.Z=s},34774:function(e,t,a){"use strict";var r=a(85893),n=a(9008),i=a.n(n);let s=e=>{let{title:t,description:a,keywords:n,ogImage:s,pathName:o}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"name",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{name:"keywords",content:n||"Unique Properties Search,Tailored Real Estate Experiences,Exclusive Property Deals,Personalised Realty Services,Seamless Property Transactions,Prime Residential Properties,Bespoke Property Search,Exceptional Real Estate Guidance,,Premium Housing Options,Innovative Property Solutions"}),(0,r.jsx)("meta",{name:"image",content:s||null}),(0,r.jsx)("meta",{property:"og:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{property:"og:description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{property:"og:image",content:s||null}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,r.jsx)("meta",{property:"og:image:height",content:"608"}),(0,r.jsx)("meta",{property:"og:url",content:o||"Kabu Comrades"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,r.jsx)("meta",{name:"twitter:description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,r.jsx)("meta",{name:"twitter:image",content:s||null}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("link",{rel:"canonical",href:"".concat("https://ebrokerweb.wrteam.me")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})};t.Z=s},67619:function(e,t,a){"use strict";var r=a(85893);a(67294);var n=a(50549);t.Z=function(){return(0,r.jsx)("div",{className:"verticle_card",children:(0,r.jsxs)("div",{className:"card verticle_main_card",children:[(0,r.jsx)(n.Z,{width:"100%",height:"26vh",className:"skeleton_img"}),(0,r.jsx)("div",{className:"card-img-overlay",children:(0,r.jsx)(n.Z,{width:"100px",height:"35px"})}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("div",{id:"feature_card_mainbody",children:(0,r.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,r.jsx)("div",{className:"cate_image",children:(0,r.jsx)(n.Z,{width:"20px",height:"20px"})}),(0,r.jsx)(n.Z,{width:"100px",height:"20px"})]})}),(0,r.jsxs)("div",{id:"feature_card_middletext",children:[(0,r.jsx)(n.Z,{width:"100%",height:"20px"}),(0,r.jsx)(n.Z,{width:"100%",height:"16px"})]})]}),(0,r.jsx)("div",{className:"card-footer",id:"skeleton_card_footer",children:(0,r.jsx)("div",{className:"row",children:Array.from({length:4}).map((e,t)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 ",children:(0,r.jsxs)("div",{id:"skeleton_footer_content",children:[(0,r.jsx)(n.Z,{width:"20px",height:"16px"}),(0,r.jsx)(n.Z,{width:"80px",height:"16px"})]},t)},t))})})]})})}},78269:function(e,t,a){"use strict";a.d(t,{Fl:function(){return n},i1:function(){return r}});let r=["/user/dashboard/","/user/advertisement/","/user/properties/","/user/subscription/","/user/transaction-history/"],n=["/user/chat/","/user-register/","/user/profile/","/user/favorites-properties/"]},9008:function(e,t,a){e.exports=a(42636)},39332:function(e,t,a){e.exports=a(31414)},11358:function(e,t,a){var r;e.exports=(r=a(67294),(()=>{var e={703:(e,t,a)=>{"use strict";var r=a(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,s){if(s!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=r}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";a.r(n),a.d(n,{default:()=>b});var e=a(98),t=a.n(e),r=a(697),i=a.n(r);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,m=e.ariaLabel||"Page "+n+(p?" "+p:""),h=null;return i&&(h="page",m=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:d?void 0:"button",className:r,href:d,tabIndex:i?"-1":"0","aria-label":m,"aria-current":h,onKeyPress:u},c(u)),g(n)))};function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var c=function(e){var a=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener;return t().createElement("li",{className:n||"break"},t().createElement("a",l({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},o(s)),a))};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}c.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=m(i);if(r){var a=m(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function i(e){var a,r;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),h(f(a=n.call(this,e)),"handlePreviousPage",function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})}),h(f(a),"handleNextPage",function(e){var t=a.state.selected,r=a.props.pageCount;a.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0})}),h(f(a),"handlePageSelected",function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)}),h(f(a),"handlePageChange",function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))}),h(f(a),"getEventListener",function(e){return h({},a.props.eventListener,e)}),h(f(a),"handleClick",function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=n.isNext,o=n.isBreak,l=n.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var c=a.state.selected,u=a.props.onClick,d=r;if(u){var p=u({index:t,selected:c,nextSelectedPage:r,event:e,isPrevious:void 0!==i&&i,isNext:void 0!==s&&s,isBreak:void 0!==o&&o,isActive:void 0!==l&&l});if(!1===p)return;Number.isInteger(p)&&(d=p)}void 0!==d&&a.handlePageChange(d)}),h(f(a),"handleBreakClick",function(e,t){var r=a.state.selected;a.handleClick(t,e,r<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})}),h(f(a),"callCallback",function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})}),h(f(a),"callActiveCallback",function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})}),h(f(a),"getElementPageRel",function(e){var t=a.state.selected,r=a.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?n:void 0}),h(f(a),"pagination",function(){var e=[],r=a.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,u=r.breakLinkClassName,d=r.breakAriaLabels,p=a.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var f=n/2,m=n-f;p>i-n/2?f=n-(m=i-p):p<n/2&&(m=n-(f=p));var h,v,b=function(e){return a.getPageElement(e)},x=[];for(h=0;h<i;h++){var y=h+1;if(y<=s)x.push({type:"page",index:h,display:b(h)});else if(y>i-s)x.push({type:"page",index:h,display:b(h)});else if(h>=p-f&&h<=p+(0===p&&n>1?m-1:m))x.push({type:"page",index:h,display:b(h)});else if(o&&x.length>0&&x[x.length-1].display!==v&&(n>0||s>0)){var A=h<p?d.backward:d.forward;v=t().createElement(c,{key:h,breakAriaLabel:A,breakLabel:o,breakClassName:l,breakLinkClassName:u,breakHandler:a.handleBreakClick.bind(null,h),getEventListener:a.getEventListener}),x.push({type:"break",index:h,display:v})}}x.forEach(function(t,a){var r=t;"break"===t.type&&x[a-1]&&"page"===x[a-1].type&&x[a+1]&&"page"===x[a+1].type&&x[a+1].index-x[a-1].index<=2&&(r={type:"page",index:t.index,display:b(t.index)}),e.push(r.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:r},a}return a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,l=r.activeLinkClassName,c=r.extraAriaContext,u=r.pageLabelBuilder;return t().createElement(o,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:l,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,r=a.disabledClassName,n=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,d=a.previousLinkClassName,g=a.previousAriaLabel,f=a.prevRel,m=a.nextLabel,h=a.nextClassName,v=a.nextLinkClassName,b=a.nextAriaLabel,x=a.nextRel,y=this.state.selected,A=0===y,j=y===i-1,_="".concat(u(c)).concat(A?" ".concat(u(r)):""),C="".concat(u(h)).concat(j?" ".concat(u(r)):""),P="".concat(u(d)).concat(A?" ".concat(u(n)):""),k="".concat(u(v)).concat(j?" ".concat(u(n)):"");return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:_},t().createElement("a",p({className:P,href:this.getElementHref(y-1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":A?"true":"false","aria-label":g,rel:f},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:C},t().createElement("a",p({className:k,href:this.getElementHref(y+1),tabIndex:j?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":j?"true":"false","aria-label":b,rel:x},this.getEventListener(this.handleNextPage)),m)))}}],function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),i}(e.Component);h(v,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),h(v,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let b=v})(),n})())},50549:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(67294);let n=r.createContext({});function i({count:e=1,wrapper:t,className:a,containerClassName:i,containerTestId:s,circle:o=!1,style:l,...c}){var u,d,p;let g=r.useContext(n),f={...c};for(let[e,t]of Object.entries(c))void 0===t&&delete f[e];let m={...g,...f,circle:o},h={...l,...function({baseColor:e,highlightColor:t,width:a,height:r,borderRadius:n,circle:i,direction:s,duration:o,enableAnimation:l=!0}){let c={};return"rtl"===s&&(c["--animation-direction"]="reverse"),"number"==typeof o&&(c["--animation-duration"]=`${o}s`),l||(c["--pseudo-element-display"]="none"),("string"==typeof a||"number"==typeof a)&&(c.width=a),("string"==typeof r||"number"==typeof r)&&(c.height=r),("string"==typeof n||"number"==typeof n)&&(c.borderRadius=n),i&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==t&&(c["--highlight-color"]=t),c}(m)},v="react-loading-skeleton";a&&(v+=` ${a}`);let b=null!==(u=m.inline)&&void 0!==u&&u,x=[],y=Math.ceil(e);for(let t=0;t<y;t++){let a=h;if(y>e&&t===y-1){let t=null!==(d=a.width)&&void 0!==d?d:"100%",r=e%1,n="number"==typeof t?t*r:`calc(${t} * ${r})`;a={...a,width:n}}let n=r.createElement("span",{className:v,style:a,key:t},"‌");b?x.push(n):x.push(r.createElement(r.Fragment,{key:t},n,r.createElement("br",null)))}return r.createElement("span",{className:i,"data-testid":s,"aria-live":"polite","aria-busy":null===(p=m.enableAnimation)||void 0===p||p},t?x.map((e,a)=>r.createElement(t,{key:a},e)):x)}}},function(e){e.O(0,[5937,8166,4617,4980,3874,3609,9401,5675,913,631,1664,3789,155,5529,6958,7545,2610,8258,354,9774,2888,179],function(){return e(e.s=63248)}),_N_E=e.O()}]);