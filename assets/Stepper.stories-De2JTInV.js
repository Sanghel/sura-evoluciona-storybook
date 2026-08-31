import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as i}from"./index-Bc2G9s8g.js";import{a as m}from"./utils-7IX6LjdP.js";import{I as D}from"./Icon-cz8gTyY9.js";function x({steps:t,completedSteps:a,className:l,onStepClick:o,...u}){const c=i.useRef(null),b=i.useRef([]),[L,B]=i.useState(!1),[M,I]=i.useState(!1),h=i.useCallback(()=>{const s=c.current;s&&(B(s.scrollLeft>1),I(s.scrollLeft<s.scrollWidth-s.clientWidth-1))},[]),z=t.findIndex(s=>s.status==="current"),E=new Set(a),A=(s,r)=>s.status==="current"?"current":E.has(r)?"done":s.status,w=i.useRef(()=>{});w.current=()=>{const s=b.current[z],r=c.current;if(!s||!r)return;const n=r.getBoundingClientRect();if(n.width===0)return;const d=s.getBoundingClientRect();d.left<n.left?r.scrollTo({left:r.scrollLeft+(d.left-n.left),behavior:"smooth"}):d.right>n.right&&r.scrollTo({left:r.scrollLeft+(d.right-n.right),behavior:"smooth"})},i.useEffect(()=>{const s=c.current;if(!s)return;h(),s.addEventListener("scroll",h);const r=new ResizeObserver(()=>{h(),w.current()});return r.observe(s),()=>{s.removeEventListener("scroll",h),r.disconnect()}},[h]),i.useEffect(()=>{w.current()},[z]);const q=()=>{const s=c.current;if(!s)return;const r=s.getBoundingClientRect().left;for(let n=b.current.length-1;n>=0;n--){const d=b.current[n];if(!d)continue;const p=d.getBoundingClientRect().left;if(p<r-1){s.scrollTo({left:s.scrollLeft+(p-r),behavior:"smooth"});break}}},_=()=>{const s=c.current;if(!s)return;const r=s.getBoundingClientRect();for(const n of b.current){if(!n)continue;const d=n.getBoundingClientRect();if(d.right>r.right+1){s.scrollTo({left:s.scrollLeft+(d.left-r.left),behavior:"smooth"});break}}};return e.jsxs("div",{className:m("sura:flex sura:items-center sura:gap-2 sura:w-full",l),...u,children:[e.jsx("button",{type:"button","aria-label":"Ver pasos anteriores",onClick:q,style:{opacity:L?1:0},className:m("sura:flex sura:items-center sura:justify-center sura:h-7 sura:w-7 sura:rounded-full sura:shrink-0 sura:transition-all sura:duration-200",L?"sura:bg-primary sura:text-white sura:cursor-pointer":"sura:pointer-events-none"),children:e.jsx(D,{name:"chevron-left",size:"sm"})}),e.jsx("ol",{ref:c,style:{scrollbarWidth:"none"},className:"sura:flex sura:items-center sura:flex-1 sura:min-w-0 sura:overflow-x-auto sura:scrollbar-none","aria-label":"Pasos del proceso",children:t.map((s,r)=>{const n=A(s,r),d=n==="done"||E.has(r);return e.jsxs(i.Fragment,{children:[e.jsxs("li",{ref:p=>{b.current[r]=p},className:m("sura:flex sura:items-center sura:gap-2 sura:shrink-0 sura:list-none",n==="done"&&o&&"sura:cursor-pointer"),"aria-current":n==="current"?"step":void 0,...n==="done"&&o?{role:"button",tabIndex:0,onClick:()=>o(r),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&o(r)}}:{},children:[e.jsx("span",{className:m("sura:h-7 sura:w-7 sura:rounded-full sura:flex sura:items-center sura:justify-center sura:shrink-0 sura:text-small sura:font-bold sura:transition-colors sura:duration-200",n==="done"&&"sura:bg-primary sura:text-white",n==="current"&&"sura:bg-primary sura:text-white",n==="pending"&&"sura:border-2 sura:border-gris-300 sura:bg-white sura:text-gris-400"),children:n==="done"?e.jsx("svg",{width:"11",height:"9",viewBox:"0 0 11 9",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 4L4 7L10 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsx("span",{children:r+1})}),e.jsx("span",{className:m("sura:whitespace-nowrap sura:text-sm sura:font-semibold sura:transition-colors sura:duration-200",n==="done"&&"sura:text-sura-negro",n==="current"&&"sura:text-primary",n==="pending"&&"sura:text-gris-400"),children:s.label})]}),r<t.length-1&&e.jsx("div",{className:m("sura:flex-1 sura:min-w-6 sura:h-px sura:mx-3 sura:transition-colors sura:duration-200",d?"sura:bg-primary":"sura:bg-gris-200"),"aria-hidden":"true"})]},s.label)})}),e.jsx("button",{type:"button","aria-label":"Ver pasos siguientes",onClick:_,style:{opacity:M?1:0},className:m("sura:flex sura:items-center sura:justify-center sura:h-7 sura:w-7 sura:rounded-full sura:shrink-0 sura:transition-all sura:duration-200",M?"sura:bg-primary sura:text-white sura:cursor-pointer":"sura:pointer-events-none"),children:e.jsx(D,{name:"chevron-right-thin",size:"sm"})})]})}x.__docgenInfo={description:"",methods:[],displayName:"Stepper"};const g=["Modo","Pólizas y recibos","Primas en depósito","Confirmación","Resultado"];function R(t,a){return t<a?"done":t===a?"current":"pending"}function T(t){return g.map((a,l)=>({label:a,status:R(l,t)}))}const G={title:"Navegación/Stepper",component:x,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{steps:{description:"Lista de pasos con su etiqueta y estado (`done` | `current` | `pending`)."},completedSteps:{description:"Índices de los pasos ya completados. Se pintan como completados aunque queden **por delante** del paso `current` (p. ej. al retroceder), para no perder visualmente el progreso logrado. Precedencia: `current` > `completedSteps` > `status`."},onStepClick:{description:'Callback invocado al hacer click (o pulsar Enter/Espacio) en un paso **completado** (por `status: "done"` o por `completedSteps`). Recibe el índice del paso. Si se omite, los pasos no son interactivos.',action:"stepClicked"}}},f={name:"Con controls",args:{currentStep:1},render:({currentStep:t})=>e.jsx(x,{steps:T(t)})};function W(){const[t,a]=i.useState(2),l=g.map((o,u)=>({label:o,status:R(u,t)}));return e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsxs("p",{className:"text-sm text-gris-500",children:["Haz click en un paso ",e.jsx("strong",{children:"completado"})," para volver a él. Los pasos pendientes no son interactivos."]}),e.jsx(x,{steps:l,onStepClick:a}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>a(o=>Math.max(0,o-1)),disabled:t===0,children:"← Anterior"}),e.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>a(o=>Math.min(g.length-1,o+1)),disabled:t===g.length-1,children:"Siguiente →"})]})]})}const y={name:"Navegación por click (pasos completados)",render:()=>e.jsx(W,{})};function V(){const[t,a]=i.useState(0),[l,o]=i.useState([]),u=()=>{o(c=>c.includes(t)?c:[...c,t]),a(c=>Math.min(g.length-1,c+1))};return e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsxs("p",{className:"text-sm text-gris-500",children:["Avanza hasta el final y luego retrocede: los pasos que quedan"," ",e.jsx("strong",{children:"por delante"})," conservan el check porque van en"," ",e.jsx("code",{children:"completedSteps"}),". Haz click en uno de ellos para volver a donde estabas."]}),e.jsx(x,{steps:T(t),completedSteps:l,onStepClick:a}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>a(c=>Math.max(0,c-1)),disabled:t===0,children:"← Anterior"}),e.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:u,disabled:t===g.length-1,children:"Siguiente →"})]}),e.jsxs("p",{className:"text-xs text-gris-400 text-center",children:["completedSteps: [",l.join(", "),"] — current: ",t]})]})}const S={name:"Retroceso conservando pasos completados",render:()=>e.jsx(V,{})},v={name:"Primer paso activo",args:{steps:[{label:"Modo",status:"current"},{label:"Pólizas y recibos",status:"pending"},{label:"Primas en depósito",status:"pending"},{label:"Confirmación",status:"pending"},{label:"Resultado",status:"pending"}]}},j={name:"Penúltimo paso",args:{steps:[{label:"Modo",status:"done"},{label:"Pólizas y recibos",status:"done"},{label:"Primas en depósito",status:"done"},{label:"Confirmación",status:"current"},{label:"Resultado",status:"pending"}]}},C={name:"Todos completados",args:{steps:g.map(t=>({label:t,status:"done"}))}},P=["Tipo de solicitud","Selección de pólizas","Primas en depósito","Datos del asegurado","Beneficiarios","Documentos adjuntos","Revisión médica","Confirmación","Resultado"];function H(){const[t,a]=i.useState(0),l=P.map((o,u)=>({label:o,status:R(u,t)}));return e.jsxs("div",{className:"space-y-6 max-w-lg",children:[e.jsx(x,{steps:l}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>a(o=>Math.max(0,o-1)),disabled:t===0,children:"← Anterior"}),e.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>a(o=>Math.min(P.length-1,o+1)),disabled:t===P.length-1,children:"Siguiente →"})]})]})}const N={name:"Muchos pasos (con botones de navegación)",render:()=>e.jsx(H,{})},k={name:"Interactivo",render:()=>{const t=["Modo","Pólizas y recibos","Primas en depósito","Confirmación","Resultado"],[a,l]=i.useState(1),o=t.map((u,c)=>({label:u,status:R(c,a)}));return e.jsxs("div",{className:"space-y-6",children:[e.jsx(x,{steps:o}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{className:"px-4 py-2 rounded-md border border-gris-200 text-sm text-gris-500 disabled:opacity-40",onClick:()=>l(u=>Math.max(0,u-1)),disabled:a===0,children:"← Anterior"}),e.jsx("button",{className:"px-4 py-2 rounded-md bg-primary text-white text-sm disabled:opacity-40",onClick:()=>l(u=>Math.min(t.length-1,u+1)),disabled:a===t.length-1,children:"Siguiente →"})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Con controls",
  args: {
    currentStep: 1
  },
  render: ({
    currentStep
  }: {
    currentStep: number;
  }) => <Stepper steps={buildSteps(currentStep)} />
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Navegación por click (pasos completados)",
  render: () => <ClickNavDemo />
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Retroceso conservando pasos completados",
  render: () => <RetrocesoDemo />
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Todos completados",
  args: {
    steps: LABELS.map(label => ({
      label,
      status: "done" as const
    }))
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Muchos pasos (con botones de navegación)",
  render: () => <MuchosStepsDemo />
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const J=["Default","ClickToNavigate","RetrocesoConPasosCompletados","PrimerPaso","CasiTerminado","Completo","MuchosSteps","Interactivo"];export{j as CasiTerminado,y as ClickToNavigate,C as Completo,f as Default,k as Interactivo,N as MuchosSteps,v as PrimerPaso,S as RetrocesoConPasosCompletados,J as __namedExportsOrder,G as default};
