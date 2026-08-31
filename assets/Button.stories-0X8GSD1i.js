import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{B as e}from"./Button-BkpDUrET.js";import"./index-Bc2G9s8g.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./index-BMe46fMM.js";import"./utils-7IX6LjdP.js";import"./Icon-cz8gTyY9.js";const w={title:"Primitivas/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["fill","outlined","ghost","back"]},color:{control:"select",options:["primary","secondary","yellow","danger","dark"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},a={args:{children:"Cotizar",variant:"fill",color:"primary",size:"md"}},n={args:{children:"Cotizar",variant:"fill",color:"yellow",size:"md"}},s={args:{children:"Cancelar póliza",variant:"fill",color:"danger",size:"md"}},i={args:{children:"Ver detalle",variant:"outlined",color:"primary",size:"md"}},o={args:{children:"Guardar",variant:"outlined",color:"yellow",size:"md"}},t={args:{children:"Cancelar póliza",variant:"outlined",color:"danger",size:"md"}},l={args:{children:"Ver más",variant:"ghost",color:"primary",size:"md"}},c={args:{children:"Eliminar",variant:"ghost",color:"danger",size:"md"}},d={args:{children:"Aceptar",variant:"fill",color:"dark",size:"md"}},m={args:{children:"Cotizar",variant:"fill",color:"primary",size:"md",disabled:!0}},p={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(e,{size:"sm",children:"Pequeño"}),r.jsx(e,{size:"md",children:"Mediano"}),r.jsx(e,{size:"lg",children:"Grande"})]})},u={args:{children:"Volver",variant:"back"}},g={render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gris-400 mb-3",children:"Fill · Primary"}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(e,{variant:"fill",color:"primary",size:"lg",children:"Cotizar"}),r.jsx(e,{variant:"fill",color:"primary",size:"md",children:"Cotizar"}),r.jsx(e,{variant:"fill",color:"primary",size:"sm",children:"Cotizar"}),r.jsx(e,{variant:"fill",color:"primary",disabled:!0,children:"Cotizar"})]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gris-400 mb-3",children:"Fill · Yellow"}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(e,{variant:"fill",color:"yellow",size:"lg",children:"Cotizar →"}),r.jsx(e,{variant:"fill",color:"yellow",size:"md",children:"Guardar"}),r.jsx(e,{variant:"fill",color:"yellow",size:"sm",children:"Continuar"})]})]})]})},v={render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gris-400 mb-3",children:"Outlined"}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(e,{variant:"outlined",color:"primary",children:"Ver detalle"}),r.jsx(e,{variant:"outlined",color:"yellow",children:"Guardar"}),r.jsx(e,{variant:"outlined",color:"danger",children:"Cancelar póliza"})]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gris-400 mb-3",children:"Ghost"}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(e,{variant:"ghost",color:"primary",children:"Ver más"}),r.jsx(e,{variant:"ghost",color:"danger",children:"Eliminar"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cotizar",
    variant: "fill",
    color: "primary",
    size: "md"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cotizar",
    variant: "fill",
    color: "yellow",
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cancelar póliza",
    variant: "fill",
    color: "danger",
    size: "md"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ver detalle",
    variant: "outlined",
    color: "primary",
    size: "md"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Guardar",
    variant: "outlined",
    color: "yellow",
    size: "md"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cancelar póliza",
    variant: "outlined",
    color: "danger",
    size: "md"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ver más",
    variant: "ghost",
    color: "primary",
    size: "md"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Eliminar",
    variant: "ghost",
    color: "danger",
    size: "md"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Aceptar",
    variant: "fill",
    color: "dark",
    size: "md"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cotizar",
    variant: "fill",
    color: "primary",
    size: "md",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Volver",
    variant: "back"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gris-400 mb-3">
          Fill · Primary
        </p>
        <div className="flex items-center gap-3">
          <Button variant="fill" color="primary" size="lg">
            Cotizar
          </Button>
          <Button variant="fill" color="primary" size="md">
            Cotizar
          </Button>
          <Button variant="fill" color="primary" size="sm">
            Cotizar
          </Button>
          <Button variant="fill" color="primary" disabled>
            Cotizar
          </Button>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gris-400 mb-3">
          Fill · Yellow
        </p>
        <div className="flex items-center gap-3">
          <Button variant="fill" color="yellow" size="lg">
            Cotizar →
          </Button>
          <Button variant="fill" color="yellow" size="md">
            Guardar
          </Button>
          <Button variant="fill" color="yellow" size="sm">
            Continuar
          </Button>
        </div>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gris-400 mb-3">
          Outlined
        </p>
        <div className="flex items-center gap-3">
          <Button variant="outlined" color="primary">
            Ver detalle
          </Button>
          <Button variant="outlined" color="yellow">
            Guardar
          </Button>
          <Button variant="outlined" color="danger">
            Cancelar póliza
          </Button>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gris-400 mb-3">
          Ghost
        </p>
        <div className="flex items-center gap-3">
          <Button variant="ghost" color="primary">
            Ver más
          </Button>
          <Button variant="ghost" color="danger">
            Eliminar
          </Button>
        </div>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};const C=["Primary","Yellow","danger","Secondary","SecondaryYellow","Danger","Tertiary","TertiaryDanger","Dark","Disabled","AllSizes","Back","PrimaryGroup","SecondaryGroup"];export{p as AllSizes,u as Back,t as Danger,d as Dark,m as Disabled,a as Primary,g as PrimaryGroup,i as Secondary,v as SecondaryGroup,o as SecondaryYellow,l as Tertiary,c as TertiaryDanger,n as Yellow,C as __namedExportsOrder,s as danger,w as default};
