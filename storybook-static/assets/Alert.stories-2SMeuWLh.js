import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as H,a as J}from"./utils-BpMXP6K7.js";import{X as v,I as X,T as K,C as L}from"./x-D_kjBb9T.js";import"./index-DRjF_FHU.js";const M=J("relative w-full rounded-lg border p-4 flex gap-3 [&>svg]:size-5",{variants:{variant:{info:"bg-info/10 text-info-foreground border-info/50",warning:"bg-warning/10 text-warning-foreground border-warning/50",success:"bg-success/10 text-success-foreground border-success/50",error:"bg-destructive/10 text-destructive-foreground border-destructive/50"}},defaultVariants:{variant:"info"}}),m=({className:l,variant:d,title:u,children:p,onClose:g,icon:B,...G})=>{const f=B||d&&{info:e.jsx(X,{}),warning:e.jsx(K,{}),success:e.jsx(L,{}),error:e.jsx(v,{})}[d];return e.jsxs("div",{role:"alert",className:H(M({variant:d,className:l})),...G,children:[f&&e.jsx("div",{className:"flex-shrink-0",children:f}),e.jsxs("div",{className:"flex-1",children:[u&&e.jsx("h5",{className:"mb-1 font-medium leading-none tracking-tight",children:u}),p&&e.jsx("div",{className:"text-sm",children:p})]}),g&&e.jsx("button",{className:"absolute right-4 top-4 rounded-md p-1 opacity-70 hover:opacity-100",onClick:g,"aria-label":"Close alert",children:e.jsx(v,{className:"h-4 w-4"})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const ee={title:"Design System/Feedback/Alert",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","warning","success","error"]},title:{control:"text"},children:{control:"text"}},args:{title:"Alert Title",children:"This is the alert content. It provides context to the user about something important."}},r={args:{variant:"info"}},s={args:{variant:"warning"}},a={args:{variant:"success"}},t={args:{variant:"error"}},o={args:{variant:"info",icon:e.jsx(X,{className:"h-5 w-5"})}},n={args:{variant:"info",onClose:()=>alert("Alert closed!")}},c={args:{title:void 0,variant:"info",children:"This alert has no title, just content."}},i={render:l=>e.jsx(m,{...l})};var h,x,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,A,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(w=(A=s.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var I,N,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(T=(N=a.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var S,C,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  }
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var E,W,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    icon: <Info className="h-5 w-5" />
  }
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var R,_,q;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    onClose: () => alert('Alert closed!')
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,z,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: undefined,
    variant: 'info',
    children: 'This alert has no title, just content.'
  }
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,O,P;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Alert {...args} />
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const re=["InfoAlert","WarningAlert","SuccessAlert","ErrorAlert","WithCustomIcon","Closable","WithoutTitle","InteractiveExample"];export{n as Closable,t as ErrorAlert,r as InfoAlert,i as InteractiveExample,a as SuccessAlert,s as WarningAlert,o as WithCustomIcon,c as WithoutTitle,re as __namedExportsOrder,ee as default};
