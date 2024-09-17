import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{r as P}from"./index-BwDkhjyp.js";import{S as q,P as x}from"./SelectDate-GNDbaWzh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./dayjs.min-BIwLhz4I.js";import"./index-Drt3gf4w.js";const A={title:"Components/SelectDate",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a date"}}}},r=t=>{const[o,i]=P.useState();return t.render==="picker"?c.jsx(x,{date:o,quickOptions:t.quickOptions,showInput:t.showInput,onSelect:i}):c.jsx(q,{initialDate:o,align:t.align,quickOptions:t.quickOptions,showInput:t.showInput,onSelect:i})},p=new Date().valueOf(),e=r.bind({}),s=r.bind({}),a=r.bind({}),n=r.bind({});e.args={align:"start",quickOptions:[]};s.args={align:"start",quickOptions:[{label:"7 Days Ago",date:p-864e5*7},{label:"30 Days Ago",date:p-864e5*30}],showTimezone:!1};a.args={showInput:!0};n.args={render:"picker"};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args["render"] === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} />;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,k,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args["render"] === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} />;
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var m,S,O;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args["render"] === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} />;
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var h,w,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date>();
  return args["render"] === "picker" ? <PickDate date={date} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} /> : <SelectDate initialDate={date} align={args.align} quickOptions={args.quickOptions} showInput={args.showInput} onSelect={setDate} />;
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const B=["Basic","QuickOptions","WithInput","Picker"];export{e as Basic,n as Picker,s as QuickOptions,a as WithInput,B as __namedExportsOrder,A as default};
