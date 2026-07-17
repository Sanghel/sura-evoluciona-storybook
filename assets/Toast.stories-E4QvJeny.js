import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{T as g,u}from"./Toast-CKRpp4AL.js";import{B as r}from"./Button-B9_Q3Iln.js";import"./index-Bc2G9s8g.js";import"./index-C2Uka6Rc.js";import"./index-D8VkTb9O.js";import"./index-g0ARl7yI.js";import"./index-BJShxvVY.js";import"./index-B1T6V9Jd.js";import"./index-C7P9PB-s.js";import"./index-DvWumoXY.js";import"./index-ByoG_5Py.js";import"./index-BC2HDEX5.js";import"./index-MerDaaRu.js";import"./index-qaQ0HEkX.js";import"./utils-BP2HNEMH.js";import"./index-EGqfdL98.js";import"./index-DQfP3kMs.js";import"./Icon-B-WG8aI4.js";const T=["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],M={title:"Feedback/Toast",tags:["autodocs"],parameters:{layout:"centered"}};function n({position:t}){const{toast:o}=u();return e.jsxs(e.Fragment,{children:[e.jsx(g,{position:t}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(r,{variant:"primary",onClick:()=>o({variant:"success",title:"Cambios guardados",description:"Los datos de la póliza se actualizaron correctamente."}),children:"Toast éxito"}),e.jsx(r,{variant:"secondary",onClick:()=>o({variant:"info",title:"Nueva cobertura disponible",description:"Ahora puedes contratar cobertura de cristales."}),children:"Toast info"}),e.jsx(r,{variant:"secondary",onClick:()=>o({variant:"warning",title:"Pago pendiente",description:"Tienes 5 días para regularizar tu póliza."}),children:"Toast advertencia"}),e.jsx(r,{variant:"danger",onClick:()=>o({variant:"danger",title:"Error al procesar",description:"No fue posible completar el pago. Intenta de nuevo."}),children:"Toast error"})]})]})}const a={name:"Top-right (default)",render:()=>e.jsx(n,{position:"top-right"})},s={name:"Top-left",render:()=>e.jsx(n,{position:"top-left"})},i={name:"Top-center",render:()=>e.jsx(n,{position:"top-center"})},c={name:"Bottom-right",render:()=>e.jsx(n,{position:"bottom-right"})},p={name:"Bottom-center",render:()=>e.jsx(n,{position:"bottom-center"})},m={name:"Selector de posición",argTypes:{position:{control:{type:"select"},options:T,description:"Posición del toast en pantalla"}},args:{position:"top-right"},render:({position:t})=>e.jsx(n,{position:t})},d={name:"Sin descripción",render:()=>{const{toast:t}=u();return e.jsx("div",{className:"flex flex-wrap gap-3",children:["success","info","warning","danger"].map(o=>e.jsx(r,{variant:"secondary",onClick:()=>t({variant:o,title:"Mensaje corto"}),children:o},o))})}},l={name:"Duración 2 segundos",render:()=>{const{toast:t}=u();return e.jsx(r,{variant:"primary",onClick:()=>t({variant:"info",title:"Desaparece en 2s",duration:2e3}),children:"Mostrar"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Top-right (default)",
  render: () => <ToastDemo position="top-right" />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Top-left",
  render: () => <ToastDemo position="top-left" />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Top-center",
  render: () => <ToastDemo position="top-center" />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Bottom-right",
  render: () => <ToastDemo position="bottom-right" />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Bottom-center",
  render: () => <ToastDemo position="bottom-center" />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Selector de posición",
  argTypes: {
    position: {
      control: {
        type: "select"
      },
      options: POSITIONS,
      description: "Posición del toast en pantalla"
    }
  },
  args: {
    position: "top-right"
  },
  render: ({
    position
  }: {
    position: ToastPosition;
  }) => <ToastDemo position={position} />
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Sin descripción",
  render: () => {
    const {
      toast
    } = useToast();
    return <div className="flex flex-wrap gap-3">
        {(["success", "info", "warning", "danger"] as const).map(v => <Button key={v} variant="secondary" onClick={() => toast({
        variant: v,
        title: "Mensaje corto"
      })}>{v}</Button>)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Duración 2 segundos",
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="primary" onClick={() => toast({
      variant: "info",
      title: "Desaparece en 2s",
      duration: 2000
    })}>Mostrar</Button>;
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","TopLeft","TopCenter","BottomRight","BottomCenter","TodasLasPosiciones","SoloTitulo","DuracionCorta"];export{p as BottomCenter,c as BottomRight,a as Default,l as DuracionCorta,d as SoloTitulo,m as TodasLasPosiciones,i as TopCenter,s as TopLeft,E as __namedExportsOrder,M as default};
