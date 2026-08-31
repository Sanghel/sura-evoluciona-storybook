import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as f}from"./index-Bc2G9s8g.js";import{a as T}from"./utils-7IX6LjdP.js";const M={xs:{px:"sura:px-2.5",py:"sura:py-1.5",text:"sura:text-tool-meta"},sm:{px:"sura:px-3",py:"sura:py-2",text:"sura:text-tool-body"},md:{px:"sura:px-4",py:"sura:py-3",text:"sura:text-caption"}},a=f.forwardRef(({className:V,label:E,helperText:g,errorText:o,required:j,disabled:t,id:N,variant:q="contorneado",size:S="xs",classNames:R,rows:C=3,onFocus:z,onBlur:D,...F},I)=>{const r=N??f.useId(),s=!!o,[v,h]=f.useState(!1),y=M[S],_=q==="contorneado",$=q==="subrayado";return e.jsxs("div",{className:"sura:flex sura:flex-col sura:gap-1.5",children:[E&&e.jsxs("label",{htmlFor:r,className:T("sura:text-tool-meta sura:font-semibold sura:leading-none sura:transition-colors sura:duration-200",v&&!s?"text-primary":"sura:text-sura-negro",s&&"sura:!text-danger-1",t&&"sura:!text-gris-400"),children:[E,j&&e.jsx("span",{className:"sura:ml-1 sura:text-danger-1","aria-hidden":"true",children:"*"})]}),e.jsx("textarea",{id:r,ref:I,rows:C,disabled:t,onFocus:w=>{h(!0),z?.(w)},onBlur:w=>{h(!1),D?.(w)},className:T(y.px,y.py,y.text,"sura:w-full sura:resize-y","sura:text-sura-negro sura:placeholder:text-gris-400","sura:transition-all sura:duration-200 sura:focus:outline-none","sura:[&:not(:placeholder-shown)]:font-normal",_&&["sura:border sura:rounded-t-md sura:focus-visible:rounded-t-md sura:focus-visible:rounded-b-none",v&&!s?"sura:bg-info-4 sura:border-primary sura:shadow-focus":"sura:bg-gris-100 sura:border-gris-100",s&&"sura:!bg-danger-2 sura:!border-danger-1 sura:!shadow-none",t&&"sura:!bg-fondo-5 sura:!border-gris-200"],$&&["sura:bg-transparent sura:border-0 sura:border-b sura:border-gris-300 sura:rounded-none sura:px-0","sura:focus-visible:rounded-none sura:focus-visible:shadow-none","sura:focus:border-b-primary",s&&"sura:border-b-danger-1 sura:bg-danger-2/40 sura:px-4",t&&"sura:border-b-gris-200 sura:bg-transparent"],t&&"sura:text-gris-400 sura:cursor-not-allowed",V,R?.value),"aria-invalid":s?"true":void 0,"aria-describedby":o?`${r}-error`:g?`${r}-helper`:void 0,...F}),o&&e.jsx("p",{id:`${r}-error`,className:"sura:text-small sura:text-danger-1",children:o}),!o&&g&&e.jsx("p",{id:`${r}-helper`,className:"sura:text-small sura:text-gris-400",children:g})]})});a.displayName="Textarea";a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contorneado" | "subrayado"',elements:[{name:"literal",value:'"contorneado"'},{name:"literal",value:'"subrayado"'}]},description:"",defaultValue:{value:'"contorneado"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"xs"',computed:!1}},classNames:{required:!1,tsType:{name:"FieldClassNames"},description:"Clases por zona de texto. `value` se aplica al texto del valor del textarea."},rows:{defaultValue:{value:"3",computed:!1},required:!1}}};const O={title:"Primitivas/Textarea",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["contorneado","subrayado"]},size:{control:"select",options:["sm","md"]},rows:{control:"number"},disabled:{control:"boolean"}}},l={args:{label:"Etiqueta",placeholder:"Escribe aquí…",rows:3}},n={args:{label:"Etiqueta",defaultValue:"Este es un texto de ejemplo que ya fue ingresado por el usuario.",rows:3}},u={args:{label:"Comentarios",placeholder:"Cuéntanos más sobre tu solicitud…",helperText:"Máximo 500 caracteres.",rows:3}},d={args:{label:"Etiqueta",defaultValue:"Texto con error",errorText:"Texto de ayuda",rows:3}},i={args:{label:"Etiqueta",placeholder:"Escribe aquí…",disabled:!0,rows:3}},c={args:{label:"Etiqueta",placeholder:"Escribe aquí…",variant:"subrayado",rows:3}},p={args:{label:"Etiqueta",defaultValue:"Texto con error",errorText:"Texto de ayuda",variant:"subrayado",rows:3}},m={args:{label:"Etiqueta",placeholder:"Escribe aquí…",disabled:!0,variant:"subrayado",rows:3}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-5 max-w-sm p-6 bg-white",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"md (default)"}),e.jsx(a,{label:"Etiqueta",placeholder:"Escribe aquí…",size:"md",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-3",children:"sm"}),e.jsx(a,{label:"Etiqueta",placeholder:"Escribe aquí…",size:"sm",rows:3})]})]})},x={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-10 gap-y-5 max-w-2xl p-6 bg-white",children:[e.jsx("p",{className:"text-eyebrow text-gris-400 col-span-1",children:"Subrayado"}),e.jsx("p",{className:"text-eyebrow text-gris-400 col-span-1",children:"Contorneado"}),e.jsx(a,{label:"Etiqueta",placeholder:"Valor Relleno",variant:"subrayado",rows:3}),e.jsx(a,{label:"Etiqueta",placeholder:"Valor Relleno",variant:"contorneado",rows:3}),e.jsx(a,{label:"Etiqueta",defaultValue:"Valor Relleno",variant:"subrayado",rows:3}),e.jsx(a,{label:"Etiqueta",defaultValue:"Valor Relleno",variant:"contorneado",rows:3}),e.jsx(a,{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",variant:"subrayado",rows:3}),e.jsx(a,{label:"Etiqueta",defaultValue:"Valor Relleno",errorText:"Texto de ayuda",variant:"contorneado",rows:3}),e.jsx(a,{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0,variant:"subrayado",rows:3}),e.jsx(a,{label:"Etiqueta",placeholder:"Valor Relleno",disabled:!0,variant:"contorneado",rows:3})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Escribe aquí…",
    rows: 3
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Este es un texto de ejemplo que ya fue ingresado por el usuario.",
    rows: 3
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Comentarios",
    placeholder: "Cuéntanos más sobre tu solicitud…",
    helperText: "Máximo 500 caracteres.",
    rows: 3
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Texto con error",
    errorText: "Texto de ayuda",
    rows: 3
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Escribe aquí…",
    disabled: true,
    rows: 3
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Escribe aquí…",
    variant: "subrayado",
    rows: 3
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    defaultValue: "Texto con error",
    errorText: "Texto de ayuda",
    variant: "subrayado",
    rows: 3
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta",
    placeholder: "Escribe aquí…",
    disabled: true,
    variant: "subrayado",
    rows: 3
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5 max-w-sm p-6 bg-white">
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">md (default)</p>
        <Textarea label="Etiqueta" placeholder="Escribe aquí…" size="md" rows={3} />
      </div>
      <div>
        <p className="text-eyebrow text-gris-400 mb-3">sm</p>
        <Textarea label="Etiqueta" placeholder="Escribe aquí…" size="sm" rows={3} />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-x-10 gap-y-5 max-w-2xl p-6 bg-white">
      <p className="text-eyebrow text-gris-400 col-span-1">Subrayado</p>
      <p className="text-eyebrow text-gris-400 col-span-1">Contorneado</p>

      <Textarea label="Etiqueta" placeholder="Valor Relleno" variant="subrayado" rows={3} />
      <Textarea label="Etiqueta" placeholder="Valor Relleno" variant="contorneado" rows={3} />

      <Textarea label="Etiqueta" defaultValue="Valor Relleno" variant="subrayado" rows={3} />
      <Textarea label="Etiqueta" defaultValue="Valor Relleno" variant="contorneado" rows={3} />

      <Textarea label="Etiqueta" defaultValue="Valor Relleno" errorText="Texto de ayuda" variant="subrayado" rows={3} />
      <Textarea label="Etiqueta" defaultValue="Valor Relleno" errorText="Texto de ayuda" variant="contorneado" rows={3} />

      <Textarea label="Etiqueta" placeholder="Valor Relleno" disabled variant="subrayado" rows={3} />
      <Textarea label="Etiqueta" placeholder="Valor Relleno" disabled variant="contorneado" rows={3} />
    </div>
}`,...x.parameters?.docs?.source}}};const P=["Default","Filled","ConTextoDeAyuda","ConError","Disabled","Subrayado","SubrayadoConError","SubrayadoDisabled","Tamaños","TodosLosEstados"];export{d as ConError,u as ConTextoDeAyuda,l as Default,i as Disabled,n as Filled,c as Subrayado,p as SubrayadoConError,m as SubrayadoDisabled,b as Tamaños,x as TodosLosEstados,P as __namedExportsOrder,O as default};
