import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{a as p}from"./utils-7IX6LjdP.js";function l({items:o,className:i,...c}){return e.jsx("nav",{"aria-label":"Ruta de navegación",className:p("sura:flex sura:items-center sura:gap-1.5",i),...c,children:o.map((r,t)=>{const u=t===o.length-1;let a;return u?a=e.jsx("span",{className:"sura:text-[12px] sura:font-semibold sura:text-sura-negro","aria-current":"page",children:r.label}):r.href?a=e.jsx("a",{href:r.href,onClick:r.onClick,className:"sura:text-[12px] sura:font-normal sura:text-gris-400 sura:hover:text-primary sura:transition-colors sura:duration-100 sura:cursor-pointer sura:hover:underline",children:r.label}):r.onClick?a=e.jsx("button",{type:"button",onClick:r.onClick,className:"sura:text-[12px] sura:font-normal sura:text-gris-400 sura:hover:text-primary sura:transition-colors sura:duration-100 sura:cursor-pointer sura:hover:underline",children:r.label}):a=e.jsx("span",{className:"sura:text-[12px] sura:text-gris-400",children:r.label}),e.jsxs(d.Fragment,{children:[t>0&&e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"sura:text-gris-300 sura:shrink-0",children:e.jsx("path",{d:"M4 3L8 6L4 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),a]},`${r.label}-${t}`)})})}l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const f={title:"Navegación/Breadcrumbs",component:l,tags:["autodocs"]},s={args:{items:[{label:"Inicio",onClick:()=>alert("Inicio")},{label:"Mis pólizas",href:"#"},{label:"Auto Premium"}]}},n={args:{items:[{label:"Portal de Agentes",href:"#"},{label:"Cotizador"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Inicio",
      onClick: () => alert("Inicio")
    }, {
      label: "Mis pólizas",
      href: "#"
    }, {
      label: "Auto Premium"
    }]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Portal de Agentes",
      href: "#"
    }, {
      label: "Cotizador"
    }]
  }
}`,...n.parameters?.docs?.source}}};const g=["Default","TwoLevels"];export{s as Default,n as TwoLevels,g as __namedExportsOrder,f as default};
