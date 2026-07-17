import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{I as r}from"./Input-GjmvTuSd.js";import"./index-Bc2G9s8g.js";import"./utils-BP2HNEMH.js";import"./Spinner-CIWr9BkK.js";const a=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 4.5C2 3.67 2.67 3 3.5 3H6.38L7.88 4.5H12.5C13.33 4.5 14 5.17 14 6V11.5C14 12.33 13.33 13 12.5 13H3.5C2.67 13 2 12.33 2 11.5V4.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})}),E={title:"Primitivas/Input",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["contorneado","subrayado"]},size:{control:"select",options:["sm","md"]},disabled:{control:"boolean"},loading:{control:"boolean"}}},l={args:{label:"Etiqueta",placeholder:"Valor Relleno"}},t={args:{label:"Etiqueta",defaultValue:"Valor Relleno"}},n={args:{label:"Correo electrónico",placeholder:"tucorreo@ejemplo.com",helperText:"Te enviaremos la cotización aquí."}},s={args:{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda"}},c={args:{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0}},d={args:{label:"Etiqueta",placeholder:"Valor Relleno",loading:!0}},i={args:{label:"Etiqueta",placeholder:"Valor Relleno",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}},u={args:{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}},p={args:{label:"Etiqueta",placeholder:"Valor Relleno",variant:"subrayado"}},x={args:{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",variant:"subrayado"}},m={args:{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0,variant:"subrayado"}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-5 max-w-sm p-6 bg-white",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"md (default) · h-12"}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",size:"md",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"sm · h-10"}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",size:"sm",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})})]})]})},g={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-10 gap-y-5 max-w-2xl p-6 bg-white",children:[e.jsx("p",{className:"text-eyebrow text-gris-400 col-span-1",children:"Subrayado"}),e.jsx("p",{className:"text-eyebrow text-gris-400 col-span-1",children:"Contorneado"}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",variant:"subrayado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",variant:"contorneado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",defaultValue:"Valor Relleno",variant:"subrayado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",defaultValue:"Valor Relleno",variant:"contorneado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",variant:"subrayado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",variant:"contorneado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0,variant:"subrayado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})}),e.jsx(r,{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0,variant:"contorneado",leftIcon:e.jsx(a,{}),rightIcon:e.jsx(o,{})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Valor Relleno"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Correo electrónico",
    placeholder: "tucorreo@ejemplo.com",
    helperText: "Te enviaremos la cotización aquí."
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Valor Relleno",
    errorText: "Texto de ayuda"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno",
    loading: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno",
    leftIcon: <CircleXIcon />,
    rightIcon: <FolderIcon />
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Valor Relleno",
    errorText: "Texto de ayuda",
    leftIcon: <CircleXIcon />,
    rightIcon: <FolderIcon />
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno",
    variant: "subrayado"
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Valor Relleno",
    errorText: "Texto de ayuda",
    variant: "subrayado"
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Valor Relleno",
    disabled: true,
    variant: "subrayado"
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5 max-w-sm p-6 bg-white">
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">md (default) · h-12</p>
        <Input label="Etiqueta" placeholder="Valor Relleno" size="md" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      </div>
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">sm · h-10</p>
        <Input label="Etiqueta" placeholder="Valor Relleno" size="sm" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-x-10 gap-y-5 max-w-2xl p-6 bg-white">
      <p className="text-eyebrow text-gris-400 col-span-1">Subrayado</p>
      <p className="text-eyebrow text-gris-400 col-span-1">Contorneado</p>

      {/* Default */}
      <Input label="Etiqueta" placeholder="Valor Relleno" variant="subrayado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      <Input label="Etiqueta" placeholder="Valor Relleno" variant="contorneado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />

      {/* Filled */}
      <Input label="Etiqueta" defaultValue="Valor Relleno" variant="subrayado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      <Input label="Etiqueta" defaultValue="Valor Relleno" variant="contorneado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />

      {/* Error */}
      <Input label="Etiqueta" defaultValue="Valor Relleno" errorText="Texto de ayuda" variant="subrayado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      <Input label="Etiqueta" defaultValue="Valor Relleno" errorText="Texto de ayuda" variant="contorneado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />

      {/* Disabled */}
      <Input label="Etiqueta" placeholder="Valor Relleno" disabled variant="subrayado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
      <Input label="Etiqueta" placeholder="Valor Relleno" disabled variant="contorneado" leftIcon={<CircleXIcon />} rightIcon={<FolderIcon />} />
    </div>
}`,...g.parameters?.docs?.source}}};const y=["Default","Filled","ConTextoDeAyuda","ConError","Disabled","Loading","ConIconos","ConIconosError","Subrayado","SubrayadoConError","SubrayadoDisabled","Tamaños","TodosLosEstados"];export{s as ConError,i as ConIconos,u as ConIconosError,n as ConTextoDeAyuda,l as Default,c as Disabled,t as Filled,d as Loading,p as Subrayado,x as SubrayadoConError,m as SubrayadoDisabled,b as Tamaños,g as TodosLosEstados,y as __namedExportsOrder,E as default};
