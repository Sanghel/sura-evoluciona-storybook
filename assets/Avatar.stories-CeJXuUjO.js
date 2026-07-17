import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{r as l}from"./index-Bc2G9s8g.js";import{c as F}from"./index-YJFJIaKu.js";import{u as P}from"./index-C7P9PB-s.js";import{u as A}from"./index-ByoG_5Py.js";import{P as b}from"./index-D98iFuva.js";import{a as S}from"./utils-BP2HNEMH.js";import"./index-C2Uka6Rc.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";var N={exports:{}},M={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=l;function $(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var B=typeof Object.is=="function"?Object.is:$,W=d.useState,J=d.useEffect,H=d.useLayoutEffect,O=d.useDebugValue;function U(a,e){var r=e(),o=W({inst:{value:r,getSnapshot:e}}),s=o[0].inst,t=o[1];return H(function(){s.value=r,s.getSnapshot=e,h(s)&&t({inst:s})},[a,r,e]),J(function(){return h(s)&&t({inst:s}),a(function(){h(s)&&t({inst:s})})},[a]),O(r),r}function h(a){var e=a.getSnapshot;a=a.value;try{var r=e();return!B(a,r)}catch{return!0}}function K(a,e){return e()}var Q=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K:U;M.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:Q;N.exports=M;var X=N.exports;function Y(){return X.useSyncExternalStore(Z,()=>!0,()=>!1)}function Z(){return()=>{}}var y="Avatar",[aa]=F(y),[ea,_]=aa(y),I=l.forwardRef((a,e)=>{const{__scopeAvatar:r,...o}=a,[s,t]=l.useState("idle");return n.jsx(ea,{scope:r,imageLoadingStatus:s,onImageLoadingStatusChange:t,children:n.jsx(b.span,{...o,ref:e})})});I.displayName=y;var R="AvatarImage",z=l.forwardRef((a,e)=>{const{__scopeAvatar:r,src:o,onLoadingStatusChange:s=()=>{},...t}=a,m=_(R,r),i=ra(o,t),u=P(f=>{s(f),m.onImageLoadingStatusChange(f)});return A(()=>{i!=="idle"&&u(i)},[i,u]),i==="loaded"?n.jsx(b.img,{...t,ref:e,src:o}):null});z.displayName=R;var C="AvatarFallback",T=l.forwardRef((a,e)=>{const{__scopeAvatar:r,delayMs:o,...s}=a,t=_(C,r),[m,i]=l.useState(o===void 0);return l.useEffect(()=>{if(o!==void 0){const u=window.setTimeout(()=>i(!0),o);return()=>window.clearTimeout(u)}},[o]),m&&t.imageLoadingStatus!=="loaded"?n.jsx(b.span,{...s,ref:e}):null});T.displayName=C;function j(a,e){return a?e?(a.src!==e&&(a.src=e),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function ra(a,{referrerPolicy:e,crossOrigin:r}){const o=Y(),s=l.useRef(null),t=o?(s.current||(s.current=new window.Image),s.current):null,[m,i]=l.useState(()=>j(t,a));return A(()=>{i(j(t,a))},[t,a]),A(()=>{const u=q=>()=>{i(q)};if(!t)return;const f=u("loaded"),E=u("error");return t.addEventListener("load",f),t.addEventListener("error",E),e&&(t.referrerPolicy=e),typeof r=="string"&&(t.crossOrigin=r),()=>{t.removeEventListener("load",f),t.removeEventListener("error",E)}},[t,r,e]),m}var D=I,G=z,V=T;const k=l.forwardRef(({className:a,...e},r)=>n.jsx(D,{ref:r,className:S("sura:relative sura:flex sura:shrink-0 sura:overflow-hidden sura:rounded-full",a),...e}));k.displayName=D.displayName;const L=l.forwardRef(({className:a,...e},r)=>n.jsx(G,{ref:r,className:S("sura:aspect-square sura:h-full sura:w-full sura:object-cover",a),...e}));L.displayName=G.displayName;const w=l.forwardRef(({className:a,...e},r)=>n.jsx(V,{ref:r,className:S("sura:flex sura:h-full sura:w-full sura:items-center sura:justify-center sura:rounded-full","sura:bg-sura-aqua sura:text-white sura:text-[11px] sura:font-bold sura:uppercase",a),...e}));w.displayName=V.displayName;const ta={sm:"sura:h-[30px] sura:w-[30px] sura:text-[11px]",md:"sura:h-9 sura:w-9 sura:text-xs",lg:"sura:h-12 sura:w-12 sura:text-sm"};function c({src:a,alt:e,fallback:r,size:o="md",className:s}){return n.jsxs(k,{className:S(ta[o],s),children:[a&&n.jsx(L,{src:a,alt:e}),n.jsx(w,{children:r.slice(0,2).toUpperCase()})]})}c.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},fallback:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[]};L.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[]};const pa={title:"Primitivas/Avatar",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},p={args:{src:"https://i.pravatar.cc/80",alt:"María García",fallback:"MG",size:"md"}},v={args:{fallback:"JR",alt:"Juan Ramírez",size:"md"}},g={render:()=>n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(c,{fallback:"SM",alt:"Small",size:"sm"}),n.jsx(c,{fallback:"MD",alt:"Medium",size:"md"}),n.jsx(c,{fallback:"LG",alt:"Large",size:"lg"})]})},x={render:()=>n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(c,{fallback:"AA",alt:"Ana Aranda"}),n.jsx(c,{fallback:"BL",alt:"Bernardo López"}),n.jsx(c,{src:"https://i.pravatar.cc/80?img=3",alt:"Carlos Mena",fallback:"CM"}),n.jsx(c,{fallback:"DV",alt:"Diana Vargas"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/80",
    alt: "María García",
    fallback: "MG",
    size: "md"
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: "JR",
    alt: "Juan Ramírez",
    size: "md"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar fallback="SM" alt="Small" size="sm" />
      <Avatar fallback="MD" alt="Medium" size="md" />
      <Avatar fallback="LG" alt="Large" size="lg" />
    </div>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar fallback="AA" alt="Ana Aranda" />
      <Avatar fallback="BL" alt="Bernardo López" />
      <Avatar src="https://i.pravatar.cc/80?img=3" alt="Carlos Mena" fallback="CM" />
      <Avatar fallback="DV" alt="Diana Vargas" />
    </div>
}`,...x.parameters?.docs?.source}}};const va=["WithImage","WithFallback","Sizes","Multiple"];export{x as Multiple,g as Sizes,v as WithFallback,p as WithImage,va as __namedExportsOrder,pa as default};
