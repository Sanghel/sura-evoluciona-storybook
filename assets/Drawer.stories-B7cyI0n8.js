import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as o}from"./index-Bc2G9s8g.js";import{R as b,T as C,P as B,C as P,a as T,b as z,D as k,O as I}from"./index-iDDprhXU.js";import{a as n}from"./utils-7IX6LjdP.js";import{B as t}from"./Button-BkpDUrET.js";import{I as u}from"./Input-BiXa22ac.js";import{L as p}from"./Label-DZBbIS_k.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-g0ARl7yI.js";import"./index-BQiukGOz.js";import"./index-ByoG_5Py.js";import"./index-MerDaaRu.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-DvWumoXY.js";import"./index-BC2HDEX5.js";import"./index-EGqfdL98.js";import"./index-BMe46fMM.js";import"./Icon-cz8gTyY9.js";import"./Spinner-BvWaOwJy.js";import"./index-D98iFuva.js";const j=b,f=C,_=B,i=o.forwardRef(({className:r,children:a,...s},w)=>e.jsx(z,{ref:w,className:n("sura:shrink-0 sura:h-8 sura:w-8 sura:flex sura:items-center sura:justify-center sura:rounded-md","sura:text-gris-400 sura:hover:bg-fondo-5 sura:hover:text-sura-negro sura:transition-colors sura:duration-100","sura:focus:outline-none sura:focus:shadow-focus",r),...s,children:a??e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 1L13 13M13 1L1 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}));i.displayName="DrawerClose";const v=o.forwardRef(({className:r,...a},s)=>e.jsx(I,{ref:s,className:n("sura:fixed sura:inset-0 sura:z-50 sura:bg-[rgba(13,13,13,0.45)]","sura:data-[state=open]:animate-in sura:data-[state=closed]:animate-out","sura:data-[state=closed]:fade-out-0 sura:data-[state=open]:fade-in-0",r),...a}));v.displayName="DrawerOverlay";const L={right:"sura:data-[state=open]:slide-in-from-right sura:data-[state=closed]:slide-out-to-right",left:"sura:data-[state=open]:slide-in-from-left  sura:data-[state=closed]:slide-out-to-left"},M={right:"sura:right-0 sura:top-0 sura:bottom-0",left:"sura:left-0  sura:top-0 sura:bottom-0"},d=o.forwardRef(({className:r,children:a,side:s="right",...w},N)=>e.jsxs(_,{children:[e.jsx(v,{}),e.jsx(P,{ref:N,className:n("sura:fixed sura:z-50 sura:flex sura:flex-col","sura:w-full sura:max-w-[520px] sura:h-full sura:bg-white sura:shadow-modal","sura:data-[state=open]:animate-in sura:data-[state=closed]:animate-out sura:duration-300","sura:data-[state=closed]:fade-out-0 sura:data-[state=open]:fade-in-0",M[s],L[s],r),...w,children:a})]}));d.displayName="DrawerContent";const l=({className:r,...a})=>e.jsx("div",{className:n("sura:flex sura:items-center sura:justify-between sura:gap-4 sura:px-6 sura:py-4 sura:border-b sura:border-gris-200 sura:shrink-0",r),...a});l.displayName="DrawerHeader";const c=({className:r,...a})=>e.jsx("div",{className:n("sura:flex-1 sura:overflow-y-auto sura:px-6 sura:py-5",r),...a});c.displayName="DrawerBody";const D=({className:r,...a})=>e.jsx("div",{className:n("sura:flex sura:items-center sura:gap-3 sura:px-6 sura:py-4 sura:border-t sura:border-gris-200 sura:shrink-0",r),...a});D.displayName="DrawerFooter";const m=o.forwardRef(({className:r,...a},s)=>e.jsx(T,{ref:s,className:n("sura:text-[18px] sura:font-bold sura:text-sura-negro sura:leading-tight",r),...a}));m.displayName="DrawerTitle";const y=o.forwardRef(({className:r,...a},s)=>e.jsx(k,{ref:s,className:n("sura:text-sm sura:text-gris-400",r),...a}));y.displayName="DrawerDescription";v.__docgenInfo={description:"",methods:[],displayName:"DrawerOverlay"};i.__docgenInfo={description:"",methods:[],displayName:"DrawerClose"};d.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{side:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};c.__docgenInfo={description:"",methods:[],displayName:"DrawerBody"};D.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"};m.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle"};y.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription"};const te={title:"Overlays/Drawer",tags:["autodocs"]},x={name:"Desde la derecha",render:()=>e.jsxs(j,{children:[e.jsx(f,{asChild:!0,children:e.jsx(t,{variant:"primary",children:"Ver detalle de póliza"})}),e.jsxs(d,{children:[e.jsxs(l,{children:[e.jsx(m,{children:"Póliza de Auto Premium"}),e.jsx(i,{})]}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-4 text-[14px] text-gris-500",children:[e.jsx(y,{children:"No. 00123456 · Vigente desde 01 ene 2025"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-6 gap-y-3 pt-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Asegurado"}),"María García López"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Vehículo"}),"Toyota Corolla 2023"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Vigencia fin"}),"01 enero 2026"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Suma asegurada"}),"$350,000 MXN"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Periodicidad"}),"Mensual"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gris-400 text-xs block mb-0.5",children:"Prima total"}),"$1,250.00 MXN"]})]})]})}),e.jsxs(D,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{variant:"tertiary",className:"mr-auto",children:"Cerrar"})}),e.jsx(t,{variant:"secondary",children:"Descargar PDF"}),e.jsx(t,{variant:"primary",children:"Editar póliza"})]})]})]})},h={name:"Desde la izquierda",render:()=>e.jsxs(j,{children:[e.jsx(f,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:"Abrir menú lateral"})}),e.jsxs(d,{side:"left",children:[e.jsxs(l,{children:[e.jsx(m,{children:"Menú de navegación"}),e.jsx(i,{})]}),e.jsx(c,{children:e.jsx("nav",{className:"space-y-1",children:["Inicio","Mis pólizas","Siniestros","Pagos","Documentos","Perfil"].map(r=>e.jsx("button",{className:"w-full text-left px-3 py-2.5 rounded-md text-[14px] text-sura-negro hover:bg-fondo-5 transition-colors",children:r},r))})})]})]})},g={name:"Con formulario",render:()=>e.jsxs(j,{children:[e.jsx(f,{asChild:!0,children:e.jsx(t,{variant:"primary",children:"Agregar beneficiario"})}),e.jsxs(d,{children:[e.jsxs(l,{children:[e.jsx(m,{children:"Agregar beneficiario"}),e.jsx(i,{})]}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(p,{children:"Nombre completo"}),e.jsx(u,{placeholder:"Ej. Carlos Gómez Ruiz"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(p,{children:"Parentesco"}),e.jsx(u,{placeholder:"Ej. Cónyuge, Hijo, Padre…"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(p,{children:"Porcentaje"}),e.jsx(u,{placeholder:"0 – 100%",type:"number"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(p,{children:"Fecha de nacimiento"}),e.jsx(u,{placeholder:"dd/mm/aaaa"})]})]})]})}),e.jsxs(D,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{variant:"tertiary",className:"mr-auto",children:"Cancelar"})}),e.jsx(t,{variant:"primary",children:"Guardar"})]})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Desde la derecha",
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary">Ver detalle de póliza</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Póliza de Auto Premium</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-4 text-[14px] text-gris-500">
            <DrawerDescription>No. 00123456 · Vigente desde 01 ene 2025</DrawerDescription>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <div><span className="text-gris-400 text-xs block mb-0.5">Asegurado</span>María García López</div>
              <div><span className="text-gris-400 text-xs block mb-0.5">Vehículo</span>Toyota Corolla 2023</div>
              <div><span className="text-gris-400 text-xs block mb-0.5">Vigencia fin</span>01 enero 2026</div>
              <div><span className="text-gris-400 text-xs block mb-0.5">Suma asegurada</span>$350,000 MXN</div>
              <div><span className="text-gris-400 text-xs block mb-0.5">Periodicidad</span>Mensual</div>
              <div><span className="text-gris-400 text-xs block mb-0.5">Prima total</span>$1,250.00 MXN</div>
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="tertiary" className="mr-auto">Cerrar</Button>
          </DrawerClose>
          <Button variant="secondary">Descargar PDF</Button>
          <Button variant="primary">Editar póliza</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Desde la izquierda",
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Abrir menú lateral</Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Menú de navegación</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <nav className="space-y-1">
            {["Inicio", "Mis pólizas", "Siniestros", "Pagos", "Documentos", "Perfil"].map(item => <button key={item} className="w-full text-left px-3 py-2.5 rounded-md text-[14px] text-sura-negro hover:bg-fondo-5 transition-colors">
                {item}
              </button>)}
          </nav>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Con formulario",
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary">Agregar beneficiario</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Agregar beneficiario</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Nombre completo</Label>
              <Input placeholder="Ej. Carlos Gómez Ruiz" />
            </div>
            <div className="space-y-1.5">
              <Label>Parentesco</Label>
              <Input placeholder="Ej. Cónyuge, Hijo, Padre…" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Porcentaje</Label>
                <Input placeholder="0 – 100%" type="number" />
              </div>
              <div className="space-y-1.5">
                <Label>Fecha de nacimiento</Label>
                <Input placeholder="dd/mm/aaaa" />
              </div>
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="tertiary" className="mr-auto">Cancelar</Button>
          </DrawerClose>
          <Button variant="primary">Guardar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...g.parameters?.docs?.source}}};const ne=["Default","DesdeIzquierda","ConFormulario"];export{g as ConFormulario,x as Default,h as DesdeIzquierda,ne as __namedExportsOrder,te as default};
