import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as h}from"./index-Bc2G9s8g.js";import{a as l}from"./utils-7IX6LjdP.js";import{B as P}from"./Button-BkpDUrET.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-BMe46fMM.js";import"./Icon-cz8gTyY9.js";const T=({className:e})=>r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e,children:r.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),U=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n=h.forwardRef(({value:e,onChange:o,title:i,onDownloadTemplate:C,dropTitle:N="Arrastra tu archivo o selecciónalo",hint:M,accept:k,multiple:B=!1,disabled:a=!1,appearance:f="default",className:D,...S},q)=>{const[F,v]=h.useState(!1),w=h.useRef(null),A=s=>{const b=s.target.files?.[0]??null;o(b),s.target.value=""},_=s=>{if(s.preventDefault(),v(!1),a)return;const b=s.dataTransfer.files[0]??null;o(b)},z=s=>{s.preventDefault(),a||v(!0)},y=()=>{a||w.current?.click()},j=!e&&!a;return r.jsxs("div",{ref:q,className:l("sura:w-full",D),...S,children:[i&&r.jsxs("div",{children:[r.jsxs("div",{className:"sura:flex sura:items-center sura:justify-between sura:py-3",children:[r.jsxs("button",{type:"button",onClick:y,disabled:a,className:"sura:flex sura:items-center sura:gap-2 sura:text-primary sura:font-bold sura:text-caption sura:uppercase sura:tracking-wide sura:disabled:opacity-50",children:[r.jsx(T,{}),i]}),C&&r.jsxs("button",{type:"button",onClick:C,disabled:a,className:"sura:flex sura:items-center sura:gap-1.5 sura:text-gris-400 sura:text-caption sura:hover:text-primary sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:[r.jsx(U,{}),"Descargar plantilla"]})]}),r.jsx("div",{className:"sura:border-t sura:border-gris-200"})]}),r.jsxs("div",{className:l("sura:flex sura:flex-col sura:items-center sura:justify-center sura:gap-4 sura:py-12 sura:px-8 sura:mt-2","sura:rounded-lg sura:border-2 sura:transition-all sura:duration-200",!e&&"sura:border-dashed",e?"sura:bg-success-2 sura:border-success-alt":F?"sura:bg-info-2 sura:border-primary":f==="primary"?"sura:bg-fondo-7 sura:border-gris-300":"sura:bg-fondo-1 sura:border-gris-200",j&&["sura:group sura:cursor-pointer","sura:hover:border-primary sura:hover:bg-info-2 sura:hover:shadow-sm"],a&&"sura:opacity-50 sura:cursor-not-allowed"),onDragOver:z,onDragLeave:()=>v(!1),onDrop:_,onClick:()=>!e&&!a&&y(),children:[r.jsx("div",{className:l("sura:w-14 sura:h-14 sura:rounded-full sura:bg-white sura:flex sura:items-center sura:justify-center","sura:transition-all sura:duration-200",f==="primary"?"sura:shadow":"sura:shadow-sm",e?"sura:text-success-alt":F||f==="primary"?"sura:text-primary":"sura:text-gris-400",j&&"sura:group-hover:text-primary sura:group-hover:shadow"),children:r.jsx(T,{})}),e?r.jsxs("div",{className:"sura:text-center",children:[r.jsx("p",{className:"sura:text-tool-md sura:font-bold sura:text-sura-negro",children:e.name}),r.jsxs("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:[(e.size/1024).toFixed(0)," KB"]})]}):r.jsxs("div",{className:"sura:text-center",children:[r.jsx("p",{className:l("sura:text-tool-md sura:font-bold sura:text-sura-negro sura:transition-colors sura:duration-200",j&&"sura:group-hover:text-primary"),children:N}),M&&r.jsx("p",{className:"sura:text-caption sura:text-gris-400 sura:mt-0.5",children:M})]}),r.jsxs("div",{className:"sura:flex sura:items-center sura:gap-3",onClick:s=>s.stopPropagation(),children:[r.jsx(P,{type:"button",variant:"outlined",color:"primary",size:"md",disabled:a,onClick:y,children:"Seleccionar archivo"}),r.jsx("button",{type:"button",disabled:a,onClick:()=>o(null),className:"sura:text-caption sura:text-gris-500 sura:hover:text-sura-negro sura:transition-colors sura:duration-200 sura:disabled:opacity-50",children:"Quitar"})]}),r.jsx("input",{ref:w,type:"file",accept:k,multiple:B,disabled:a,className:"sura:sr-only",onChange:A})]})]})});n.displayName="FileUpload";n.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{value:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},onDownloadTemplate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dropTitle:{required:!1,tsType:{name:"string"},description:"Mensaje principal dentro de la zona de carga, sobre los botones. Solo visible cuando no hay archivo.",defaultValue:{value:'"Arrastra tu archivo o selecciónalo"',computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:'"default" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}},composes:["Omit"]};const W={title:"Formularios/FileUpload",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},title:{control:"text"},dropTitle:{control:"text"},hint:{control:"text"}}},t=e=>{const[o,i]=h.useState(null);return r.jsx(n,{...e,value:o,onChange:i})},c={render:e=>r.jsx(t,{...e}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},u={render:e=>r.jsx(n,{...e,value:new File([""],"aplicacion_primas_mayo_2026.xlsx",{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),onChange:()=>{}}),args:{hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},d={render:e=>r.jsx(t,{...e}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}},p={render:e=>r.jsx(t,{...e}),args:{title:"Cargar archivo Excel",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx",onDownloadTemplate:()=>alert("Descargando plantilla...")}},m={render:e=>r.jsx(t,{...e}),args:{hint:"Carga no disponible",disabled:!0}},x={render:e=>r.jsx(t,{...e}),args:{dropTitle:"Arrastra el archivo aquí o haz clic para seleccionar",hint:"XLSX hasta 10 MB · Una sola matriz por archivo",accept:".xlsx"}},g={render:e=>r.jsx(t,{...e}),args:{appearance:"primary",hint:"Formato .xlsx · Máximo 5 MB",accept:".xlsx"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FileUpload {...args} value={new File([""], "aplicacion_primas_mayo_2026.xlsx", {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  })} onChange={() => {}} />,
  args: {
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    title: "Cargar archivo Excel",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx",
    onDownloadTemplate: () => alert("Descargando plantilla...")
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    hint: "Carga no disponible",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    dropTitle: "Arrastra el archivo aquí o haz clic para seleccionar",
    hint: "XLSX hasta 10 MB · Una sola matriz por archivo",
    accept: ".xlsx"
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    appearance: "primary",
    hint: "Formato .xlsx · Máximo 5 MB",
    accept: ".xlsx"
  }
}`,...g.parameters?.docs?.source}}};const Y=["SinArchivo","ConArchivo","ConHeader","ConHeaderYPlantilla","Disabled","TextoPersonalizado","AppearancePrimary"];export{g as AppearancePrimary,u as ConArchivo,d as ConHeader,p as ConHeaderYPlantilla,m as Disabled,c as SinArchivo,x as TextoPersonalizado,Y as __namedExportsOrder,W as default};
