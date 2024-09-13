import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{P,a as C,B as _,C as A,b as E,c as I}from"./popover-Bs5IZc--.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";const D=new Date(1900,0,1),f=new Date(2199,11,31),p=({date:t,quickOptions:a,numberOfMonths:s,required:d=!1,onSelect:n})=>e.jsxs(e.Fragment,{children:[a!=null&&a.length?e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:a.map((r,l)=>e.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${t?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>n(r.date),children:r.label},l))})]}):null,e.jsx("div",{className:"mt-2 mb-4",children:e.jsx(I,{mode:"single",defaultMonth:t,selected:t,onSelect:n,numberOfMonths:s||1,captionLayout:"dropdown",startMonth:D,endMonth:f,hidden:{before:D,after:f},required:d})})]}),w=({initialDate:t,quickOptions:a,onSelect:s,align:d="start"})=>{const[n,r]=u.useState(!1),[l,g]=u.useState(t),N=M=>{n&&g(t),r(!n)};return e.jsxs(P,{open:n,onOpenChange:()=>N(),children:[e.jsx(C,{asChild:!0,children:e.jsx(_,{className:"px-2",variant:t?"default":"outline",children:e.jsx(A,{})})}),e.jsxs(E,{align:d,className:"p-3 pt-1 w-fit",children:[e.jsx(p,{date:l,quickOptions:a,onSelect:g}),e.jsx("div",{className:"flex mt-4",children:e.jsx("button",{onClick:()=>{r(!1),s(l)},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},T=w;p.__docgenInfo={description:"",methods:[],displayName:"PickDate",props:{date:{required:!1,tsType:{name:"Date"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; date: Date }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"date",value:{name:"Date",required:!0}}]}}],raw:"Array<{ label: string; date: Date }>"},description:""},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"SelectDate",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialDate:{required:!1,tsType:{name:"Date"},description:""}}};const $={title:"Components/SelectDate",component:T,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a date"}}}},m=t=>{const[a,s]=u.useState();return t.render==="picker"?e.jsx(p,{date:a,quickOptions:t.quickOptions,onSelect:s}):e.jsx(T,{initialDate:a,align:t.align,quickOptions:t.quickOptions,onSelect:s})},x=new Date().valueOf(),i=m.bind({}),o=m.bind({}),c=m.bind({});i.args={align:"start",quickOptions:[]};o.args={align:"start",quickOptions:[{label:"7 Days Ago",date:x-864e5*7},{label:"30 Days Ago",date:x-864e5*30}],showTimezone:!1};c.args={render:"picker"};var k,S,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args.render === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} onSelect={setDate} />;
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,O,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args.render === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} onSelect={setDate} />;
}`,...(q=(O=o.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var v,j,b;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args.render === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} onSelect={setDate} />;
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const z=["Basic","QuickOptions","Picker"];export{i as Basic,c as Picker,o as QuickOptions,z as __namedExportsOrder,$ as default};
