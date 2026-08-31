import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as s}from"./Label-DZBbIS_k.js";import"./index-Bc2G9s8g.js";import"./index-D98iFuva.js";import"./index-C2Uka6Rc.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./utils-7IX6LjdP.js";const p={title:"Primitivas/Label",component:s,tags:["autodocs"],argTypes:{required:{control:"boolean"}}},a={args:{children:"Etiqueta"}},t={args:{children:"Etiqueta",required:!0}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs text-gris-400",children:"Default"}),e.jsx(s,{children:"Etiqueta"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs text-gris-400",children:"Focus"}),e.jsx(s,{className:"text-primary",children:"Etiqueta"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs text-gris-400",children:"Error"}),e.jsx(s,{className:"text-danger-1",children:"Etiqueta"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs text-gris-400",children:"Disabled"}),e.jsx(s,{className:"text-gris-400",children:"Etiqueta"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs text-gris-400",children:"Required"}),e.jsx(s,{required:!0,children:"Etiqueta"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Etiqueta"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Etiqueta",
    required: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-gris-400">Default</span>
        <Label>Etiqueta</Label>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-gris-400">Focus</span>
        <Label className="text-primary">Etiqueta</Label>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-gris-400">Error</span>
        <Label className="text-danger-1">Etiqueta</Label>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-gris-400">Disabled</span>
        <Label className="text-gris-400">Etiqueta</Label>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-gris-400">Required</span>
        <Label required>Etiqueta</Label>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const u=["Default","Required","Estados"];export{a as Default,r as Estados,t as Required,u as __namedExportsOrder,p as default};
