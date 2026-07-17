import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as l}from"./index-Bc2G9s8g.js";import{a as p}from"./utils-BP2HNEMH.js";import{I as M}from"./Icon-B-WG8aI4.js";function m({steps:t,className:n,onStepClick:c,...i}){const o=l.useRef(null),d=l.useRef([]),[R,E]=l.useState(!1),[w,z]=l.useState(!1),b=l.useCallback(()=>{const e=o.current;e&&(E(e.scrollLeft>1),z(e.scrollLeft<e.scrollWidth-e.clientWidth-1))},[]),L=t.findIndex(e=>e.status==="current"),N=l.useRef(()=>{});N.current=()=>{const e=d.current[L],r=o.current;if(!e||!r)return;const a=r.getBoundingClientRect();if(a.width===0)return;const u=e.getBoundingClientRect();u.left<a.left?r.scrollTo({left:r.scrollLeft+(u.left-a.left),behavior:"smooth"}):u.right>a.right&&r.scrollTo({left:r.scrollLeft+(u.right-a.right),behavior:"smooth"})},l.useEffect(()=>{const e=o.current;if(!e)return;b(),e.addEventListener("scroll",b);const r=new ResizeObserver(()=>{b(),N.current()});return r.observe(e),()=>{e.removeEventListener("scroll",b),r.disconnect()}},[b]),l.useEffect(()=>{N.current()},[L]);const T=()=>{const e=o.current;if(!e)return;const r=e.getBoundingClientRect().left;for(let a=d.current.length-1;a>=0;a--){const u=d.current[a];if(!u)continue;const P=u.getBoundingClientRect().left;if(P<r-1){e.scrollTo({left:e.scrollLeft+(P-r),behavior:"smooth"});break}}},B=()=>{const e=o.current;if(!e)return;const r=e.getBoundingClientRect();for(const a of d.current){if(!a)continue;const u=a.getBoundingClientRect();if(u.right>r.right+1){e.scrollTo({left:e.scrollLeft+(u.left-r.left),behavior:"smooth"});break}}};return s.jsxs("div",{className:p("sura:flex sura:items-center sura:gap-2 sura:w-full",n),...i,children:[s.jsx("button",{type:"button","aria-label":"Ver pasos anteriores",onClick:T,style:{opacity:R?1:0},className:p("sura:flex sura:items-center sura:justify-center sura:h-7 sura:w-7 sura:rounded-full sura:shrink-0 sura:transition-all sura:duration-200",R?"sura:bg-primary sura:text-white sura:cursor-pointer":"sura:pointer-events-none"),children:s.jsx(M,{name:"chevron-left",size:"sm"})}),s.jsx("ol",{ref:o,style:{scrollbarWidth:"none"},className:"sura:flex sura:items-center sura:flex-1 sura:min-w-0 sura:overflow-x-auto sura:scrollbar-none","aria-label":"Pasos del proceso",children:t.map((e,r)=>s.jsxs(l.Fragment,{children:[s.jsxs("li",{ref:a=>{d.current[r]=a},className:p("sura:flex sura:items-center sura:gap-2 sura:shrink-0 sura:list-none",e.status==="done"&&c&&"sura:cursor-pointer"),"aria-current":e.status==="current"?"step":void 0,...e.status==="done"&&c?{role:"button",tabIndex:0,onClick:()=>c(r),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&c(r)}}:{},children:[s.jsx("span",{className:p("sura:h-7 sura:w-7 sura:rounded-full sura:flex sura:items-center sura:justify-center sura:shrink-0 sura:text-small sura:font-bold sura:transition-colors sura:duration-200",e.status==="done"&&"sura:bg-primary sura:text-white",e.status==="current"&&"sura:bg-primary sura:text-white",e.status==="pending"&&"sura:border-2 sura:border-gris-300 sura:bg-white sura:text-gris-400"),children:e.status==="done"?s.jsx("svg",{width:"11",height:"9",viewBox:"0 0 11 9",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M1 4L4 7L10 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):s.jsx("span",{children:r+1})}),s.jsx("span",{className:p("sura:whitespace-nowrap sura:text-sm sura:font-semibold sura:transition-colors sura:duration-200",e.status==="done"&&"sura:text-sura-negro",e.status==="current"&&"sura:text-primary",e.status==="pending"&&"sura:text-gris-400"),children:e.label})]}),r<t.length-1&&s.jsx("div",{className:p("sura:flex-1 sura:min-w-6 sura:h-px sura:mx-3 sura:transition-colors sura:duration-200",e.status==="done"?"bg-primary":"sura:bg-gris-200"),"aria-hidden":"true"})]},e.label))}),s.jsx("button",{type:"button","aria-label":"Ver pasos siguientes",onClick:B,style:{opacity:w?1:0},className:p("sura:flex sura:items-center sura:justify-center sura:h-7 sura:w-7 sura:rounded-full sura:shrink-0 sura:transition-all sura:duration-200",w?"sura:bg-primary sura:text-white sura:cursor-pointer":"sura:pointer-events-none"),children:s.jsx(M,{name:"chevron-right-thin",size:"sm"})})]})}m.__docgenInfo={description:"",methods:[],displayName:"Stepper"};const g=["Modo","Pólizas y recibos","Primas en depósito","Confirmación","Resultado"];function j(t,n){return t<n?"done":t===n?"current":"pending"}function I(t){return g.map((n,c)=>({label:n,status:j(c,t)}))}const q={title:"Navegación/Stepper",component:m,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{steps:{description:"Lista de pasos con su etiqueta y estado (`done` | `current` | `pending`)."},onStepClick:{description:"Callback invocado al hacer click (o pulsar Enter/Espacio) en un paso **completado** (`done`). Recibe el índice del paso. Si se omite, los pasos no son interactivos.",action:"stepClicked"}}},f={name:"Con controls",args:{currentStep:1},render:({currentStep:t})=>s.jsx(m,{steps:I(t)})};function D(){const[t,n]=l.useState(2),c=g.map((i,o)=>({label:i,status:j(o,t)}));return s.jsxs("div",{className:"space-y-4 max-w-lg",children:[s.jsxs("p",{className:"text-sm text-gris-500",children:["Haz click en un paso ",s.jsx("strong",{children:"completado"})," para volver a él. Los pasos pendientes no son interactivos."]}),s.jsx(m,{steps:c,onStepClick:n}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>n(i=>Math.max(0,i-1)),disabled:t===0,children:"← Anterior"}),s.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>n(i=>Math.min(g.length-1,i+1)),disabled:t===g.length-1,children:"Siguiente →"})]})]})}const h={name:"Navegación por click (pasos completados)",render:()=>s.jsx(D,{})},x={name:"Primer paso activo",args:{steps:[{label:"Modo",status:"current"},{label:"Pólizas y recibos",status:"pending"},{label:"Primas en depósito",status:"pending"},{label:"Confirmación",status:"pending"},{label:"Resultado",status:"pending"}]}},y={name:"Penúltimo paso",args:{steps:[{label:"Modo",status:"done"},{label:"Pólizas y recibos",status:"done"},{label:"Primas en depósito",status:"done"},{label:"Confirmación",status:"current"},{label:"Resultado",status:"pending"}]}},v={name:"Todos completados",args:{steps:g.map(t=>({label:t,status:"done"}))}},k=["Tipo de solicitud","Selección de pólizas","Primas en depósito","Datos del asegurado","Beneficiarios","Documentos adjuntos","Revisión médica","Confirmación","Resultado"];function A(){const[t,n]=l.useState(0),c=k.map((i,o)=>({label:i,status:j(o,t)}));return s.jsxs("div",{className:"space-y-6 max-w-lg",children:[s.jsx(m,{steps:c}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>n(i=>Math.max(0,i-1)),disabled:t===0,children:"← Anterior"}),s.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>n(i=>Math.min(k.length-1,i+1)),disabled:t===k.length-1,children:"Siguiente →"})]})]})}const S={name:"Muchos pasos (con botones de navegación)",render:()=>s.jsx(A,{})},C={name:"Interactivo",render:()=>{const t=["Modo","Pólizas y recibos","Primas en depósito","Confirmación","Resultado"],[n,c]=l.useState(1),i=t.map((o,d)=>({label:o,status:j(d,n)}));return s.jsxs("div",{className:"space-y-6",children:[s.jsx(m,{steps:i}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>c(o=>Math.max(0,o-1)),disabled:n===0,children:"← Anterior"}),s.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>c(o=>Math.min(t.length-1,o+1)),disabled:n===t.length-1,children:"Siguiente →"})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Con controls",
  args: {
    currentStep: 1
  },
  render: ({
    currentStep
  }: {
    currentStep: number;
  }) => <Stepper steps={buildSteps(currentStep)} />
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Navegación por click (pasos completados)",
  render: () => <ClickNavDemo />
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Primer paso activo",
  args: {
    steps: [{
      label: "Modo",
      status: "current"
    }, {
      label: "Pólizas y recibos",
      status: "pending"
    }, {
      label: "Primas en depósito",
      status: "pending"
    }, {
      label: "Confirmación",
      status: "pending"
    }, {
      label: "Resultado",
      status: "pending"
    }]
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Penúltimo paso",
  args: {
    steps: [{
      label: "Modo",
      status: "done"
    }, {
      label: "Pólizas y recibos",
      status: "done"
    }, {
      label: "Primas en depósito",
      status: "done"
    }, {
      label: "Confirmación",
      status: "current"
    }, {
      label: "Resultado",
      status: "pending"
    }]
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Todos completados",
  args: {
    steps: LABELS.map(label => ({
      label,
      status: "done" as const
    }))
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Muchos pasos (con botones de navegación)",
  render: () => <MuchosStepsDemo />
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Interactivo",
  render: () => {
    const labels = ["Modo", "Pólizas y recibos", "Primas en depósito", "Confirmación", "Resultado"];
    const [current, setCurrent] = React.useState(1);
    const steps: Step[] = labels.map((label, i) => ({
      label,
      status: stepStatus(i, current)
    }));
    return <div className="space-y-6">
        <Stepper steps={steps} />
        <div className="flex gap-2 justify-center">
          <button className="px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40" onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}>
            ← Anterior
          </button>
          <button className="px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40" onClick={() => setCurrent(c => Math.min(labels.length - 1, c + 1))} disabled={current === labels.length - 1}>
            Siguiente →
          </button>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};const F=["Default","ClickToNavigate","PrimerPaso","CasiTerminado","Completo","MuchosSteps","Interactivo"];export{y as CasiTerminado,h as ClickToNavigate,v as Completo,f as Default,C as Interactivo,S as MuchosSteps,x as PrimerPaso,F as __namedExportsOrder,q as default};
