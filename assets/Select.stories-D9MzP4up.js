import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as a,a as v,b as j,c as T,d as C,e as x,f as g,g as o,h as N,i as y}from"./Select-DNCcDtAL.js";import"./index-Bc2G9s8g.js";import"./index-C2Uka6Rc.js";import"./index-BdQq_4o_.js";import"./index-D8VkTb9O.js";import"./index-g0ARl7yI.js";import"./index-BJShxvVY.js";import"./index-4Qn5PQE1.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-VjUm-JO_.js";import"./index-BQiukGOz.js";import"./index-ByoG_5Py.js";import"./index-DlTO3c3v.js";import"./index-DdEr2eXK.js";import"./index-DvWumoXY.js";import"./index-MerDaaRu.js";import"./index-DTK07sTh.js";import"./index-qaQ0HEkX.js";import"./utils-BP2HNEMH.js";import"./Spinner-CIWr9BkK.js";const K={title:"Primitivas/Select",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"]},disabled:{control:"boolean"},loading:{control:"boolean"},required:{control:"boolean"},items:{control:"object"}}},l=[{value:"basica",label:"Cobertura básica"},{value:"amplia",label:"Cobertura amplia"},{value:"premium",label:"Cobertura premium"}],s=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"basica",children:"Cobertura básica"}),e.jsx(o,{value:"amplia",children:"Cobertura amplia"}),e.jsx(o,{value:"premium",children:"Cobertura premium"})]}),n={args:{label:"Tipo de cobertura",placeholder:"Selecciona una opción",items:l},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},c={args:{label:"Tipo de cobertura",defaultValue:"amplia",items:l},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},i={args:{label:"Tipo de cobertura",placeholder:"Cargando opciones…",items:l,loading:!0},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},t={name:"Con texto de ayuda",args:{label:"Tipo de cobertura",placeholder:"Selecciona una opción",helperText:"Selecciona la cobertura que mejor se adapte a tus necesidades.",items:l},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},d={name:"Con error",args:{label:"Tipo de cobertura",required:!0,errorText:"Este campo es obligatorio.",placeholder:"Selecciona una opción",items:l},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},p={name:"Deshabilitado",args:{label:"Giro comercial",disabled:!0,placeholder:"No disponible",items:l},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},m={name:"Sin opciones",args:{label:"Departamento",helperText:"No hay departamentos disponibles aún.",emptyText:"Sin departamentos disponibles",placeholder:"Selecciona un departamento"},render:r=>e.jsx("div",{className:"w-72",children:e.jsx(a,{...r})})},u={render:()=>e.jsxs("div",{className:"w-72 space-y-4",children:[e.jsx(a,{label:"Tamaño md (default)",size:"md",placeholder:"Selecciona una opción",children:e.jsx(s,{})}),e.jsx(a,{label:"Tamaño sm",size:"sm",placeholder:"Selecciona una opción",children:e.jsx(s,{})})]})},S={name:"Con grupos",render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(v,{children:[e.jsx(j,{children:e.jsx(T,{placeholder:"Selecciona un vehículo"})}),e.jsxs(C,{children:[e.jsxs(x,{children:[e.jsx(g,{children:"Autos"}),e.jsx(o,{value:"sedan",children:"Sedán"}),e.jsx(o,{value:"suv",children:"SUV"}),e.jsx(o,{value:"pickup",children:"Pickup"})]}),e.jsx(N,{}),e.jsxs(x,{children:[e.jsx(g,{children:"Motos"}),e.jsx(o,{value:"scooter",children:"Scooter"}),e.jsx(o,{value:"deportiva",children:"Deportiva"})]})]})]})})},b={name:"Todos los estados",render:()=>e.jsxs("div",{className:"w-72 space-y-4",children:[e.jsx(a,{label:"Default",placeholder:"Selecciona una opción",children:e.jsx(s,{})}),e.jsx(a,{label:"Requerido",required:!0,placeholder:"Selecciona una opción",children:e.jsx(s,{})}),e.jsx(a,{label:"Con ayuda",helperText:"Texto de ayuda.",placeholder:"Selecciona una opción",children:e.jsx(s,{})}),e.jsx(a,{label:"Con error",errorText:"Este campo es obligatorio.",placeholder:"Selecciona una opción",children:e.jsx(s,{})}),e.jsx(a,{label:"Deshabilitado",disabled:!0,placeholder:"No disponible",children:e.jsx(s,{})}),e.jsx(a,{label:"Sin opciones",emptyText:"Sin opciones disponibles"})]})},h={name:"Empty state (aislado)",render:()=>e.jsx("div",{className:"w-72 border border-gris-200 rounded-md",children:e.jsx(y,{children:"Sin opciones disponibles"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    placeholder: "Selecciona una opción",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    defaultValue: "amplia",
    items: defaultItems
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tipo de cobertura",
    placeholder: "Cargando opciones…",
    items: defaultItems,
    loading: true
  },
  render: args => <div className="w-72">
      <SelectField {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72 space-y-4">
      <SelectField label="Tamaño md (default)" size="md" placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
      <SelectField label="Tamaño sm" size="sm" placeholder="Selecciona una opción">
        <OpcionesCoberturas />
      </SelectField>
    </div>
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Empty state (aislado)",
  render: () => <div className="w-72 border border-gris-200 rounded-md">
      <SelectEmpty>Sin opciones disponibles</SelectEmpty>
    </div>
}`,...h.parameters?.docs?.source}}};const Q=["Default","Filled","Loading","ConTextoDeAyuda","ConError","Disabled","SinOpciones","Tamaños","ConGrupos","TodosLosEstados","EmptyState"];export{d as ConError,S as ConGrupos,t as ConTextoDeAyuda,n as Default,p as Disabled,h as EmptyState,c as Filled,i as Loading,m as SinOpciones,u as Tamaños,b as TodosLosEstados,Q as __namedExportsOrder,K as default};
