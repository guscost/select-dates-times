import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{P as R,a as N,B as S,C as k,b as C,c as q,I as h}from"./popover-B0M5B5jL.js";import{d as i,t as O}from"./timezone-C_aROZb4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";i.extend(O);const D=new Date(1900,0,1),v=new Date(2199,11,31),g=({range:e,quickOptions:o,showTimezone:l,onSelect:n})=>{var c,r;return t.jsxs(t.Fragment,{children:[o!=null&&o.length?t.jsxs("div",{className:"mt-2 mb-4",children:[t.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),t.jsx("div",{className:"flex gap-3 flex-wrap",children:o.map((a,s)=>{var d,p;return t.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${(e==null?void 0:e.from)===((d=a.range)==null?void 0:d.from)&&(e==null?void 0:e.to)===((p=a.range)==null?void 0:p.to)?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>n(a.range),children:a.label},s)})})]}):null,t.jsx("div",{className:"mb-4",children:t.jsx(q,{mode:"range",defaultMonth:e==null?void 0:e.from,selected:e,onSelect:n,numberOfMonths:2,captionLayout:"dropdown",startMonth:D,endMonth:v,hidden:{before:D,after:v},required:!1})}),t.jsxs("div",{className:"flex gap-4 mb-2",children:[t.jsxs("div",{className:"w-1/2",children:[t.jsx("label",{className:"block font-medium pb-1 text-sm",children:"From Date & Time"}),t.jsx("div",{className:"flex align-center gap-1",children:t.jsx(h,{type:"datetime-local",className:"cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm",value:(e==null?void 0:e.from)??{}?i(e==null?void 0:e.from).format("YYYY-MM-DDTHH:mm"):"",onChange:a=>{const s=i(a.target.value).toDate();n({from:s,to:e!=null&&e.to&&s>e.to?s:e==null?void 0:e.to})}})})]}),t.jsxs("div",{className:"w-1/2",children:[t.jsx("label",{className:"block font-medium pb-1 text-sm",children:"To Date & Time"}),t.jsx("div",{className:"flex align-center gap-1",children:t.jsx(h,{type:"datetime-local",className:"cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm",value:(e==null?void 0:e.to)??""?i(e==null?void 0:e.to).format("YYYY-MM-DDTHH:mm"):"",onChange:a=>{const s=i(a.target.value).toDate();n({to:s,from:e!=null&&e.from&&s<e.from?s:e==null?void 0:e.from})}})})]})]}),l&&t.jsxs("div",{className:"text-xs text-gray-600 flex justify-end mb-2",children:["Time Zone: ",(r=(c=i)==null?void 0:c.tz)==null?void 0:r.guess()]})]})},w=({initialRange:e,quickOptions:o,showTimezone:l,onSelect:n,align:c="start"})=>{const[r,a]=x.useState(!1),s=f=>{a(f===void 0?!r:f)},[d,p]=x.useState(e);return t.jsxs(R,{open:r,onOpenChange:()=>s(),children:[t.jsx(N,{asChild:!0,children:t.jsx(S,{className:"px-2",variant:e?"default":"outline",children:t.jsx(k,{})})}),t.jsxs(C,{align:c,className:"p-3 pt-1 w-fit",children:[t.jsx(g,{range:e,quickOptions:o,showTimezone:l,onSelect:p}),t.jsx("div",{className:"flex mt-4",children:t.jsx("button",{onClick:()=>{s(!1),n(d??{from:void 0})},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},b=w;g.__docgenInfo={description:"",methods:[],displayName:"PickDateTimeRange",props:{range:{required:!1,tsType:{name:"WrappedDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"WrappedDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},showTimezone:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"WrappedDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"SelectDateTimeRange",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialRange:{required:!1,tsType:{name:"WrappedDateRange"},description:""}}};const A={title:"Components/SelectDateTimeRange",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Picker to select or filter a range of dates, with times"}}}},_=e=>{const[o,l]=x.useState();return t.jsx(b,{initialRange:o,align:e.align,quickOptions:e.quickOptions,showTimezone:e.showTimezone,onSelect:l})},m=_.bind({}),u=new Date().valueOf();m.args={align:"start",quickOptions:[{label:"Last Week",range:{from:u-864e5*7,to:u}},{label:"Last 30 Days",range:{from:u-864e5*30,to:u}}],showTimezone:!1};var T,j,y;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return <SelectDateTimeRange initialRange={range} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setRange} />;
}`,...(y=(j=m.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const L=["Default"];export{m as Default,L as __namedExportsOrder,A as default};
