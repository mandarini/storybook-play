import{j as u,w as m,u as c,e as s}from"./index-80cf269c.js";import{r as l}from"./_baseIsEqual-3894ead5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-d475d2ea.js";import"./index-890dd1b5.js";import"./uniq-2a5ad67e.js";import"./index-a6c8ef6f.js";function p(){const[e,t]=l.useState(0),o=()=>{t(e+1)};return u.jsxs("button",{role:"button",onClick:o,children:["You've clicked me ",e," times"]})}const g={component:p,title:"Button"},n={play:async({canvasElement:e})=>{const t=m(e),o=t.getByRole("button");await c.click(o),s(t.getByRole("button").innerText).toBe("You've clicked me 1 times"),await c.click(o),s(t.getByRole("button").innerText).toBe("You've clicked me 2 times")}};var a,i,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(canvas.getByRole('button').innerText).toBe("You've clicked me 1 times");
    await userEvent.click(button);
    expect(canvas.getByRole('button').innerText).toBe("You've clicked me 2 times");
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const w=["ButtonClicked"];export{n as ButtonClicked,w as __namedExportsOrder,g as default};
//# sourceMappingURL=button.stories-0dbc8e17.js.map
