import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as u,a as T}from"./utils-BpMXP6K7.js";import"./index-DRjF_FHU.js";const O=T("font-display tracking-tighter text-foreground font-semibold",{variants:{level:{h1:"text-5xl md:text-6xl leading-tight",h2:"text-4xl md:text-5xl leading-tight",h3:"text-3xl md:text-4xl leading-tight",h4:"text-2xl md:text-3xl leading-tight",h5:"text-xl md:text-2xl leading-snug",h6:"text-lg md:text-xl leading-snug"}},defaultVariants:{level:"h1"}}),R=T("text-foreground font-sans",{variants:{size:{xs:"text-xs leading-relaxed",sm:"text-sm leading-relaxed",base:"text-base leading-relaxed",lg:"text-lg leading-relaxed",xl:"text-xl leading-relaxed"},weight:{light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"}},defaultVariants:{size:"base",weight:"normal"}}),F=T("font-sans font-medium",{variants:{size:{xs:"text-xs",sm:"text-sm",base:"text-base"},type:{default:"text-foreground",caption:"text-muted-foreground",helper:"text-muted-foreground"}},defaultVariants:{size:"sm",type:"default"}}),t=({className:s,level:r,as:i,...l})=>{const p=i||r||"h1";return e.jsx(p,{className:u(O({level:r,className:s})),...l})},a=({className:s,size:r,weight:i,...l})=>e.jsx("p",{className:u(R({size:r,weight:i,className:s})),...l}),n=({className:s,size:r,type:i,as:l="span",...p})=>{const k=l;return e.jsx(k,{className:u(F({size:r,type:i,className:s})),...p})},A=s=>e.jsx(n,{type:"caption",...s}),M=s=>e.jsx(n,{type:"helper",...s});t.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:""}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"Text",composes:["VariantProps"]};n.__docgenInfo={description:"",methods:[],displayName:"Label",props:{as:{required:!1,tsType:{name:"union",raw:"'label' | 'span'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"}]},description:"",defaultValue:{value:"'span'",computed:!1}}},composes:["VariantProps"]};A.__docgenInfo={description:"",methods:[],displayName:"Caption"};M.__docgenInfo={description:"",methods:[],displayName:"HelperText"};const Q={title:"Design System/Typography",component:t,tags:["autodocs"],argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","base","lg","xl"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]}}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{level:"h1",children:"Heading 1"}),e.jsx(t,{level:"h2",children:"Heading 2"}),e.jsx(t,{level:"h3",children:"Heading 3"}),e.jsx(t,{level:"h4",children:"Heading 4"}),e.jsx(t,{level:"h5",children:"Heading 5"}),e.jsx(t,{level:"h6",children:"Heading 6"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"xl",children:"Extra Large Text (xl)"}),e.jsx(a,{size:"lg",children:"Large Text (lg)"}),e.jsx(a,{size:"base",children:"Base Text (base)"}),e.jsx(a,{size:"sm",children:"Small Text (sm)"}),e.jsx(a,{size:"xs",children:"Extra Small Text (xs)"})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{weight:"light",children:"Light Weight Text"}),e.jsx(a,{weight:"normal",children:"Normal Weight Text"}),e.jsx(a,{weight:"medium",children:"Medium Weight Text"}),e.jsx(a,{weight:"semibold",children:"Semibold Weight Text"}),e.jsx(a,{weight:"bold",children:"Bold Weight Text"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{size:"base",children:"Default Label (base)"}),e.jsx(n,{size:"sm",children:"Small Label (sm)"}),e.jsx(n,{size:"xs",children:"Extra Small Label (xs)"})]})},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(A,{children:"This is a caption"}),e.jsx(M,{children:"This is helper text"})]})},g={args:{level:"h1",children:"Interactive Heading"}},h={render:s=>e.jsx(a,{...s}),args:{size:"base",weight:"normal",children:"Interactive text example"}};var v,b,H;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Heading level="h1">Heading 1</Heading>\r
      <Heading level="h2">Heading 2</Heading>\r
      <Heading level="h3">Heading 3</Heading>\r
      <Heading level="h4">Heading 4</Heading>\r
      <Heading level="h5">Heading 5</Heading>\r
      <Heading level="h6">Heading 6</Heading>\r
    </div>
}`,...(H=(b=d.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var f,j,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Text size="xl">Extra Large Text (xl)</Text>\r
      <Text size="lg">Large Text (lg)</Text>\r
      <Text size="base">Base Text (base)</Text>\r
      <Text size="sm">Small Text (sm)</Text>\r
      <Text size="xs">Extra Small Text (xs)</Text>\r
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var z,L,N;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Text weight="light">Light Weight Text</Text>\r
      <Text weight="normal">Normal Weight Text</Text>\r
      <Text weight="medium">Medium Weight Text</Text>\r
      <Text weight="semibold">Semibold Weight Text</Text>\r
      <Text weight="bold">Bold Weight Text</Text>\r
    </div>
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var S,w,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Label size="base">Default Label (base)</Label>\r
      <Label size="sm">Small Label (sm)</Label>\r
      <Label size="xs">Extra Small Label (xs)</Label>\r
    </div>
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,W,_;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Caption>This is a caption</Caption>\r
      <HelperText>This is helper text</HelperText>\r
    </div>
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,C,B;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 'h1',
    children: 'Interactive Heading'
  }
}`,...(B=(C=g.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,P,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Text {...args} />,
  args: {
    size: 'base',
    weight: 'normal',
    children: 'Interactive text example'
  }
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const U=["Headings","TextVariants","TextWeights","Labels","CaptionsAndHelpers","InteractiveHeading","InteractiveText"];export{m as CaptionsAndHelpers,d as Headings,g as InteractiveHeading,h as InteractiveText,c as Labels,o as TextVariants,x as TextWeights,U as __namedExportsOrder,Q as default};
