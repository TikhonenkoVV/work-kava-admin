"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[935],{2935:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ne});var n=i(5043),r=i(5903);const l=r.A.h1`
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
`,a=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var s=i(9615);const c=e=>({en:36,de:8364,ua:8372}[e]),p=e=>String(e[0]).toUpperCase()+String(e).slice(1),u=e=>String.fromCharCode(e),h=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t||"Preis"===t||"\u0426\u0456\u043d\u0430"===t?3===i.length?`${n.toUpperCase()} ${p(e.split("_")[1])} (${u(c(n))})`:`${n.toUpperCase()} (${u(c(n))})`:i.length>1?n.toUpperCase():p(i[0])},g=r.A.input`
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
`;var m=i(1874),v=i(579);const f=e=>{let{data:t,title:i,onChange:n}=e;return(0,v.jsxs)("div",{children:[(0,v.jsx)(m.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,v.jsxs)(m.Gw,{children:[(0,v.jsx)(m.HL,{children:h(e,i)}),"ingredients_en"===t[0]?(0,v.jsx)(x,{name:e,onChange:n}):(0,v.jsx)(g,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var b=i(114);var j=i(3003),w=i(5051),_=i(6753);const k=e=>{let{onChange:t}=e;const{local:i}=(0,j.d4)(w.mB),n=["Jpg/Png","Webp"];return(0,v.jsxs)("div",{children:[(0,v.jsx)(m.E9,{children:_.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,v.jsxs)(m.Gw,{children:[(0,v.jsx)(m.HL,{children:n[r]}),(0,v.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,v.jsx)(m.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:_.v[i].selectFile})]},e))]})};var y=i(3061),C=i(7954),A=i(7950),$=i(5285);const M=document.querySelector("#modal-root"),L=e=>{let{onClose:t,children:i,forwardetRef:r,id:l}=e;(0,n.useEffect)(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o),document.body.style.overflow="visible"}));const o=e=>{"Escape"===e.code&&"function"===typeof t&&t()};return(0,A.createPortal)((0,v.jsx)($.z,{className:"visually-hidden",id:l,ref:r,onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t()},children:i}),M)},T=r.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
`,B=r.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
`,E=e=>{let{backLink:t,onCloseModal:i}=e;const n=(0,s.Zp)(),{local:r}=(0,j.d4)(w.mB);return(0,v.jsxs)(T,{children:[(0,v.jsx)(B,{children:_.v[r].selectAnAction}),(0,v.jsx)(m.OV,{onClick:()=>{i()},children:_.v[r].addNewProduct}),(0,v.jsx)(m.OV,{onClick:()=>{i(),n(t)},children:_.v[r].ba\u0441kToProduktList})]})};var N=i(6555),R=i(6422);const I=()=>{var e,t,i,r;const{local:c}=(0,j.d4)(w.mB),p=(0,j.wA)(),u=(0,n.useRef)(null),h=(0,n.useRef)(null),g=(null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.id)||"askModal",{isModalOpen:x,openModal:A,closeModal:$}=(0,N.h)(g),M=(0,s.zy)(),T=(0,n.useRef)(null===M||void 0===M||null===(t=M.state)||void 0===t?void 0:t.props),B=null===T||void 0===T||null===(i=T.current)||void 0===i?void 0:i.pathname,I=(0,R.L)(B,c),z=(O=B)===b.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:O===b.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:O===b.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:O===b.d4||O===b.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:O===b.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var O;const{isLoading:S}=(0,C.k)(B),{operation:P}=(0,C.k)(B,b.tq),V=null===T||void 0===T||null===(r=T.current)||void 0===r?void 0:r.index,F=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.img=null,n.webpImg=null,n})(z),[U,q]=(0,n.useState)(F),[W,G]=(0,n.useState)({img:null,webpImg:null}),D=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),q({...U,[t]:r})};return(0,v.jsxs)(v.Fragment,{children:[S&&(0,v.jsx)(y.a,{}),(0,v.jsx)(l,{children:I}),(0,v.jsx)(o,{children:_.v[c].addNewProduct}),(0,v.jsxs)(d,{ref:h,onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(U);t?(p(P({...U,index:V})),console.log(e),e.current,h.current.reset(),G({img:null,webpImg:null}),A()):alert("Not all fields are filled in")},children:[(0,v.jsx)(f,{data:z.title,title:_.v[c].nameTitle,onChange:D}),(0,v.jsx)(f,{data:z.price,title:_.v[c].priceTitle,onChange:D}),(null===z||void 0===z?void 0:z.ingredients)&&(0,v.jsx)(f,{data:z.ingredients,title:_.v[c].ingredientsTitle,onChange:D}),(null===z||void 0===z?void 0:z.weight)&&(0,v.jsx)(f,{data:z.weight,title:_.v[c].weightTitle,onChange:D}),(0,v.jsx)(k,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;q({...U,[i]:t}),e.onloadend=()=>{G({...W,[i]:e.result})},e.readAsDataURL(t)}}}),(0,v.jsxs)(a,{children:[(null===W||void 0===W?void 0:W.img)&&(0,v.jsx)("img",{src:null===W||void 0===W?void 0:W.img,alt:"Raster"}),(null===W||void 0===W?void 0:W.webpImg)&&(0,v.jsx)("img",{src:null===W||void 0===W?void 0:W.webpImg,alt:"Webp"})]}),(0,v.jsx)(m.OV,{type:"submit",children:_.v[c].submit})]}),x&&!S&&(0,v.jsx)(L,{id:"askModal",forwardetRef:u,onClose:$,children:(0,v.jsx)(E,{backLink:B,onCloseModal:$})})]})};var z=i(4208);const O=r.A.h1`
  margin-bottom: 16px;
`,S=(0,r.A)(z.A)`
  rotate: ${e=>{let{rotate:t}=e;return t}};
`,P=(0,r.A)(m.OV)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`,V=(0,r.A)(s.N_)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 10px;
  column-gap: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};
`,F=(r.A.ul``,r.A.li`
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
`),U=r.A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,q=r.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 16px;
  }
`,W=r.A.button`
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
`,G=r.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    column-gap: 12px;
  }
`,D=r.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{color:t}=e;return t}};
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    width: 100px;
  }
`,H=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],Q=r.A.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -1px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  &.visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`,Z=r.A.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`,J=r.A.span`
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border-radius: 50%;
  &.active {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};
      border-radius: 50%;
    }
  }
`,K=e=>e.filter.status;var X=i(3479);const Y=e=>{let{className:t,onChange:i,onToggle:n,forwardedRef:r}=e;const{local:l}=(0,j.d4)(w.mB),o=(0,j.wA)(),d=(0,j.d4)(K),a=e=>{const t=e.target.id;o((0,X.V)(t)),i(t),n(t)};return(0,v.jsxs)(Q,{className:t,ref:r,children:[(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"active"===d?"active":null}),_.v[l].onlyActiveCards,(0,v.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",checked:"active"===d,onChange:a})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"archive"===d?"active":null}),_.v[l].onlyArchivedCards,(0,v.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",checked:"archive"===d,onChange:a})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"all"===d?"active":null}),_.v[l].allCards,(0,v.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",checked:"all"===d,onChange:a})]})]})};var ee=i(9142);const te=e=>{let{data:t,title:i,checkedRadio:r}=e;const l=(0,j.wA)(),o=(0,n.useRef)(null),d=(0,n.useRef)(null),{isModalOpen:a,closeModal:c,toggleModal:p}=(0,N.h)("selectFilter");(0,ee.w)([o,d],c,"selectFilter");const u=(()=>{const[e,t]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)(()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e})(),{local:h}=(0,j.d4)(w.mB),{pathname:g}=(0,s.zy)(),{isLoading:x,operation:m}=(0,C.k)(g,b.L4),[f,k]=(0,n.useState)(),[A,$]=(0,n.useState)(null),M=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;(0,n.useEffect)(()=>{$(_.v[h].onlyActiveCards),(0,X.V)("active"),k(t.filter(e=>!1===e.archived))},[t,h]);const L=()=>{};return(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(y.a,{}),(0,v.jsx)(O,{children:i}),(0,v.jsxs)(P,{onClick:p,type:"button",ref:d,children:[(0,v.jsx)(z.A,{w:16,h:16,icon:"filter"}),(0,v.jsx)("span",{children:A||_.v[h].onlyActiveCards}),(0,v.jsx)(S,{w:12,h:12,icon:"arrow",rotate:a?"180deg":0})]}),(0,v.jsx)(Y,{className:a?null:"visually-hidden",onChange:e=>{"active"===e&&($(_.v[h].onlyActiveCards),k(t.filter(e=>!1===e.archived))),"archive"===e&&($(_.v[h].onlyArchivedCards),k(t.filter(e=>!0===e.archived))),"all"===e&&($(_.v[h].allCards),k(t))},onToggle:p,local:h,checkedRadio:r,forwardedRef:o}),(0,v.jsxs)(V,{to:b.Qy,state:{props:{pathname:g,index:M}},children:[(0,v.jsx)(z.A,{w:u>413?16:12,h:u>413?16:12,icon:"add"}),(0,v.jsx)("span",{children:_.v[h].addNewProduct})]}),(null===f||void 0===f?void 0:f.length)>0&&(0,v.jsx)("ul",{children:null===f||void 0===f?void 0:f.map((e,t)=>(0,v.jsxs)(F,{children:[(0,v.jsx)(D,{width:u>413?120:100,src:e.imgURL,alt:e.title_en,color:H[t]}),(0,v.jsxs)(U,{children:[(0,v.jsx)(q,{children:h===b.qL?e.title_en:h===b.MG?e.title_de:e.title_ua}),(0,v.jsxs)(G,{children:[(0,v.jsx)(W,{children:(0,v.jsx)(z.A,{w:u>413?24:18,h:u>413?24:18,icon:"edit"})}),(0,v.jsx)(W,{onClick:()=>(e=>{let{id:t,archived:i}=e;l(m({id:t,data:{archived:!i}}))})({id:e._id,archived:e.archived}),children:(0,v.jsx)(z.A,{w:u>413?24:18,h:u>413?24:18,icon:"archive"})}),(0,v.jsx)(W,{onClick:L,children:(0,v.jsx)(z.A,{w:u>413?24:18,h:u>413?24:18,icon:"delete"})})]})]})]},e._id))})]})};var ie=i(342);const ne=()=>{const{isLoggedIn:e}=(0,ie.A)(),t=(0,j.wA)(),{pathname:i}=(0,s.zy)(),{local:r}=(0,j.d4)(w.mB),l=(0,R.L)(i,r),{collection:o,operation:d}=(0,C.k)(i,b.ZO);return(0,n.useEffect)(()=>{e&&d&&(t((0,X.V)("active")),t(d()))},[t,e,d]),(0,v.jsx)(m.Eh,{children:(0,v.jsx)(m.mc,{children:i===b.Qy?(0,v.jsx)(I,{}):o&&(0,v.jsx)(te,{data:o,title:l})})})}}}]);
//# sourceMappingURL=935.25b77683.chunk.js.map