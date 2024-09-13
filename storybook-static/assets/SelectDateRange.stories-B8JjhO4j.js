import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{P,a as C,B as _,C as E,b as A,c as I}from"./popover-Bs5IZc--.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";const x=new Date(1900,0,1),D=new Date(2199,11,31),R=({range:e,quickOptions:t,onSelect:n})=>{const[m,s]=u.useState(e==null?void 0:e.from);return a.jsxs(a.Fragment,{children:[t!=null&&t.length?a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),a.jsx("div",{className:"flex gap-3 flex-wrap",children:t.map((r,d)=>{var i,o;return a.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${(e==null?void 0:e.from)===((i=r.range)==null?void 0:i.from)&&(e==null?void 0:e.to)===((o=r.range)==null?void 0:o.to)?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>{s(r.range.from),n(r.range)},children:r.label},d)})})]}):null,a.jsx("div",{className:"mt-2 mb-4",children:a.jsx(I,{mode:"range",month:m,onMonthChange:s,selected:e,onSelect:n,numberOfMonths:2,captionLayout:"dropdown",startMonth:x,endMonth:D,hidden:{before:x,after:D},required:!1})})]})},T=({initialRange:e,quickOptions:t,onSelect:n,align:m="start"})=>{const[s,r]=u.useState(!1),d=k=>{s||o(e),r(k===void 0?!s:k)},[i,o]=u.useState(e);return a.jsxs(P,{open:s,onOpenChange:d,children:[a.jsx(C,{asChild:!0,children:a.jsx(_,{className:"px-2",variant:e?"default":"outline",children:a.jsx(E,{})})}),a.jsxs(A,{align:m,className:"p-3 pt-1 w-fit",children:[a.jsx(R,{range:i,quickOptions:t,onSelect:o}),a.jsx("div",{className:"flex mt-4",children:a.jsx("button",{onClick:()=>{n(i??{from:void 0}),d(!1)},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},N=T;R.__docgenInfo={description:"",methods:[],displayName:"PickDateRange",props:{range:{required:!1,tsType:{name:"WrappedDateRange"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"WrappedDateRange",required:!0}}]}}],raw:"Array<{ label: string; range: DateRange }>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"WrappedDateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"SelectDateRange",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialRange:{required:!1,tsType:{name:"WrappedDateRange"},description:""}}};const $={title:"Components/SelectDateRange",component:N,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a range of dates"}}}},f=e=>{const[t,n]=u.useState();return e.render==="picker"?a.jsx(R,{range:t,quickOptions:e.quickOptions,onSelect:n}):a.jsx(N,{initialRange:t,align:e.align,quickOptions:e.quickOptions,onSelect:n})},p=new Date().valueOf(),c=f.bind({}),l=f.bind({}),g=f.bind({});c.args={align:"start",quickOptions:[]};l.args={align:"start",quickOptions:[{label:"Last Week",range:{from:p-864e5*7,to:p}},{label:"Last 30 Days",range:{from:p-864e5*30,to:p}}]};g.args={render:"picker"};var S,h,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var O,q,v;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(v=(q=l.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var j,b,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>();
  return args.render === "picker" ? <PickDateRange range={range} quickOptions={args.quickOptions} onSelect={setRange} /> : <SelectDateRange initialRange={range} align={args.align} quickOptions={args.quickOptions} onSelect={setRange} />;
}`,...(w=(b=g.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const F=["Basic","QuickOptions","Picker"];export{c as Basic,g as Picker,l as QuickOptions,F as __namedExportsOrder,$ as default};
