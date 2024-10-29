import{j as e}from"./index-BVpe1bT6.js";import{I as s}from"./icon-CNWIcNdD.js";import{B as l}from"./button-D9p2G7HB.js";import"./index-RYns6xqu.js";import"./index.es-BQfyQUqj.js";import"./index-xAjyIiMH.js";import"./index-rNTiGNI1.js";const f={title:"Icon组件",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},c=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"gap",children:[e.jsx(s,{icon:"check",size:"2x"}),e.jsx(s,{icon:"times",size:"2x"}),e.jsx(s,{icon:"anchor",size:"2x"}),e.jsx(s,{icon:"trash",size:"2x"}),e.jsxs(l,{size:"lg",btnType:"primary",children:[e.jsx(s,{icon:"check"})," check "]})]})});c.storyName="默认图标";const n=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"gap",children:[e.jsx(s,{icon:"check",size:"2x",theme:"success"}),e.jsx(s,{icon:"times",size:"2x",theme:"danger"}),e.jsx(s,{icon:"anchor",size:"2x",theme:"primary"}),e.jsx(s,{icon:"exclamation-circle",size:"2x",theme:"warning"})]})});n.storyName="不同主题的 Icon";const o=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"gap",children:[e.jsx(s,{icon:"spinner",size:"2x",theme:"primary",spin:!0}),e.jsx(s,{icon:"spinner",size:"2x",theme:"success",pulse:!0})]})});o.storyName="更多行为的 Icon";c.__docgenInfo={description:"",methods:[],displayName:"ADefaultIcons"};n.__docgenInfo={description:"",methods:[],displayName:"BThemeIcons"};o.__docgenInfo={description:"",methods:[],displayName:"CCustomIcons"};var i,r,a;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`() => <>
    <div className="gap">
      <Icon icon="check" size="2x" />
      <Icon icon="times" size="2x" />
      <Icon icon="anchor" size="2x" />
      <Icon icon="trash" size="2x" />
      <Button size="lg" btnType="primary"><Icon icon="check" /> check </Button>
    </div>
  </>`,...(a=(r=c.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var t,m,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => <>
    <div className="gap">
      <Icon icon="check" size="2x" theme="success" />
      <Icon icon="times" size="2x" theme="danger" />
      <Icon icon="anchor" size="2x" theme="primary" />
      <Icon icon="exclamation-circle" size="2x" theme="warning" />
    </div>
  </>`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <>
    <div className="gap">
      <Icon icon="spinner" size="2x" theme="primary" spin />
      <Icon icon="spinner" size="2x" theme="success" pulse />
    </div>
  </>`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const v=["ADefaultIcons","BThemeIcons","CCustomIcons"];export{c as ADefaultIcons,n as BThemeIcons,o as CCustomIcons,v as __namedExportsOrder,f as default};
