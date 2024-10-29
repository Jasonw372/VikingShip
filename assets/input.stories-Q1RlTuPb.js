import{j as P}from"./index-BVpe1bT6.js";import{I as E}from"./input-BvevDYLM.js";import{r as O}from"./index-RYns6xqu.js";import"./index.es-BQfyQUqj.js";import"./index-xAjyIiMH.js";import"./index-rNTiGNI1.js";const B={title:"Input组件",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["lg","sm",void 0]},icon:{control:"text"},prepend:{control:"text"},append:{control:"text"}}},r={args:{placeholder:"请输入",disabled:!1},name:"默认输入框"},a={args:{disabled:!0},name:"不可用的输入框"},s={args:{size:"lg"},name:"大号输入框"},o={args:{size:"sm"},name:"小号输入框"},t={args:{prepend:"https://",append:".com"},name:"前后缀的输入框"},n={args:{icon:"search"},name:"带图标的输入框"},e=()=>{const[V,L]=O.useState("");return P.jsx(E,{value:V,onChange:N=>L(N.target.value)})};e.storyName="受控输入框";e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入',
    disabled: false
  },
  name: '默认输入框'
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: '不可用的输入框'
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,g,S;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  name: '大号输入框'
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  name: '小号输入框'
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,I,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    prepend: 'https://',
    append: '.com'
  },
  name: '前后缀的输入框'
}`,...(b=(I=t.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var z,C,y;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  },
  name: '带图标的输入框'
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var D,_,j;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={e => setValue(e.target.value)} />;
}`,...(j=(_=e.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const F=["Default","Disabled","Large","Small","P","Icon","Controlled"];export{e as Controlled,r as Default,a as Disabled,n as Icon,s as Large,t as P,o as Small,F as __namedExportsOrder,B as default};
