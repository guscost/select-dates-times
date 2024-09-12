import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{P as w,a as b,B as N,C as y,b as S,c as C,I as E}from"./calendar_v9-DfXhlBRM.js";import{d,t as O}from"./timezone-C_aROZb4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";d.extend(O);const u=new Date(1900,0,1),f=new Date(2199,11,31),k=({timestamp:t,quickOptions:s,numberOfMonths:r,showTimezone:p,onSelect:l})=>{var o,m;return e.jsxs(e.Fragment,{children:[s!=null&&s.length?e.jsxs("div",{className:"mt-2 mb-4",children:[e.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:s.map((a,n)=>e.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${t?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>l(a.timestamp),children:a.label},n))})]}):null,e.jsx("div",{className:"mb-4",children:e.jsx(C,{mode:"single",defaultMonth:t,selected:t,onSelect:l,numberOfMonths:r||1,captionLayout:"dropdown",startMonth:u,endMonth:f,hidden:{before:u,after:f},required:!1})}),e.jsx("div",{className:"flex gap-4 mb-2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"block font-medium pb-1 text-sm",children:"Date & Time"}),e.jsx("div",{className:"flex align-center gap-1",children:e.jsx(E,{type:"datetime-local",className:"cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm",value:t?d(t).format("YYYY-MM-DDTHH:mm"):"",onChange:a=>{const n=d(a.target.value).toDate();l(t&&n>t?n:t)}})})]})}),p&&e.jsxs("div",{className:"text-xs text-gray-600 flex justify-end mb-2",children:["Time Zone: ",(m=(o=d)==null?void 0:o.tz)==null?void 0:m.guess()]})]})},j=({initialTimestamp:t,quickOptions:s,showTimezone:r,onSelect:p,align:l="start"})=>{const[o,m]=x.useState(!1),[a,n]=x.useState(t),D=_=>{m(!o)};return e.jsxs(w,{open:o,onOpenChange:()=>D(),children:[e.jsx(b,{asChild:!0,children:e.jsx(N,{className:"px-2",variant:a?"default":"outline",children:e.jsx(y,{})})}),e.jsxs(S,{align:l,className:"p-3 pt-1 w-fit",children:[e.jsx(k,{timestamp:a,quickOptions:s,showTimezone:r,onSelect:n}),e.jsx("div",{className:"flex mt-4",children:e.jsx("button",{onClick:()=>p(a),className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},v=j;j.__docgenInfo={description:"",methods:[],displayName:"SelectDateTime",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialTimestamp:{required:!1,tsType:{name:"Date"},description:""}}};const q={title:"Components/SelectDateTime",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Picker to select or filter a range of dates, with times"}}}},z=t=>{const[s,r]=x.useState();return e.jsx(v,{initialTimestamp:s,align:t.align,quickOptions:t.quickOptions,showTimezone:t.showTimezone,onSelect:r})},i=z.bind({}),c=new Date().valueOf();i.args={align:"start",quickOptions:[{label:"Last Week",range:{from:c-864e5*7,to:c}},{label:"Last 30 Days",range:{from:c-864e5*30,to:c}}],showTimezone:!1};var g,h,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [timestamp, setTimestamp] = useState<Date>();
  return <SelectDateTime initialTimestamp={timestamp} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setTimestamp} />;
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const B=["Default"];export{i as Default,B as __namedExportsOrder,q as default};
