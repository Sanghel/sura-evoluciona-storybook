import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r}from"./index-Bc2G9s8g.js";import{D as i,T as p,a as $,b as L,c as g,d as F,E as O,e as A,f as H}from"./Table-B2RLz-4g.js";import"./utils-7IX6LjdP.js";import"./Checkbox-BjKnmOnB.js";import"./index-g0ARl7yI.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-MerDaaRu.js";import"./index-ByoG_5Py.js";import"./index-DTK07sTh.js";import"./index-DdEr2eXK.js";import"./index-BC2HDEX5.js";import"./Loader-BtLVs6g4.js";import"./Select-KI8aWJg8.js";import"./index-BdQq_4o_.js";import"./index-BJShxvVY.js";import"./index-4Qn5PQE1.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-DlTO3c3v.js";import"./index-DvWumoXY.js";import"./index-qaQ0HEkX.js";import"./Spinner-BvWaOwJy.js";import"./index-C4fGeIlk.js";const we={title:"Datos/Table",component:i,tags:["autodocs"],argTypes:{fontSize:{control:"select",options:["xs","sm","md"],description:"Tamaño de letra de las filas"},emptyMessage:{control:"text",description:"Texto cuando no hay resultados"}}},c=[{idMatriz:"MX-VID-2024-001400",contratante:"Empresa ABC S.A.S",idDep:"MX-VID-2024-001482",pagador:"Empresa ABC S.A.S",agente:"Juan Pérez",clave:"AG-0042",vigIni:"01/01/2026",vigFin:"31/12/2026",periodicidad:"Mensual",primaTotal:"$ 12,450.00",estado:"Vigente",estadoVariant:"info"},{idMatriz:"MX-VID-2024-001400",contratante:"Grupo Industrial Norte",idDep:"MX-VID-2024-001483",pagador:"GIN Nóminas S.A.",agente:"María Torres",clave:"AG-0017",vigIni:"01/03/2026",vigFin:"28/02/2027",periodicidad:"Trimestral",primaTotal:"$ 8,200.00",estado:"Pagada",estadoVariant:"success"},{idMatriz:"MX-VID-2024-001500",contratante:"Comercializadora del Bajío",idDep:"MX-VID-2024-001484",pagador:"Comercializadora del Bajío",agente:"Luis Ramos",clave:"AG-0088",vigIni:"15/02/2026",vigFin:"14/02/2027",periodicidad:"Mensual",primaTotal:"$ 15,300.00",estado:"Vigente",estadoVariant:"info"},{idMatriz:"MX-VID-2024-001500",contratante:"Transportes del Norte S.A.",idDep:"MX-VID-2024-001485",pagador:"Transportes del Norte S.A.",agente:"Ana Gómez",clave:"AG-0033",vigIni:"01/04/2026",vigFin:"31/03/2027",periodicidad:"Semestral",primaTotal:"$ 3,100.00",estado:"Cancelada",estadoVariant:"danger"},{idMatriz:"MX-VID-2024-001600",contratante:"Inmobiliaria Central",idDep:"MX-VID-2024-001486",pagador:"Inmobiliaria Central",agente:"Carlos Vega",clave:"AG-0055",vigIni:"01/01/2026",vigFin:"31/12/2026",periodicidad:"Mensual",primaTotal:"$ 6,750.00",estado:"Suspendida",estadoVariant:"warning"}],M=[{id:"REC-2026-004821",ini:"01/05/2026",fin:"31/05/2026",prima:"$ 5,350.00",estado:"Pendiente de cobro",estadoClass:"text-warning-1",dispo:"02/05/2026",edo:"05/05/2026",checked:!0},{id:"REC-2026-004822",ini:"01/06/2026",fin:"30/06/2026",prima:"$ 2,100.00",estado:"Pendiente de cobro",estadoClass:"text-warning-1",dispo:"01/06/2026",edo:"03/06/2026",checked:!0},{id:"REC-2026-004823",ini:"01/07/2026",fin:"31/07/2026",prima:"$ 1,980.00",estado:"Anulado",estadoClass:"text-danger-1",dispo:"01/07/2026",edo:"04/07/2026",checked:!1}];function R({onSelectionChange:a}){const[s,t]=r.useState(Object.fromEntries(M.map(n=>[n.id,n.checked]))),o=n=>{t(d=>{const m={...d,[n]:!d[n]};return a?.(Object.values(m).filter(Boolean).length),m})};return e.jsxs("div",{className:"bg-info-2/40",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gris-100",children:[e.jsx("span",{className:"text-eyebrow text-primary font-semibold tracking-wide",children:"RECIBOS DE LA PÓLIZA"}),e.jsxs("span",{className:"text-small text-gris-400",children:[M.length," recibos · ",Object.values(s).filter(Boolean).length," seleccionados"]})]}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gris-100",children:[e.jsx("th",{className:"w-10 px-4 py-2 text-eyebrow text-gris-400"}),e.jsx("th",{className:"px-4 py-2 text-left text-eyebrow text-gris-400",children:"N° DE RECIBO"}),e.jsx("th",{className:"px-4 py-2 text-left text-eyebrow text-gris-400",children:"VIGENCIA"}),e.jsx("th",{className:"px-4 py-2 text-right text-eyebrow text-gris-400",children:"PRIMA TOTAL"}),e.jsx("th",{className:"px-4 py-2 text-left text-eyebrow text-gris-400",children:"ESTADO"}),e.jsx("th",{className:"px-4 py-2 text-left text-eyebrow text-gris-400",children:"FECHA DISPONIBLE / ESTADO"})]})}),e.jsx("tbody",{children:M.map(n=>e.jsxs("tr",{className:"border-b border-gris-100 last:border-0 cursor-pointer hover:bg-info-2/60",onClick:()=>o(n.id),children:[e.jsx("td",{className:"px-4 py-2.5 text-center",children:e.jsx("div",{className:`h-4 w-4 rounded border-2 inline-flex items-center justify-center shrink-0 ${s[n.id]?"bg-primary border-primary":"border-gris-300 bg-white"}`,children:s[n.id]&&e.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none",children:e.jsx("path",{d:"M1 3L3.5 5.5L8 1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),e.jsx("td",{className:`px-4 py-2.5 text-small font-semibold ${s[n.id]?"text-primary":"text-gris-400"}`,children:n.id}),e.jsxs("td",{className:"px-4 py-2.5 text-small text-gris-400",children:[e.jsxs("div",{children:["Ini · ",n.ini]}),e.jsxs("div",{children:["Fin · ",n.fin]})]}),e.jsx("td",{className:`px-4 py-2.5 text-small font-semibold text-right ${s[n.id]?"text-sura-negro":"text-gris-400"}`,children:n.prima}),e.jsx("td",{className:`px-4 py-2.5 text-small font-semibold ${n.estadoClass}`,children:n.estado}),e.jsxs("td",{className:"px-4 py-2.5 text-small text-gris-400",children:[e.jsxs("div",{children:["Dispo · ",n.dispo]}),e.jsxs("div",{children:["Edo · ",n.edo]})]})]},n.id))})]})]})}const l=[{id:"matriz",header:"PÓLIZA MATRIZ / CONTRATANTE",cell:a=>e.jsxs("div",{children:[e.jsx("div",{className:"text-small text-gris-400",children:a.idMatriz}),e.jsx("div",{className:"font-semibold text-sura-negro",children:a.contratante})]})},{id:"dependiente",header:"PÓLIZA DEPENDIENTE / PAGADOR",cell:a=>e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-primary",children:a.idDep}),e.jsx("div",{className:"text-small text-gris-400",children:a.pagador})]})},{id:"agente",header:"AGENTE / CLAVE",cell:a=>e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:a.agente}),e.jsx("div",{className:"text-small text-gris-400",children:a.clave})]})},{id:"vigencia",header:"VIGENCIA",width:"160px",cell:a=>e.jsxs("div",{className:"text-gris-400",children:[e.jsxs("div",{children:["Ini · ",a.vigIni]}),e.jsxs("div",{children:["Fin · ",a.vigFin]})]})},{id:"periodicidad",header:"PERIODICIDAD",cell:a=>a.periodicidad},{id:"prima",header:"PRIMA TOTAL",align:"right",cell:a=>e.jsx("span",{className:"font-semibold",children:a.primaTotal})},{id:"estado",header:"ESTADO",cell:a=>e.jsx(p,{variant:a.estadoVariant,children:a.estado})}],I=c.map(a=>({id:a.idDep,data:a})),V=c.map(a=>({id:a.idDep,data:a,expandContent:s=>e.jsx(R,{})}));function G(){const[a,s]=r.useState(1),[t,o]=r.useState(10);return e.jsx(i,{columns:l,rows:I,pagination:{page:a,perPage:t,total:48,onPageChange:s,onPerPageChange:o}})}function X(){const[a,s]=r.useState(1);return e.jsx(i,{columns:l,rows:V,pagination:{page:a,perPage:5,total:24,onPageChange:s}})}function _(){const[a,s]=r.useState([]),[t,o]=r.useState({}),n=c.map(d=>({id:d.idDep,data:d,subSelected:(t[d.idDep]??0)>0,expandContent:m=>e.jsx(R,{onSelectionChange:E=>o(k=>({...k,[d.idDep]:E}))})}));return e.jsx(i,{columns:l,rows:n,selectable:!0,selectedIds:a,onSelectionChange:s})}function Y(){const[a,s]=r.useState(null);return e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-small text-gris-400",children:a?`Última fila clickeada: ${a}`:"Cliqueá una fila…"}),e.jsx(i,{columns:l,rows:I,onRowClick:t=>s(t.idDep)})]})}function Z(){const[a,s]=r.useState([]),[t,o]=r.useState(null);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-small text-gris-400",children:[a.length," seleccionadas · ",t?`última fila clickeada: ${t}`:"cliqueá una fila (fuera del checkbox)"]}),e.jsx(i,{columns:l,rows:I,selectable:!0,selectedIds:a,onSelectionChange:s,onRowClick:n=>o(n.idDep)})]})}const x=Array.from({length:23},(a,s)=>{const t=c[s%c.length];return{id:`${t.idDep}-pag-${s}`,data:{...t,contratante:`${t.contratante} #${s+1}`}}});function J(){const[a,s]=r.useState(1),[t,o]=r.useState(10),[n,d]=r.useState([]),m=(a-1)*t,E=x.slice(m,m+t),k=x.map(z=>z.id);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-small text-gris-400",children:[n.length," de ",x.length," seleccionadas (todas las páginas)"]}),e.jsx(i,{columns:l,rows:E,selectable:!0,selectedIds:n,onSelectionChange:d,allRowIds:k,pagination:{page:a,perPage:t,total:x.length,onPageChange:s,onPerPageChange:z=>{o(z),s(1)}}})]})}function q(){const[a,s]=r.useState(1),[t,o]=r.useState(10);return e.jsx("div",{className:"border border-gris-100 rounded-lg bg-white",children:e.jsx(H,{page:a,perPage:t,total:87,onPageChange:s,onPerPageChange:o})})}const B=Array.from({length:1e4},(a,s)=>{const t=c[s%c.length];return{id:`${t.idDep}-${s}`,data:{...t,idMatriz:`MX-VID-2024-${String(1e5+s)}`,contratante:`${t.contratante} #${s+1}`}}});function W(){const[a,s]=r.useState([]);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-small text-gris-400",children:[B.length.toLocaleString("es")," filas · ",a.length," seleccionadas"]}),e.jsx(i,{virtual:!0,maxHeight:480,columns:l,rows:B,selectable:!0,selectedIds:a,onSelectionChange:s})]})}const b={name:"Interactiva",args:{fontSize:"sm",emptyMessage:"Sin resultados"},argTypes:{fontSize:{control:"select",options:["xs","sm","md"]},emptyMessage:{control:"text"},expandable:{control:"boolean",description:"Mostrar filas expandibles con sub-tabla",table:{category:"Demo"}}},render:a=>{const s=a.expandable;return e.jsx(i,{fontSize:a.fontSize,emptyMessage:a.emptyMessage,columns:l,rows:s?V:I})}},u={name:"Cargando",render:()=>e.jsx(i,{columns:l,rows:[],loading:!0})},h={name:"Con filas expandibles",render:()=>e.jsx(i,{columns:l,rows:V})},j={name:"Con paginación",render:()=>e.jsx(G,{})},S={name:"Expandible + paginación",render:()=>e.jsx(X,{})},T={name:"Selección de filas",render:()=>e.jsx(_,{})},C={name:"Row click (onRowClick)",render:()=>e.jsx(Y,{})},v={name:"Selección + row click",render:()=>e.jsx(Z,{})},f={name:"Selección en todas las páginas (allRowIds)",render:()=>e.jsx(J,{})},w={name:"Virtualizada (10k filas)",render:()=>e.jsx(W,{})},N={name:"Tamaño de letra (xs / sm / md)",render:()=>e.jsx("div",{className:"space-y-6",children:["xs","sm","md"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-eyebrow text-gris-400 mb-2",children:['fontSize="',a,'"']}),e.jsx(i,{fontSize:a,columns:l.slice(0,4),rows:c.slice(0,2).map(s=>({id:`${a}-${s.idDep}`,data:s}))})]},a))})},y={name:"TableStatusBadge (variantes)",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 p-4",children:[e.jsx(p,{variant:"info",children:"Vigente"}),e.jsx(p,{variant:"success",children:"Pagada"}),e.jsx(p,{variant:"danger",children:"Cancelada"}),e.jsx(p,{variant:"warning",children:"Suspendida"}),e.jsx(p,{variant:"neutral",children:"Inactiva"})]})},P={name:"Paginación (aislada)",render:()=>e.jsx(q,{})},D={name:"ExpandableTableRow (bajo nivel)",render:()=>e.jsx("div",{className:"rounded-lg border border-gris-100 bg-white overflow-hidden",children:e.jsxs($,{children:[e.jsx(L,{children:e.jsxs("tr",{children:[e.jsx(g,{children:"Póliza"}),e.jsx(g,{children:"Contratante"}),e.jsx(g,{children:"Estado"}),e.jsx(g,{className:"w-10"})]})}),e.jsx(F,{children:c.slice(0,3).map(a=>e.jsxs(O,{colSpan:3,expandContent:e.jsx(R,{}),children:[e.jsxs(A,{children:[e.jsx("div",{className:"font-semibold text-primary",children:a.idDep}),e.jsx("div",{className:"text-small text-gris-400",children:a.idMatriz})]}),e.jsx(A,{className:"font-semibold",children:a.contratante}),e.jsx(A,{children:e.jsx(p,{variant:a.estadoVariant,children:a.estado})})]},a.idDep))})]})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Interactiva",
  args: {
    fontSize: "sm",
    emptyMessage: "Sin resultados"
  },
  argTypes: {
    fontSize: {
      control: "select",
      options: ["xs", "sm", "md"]
    },
    emptyMessage: {
      control: "text"
    },
    // Custom toggle — not part of DataTableProps, handled in render
    expandable: {
      control: "boolean",
      description: "Mostrar filas expandibles con sub-tabla",
      table: {
        category: "Demo"
      }
    }
  },
  render: args => {
    const expandable = (args as typeof args & {
      expandable?: boolean;
    }).expandable;
    return <DataTable fontSize={args.fontSize} emptyMessage={args.emptyMessage} columns={columns} rows={expandable ? rowsExpandible : rowsSimple} />;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Cargando",
  render: () => <DataTable columns={columns} rows={[]} loading={true} />
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Con filas expandibles",
  render: () => <DataTable columns={columns} rows={rowsExpandible} />
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Con paginación",
  render: () => <TableConPaginacion />
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Expandible + paginación",
  render: () => <TableExpandibleConPaginacion />
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Selección de filas",
  render: () => <TableConSeleccion />
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Row click (onRowClick)",
  render: () => <TableConRowClick />
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Selección + row click",
  render: () => <TableConSeleccionYRowClick />
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Selección en todas las páginas (allRowIds)",
  render: () => <TablePaginadaFrontConSeleccion />
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Virtualizada (10k filas)",
  render: () => <TableVirtualizada />
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Tamaño de letra (xs / sm / md)",
  render: () => <div className="space-y-6">
      {(["xs", "sm", "md"] as const).map(size => <div key={size}>
          <p className="text-eyebrow text-gris-400 mb-2">fontSize="{size}"</p>
          <DataTable fontSize={size} columns={columns.slice(0, 4)} rows={polizas.slice(0, 2).map(p => ({
        id: \`\${size}-\${p.idDep}\`,
        data: p
      }))} />
        </div>)}
    </div>
}`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "TableStatusBadge (variantes)",
  render: () => <div className="flex flex-wrap gap-3 p-4">
      <TableStatusBadge variant="info">Vigente</TableStatusBadge>
      <TableStatusBadge variant="success">Pagada</TableStatusBadge>
      <TableStatusBadge variant="danger">Cancelada</TableStatusBadge>
      <TableStatusBadge variant="warning">Suspendida</TableStatusBadge>
      <TableStatusBadge variant="neutral">Inactiva</TableStatusBadge>
    </div>
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Paginación (aislada)",
  render: () => <PaginacionInteractiva />
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "ExpandableTableRow (bajo nivel)",
  render: () => <div className="rounded-lg border border-gris-100 bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <tr>
            <TableHead>Póliza</TableHead>
            <TableHead>Contratante</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="w-10" />
          </tr>
        </TableHeader>
        <TableBody>
          {polizas.slice(0, 3).map(p => <ExpandableTableRow key={p.idDep} colSpan={3} expandContent={<RecibosSubTable />}>
              <TableCell>
                <div className="font-semibold text-primary">{p.idDep}</div>
                <div className="text-small text-gris-400">{p.idMatriz}</div>
              </TableCell>
              <TableCell className="font-semibold">{p.contratante}</TableCell>
              <TableCell>
                <TableStatusBadge variant={p.estadoVariant}>{p.estado}</TableStatusBadge>
              </TableCell>
            </ExpandableTableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...D.parameters?.docs?.source}}};const Ne=["Default","ConLoading","ConFilasExpandibles","ConPaginacion","ConTodoJunto","ConSeleccion","ConRowClick","ConSeleccionYRowClick","SeleccionTodasLasPaginas","Virtualizada","TamañoDeLetra","Badges","PaginacionAislada","FilasExpandiblesBajoNivel"];export{y as Badges,h as ConFilasExpandibles,u as ConLoading,j as ConPaginacion,C as ConRowClick,T as ConSeleccion,v as ConSeleccionYRowClick,S as ConTodoJunto,b as Default,D as FilasExpandiblesBajoNivel,P as PaginacionAislada,f as SeleccionTodasLasPaginas,N as TamañoDeLetra,w as Virtualizada,Ne as __namedExportsOrder,we as default};
