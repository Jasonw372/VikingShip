import{c as p,j as e}from"./index-BVpe1bT6.js";import{r as z}from"./index-RYns6xqu.js";import{I as H}from"./icon-CNWIcNdD.js";import{T as O}from"./transition-D95C4ZkA.js";import"./index.es-BQfyQUqj.js";import"./index-xAjyIiMH.js";import"./index-rNTiGNI1.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";const q=({title:_,description:i,type:l="default",onClose:c,closable:C=!0})=>{const[E,I]=z.useState(!1),U=p("viking-alert",{[`viking-alert-${l}`]:l}),V=p("viking-alert-title",{"bold-title":i}),W=()=>{c&&c(),I(!0)};return e.jsx(O,{in:!E,timeout:300,animation:"zoom-in-top",children:e.jsxs("div",{className:U,children:[e.jsx("span",{className:V,children:_}),i&&e.jsx("p",{className:"viking-alert-desc",children:i}),C&&e.jsx("span",{className:"viking-alert-close",onClick:W,children:e.jsx(H,{icon:"times"})})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'default' | 'danger' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const P={title:"Alert组件",component:q,parameters:{},tags:["autodocs"],argTypes:{}},r={args:{title:"默认Alert"}},s={args:{type:"success",title:"成功Alert"}},t={args:{type:"danger",title:"危险Alert"}},a={args:{type:"warning",title:"警告Alert"}},n={args:{title:"带描述的Alert",description:"这是一个带描述的Alert"}},o={args:{title:"不可关闭的Alert",closable:!1}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "默认Alert"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "成功Alert"
  }
}`,...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var v,y,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "danger",
    title: "危险Alert"
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,h,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "警告Alert"
  }
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var T,b,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "带描述的Alert",
    description: "这是一个带描述的Alert"
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,D,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "不可关闭的Alert",
    closable: false
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const Q=["Default","Success","Danger","Warning","Description","Unclosable"];export{t as Danger,r as Default,n as Description,s as Success,o as Unclosable,a as Warning,Q as __namedExportsOrder,P as default};
