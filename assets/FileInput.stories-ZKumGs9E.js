import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as y}from"./index-Bc2G9s8g.js";import{a as U}from"./utils-7IX6LjdP.js";import{B as q}from"./Button-BkpDUrET.js";import{S as G}from"./Spinner-BvWaOwJy.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-BMe46fMM.js";import"./Icon-cz8gTyY9.js";const J=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("polyline",{points:"14 2 14 8 20 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),K=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M20 6L9 17l-5-5",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Q=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),X=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Y=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M23 4v6h-6M1 20v-6h6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Z=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),$=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5"})]}),a=y.forwardRef(({value:r,onChange:t,onDelete:i,label:v,required:b,description:k,status:w,accept:I,disabled:E=!1,readOnly:S=!1,loading:F=!1,error:T,className:M,onPreview:D,...V},B)=>{const L=y.useRef(null),s=E||F,l=S&&!s,n=!!T,j=!!r&&!n,W=!n&&!r,z=N=>{const H=N.target.files?.[0]??null;t(H),N.target.value=""},R=()=>{i?i():t(null)},A=()=>{!s&&!l&&L.current?.click()};let C="sura:bg-white sura:border-gris-200";n?C="sura:bg-danger-2 sura:border-danger-border":j&&(C="sura:bg-success-2 sura:border-success-border");const P=()=>F?e.jsx("div",{className:"sura:w-9 sura:h-9 sura:rounded-md sura:bg-info-2 sura:flex sura:items-center sura:justify-center sura:shrink-0",children:e.jsx(G,{size:20})}):n?e.jsx("div",{className:"sura:w-9 sura:h-9 sura:rounded-full sura:border-2 sura:border-danger-1 sura:text-danger-1 sura:flex sura:items-center sura:justify-center sura:shrink-0",children:e.jsx(Q,{})}):j?e.jsx("div",{className:"sura:w-9 sura:h-9 sura:rounded-full sura:border-2 sura:border-success-alt sura:text-success-alt sura:flex sura:items-center sura:justify-center sura:shrink-0",children:e.jsx(K,{})}):e.jsx("div",{className:"sura:w-9 sura:h-9 sura:rounded-md sura:bg-info-2 sura:flex sura:items-center sura:justify-center sura:shrink-0 sura:text-secondary",children:e.jsx(J,{})}),O=()=>n?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"sura:text-caption sura:font-bold sura:text-sura-negro",children:[v,b&&e.jsx("span",{className:"sura:text-danger-1 sura:ml-0.5",children:"*"})]}),e.jsx("p",{className:"sura:text-xs sura:text-danger-1 sura:mt-0.5",children:T})]}):j&&r?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"sura:text-caption sura:font-bold sura:text-sura-negro",children:[v,b&&e.jsx("span",{className:"sura:text-danger-1 sura:ml-0.5",children:"*"})]}),e.jsx("p",{className:"sura:text-xs sura:text-success-alt sura:mt-0.5 sura:truncate",children:r.name}),w&&e.jsx("p",{className:"sura:text-xs sura:text-success-alt sura:mt-0.5",children:w})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"sura:text-caption sura:font-bold sura:text-sura-negro",children:[v,b&&e.jsx("span",{className:"sura:text-danger-1 sura:ml-0.5",children:"*"})]}),k&&e.jsx("p",{className:"sura:text-xs sura:text-gris-400 sura:mt-0.5",children:k})]}),_=()=>n||W?l?null:e.jsxs(q,{type:"button",variant:"outlined",color:"primary",size:"sm",disabled:s,onClick:A,children:[e.jsx(Z,{}),"Cargar"]}):e.jsxs(e.Fragment,{children:[D&&e.jsx("button",{onClick:()=>D(r),type:"button",disabled:s,className:"sura:w-8 sura:h-8 sura:flex sura:items-center sura:justify-center sura:rounded-full sura:text-gris-400 sura:hover:text-primary sura:transition-colors sura:duration-200 sura:disabled:opacity-50 sura:cursor-pointer","aria-label":"Previsualizar archivo",children:e.jsx($,{})}),!l&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:R,disabled:s,className:"sura:w-8 sura:h-8 sura:flex sura:items-center sura:justify-center sura:rounded-full sura:text-gris-400 sura:hover:text-danger-1 sura:transition-colors sura:duration-200 sura:disabled:opacity-50 sura:cursor-pointer","aria-label":"Eliminar archivo",children:e.jsx(X,{})}),e.jsxs(q,{type:"button",variant:"outlined",color:"primary",size:"sm",disabled:s,onClick:A,children:[e.jsx(Y,{}),"Reemplazar"]})]})]});return e.jsxs("div",{ref:B,className:U("sura:flex sura:items-center sura:gap-4 sura:px-4 sura:py-3 sura:rounded-lg sura:border sura:transition-all sura:duration-200",C,s&&"sura:opacity-50",M),"aria-readonly":S||void 0,...V,children:[P(),e.jsx("div",{className:"sura:flex-1 sura:min-w-0",children:O()}),e.jsx("div",{className:"sura:flex sura:items-center sura:gap-2 sura:shrink-0",children:_()}),e.jsx("input",{ref:L,type:"file",accept:I,disabled:s||l,className:"sura:sr-only",onChange:z})]})});a.displayName="FileInput";a.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{value:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`Solo lectura: impide la interacción (no se puede seleccionar, reemplazar ni
eliminar el archivo) pero conserva la apariencia de un campo normal — a
diferencia de \`disabled\`, no se ve atenuado/deshabilitado. En estado
"cargado" solo se conserva el botón de previsualizar, habilitado.`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Estado de carga: deshabilita las acciones y muestra un spinner en el ícono.",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},onPreview:{required:!1,tsType:{name:"signature",type:"function",raw:"(file?: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ce={title:"Formularios/FileInput",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},required:{control:"boolean"},label:{control:"text"},description:{control:"text"},status:{control:"text"}}},o=r=>{const[t,i]=y.useState(null);return e.jsx(a,{...r,value:t,onChange:i})},c={render:r=>e.jsx(o,{...r}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)"}},d={render:r=>e.jsx(a,{...r,value:new File([""],"Document 1.pdf",{type:"application/pdf"}),onChange:()=>{}}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)"}},u={render:r=>e.jsx(o,{...r}),args:{label:"Constancia de situación fiscal",description:"Subiendo documento…",loading:!0}},p={render:r=>e.jsx(a,{...r,value:new File([""],"Document 1.pdf",{type:"application/pdf"}),onChange:()=>{}}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)",status:"Aprobado · cargado el 15/05/2026, 10:43 a.m."}},m={render:r=>e.jsx(o,{...r}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)",required:!0}},g={render:r=>e.jsx(o,{...r}),args:{label:"Constancia de situación fiscal",description:"Documento no disponible aún",disabled:!0}},f={render:r=>e.jsx(o,{...r}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)",error:"El formato del archivo no es válido"}},h={render:r=>e.jsx(a,{...r,value:new File([""],"Document 1.pdf",{type:"application/pdf"}),onChange:()=>{},onPreview:()=>alert("Vista previa del archivo")}),args:{label:"Constancia de situación fiscal",description:"Documento fiscal vigente del promotor (SAT)"}},x={render:r=>e.jsx(a,{...r,value:new File([""],"Document 1.pdf",{type:"application/pdf"}),onChange:()=>{},onPreview:()=>alert("Vista previa del archivo")}),args:{label:"Comprobante de domicilio",description:"Documento fiscal vigente del promotor (SAT)",status:"Vence 15/01/2027",readOnly:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FileInput {...args} value={new File([""], "Document 1.pdf", {
    type: "application/pdf"
  })} onChange={() => {}} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Subiendo documento…",
    loading: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FileInput {...args} value={new File([""], "Document 1.pdf", {
    type: "application/pdf"
  })} onChange={() => {}} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)",
    status: "Aprobado · cargado el 15/05/2026, 10:43 a.m."
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)",
    required: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento no disponible aún",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)",
    error: "El formato del archivo no es válido"
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <FileInput {...args} value={new File([""], "Document 1.pdf", {
    type: "application/pdf"
  })} onChange={() => {}} onPreview={() => alert("Vista previa del archivo")} />,
  args: {
    label: "Constancia de situación fiscal",
    description: "Documento fiscal vigente del promotor (SAT)"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <FileInput {...args} value={new File([""], "Document 1.pdf", {
    type: "application/pdf"
  })} onChange={() => {}} onPreview={() => alert("Vista previa del archivo")} />,
  args: {
    label: "Comprobante de domicilio",
    description: "Documento fiscal vigente del promotor (SAT)",
    status: "Vence 15/01/2027",
    readOnly: true
  }
}`,...x.parameters?.docs?.source}}};const de=["SinArchivo","ConArchivo","Loading","ConEstado","Requerido","Disabled","ConError","ConPreview","SoloLectura"];export{d as ConArchivo,f as ConError,p as ConEstado,h as ConPreview,g as Disabled,u as Loading,m as Requerido,c as SinArchivo,x as SoloLectura,de as __namedExportsOrder,ce as default};
