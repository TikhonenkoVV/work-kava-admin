"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[873],{4873:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var n=i(5043),r=i(5903);const l=r.A.h1`
  margin-bottom: 16px;
`,a=r.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,d=r.A.button`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
`,o=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var s=i(9615);const c=e=>({en:36,de:8364,ua:8372}[e]),p=e=>String(e[0]).toUpperCase()+String(e).slice(1),g=e=>String.fromCharCode(e),u=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t||"Preis"===t||"\u0426\u0456\u043d\u0430"===t?3===i.length?`${n.toUpperCase()} ${p(e.split("_")[1])} (${g(c(n))})`:`${n.toUpperCase()} (${g(c(n))})`:i.length>1?n.toUpperCase():p(i[0])},h=r.A.input`
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
`;var x=i(1874),_=i(579);const f=e=>{let{data:t,title:i,onChange:n}=e;return(0,_.jsxs)("div",{children:[(0,_.jsx)(x.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,_.jsxs)(x.Gw,{children:[(0,_.jsx)(x.HL,{children:u(e,i)}),"ingredients_en"===t[0]?(0,_.jsx)(m,{name:e,onChange:n}):(0,_.jsx)(h,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var v=i(114);const j=r.A.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`;var b=i(3003),w=i(5051),y=i(6753);const k=e=>{let{onChange:t}=e;const{local:i}=(0,b.d4)(w.mB),n=["Jpg/Png","Webp"];return(0,_.jsxs)("div",{children:[(0,_.jsx)(x.E9,{children:y.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,_.jsxs)(x.Gw,{children:[(0,_.jsx)(x.HL,{children:n[r]}),(0,_.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,_.jsx)(j,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:y.v[i].selectFile})]},e))]})};var A=i(3061),C=i(7954);const $=()=>{var e,t,i;const{local:r}=(0,b.d4)(w.mB),c=(0,b.wA)(),p=(0,s.zy)(),g=(0,n.useRef)(null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.props),u=null===g||void 0===g||null===(t=g.current)||void 0===t?void 0:t.pathname,h=(m=u)===v.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:m===v.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:m===v.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:m===v.d4||m===v.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:m===v.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var m;const{isLoading:x}=(0,C.k)(u),{operation:j}=(0,C.k)(u,v.tq),$=null===g||void 0===g||null===(i=g.current)||void 0===i?void 0:i.index,I=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.img=null,n.webpImg=null,n})(h),[T,B]=(0,n.useState)(I),[L,E]=(0,n.useState)({img:null,webpImg:null}),N=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),B({...T,[t]:r})};return(0,_.jsxs)(_.Fragment,{children:[x&&(0,_.jsx)(A.a,{}),(0,_.jsx)(l,{children:y.v[r].addNewProduct}),(0,_.jsxs)(a,{onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(T);t?(c(j({...T,index:$})),e.reset()):alert("Not all fields are filled in")},children:[(0,_.jsx)(f,{data:h.title,title:y.v[r].nameTitle,onChange:N}),(0,_.jsx)(f,{data:h.price,title:y.v[r].priceTitle,onChange:N}),(null===h||void 0===h?void 0:h.ingredients)&&(0,_.jsx)(f,{data:h.ingredients,title:y.v[r].ingredientsTitle,onChange:N}),(null===h||void 0===h?void 0:h.weight)&&(0,_.jsx)(f,{data:h.weight,title:y.v[r].weightTitle,onChange:N}),(0,_.jsx)(k,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;B({...T,[i]:t}),e.onloadend=()=>{E({...L,[i]:e.result})},e.readAsDataURL(t)}}}),(0,_.jsxs)(o,{children:[(null===L||void 0===L?void 0:L.img)&&(0,_.jsx)("img",{src:null===L||void 0===L?void 0:L.img,alt:"Raster"}),(null===L||void 0===L?void 0:L.webpImg)&&(0,_.jsx)("img",{src:null===L||void 0===L?void 0:L.webpImg,alt:"Webp"})]}),(0,_.jsx)(d,{type:"submit",children:y.v[r].submit})]})]})},I=r.A.h1`
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
`;var U=i(4208);const z=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],R=e=>{let{data:t,title:i}=e;const{local:n}=(0,b.d4)(w.mB),{pathname:r}=(0,s.zy)(),l=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(N,{to:v.Qy,state:{props:{pathname:r,index:l}},children:(0,_.jsx)(U.A,{w:24,h:24,icon:"add"})}),(0,_.jsx)(I,{children:i}),t.length>0&&(0,_.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((e,t)=>(0,_.jsxs)(T,{children:[(0,_.jsx)(S,{width:120,src:e.imgURL,alt:e.title_en,color:z[t]}),(0,_.jsxs)(B,{children:[(0,_.jsx)(L,{children:n===v.qL?e.title_en:n===v.MG?e.title_de:e.title_ua}),(0,_.jsxs)(E,{children:[(0,_.jsx)(N,{children:(0,_.jsx)(U.A,{w:24,h:24,icon:"edit"})}),(0,_.jsx)(N,{children:(0,_.jsx)(U.A,{w:24,h:24,icon:"archive"})}),(0,_.jsx)(N,{children:(0,_.jsx)(U.A,{w:24,h:24,icon:"delete"})})]})]})]},e._id))})]})};var F=i(342),P=i(6422);const q=()=>{const{isLoggedIn:e}=(0,F.A)(),t=(0,b.wA)(),{pathname:i}=(0,s.zy)(),{local:r}=(0,b.d4)(w.mB),l=(0,P.L)(i,r),{collection:a,operation:d}=(0,C.k)(i,v.ZO);return(0,n.useEffect)(()=>{e&&d&&t(d())},[t,e,d]),(0,_.jsx)(x.Eh,{children:(0,_.jsx)(x.mc,{children:i===v.Qy?(0,_.jsx)($,{}):a&&(0,_.jsx)(R,{data:a,title:l})})})}}}]);
//# sourceMappingURL=873.7ec6876c.chunk.js.map