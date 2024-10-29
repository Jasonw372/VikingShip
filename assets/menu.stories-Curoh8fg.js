import{c as f,j as e}from"./index-BVpe1bT6.js";import{r as p,R as x}from"./index-RYns6xqu.js";import{I as B}from"./icon-CNWIcNdD.js";import{T as F}from"./transition-D95C4ZkA.js";import"./index.es-BQfyQUqj.js";import"./index-xAjyIiMH.js";import"./index-rNTiGNI1.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";const S=p.createContext({index:"0"}),G=t=>x.Children.map(t,(u,r)=>{const o=u,{displayName:s}=o.type;if(s==="Menu.Item"||s==="Menu.SubMenu")return x.cloneElement(o,{index:r.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}),P=({defaultIndex:t="0",className:u,mode:r="horizontal",style:o,onSelect:s,children:c,defaultOpenSubMenus:d=[]})=>{const a=f("viking-menu",u,{"menu-vertical":r==="vertical","menu-horizontal":r!=="vertical"}),[l,b]=p.useState(t),g={index:l||"0",onSelect:m=>{b(m),s&&s(m)},mode:r,defaultOpenSubMenus:d};return e.jsx("ul",{className:a,style:o,"data-testid":"test-menu",children:e.jsx(S.Provider,{value:g,children:G(c)})})};P.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{defaultIndex:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedIndex"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpenSubMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const v=({index:t,disabled:u=!1,className:r,style:o,children:s})=>{const c=p.useContext(S),d=f("menu-item",r,{"is-disabled":u,"is-active":c.index===t}),{onSelect:a}=c,l=()=>{a&&!u&&typeof t=="string"&&a(t)};return e.jsx("li",{className:d,style:o,onClick:l,children:s})};v.displayName="Menu.Item";v.__docgenInfo={description:"",methods:[],displayName:"Menu.Item",props:{index:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j=({index:t,title:u,children:r,className:o})=>{const s=p.useContext(S),c=s.defaultOpenSubMenus,d=t&&s.mode==="vertical"?c.includes(t):!1,[a,l]=p.useState(d),b=f("menu-item submenu-item",o,{"is-active":s.index===t,"is-opened":a,"is-vertical":s.mode==="vertical"}),g=i=>{i.preventDefault(),l(!a)};let m;const T=(i,y)=>{clearTimeout(m),i.preventDefault(),m=setTimeout(()=>{l(y)},300)},D=s.mode==="vertical"?{onClick:g}:{},A=s.mode!=="vertical"?{onMouseEnter:i=>{T(i,!0)},onMouseLeave:i=>{T(i,!1)}}:{},$=()=>{const i=f("viking-submenu",{"menu-opened":a}),y=x.Children.map(r,(W,L)=>{const k=W;if(k.type.displayName==="Menu.Item")return x.cloneElement(k,{index:`${t}-${L}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return e.jsx(F,{in:a,timeout:300,animation:"zoom-in-top",children:e.jsx("ul",{className:i,children:y})})};return e.jsxs("li",{className:b,...A,children:[e.jsxs("div",{className:"submenu-title",...D,children:[u,e.jsx(B,{icon:"angle-down",className:"arrow-icon"})]}),$()]},t)};j.displayName="Menu.SubMenu";j.__docgenInfo={description:"",methods:[],displayName:"Menu.SubMenu",props:{index:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const N=P;N.Item=v;N.SubMenu=j;const n=N,ne={title:"Menu组件",component:n,subcomponents:{"Menu.SubMenu":n.SubMenu,"Menu.Item":n.Item},tags:["autodocs"],argTypes:{defaultIndex:{description:"定义菜单项的默认选中状态，指定一个菜单项的索引。",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"0"}}},mode:{description:"控制菜单的布局方式。",control:{type:"select",options:["horizontal","vertical"]},table:{type:{summary:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"}}},defaultOpenSubMenus:{description:"默认展开的 SubMenu 菜单项，['1','2','2-1']。",control:"text",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}}}},M={render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"cool link"}),e.jsx(n.Item,{children:"cool link 2"}),e.jsx(n.Item,{disabled:!0,children:"disabled"}),e.jsxs(n.SubMenu,{title:"下拉选项",children:[e.jsx(n.Item,{children:"下拉选项一"}),e.jsx(n.Item,{children:"下拉选项二"})]})]}),args:{defaultIndex:"0"},name:"默认Menu"},I={render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"cool link"}),e.jsx(n.Item,{children:"cool link 2"}),e.jsx(n.Item,{disabled:!0,children:"disabled"}),e.jsxs(n.SubMenu,{title:"下拉选项",children:[e.jsx(n.Item,{children:"下拉选项一"}),e.jsx(n.Item,{children:"下拉选项二"})]})]}),args:{defaultIndex:"0",mode:"vertical"},name:"纵向的 Menu"},h={render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Item,{children:"cool link"}),e.jsx(n.Item,{children:"cool link 2"}),e.jsx(n.Item,{disabled:!0,children:"disabled"}),e.jsxs(n.SubMenu,{title:"下拉选项",children:[e.jsx(n.Item,{children:"下拉选项一"}),e.jsx(n.Item,{children:"下拉选项二"})]})]}),args:{defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["3"]},name:"默认展开的纵向 Menu"};var C,q,R;M.parameters={...M.parameters,docs:{...(C=M.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return <Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>;
  },
  args: {
    defaultIndex: '0'
  },
  name: '默认Menu' // Setting the story name
}`,...(R=(q=M.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var w,O,E;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return <Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>;
  },
  args: {
    defaultIndex: '0',
    mode: 'vertical'
  },
  name: '纵向的 Menu' // Setting the story name
}`,...(E=(O=I.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var z,_,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <Menu {...args}>
        <Menu.Item>
          cool link
        </Menu.Item>
        <Menu.Item>
          cool link 2
        </Menu.Item>
        <Menu.Item disabled>
          disabled
        </Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>
            下拉选项一
          </Menu.Item>
          <Menu.Item>
            下拉选项二
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>;
  },
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['3']
  },
  name: '默认展开的纵向 Menu' // Setting the story name
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const te=["DefaultMenu","ClickMenu","OpenedMenu"];export{I as ClickMenu,M as DefaultMenu,h as OpenedMenu,te as __namedExportsOrder,ne as default};
