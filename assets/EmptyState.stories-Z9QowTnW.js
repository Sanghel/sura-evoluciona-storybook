import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{a as f}from"./utils-7IX6LjdP.js";import{B as c}from"./Button-BkpDUrET.js";import"./index-Bc2G9s8g.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-BMe46fMM.js";import"./Icon-cz8gTyY9.js";function d({icon:o,src:r,alt:u="",title:p,description:n,action:i,className:l,...m}){const x=r||o;return a.jsxs("div",{className:f("sura:flex sura:flex-col sura:items-center sura:justify-center sura:gap-2 sura:py-20 sura:px-6 sura:text-center",l),...m,children:[x&&(r?a.jsx("img",{src:r,alt:u,className:"sura:mb-2 sura:max-h-[160px] sura:object-contain"}):a.jsx("div",{className:"sura:flex sura:items-center sura:justify-center sura:w-20 sura:h-20 sura:rounded-full sura:bg-fondo-4 sura:text-primary sura:mb-2",children:o})),a.jsx("h3",{className:"sura:text-[20px] sura:font-bold sura:text-sura-negro",children:p}),n&&a.jsx("p",{className:"sura:text-[14px] sura:text-gris-400 sura:max-w-[400px]",children:n}),i&&a.jsx("div",{className:"sura:mt-4",children:i})]})}d.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"Feedback/EmptyState",component:d,tags:["autodocs"]},e={args:{title:"No tienes pólizas activas",description:"Cuando contrates un seguro aparecerá aquí con toda la información."}},t={args:{title:"Sin resultados",description:"No encontramos pólizas con los filtros seleccionados. Intenta con otros criterios.",action:a.jsx(c,{variant:"primary",children:"Cotizar ahora"})}},s={name:"Con imagen (src)",args:{src:"https://placehold.co/320x160/EEF4FF/2D6DF6?text=Sin+datos",alt:"Sin datos disponibles",title:"Aún no tienes información",description:"Cuando haya datos disponibles los verás aquí.",action:a.jsx(c,{variant:"primary",children:"Ir al inicio"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No tienes pólizas activas",
    description: "Cuando contrates un seguro aparecerá aquí con toda la información."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sin resultados",
    description: "No encontramos pólizas con los filtros seleccionados. Intenta con otros criterios.",
    action: <Button variant="primary">Cotizar ahora</Button>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Con imagen (src)",
  args: {
    src: "https://placehold.co/320x160/EEF4FF/2D6DF6?text=Sin+datos",
    alt: "Sin datos disponibles",
    title: "Aún no tienes información",
    description: "Cuando haya datos disponibles los verás aquí.",
    action: <Button variant="primary">Ir al inicio</Button>
  }
}`,...s.parameters?.docs?.source}}};const E=["Default","WithAction","WithImage"];export{e as Default,t as WithAction,s as WithImage,E as __namedExportsOrder,q as default};
