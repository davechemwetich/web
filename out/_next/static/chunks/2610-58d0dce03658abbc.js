"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2610],{76529:function(e,t,o){o.d(t,{J:function(){return s}});var n=o(67294),r=o(56790),i=o(4173),l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let a=n.createContext(null),s=n.forwardRef((e,t)=>{let{children:o}=e,s=l(e,["children"]),c=n.useContext(a),d=n.useMemo(()=>Object.assign(Object.assign({},c),s),[c,s.prefixCls,s.mode,s.selectable,s.rootClassName]),m=(0,r.t4)(o),u=(0,r.x1)(t,m?o.ref:null);return n.createElement(a.Provider,{value:d},n.createElement(i.BR,null,m?n.cloneElement(o,{ref:u}):o))});t.Z=a},82610:function(e,t,o){o.d(t,{Z:function(){return G}});var n=o(67294),r=o(72512),i=o(93967),l=o.n(i);let a=n.createContext({});var s=o(89705),c=o(56790),d=o(98423),m=o(33603),u=o(96159),g=o(53124),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let b=e=>{let{prefixCls:t,className:o,dashed:i}=e,a=p(e,["prefixCls","className","dashed"]),{getPrefixCls:s}=n.useContext(g.E_),c=s("menu",t),d=l()({[`${c}-item-divider-dashed`]:!!i},o);return n.createElement(r.iz,Object.assign({className:d},a))};var $=o(50344),f=o(5529);let v=(0,n.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),h=e=>{var t;let{className:o,children:i,icon:s,title:c,danger:m}=e,{prefixCls:g,firstLevel:p,direction:b,disableMenuItemTitleTooltip:h,inlineCollapsed:I}=n.useContext(v),{siderCollapsed:C}=n.useContext(a),B=c;void 0===c?B=p?i:"":!1===c&&(B="");let y={title:B};C||I||(y.title=null,y.open=!1);let O=(0,$.Z)(i).length,S=n.createElement(r.ck,Object.assign({},(0,d.Z)(e,["title","icon","danger"]),{className:l()({[`${g}-item-danger`]:m,[`${g}-item-only-child`]:(s?O+1:O)===1},o),title:"string"==typeof c?c:void 0}),(0,u.Tm)(s,{className:l()((0,u.l$)(s)?null===(t=s.props)||void 0===t?void 0:t.className:"",`${g}-item-icon`)}),(e=>{let t=n.createElement("span",{className:`${g}-title-content`},i);return(!s||(0,u.l$)(i)&&"span"===i.type)&&i&&e&&p&&"string"==typeof i?n.createElement("div",{className:`${g}-inline-collapsed-noicon`},i.charAt(0)):t})(I));return h||(S=n.createElement(f.Z,Object.assign({},y,{placement:"rtl"===b?"left":"right",overlayClassName:`${g}-inline-collapsed-tooltip`}),S)),S};var I=o(87263);let C=e=>{var t;let o;let{popupClassName:i,icon:a,title:s,theme:c}=e,m=n.useContext(v),{prefixCls:g,inlineCollapsed:p,theme:b}=m,$=(0,r.Xl)();if(a){let e=(0,u.l$)(s)&&"span"===s.type;o=n.createElement(n.Fragment,null,(0,u.Tm)(a,{className:l()((0,u.l$)(a)?null===(t=a.props)||void 0===t?void 0:t.className:"",`${g}-item-icon`)}),e?s:n.createElement("span",{className:`${g}-title-content`},s))}else o=p&&!$.length&&s&&"string"==typeof s?n.createElement("div",{className:`${g}-inline-collapsed-noicon`},s.charAt(0)):n.createElement("span",{className:`${g}-title-content`},s);let f=n.useMemo(()=>Object.assign(Object.assign({},m),{firstLevel:!1}),[m]),[h]=(0,I.Cn)("Menu");return n.createElement(v.Provider,{value:f},n.createElement(r.Wd,Object.assign({},(0,d.Z)(e,["icon"]),{title:o,popupClassName:l()(g,i,`${g}-${c||b}`),popupStyle:{zIndex:h}})))};var B=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o},y=o(76529),O=o(14947),S=o(10274),x=o(14747),k=o(33507),w=o(67771),j=o(50438),H=o(91945),E=o(45503);let T=e=>{let{componentCls:t,motionDurationSlow:o,horizontalLineHeight:n,colorSplit:r,lineWidth:i,lineType:l,itemPaddingInline:a}=e;return{[`${t}-horizontal`]:{lineHeight:n,border:0,borderBottom:`${(0,O.bf)(i)} ${l} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:`border-color ${o},background ${o}`},[`${t}-submenu-arrow`]:{display:"none"}}}},z=e=>{let{componentCls:t,menuArrowOffset:o,calc:n}=e;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,O.bf)(n(o).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,O.bf)(o)})`}}}}},N=e=>Object.assign({},(0,x.oN)(e)),M=(e,t)=>{let{componentCls:o,itemColor:n,itemSelectedColor:r,groupTitleColor:i,itemBg:l,subMenuItemBg:a,itemSelectedBg:s,activeBarHeight:c,activeBarWidth:d,activeBarBorderWidth:m,motionDurationSlow:u,motionEaseInOut:g,motionEaseOut:p,itemPaddingInline:b,motionDurationMid:$,itemHoverColor:f,lineType:v,colorSplit:h,itemDisabledColor:I,dangerItemColor:C,dangerItemHoverColor:B,dangerItemSelectedColor:y,dangerItemActiveBg:S,dangerItemSelectedBg:x,popupBg:k,itemHoverBg:w,itemActiveBg:j,menuSubMenuBg:H,horizontalItemSelectedColor:E,horizontalItemSelectedBg:T,horizontalItemBorderRadius:z,horizontalItemHoverBg:M}=e;return{[`${o}-${t}, ${o}-${t} > ${o}`]:{color:n,background:l,[`&${o}-root:focus-visible`]:Object.assign({},N(e)),[`${o}-item-group-title`]:{color:i},[`${o}-submenu-selected`]:{[`> ${o}-submenu-title`]:{color:r}},[`${o}-item, ${o}-submenu-title`]:{color:n,[`&:not(${o}-item-disabled):focus-visible`]:Object.assign({},N(e))},[`${o}-item-disabled, ${o}-submenu-disabled`]:{color:`${I} !important`},[`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]:{[`&:hover, > ${o}-submenu-title:hover`]:{color:f}},[`&:not(${o}-horizontal)`]:{[`${o}-item:not(${o}-item-selected)`]:{"&:hover":{backgroundColor:w},"&:active":{backgroundColor:j}},[`${o}-submenu-title`]:{"&:hover":{backgroundColor:w},"&:active":{backgroundColor:j}}},[`${o}-item-danger`]:{color:C,[`&${o}-item:hover`]:{[`&:not(${o}-item-selected):not(${o}-submenu-selected)`]:{color:B}},[`&${o}-item:active`]:{background:S}},[`${o}-item a`]:{"&, &:hover":{color:"inherit"}},[`${o}-item-selected`]:{color:r,[`&${o}-item-danger`]:{color:y},"a, a:hover":{color:"inherit"}},[`& ${o}-item-selected`]:{backgroundColor:s,[`&${o}-item-danger`]:{backgroundColor:x}},[`&${o}-submenu > ${o}`]:{backgroundColor:H},[`&${o}-popup > ${o}`]:{backgroundColor:k},[`&${o}-submenu-popup > ${o}`]:{backgroundColor:k},[`&${o}-horizontal`]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{[`> ${o}-item, > ${o}-submenu`]:{top:m,marginTop:e.calc(m).mul(-1).equal(),marginBottom:0,borderRadius:z,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:`${(0,O.bf)(c)} solid transparent`,transition:`border-color ${u} ${g}`,content:'""'},"&:hover, &-active, &-open":{background:M,"&::after":{borderBottomWidth:c,borderBottomColor:E}},"&-selected":{color:E,backgroundColor:T,"&:hover":{backgroundColor:T},"&::after":{borderBottomWidth:c,borderBottomColor:E}}}}),[`&${o}-root`]:{[`&${o}-inline, &${o}-vertical`]:{borderInlineEnd:`${(0,O.bf)(m)} ${v} ${h}`}},[`&${o}-inline`]:{[`${o}-sub${o}-inline`]:{background:a},[`${o}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,O.bf)(d)} solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:`transform ${$} ${p},opacity ${$} ${p}`,content:'""'},[`&${o}-item-danger`]:{"&::after":{borderInlineEndColor:y}}},[`${o}-selected, ${o}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:`transform ${$} ${g},opacity ${$} ${g}`}}}}}},R=e=>{let{componentCls:t,itemHeight:o,itemMarginInline:n,padding:r,menuArrowSize:i,marginXS:l,itemMarginBlock:a,itemWidth:s}=e,c=e.calc(i).add(r).add(l).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:o,lineHeight:(0,O.bf)(o),paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:a,width:s},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:o,lineHeight:(0,O.bf)(o)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:c}}},D=e=>{let{componentCls:t,iconCls:o,itemHeight:n,colorTextLightSolid:r,dropdownWidth:i,controlHeightLG:l,motionDurationMid:a,motionEaseOut:s,paddingXL:c,itemMarginInline:d,fontSizeLG:m,motionDurationSlow:u,paddingXS:g,boxShadowSecondary:p,collapsedWidth:b,collapsedIconSize:$}=e,f={height:n,lineHeight:(0,O.bf)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},R(e))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},R(e)),{boxShadow:p})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${(0,O.bf)(e.calc(l).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:`border-color ${u},background ${u},padding ${a} ${s}`,[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:f,[`& ${t}-item-group-title`]:{paddingInlineStart:c}},[`${t}-item`]:f}},{[`${t}-inline-collapsed`]:{width:b,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:m,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,O.bf)(e.calc(m).div(2).equal())} - ${(0,O.bf)(d)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${o}`]:{margin:0,fontSize:$,lineHeight:(0,O.bf)(n),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${o}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${o}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},x.vS),{paddingInline:g})}}]},A=e=>{let{componentCls:t,motionDurationSlow:o,motionDurationMid:n,motionEaseInOut:r,motionEaseOut:i,iconCls:l,iconSize:a,iconMarginInlineEnd:s}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:`border-color ${o},background ${o},padding ${o} ${r}`,[`${t}-item-icon, ${l}`]:{minWidth:a,fontSize:a,transition:`font-size ${n} ${i},margin ${o} ${r},color ${o}`,"+ span":{marginInlineStart:s,opacity:1,transition:`opacity ${o} ${r},margin ${o},color ${o}`}},[`${t}-item-icon`]:Object.assign({},(0,x.Ro)()),[`&${t}-item-only-child`]:{[`> ${l}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},P=e=>{let{componentCls:t,motionDurationSlow:o,motionEaseInOut:n,borderRadius:r,menuArrowSize:i,menuArrowOffset:l}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${o} ${n}, opacity ${o}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(i).mul(.6).equal(),height:e.calc(i).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:r,transition:`background ${o} ${n},transform ${o} ${n},top ${o} ${n},color ${o} ${n}`,content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,O.bf)(e.calc(l).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,O.bf)(l)})`}}}}},W=e=>{let{antCls:t,componentCls:o,fontSize:n,motionDurationSlow:r,motionDurationMid:i,motionEaseInOut:l,paddingXS:a,padding:s,colorSplit:c,lineWidth:d,zIndexPopup:m,borderRadiusLG:u,subMenuItemBorderRadius:g,menuArrowSize:p,menuArrowOffset:b,lineType:$,groupTitleLineHeight:f,groupTitleFontSize:v}=e;return[{"":{[`${o}`]:Object.assign(Object.assign({},(0,x.dF)()),{"&-hidden":{display:"none"}})},[`${o}-submenu-hidden`]:{display:"none"}},{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,x.Wf)(e)),(0,x.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${o}-item`]:{flex:"none"}},[`${o}-item, ${o}-submenu, ${o}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${o}-item-group-title`]:{padding:`${(0,O.bf)(a)} ${(0,O.bf)(s)}`,fontSize:v,lineHeight:f,transition:`all ${r}`},[`&-horizontal ${o}-submenu`]:{transition:`border-color ${r} ${l},background ${r} ${l}`},[`${o}-submenu, ${o}-submenu-inline`]:{transition:`border-color ${r} ${l},background ${r} ${l},padding ${i} ${l}`},[`${o}-submenu ${o}-sub`]:{cursor:"initial",transition:`background ${r} ${l},padding ${r} ${l}`},[`${o}-title-content`]:{transition:`color ${r}`,[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${o}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${o}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:$,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),A(e)),{[`${o}-item-group`]:{[`${o}-item-group-list`]:{margin:0,padding:0,[`${o}-item, ${o}-submenu-title`]:{paddingInline:`${(0,O.bf)(e.calc(n).mul(2).equal())} ${(0,O.bf)(s)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:m,borderRadius:u,boxShadow:"none",transformOrigin:"0 0",[`&${o}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${o}`]:Object.assign(Object.assign(Object.assign({borderRadius:u},A(e)),P(e)),{[`${o}-item, ${o}-submenu > ${o}-submenu-title`]:{borderRadius:g},[`${o}-submenu-title::after`]:{transition:`transform ${r} ${l}`}})},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:e.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:e.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:e.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:e.paddingXS}}}),P(e)),{[`&-inline-collapsed ${o}-submenu-arrow,
        &-inline ${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,O.bf)(b)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,O.bf)(e.calc(b).mul(-1).equal())})`}},[`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]:{transform:`translateY(${(0,O.bf)(e.calc(p).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,O.bf)(e.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,O.bf)(b)})`}}})},{[`${t}-layout-header`]:{[o]:{lineHeight:"inherit"}}}]},q=e=>{var t,o,n;let{colorPrimary:r,colorError:i,colorTextDisabled:l,colorErrorBg:a,colorText:s,colorTextDescription:c,colorBgContainer:d,colorFillAlter:m,colorFillContent:u,lineWidth:g,lineWidthBold:p,controlItemBgActive:b,colorBgTextHover:$,controlHeightLG:f,lineHeight:v,colorBgElevated:h,marginXXS:I,padding:C,fontSize:B,controlHeightSM:y,fontSizeLG:O,colorTextLightSolid:x,colorErrorHover:k}=e,w=null!==(t=e.activeBarWidth)&&void 0!==t?t:0,j=null!==(o=e.activeBarBorderWidth)&&void 0!==o?o:g,H=null!==(n=e.itemMarginInline)&&void 0!==n?n:e.marginXXS,E=new S.C(x).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:r,horizontalItemHoverColor:r,colorGroupTitle:c,groupTitleColor:c,colorItemTextSelected:r,itemSelectedColor:r,colorItemTextSelectedHorizontal:r,horizontalItemSelectedColor:r,colorItemBg:d,itemBg:d,colorItemBgHover:$,itemHoverBg:$,colorItemBgActive:u,itemActiveBg:b,colorSubItemBg:m,subMenuItemBg:m,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:w,colorActiveBarHeight:p,activeBarHeight:p,colorActiveBarBorderSize:g,activeBarBorderWidth:j,colorItemTextDisabled:l,itemDisabledColor:l,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:a,dangerItemActiveBg:a,colorDangerItemBgSelected:a,dangerItemSelectedBg:a,itemMarginInline:H,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:f,groupTitleLineHeight:v,collapsedWidth:2*f,popupBg:h,itemMarginBlock:I,itemPaddingInline:C,horizontalLineHeight:`${1.15*f}px`,iconSize:B,iconMarginInlineEnd:y-B,collapsedIconSize:O,groupTitleFontSize:B,darkItemDisabledColor:new S.C(x).setAlpha(.25).toRgbString(),darkItemColor:E,darkDangerItemColor:i,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:x,darkItemSelectedBg:r,darkDangerItemSelectedBg:i,darkItemHoverBg:"transparent",darkGroupTitleColor:E,darkItemHoverColor:x,darkDangerItemHoverColor:k,darkDangerItemSelectedColor:x,darkDangerItemActiveBg:i,itemWidth:w?`calc(100% + ${j}px)`:`calc(100% - ${2*H}px)`}};var Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=(0,H.I$)("Menu",e=>{let{colorBgElevated:t,colorPrimary:o,colorTextLightSolid:n,controlHeightLG:r,fontSize:i,darkItemColor:l,darkDangerItemColor:a,darkItemBg:s,darkSubMenuItemBg:c,darkItemSelectedColor:d,darkItemSelectedBg:m,darkDangerItemSelectedBg:u,darkItemHoverBg:g,darkGroupTitleColor:p,darkItemHoverColor:b,darkItemDisabledColor:$,darkDangerItemHoverColor:f,darkDangerItemSelectedColor:v,darkDangerItemActiveBg:h,popupBg:I,darkPopupBg:C}=e,B=e.calc(i).div(7).mul(5).equal(),y=(0,E.TS)(e,{menuArrowSize:B,menuHorizontalHeight:e.calc(r).mul(1.15).equal(),menuArrowOffset:e.calc(B).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:I}),O=(0,E.TS)(y,{itemColor:l,itemHoverColor:b,groupTitleColor:p,itemSelectedColor:d,itemBg:s,popupBg:C,subMenuItemBg:c,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:g,itemDisabledColor:$,dangerItemColor:a,dangerItemHoverColor:f,dangerItemSelectedColor:v,dangerItemActiveBg:h,dangerItemSelectedBg:u,menuSubMenuBg:c,horizontalItemSelectedColor:n,horizontalItemSelectedBg:o});return[W(y),T(y),D(y),M(y,"light"),M(O,"dark"),z(y),(0,k.Z)(y),(0,w.oN)(y,"slide-up"),(0,w.oN)(y,"slide-down"),(0,j._y)(y,"zoom-big")]},q,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:o,unitless:{groupTitleLineHeight:!0}});return n(e,t)},X=o(35792),L=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let Y=(0,n.forwardRef)((e,t)=>{var o,i;let a;let p=n.useContext(y.Z),$=p||{},{getPrefixCls:f,getPopupContainer:I,direction:O,menu:S}=n.useContext(g.E_),x=f(),{prefixCls:k,className:w,style:j,theme:H="light",expandIcon:E,_internalDisableMenuItemTitleTooltip:T,inlineCollapsed:z,siderCollapsed:N,items:M,children:R,rootClassName:D,mode:A,selectable:P,onClick:W,overflowedIndicatorPopupClassName:q}=e,Y=L(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),_=(0,d.Z)(Y,["collapsedWidth"]),G=n.useMemo(()=>M?function e(t){return(t||[]).map((t,o)=>{if(t&&"object"==typeof t){let{label:i,children:l,key:a,type:s}=t,c=B(t,["label","children","key","type"]),d=null!=a?a:`tmp-${o}`;return l||"group"===s?"group"===s?n.createElement(r.BW,Object.assign({key:d},c,{title:i}),e(l)):n.createElement(C,Object.assign({key:d},c,{title:i}),e(l)):"divider"===s?n.createElement(b,Object.assign({key:d},c)):n.createElement(h,Object.assign({key:d},c),i)}return null}).filter(e=>e)}(M):M,[M])||R;null===(o=$.validator)||void 0===o||o.call($,{mode:A});let F=(0,c.zX)(function(){var e;null==W||W.apply(void 0,arguments),null===(e=$.onClick)||void 0===e||e.call($)}),J=$.mode||A,K=null!=P?P:$.selectable,Q=n.useMemo(()=>void 0!==N?N:z,[z,N]),U={horizontal:{motionName:`${x}-slide-up`},inline:(0,m.Z)(x),other:{motionName:`${x}-zoom-big`}},V=f("menu",k||$.prefixCls),ee=(0,X.Z)(V),[et,eo,en]=Z(V,ee,!p),er=l()(`${V}-${H}`,null==S?void 0:S.className,w);if("function"==typeof E)a=E;else if(null===E||!1===E)a=null;else if(null===$.expandIcon||!1===$.expandIcon)a=null;else{let e=null!=E?E:$.expandIcon;a=(0,u.Tm)(e,{className:l()(`${V}-submenu-expand-icon`,(0,u.l$)(e)?null===(i=e.props)||void 0===i?void 0:i.className:"")})}let ei=n.useMemo(()=>({prefixCls:V,inlineCollapsed:Q||!1,direction:O,firstLevel:!0,theme:H,mode:J,disableMenuItemTitleTooltip:T}),[V,Q,O,T,H]);return et(n.createElement(y.Z.Provider,{value:null},n.createElement(v.Provider,{value:ei},n.createElement(r.ZP,Object.assign({getPopupContainer:I,overflowedIndicator:n.createElement(s.Z,null),overflowedIndicatorPopupClassName:l()(V,`${V}-${H}`,q),mode:J,selectable:K,onClick:F},_,{inlineCollapsed:Q,style:Object.assign(Object.assign({},null==S?void 0:S.style),j),className:er,prefixCls:V,direction:O,defaultMotions:U,expandIcon:a,ref:t,rootClassName:l()(D,eo,$.rootClassName,en,ee)}),G))))}),_=(0,n.forwardRef)((e,t)=>{let o=(0,n.useRef)(null),r=n.useContext(a);return(0,n.useImperativeHandle)(t,()=>({menu:o.current,focus:e=>{var t;null===(t=o.current)||void 0===t||t.focus(e)}})),n.createElement(Y,Object.assign({ref:o},e,r))});_.Item=h,_.SubMenu=C,_.Divider=b,_.ItemGroup=r.BW;var G=_},33507:function(e,t){let o=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}});t.Z=o}}]);