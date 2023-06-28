import{j as a,w as l,e as x}from"./index-80cf269c.js";import"./_baseIsEqual-3894ead5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-d475d2ea.js";import"./index-890dd1b5.js";import"./uniq-2a5ad67e.js";import"./index-a6c8ef6f.js";function n(e){return a.jsx("div",{children:a.jsx("p",{children:e.content})})}try{n.displayName="SampleText",n.__docgenInfo={description:"",displayName:"SampleText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}const f={component:n,title:"SampleText"},t={args:{content:"Katerina"}},r={args:{content:"Some other text"},play:async({canvasElement:e})=>{const d=l(e);x(d.getByText(/Some other text/gi)).toBeTruthy()}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    content: 'Katerina'
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Some other text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Some other text/gi)).toBeTruthy();
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const w=["Primary","NewText"];export{r as NewText,t as Primary,w as __namedExportsOrder,f as default};
//# sourceMappingURL=sample-text.stories-a12293fe.js.map
