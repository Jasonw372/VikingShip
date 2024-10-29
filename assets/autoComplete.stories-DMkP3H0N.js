import{j as t,c as _}from"./index-BVpe1bT6.js";import{r as u}from"./index-RYns6xqu.js";import{I as $}from"./input-BvevDYLM.js";import{I as K}from"./icon-CNWIcNdD.js";import{T as F}from"./transition-D95C4ZkA.js";import"./index.es-BQfyQUqj.js";import"./index-xAjyIiMH.js";import"./index-rNTiGNI1.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";function H(n,r=300){const[a,o]=u.useState(n);return u.useEffect(()=>{const g=window.setTimeout(()=>{o(n)},r);return()=>{clearTimeout(g)}},[r,n]),a}function U(n,r){u.useEffect(()=>{const a=o=>{!n.current||n.current.contains(o.target)||r(o)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[n,r])}const P=n=>{const{fetchSuggestions:r,onSelect:a,onChange:o,value:g,renderOption:f,...W}=n,[h,y]=u.useState(g),[i,c]=u.useState([]),[S,D]=u.useState(!1),[q,m]=u.useState(!1),[l,T]=u.useState(-1),d=u.useRef(!1),k=u.useRef(null),v=H(h,300);U(k,()=>{c([])}),u.useEffect(()=>{if(v&&d.current){c([]);const e=r(v);e instanceof Promise?(D(!0),e.then(s=>{D(!1),c(s),s.length>0&&m(!0)})):(c(e),m(!0),e.length>0&&m(!0))}else m(!1);T(-1)},[v,r]);const w=e=>{e<0&&(e=0),e>=i.length&&(e=i.length-1),T(e)},I=e=>{switch(e.key){case"Enter":i[l]&&j(i[l]);break;case"ArrowUp":w(l-1);break;case"ArrowDown":w(l+1);break;case"Escape":m(!1);break}},L=e=>{const s=e.target.value.trim();y(s),o&&o(s),d.current=!0},j=e=>{y(e.value),m(!1),a&&a(e),d.current=!1},R=e=>f?f(e):e.value,z=()=>t.jsx(F,{in:q||S,animation:"zoom-in-top",timeout:300,onExited:()=>{c([])},children:t.jsxs("ul",{className:"viking-suggestion-list",children:[S&&t.jsx("div",{className:"suggestions-loading-icon",children:t.jsx(K,{icon:"spinner",spin:!0})}),i.map((e,s)=>{const V=_("suggestion-item",{"is-active":s===l});return t.jsx("li",{className:V,onClick:()=>j(e),children:R(e)},s)})]})});return t.jsxs("div",{className:"viking-auto-complete",ref:k,children:[t.jsx($,{...W,value:h,onChange:L,onKeyDown:I}),z()]})};P.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  str: string,
) => DataSourceType[] | Promise<DataSourceType[]>`,signature:{arguments:[{type:{name:"string"},name:"str"}],return:{name:"union",raw:"DataSourceType[] | Promise<DataSourceType[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"}],raw:"Promise<DataSourceType[]>"}]}}},description:`返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise
type DataSourceType<T = {}> = T & DataSourceObject`},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"void"}}},description:"点击选中建议项时触发的回调"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"文本框发生改变的时候触发的事件"},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactElement"}}},description:""}},composes:["Omit"]};const re={title:"AutoComplete组件",component:P,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{fetchSuggestions:n=>[{value:"bradley",number:11},{value:"pope",number:1},{value:"caruso",number:4},{value:"cook",number:2},{value:"cousins",number:15},{value:"james",number:23},{value:"AD",number:3},{value:"green",number:14},{value:"howard",number:39},{value:"kuzma",number:0}].filter(a=>a.value.includes(n)),onSelect:n=>{alert(`你选择了${n.value}`)}},name:"默认组件"},b={args:{fetchSuggestions:n=>[{value:"bradley",number:11},{value:"pope",number:1},{value:"caruso",number:4},{value:"cook",number:2},{value:"cousins",number:15},{value:"james",number:23},{value:"AD",number:3},{value:"green",number:14},{value:"howard",number:39},{value:"kuzma",number:0}].filter(a=>a.value.includes(n)),onSelect:n=>{alert(`你选择了${n.value}`)},renderOption:n=>{const r=n;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["名字: ",r.value]}),t.jsx("br",{}),t.jsxs("span",{children:["球衣号码: ",r.number]})]})}},name:"个性化AutoComplete"};var N,O,x;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fetchSuggestions: query => {
      const lakersWithNumber = [{
        value: 'bradley',
        number: 11
      }, {
        value: 'pope',
        number: 1
      }, {
        value: 'caruso',
        number: 4
      }, {
        value: 'cook',
        number: 2
      }, {
        value: 'cousins',
        number: 15
      }, {
        value: 'james',
        number: 23
      }, {
        value: 'AD',
        number: 3
      }, {
        value: 'green',
        number: 14
      }, {
        value: 'howard',
        number: 39
      }, {
        value: 'kuzma',
        number: 0
      }];
      return lakersWithNumber.filter(player => player.value.includes(query));
    },
    onSelect: (item: DataSourceType) => {
      alert(\`你选择了\${(item as DataSourceType<LakerPlayerProps>).value}\`);
    }
  },
  name: "默认组件"
}`,...(x=(O=p.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var A,C,E;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    fetchSuggestions: query => {
      const lakersWithNumber = [{
        value: 'bradley',
        number: 11
      }, {
        value: 'pope',
        number: 1
      }, {
        value: 'caruso',
        number: 4
      }, {
        value: 'cook',
        number: 2
      }, {
        value: 'cousins',
        number: 15
      }, {
        value: 'james',
        number: 23
      }, {
        value: 'AD',
        number: 3
      }, {
        value: 'green',
        number: 14
      }, {
        value: 'howard',
        number: 39
      }, {
        value: 'kuzma',
        number: 0
      }];
      return lakersWithNumber.filter(player => player.value.includes(query));
    },
    onSelect: (item: DataSourceType) => {
      alert(\`你选择了\${(item as DataSourceType<LakerPlayerProps>).value}\`);
    },
    renderOption: (item: DataSourceType) => {
      const itemWithNumber = (item as DataSourceType<LakerPlayerProps>);
      return <>
          <b>名字: {itemWithNumber.value}</b><br />
          <span>球衣号码: {itemWithNumber.number}</span>
        </>;
    }
  },
  name: "个性化AutoComplete"
}`,...(E=(C=b.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const te=["Default","Custom"];export{b as Custom,p as Default,te as __namedExportsOrder,re as default};
