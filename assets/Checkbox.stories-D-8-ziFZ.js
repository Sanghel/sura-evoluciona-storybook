import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as g}from"./index-Bc2G9s8g.js";import{C as t}from"./Checkbox-BjKnmOnB.js";import"./index-g0ARl7yI.js";import"./index-D8VkTb9O.js";import"./index-C2Uka6Rc.js";import"./index-MerDaaRu.js";import"./index-ByoG_5Py.js";import"./index-DTK07sTh.js";import"./index-DdEr2eXK.js";import"./index-BC2HDEX5.js";import"./utils-7IX6LjdP.js";const A={title:"Primitivas/Checkbox",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},o={args:{label:"N° de recibo"}},d={args:{label:"REC-2026-004821",defaultChecked:!0}},l={args:{label:"N° de recibo",checked:"indeterminate"}},i={args:{label:"REC-2026-004823",disabled:!0}},m={args:{label:"Recordar selección",helperText:"Guardaremos tu preferencia para la próxima sesión."}},p={render:()=>{const[r,a]=g.useState("indeterminate");return e.jsxs("div",{className:"flex flex-col gap-3 p-4 bg-white max-w-xs",children:[e.jsx("p",{className:"text-eyebrow text-gris-400 mb-1",children:"Estados"}),e.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 rounded-sm",children:[e.jsx(t,{checked:r,onCheckedChange:n=>a(n===!0?!0:n===!1?!1:"indeterminate")}),e.jsx("span",{className:"text-small font-bold uppercase tracking-wider text-gris-400",children:"N° de recibo"})]}),e.jsx("div",{className:"flex items-center gap-3 px-3 py-2 rounded-sm bg-info-4",children:e.jsx(t,{defaultChecked:!0,label:"REC-2026-004821"})}),e.jsx("div",{className:"flex items-center gap-3 px-3 py-2 rounded-sm",children:e.jsx(t,{label:"REC-2026-004822"})}),e.jsx("div",{className:"flex items-center gap-3 px-3 py-2 rounded-sm",children:e.jsx(t,{label:"REC-2026-004823",disabled:!0})})]})}},x={render:()=>{const r=["Recibo enero","Recibo febrero","Recibo marzo","Recibo abril"],[a,n]=g.useState(new Set(["Recibo febrero"])),b=a.size===r.length,h=a.size>0&&!b,u=()=>{n(b?new Set:new Set(r))},f=s=>{const c=new Set(a);c.has(s)?c.delete(s):c.add(s),n(c)};return e.jsxs("div",{className:"flex flex-col gap-1 p-4 bg-white max-w-xs border border-gris-200 rounded-md",children:[e.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 border-b border-gris-200",children:[e.jsx(t,{checked:b?!0:h?"indeterminate":!1,onCheckedChange:u}),e.jsx("span",{className:"text-small font-bold uppercase tracking-wider text-gris-400",children:"Seleccionar todo"})]}),r.map(s=>e.jsx("div",{className:C("flex items-center gap-3 px-3 py-2 rounded-sm transition-colors",a.has(s)&&"bg-info-4"),children:e.jsx(t,{checked:a.has(s),onCheckedChange:()=>f(s),label:s})},s))]})}};function C(...r){return r.filter(Boolean).join(" ")}o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "N° de recibo"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "REC-2026-004821",
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "N° de recibo",
    checked: "indeterminate"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "REC-2026-004823",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Recordar selección",
    helperText: "Guardaremos tu preferencia para la próxima sesión."
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState<boolean | "indeterminate">("indeterminate");
    return <div className="flex flex-col gap-3 p-4 bg-white max-w-xs">
        <p className="text-eyebrow text-gris-400 mb-1">Estados</p>

        {/* Indeterminate — header de tabla */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-sm">
          <Checkbox checked={checked} onCheckedChange={val => setChecked(val === true ? true : val === false ? false : "indeterminate")} />
          <span className="text-small font-bold uppercase tracking-wider text-gris-400">N° de recibo</span>
        </div>

        {/* Checked con fondo azul claro */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-sm bg-info-4">
          <Checkbox defaultChecked label="REC-2026-004821" />
        </div>

        {/* Unchecked */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-sm">
          <Checkbox label="REC-2026-004822" />
        </div>

        {/* Disabled */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-sm">
          <Checkbox label="REC-2026-004823" disabled />
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["Recibo enero", "Recibo febrero", "Recibo marzo", "Recibo abril"];
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["Recibo febrero"]));
    const allChecked = selected.size === items.length;
    const someChecked = selected.size > 0 && !allChecked;
    const toggleAll = () => {
      setSelected(allChecked ? new Set() : new Set(items));
    };
    const toggle = (item: string) => {
      const next = new Set(selected);
      next.has(item) ? next.delete(item) : next.add(item);
      setSelected(next);
    };
    return <div className="flex flex-col gap-1 p-4 bg-white max-w-xs border border-gris-200 rounded-md">
        <div className="flex items-center gap-3 px-3 py-2 border-b border-gris-200">
          <Checkbox checked={allChecked ? true : someChecked ? "indeterminate" : false} onCheckedChange={toggleAll} />
          <span className="text-small font-bold uppercase tracking-wider text-gris-400">Seleccionar todo</span>
        </div>
        {items.map(item => <div key={item} className={cn("flex items-center gap-3 px-3 py-2 rounded-sm transition-colors", selected.has(item) && "bg-info-4")}>
            <Checkbox checked={selected.has(item)} onCheckedChange={() => toggle(item)} label={item} />
          </div>)}
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const I=["Default","Checked","Indeterminate","Disabled","WithHelper","TodosLosEstados","SeleccionMultiple"];export{d as Checked,o as Default,i as Disabled,l as Indeterminate,x as SeleccionMultiple,p as TodosLosEstados,m as WithHelper,I as __namedExportsOrder,A as default};
