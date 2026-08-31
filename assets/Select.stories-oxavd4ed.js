import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as N}from"./index-Bc2G9s8g.js";import{S as r,a as D,b as L,c as B,d as O,e as w,f as y,g as s,h as G,i as k}from"./Select-KI8aWJg8.js";import"./index-C2Uka6Rc.js";import"./index-BdQq_4o_.js";import"./index-D8VkTb9O.js";import"./index-g0ARl7yI.js";import"./index-BJShxvVY.js";import"./index-4Qn5PQE1.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-ByoG_5Py.js";import"./index-DlTO3c3v.js";import"./index-DdEr2eXK.js";import"./index-DvWumoXY.js";import"./index-MerDaaRu.js";import"./index-DTK07sTh.js";import"./index-qaQ0HEkX.js";import"./utils-7IX6LjdP.js";import"./Spinner-BvWaOwJy.js";import"./index-C4fGeIlk.js";import"./index-BC2HDEX5.js";const ce={title:"Primitivas/Select",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md"]},disabled:{control:"boolean"},loading:{control:"boolean"},required:{control:"boolean"},items:{control:"object"},clearable:{control:"boolean"},searchable:{control:"boolean"}}},l=[{value:"basica",label:"Cobertura básica"},{value:"amplia",label:"Cobertura amplia"},{value:"premium",label:"Cobertura premium"}],o=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{value:"basica",children:"Cobertura básica"}),e.jsx(s,{value:"amplia",children:"Cobertura amplia"}),e.jsx(s,{value:"premium",children:"Cobertura premium"})]}),c={args:{label:"Tipo de cobertura",placeholder:"Selecciona una opción",items:l},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},t={args:{label:"Tipo de cobertura",defaultValue:"amplia",items:l},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},i={name:"Clearable",args:{label:"Tipo de cobertura",defaultValue:"amplia",items:l,clearable:!0},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},d={args:{label:"Tipo de cobertura",placeholder:"Cargando opciones…",items:l,loading:!0},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},j=[{value:"basica",label:"Cobertura básica"},{value:"amplia",label:"Cobertura amplia"},{value:"premium",label:"Cobertura premium"},{value:"rc",label:"Responsabilidad civil"},{value:"robo",label:"Robo total"},{value:"cristales",label:"Rotura de cristales"},{value:"asistencia",label:"Asistencia en viaje"},{value:"descontinuada",label:"Cobertura descontinuada",disabled:!0}],p={name:"Con búsqueda",args:{label:"Tipo de cobertura",placeholder:"Selecciona una opción",searchPlaceholder:"Buscar…",helperText:"Escribe directamente en el campo para filtrar. Los acentos se ignoran: “basica” encuentra “Cobertura básica”.",items:j,searchable:!0,clearable:!0},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},n={name:"Con búsqueda (backend)",render:()=>{const[a,q]=N.useState(j),[f,F]=N.useState("—");return e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsx(r,{label:"Tipo de cobertura",placeholder:"Selecciona una opción",searchable:!0,clearable:!0,items:a,emptyText:"Sin resultados para esa búsqueda",onChangeSearch:(C,I)=>{if(I==="close")return;F(C||"—");const T=C.trim().toLowerCase();q(T?j.filter(E=>E.label.toLowerCase().includes(T)):j)}}),e.jsxs("p",{className:"text-xs text-gris-400",children:["Última búsqueda enviada: ",e.jsx("code",{children:f})]})]})}},u={name:"Con texto de ayuda",args:{label:"Tipo de cobertura",placeholder:"Selecciona una opción",helperText:"Selecciona la cobertura que mejor se adapte a tus necesidades.",items:l},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},m={name:"Con error",args:{label:"Tipo de cobertura",required:!0,errorText:"Este campo es obligatorio.",placeholder:"Selecciona una opción",items:l},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},b={name:"Deshabilitado",args:{label:"Giro comercial",disabled:!0,placeholder:"No disponible",items:l},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},S={name:"Sin opciones",args:{label:"Departamento",helperText:"No hay departamentos disponibles aún.",emptyText:"Sin departamentos disponibles",placeholder:"Selecciona un departamento"},render:a=>e.jsx("div",{className:"w-72",children:e.jsx(r,{...a})})},h={render:()=>e.jsxs("div",{className:"w-72 space-y-4",children:[e.jsx(r,{label:"Tamaño md (default)",size:"md",placeholder:"Selecciona una opción",children:e.jsx(o,{})}),e.jsx(r,{label:"Tamaño sm",size:"sm",placeholder:"Selecciona una opción",children:e.jsx(o,{})})]})},x={name:"Con grupos",render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(D,{children:[e.jsx(L,{children:e.jsx(B,{placeholder:"Selecciona un vehículo"})}),e.jsxs(O,{children:[e.jsxs(w,{children:[e.jsx(y,{children:"Autos"}),e.jsx(s,{value:"sedan",children:"Sedán"}),e.jsx(s,{value:"suv",children:"SUV"}),e.jsx(s,{value:"pickup",children:"Pickup"})]}),e.jsx(G,{}),e.jsxs(w,{children:[e.jsx(y,{children:"Motos"}),e.jsx(s,{value:"scooter",children:"Scooter"}),e.jsx(s,{value:"deportiva",children:"Deportiva"})]})]})]})})},g={name:"Todos los estados",render:()=>e.jsxs("div",{className:"w-72 space-y-4",children:[e.jsx(r,{label:"Default",placeholder:"Selecciona una opción",children:e.jsx(o,{})}),e.jsx(r,{label:"Requerido",required:!0,placeholder:"Selecciona una opción",children:e.jsx(o,{})}),e.jsx(r,{label:"Con ayuda",helperText:"Texto de ayuda.",placeholder:"Selecciona una opción",children:e.jsx(o,{})}),e.jsx(r,{label:"Con error",errorText:"Este campo es obligatorio.",placeholder:"Selecciona una opción",children:e.jsx(o,{})}),e.jsx(r,{label:"Deshabilitado",disabled:!0,placeholder:"No disponible",children:e.jsx(o,{})}),e.jsx(r,{label:"Sin opciones",emptyText:"Sin opciones disponibles"})]})},v={name:"Empty state (aislado)",render:()=>e.jsx("div",{className:"w-72 border border-gris-200 rounded-md",children:e.jsx(k,{children:"Sin opciones disponibles"})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    placeholder: "Selecciona una opción",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    defaultValue: "amplia",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Clearable",
  args: {
    label: "Tipo de cobertura",
    defaultValue: "amplia",
    items: defaultItems,
    clearable: true
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    placeholder: "Cargando opciones…",
    items: defaultItems,
    loading: true
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Con búsqueda",
  args: {
    label: "Tipo de cobertura",
    placeholder: "Selecciona una opción",
    searchPlaceholder: "Buscar…",
    helperText: "Escribe directamente en el campo para filtrar. Los acentos se ignoran: “basica” encuentra “Cobertura básica”.",
    items: coberturas,
    searchable: true,
    clearable: true
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Con búsqueda (backend)",
  render: () => {
    const [items, setItems] = useState(coberturas);
    const [ultimaBusqueda, setUltimaBusqueda] = useState("—");
    return <div className="w-72 space-y-3">
        <SelectField label="Tipo de cobertura" placeholder="Selecciona una opción" searchable clearable items={items} emptyText="Sin resultados para esa búsqueda" onChangeSearch={(search, reason) => {
        // Al cerrar no se recarga la lista: evita el parpadeo de volver a
        // pedir todo con el texto vacío.
        if (reason === "close") return;
        setUltimaBusqueda(search || "—");
        const q = search.trim().toLowerCase();
        setItems(q ? coberturas.filter(i => i.label.toLowerCase().includes(q)) : coberturas);
      }} />
        <p className="text-xs text-gris-400">
          Última búsqueda enviada: <code>{ultimaBusqueda}</code>
        </p>
      </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Con `onChangeSearch` el filtrado local se desactiva: las `items` que llegan se\nmuestran tal cual, y el consumidor decide qué pedir. El `reason` permite\nignorar el llamado con texto vacío que dispara el cierre, para no recargar la\nlista completa cada vez que se cierra el desplegable.",...n.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Con texto de ayuda",
  args: {
    label: "Tipo de cobertura",
    placeholder: "Selecciona una opción",
    helperText: "Selecciona la cobertura que mejor se adapte a tus necesidades.",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Con error",
  args: {
    label: "Tipo de cobertura",
    required: true,
    errorText: "Este campo es obligatorio.",
    placeholder: "Selecciona una opción",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Deshabilitado",
  args: {
    label: "Giro comercial",
    disabled: true,
    placeholder: "No disponible",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Sin opciones",
  args: {
    label: "Departamento",
    helperText: "No hay departamentos disponibles aún.",
    emptyText: "Sin departamentos disponibles",
    placeholder: "Selecciona un departamento"
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72 space-y-4">
      <SelectField label="Tamaño md (default)" size="md" placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Tamaño sm" size="sm" placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Con grupos",
  render: () => <div className="w-72">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Autos</SelectLabel>
            <SelectItem value="sedan">Sedán</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Motos</SelectLabel>
            <SelectItem value="scooter">Scooter</SelectItem>
            <SelectItem value="deportiva">Deportiva</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Todos los estados",
  render: () => <div className="w-72 space-y-4">
      <SelectField label="Default" placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Requerido" required placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Con ayuda" helperText="Texto de ayuda." placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Con error" errorText="Este campo es obligatorio." placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Deshabilitado" disabled placeholder="No disponible">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Sin opciones" emptyText="Sin opciones disponibles" />
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Empty state (aislado)",
  render: () => <div className="w-72 border border-gris-200 rounded-md">
      <SelectEmpty>Sin opciones disponibles</SelectEmpty>
    </div>
}`,...v.parameters?.docs?.source}}};const te=["Default","Filled","Clearable","Loading","Buscador","BuscadorBackend","ConTextoDeAyuda","ConError","Disabled","SinOpciones","Tamaños","ConGrupos","TodosLosEstados","EmptyState"];export{p as Buscador,n as BuscadorBackend,i as Clearable,m as ConError,x as ConGrupos,u as ConTextoDeAyuda,c as Default,b as Disabled,v as EmptyState,t as Filled,d as Loading,S as SinOpciones,h as Tamaños,g as TodosLosEstados,te as __namedExportsOrder,ce as default};
