import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as p}from"./index-Bc2G9s8g.js";import{c as $}from"./index-YJFJIaKu.js";import{P as N}from"./index-D98iFuva.js";import{a as g}from"./utils-BP2HNEMH.js";import"./index-C2Uka6Rc.js";import"./index-EGqfdL98.js";import"./index-g0ARl7yI.js";var m="Progress",v=100,[D]=$(m),[E,V]=D(m),P=p.forwardRef((a,r)=>{const{__scopeProgress:l,value:t=null,max:s,getValueLabel:y=R,...I}=a;(s||s===0)&&!x(s)&&console.error(S(`${s}`,"Progress"));const n=x(s)?s:v;t!==null&&!f(t,n)&&console.error(A(`${t}`,"Progress"));const i=f(t,n)?t:null,_=c(i)?y(i,n):void 0;return e.jsx(E,{scope:l,value:i,max:n,children:e.jsx(N.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":c(i)?i:void 0,"aria-valuetext":_,role:"progressbar","data-state":j(i,n),"data-value":i??void 0,"data-max":n,...I,ref:r})})});P.displayName=m;var b="ProgressIndicator",h=p.forwardRef((a,r)=>{const{__scopeProgress:l,...t}=a,s=V(b,l);return e.jsx(N.div,{"data-state":j(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...t,ref:r})});h.displayName=b;function R(a,r){return`${Math.round(a/r*100)}%`}function j(a,r){return a==null?"indeterminate":a===r?"complete":"loading"}function c(a){return typeof a=="number"}function x(a){return c(a)&&!isNaN(a)&&a>0}function f(a,r){return c(a)&&!isNaN(a)&&a<=r&&a>=0}function S(a,r){return`Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function A(a,r){return`Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var w=P,M=h;const C={default:"sura:bg-primary",success:"sura:bg-success-alt",warning:"sura:bg-warning-1",danger:"sura:bg-danger-1"},o=p.forwardRef(({className:a,value:r,variant:l="default",...t},s)=>e.jsx(w,{ref:s,className:g("sura:relative sura:h-2 sura:w-full sura:overflow-hidden sura:rounded-full sura:bg-gris-200",a),...t,children:e.jsx(M,{className:g("sura:h-full sura:w-full sura:flex-1 sura:transition-all sura:duration-300",C[l]),style:{transform:`translateX(-${100-(r??0)}%)`}})}));o.displayName=w.displayName;o.__docgenInfo={description:"",methods:[],props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const q={title:"Feedback/Progress",component:o,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:5}},variant:{control:"select",options:["default","success","warning","danger"]}}},u={args:{value:60,variant:"default"}},d={render:()=>e.jsxs("div",{className:"space-y-4 w-72",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] text-gris-400 mb-1",children:"Default (60%)"}),e.jsx(o,{value:60,variant:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] text-gris-400 mb-1",children:"Success (100%)"}),e.jsx(o,{value:100,variant:"success"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] text-gris-400 mb-1",children:"Warning (45%)"}),e.jsx(o,{value:45,variant:"warning"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] text-gris-400 mb-1",children:"Danger (20%)"}),e.jsx(o,{value:20,variant:"danger"})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: "default"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-72">
      <div>
        <p className="text-[12px] text-gris-400 mb-1">Default (60%)</p>
        <Progress value={60} variant="default" />
      </div>
      <div>
        <p className="text-[12px] text-gris-400 mb-1">Success (100%)</p>
        <Progress value={100} variant="success" />
      </div>
      <div>
        <p className="text-[12px] text-gris-400 mb-1">Warning (45%)</p>
        <Progress value={45} variant="warning" />
      </div>
      <div>
        <p className="text-[12px] text-gris-400 mb-1">Danger (20%)</p>
        <Progress value={20} variant="danger" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const U=["Default","AllVariants"];export{d as AllVariants,u as Default,U as __namedExportsOrder,q as default};
