(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6545],{71565:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/advertisement",function(){return n(20131)}])},20131:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var s=n(85893),i=n(34774),a=n(67294),r=n(7906),o=n(295),l=n(53252),c=n(72882),p=n(53184),d=n(53816),u=n(90629),h=n(51183);n(86501);var m=n(82267),x=n(9473),g=n(82618),y=n(69998),f=n(89583),j=n(24404),v=n(25789),_=n(25675),w=n.n(_),T=n(5152),b=n.n(T);let H=b()(()=>Promise.all([n.e(5937),n.e(8166),n.e(913),n.e(631),n.e(1664),n.e(6284),n.e(583),n.e(8158),n.e(9026),n.e(173)]).then(n.bind(n,9026)),{ssr:!1}),N=()=>{let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(!1),[_,T]=(0,a.useState)(0),[b,N]=(0,a.useState)(0),[k,Z]=(0,a.useState)(0),S=(0,x.v9)(e=>e.User_signup),C=S&&S.data?S.data.data.id:null,E=(0,x.v9)(m.vV),P=E&&E.currency_symbol,B=(0,x.v9)(v.iT);(0,a.useEffect)(()=>{},[B]),(0,a.useEffect)(()=>{i(!0),(0,h.RO)({offset:k.toString(),limit:"8",current_user:S?C:"",users_promoted:"1",onSuccess:e=>{T(e.total),N(e.total_clicks);let n=e.data;i(!1),t(n)},onError:e=>{i(!1),console.log(e)}})},[k,S]);let I=e=>{let t=8*e.selected;Z(t),window.scrollTo(0,0)};return(0,s.jsx)(H,{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"tranction_title",children:(0,s.jsx)("h1",{children:(0,j.Iu)("myAdvertisement")})}),(0,s.jsxs)("div",{className:"table_content card bg-white",children:[(0,s.jsx)(c.Z,{component:u.Z,sx:{background:"#fff",padding:"10px"},children:(0,s.jsxs)(r.Z,{sx:{minWidth:650},"aria-label":"caption table",children:[(0,s.jsx)(p.Z,{sx:{background:"#f5f5f5"},children:(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(l.Z,{sx:{fontWeight:"600"},children:(0,j.Iu)("listingTitle")}),(0,s.jsx)(l.Z,{sx:{fontWeight:"600"},align:"center",children:(0,j.Iu)("status")}),(0,s.jsx)(l.Z,{sx:{fontWeight:"600"},align:"center",children:(0,j.Iu)("action")})]})}),(0,s.jsx)(o.Z,{children:n?(0,s.jsx)(d.Z,{children:(0,s.jsx)(l.Z,{colSpan:6,align:"center",children:(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})})}):e.length>0?e.map((e,t)=>(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(l.Z,{component:"th",scope:"row",sx:{width:"40%"},children:(0,s.jsxs)("div",{className:"card",id:"listing_card",children:[(0,s.jsxs)("div",{className:"listing_card_img",children:[(0,s.jsx)(w(),{loading:"lazy",src:e.title_image,alt:"no_img",id:"main_listing_img",width:150,height:0,style:{height:"auto"}}),(0,s.jsx)("span",{className:"listing_type_feature_tag",children:(0,s.jsx)(f.CvY,{})})]}),(0,s.jsxs)("div",{className:"listing_card_body",children:[(0,s.jsx)("span",{className:"listing_prop_title",children:e.title}),(0,s.jsxs)("span",{className:"listing_prop_loc",children:[e.city," ",e.state," ",e.country]}),(0,s.jsxs)("span",{className:"listing_prop_pirce",children:[P," ",e.price]})]})]})}),(0,s.jsx)(l.Z,{align:"center",children:0===e.advertisement[0].status?(0,s.jsx)("span",{className:"active_status",children:(0,j.Iu)("approved")}):1===e.advertisement[0].status?(0,s.jsx)("span",{className:"panding_status",children:(0,j.Iu)("pending")}):(0,s.jsx)("span",{className:"inactive_status",children:(0,j.Iu)("rejected")})}),(0,s.jsx)(l.Z,{align:"center",children:e.advertisement[0].type})]},t)):(0,s.jsx)(d.Z,{children:(0,s.jsx)(l.Z,{colSpan:6,align:"center",children:(0,s.jsx)("p",{children:(0,j.Iu)("noDataAvailabe")})})})})]})}),e.length>0?(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)(g.Z,{pageCount:Math.ceil(_/8),onPageChange:I})}):null]})]})})},k=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{title:"",description:"",keywords:"",ogImage:"",pathName:""}),(0,s.jsx)(N,{})]});var Z=k},69998:function(e,t,n){"use strict";var s=n(85893);n(67294);let i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"loader-container",children:(0,s.jsx)("div",{className:"loader"})})});t.Z=i},82618:function(e,t,n){"use strict";var s=n(85893);n(67294);var i=n(11358),a=n.n(i);let r=e=>{let{pageCount:t,onPageChange:n}=e;return(0,s.jsx)("div",{children:(0,s.jsx)(a(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:n,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})};t.Z=r},34774:function(e,t,n){"use strict";var s=n(85893),i=n(9008),a=n.n(i);let r=e=>{let{title:t,description:n,keywords:i,ogImage:r,pathName:o}=e;return(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:t||"Comrades Sollutions | Empower Your  Business"}),(0,s.jsx)("meta",{name:"name",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,s.jsx)("meta",{name:"description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"keywords",content:i||"Unique Properties Search,Tailored Real Estate Experiences,Exclusive Property Deals,Personalised Realty Services,Seamless Property Transactions,Prime Residential Properties,Bespoke Property Search,Exceptional Real Estate Guidance,,Premium Housing Options,Innovative Property Solutions"}),(0,s.jsx)("meta",{name:"image",content:r||null}),(0,s.jsx)("meta",{property:"og:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,s.jsx)("meta",{property:"og:description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{property:"og:image",content:r||null}),(0,s.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,s.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,s.jsx)("meta",{property:"og:image:height",content:"608"}),(0,s.jsx)("meta",{property:"og:url",content:o||"Kabu Comrades"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{name:"twitter:title",content:t||"Comrades Sollutions | Empower Your  Business"}),(0,s.jsx)("meta",{name:"twitter:description",content:n||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"twitter:image",content:r||null}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("link",{rel:"canonical",href:"".concat("https://ebrokerweb.wrteam.me")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})};t.Z=r},51183:function(e,t,n){"use strict";n.d(t,{$z:function(){return d},A2:function(){return T},BP:function(){return b},CV:function(){return C},L:function(){return N},LU:function(){return m},MV:function(){return v},NJ:function(){return g},PQ:function(){return R},Q3:function(){return E},RO:function(){return o},Se:function(){return _},TY:function(){return r},Zy:function(){return B},bM:function(){return H},cZ:function(){return f},dG:function(){return y},gC:function(){return j},gL:function(){return x},gj:function(){return L},gq:function(){return w},lb:function(){return k},li:function(){return l},nZ:function(){return I},p4:function(){return Z},pw:function(){return p},sR:function(){return u},v7:function(){return P},vq:function(){return c},wN:function(){return h},zK:function(){return S}});var s=n(49824),i=n(41240),a=n(2711);let r=e=>{let{userid:t="",name:n="",email:r="",mobile:o="",type:l="",address:c="",firebase_id:p="",logintype:d="",profile:u="",latitude:h="",longitude:m="",about_me:x="",facebook_id:g="",twiiter_id:y="",instagram_id:f="",pintrest_id:j="",fcm_id:v="",notification:_="",city:w="",state:T="",country:b="",onSuccess:H=()=>{},onError:N=()=>{},onStart:k=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.LL)(t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T,b),displayToast:!1,onStart:k,onSuccess:H,onError:N}))},o=e=>{let{promoted:t="",top_rated:n="",id:r="",category_id:o="",most_liked:l="",city:c="",get_simiilar:p="",offset:d="",limit:u="",current_user:h="",property_type:m="",max_price:x="",min_price:g="",posted_since:y="",state:f="",country:j="",search:v="",userid:_="",users_promoted:w="",slug_id:T="",onSuccess:b=()=>{},onError:H=()=>{},onStart:N=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.uC)(t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T),displayToast:!1,onStart:N,onSuccess:b,onError:H}))},l=(e,t,n,r,o,l,c)=>{i.h.dispatch((0,a.pH)({...(0,s.wD)(e,t,n,r),displayToast:!1,onStart:c,onSuccess:o,onError:l}))},c=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.dB)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},p=(e,t,n,r,o)=>{i.h.dispatch((0,a.pH)({...(0,s.IR)(e,t),displayToast:!1,onStart:o,onSuccess:n,onError:r}))},d=(e,t,n,r,o,l,c,p)=>{i.h.dispatch((0,a.pH)({...(0,s.Ub)(e,t,n,r,o),displayToast:!1,onStart:p,onSuccess:l,onError:c}))},u=(e,t,n,r,o)=>{i.h.dispatch((0,a.pH)({...(0,s.YE)(e,t),displayToast:!1,onStart:o,onSuccess:n,onError:r}))},h=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.EV)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},m=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.Rs)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},x=(e,t,n,r,o,l,c,p,d,u,h,m,x,g)=>{i.h.dispatch((0,a.pH)({...(0,s.Gl)(e,t,n,r,o,l,c,p,d,u,h),displayToast:!1,onStart:g,onSuccess:m,onError:x}))},g=(e,t,n,r)=>{i.h.dispatch((0,a.pH)({...(0,s.B1)(e),displayToast:!1,onStart:r,onSuccess:t,onError:n}))},y=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.hd)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},f=(e,t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T,b,H,N,k,Z,S)=>{i.h.dispatch((0,a.pH)({...(0,s.wO)(e,t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T,b,H,N),displayToast:!1,onStart:S,onSuccess:k,onError:Z}))},j=(e,t,n,r)=>{i.h.dispatch((0,a.pH)({...(0,s.Qc)(e),displayToast:!1,onStart:r,onSuccess:t,onError:n}))},v=(e,t,n,r,o)=>{i.h.dispatch((0,a.pH)({...(0,s.Gn)(e,t),displayToast:!1,onStart:o,onSuccess:n,onError:r}))},_=(e,t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T,b,H,N,k,Z,S,C,E)=>{i.h.dispatch((0,a.pH)({...(0,s.xV)(e,t,n,r,o,l,c,p,d,u,h,m,x,g,y,f,j,v,_,w,T,b,H,N,k,Z),displayToast:!1,onStart:E,onSuccess:S,onError:C}))},w=(e,t,n,r)=>{i.h.dispatch((0,a.pH)({...(0,s.E2)(e),displayToast:!1,onStart:r,onSuccess:t,onError:n}))},T=(e,t,n,r,o,l,c)=>{i.h.dispatch((0,a.pH)({...(0,s.Jq)(e,t,n,r),displayToast:!1,onStart:c,onSuccess:o,onError:l}))},b=(e,t,n,r,o)=>{i.h.dispatch((0,a.pH)({...(0,s.kd)(e,t),displayToast:!1,onStart:o,onSuccess:n,onError:r}))},H=(e,t,n,r,o,l)=>{i.h.dispatch((0,a.pH)({...(0,s.vK)(e,t,n),displayToast:!1,onStart:l,onSuccess:r,onError:o}))},N=(e,t,n,r)=>{i.h.dispatch((0,a.pH)({...(0,s.DS)(e),displayToast:!1,onStart:r,onSuccess:t,onError:n}))},k=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.Ag)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},Z=(e,t,n,r,o,l,c)=>{i.h.dispatch((0,a.pH)({...(0,s.b6)(e,t,n,r),displayToast:!1,onStart:c,onSuccess:o,onError:l}))},S=(e,t,n,r,o,l,c,p,d)=>{i.h.dispatch((0,a.pH)({...(0,s.bG)(e,t,n,r,o,l),displayToast:!1,onStart:d,onSuccess:c,onError:p}))},C=(e,t,n,r,o,l)=>{i.h.dispatch((0,a.pH)({...(0,s.K4)(e,t,n),displayToast:!1,onStart:l,onSuccess:r,onError:o}))},E=(e,t,n,r)=>{i.h.dispatch((0,a.pH)({...(0,s.h8)(e),displayToast:!1,onStart:r,onSuccess:t,onError:n}))},P=(e,t,n)=>{i.h.dispatch((0,a.pH)({...(0,s.HH)(),displayToast:!1,onStart:n,onSuccess:e,onError:t}))},B=e=>{let{reason_id:t="",property_id:n="",other_message:r="",onSuccess:o=()=>{},onError:l=()=>{},onStart:c=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.cq)(t,n,r),displayToast:!1,onStart:c,onSuccess:o,onError:l}))},I=e=>{let{city:t="",state:n="",type:r="",onSuccess:o=()=>{},onError:l=()=>{},onStart:c=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.QQ)(t,n,r),displayToast:!1,onStart:c,onSuccess:o,onError:l}))},L=e=>{let{slug_id:t="",onSuccess:n=()=>{},onError:r=()=>{},onStart:o=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.DV)(t),displayToast:!1,onStart:o,onSuccess:n,onError:r}))},R=e=>{let{property_id:t="",status:n="",onSuccess:r=()=>{},onError:o=()=>{},onStart:l=()=>{}}=e;i.h.dispatch((0,a.pH)({...(0,s.Bh)(t,n),displayToast:!1,onStart:l,onSuccess:r,onError:o}))}}},function(e){e.O(0,[5445,5675,8851,7069,3798,9774,2888,179],function(){return e(e.s=71565)}),_N_E=e.O()}]);