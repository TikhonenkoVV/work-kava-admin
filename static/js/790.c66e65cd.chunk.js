"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[790],{4790:(e,t,i)=>{i.r(t),i.d(t,{default:()=>le});var n=i(5043),r=i(5903),l=i(1874);const o=(0,r.A)(l.ah)`
  margin-bottom: 16px;
`,a=r.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,d=r.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,s=r.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,c=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var p=i(9615);const u=e=>({en:36,de:8364,ua:8372}[e]),h=e=>String(e[0]).toUpperCase()+String(e).slice(1),x=e=>String.fromCharCode(e),g=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t||"Preis"===t||"\u0426\u0456\u043d\u0430"===t?3===i.length?`${n.toUpperCase()} ${h(e.split("_")[1])} (${x(u(n))})`:`${n.toUpperCase()} (${x(u(n))})`:i.length>1?n.toUpperCase():h(i[0])},m=r.A.input`
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
`,v=r.A.textarea`
  outline: unset;
  height: 100px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  resize: none;
`;var f=i(579);const b=e=>{let{data:t,title:i,onChange:n}=e;return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(l.Gw,{children:[(0,f.jsx)(l.HL,{children:g(e,i)}),"ingredients_en"===t[0]?(0,f.jsx)(v,{name:e,onChange:n}):(0,f.jsx)(m,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var j=i(114);var w=i(3003),k=i(5051),_=i(6753);const y=e=>{let{onChange:t}=e;const{local:i}=(0,w.d4)(k.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:_.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,f.jsxs)(l.Gw,{children:[(0,f.jsx)(l.HL,{children:n[r]}),(0,f.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,f.jsx)(l.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:_.v[i].selectFile})]},e))]})};var C=i(3061),A=i(7954),M=i(7950),$=i(5285);const L=document.querySelector("#modal-root"),T=e=>{let{onClose:t,children:i,forwardetRef:r,id:l}=e;(0,n.useEffect)(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}));const o=e=>{"Escape"===e.code&&"function"===typeof t&&t("askModal")};return(0,M.createPortal)((0,f.jsx)($.z,{className:"visually-hidden",onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t("askModal")},children:i}),L)};var B=i(6555),E=i(6422);const N=r.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
  border-radius: 10px;
`,R=r.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`,I=(0,r.A)(l.OV)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,z=e=>{let{action:t,backLink:i,onCloseModal:n,data:r,names:l}=e;const o=(0,p.Zp)(),{local:a}=(0,w.d4)(k.mB);return(0,f.jsxs)(N,{children:[(0,f.jsx)(R,{children:_.v[a].selectAnAction}),(0,f.jsx)(I,{onClick:()=>{n("askModal")},children:l.cancel}),(0,f.jsx)(I,{onClick:()=>{n("askModal"),i&&o(i),t&&t({id:r.id,archived:r.archived})},children:l.action})]})},S=()=>{var e,t,i,r;const{local:u}=(0,w.d4)(k.mB),h=(0,w.wA)(),x=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(null===x||void 0===x||null===(e=x.current)||void 0===e?void 0:e.id)||"askModal",{isModalOpen:v,openModal:M,closeModal:$}=(0,B.h)(m),L=(0,p.zy)(),N=(0,n.useRef)(null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.props),R=null===N||void 0===N||null===(i=N.current)||void 0===i?void 0:i.pathname,I=(0,E.L)(R,u),S=(O=R)===j.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:O===j.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:O===j.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:O===j.d4||O===j.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:O===j.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var O;const{isLoading:P}=(0,A.k)(R),{operation:F}=(0,A.k)(R,j.tq),V=null===N||void 0===N||null===(r=N.current)||void 0===r?void 0:r.index,U=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.archived=!1,n.img=null,n.webpImg=null,n})(S),[q,W]=(0,n.useState)(U),[G,D]=(0,n.useState)({img:null,webpImg:null}),H=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),W({...q,[t]:r})};return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsx)(C.a,{}),(0,f.jsx)(o,{to:R,children:_.v[u].ba\u0441kToProduktList}),(0,f.jsx)(a,{children:I}),(0,f.jsx)(d,{children:_.v[u].addNewProduct}),(0,f.jsxs)(s,{ref:g,onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(q);t?(h(F({...q,index:V})),e.current,g.current.reset(),D({img:null,webpImg:null}),M("askModal")):alert("Not all fields are filled in")},children:[(0,f.jsx)(b,{data:S.title,title:_.v[u].nameTitle,onChange:H}),(0,f.jsx)(b,{data:S.price,title:_.v[u].priceTitle,onChange:H}),(null===S||void 0===S?void 0:S.ingredients)&&(0,f.jsx)(b,{data:S.ingredients,title:_.v[u].ingredientsTitle,onChange:H}),(null===S||void 0===S?void 0:S.weight)&&(0,f.jsx)(b,{data:S.weight,title:_.v[u].weightTitle,onChange:H}),(0,f.jsx)(y,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;W({...q,[i]:t}),e.onloadend=()=>{D({...G,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(c,{children:[(null===G||void 0===G?void 0:G.img)&&(0,f.jsx)("img",{src:null===G||void 0===G?void 0:G.img,alt:"Raster"}),(null===G||void 0===G?void 0:G.webpImg)&&(0,f.jsx)("img",{src:null===G||void 0===G?void 0:G.webpImg,alt:"Webp"})]}),(0,f.jsx)(l.OV,{type:"submit",children:_.v[u].submit})]}),v.askModal&&!P&&(0,f.jsx)(T,{id:"askModal",forwardetRef:x,onClose:$,children:(0,f.jsx)(z,{backLink:R,onCloseModal:$,names:{cancel:_.v[u].addNewProduct,action:_.v[u].ba\u0441kToProduktList}})})]})};var O=i(4208);const P=r.A.h1`
  margin-bottom: 16px;
`,F=(0,r.A)(O.A)`
  rotate: ${e=>{let{rotate:t}=e;return t}};
`,V=(0,r.A)(l.OV)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`,U=(0,r.A)(p.N_)`
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
`,q=(r.A.ul``,r.A.li`
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
`),W=r.A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,G=r.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 16px;
  }
`,D=r.A.button`
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
`,H=r.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    column-gap: 12px;
  }
`,Q=r.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{color:t}=e;return t}};
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    width: 100px;
  }
`,Z=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],J=r.A.div`
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
`,K=r.A.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`,X=r.A.span`
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
`,Y=e=>e.filter.status;var ee=i(3479);const te=e=>{let{className:t,onChange:i,onToggle:n,forwardedRef:r}=e;const{local:l}=(0,w.d4)(k.mB),o=(0,w.wA)(),a=(0,w.d4)(Y),d=e=>{const t=e.target.id;o((0,ee.V)(t)),i(t),n(t)};return(0,f.jsxs)(J,{className:t,ref:r,children:[(0,f.jsxs)(K,{children:[(0,f.jsx)(X,{className:"active"===a?"active":null}),_.v[l].onlyActiveCards,(0,f.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",checked:"active"===a,onChange:d})]}),(0,f.jsxs)(K,{children:[(0,f.jsx)(X,{className:"archive"===a?"active":null}),_.v[l].onlyArchivedCards,(0,f.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",checked:"archive"===a,onChange:d})]}),(0,f.jsxs)(K,{children:[(0,f.jsx)(X,{className:"all"===a?"active":null}),_.v[l].allCards,(0,f.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",checked:"all"===a,onChange:d})]})]})};var ie=i(9142);const ne=e=>{let{data:t,title:i,checkedRadio:r}=e;const l=(0,w.wA)(),[o,a]=(0,n.useState)(),[d,s]=(0,n.useState)(),c=(0,n.useRef)(null),u=(0,n.useRef)(null),{isModalOpen:h,openModal:x,closeModal:g,toggleModal:m}=(0,B.h)(o);(0,ie.w)([c,u],g,o);const v=(()=>{const[e,t]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)(()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e})(),{local:b}=(0,w.d4)(k.mB),{pathname:y}=(0,p.zy)(),{isLoading:M,operation:$}=(0,A.k)(y,j.L4),[L,E]=(0,n.useState)(),[N,R]=(0,n.useState)(null),I=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;(0,n.useEffect)(()=>{R(_.v[b].onlyActiveCards),(0,ee.V)("active"),E(t.filter(e=>!1===e.archived))},[t,b]);const S=()=>{},J=()=>{a("selectFilter"),m("selectFilter")};return(0,f.jsxs)(f.Fragment,{children:[M&&(0,f.jsx)(C.a,{}),(0,f.jsx)(P,{children:i}),(0,f.jsxs)(V,{onClick:J,type:"button",ref:u,children:[(0,f.jsx)(O.A,{w:16,h:16,icon:"filter"}),(0,f.jsx)("span",{children:N||_.v[b].onlyActiveCards}),(0,f.jsx)(F,{w:12,h:12,icon:"arrow",rotate:null!==h&&void 0!==h&&h.selectFilter?"180deg":0})]}),(0,f.jsx)(te,{className:null!==h&&void 0!==h&&h.selectFilter?null:"visually-hidden",onChange:e=>{"active"===e&&(R(_.v[b].onlyActiveCards),E(t.filter(e=>!1===e.archived))),"archive"===e&&(R(_.v[b].onlyArchivedCards),E(t.filter(e=>!0===e.archived))),"all"===e&&(R(_.v[b].allCards),E(t))},onToggle:J,local:b,checkedRadio:r,forwardedRef:c}),(0,f.jsxs)(U,{to:j.Qy,state:{props:{pathname:y,index:I}},children:[(0,f.jsx)(O.A,{w:v>413?16:12,h:v>413?16:12,icon:"add"}),(0,f.jsx)("span",{children:_.v[b].addNewProduct})]}),(null===L||void 0===L?void 0:L.length)>0&&(0,f.jsx)("ul",{children:null===L||void 0===L?void 0:L.map((e,t)=>(0,f.jsxs)(q,{children:[(0,f.jsx)(Q,{width:v>413?120:100,src:e.imgURL,alt:e.title_en,color:Z[t]}),(0,f.jsxs)(W,{children:[(0,f.jsx)(G,{children:b===j.qL?e.title_en:b===j.MG?e.title_de:e.title_ua}),(0,f.jsxs)(H,{children:[(0,f.jsx)(D,{children:(0,f.jsx)(O.A,{w:v>413?24:18,h:v>413?24:18,icon:"edit"})}),(0,f.jsx)(D,{onClick:()=>(e=>{s(e),a("askModal"),x("askModal")})({id:e._id,archived:e.archived}),children:(0,f.jsx)(O.A,{w:v>413?24:18,h:v>413?24:18,icon:"archive"})}),(0,f.jsx)(D,{onClick:S,children:(0,f.jsx)(O.A,{w:v>413?24:18,h:v>413?24:18,icon:"delete"})})]})]})]},e._id))}),(null===h||void 0===h?void 0:h.askModal)&&(0,f.jsx)(T,{onClose:g,children:(0,f.jsx)(z,{action:e=>{let{id:t,archived:i}=e;l($({id:t,data:{archived:!i}}))},onCloseModal:g,data:d,names:{cancel:_.v[b].cancel,action:_.v[b].archive}})})]})};var re=i(342);const le=()=>{const{isLoggedIn:e}=(0,re.A)(),t=(0,w.wA)(),{pathname:i}=(0,p.zy)(),{local:r}=(0,w.d4)(k.mB),o=(0,E.L)(i,r),{collection:a,operation:d}=(0,A.k)(i,j.ZO);return(0,n.useEffect)(()=>{e&&d&&(t((0,ee.V)("active")),t(d()))},[t,e,d]),(0,f.jsx)(l.Eh,{children:(0,f.jsx)(l.mc,{children:i===j.Qy?(0,f.jsx)(S,{}):a&&(0,f.jsx)(ne,{data:a,title:o})})})}}}]);
//# sourceMappingURL=790.c66e65cd.chunk.js.map