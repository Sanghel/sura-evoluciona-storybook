import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as x}from"./index-Bc2G9s8g.js";import{a as v}from"./utils-BP2HNEMH.js";import{B as q}from"./Button-B9_Q3Iln.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-DQfP3kMs.js";import"./Icon-B-WG8aI4.js";const M=({className:r})=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:r,children:e.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),A=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n=x.forwardRef(({value:r,onChange:t,title:i,onDownloadTemplate:j,hint:C,accept:w,multiple:N=!1,disabled:a=!1,appearance:g="default",className:k,...D},B)=>{const[b,f]=x.useState(!1),F=x.useRef(null),T=s=>{const y=s.target.files?.[0]??null;t(y),s.target.value=""},S=s=>{if(s.preventDefault(),f(!1),a)return;const y=s.dataTransfer.files[0]??null;t(y)},_=s=>{s.preventDefault(),a||f(!0)},h=()=>{a||F.current?.click()};return e.jsxs("div",{ref:B,className:v("sura:w-full",k),...D,children:[i&&e.jsxs("div",{children:[e.jsxs("div",{className:"sura:flex sura:items-center sura:justify-between sura:py-3",children:[e.jsxs("button",{type:"button",onClick:h,disabled:a,className:"sura:flex sura:items-center sura:gap-2 sura:text-primary sura:font-bold sura:text-caption sura:uppercase sura:tracking-wide sura:disabled:opacity-50",children:[e.jsx(M,{}),i]}),j&&e.jsxs("button",{type:"button",onClick:j,disabled:a,className:"sura:flex sura:items-center sura:gap-1.5 sura:text-gris-400 sura:text-caption sura:hover:text-primary sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:[e.jsx(A,{}),"Descargar plantilla"]})]}),e.jsx("div",{className:"sura:border-t sura:border-gris-200"})]}),e.jsxs("div",{className:v("sura:flex sura:flex-col sura:items-center sura:justify-center sura:gap-4 sura:py-12 sura:px-8 sura:mt-2","sura:rounded-lg sura:border-2 sura:transition-all sura:duration-200",!r&&"sura:border-dashed",r?"sura:bg-success-2 sura:border-success-alt":b?"sura:bg-info-2 sura:border-primary":g==="primary"?"sura:bg-fondo-7 sura:border-gris-300":"sura:bg-fondo-1 sura:border-gris-200",!a&&!r&&"sura:cursor-pointer",a&&"sura:opacity-50 sura:cursor-not-allowed"),onDragOver:_,onDragLeave:()=>f(!1),onDrop:S,onClick:()=>!r&&!a&&h(),children:[e.jsx("div",{className:v("sura:w-14 sura:h-14 sura:rounded-full sura:bg-white sura:flex sura:items-center sura:justify-center",g==="primary"?"sura:shadow":"sura:shadow-sm",r?"sura:text-success-alt":b||g==="primary"?"sura:text-primary":"sura:text-gris-400"),children:e.jsx(M,{})}),r?e.jsxs("div",{className:"sura:text-center",children:[e.jsx("p",{className:"sura:text-tool-md sura:font-bold sura:text-sura-negro",children:r.name}),e.jsxs("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:[(r.size/1024).toFixed(0)," KB"]})]}):e.jsxs("div",{className:"sura:text-center",children:[e.jsx("p",{className:"sura:text-tool-md sura:font-bold sura:text-sura-negro",children:"Arrastra tu archivo o selecciónalo"}),C&&e.jsx("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:C})]}),e.jsxs("div",{className:"sura:flex sura:items-center sura:gap-3",onClick:s=>s.stopPropagation(),children:[e.jsx(q,{type:"button",variant:"outlined",color:"primary",size:"md",disabled:a,onClick:h,children:"Seleccionar archivo"}),e.jsx("button",{type:"button",disabled:a,onClick:()=>t(null),className:"sura:text-caption sura:text-gris-500 sura:hover:text-sura-negro sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:"Quitar"})]}),e.jsx("input",{ref:F,type:"file",accept:w,multiple:N,disabled:a,className:"sura:sr-only",onChange:T})]})]})});n.displayName="FileUpload";n.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{value:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},onDownloadTemplate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hint:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}},composes:["Omit"]};const V={title:"Formularios/FileUpload",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},title:{control:"text"},hint:{control:"text"}}},o=r=>{const[t,i]=x.useState(null);return e.jsx(n,{...r,value:t,onChange:i})},l={render:r=>e.jsx(o,{...r}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},c={render:r=>e.jsx(n,{...r,value:new File([""],"aplicacion_primas_mayo_2026.xlsx",{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),onChange:()=>{}}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},u={render:r=>e.jsx(o,{...r}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},d={render:r=>e.jsx(o,{...r}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx",onDownloadTemplate:()=>alert("Descargando plantilla...")}},p={render:r=>e.jsx(o,{...r}),args:{hint:"Carga no disponible",disabled:!0}},m={render:r=>e.jsx(o,{...r}),args:{appearance:"primary",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FileUpload {...args} value={new File([""], "aplicacion_primas_mayo_2026.xlsx", {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  })} onChange={() => {}} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx",
    onDownloadTemplate: () => alert("Descargando plantilla...")
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Carga no disponible",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    appearance: "primary",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...m.parameters?.docs?.source}}};const z=["SinArchivo","ConArchivo","ConHeader","ConHeaderYPlantilla","Disabled","AppearancePrimary"];export{m as AppearancePrimary,c as ConArchivo,u as ConHeader,d as ConHeaderYPlantilla,p as Disabled,l as SinArchivo,z as __namedExportsOrder,V as default};
