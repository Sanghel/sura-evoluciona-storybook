import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{c as g}from"./index-DQfP3kMs.js";import{a as l}from"./utils-BP2HNEMH.js";import"./index-Bc2G9s8g.js";const h=g("sura:flex sura:items-start sura:gap-3.5 sura:p-4 sura:rounded-[12px] sura:border",{variants:{variant:{ok:"sura:bg-success-2 sura:border-success-border",warn:"sura:bg-warning-2 sura:border-warning-border",block:"sura:bg-danger-2 sura:border-danger-border",loading:"sura:bg-fondo-5 sura:border-gris-200"}},defaultVariants:{variant:"ok"}}),v={ok:"sura:bg-success-alt",warn:"sura:bg-warning-1",block:"sura:bg-danger-1",loading:"sura:bg-gris-300"},f={ok:r.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",children:r.jsx("path",{d:"M1 5.5L5 9.5L13 1.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),warn:r.jsxs("svg",{width:"14",height:"13",viewBox:"0 0 16 14",fill:"none",children:[r.jsx("path",{d:"M8 1L15 13H1L8 1Z",stroke:"white",strokeWidth:"1.5",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 6v3M8 10v1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})]}),block:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"white",strokeWidth:"1.5"}),r.jsx("path",{d:"M5 8h6",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})]}),loading:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"sura:animate-spin",children:r.jsx("path",{d:"M8 2a6 6 0 110 12A6 6 0 018 2z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeDasharray:"12 20"})})};function e({variant:n="ok",title:u,description:c,className:p,...m}){const d=n;return r.jsxs("div",{className:l(h({variant:n}),p),...m,children:[r.jsx("div",{className:l("sura:w-7 sura:h-7 sura:rounded-full sura:flex sura:items-center sura:justify-center sura:shrink-0",v[d]),children:f[d]}),r.jsxs("div",{className:"sura:flex-1 sura:min-w-0",children:[r.jsx("p",{className:"sura:text-[14px] sura:font-bold sura:text-sura-negro",children:u}),c&&r.jsx("p",{className:"sura:text-[13px] sura:text-gris-400 sura:mt-0.5",children:c})]})]})}e.__docgenInfo={description:"",methods:[],displayName:"ValidationCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{defaultValue:{value:'"ok"',computed:!1},required:!1}},composes:["VariantProps"]};const j={title:"Feedback/ValidationCard",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["ok","warn","block","loading"]}}},a={args:{variant:"ok",title:"Documentos completos",description:"Todos los documentos requeridos han sido verificados correctamente."}},o={args:{variant:"warn",title:"Datos incompletos",description:"Falta completar la información del beneficiario principal."}},s={args:{variant:"block",title:"No elegible",description:"El vehículo no cumple los requisitos mínimos para esta cobertura."}},i={args:{variant:"loading",title:"Verificando información",description:"Estamos consultando el historial del vehículo..."}},t={render:()=>r.jsxs("div",{className:"space-y-3 max-w-md",children:[r.jsx(e,{variant:"ok",title:"RFC válido",description:"El RFC fue verificado ante el SAT."}),r.jsx(e,{variant:"warn",title:"Número de serie no encontrado",description:"Verifica que el VIN sea correcto."}),r.jsx(e,{variant:"block",title:"Vehículo sin factura",description:"Se requiere la factura original para continuar."}),r.jsx(e,{variant:"loading",title:"Consultando REPUVE",description:"Por favor espera un momento..."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ok",
    title: "Documentos completos",
    description: "Todos los documentos requeridos han sido verificados correctamente."
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    title: "Datos incompletos",
    description: "Falta completar la información del beneficiario principal."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "block",
    title: "No elegible",
    description: "El vehículo no cumple los requisitos mínimos para esta cobertura."
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "loading",
    title: "Verificando información",
    description: "Estamos consultando el historial del vehículo..."
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-md">
      <ValidationCard variant="ok" title="RFC válido" description="El RFC fue verificado ante el SAT." />
      <ValidationCard variant="warn" title="Número de serie no encontrado" description="Verifica que el VIN sea correcto." />
      <ValidationCard variant="block" title="Vehículo sin factura" description="Se requiere la factura original para continuar." />
      <ValidationCard variant="loading" title="Consultando REPUVE" description="Por favor espera un momento..." />
    </div>
}`,...t.parameters?.docs?.source}}};const V=["Ok","Warn","Block","Loading","AllStates"];export{t as AllStates,s as Block,i as Loading,a as Ok,o as Warn,V as __namedExportsOrder,j as default};
