"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[873],{4873:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var n=i(5043),r=i(5903);const l=r.A.h1`
  margin-bottom: 16px;
`,d=r.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,a=r.A.button`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
`,o=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var s=i(9615);const c=e=>({en:36,de:8364,ua:8372}[e]),p=e=>String.fromCharCode(e),g=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t?3===i.length?`${n.toUpperCase()} (${r=e.split("_")[1],String(r[0]).toUpperCase()+String(r).slice(1)}) (${p(c(n))})`:`${n.toUpperCase()} (${p(c(n))})`:n.toUpperCase();var r},u=r.A.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`,m=r.A.textarea`
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  height: 100px;
  resize: none;
`;var x=i(1874),h=i(579);const _=e=>{let{data:t,title:i,onChange:n}=e;return(0,h.jsxs)("div",{children:[(0,h.jsx)(x.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,h.jsxs)(x.Gw,{children:[(0,h.jsx)(x.HL,{children:g(e,i)}),"ingredients_en"===t[0]?(0,h.jsx)(m,{onChange:n}):(0,h.jsx)(u,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var v=i(114);const f=r.A.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`;var j=i(3003),b=i(5051),w=i(6753);const y=e=>{let{onChange:t}=e;const{local:i}=(0,j.d4)(b.mB),n=["Jpg/Png","Webp"];return(0,h.jsxs)("div",{children:[(0,h.jsx)(x.E9,{children:w.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,h.jsxs)(x.Gw,{children:[(0,h.jsx)(x.HL,{children:n[r]}),(0,h.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,h.jsx)(f,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:w.v[i].selectFile})]},e))]})};var k=i(3367),A=i(3061),C=i(7954);const $=()=>{var e,t,i,r;const{local:c}=(0,j.d4)(b.mB),p=(0,j.wA)(),g=(0,s.zy)(),u=(0,n.useRef)(null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.props),m=(x=null===u||void 0===u||null===(t=u.current)||void 0===t?void 0:t.pathname)===v.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:x===v.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:x===v.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:x===v.d4||x===v.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:x===v.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var x;const{isLoading:f}=(0,C.k)(null===u||void 0===u||null===(i=u.current)||void 0===i?void 0:i.pathname),$=null===u||void 0===u||null===(r=u.current)||void 0===r?void 0:r.index,I=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.img=null,n.webpImg=null,n})(m),[T,B]=(0,n.useState)(I),[L,E]=(0,n.useState)({img:null,webpImg:null}),N=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),B({...T,[t]:r})};return(0,h.jsxs)(h.Fragment,{children:[f&&(0,h.jsx)(A.a,{}),(0,h.jsx)(l,{children:w.v[c].addNewProduct}),(0,h.jsxs)(d,{onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(T);t?p((0,k.o3)({...T,index:$})):alert("Not all fields are filled in")},children:[(0,h.jsx)(_,{data:m.title,title:w.v[c].nameTitle,onChange:N}),(0,h.jsx)(_,{data:m.price,title:w.v[c].priceTitle,onChange:N}),(null===m||void 0===m?void 0:m.ingredients)&&(0,h.jsx)(_,{data:m.ingredients,title:w.v[c].ingredientsTitle,onChange:N}),(null===m||void 0===m?void 0:m.weight)&&(0,h.jsx)(_,{data:m.weight,title:w.v[c].weightTitle,onChange:N}),(0,h.jsx)(y,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;B({...T,[i]:t}),e.onloadend=()=>{E({...L,[i]:e.result})},e.readAsDataURL(t)}}}),(0,h.jsxs)(o,{children:[(null===L||void 0===L?void 0:L.img)&&(0,h.jsx)("img",{src:null===L||void 0===L?void 0:L.img,alt:"Raster"}),(null===L||void 0===L?void 0:L.webpImg)&&(0,h.jsx)("img",{src:null===L||void 0===L?void 0:L.webpImg,alt:"Webp"})]}),(0,h.jsx)(a,{type:"submit",children:w.v[c].submit})]})]})},I=r.A.h1`
  margin-bottom: 24px;
`,T=(r.A.ul``,r.A.li`
  display: flex;
  column-gap: 16px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`),B=r.A.div`
  /* display: flex; */
  width: 100%;
`,L=r.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: 16px;
`,E=r.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
`,N=(0,r.A)(s.N_)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
`,S=r.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  /* border-radius: 50%; */
  background-color: ${e=>{let{color:t}=e;return t}};
`;var U=i(4208);const z=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],R=e=>{let{data:t,title:i}=e;const{local:n}=(0,j.d4)(b.mB),{pathname:r}=(0,s.zy)(),l=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N,{to:v.Qy,state:{props:{pathname:r,index:l}},children:(0,h.jsx)(U.A,{w:24,h:24,icon:"add"})}),(0,h.jsx)(I,{children:i}),(0,h.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((e,t)=>(0,h.jsxs)(T,{children:[(0,h.jsx)(S,{src:e.imgURL,alt:e.title_en,color:z[t]}),(0,h.jsxs)(B,{children:[(0,h.jsx)(L,{children:n===v.qL?e.title_en:n===v.MG?e.title_de:e.title_ua}),(0,h.jsxs)(E,{children:[(0,h.jsx)(N,{children:(0,h.jsx)(U.A,{w:24,h:24,icon:"edit"})}),(0,h.jsx)(N,{children:(0,h.jsx)(U.A,{w:24,h:24,icon:"archive"})}),(0,h.jsx)(N,{children:(0,h.jsx)(U.A,{w:24,h:24,icon:"delete"})})]})]})]},e._id))})]})};var F=i(342),G=i(6422);const M=()=>{const{isLoggedIn:e}=(0,F.A)(),t=(0,j.wA)(),{pathname:i}=(0,s.zy)(),{local:r}=(0,j.d4)(b.mB),l=(0,G.L)(i,r),{collection:d,operation:a}=(0,C.k)(i,v.ZO);return(0,n.useEffect)(()=>{e&&a&&t(a())},[t,e,a]),(0,h.jsx)(x.Eh,{children:(0,h.jsx)(x.mc,{children:i===v.Qy?(0,h.jsx)($,{}):(0,h.jsx)(R,{data:d,title:l})})})}}}]);
//# sourceMappingURL=873.41a532bf.chunk.js.map