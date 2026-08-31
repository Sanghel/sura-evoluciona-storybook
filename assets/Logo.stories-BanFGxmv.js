import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as r}from"./Logo-OYBu93P7.js";import"./index-Bc2G9s8g.js";import"./utils-7IX6LjdP.js";const h={title:"Brand/Logo",component:r,tags:["autodocs"],argTypes:{type:{control:"inline-radio",options:["full","symbol"]},variant:{control:"select",options:["color","brand","white","mono"]},height:{control:{type:"range",min:20,max:80,step:4}}}},a={args:{type:"full",variant:"color",height:40}},o={args:{type:"full",variant:"brand",height:40}},t={args:{type:"full",variant:"white",height:40},parameters:{backgrounds:{default:"dark"}}},s={args:{type:"symbol",variant:"brand",height:40}},n={args:{type:"symbol",variant:"white",height:40},parameters:{backgrounds:{default:"dark"}}},i={render:()=>e.jsxs("div",{style:{color:"#111827"},className:"flex items-end gap-6",children:[e.jsx(r,{type:"symbol",variant:"mono",height:40}),e.jsx("div",{style:{color:"#2D6DF6"},children:e.jsx(r,{type:"symbol",variant:"mono",height:40})})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex items-end gap-8",children:[e.jsx(r,{type:"full",variant:"color",height:40}),e.jsx(r,{type:"full",variant:"brand",height:40})]}),e.jsxs("div",{className:"flex items-end gap-8",children:[e.jsx(r,{type:"symbol",variant:"brand",height:48}),e.jsx("div",{style:{color:"#111827"},children:e.jsx(r,{type:"symbol",variant:"mono",height:48})})]})]})},c={render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsx(r,{type:"full",variant:"color",height:24}),e.jsx(r,{type:"full",variant:"color",height:32}),e.jsx(r,{type:"full",variant:"color",height:40}),e.jsx(r,{type:"full",variant:"color",height:56})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "full",
    variant: "color",
    height: 40
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "full",
    variant: "brand",
    height: 40
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "full",
    variant: "white",
    height: 40
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "symbol",
    variant: "brand",
    height: 40
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "symbol",
    variant: "white",
    height: 40
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "#111827"
  }} className="flex items-end gap-6">
      <Logo type="symbol" variant="mono" height={40} />
      <div style={{
      color: "#2D6DF6"
    }}>
        <Logo type="symbol" variant="mono" height={40} />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex items-end gap-8">
        <Logo type="full" variant="color" height={40} />
        <Logo type="full" variant="brand" height={40} />
      </div>
      <div className="flex items-end gap-8">
        <Logo type="symbol" variant="brand" height={48} />
        <div style={{
        color: "#111827"
      }}>
          <Logo type="symbol" variant="mono" height={48} />
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      <Logo type="full" variant="color" height={24} />
      <Logo type="full" variant="color" height={32} />
      <Logo type="full" variant="color" height={40} />
      <Logo type="full" variant="color" height={56} />
    </div>
}`,...c.parameters?.docs?.source}}};const y=["Color","Brand","White","Symbol","SymbolWhite","SymbolMono","AllVariants","Sizes"];export{l as AllVariants,o as Brand,a as Color,c as Sizes,s as Symbol,i as SymbolMono,n as SymbolWhite,t as White,y as __namedExportsOrder,h as default};
