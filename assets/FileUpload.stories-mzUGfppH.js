import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as g}from"./index-Bc2G9s8g.js";import{a as l}from"./utils-BP2HNEMH.js";import{B as A}from"./Button-B9_Q3Iln.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-DQfP3kMs.js";import"./Icon-B-WG8aI4.js";const w=({className:e})=>r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e,children:r.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),E=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o=g.forwardRef(({value:e,onChange:t,title:i,onDownloadTemplate:b,hint:C,accept:N,multiple:k=!1,disabled:a=!1,appearance:f="default",className:D,...B},T)=>{const[F,h]=g.useState(!1),M=g.useRef(null),S=s=>{const j=s.target.files?.[0]??null;t(j),s.target.value=""},_=s=>{if(s.preventDefault(),h(!1),a)return;const j=s.dataTransfer.files[0]??null;t(j)},q=s=>{s.preventDefault(),a||h(!0)},v=()=>{a||M.current?.click()},y=!e&&!a;return r.jsxs("div",{ref:T,className:l("sura:w-full",D),...B,children:[i&&r.jsxs("div",{children:[r.jsxs("div",{className:"sura:flex sura:items-center sura:justify-between sura:py-3",children:[r.jsxs("button",{type:"button",onClick:v,disabled:a,className:"sura:flex sura:items-center sura:gap-2 sura:text-primary sura:font-bold sura:text-caption sura:uppercase sura:tracking-wide sura:disabled:opacity-50",children:[r.jsx(w,{}),i]}),b&&r.jsxs("button",{type:"button",onClick:b,disabled:a,className:"sura:flex sura:items-center sura:gap-1.5 sura:text-gris-400 sura:text-caption sura:hover:text-primary sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:[r.jsx(E,{}),"Descargar plantilla"]})]}),r.jsx("div",{className:"sura:border-t sura:border-gris-200"})]}),r.jsxs("div",{className:l("sura:flex sura:flex-col sura:items-center sura:justify-center sura:gap-4 sura:py-12 sura:px-8 sura:mt-2","sura:rounded-lg sura:border-2 sura:transition-all sura:duration-200",!e&&"sura:border-dashed",e?"sura:bg-success-2 sura:border-success-alt":F?"sura:bg-info-2 sura:border-primary":f==="primary"?"sura:bg-fondo-7 sura:border-gris-300":"sura:bg-fondo-1 sura:border-gris-200",y&&["sura:group sura:cursor-pointer","sura:hover:border-primary sura:hover:bg-info-2 sura:hover:shadow-sm"],a&&"sura:opacity-50 sura:cursor-not-allowed"),onDragOver:q,onDragLeave:()=>h(!1),onDrop:_,onClick:()=>!e&&!a&&v(),children:[r.jsx("div",{className:l("sura:w-14 sura:h-14 sura:rounded-full sura:bg-white sura:flex sura:items-center sura:justify-center","sura:transition-all sura:duration-200",f==="primary"?"sura:shadow":"sura:shadow-sm",e?"sura:text-success-alt":F||f==="primary"?"sura:text-primary":"sura:text-gris-400",y&&"sura:group-hover:text-primary sura:group-hover:shadow"),children:r.jsx(w,{})}),e?r.jsxs("div",{className:"sura:text-center",children:[r.jsx("p",{className:"sura:text-tool-md sura:font-bold sura:text-sura-negro",children:e.name}),r.jsxs("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:[(e.size/1024).toFixed(0)," KB"]})]}):r.jsxs("div",{className:"sura:text-center",children:[r.jsx("p",{className:l("sura:text-tool-md sura:font-bold sura:text-sura-negro sura:transition-colors sura:duration-200",y&&"sura:group-hover:text-primary"),children:"Arrastra tu archivo o selecciónalo"}),C&&r.jsx("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:C})]}),r.jsxs("div",{className:"sura:flex sura:items-center sura:gap-3",onClick:s=>s.stopPropagation(),children:[r.jsx(A,{type:"button",variant:"outlined",color:"primary",size:"md",disabled:a,onClick:v,children:"Seleccionar archivo"}),r.jsx("button",{type:"button",disabled:a,onClick:()=>t(null),className:"sura:text-caption sura:text-gris-500 sura:hover:text-sura-negro sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:"Quitar"})]}),r.jsx("input",{ref:M,type:"file",accept:N,multiple:k,disabled:a,className:"sura:sr-only",onChange:S})]})]})});o.displayName="FileUpload";o.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{value:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},onDownloadTemplate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hint:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}},composes:["Omit"]};const z={title:"Formularios/FileUpload",component:o,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},title:{control:"text"},hint:{control:"text"}}},n=e=>{const[t,i]=g.useState(null);return r.jsx(o,{...e,value:t,onChange:i})},u={render:e=>r.jsx(n,{...e}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},c={render:e=>r.jsx(o,{...e,value:new File([""],"aplicacion_primas_mayo_2026.xlsx",{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),onChange:()=>{}}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},p={render:e=>r.jsx(n,{...e}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},d={render:e=>r.jsx(n,{...e}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx",onDownloadTemplate:()=>alert("Descargando plantilla...")}},m={render:e=>r.jsx(n,{...e}),args:{hint:"Carga no disponible",disabled:!0}},x={render:e=>r.jsx(n,{...e}),args:{appearance:"primary",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FileUpload {...args} value={new File([""], "aplicacion_primas_mayo_2026.xlsx", {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  })} onChange={() => {}} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx",
    onDownloadTemplate: () => alert("Descargando plantilla...")
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Carga no disponible",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    appearance: "primary",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...x.parameters?.docs?.source}}};const W=["SinArchivo","ConArchivo","ConHeader","ConHeaderYPlantilla","Disabled","AppearancePrimary"];export{x as AppearancePrimary,c as ConArchivo,p as ConHeader,d as ConHeaderYPlantilla,m as Disabled,u as SinArchivo,W as __namedExportsOrder,z as default};
