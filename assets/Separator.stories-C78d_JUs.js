import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as x}from"./index-Bc2G9s8g.js";import{P as N}from"./index-D98iFuva.js";import{a as v}from"./utils-7IX6LjdP.js";import"./index-C2Uka6Rc.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";var f="Separator",p="horizontal",h=["horizontal","vertical"],d=x.forwardRef((r,s)=>{const{decorative:n,orientation:t=p,...l}=r,c=g(t)?t:p,u=n?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return a.jsx(N.div,{"data-orientation":c,...u,...l,ref:s})});d.displayName=f;function g(r){return h.includes(r)}var m=d;const e=x.forwardRef(({className:r,orientation:s="horizontal",decorative:n=!0,...t},l)=>a.jsx(m,{ref:l,decorative:n,orientation:s,className:v("sura:shrink-0 sura:bg-gris-200",s==="horizontal"?"sura:h-px sura:w-full":"sura:h-full sura:w-px",r),...t}));e.displayName=m.displayName;e.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const R={title:"Layout/Separator",tags:["autodocs"]},o={render:()=>a.jsxs("div",{className:"space-y-4 w-64",children:[a.jsx("p",{className:"text-[14px] text-gris-500",children:"Datos personales"}),a.jsx(e,{}),a.jsx("p",{className:"text-[14px] text-gris-500",children:"Datos del vehículo"}),a.jsx(e,{}),a.jsx("p",{className:"text-[14px] text-gris-500",children:"Cobertura seleccionada"})]})},i={render:()=>a.jsxs("div",{className:"sura:flex sura:h-10 sura:items-center sura:gap-4",children:[a.jsx("span",{className:"text-[14px] text-gris-500",children:"Inicio"}),a.jsx(e,{orientation:"vertical",className:"sura:h-full"}),a.jsx("span",{className:"text-[14px] text-gris-500",children:"Mis pólizas"}),a.jsx(e,{orientation:"vertical"}),a.jsx("span",{className:"text-[14px] text-gris-500",children:"Siniestros"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <p className="text-[14px] text-gris-500">Datos personales</p>
      <Separator />
      <p className="text-[14px] text-gris-500">Datos del vehículo</p>
      <Separator />
      <p className="text-[14px] text-gris-500">Cobertura seleccionada</p>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sura:flex sura:h-10 sura:items-center sura:gap-4">
      <span className="text-[14px] text-gris-500">Inicio</span>
      <Separator orientation="vertical" className="sura:h-full" />
      <span className="text-[14px] text-gris-500">Mis pólizas</span>
      <Separator orientation="vertical" />
      <span className="text-[14px] text-gris-500">Siniestros</span>
    </div>
}`,...i.parameters?.docs?.source}}};const D=["Horizontal","Vertical"];export{o as Horizontal,i as Vertical,D as __namedExportsOrder,R as default};
