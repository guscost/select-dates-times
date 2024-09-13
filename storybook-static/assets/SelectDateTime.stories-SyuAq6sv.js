import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as q}from"./index-BwDkhjyp.js";import{S as O,P as D}from"./SelectDateTime-D8UUXDDA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./popover-Bs5IZc--.js";import"./index-Drt3gf4w.js";import"./timezone-C_aROZb4.js";const j={title:"Components/SelectDateTime",component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select a date with time"}}}},a=e=>{const[m,o]=q.useState();return e.render==="picker"?r.jsx(D,{timestamp:m,quickOptions:e.quickOptions,onSelect:o}):r.jsx(O,{initialTimestamp:m,align:e.align,quickOptions:e.quickOptions,showTimezone:e.showTimezone,onSelect:o})},n=new Date().valueOf(),t=a.bind({}),s=a.bind({}),i=a.bind({});t.args={align:"start",quickOptions:[]};s.args={align:"start",quickOptions:[{label:"7 Days Ago",timestamp:n-864e5*7},{label:"30 Days Ago",timestamp:n-864e5*30}],showTimezone:!1};i.args={render:"picker"};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [timestamp, setTimestamp] = useState<Date>();
  return args.render === "picker" ? <PickDateTime timestamp={timestamp} quickOptions={args.quickOptions} onSelect={setTimestamp} /> : <SelectDateTime initialTimestamp={timestamp} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setTimestamp} />;
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,T,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [timestamp, setTimestamp] = useState<Date>();
  return args.render === "picker" ? <PickDateTime timestamp={timestamp} quickOptions={args.quickOptions} onSelect={setTimestamp} /> : <SelectDateTime initialTimestamp={timestamp} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setTimestamp} />;
}`,...(g=(T=s.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var k,d,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [timestamp, setTimestamp] = useState<Date>();
  return args.render === "picker" ? <PickDateTime timestamp={timestamp} quickOptions={args.quickOptions} onSelect={setTimestamp} /> : <SelectDateTime initialTimestamp={timestamp} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setTimestamp} />;
}`,...(S=(d=i.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};const y=["Basic","QuickOptions","Picker"];export{t as Basic,i as Picker,s as QuickOptions,y as __namedExportsOrder,j as default};
