import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as o}from"./index-Bc2G9s8g.js";import{c as g}from"./index-BMe46fMM.js";import{a as t}from"./utils-7IX6LjdP.js";import{B as x}from"./Button-BkpDUrET.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";import"./Icon-cz8gTyY9.js";const N=g("sura:bg-white sura:flex sura:flex-col",{variants:{variant:{brand:"sura:rounded-[12px] sura:shadow-card",tool:"sura:rounded-[16px] sura:shadow-card-soft"},bordered:{true:"sura:border sura:border-gris-200",false:""}},defaultVariants:{variant:"tool",bordered:!1}}),d=o.forwardRef(({className:a,variant:e,bordered:s,...h},f)=>r.jsx("div",{ref:f,className:t(N({variant:e,bordered:s}),a),...h}));d.displayName="Card";const n=o.forwardRef(({className:a,...e},s)=>r.jsx("div",{ref:s,className:t("sura:flex sura:flex-col sura:gap-1.5 sura:p-5 sura:pb-0",a),...e}));n.displayName="CardHeader";const i=o.forwardRef(({className:a,...e},s)=>r.jsx("h3",{ref:s,className:t("sura:text-[15px] sura:font-bold sura:text-sura-negro sura:leading-tight",a),...e}));i.displayName="CardTitle";const u=o.forwardRef(({className:a,...e},s)=>r.jsx("p",{ref:s,className:t("sura:text-[13px] sura:text-gris-400",a),...e}));u.displayName="CardDescription";const c=o.forwardRef(({className:a,...e},s)=>r.jsx("div",{ref:s,className:t("sura:p-5 sura:pt-4",a),...e}));c.displayName="CardContent";const C=o.forwardRef(({className:a,...e},s)=>r.jsx("div",{ref:s,className:t("sura:flex sura:items-center sura:gap-3 sura:p-5 sura:pt-0 sura:border-t sura:border-gris-100 sura:mt-auto",a),...e}));C.displayName="CardFooter";d.__docgenInfo={description:"",methods:[],displayName:"Card",composes:["VariantProps"]};n.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};i.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};u.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const B={title:"Layout/Card",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["brand","tool"]},bordered:{control:"boolean"}}},l={render:()=>r.jsxs(d,{variant:"brand",className:"max-w-sm",children:[r.jsxs(n,{children:[r.jsx(i,{children:"Seguro de Auto"}),r.jsx(u,{children:"Cobertura amplia para tu vehículo"})]}),r.jsx(c,{children:r.jsx("p",{className:"text-caption text-gris-500",children:"Protege tu auto contra robo, daños y responsabilidad civil con la mejor cobertura del mercado."})}),r.jsx(C,{children:r.jsx(x,{variant:"primary",size:"sm",children:"Cotizar"})})]})},m={render:()=>r.jsx("div",{className:"theme-tool",children:r.jsxs(d,{variant:"tool",className:"max-w-sm",children:[r.jsxs(n,{children:[r.jsx(i,{children:"Detalle de póliza"}),r.jsx(u,{children:"No. 00123456"})]}),r.jsx(c,{children:r.jsx("p",{className:"text-tool-body text-gris-500",children:"Vigencia: 01 enero 2025 – 01 enero 2026"})}),r.jsx(C,{children:r.jsx(x,{variant:"secondary",size:"sm",children:"Ver detalle"})})]})})},p={render:()=>r.jsxs(d,{variant:"brand",bordered:!0,className:"max-w-sm",children:[r.jsx(n,{children:r.jsx(i,{children:"Póliza activa"})}),r.jsx(c,{children:r.jsx("p",{className:"text-caption text-gris-500",children:"Cobertura amplia vigente hasta enero 2026."})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="brand" className="max-w-sm">
      <CardHeader>
        <CardTitle>Seguro de Auto</CardTitle>
        <CardDescription>Cobertura amplia para tu vehículo</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-caption text-gris-500">
          Protege tu auto contra robo, daños y responsabilidad civil con la mejor cobertura del mercado.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">Cotizar</Button>
      </CardFooter>
    </Card>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="theme-tool">
      <Card variant="tool" className="max-w-sm">
        <CardHeader>
          <CardTitle>Detalle de póliza</CardTitle>
          <CardDescription>No. 00123456</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-tool-body text-gris-500">Vigencia: 01 enero 2025 – 01 enero 2026</p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">Ver detalle</Button>
        </CardFooter>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="brand" bordered className="max-w-sm">
      <CardHeader>
        <CardTitle>Póliza activa</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-caption text-gris-500">Cobertura amplia vigente hasta enero 2026.</p>
      </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};const D=["Brand","Tool","Bordered"];export{p as Bordered,l as Brand,m as Tool,D as __namedExportsOrder,B as default};
