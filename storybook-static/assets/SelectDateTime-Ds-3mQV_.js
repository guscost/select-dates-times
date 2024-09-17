import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{d as v,P as D,a as w,B as N,C as I,b as C,c as _}from"./popover-Bs5IZc--.js";import{d as u,t as q}from"./timezone-C_aROZb4.js";const g=p.forwardRef(({className:t,type:a,...i},l)=>e.jsx("input",{type:a,className:v("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:l,...i}));g.displayName="Input";g.__docgenInfo={description:"",methods:[],displayName:"Input"};u.extend(q);const h=new Date(1900,0,1),y=new Date(2199,11,31),b=({label:t,children:a})=>e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"block font-medium pb-1 text-sm",children:t}),e.jsx("div",{className:"flex align-center gap-1",children:a})," "]}),j=({timestamp:t,quickOptions:a,numberOfMonths:i,showTimezone:l,required:f=!1,onSelect:s})=>{var d,m;const[x,r]=p.useState(t);function o(n){n.preventDefault(),t||s(new Date)}return e.jsxs(e.Fragment,{children:[a!=null&&a.length?e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-sm mb-1 font-medium",children:"Quick Options"}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:a.map((n,c)=>e.jsx("div",{className:`text-xs sm:text-sm font-medium cursor-pointer ${t===n.timestamp?"text-gray-600":"text-gray-400 hover:text-gray-500"}`,onClick:()=>{s(n.timestamp),r(n.timestamp)},children:n.label},c))})]}):null,e.jsx("div",{className:"mt-2 mb-4",children:e.jsx(_,{mode:"single",month:x,onMonthChange:r,selected:t,onSelect:s,numberOfMonths:i||1,captionLayout:"dropdown",startMonth:h,endMonth:y,hidden:{before:h,after:y},required:f})}),e.jsx("div",{className:"flex gap-4 mb-2",children:e.jsx("div",{className:"w-full",children:e.jsx(b,{label:"Date & Time",children:e.jsx(g,{type:"datetime-local",className:v("cursor-text px-3 sm:px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",!t&&"text-transparent"),value:t?u(t).format("YYYY-MM-DDTHH:mm"):"",onChange:n=>{const c=u(n.target.value).toDate();r(c),s(c)},onClick:o,onFocus:o})})})}),l&&e.jsxs("div",{className:"text-xs text-gray-600 flex justify-end mb-2",children:["Time Zone: ",(m=(d=u)==null?void 0:d.tz)==null?void 0:m.guess()]})]})},T=({initialTimestamp:t,quickOptions:a,showTimezone:i,onSelect:l,align:f="start"})=>{const[s,x]=p.useState(!1),[r,o]=p.useState(t),d=m=>{s||o(t),x(m===void 0?!s:m)};return e.jsxs(D,{open:s,onOpenChange:d,children:[e.jsx(w,{asChild:!0,children:e.jsx(N,{className:"px-2",variant:t?"default":"outline",children:e.jsx(I,{})})}),e.jsxs(C,{align:f,className:"p-3 pt-1 w-fit",children:[e.jsx(j,{timestamp:r,quickOptions:a,showTimezone:i,onSelect:o}),e.jsx("div",{className:"flex mt-4",children:e.jsx("button",{onClick:()=>{l(r),d(!1)},className:"py-2 w-full bg-primary text-white rounded-md",children:"Done"})})]})]})},R=T;b.__docgenInfo={description:"",methods:[],displayName:"TimeInput",props:{label:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"PickDateTime",props:{timestamp:{required:!1,tsType:{name:"Date"},description:""},quickOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; timestamp: Date }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"Date",required:!0}}]}}],raw:"Array<{ label: string; timestamp: Date }>"},description:""},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:""},showTimezone:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(datetime: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"datetime"}],return:{name:"void"}}},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"SelectDateTime",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},initialTimestamp:{required:!1,tsType:{name:"Date"},description:""}}};export{g as I,j as P,R as S,b as T};
