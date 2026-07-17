import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as m}from"./index-Bc2G9s8g.js";import{C as T}from"./Checkbox-C0FHpgRx.js";import{a as A}from"./utils-BP2HNEMH.js";import"./index-g0ARl7yI.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-MerDaaRu.js";import"./index-ByoG_5Py.js";import"./index-DTK07sTh.js";import"./index-DdEr2eXK.js";import"./index-BC2HDEX5.js";const b=m.forwardRef(({options:s,value:o,defaultValue:z,onValueChange:N,label:v,selectAll:R=!1,selectAllLabel:V="Seleccionar todo",orientation:k="vertical",size:h="xs",disabled:C=!1,className:q,classNames:w},j)=>{const S=o!==void 0,[O,E]=m.useState(z??[]),l=S?o:O,f=e=>{S||E(e),N?.(e)},G=e=>{const D=l.includes(e)?l.filter(H=>H!==e):[...l,e];f(D)},r=s.filter(e=>!e.disabled).map(e=>e.value),x=r.length>0&&r.every(e=>l.includes(e)),I=r.some(e=>l.includes(e))&&!x,B=()=>{if(x)f(l.filter(e=>!r.includes(e)));else{const e=Array.from(new Set([...l,...r]));f(e)}},y=m.useId();return a.jsxs("div",{ref:j,className:A("sura:flex sura:flex-col sura:gap-1",q),role:"group","aria-labelledby":v?`${y}-label`:void 0,children:[v&&a.jsx("p",{id:`${y}-label`,className:"sura:text-tool-meta sura:font-semibold sura:text-sura-negro sura:mb-1",children:v}),R&&a.jsx("div",{className:"sura:pb-1 sura:mb-1 sura:border-b sura:border-gris-200",children:a.jsx(T,{checked:x?!0:I?"indeterminate":!1,onCheckedChange:B,label:V,size:h,disabled:C||r.length===0})}),a.jsx("div",{className:A(k==="horizontal"?"sura:flex sura:flex-wrap sura:gap-x-6 sura:gap-y-2":"sura:flex sura:flex-col sura:gap-2"),children:s.map(e=>a.jsx(T,{checked:l.includes(e.value),onCheckedChange:()=>G(e.value),label:e.label,helperText:e.helperText,size:h,disabled:C||e.disabled,classNames:w},e.value))})]})});b.displayName="CheckboxGroup";b.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxGroupOption"}],raw:"CheckboxGroupOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},selectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectAllLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Seleccionar todo"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"xs"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},classNames:{required:!1,tsType:{name:"FieldClassNames"},description:"Clases por zona de texto. `value` se aplica al texto de cada opción del grupo."}}};const g=[{value:"rec-001",label:"REC-2026-004821"},{value:"rec-002",label:"REC-2026-004822"},{value:"rec-003",label:"REC-2026-004823"},{value:"rec-004",label:"REC-2026-004824",disabled:!0}],Y={title:"Primitivas/CheckboxGroup",component:b,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},disabled:{control:"boolean"},selectAll:{control:"boolean"}}},t={args:{label:"Recibos de la póliza",options:g,selectAll:!0}},n={args:{label:"Opciones",options:[{value:"a",label:"Opción A"},{value:"b",label:"Opción B"},{value:"c",label:"Opción C"}]}},i={args:{label:"Coberturas",options:[{value:"basica",label:"Básica"},{value:"ampliada",label:"Ampliada"},{value:"total",label:"Total"}],orientation:"horizontal"}},c={args:{label:"Notificaciones",options:[{value:"email",label:"Correo electrónico",helperText:"Recibirás un correo cada vez que haya un cambio."},{value:"sms",label:"SMS",helperText:"Solo eventos críticos."},{value:"push",label:"Push",helperText:"Notificaciones en tiempo real."}],selectAll:!0}},u={args:{label:"Recibos de la póliza",options:g,defaultValue:["rec-001"],disabled:!0}},d={render:()=>{const[s,o]=m.useState(["rec-001"]);return a.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-white max-w-xs",children:[a.jsx(b,{label:"Recibos de la póliza",options:g,value:s,onValueChange:o,selectAll:!0}),a.jsxs("p",{className:"text-small text-gris-400",children:["Seleccionados: ",s.length===0?"ninguno":s.join(", ")]})]})}},p={args:{label:"Recibos de la póliza",options:g,defaultValue:["rec-001","rec-002"],selectAll:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Recibos de la póliza",
    options: recibos,
    selectAll: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Opciones",
    options: [{
      value: "a",
      label: "Opción A"
    }, {
      value: "b",
      label: "Opción B"
    }, {
      value: "c",
      label: "Opción C"
    }]
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Coberturas",
    options: [{
      value: "basica",
      label: "Básica"
    }, {
      value: "ampliada",
      label: "Ampliada"
    }, {
      value: "total",
      label: "Total"
    }],
    orientation: "horizontal"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Notificaciones",
    options: [{
      value: "email",
      label: "Correo electrónico",
      helperText: "Recibirás un correo cada vez que haya un cambio."
    }, {
      value: "sms",
      label: "SMS",
      helperText: "Solo eventos críticos."
    }, {
      value: "push",
      label: "Push",
      helperText: "Notificaciones en tiempo real."
    }],
    selectAll: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Recibos de la póliza",
    options: recibos,
    defaultValue: ["rec-001"],
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["rec-001"]);
    return <div className="flex flex-col gap-4 p-4 bg-white max-w-xs">
        <CheckboxGroup label="Recibos de la póliza" options={recibos} value={selected} onValueChange={setSelected} selectAll />
        <p className="text-small text-gris-400">
          Seleccionados: {selected.length === 0 ? "ninguno" : selected.join(", ")}
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Recibos de la póliza",
    options: recibos,
    defaultValue: ["rec-001", "rec-002"],
    selectAll: true
  }
}`,...p.parameters?.docs?.source}}};const Z=["Default","SinSelectAll","Horizontal","ConHelperText","Disabled","Controlado","ConValorInicial"];export{c as ConHelperText,p as ConValorInicial,d as Controlado,t as Default,u as Disabled,i as Horizontal,n as SinSelectAll,Z as __namedExportsOrder,Y as default};
