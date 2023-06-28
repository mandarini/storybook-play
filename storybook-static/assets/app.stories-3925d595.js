import{j as a,w as d,e as l}from"./index-80cf269c.js";import"./_baseIsEqual-3894ead5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-d475d2ea.js";import"./index-890dd1b5.js";import"./uniq-2a5ad67e.js";import"./index-a6c8ef6f.js";function y(){return a.jsx("div",{children:a.jsx("h1",{children:"Welcome my-app!"})})}const T={component:y,title:"App"},e={args:{}},r={play:async({canvasElement:m})=>{const i=d(m);l(i.getByText(/Welcome my-app/gi)).toBeTruthy()}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome my-app/gi)).toBeTruthy();
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Primary","Heading"];export{r as Heading,e as Primary,f as __namedExportsOrder,T as default};
//# sourceMappingURL=app.stories-3925d595.js.map
