import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as D}from"./index-BwDkhjyp.js";import{a as A,b as L,B as Q,C as W,c as z,Q as B,d as F,e as j,I as v,f as S}from"./SelectDate-r34Zsz1F.js";import{d as n}from"./dayjs.min-BIwLhz4I.js";import{t as H}from"./timezone-BZc9ZB5V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";n.extend(H);const y=new Date(1900,0,1),b=new Date(2199,11,31),k=({range:e,quickOptions:i,showTimezone:c,onSelect:r})=>{var m,d;const[R,o]=D.useState(e==null?void 0:e.from);function l(s){if(s.preventDefault(),!e){const a=n().toDate(),x=n(a).subtract(7,"days").toDate();r({from:x,to:a})}}return t.jsxs(t.Fragment,{children:[i!=null&&i.length?t.jsxs("div",{className:"my-2",children:[t.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),t.jsx("div",{className:"flex gap-3 flex-wrap",children:i.map((s,a)=>{var x,T;return t.jsx(B,{label:s.label,isSelected:(e==null?void 0:e.from)===((x=s.range)==null?void 0:x.from)&&(e==null?void 0:e.to)===((T=s.range)==null?void 0:T.to),onSelect:()=>{r(s.range),o(s.range.from)}},a)})})]}):null,t.jsx("div",{className:"mt-2 mb-4",children:t.jsx(F,{mode:"range",month:R,onMonthChange:o,selected:e,onSelect:r,numberOfMonths:2,captionLayout:"dropdown",startMonth:y,endMonth:b,hidden:{before:y,after:b},required:!1})}),t.jsxs("div",{className:"flex gap-4 mb-2",children:[t.jsx("div",{className:"w-1/2",children:t.jsx(j,{label:"From Date & Time",children:t.jsx(v,{type:"datetime-local",className:S("cursor-text px-3 sm:px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",!(e!=null&&e.from)&&"text-transparent"),value:e!=null&&e.from?n(e==null?void 0:e.from).format("YYYY-MM-DDTHH:mm"):"",onChange:s=>{const a=n(s.target.value).toDate();n(a).isValid()&&(o(a),r({from:a,to:e!=null&&e.to&&a>e.to?a:e==null?void 0:e.to}))},onClick:l,onFocus:l})})}),t.jsx("div",{className:"w-1/2",children:t.jsx(j,{label:"To Date & Time",children:t.jsx(v,{type:"datetime-local",className:S("cursor-text px-3 sm:px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",!(e!=null&&e.to)&&"text-transparent"),value:e!=null&&e.to?n(e==null?void 0:e.to).format("YYYY-MM-DDTHH:mm"):"",onChange:s=>{const a=n(s.target.value).toDate();n(a).isValid()&&(o(a),r({to:a,from:e!=null&&e.from&&a<e.from?a:e==null?void 0:e.from}))},onClick:l,onFocus:l})})})]}),c&&t.jsxs("div",{className:"text-xs text-gray-600 flex justify-end mb-2",children:["Time Zone: ",(d=(m=n)==null?void 0:m.tz)==null?void 0:d.guess()]})]})},I=({initialRange:e,align:i="start",quickOptions:c,showTimezone:r,onSelect:R})=>{const[o,l]=D.useState(!1),m=a=>{o||s(e),l(a===void 0?!o:a)},[d,s]=D.useState(e);return t.jsxs(A,{open:o,onOpenChange:m,children:[t.jsx(L,{asChild:!0,children:t.jsx(Q,{className:"px-2",variant:e?"default":"outline",children:t.jsx(W,{})})}),t.jsxs(z,{align:i,className:"p-3 pt-1 w-fit",children:[t.jsx(k,{range:d,quickOptions:c,showTimezone:r,onSelect:s}),t.jsx("div",{className:"flex mt-4",children:t.jsx("button",{onClick:()=>{R(d??{from:void 0}),m(!1)},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},Y=I;k.__docgenInfo={description:"",methods:[],displayName:"PickDateTimeRange",props:{range:{required:!1,tsType:{name:"WrappedDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"WrappedDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},showTimezone:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"WrappedDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"SelectDateTimeRange",props:{initialRange:{required:!1,tsType:{name:"WrappedDateRange"},description:""},align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};const X={title:"Components/SelectDateTimeRange",component:Y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a range of dates, with times"}}}},h=e=>{const[i,c]=D.useState();return e.render==="picker"?t.jsx(k,{range:i,quickOptions:e.quickOptions,onSelect:c}):t.jsx(Y,{initialRange:i,align:e.align,quickOptions:e.quickOptions,onSelect:c})},g=new Date().valueOf(),p=h.bind({}),u=h.bind({}),f=h.bind({});p.args={align:"start",quickOptions:[]};u.args={align:"start",quickOptions:[{label:"Last Week",range:{from:g-864e5*7,to:g}},{label:"Last 30 Days",range:{from:g-864e5*30,to:g}}]};f.args={render:"picker"};var O,q,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var N,C,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(P=(C=u.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var M,_,E;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args["render"] === "picker" ? <PickDateTimeRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(E=(_=f.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ee=["Basic","QuickOptions","Picker"];export{p as Basic,f as Picker,u as QuickOptions,ee as __namedExportsOrder,X as default};
