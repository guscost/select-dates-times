import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as h}from"./index-BwDkhjyp.js";import{a as B,b as L,B as Q,C as F,c as V,D as W,Q as z,d as G,e as I,I as S,f as O}from"./SelectDate-1kKEWMKI.js";import{d as r}from"./dayjs.min-BIwLhz4I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";const j=new Date(1900,0,1),v=new Date(2199,11,31),k=({range:e,quickOptions:n,showInputs:l,onSelect:i})=>{const[D,o]=h.useState(e==null?void 0:e.from);function p(s){if(s.preventDefault(),!e){const a=r().startOf("day").toDate(),c=r(a).subtract(7,"days").toDate();i({from:c,to:a})}}return t.jsxs(t.Fragment,{children:[n!=null&&n.length?t.jsxs("div",{className:"my-2",children:[t.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),t.jsx("div",{className:"flex gap-3 flex-wrap",children:n.map((s,a)=>{var c,u;return t.jsx(z,{label:s.label,isSelected:(e==null?void 0:e.from)===((c=s.range)==null?void 0:c.from)&&(e==null?void 0:e.to)===((u=s.range)==null?void 0:u.to),onSelect:()=>{i(s.range),o(s.range.from)}},a)})})]}):null,t.jsx("div",{className:"mt-2 mb-4",children:t.jsx(G,{mode:"range",month:D,onMonthChange:o,selected:e,onSelect:s=>{i(s),o((s==null?void 0:s.to)||(s==null?void 0:s.from))},numberOfMonths:2,captionLayout:"dropdown",startMonth:j,endMonth:v,hidden:{before:j,after:v},required:!1})}),l&&t.jsxs("div",{className:"flex gap-4 mb-2",children:[t.jsx("div",{className:"w-1/2",children:t.jsx(I,{label:"From Date",children:t.jsx(S,{type:"date",tabIndex:0,className:O("cursor-text px-2 sm:px-3 w-[100px] sm:w-[120px] text-xs sm:text-sm",!(e!=null&&e.from)&&"text-transparent"),value:e!=null&&e.from?r(e==null?void 0:e.from).format("YYYY-MM-DD"):"",onChange:s=>{const a=r(s.target.value).toDate();r(a).isValid()&&(o(a),i({from:a,to:e!=null&&e.to&&a>e.to?a:e==null?void 0:e.to}))},onClick:p,onFocus:p})})}),t.jsx("div",{className:"w-1/2",children:t.jsx(I,{label:"To Date",children:t.jsx(S,{type:"date",tabIndex:0,className:O("cursor-text px-2 sm:px-3 w-[100px] sm:w-[120px] text-xs sm:text-sm",!(e!=null&&e.to)&&"text-transparent"),value:e!=null&&e.to?r(e==null?void 0:e.to).format("YYYY-MM-DD"):"",onChange:s=>{const a=r(s.target.value).toDate();r(a).isValid()&&(o(a),i({to:a,from:e!=null&&e.from&&a<e.from?a:e==null?void 0:e.from}))},onClick:p,onFocus:p})})})]})]})},w=({initialRange:e,align:n="start",quickOptions:l,showInputs:i,onSelect:D})=>{const[o,p]=h.useState(!1),s=u=>{o||c(e),p(u===void 0?!o:u)},[a,c]=h.useState(e);return t.jsxs(B,{open:o,onOpenChange:s,children:[t.jsx(L,{asChild:!0,children:t.jsx(Q,{className:"px-2",variant:e?"default":"outline",children:t.jsx(F,{})})}),t.jsxs(V,{align:n,className:"p-3 pt-1 w-fit",children:[t.jsx(k,{range:a,quickOptions:l,showInputs:i,onSelect:c}),t.jsx("div",{className:"flex mt-4",children:t.jsx(W,{onClick:()=>{D(a),s(!1)}})})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"PickDateRange",props:{range:{required:!1,tsType:{name:"InnerDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"InnerDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},showInputs:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"InnerDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"SelectDateRange",props:{initialRange:{required:!1,tsType:{name:"InnerDateRange"},description:""},align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};const $={title:"Components/SelectDateRange",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a range of dates"}}}},R=e=>{const[n,l]=h.useState();return e.render==="picker"?t.jsx(k,{range:n,quickOptions:e.quickOptions,showInputs:e.showInputs,onSelect:l}):t.jsx(w,{initialRange:n,align:e.align,quickOptions:e.quickOptions,showInputs:e.showInputs,onSelect:l})},x=new Date().valueOf(),d=R.bind({}),m=R.bind({}),g=R.bind({}),f=R.bind({});d.args={align:"start",quickOptions:[]};m.args={align:"start",quickOptions:[{label:"Last Week",range:{from:x-864e5*7,to:x}},{label:"Last 30 Days",range:{from:x-864e5*30,to:x}}]};g.args={showInputs:!0};f.args={render:"picker"};var q,b,y;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,T,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var P,M,_;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var E,Y,A;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(A=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};const ee=["Basic","QuickOptions","WithInputs","Picker"];export{d as Basic,f as Picker,m as QuickOptions,g as WithInputs,ee as __namedExportsOrder,$ as default};