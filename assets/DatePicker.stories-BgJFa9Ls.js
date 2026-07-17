import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as f}from"./index-Bc2G9s8g.js";import{R as ge,T as be,P as fe,C as ye}from"./index-BpLtsXuo.js";import{a as m}from"./utils-BP2HNEMH.js";import{S as ve}from"./Spinner-CIWr9BkK.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-g0ARl7yI.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-ByoG_5Py.js";import"./index-DlTO3c3v.js";import"./index-DdEr2eXK.js";import"./index-DvWumoXY.js";import"./index-BC2HDEX5.js";import"./index-MerDaaRu.js";const De={xs:{h:"sura:h-8",px:"sura:px-2.5",text:"sura:text-tool-meta"},sm:{h:"sura:h-10",px:"sura:px-3",text:"sura:text-tool-body"},md:{h:"sura:h-12",px:"sura:px-4",text:"sura:text-caption"}},je={xs:"sura:text-xs",sm:"sura:text-sm",md:"sura:text-md"},X=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],we=["Do","Lu","Ma","Mi","Ju","Vi","Sa"];function K(a){const n=String(a.getDate()).padStart(2,"0"),h=String(a.getMonth()+1).padStart(2,"0");return`${n}/${h}/${a.getFullYear()}`}function G(a,n){return a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()}function Ce(a,n){const h=new Date(a,n,1).getDay(),y=new Date(a,n+1,0).getDate(),v=new Date(a,n,0).getDate(),c=[];for(let i=h-1;i>=0;i--)c.push({date:new Date(a,n-1,v-i),isCurrentMonth:!1});for(let i=1;i<=y;i++)c.push({date:new Date(a,n,i),isCurrentMonth:!0});for(let i=1;i<=42-c.length;i++)c.push({date:new Date(a,n+1,i),isCurrentMonth:!1});return c}function Ne({className:a}){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:a,children:[e.jsx("rect",{x:"1.5",y:"3.5",width:"13",height:"11",rx:"1.5",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("path",{d:"M5 1.5V5M11 1.5V5",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"}),e.jsx("path",{d:"M1.5 7H14.5",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.75",fill:"currentColor"}),e.jsx("circle",{cx:"8",cy:"9.5",r:"0.75",fill:"currentColor"}),e.jsx("circle",{cx:"11.5",cy:"9.5",r:"0.75",fill:"currentColor"}),e.jsx("circle",{cx:"4.5",cy:"12",r:"0.75",fill:"currentColor"}),e.jsx("circle",{cx:"8",cy:"12",r:"0.75",fill:"currentColor"})]})}function Se(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 8L6 4L10 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Q({className:a}={}){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:a,children:e.jsx("path",{d:"M2 4L6 8L10 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function ke(){return e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 2L14 14M14 2L2 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function s({value:a,defaultValue:n,onChange:h,label:y,helperText:v,errorText:c,required:i,disabled:Z,readOnly:A,loading:Y,minDate:D,maxDate:j,placeholder:ee="–/–/–",size:B="xs",id:ae,disableDay:q,classNames:re,clearable:se}){const $=ae??f.useId(),z=a!==void 0,[te,_]=f.useState(n),o=z?a:te,x=new Date,[w,H]=f.useState(!1),[d,C]=f.useState("day"),[u,g]=f.useState({year:(o??x).getFullYear(),month:(o??x).getMonth()}),I=De[B],oe=!!c,b=Z||Y,ne=!!(se&&o&&!b);f.useEffect(()=>{a&&g({year:a.getFullYear(),month:a.getMonth()})},[a]);const W=r=>{r.stopPropagation(),z||_(void 0),h?.(void 0)},le=r=>{b||A||(r&&C("day"),H(r))},ie=r=>{D&&r<D||j&&r>j||(z||_(r),h?.(r),H(!1))},ce=r=>{g(t=>({...t,month:r})),C("day")},de=r=>{g(t=>({...t,year:r})),C("month")},U=r=>{const t=r==="prev"?-1:1;g(d==="day"?l=>{const p=new Date(l.year,l.month+t,1);return{year:p.getFullYear(),month:p.getMonth()}}:d==="month"?l=>({...l,year:l.year+t}):l=>({...l,year:l.year+t*12}))},R=Math.floor(u.year/12)*12,ue=Array.from({length:12},(r,t)=>R+t),me=Ce(u.year,u.month),pe=d==="day"?`${X[u.month]} ${u.year}`:d==="month"?`${u.year}`:`${R} – ${R+11}`,he=je[B];return e.jsxs("div",{className:"sura:flex sura:flex-col sura:gap-1.5",children:[y&&e.jsxs("label",{htmlFor:$,className:m("sura:text-tool-meta sura:font-semibold sura:leading-none sura:transition-colors sura:duration-200",w?"text-primary":"sura:text-gris-500",b&&"sura:!text-gris-400",he),children:[y,i&&e.jsx("span",{className:"sura:ml-1 sura:text-danger-1","aria-hidden":"true",children:"*"})]}),e.jsxs(ge,{open:w,onOpenChange:le,children:[e.jsx(be,{asChild:!0,children:e.jsxs("button",{id:$,type:"button",disabled:b,"aria-readonly":A||void 0,"aria-label":o?`Fecha: ${K(o)}`:"Seleccionar fecha",className:m(I.h,I.px,I.text,"sura:flex sura:w-full sura:items-center sura:gap-2 sura:text-left","sura:border sura:rounded-t-md sura:focus-visible:rounded-t-md sura:focus-visible:rounded-b-none","sura:transition-all sura:duration-200 sura:focus:outline-none",w?"bg-info-4 border-primary shadow-focus":"sura:bg-gris-100 sura:border-gris-100",oe&&!w&&"sura:!bg-danger-2 sura:!border-danger-1",A&&"sura:cursor-default","sura:disabled:cursor-not-allowed sura:disabled:!bg-fondo-5 sura:disabled:!border-gris-200"),children:[e.jsx(Ne,{className:m("sura:shrink-0",b?"text-gris-300":"sura:text-primary")}),e.jsx("span",{className:m(o?"text-sura-negro":"sura:text-gris-400",b&&"sura:!text-gris-400",re?.value),children:o?K(o):ee}),Y&&e.jsx(ve,{className:"sura:ml-auto"}),ne&&e.jsx("span",{role:"button",tabIndex:0,onClick:W,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&W(r)},"aria-label":"Limpiar fecha",className:"sura:ml-auto sura:shrink-0 sura:flex sura:items-center sura:justify-center sura:text-gris-400 sura:hover:text-sura-negro sura:transition-colors sura:cursor-pointer",children:e.jsx(ke,{})})]})}),e.jsx(fe,{children:e.jsxs(ye,{align:"start",sideOffset:4,className:m("sura:z-50 sura:w-[var(--radix-popover-trigger-width)] sura:min-w-[240px]","sura:bg-white sura:border sura:border-gris-200 sura:rounded-md sura:shadow-popover sura:p-3","sura:data-[state=open]:animate-in sura:data-[state=closed]:animate-out","sura:data-[state=closed]:fade-out-0 sura:data-[state=open]:fade-in-0","sura:data-[state=closed]:zoom-out-95 sura:data-[state=open]:zoom-in-95"),children:[e.jsxs("div",{className:"sura:flex sura:items-center sura:justify-between sura:mb-3",children:[e.jsxs("button",{type:"button",onClick:()=>C(r=>r==="day"?"month":"year"),className:"sura:flex sura:items-center sura:gap-1 sura:text-caption sura:font-semibold sura:text-sura-negro sura:hover:text-primary sura:transition-colors",children:[pe,d!=="day"&&e.jsx(Q,{})]}),e.jsxs("div",{className:"sura:flex sura:flex-col",children:[e.jsx("button",{type:"button",onClick:()=>U("prev"),className:"sura:p-0.5 sura:text-gris-400 sura:hover:text-sura-negro sura:transition-colors","aria-label":"Anterior",children:e.jsx(Se,{})}),e.jsx("button",{type:"button",onClick:()=>U("next"),className:"sura:p-0.5 sura:text-gris-400 sura:hover:text-sura-negro sura:transition-colors","aria-label":"Siguiente",children:e.jsx(Q,{})})]})]}),d==="day"&&e.jsxs("div",{children:[e.jsx("div",{className:"sura:grid sura:grid-cols-7 sura:mb-1",children:we.map(r=>e.jsx("div",{className:"sura:h-7 sura:flex sura:items-center sura:justify-center sura:text-eyebrow sura:text-gris-400",children:r},r))}),e.jsx("div",{className:"sura:grid sura:grid-cols-7 sura:gap-y-0.5",children:me.map(({date:r,isCurrentMonth:t},l)=>{const p=o?G(r,o):!1,xe=G(r,x),J=q?q(r):!!(D&&r<D||j&&r>j);return e.jsx("button",{type:"button",disabled:J,onClick:()=>ie(r),className:m("sura:h-7 sura:w-full sura:flex sura:items-center sura:justify-center sura:rounded-full sura:text-small sura:transition-colors",p?"sura:bg-primary sura:text-white":t?"sura:text-sura-negro sura:hover:bg-info-2 sura:hover:text-primary":"sura:text-gris-300 sura:hover:bg-info-2 sura:hover:text-primary",xe&&!p&&"sura:font-semibold",J&&"sura:opacity-40 sura:cursor-not-allowed sura:hover:bg-transparent sura:hover:text-inherit"),children:r.getDate()},l)})})]}),d==="month"&&e.jsx("div",{className:"sura:grid sura:grid-cols-3 sura:gap-2",children:X.map((r,t)=>{const l=o?o.getMonth()===t&&o.getFullYear()===u.year:!1,p=x.getMonth()===t&&x.getFullYear()===u.year;return e.jsx("button",{type:"button",onClick:()=>ce(t),className:m("sura:py-2 sura:px-1 sura:rounded-pill sura:text-small sura:text-center sura:transition-colors",l?"sura:bg-info-2 sura:text-primary sura:font-semibold":p?"sura:border sura:border-primary sura:text-primary":"sura:text-sura-negro sura:hover:bg-info-2 sura:hover:text-primary"),children:r},r)})}),d==="year"&&e.jsx("div",{className:"sura:grid sura:grid-cols-3 sura:gap-2",children:ue.map(r=>{const t=o?o.getFullYear()===r:!1,l=x.getFullYear()===r;return e.jsx("button",{type:"button",onClick:()=>de(r),className:m("sura:py-2 sura:rounded-pill sura:text-small sura:text-center sura:transition-colors",t?"sura:bg-primary sura:text-white sura:font-semibold":l?"sura:border sura:border-primary sura:text-primary":"sura:text-primary sura:hover:bg-info-2"),children:r},r)})})]})})]}),c&&e.jsx("p",{className:"sura:text-small sura:text-danger-1",children:c}),!c&&v&&e.jsx("p",{className:"sura:text-small sura:text-gris-400",children:v})]})}s.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{placeholder:{defaultValue:{value:'"–/–/–"',computed:!1},required:!1},size:{defaultValue:{value:'"xs"',computed:!1},required:!1}}};const We={title:"Primitivas/DatePicker",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Selector de fecha con calendario emergente. Soporta modo **controlado** y **no controlado**, restricción de fechas mediante `minDate`/`maxDate` o una función `disableDay` personalizada, tres tamaños de trigger (`xs`, `sm`, `md`) y vistas de día, mes y año."}}},argTypes:{size:{control:"select",options:["xs","sm","md"],description:"Tamaño visual del trigger. `xs` → 32 px · `sm` → 40 px · `md` → 48 px.",table:{defaultValue:{summary:"xs"}}},disabled:{control:"boolean",description:"Deshabilita el campo, impidiendo la interacción.",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Solo lectura: impide la interacción (el calendario no se abre) pero conserva la apariencia de un campo normal, no se ve deshabilitado.",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Estado de carga: deshabilita el campo y muestra un spinner a la derecha del trigger.",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Indica que el campo es obligatorio; agrega un asterisco junto a la etiqueta.",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Etiqueta visible del campo."},helperText:{control:"text",description:"Texto de ayuda que aparece debajo del campo cuando no hay error."},errorText:{control:"text",description:"Mensaje de error. Su presencia activa el estado de error del campo."},placeholder:{control:"text",description:"Texto mostrado cuando no hay fecha seleccionada.",table:{defaultValue:{summary:"–/–/–"}}},value:{control:!1,description:"Valor controlado (`Date`). Si se provee, el componente es controlado externamente."},defaultValue:{control:!1,description:"Valor inicial en modo no controlado (`Date`)."},minDate:{control:!1,description:"Fecha mínima seleccionable, inclusive (`Date`)."},maxDate:{control:!1,description:"Fecha máxima seleccionable, inclusive (`Date`)."},disableDay:{control:!1,description:"Función `(date: Date) => boolean` para deshabilitar días de forma granular. Tiene precedencia sobre `minDate`/`maxDate`."},clearable:{control:"boolean",description:"Muestra un botón X para limpiar la fecha seleccionada. Solo visible cuando hay valor y el campo no está deshabilitado ni cargando.",table:{defaultValue:{summary:"false"}}},onChange:{description:"Callback invocado cuando el usuario selecciona una fecha."},id:{control:"text",description:"`id` HTML del botón trigger. Si se omite, se genera automáticamente."}}},N={parameters:{docs:{description:{story:"Estado vacío por defecto. El placeholder se muestra cuando no hay fecha seleccionada."}}},args:{label:"Fecha",placeholder:"–/–/–"},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},S={name:"Con valor",parameters:{docs:{description:{story:"Modo no controlado con `defaultValue`. El componente gestiona su estado internamente."}}},args:{label:"Fecha",defaultValue:new Date(2026,3,14)},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},k={name:"Clearable",parameters:{docs:{description:{story:"Con `clearable={true}` y un valor seleccionado aparece un botón X a la derecha del trigger. Al hacer clic limpia el valor sin abrir el calendario."}}},args:{label:"Fecha",defaultValue:new Date(2026,3,14),clearable:!0},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},F={parameters:{docs:{description:{story:"Estado de carga (`loading`): el campo queda deshabilitado y muestra un spinner a la derecha."}}},args:{label:"Fecha",placeholder:"–/–/–",loading:!0},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},T={name:"Con error",parameters:{docs:{description:{story:"Estado de error activado mediante `errorText`. El `helperText` se oculta cuando hay error."}}},args:{label:"Fecha",errorText:"La fecha no es válida."},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},E={name:"Con texto de ayuda",parameters:{docs:{description:{story:"`helperText` proporciona contexto adicional al usuario debajo del campo."}}},args:{label:"Fecha de vigencia",helperText:"Selecciona la fecha de inicio de tu póliza."},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},L={name:"Deshabilitado",parameters:{docs:{description:{story:"Con `disabled={true}` el campo es de solo lectura visual; el popover no se abre."}}},args:{label:"Fecha",disabled:!0,defaultValue:new Date(2026,3,14)},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},M={name:"Solo lectura",parameters:{docs:{description:{story:"Con `readOnly={true}` el campo no permite interacción (el calendario no se abre), pero conserva la apariencia de un campo normal — a diferencia de `disabled`, no se ve atenuado."}}},args:{label:"Fecha",readOnly:!0,defaultValue:new Date(2026,3,14)},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},V={name:"Con rango de fechas",parameters:{docs:{description:{story:"Usa `minDate` y/o `maxDate` para restringir el rango seleccionable. Para control granular por día usa `disableDay={(date) => boolean}`."}}},args:{label:"Fecha de cancelación",helperText:"Solo fechas futuras.",minDate:new Date},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(s,{...a})})},P={parameters:{docs:{description:{story:"Los tres tamaños disponibles: `xs` (32 px, por defecto), `sm` (40 px) y `md` (48 px). El ancho del campo se adapta al contenedor."}}},render:()=>e.jsxs("div",{className:"space-y-4 w-72",children:[e.jsx(s,{label:"Tamaño xs (default)",size:"xs",placeholder:"–/–/–"}),e.jsx(s,{label:"Tamaño sm",size:"sm",placeholder:"–/–/–"}),e.jsx(s,{label:"Tamaño md",size:"md",placeholder:"–/–/–"})]})},O={name:"Todos los estados",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"DEFAULT (VACÍO)"}),e.jsx(s,{label:"Fecha",placeholder:"–/–/–"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"CON VALOR"}),e.jsx(s,{label:"Fecha",defaultValue:new Date(2026,3,14)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"CON ERROR"}),e.jsx(s,{label:"Fecha",errorText:"La fecha no es válida."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"DESHABILITADO"}),e.jsx(s,{label:"Fecha",disabled:!0,defaultValue:new Date(2026,3,14)})]})]})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Estado vacío por defecto. El placeholder se muestra cuando no hay fecha seleccionada."
      }
    }
  },
  args: {
    label: "Fecha",
    placeholder: "–/–/–"
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Con valor",
  parameters: {
    docs: {
      description: {
        story: "Modo no controlado con \`defaultValue\`. El componente gestiona su estado internamente."
      }
    }
  },
  args: {
    label: "Fecha",
    defaultValue: new Date(2026, 3, 14)
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Clearable",
  parameters: {
    docs: {
      description: {
        story: "Con \`clearable={true}\` y un valor seleccionado aparece un botón X a la derecha del trigger. " + "Al hacer clic limpia el valor sin abrir el calendario."
      }
    }
  },
  args: {
    label: "Fecha",
    defaultValue: new Date(2026, 3, 14),
    clearable: true
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Estado de carga (\`loading\`): el campo queda deshabilitado y muestra un spinner a la derecha."
      }
    }
  },
  args: {
    label: "Fecha",
    placeholder: "–/–/–",
    loading: true
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Con error",
  parameters: {
    docs: {
      description: {
        story: "Estado de error activado mediante \`errorText\`. El \`helperText\` se oculta cuando hay error."
      }
    }
  },
  args: {
    label: "Fecha",
    errorText: "La fecha no es válida."
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Con texto de ayuda",
  parameters: {
    docs: {
      description: {
        story: "\`helperText\` proporciona contexto adicional al usuario debajo del campo."
      }
    }
  },
  args: {
    label: "Fecha de vigencia",
    helperText: "Selecciona la fecha de inicio de tu póliza."
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Deshabilitado",
  parameters: {
    docs: {
      description: {
        story: "Con \`disabled={true}\` el campo es de solo lectura visual; el popover no se abre."
      }
    }
  },
  args: {
    label: "Fecha",
    disabled: true,
    defaultValue: new Date(2026, 3, 14)
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Solo lectura",
  parameters: {
    docs: {
      description: {
        story: "Con \`readOnly={true}\` el campo no permite interacción (el calendario no se abre), " + "pero conserva la apariencia de un campo normal — a diferencia de \`disabled\`, no se ve atenuado."
      }
    }
  },
  args: {
    label: "Fecha",
    readOnly: true,
    defaultValue: new Date(2026, 3, 14)
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Con rango de fechas",
  parameters: {
    docs: {
      description: {
        story: "Usa \`minDate\` y/o \`maxDate\` para restringir el rango seleccionable. " + "Para control granular por día usa \`disableDay={(date) => boolean}\`."
      }
    }
  },
  args: {
    label: "Fecha de cancelación",
    helperText: "Solo fechas futuras.",
    minDate: new Date()
  },
  render: args => <div className="w-72"><DatePicker {...args} /></div>
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Los tres tamaños disponibles: \`xs\` (32 px, por defecto), \`sm\` (40 px) y \`md\` (48 px). " + "El ancho del campo se adapta al contenedor."
      }
    }
  },
  render: () => <div className="space-y-4 w-72">
      <DatePicker label="Tamaño xs (default)" size="xs" placeholder="–/–/–" />
      <DatePicker label="Tamaño sm" size="sm" placeholder="–/–/–" />
      <DatePicker label="Tamaño md" size="md" placeholder="–/–/–" />
    </div>
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Todos los estados",
  render: () => <div className="grid grid-cols-2 gap-6 max-w-2xl">
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">DEFAULT (VACÍO)</p>
        <DatePicker label="Fecha" placeholder="–/–/–" />
      </div>
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">CON VALOR</p>
        <DatePicker label="Fecha" defaultValue={new Date(2026, 3, 14)} />
      </div>
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">CON ERROR</p>
        <DatePicker label="Fecha" errorText="La fecha no es válida." />
      </div>
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">DESHABILITADO</p>
        <DatePicker label="Fecha" disabled defaultValue={new Date(2026, 3, 14)} />
      </div>
    </div>
}`,...O.parameters?.docs?.source}}};const Ue=["Default","ConValor","Clearable","Loading","ConError","ConTextoDeAyuda","Disabled","SoloLectura","ConRangoDeFechas","Tamaños","TodosLosEstados"];export{k as Clearable,T as ConError,V as ConRangoDeFechas,E as ConTextoDeAyuda,S as ConValor,N as Default,L as Disabled,F as Loading,M as SoloLectura,P as Tamaños,O as TodosLosEstados,Ue as __namedExportsOrder,We as default};
