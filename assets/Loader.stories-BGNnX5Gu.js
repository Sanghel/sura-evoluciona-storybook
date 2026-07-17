import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{L as n}from"./Loader-BWzBuGvl.js";import"./index-Bc2G9s8g.js";import"./utils-BP2HNEMH.js";const c={title:"Feedback/Loader",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","blue"]},svgClassName:{control:"text"},containerClassName:{control:"text"}}},s={args:{variant:"default",svgClassName:"h-24 w-24"}},e={args:{variant:"blue",svgClassName:"h-24 w-24"}},r={render:o=>a.jsx(n,{...o,svgClassName:"h-16 w-16"}),args:{variant:"default"}},t={render:()=>a.jsxs("div",{className:"grid gap-8 p-4 sura:h-40",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-semibold mb-2",children:"Default"}),a.jsx(n,{variant:"default",svgClassName:"h-24 w-24"})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-semibold mb-2",children:"Blue"}),a.jsx(n,{variant:"blue",svgClassName:"h-24 w-24"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    svgClassName: "h-24 w-24"
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "blue",
    svgClassName: "h-24 w-24"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Loader {...args} svgClassName="h-16 w-16" />,
  args: {
    variant: "default"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-8 p-4 sura:h-40">
      <div>
        <p className="text-sm font-semibold mb-2">Default</p>
        <Loader variant="default" svgClassName="h-24 w-24" />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Blue</p>
        <Loader variant="blue" svgClassName="h-24 w-24" />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const u=["Default","Blue","CustomSize","AllVariants"];export{t as AllVariants,e as Blue,r as CustomSize,s as Default,u as __namedExportsOrder,c as default};
