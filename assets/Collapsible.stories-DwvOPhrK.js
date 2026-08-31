import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as o}from"./index-Bc2G9s8g.js";import{R as l,C as r,a as n}from"./index-CDP0LBjR.js";import{B as i}from"./Button-BkpDUrET.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-g0ARl7yI.js";import"./index-MerDaaRu.js";import"./index-ByoG_5Py.js";import"./index-BC2HDEX5.js";import"./index-BQiukGOz.js";import"./index-EGqfdL98.js";import"./index-BMe46fMM.js";import"./utils-7IX6LjdP.js";import"./Icon-cz8gTyY9.js";const p=l,c=r,m=n,B={title:"Navegación/Collapsible",tags:["autodocs"]},t={render:()=>{const[s,a]=o.useState(!1);return e.jsxs(p,{open:s,onOpenChange:a,className:"w-full max-w-sm space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-4",children:[e.jsx("p",{className:"text-[14px] font-semibold",children:"Datos adicionales del vehículo"}),e.jsx(c,{asChild:!0,children:e.jsx(i,{variant:"tertiary",size:"sm",children:s?"Ocultar":"Ver más"})})]}),e.jsxs(m,{className:"px-4 pb-2 space-y-1",children:[e.jsx("p",{className:"text-caption text-gris-500",children:"Marca: Toyota"}),e.jsx("p",{className:"text-caption text-gris-500",children:"Modelo: Corolla"}),e.jsx("p",{className:"text-caption text-gris-500",children:"Año: 2023"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
        <div className="flex items-center justify-between px-4">
          <p className="text-[14px] font-semibold">Datos adicionales del vehículo</p>
          <CollapsibleTrigger asChild>
            <Button variant="tertiary" size="sm">{open ? "Ocultar" : "Ver más"}</Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="px-4 pb-2 space-y-1">
          <p className="text-caption text-gris-500">Marca: Toyota</p>
          <p className="text-caption text-gris-500">Modelo: Corolla</p>
          <p className="text-caption text-gris-500">Año: 2023</p>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...t.parameters?.docs?.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,B as default};
