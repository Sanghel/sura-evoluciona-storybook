import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as C}from"./index-Bc2G9s8g.js";import{a as u}from"./utils-7IX6LjdP.js";import{R as q,T as L,P as E,C as G}from"./index-C4fGeIlk.js";import{L as d}from"./Logo-OYBu93P7.js";import{B as M}from"./Button-BkpDUrET.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-g0ARl7yI.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-ByoG_5Py.js";import"./index-DlTO3c3v.js";import"./index-DdEr2eXK.js";import"./index-DvWumoXY.js";import"./index-BC2HDEX5.js";import"./index-MerDaaRu.js";import"./index-EGqfdL98.js";import"./index-BMe46fMM.js";import"./Icon-cz8gTyY9.js";function U(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("circle",{cx:"8",cy:"5.5",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M2.5 14c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const w=C.forwardRef(({className:n,tagline:r,userChip:s,...o},t)=>e.jsxs("div",{ref:t,className:u("sura:h-10 sura:bg-primary sura:flex sura:items-center sura:justify-between sura:px-8",n),...o,children:[r&&e.jsx("span",{className:"sura:text-[13px] sura:text-white sura:font-medium",children:r}),e.jsx("div",{className:"sura:ml-auto",children:s&&e.jsxs(q,{children:[e.jsx(L,{asChild:!0,children:e.jsxs("button",{className:"sura:flex sura:items-center sura:gap-2 sura:px-3 sura:py-1 sura:rounded-full sura:bg-black/25 sura:text-white sura:text-[13px] sura:font-medium sura:hover:bg-black/35 sura:transition-colors",children:[e.jsx("span",{children:s.name}),e.jsx(U,{})]})}),s.popoverContent&&e.jsx(E,{children:e.jsx(G,{align:"end",sideOffset:8,className:u("sura:z-50 sura:rounded-xl sura:bg-white sura:shadow-card-soft sura:border sura:border-gris-200 sura:p-4 sura:min-w-[200px]","sura:data-[state=open]:animate-in sura:data-[state=closed]:animate-out","sura:data-[state=closed]:fade-out-0 sura:data-[state=open]:fade-in-0","sura:data-[state=closed]:zoom-out-95 sura:data-[state=open]:zoom-in-95"),children:s.popoverContent})})]})})]}));w.displayName="TopBar";w.__docgenInfo={description:"",methods:[],displayName:"TopBar",props:{tagline:{required:!1,tsType:{name:"string"},description:""},userChip:{required:!1,tsType:{name:"UserChip"},description:""}}};function V(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,children:[e.jsx("rect",{x:"2",y:"2",width:"7",height:"7",rx:"1.5",fill:"currentColor"}),e.jsx("rect",{x:"11",y:"2",width:"7",height:"7",rx:"1.5",fill:"currentColor"}),e.jsx("rect",{x:"2",y:"11",width:"7",height:"7",rx:"1.5",fill:"currentColor"}),e.jsx("rect",{x:"11",y:"11",width:"7",height:"7",rx:"1.5",fill:"currentColor"})]})}const x=C.forwardRef(({className:n,logo:r,productLabel:s,navItems:o,megaMenuGroups:t,actions:k,user:c,...B},R)=>{const[p,g]=C.useState(!1);return e.jsxs("nav",{ref:R,className:u("sura:relative sura:bg-white sura:border-b sura:border-gris-200",n),...B,children:[e.jsxs("div",{className:"sura:h-[60px] sura:flex sura:items-center sura:justify-between sura:px-8",children:[e.jsxs("div",{className:"sura:flex sura:items-center sura:gap-4 sura:shrink-0",children:[r&&e.jsx("div",{className:"sura:flex sura:items-center",children:r}),s&&e.jsx("span",{className:"sura:text-[13px] sura:font-semibold sura:text-gris-400 sura:pl-4 sura:border-l sura:border-gris-200",children:s})]}),e.jsxs("div",{className:"sura:flex sura:items-center sura:gap-4",children:[o&&o.length>0&&e.jsx("div",{className:"sura:flex sura:items-stretch sura:h-[60px]",children:o.map((a,S)=>{const i=a.href?"a":"button";return e.jsx(i,{...a.href?{href:a.href}:{},onClick:a.onClick,className:u("sura:px-4 sura:h-full sura:flex sura:items-center sura:text-[14px] sura:font-medium sura:transition-colors sura:border-b-2",a.active?"sura:text-primary sura:border-primary":"sura:text-sura-negro sura:border-transparent sura:hover:text-primary sura:hover:border-primary/40"),children:a.label},S)})}),t&&t.length>0&&e.jsx("button",{onClick:()=>g(a=>!a),"aria-expanded":p,"aria-label":"Abrir menú",className:u("sura:p-2 sura:rounded-md sura:transition-colors",p?"sura:bg-fondo-5 sura:text-primary":"sura:text-gris-400 sura:hover:bg-fondo-5 sura:hover:text-sura-negro"),children:e.jsx(V,{})}),k,c&&e.jsx("div",{className:"sura:flex sura:items-center sura:justify-center sura:h-[30px] sura:w-[30px] sura:rounded-full sura:bg-sura-aqua sura:text-white sura:text-[11px] sura:font-bold sura:uppercase sura:shrink-0",title:c.name,"aria-label":`Usuario: ${c.name}`,children:c.initials.slice(0,2).toUpperCase()})]})]}),t&&p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sura:fixed sura:inset-0 sura:z-40","aria-hidden":!0,onClick:()=>g(!1)}),e.jsx("div",{className:"sura:absolute sura:left-0 sura:right-0 sura:z-50 sura:bg-white sura:border-b sura:border-gris-200 sura:shadow-card-soft sura:px-8 sura:py-6",children:e.jsx("div",{className:"sura:flex sura:gap-12 sura:flex-wrap",children:t.map((a,S)=>e.jsxs("div",{className:"sura:flex sura:flex-col sura:gap-2 sura:min-w-[160px]",children:[e.jsx("span",{className:"sura:text-[13px] sura:font-bold sura:text-primary sura:mb-1",children:a.title}),a.items.map((i,P)=>{const z=i.href?"a":"button";return e.jsx(z,{...i.href?{href:i.href}:{},onClick:()=>{i.onClick?.(),g(!1)},className:"sura:text-[13px] sura:text-gris-400 sura:hover:text-sura-negro sura:text-left sura:transition-colors sura:leading-snug",children:i.label},P)})]},S))})})]})]})});x.displayName="NavBar";x.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},productLabel:{required:!1,tsType:{name:"string"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:"Horizontal links on the right with active underline indicator"},megaMenuGroups:{required:!1,tsType:{name:"Array",elements:[{name:"MegaMenuGroup"}],raw:"MegaMenuGroup[]"},description:"Grid icon that opens a mega-menu dropdown"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Arbitrary content on the right (buttons, icons, etc.)"},user:{required:!1,tsType:{name:"signature",type:"object",raw:"{ name: string; initials: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}}]}},description:"Simple user avatar pill"}}};const l=C.forwardRef(({className:n,tagline:r,userChip:s,logo:o,productLabel:t,navItems:k,megaMenuGroups:c,actions:B,user:R,...p},g)=>{const a=r||s;return e.jsxs("header",{ref:g,className:u("sura:w-full",n),...p,children:[a&&e.jsx(w,{tagline:r,userChip:s}),e.jsx(x,{logo:o,productLabel:t,navItems:k,megaMenuGroups:c,actions:B,user:R})]})});l.displayName="Header";l.__docgenInfo={description:"",methods:[],displayName:"Header",props:{tagline:{required:!1,tsType:{name:"string"},description:""},userChip:{required:!1,tsType:{name:"UserChip"},description:""},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},productLabel:{required:!1,tsType:{name:"string"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:""},megaMenuGroups:{required:!1,tsType:{name:"Array",elements:[{name:"MegaMenuGroup"}],raw:"MegaMenuGroup[]"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},user:{required:!1,tsType:{name:"signature",type:"object",raw:"{ name: string; initials: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}}]}},description:""}}};function m({children:n}){return e.jsxs("div",{className:"min-h-screen bg-fondo-5 flex flex-col",children:[n,e.jsx("main",{className:"flex-1 px-8 py-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-4",children:[e.jsx("div",{className:"h-8 w-64 rounded-lg bg-gris-200 animate-pulse"}),e.jsx("div",{className:"h-4 w-full rounded bg-gris-200 animate-pulse"}),e.jsx("div",{className:"h-4 w-3/4 rounded bg-gris-200 animate-pulse"}),e.jsx("div",{className:"mt-6 grid grid-cols-3 gap-4",children:[1,2,3].map(r=>e.jsx("div",{className:"h-32 rounded-xl bg-white border border-gris-200 shadow-card-soft"},r))})]})})]})}function T({name:n,email:r}){return e.jsxs("div",{className:"flex flex-col gap-2 text-[13px] min-w-[180px]",children:[e.jsx("p",{className:"font-bold text-sura-negro",children:n}),r&&e.jsx("p",{className:"text-gris-400",children:r}),e.jsx("hr",{className:"border-gris-200 my-1"}),e.jsx("button",{className:"text-left text-gris-400 hover:text-sura-negro transition-colors",children:"Mi perfil"}),e.jsx("button",{className:"text-left text-gris-400 hover:text-danger-1 transition-colors",children:"Cerrar sesión"})]})}const A=[{title:"Agentes",items:[{label:"Alta y rehabilitación"},{label:"Modificar datos"},{label:"Baja"},{label:"Cambio de promotoría"},{label:"Alta de subclaves"},{label:"Exclusión de pagos"}]},{title:"Promotores",items:[{label:"Alta"},{label:"Modificar datos"},{label:"Baja"},{label:"Alta de subclaves"},{label:"Exclusión de pagos"}]},{title:"Prestador de servicios",items:[{label:"Exclusión de pagos"}]},{title:"Calendario operativo",items:[{label:"Configuración de calendario"}]}],le={title:"Layout/Header",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},h={name:"Simple — logo + acciones",render:()=>e.jsx(m,{children:e.jsx(l,{logo:e.jsx(d,{variant:"color",height:32}),productLabel:"Mi SURA",actions:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(M,{variant:"tertiary",size:"sm",children:"Ayuda"}),e.jsx(M,{variant:"primary",size:"sm",children:"Cotizar"})]}),user:{name:"María García",initials:"MG"}})})},v={name:"Simple — tema tool",render:()=>e.jsx("div",{className:"theme-tool",children:e.jsx(m,{children:e.jsx(l,{logo:e.jsx(d,{variant:"color",height:28}),productLabel:"Portal de Agentes",actions:e.jsx(M,{variant:"secondary",size:"sm",children:"Reportes"}),user:{name:"Juan Ramírez",initials:"JR"}})})})},f={name:"TopBar + nav links",render:()=>e.jsx(m,{children:e.jsx(l,{tagline:"#AsegurateDeVivir",userChip:{name:"Hola, Erick",popoverContent:e.jsx(T,{name:"Erick Valero",email:"erick@sura.com"})},logo:e.jsx(d,{variant:"color",height:32}),navItems:[{label:"Control de recibos",active:!0},{label:"Pólizas"},{label:"Reportes"},{label:"Configuración"}]})})},b={name:"TopBar + mega menú",render:()=>e.jsx(m,{children:e.jsx(l,{tagline:"#AsegurateDeVivir",userChip:{name:"Hola, Carlos",popoverContent:e.jsx(T,{name:"Carlos Valero",email:"carlos@sura.com"})},logo:e.jsx(d,{variant:"color",height:32}),megaMenuGroups:A})})},j={name:"NavBar — independiente con links",render:()=>e.jsx(m,{children:e.jsx(x,{logo:e.jsx(d,{variant:"color",height:32}),navItems:[{label:"Inicio"},{label:"Control de recibos",active:!0},{label:"Pólizas"},{label:"Reportes"}],user:{name:"Ana López",initials:"AL"}})})},N={name:"NavBar — independiente con mega menú",render:()=>e.jsx(m,{children:e.jsx(x,{logo:e.jsx(d,{variant:"color",height:32}),megaMenuGroups:A,user:{name:"Carlos Valero",initials:"CV"}})})},y={name:"TopBar — independiente",render:()=>e.jsx(w,{tagline:"#AsegurateDeVivir",userChip:{name:"Hola, Erick",popoverContent:e.jsx(T,{name:"Erick Valero",email:"erick@sura.com"})}})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Simple — logo + acciones",
  render: () => <PageShell>
      <Header logo={<Logo variant="color" height={32} />} productLabel="Mi SURA" actions={<div className="flex gap-2">
            <Button variant="tertiary" size="sm">Ayuda</Button>
            <Button variant="primary" size="sm">Cotizar</Button>
          </div>} user={{
      name: "María García",
      initials: "MG"
    }} />
    </PageShell>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Simple — tema tool",
  render: () => <div className="theme-tool">
      <PageShell>
        <Header logo={<Logo variant="color" height={28} />} productLabel="Portal de Agentes" actions={<Button variant="secondary" size="sm">Reportes</Button>} user={{
        name: "Juan Ramírez",
        initials: "JR"
      }} />
      </PageShell>
    </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "TopBar + nav links",
  render: () => <PageShell>
      <Header tagline="#AsegurateDeVivir" userChip={{
      name: "Hola, Erick",
      popoverContent: <UserPopover name="Erick Valero" email="erick@sura.com" />
    }} logo={<Logo variant="color" height={32} />} navItems={[{
      label: "Control de recibos",
      active: true
    }, {
      label: "Pólizas"
    }, {
      label: "Reportes"
    }, {
      label: "Configuración"
    }]} />
    </PageShell>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "TopBar + mega menú",
  render: () => <PageShell>
      <Header tagline="#AsegurateDeVivir" userChip={{
      name: "Hola, Carlos",
      popoverContent: <UserPopover name="Carlos Valero" email="carlos@sura.com" />
    }} logo={<Logo variant="color" height={32} />} megaMenuGroups={MEGA_MENU_GROUPS} />
    </PageShell>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "NavBar — independiente con links",
  render: () => <PageShell>
      <NavBar logo={<Logo variant="color" height={32} />} navItems={[{
      label: "Inicio"
    }, {
      label: "Control de recibos",
      active: true
    }, {
      label: "Pólizas"
    }, {
      label: "Reportes"
    }]} user={{
      name: "Ana López",
      initials: "AL"
    }} />
    </PageShell>
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "NavBar — independiente con mega menú",
  render: () => <PageShell>
      <NavBar logo={<Logo variant="color" height={32} />} megaMenuGroups={MEGA_MENU_GROUPS} user={{
      name: "Carlos Valero",
      initials: "CV"
    }} />
    </PageShell>
}`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "TopBar — independiente",
  render: () => <TopBar tagline="#AsegurateDeVivir" userChip={{
    name: "Hola, Erick",
    popoverContent: <UserPopover name="Erick Valero" email="erick@sura.com" />
  }} />
}`,...y.parameters?.docs?.source}}};const ce=["Simple","Tool","ConNavLinks","ConMegaMenu","NavBarSolo","NavBarConMegaMenu","TopBarSolo"];export{b as ConMegaMenu,f as ConNavLinks,N as NavBarConMegaMenu,j as NavBarSolo,h as Simple,v as Tool,y as TopBarSolo,ce as __namedExportsOrder,le as default};
