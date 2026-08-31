import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{a as l}from"./utils-7IX6LjdP.js";import{T as y}from"./Table-B2RLz-4g.js";import"./Checkbox-BjKnmOnB.js";import"./index-g0ARl7yI.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-MerDaaRu.js";import"./index-ByoG_5Py.js";import"./index-DTK07sTh.js";import"./index-DdEr2eXK.js";import"./index-BC2HDEX5.js";import"./Loader-BtLVs6g4.js";import"./Select-KI8aWJg8.js";import"./index-BdQq_4o_.js";import"./index-BJShxvVY.js";import"./index-4Qn5PQE1.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-DlTO3c3v.js";import"./index-DvWumoXY.js";import"./index-qaQ0HEkX.js";import"./Spinner-BvWaOwJy.js";import"./index-C4fGeIlk.js";const C=d.createContext(null);function v({value:a,defaultValue:s,onValueChange:t,children:r,className:h}){const p=a!==void 0,[n,o]=d.useState(s),x=p?a:n,S=i=>{p||o(i),t?.(i)};return e.jsx(C.Provider,{value:{value:x,onValueChange:S},children:e.jsx("div",{className:l("sura:flex sura:flex-col sura:gap-3",h),role:"radiogroup",children:r})})}function c({value:a,selected:s,onSelect:t,disabled:r,children:h,className:p}){const n=d.useContext(C),o=n?a!==void 0&&n.value===a:!!s,x=()=>{r||(n&&a!==void 0?n.onValueChange(a):t?.())},S=i=>{(i.key===" "||i.key==="Enter")&&(i.preventDefault(),x())};return e.jsxs("div",{role:"radio","aria-checked":o,"aria-disabled":r,tabIndex:r?-1:0,onClick:x,onKeyDown:S,className:l("sura:relative sura:flex sura:items-center sura:gap-3 sura:rounded-xl sura:border-2 sura:px-4 sura:py-3.5","sura:cursor-pointer sura:transition-all sura:duration-200 sura:focus:outline-none sura:focus:shadow-focus","sura:select-none",o?"sura:border-primary sura:bg-info-3":"sura:border-gris-200 sura:bg-white sura:hover:border-gris-300",r&&"sura:opacity-50 sura:cursor-not-allowed",p),children:[e.jsx("span",{"aria-hidden":"true",className:l("sura:shrink-0 sura:h-5 sura:w-5 sura:rounded-full sura:border-2 sura:flex sura:items-center sura:justify-center sura:transition-colors sura:duration-200",o?"sura:bg-primary sura:border-primary":"sura:border-gris-300 sura:bg-white"),children:o&&e.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:e.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{className:"sura:flex sura:flex-1 sura:min-w-0 sura:items-center sura:gap-4",children:h})]})}const u=({children:a,className:s})=>e.jsx("div",{className:l("sura:flex-1 sura:min-w-0",s),children:a}),m=({children:a,className:s})=>e.jsx("div",{className:l("sura:shrink-0 sura:text-right",s),children:a});v.__docgenInfo={description:"",methods:[],displayName:"SelectableCardGroup",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"SelectableCard",props:{value:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"SelectableCardBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"SelectableCardSide",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"Datos/SelectableCard",tags:["autodocs"],parameters:{layout:"padded"}},N=[{id:"FD-2026-000891",poliza:"MX-VID-2024-001482",tipo:"BANCO",fecha:"Ingresada 02/05/2026",ref:"SPEI-20260502-00412",monto:"$ 9,300.00"},{id:"FD-2026-000892",poliza:"MX-VID-2024-001482",tipo:"BANCO",fecha:"Ingresada 05/05/2026",ref:"DOM-BBVA-20260505-8810",monto:"$ 2,100.00"},{id:"FD-2026-000893",poliza:"MX-VID-2024-001483",tipo:"EFECTIVO",fecha:"Ingresada 08/05/2026",ref:"EFE-20260508-0031",monto:"$ 650.00"}];function j({folio:a}){return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs("span",{className:"text-eyebrow text-gris-400",children:["PÓLIZA · ",a.poliza]}),e.jsx("span",{className:"text-eyebrow font-bold text-primary bg-info-2 px-1.5 py-0.5 rounded-sm",children:a.tipo})]}),e.jsx("div",{className:"text-tool-body font-bold text-primary",children:a.id}),e.jsx("div",{className:"text-small text-gris-400 mt-0.5",children:a.fecha}),e.jsx("div",{className:"text-eyebrow text-gris-400 mt-1 tracking-wide",children:a.ref})]}),e.jsxs(m,{children:[e.jsx("div",{className:"text-eyebrow text-gris-400 mb-1",children:"DISPONIBLE"}),e.jsx("div",{className:"text-tool-h3 font-bold text-secondary",children:a.monto})]})]})}const b={name:"Grupo seleccionable (folios)",render:()=>{const[a,s]=d.useState("FD-2026-000891");return e.jsx(v,{value:a,onValueChange:s,className:"max-w-2xl",children:N.map(t=>e.jsx(c,{value:t.id,children:e.jsx(j,{folio:t})},t.id))})}},g={name:"Cards simples (sin grupo)",render:()=>{const[a,s]=d.useState(!1);return e.jsxs("div",{className:"max-w-md space-y-3",children:[e.jsxs(c,{selected:a,onSelect:()=>s(t=>!t),children:[e.jsxs(u,{children:[e.jsx("div",{className:"font-semibold text-sura-negro",children:"Cobertura amplia"}),e.jsx("div",{className:"text-small text-gris-400",children:"Cubre daños propios, terceros y robo total"})]}),e.jsx(m,{children:e.jsx("div",{className:"text-tool-body font-bold text-secondary",children:"$1,250/mes"})})]}),e.jsxs(c,{disabled:!0,children:[e.jsxs(u,{children:[e.jsx("div",{className:"font-semibold text-sura-negro",children:"Cobertura básica"}),e.jsx("div",{className:"text-small text-gris-400",children:"No disponible en tu región"})]}),e.jsx(m,{children:e.jsx("div",{className:"text-tool-body font-bold text-gris-400",children:"$650/mes"})})]})]})}},f={name:"Con TableStatusBadge",render:()=>{const[a,s]=d.useState("p1"),t=[{id:"p1",nombre:"Póliza Auto Premium",no:"00123456",variant:"info",estado:"Vigente"},{id:"p2",nombre:"Póliza Vida Plus",no:"00456789",variant:"success",estado:"Pagada"},{id:"p3",nombre:"Póliza Hogar",no:"00789012",variant:"warning",estado:"Suspendida"}];return e.jsx(v,{value:a,onValueChange:s,className:"max-w-lg",children:t.map(r=>e.jsxs(c,{value:r.id,children:[e.jsxs(u,{children:[e.jsx("div",{className:"font-semibold text-sura-negro",children:r.nombre}),e.jsxs("div",{className:"text-small text-gris-400",children:["No. ",r.no]})]}),e.jsx(m,{children:e.jsx(y,{variant:r.variant,children:r.estado})})]},r.id))})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Grupo seleccionable (folios)",
  render: () => {
    const [selected, setSelected] = React.useState("FD-2026-000891");
    return <SelectableCardGroup value={selected} onValueChange={setSelected} className="max-w-2xl">
        {folios.map(f => <SelectableCard key={f.id} value={f.id}>
            <FolioCard folio={f} />
          </SelectableCard>)}
      </SelectableCardGroup>;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Cards simples (sin grupo)",
  render: () => {
    const [sel, setSel] = React.useState(false);
    return <div className="max-w-md space-y-3">
        <SelectableCard selected={sel} onSelect={() => setSel(v => !v)}>
          <SelectableCardBody>
            <div className="font-semibold text-sura-negro">Cobertura amplia</div>
            <div className="text-small text-gris-400">Cubre daños propios, terceros y robo total</div>
          </SelectableCardBody>
          <SelectableCardSide>
            <div className="text-tool-body font-bold text-secondary">$1,250/mes</div>
          </SelectableCardSide>
        </SelectableCard>
        <SelectableCard disabled>
          <SelectableCardBody>
            <div className="font-semibold text-sura-negro">Cobertura básica</div>
            <div className="text-small text-gris-400">No disponible en tu región</div>
          </SelectableCardBody>
          <SelectableCardSide>
            <div className="text-tool-body font-bold text-gris-400">$650/mes</div>
          </SelectableCardSide>
        </SelectableCard>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Con TableStatusBadge",
  render: () => {
    const [selected, setSelected] = React.useState("p1");
    const polizas = [{
      id: "p1",
      nombre: "Póliza Auto Premium",
      no: "00123456",
      variant: "info" as const,
      estado: "Vigente"
    }, {
      id: "p2",
      nombre: "Póliza Vida Plus",
      no: "00456789",
      variant: "success" as const,
      estado: "Pagada"
    }, {
      id: "p3",
      nombre: "Póliza Hogar",
      no: "00789012",
      variant: "warning" as const,
      estado: "Suspendida"
    }];
    return <SelectableCardGroup value={selected} onValueChange={setSelected} className="max-w-lg">
        {polizas.map(p => <SelectableCard key={p.id} value={p.id}>
            <SelectableCardBody>
              <div className="font-semibold text-sura-negro">{p.nombre}</div>
              <div className="text-small text-gris-400">No. {p.no}</div>
            </SelectableCardBody>
            <SelectableCardSide>
              <TableStatusBadge variant={p.variant}>{p.estado}</TableStatusBadge>
            </SelectableCardSide>
          </SelectableCard>)}
      </SelectableCardGroup>;
  }
}`,...f.parameters?.docs?.source}}};const Y=["Default","Simple","ConEstados"];export{f as ConEstados,b as Default,g as Simple,Y as __namedExportsOrder,U as default};
