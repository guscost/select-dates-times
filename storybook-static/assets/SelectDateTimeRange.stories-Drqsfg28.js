import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{P as I,a as M,B as Y,C as A,b as L,c as W}from"./popover-Bs5IZc--.js";import{d as o,t as B}from"./timezone-C_aROZb4.js";import{T as v,I as T}from"./SelectDateTime-C1M4p4ul.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";o.extend(B);const h=new Date(1900,0,1),j=new Date(2199,11,31),D=({range:e,quickOptions:n,showTimezone:r,onSelect:i})=>{var p,c;return t.jsxs(t.Fragment,{children:[n!=null&&n.length?t.jsxs("div",{className:"my-2",children:[t.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),t.jsx("div",{className:"flex gap-3 flex-wrap",children:n.map((a,s)=>{var u,g;return t.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${(e==null?void 0:e.from)===((u=a.range)==null?void 0:u.from)&&(e==null?void 0:e.to)===((g=a.range)==null?void 0:g.to)?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>i(a.range),children:a.label},s)})})]}):null,t.jsx("div",{className:"mt-2 mb-4",children:t.jsx(W,{mode:"range",defaultMonth:e==null?void 0:e.from,selected:e,onSelect:i,numberOfMonths:2,captionLayout:"dropdown",startMonth:h,endMonth:j,hidden:{before:h,after:j},required:!1})}),t.jsxs("div",{className:"flex gap-4 mb-2",children:[t.jsx("div",{className:"w-1/2",children:t.jsx(v,{label:"From Date & Time",children:t.jsx(T,{type:"datetime-local",className:"cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm",value:(e==null?void 0:e.from)??{}?o(e==null?void 0:e.from).format("YYYY-MM-DDTHH:mm"):"",onChange:a=>{const s=o(a.target.value).toDate();i({from:s,to:e!=null&&e.to&&s>e.to?s:e==null?void 0:e.to})},onClick:a=>a.preventDefault(),onFocus:a=>a.preventDefault()})})}),t.jsx("div",{className:"w-1/2",children:t.jsx(v,{label:"To Date & Time",children:t.jsx(T,{type:"datetime-local",className:"cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm",value:(e==null?void 0:e.to)??""?o(e==null?void 0:e.to).format("YYYY-MM-DDTHH:mm"):"",onChange:a=>{const s=o(a.target.value).toDate();i({to:s,from:e!=null&&e.from&&s<e.from?s:e==null?void 0:e.from})},onClick:a=>a.preventDefault(),onFocus:a=>a.preventDefault()})})})]}),r&&t.jsxs("div",{className:"text-xs text-gray-600 flex justify-end mb-2",children:["Time Zone: ",(c=(p=o)==null?void 0:p.tz)==null?void 0:c.guess()]})]})},_=({initialRange:e,quickOptions:n,showTimezone:r,onSelect:i,align:p="start"})=>{const[c,a]=f.useState(!1),s=k=>{a(k===void 0?!c:k)},[u,g]=f.useState(e);return t.jsxs(I,{open:c,onOpenChange:()=>s(),children:[t.jsx(M,{asChild:!0,children:t.jsx(Y,{className:"px-2",variant:e?"default":"outline",children:t.jsx(A,{})})}),t.jsxs(L,{align:p,className:"p-3 pt-1 w-fit",children:[t.jsx(D,{range:e,quickOptions:n,showTimezone:r,onSelect:g}),t.jsx("div",{className:"flex mt-4",children:t.jsx("button",{onClick:()=>{s(!1),i(u??{from:void 0})},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},E=_;D.__docgenInfo={description:"",methods:[],displayName:"PickDateTimeRange",props:{range:{required:!1,tsType:{name:"WrappedDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"WrappedDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},showTimezone:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"WrappedDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"SelectDateTimeRange",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialRange:{required:!1,tsType:{name:"WrappedDateRange"},description:""}}};const G={title:"Components/SelectDateTimeRange",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a range of dates, with times"}}}},R=e=>{const[n,r]=f.useState();return e.render==="picker"?t.jsx(D,{range:n,quickOptions:e.quickOptions,onSelect:r}):t.jsx(E,{initialRange:n,align:e.align,quickOptions:e.quickOptions,onSelect:r})},x=new Date().valueOf(),l=R.bind({}),m=R.bind({}),d=R.bind({});l.args={align:"start",quickOptions:[]};m.args={align:"start",quickOptions:[{label:"Last Week",range:{from:x-864e5*7,to:x}},{label:"Last 30 Days",range:{from:x-864e5*30,to:x}}]};d.args={render:"picker"};var y,S,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(O=(S=l.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var q,b,w;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,C,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const J=["Basic","QuickOptions","Picker"];export{l as Basic,d as Picker,m as QuickOptions,J as __namedExportsOrder,G as default};