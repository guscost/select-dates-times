import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as R}from"./index-BwDkhjyp.js";import{a as B,b as F,B as Q,C as V,c as W,D as z,Q as U,d as G,E as S,L as O,e as j,I as q,f as v,g as h}from"./SelectDate-mlJzUR5E.js";import{d as r}from"./dayjs.min-BIwLhz4I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";const w=({range:e,quickOptions:n,showInputs:l,onSelect:i})=>{const[k,o]=R.useState(e==null?void 0:e.from);function f(s){if(!e){const a=r().startOf("day").toDate(),c=r(a).subtract(7,"days").toDate();i({from:c,to:a})}}return t.jsxs(t.Fragment,{children:[n!=null&&n.length?t.jsxs("div",{className:"my-2",children:[t.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),t.jsx("div",{className:"flex gap-3 flex-wrap",children:n.map((s,a)=>{var c,u;return t.jsx(U,{label:s.label,isSelected:(e==null?void 0:e.from)===((c=s.range)==null?void 0:c.from)&&(e==null?void 0:e.to)===((u=s.range)==null?void 0:u.to),onSelect:()=>{i(s.range),o(s.range.from)}},a)})})]}):null,t.jsx("div",{className:"mt-2 mb-4",children:t.jsx(G,{mode:"range",month:k,onMonthChange:o,selected:e,onSelect:s=>{i(s),o(s!=null&&s.to&&s.to!==s.from?r(s.to).subtract(1,"month").toDate():s==null?void 0:s.from)},numberOfMonths:2,captionLayout:"dropdown",startMonth:S,endMonth:O,hidden:{before:S,after:O},required:!1})}),l&&t.jsxs("div",{className:"flex gap-4 mb-2",children:[t.jsx("div",{className:"w-1/2",children:t.jsx(j,{label:"From Date",children:t.jsx(q,{type:"date",tabIndex:0,className:v("cursor-text px-2 sm:px-3 w-[100px] sm:w-[120px] text-xs sm:text-sm",!(e!=null&&e.from)&&"text-transparent"),value:e!=null&&e.from?r(e==null?void 0:e.from).format("YYYY-MM-DD"):"",onChange:s=>{const a=r(s.target.value).toDate();r(a).isValid()&&(o(a),i({from:a,to:e!=null&&e.to&&a>e.to?a:e==null?void 0:e.to}))},onMouseDown:f,onFocus:h,onClick:h})})}),t.jsx("div",{className:"w-1/2",children:t.jsx(j,{label:"To Date",children:t.jsx(q,{type:"date",tabIndex:0,className:v("cursor-text px-2 sm:px-3 w-[100px] sm:w-[120px] text-xs sm:text-sm",!(e!=null&&e.to)&&"text-transparent"),value:e!=null&&e.to?r(e==null?void 0:e.to).format("YYYY-MM-DD"):"",onChange:s=>{const a=r(s.target.value).toDate();r(a).isValid()&&(o(a),i({to:a,from:e!=null&&e.from&&a<e.from?a:e==null?void 0:e.from}))},onMouseDown:f,onFocus:h,onClick:h})})})]})]})},I=({initialRange:e,align:n="start",quickOptions:l,showInputs:i,onSelect:k})=>{const[o,f]=R.useState(!1),s=u=>{o||c(e),f(u===void 0?!o:u)},[a,c]=R.useState(e);return t.jsxs(B,{open:o,onOpenChange:s,children:[t.jsx(F,{asChild:!0,children:t.jsx(Q,{className:"px-2",variant:e?"default":"outline",children:t.jsx(V,{})})}),t.jsxs(W,{align:n,className:"p-3 pt-1 w-fit",children:[t.jsx(w,{range:a,quickOptions:l,showInputs:i,onSelect:c}),t.jsx("div",{className:"flex mt-4",children:t.jsx(z,{onClick:()=>{k(a),s(!1)}})})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"PickDateRange",props:{range:{required:!1,tsType:{name:"InnerDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"InnerDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},showInputs:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"InnerDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"SelectDateRange",props:{initialRange:{required:!1,tsType:{name:"InnerDateRange"},description:""},align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};const ee={title:"Components/SelectDateRange",component:I,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a range of dates"}}}},D=e=>{const[n,l]=R.useState();return e.render==="picker"?t.jsx(w,{range:n,quickOptions:e.quickOptions,showInputs:e.showInputs,onSelect:l}):t.jsx(I,{initialRange:n,align:e.align,quickOptions:e.quickOptions,showInputs:e.showInputs,onSelect:l})},x=new Date().valueOf(),p=D.bind({}),d=D.bind({}),m=D.bind({}),g=D.bind({});p.args={align:"start",quickOptions:[]};d.args={align:"start",quickOptions:[{label:"Last Week",range:{from:x-864e5*7,to:x}},{label:"Last 30 Days",range:{from:x-864e5*30,to:x}}]};m.args={showInputs:!0};g.args={render:"picker"};var b,y,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(T=(y=p.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var N,C,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var E,M,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var Y,A,L;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showInputs={args.showInputs} onSelect={setRange} />;
}`,...(L=(A=g.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const te=["Basic","QuickOptions","WithInputs","Picker"];export{p as Basic,g as Picker,d as QuickOptions,m as WithInputs,te as __namedExportsOrder,ee as default};