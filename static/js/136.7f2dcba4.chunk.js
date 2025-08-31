"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[136],{9136:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var n=i(5043),r=i(5903);const l=r.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,o=r.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,d=r.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var a=i(9615);const c=e=>({en:36,de:8364,ua:8372}[e]),p=e=>String(e[0]).toUpperCase()+String(e).slice(1),u=e=>String.fromCharCode(e),m=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t||"Preis"===t||"\u0426\u0456\u043d\u0430"===t?3===i.length?`${n.toUpperCase()} ${p(e.split("_")[1])} (${u(c(n))})`:`${n.toUpperCase()} (${u(c(n))})`:i.length>1?n.toUpperCase():p(i[0])},g=r.A.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
`,x=r.A.textarea`
  outline: unset;
  height: 100px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  resize: none;
`;var h=i(1874),f=i(579);const v=e=>{let{data:t,title:i,onChange:n}=e;return(0,f.jsxs)("div",{children:[(0,f.jsx)(h.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(h.Gw,{children:[(0,f.jsx)(h.HL,{children:m(e,i)}),"ingredients_en"===t[0]?(0,f.jsx)(x,{name:e,onChange:n}):(0,f.jsx)(g,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var b=i(114);var _=i(3003),j=i(5051),w=i(6753);const k=e=>{let{onChange:t}=e;const{local:i}=(0,_.d4)(j.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(h.E9,{children:w.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,f.jsxs)(h.Gw,{children:[(0,f.jsx)(h.HL,{children:n[r]}),(0,f.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,f.jsx)(h.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:w.v[i].selectFile})]},e))]})};var y=i(3061),C=i(7954),A=i(7950),$=i(5285);const L=document.querySelector("#modal-root"),M=e=>{let{onClose:t,children:i,forwardetRef:r,id:l}=e;(0,n.useEffect)(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o),document.body.style.overflow="visible"}));const o=e=>{"Escape"===e.code&&"function"===typeof t&&t()};return(0,A.createPortal)((0,f.jsx)($.z,{className:"visually-hidden",id:l,ref:r,onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t()},children:i}),L)},E=r.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
`,I=r.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
`,z=e=>{let{backLink:t,onCloseModal:i}=e;const n=(0,a.Zp)(),{local:r}=(0,_.d4)(j.mB);return(0,f.jsxs)(E,{children:[(0,f.jsx)(I,{children:w.v[r].selectAnAction}),(0,f.jsx)(h.OV,{onClick:()=>{i()},children:w.v[r].addNewProduct}),(0,f.jsx)(h.OV,{onClick:()=>{i(),n(t)},children:w.v[r].ba\u0441kToProduktList})]})};var T=i(6555),B=i(6422);const N=()=>{var e,t,i,r;const{local:c}=(0,_.d4)(j.mB),p=(0,_.wA)(),u=(0,n.useRef)(null),m=(0,n.useRef)(null),g=(null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.id)||"askModal",{isModalOpen:x,openModal:A,closeModal:$}=(0,T.h)(g),L=(0,a.zy)(),E=(0,n.useRef)(null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.props),I=null===E||void 0===E||null===(i=E.current)||void 0===i?void 0:i.pathname,N=(0,B.L)(I,c),R=(O=I)===b.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:O===b.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:O===b.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:O===b.d4||O===b.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:O===b.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var O;const{isLoading:P}=(0,C.k)(I),{operation:S}=(0,C.k)(I,b.tq),U=null===E||void 0===E||null===(r=E.current)||void 0===r?void 0:r.index,W=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.img=null,n.webpImg=null,n})(R),[q,F]=(0,n.useState)(W),[V,G]=(0,n.useState)({img:null,webpImg:null}),D=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),F({...q,[t]:r})};return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsx)(y.a,{}),(0,f.jsx)(l,{children:N}),(0,f.jsx)(o,{children:w.v[c].addNewProduct}),(0,f.jsxs)(d,{ref:m,onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(q);t?(p(S({...q,index:U})),console.log(e),e.current,m.current.reset(),G({img:null,webpImg:null}),A()):alert("Not all fields are filled in")},children:[(0,f.jsx)(v,{data:R.title,title:w.v[c].nameTitle,onChange:D}),(0,f.jsx)(v,{data:R.price,title:w.v[c].priceTitle,onChange:D}),(null===R||void 0===R?void 0:R.ingredients)&&(0,f.jsx)(v,{data:R.ingredients,title:w.v[c].ingredientsTitle,onChange:D}),(null===R||void 0===R?void 0:R.weight)&&(0,f.jsx)(v,{data:R.weight,title:w.v[c].weightTitle,onChange:D}),(0,f.jsx)(k,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;F({...q,[i]:t}),e.onloadend=()=>{G({...V,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(s,{children:[(null===V||void 0===V?void 0:V.img)&&(0,f.jsx)("img",{src:null===V||void 0===V?void 0:V.img,alt:"Raster"}),(null===V||void 0===V?void 0:V.webpImg)&&(0,f.jsx)("img",{src:null===V||void 0===V?void 0:V.webpImg,alt:"Webp"})]}),(0,f.jsx)(h.OV,{type:"submit",children:w.v[c].submit})]}),x&&!P&&(0,f.jsx)(M,{id:"askModal",forwardetRef:u,onClose:$,children:(0,f.jsx)(z,{backLink:I,onCloseModal:$})})]})},R=r.A.h1`
  margin-bottom: 16px;
`,O=(r.A.ul``,r.A.li`
  display: flex;
  column-gap: 16px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    column-gap: 12px;
    padding-left: 12px;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
  }
`),P=r.A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,S=r.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 16px;
  }
`,U=(0,r.A)(a.N_)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  margin-bottom: 16px;
  padding-left: 10px;
  column-gap: 10px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};
`,W=(0,r.A)(a.N_)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};

  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    width: 30px;
    height: 30px;
  }
`,q=r.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    column-gap: 12px;
  }
`,F=r.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{color:t}=e;return t}};
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    width: 100px;
  }
`;var V=i(4208);const G=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],D=e=>{let{data:t,title:i}=e;const{windowWidth:r}=(()=>{const[e,t]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)(()=>{const e=()=>t(window.innerWidth);return document.addEventListener("resize",e),()=>document.removeEventListener("resize",e)},[]),{windowWidth:e}})(),{local:l}=(0,_.d4)(j.mB),{pathname:o}=(0,a.zy)(),{isLoading:d}=(0,C.k)(o),s=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;return(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(y.a,{}),(0,f.jsx)(R,{children:i}),(0,f.jsxs)(U,{to:b.Qy,state:{props:{pathname:o,index:s}},children:[(0,f.jsx)(V.A,{w:r>413?20:14,h:r>413?20:14,icon:"add"}),(0,f.jsx)("span",{children:w.v[l].addNewProduct})]}),t.length>0&&(0,f.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((e,t)=>(0,f.jsxs)(O,{children:[(0,f.jsx)(F,{width:r>413?120:100,src:e.imgURL,alt:e.title_en,color:G[t]}),(0,f.jsxs)(P,{children:[(0,f.jsx)(S,{children:l===b.qL?e.title_en:l===b.MG?e.title_de:e.title_ua}),(0,f.jsxs)(q,{children:[(0,f.jsx)(W,{children:(0,f.jsx)(V.A,{w:r>413?24:18,h:r>413?24:18,icon:"edit"})}),(0,f.jsx)(W,{children:(0,f.jsx)(V.A,{w:r>413?24:18,h:r>413?24:18,icon:"archive"})}),(0,f.jsx)(W,{children:(0,f.jsx)(V.A,{w:r>413?24:18,h:r>413?24:18,icon:"delete"})})]})]})]},e._id))})]})};var H=i(342);const Q=()=>{const{isLoggedIn:e}=(0,H.A)(),t=(0,_.wA)(),{pathname:i}=(0,a.zy)(),{local:r}=(0,_.d4)(j.mB),l=(0,B.L)(i,r),{collection:o,operation:d}=(0,C.k)(i,b.ZO);return(0,n.useEffect)(()=>{e&&d&&t(d())},[t,e,d]),(0,f.jsx)(h.Eh,{children:(0,f.jsx)(h.mc,{children:i===b.Qy?(0,f.jsx)(N,{}):o&&(0,f.jsx)(D,{data:o,title:l})})})}}}]);
//# sourceMappingURL=136.7f2dcba4.chunk.js.map