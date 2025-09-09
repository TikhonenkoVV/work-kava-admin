"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[566],{2665:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ke});var n=i(5043),r=i(5903),l=i(1874);const d=(0,r.A)(l.ah)`
  margin-bottom: 16px;
`,a=r.A.h1`
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
`;var f=i(579);const b=e=>{let{data:t,title:i,onChange:n}=e;return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(l.Gw,{children:[(0,f.jsx)(l.HL,{children:g(e,i)}),"ingredients_en"===t[0]?(0,f.jsx)(v,{name:e,onChange:n}):(0,f.jsx)(m,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var j=i(114);const w=e=>e===j.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:e===j.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:e===j.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:e===j.d4||e===j.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:e===j.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0,k=e=>{if(!Object.keys(e).length)return!1;const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]||""===e[t[n]]||0===e[t[n]]){i=!1;break}return i};var _=i(3003),A=i(5051),y=i(6753);const C=e=>{let{onChange:t}=e;const{local:i}=(0,_.d4)(A.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:y.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,f.jsxs)(l.Gw,{children:[(0,f.jsx)(l.HL,{children:n[r]}),(0,f.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,f.jsx)(l.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:y.v[i].selectFile})]},e))]})};var $=i(3061),M=i(7954),L=i(7950),T=i(5285);const E=document.querySelector("#modal-root"),R=e=>{let{onClose:t,children:i,forwardetRef:r,id:l}=e;(0,n.useEffect)(()=>(window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}));const d=e=>{"Escape"===e.code&&"function"===typeof t&&t("askModal")};return(0,L.createPortal)((0,f.jsx)(T.z,{className:"visually-hidden",onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t("askModal")},children:i}),E)};var I=i(6555),N=i(6422);const z=r.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
  border-radius: 10px;
`,B=r.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`,S=(0,r.A)(l.OV)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,O=e=>{let{action:t,onCloseModal:i,data:n,names:r}=e;const{local:l}=(0,_.d4)(A.mB);return(0,f.jsxs)(z,{children:[(0,f.jsx)(B,{children:y.v[l].selectAnAction}),(0,f.jsx)(S,{onClick:()=>{i()},children:r.cancel}),(0,f.jsx)(S,{onClick:()=>{i(),t&&t(n)},children:r.action})]})},V=()=>{var e,t,i;const{local:r}=(0,_.d4)(A.mB),u=(0,p.Zp)(),h=(0,_.wA)(),x=(0,n.useRef)(null),g=(0,n.useRef)(null),{isModalOpen:m,openModal:v,closeModal:L}=(0,I.h)("askAdd"),T=(0,p.zy)(),E=(0,n.useRef)(null===T||void 0===T||null===(e=T.state)||void 0===e?void 0:e.props),z=null===E||void 0===E||null===(t=E.current)||void 0===t?void 0:t.pathname,B=(0,N.L)(z,r),S=w(z),{isLoading:V,operation:F}=(0,M.k)(z,j.tq),P=null===E||void 0===E||null===(i=E.current)||void 0===i?void 0:i.index,U=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.archived=!1,n.img=null,n.webpImg=null,n})(S),[D,W]=(0,n.useState)(U),[q,G]=(0,n.useState)({img:null,webpImg:null}),H=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),W({...D,[t]:r})};return(0,f.jsxs)(f.Fragment,{children:[V&&(0,f.jsx)($.a,{}),(0,f.jsx)(d,{to:z,children:y.v[r].ba\u0441kToProduktList}),(0,f.jsx)(a,{children:B}),(0,f.jsx)(o,{children:y.v[r].addNewProduct}),(0,f.jsxs)(s,{ref:g,onSubmit:e=>{e.preventDefault();k(D)?(h(F({...D,index:P})),e.current,g.current.reset(),G({img:null,webpImg:null}),v("askAdd")):alert("Not all fields are filled in")},children:[(0,f.jsx)(b,{data:S.title,title:y.v[r].nameTitle,onChange:H}),(0,f.jsx)(b,{data:S.price,title:y.v[r].priceTitle,onChange:H}),(null===S||void 0===S?void 0:S.ingredients)&&(0,f.jsx)(b,{data:S.ingredients,title:y.v[r].ingredientsTitle,onChange:H}),(null===S||void 0===S?void 0:S.weight)&&(0,f.jsx)(b,{data:S.weight,title:y.v[r].weightTitle,onChange:H}),(0,f.jsx)(C,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;W({...D,[i]:t}),e.onloadend=()=>{G({...q,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(c,{children:[(null===q||void 0===q?void 0:q.img)&&(0,f.jsx)("img",{src:null===q||void 0===q?void 0:q.img,alt:"Raster"}),(null===q||void 0===q?void 0:q.webpImg)&&(0,f.jsx)("img",{src:null===q||void 0===q?void 0:q.webpImg,alt:"Webp"})]}),(0,f.jsx)(l.OV,{type:"submit",children:y.v[r].submit})]}),m.askAdd&&!V&&(0,f.jsx)(R,{id:"askAdd",forwardetRef:x,onClose:()=>L("askAdd"),children:(0,f.jsx)(O,{action:e=>{u(e)},onCloseModal:()=>L("askAdd"),data:z,names:{cancel:y.v[r].addNewProduct,action:y.v[r].ba\u0441kToProduktList}})})]})},F=(0,r.A)(l.ah)`
  margin-bottom: 16px;
`,P=r.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,U=r.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,D=r.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,W=r.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`,q=(0,r.A)(l.HL)`
  flex-shrink: 0;
  margin-inline-end: 10px;
`,G=r.A.label`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,H=(r.A.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,r.A.div`
  display: flex;
  gap: 10px;
`,r.A.input`
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
`),Z=(0,r.A)(l.rA)`
  flex-shrink: 0;
  margin-inline-start: 10px;
  width: 32px;
  height: 32px;
`,J=r.A.textarea`
  outline: unset;
  width: 100%;
  height: 100px;
  padding-inline-start: 10px;
  padding-top: 10px;
  padding-inline-end: 10px;
  padding-bottom: 10px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  resize: none;
`;var Q=i(4208);const X=e=>{let{data:t,title:i,onChange:n,product:r}=e;return(0,f.jsx)(f.Fragment,{children:r&&(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(G,{children:[(0,f.jsx)(q,{children:g(e,i)}),t.includes("ingredients_en")?(0,f.jsx)(J,{name:e,onChange:n,defaultValue:r[e]}):(0,f.jsx)(H,{type:"text",name:e,onChange:n,defaultValue:r[e]}),(0,f.jsx)(Z,{children:(0,f.jsx)(Q.A,{w:18,h:18,icon:"undo"})})]},e))]})})},K=e=>{let{onChange:t}=e;const{local:i}=(0,_.d4)(A.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.E9,{children:y.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,f.jsxs)(l.Gw,{children:[(0,f.jsx)(l.HL,{children:n[r]}),(0,f.jsx)("input",{id:e,type:"file",accept:"img"===e?"image/png, image/jpeg":"image/webp",hidden:!0,name:e,onChange:t}),(0,f.jsx)(l.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:y.v[i].selectFile})]},e))]})},Y=()=>{var e,t;const i=(0,_.wA)(),r=(0,p.Zp)(),[d,a]=(0,n.useState)(),{id:o}=(0,p.g)(),{local:s}=(0,_.d4)(A.mB),c=(0,n.useRef)(null),u=(0,n.useRef)(null),{isModalOpen:h,openModal:x,closeModal:g}=(0,I.h)("askAdd"),m=(0,p.zy)(),v=(0,n.useRef)(null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.props),b=null===v||void 0===v||null===(t=v.current)||void 0===t?void 0:t.pathname,C=w(b),{isLoading:L,collection:T,operation:E}=(0,M.k)(b,j.L4),[N,z]=(0,n.useState)(),[B,S]=(0,n.useState)({img:null,webpImg:null});(0,n.useEffect)(()=>{if(o){const e=T.findIndex(e=>e._id===o);a(T[e]),S({img:T[e].imgURL,webpImg:T[e].webpImgURL})}},[o,T]);const V=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),r===d[t]?z(e=>{const i={...e};return delete i[t],i}):z({...N,[t]:r})};return(0,f.jsxs)(f.Fragment,{children:[L&&(0,f.jsx)($.a,{}),(0,f.jsx)(F,{to:b,children:y.v[s].ba\u0441kToProduktList}),(0,f.jsx)(P,{children:s===j.qL?null===d||void 0===d?void 0:d.title_en:s===j.MG?null===d||void 0===d?void 0:d.title_de:null===d||void 0===d?void 0:d.title_ua}),(0,f.jsx)(U,{children:y.v[s].editProduct}),(0,f.jsxs)(D,{ref:u,onSubmit:e=>{if(e.preventDefault(),!N)return alert("Not all fields are filled in");k(N)?x("askEdit"):alert("Not all fields are filled in")},children:[(0,f.jsx)(X,{data:C.title,title:y.v[s].nameTitle,onChange:V,product:d,type:"text"}),(0,f.jsx)(X,{data:C.price,title:y.v[s].priceTitle,onChange:V,product:d,type:"number"}),(null===C||void 0===C?void 0:C.ingredients)&&(0,f.jsx)(X,{data:C.ingredients,title:y.v[s].ingredientsTitle,onChange:V,product:d,type:"text"}),(null===C||void 0===C?void 0:C.weight)&&(0,f.jsx)(X,{data:C.weight,title:y.v[s].weightTitle,onChange:V,product:d,type:"number"}),(0,f.jsx)(K,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;z({...N,[i]:t}),e.onloadend=()=>{S({...B,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(W,{children:[(null===B||void 0===B?void 0:B.img)&&(0,f.jsx)("img",{src:null===B||void 0===B?void 0:B.img,alt:"Raster"}),(null===B||void 0===B?void 0:B.webpImg)&&(0,f.jsx)("img",{src:null===B||void 0===B?void 0:B.webpImg,alt:"Webp"})]}),(0,f.jsx)(l.OV,{type:"submit",children:y.v[s].submit})]}),h.askEdit&&(0,f.jsx)(R,{id:"askEdit",forwardetRef:c,onClose:()=>g("askEdit"),children:(0,f.jsx)(O,{action:e=>{i(E({id:o,data:N})),r(e)},data:b,onCloseModal:()=>g("askEdit"),names:{cancel:y.v[s].cancel,action:y.v[s].submit}})})]})},ee=i.p+"static/media/archived_240.20b73776bed5d018335d.png",te=r.A.h1`
  margin-bottom: 16px;
`,ie=(0,r.A)(Q.A)`
  rotate: ${e=>{let{rotate:t}=e;return t}};
`,ne=(0,r.A)(l.OV)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`,re=(0,r.A)(p.N_)`
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
`,le=(r.A.ul``,r.A.li`
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
`),de=r.A.div`
  position: relative;
  width: 120px;
  aspect-ratio: 3/2;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 10px;
  background-color: ${e=>{let{color:t}=e;return t}};
  &.archived {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #40404080;
      background-image: url(${ee});
      background-size: cover;
      z-index: 1;
    }
  }
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    width: 100px;
  }
`,ae=r.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
`,oe=r.A.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,se=r.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 16px;
  }
`,ce=(0,r.A)(p.N_)`
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
`,pe=r.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    column-gap: 12px;
  }
`,ue=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],he=r.A.div`
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
`,xe=r.A.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`,ge=r.A.span`
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
`,me=e=>e.filter.status;var ve=i(3479);const fe=e=>{let{className:t,onChange:i,onToggle:n,forwardedRef:r}=e;const{local:l}=(0,_.d4)(A.mB),d=(0,_.wA)(),a=(0,_.d4)(me),o=e=>{const t=e.target.id;d((0,ve.V)(t)),i(t),n(t)};return(0,f.jsxs)(he,{className:t,ref:r,children:[(0,f.jsxs)(xe,{children:[(0,f.jsx)(ge,{className:"active"===a?"active":null}),y.v[l].onlyActiveCards,(0,f.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",checked:"active"===a,onChange:o})]}),(0,f.jsxs)(xe,{children:[(0,f.jsx)(ge,{className:"archive"===a?"active":null}),y.v[l].onlyArchivedCards,(0,f.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",checked:"archive"===a,onChange:o})]}),(0,f.jsxs)(xe,{children:[(0,f.jsx)(ge,{className:"all"===a?"active":null}),y.v[l].allCards,(0,f.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",checked:"all"===a,onChange:o})]})]})};var be=i(9142);const je=e=>{let{data:t,title:i,checkedRadio:r}=e;const d=(0,_.wA)(),a=(0,n.useRef)(null),o=(0,n.useRef)(null),[s,c]=(0,n.useState)(),[u,h]=(0,n.useState)(),{isModalOpen:x,openModal:g,closeModal:m,toggleModal:v}=(0,I.h)();(0,be.w)([a,o],m,"selectFilter");const b=(()=>{const[e,t]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)(()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e})(),{local:w}=(0,_.d4)(A.mB),{pathname:k}=(0,p.zy)(),{isLoading:C,operation:L}=(0,M.k)(k,s),[T,E]=(0,n.useState)(),[N,z]=(0,n.useState)(null),B=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;(0,n.useEffect)(()=>{z(y.v[w].onlyActiveCards),d((0,ve.V)("active")),E(t.filter(e=>!1===e.archived))},[d,t,w]);const S=()=>{v("selectFilter")};return(0,f.jsxs)(f.Fragment,{children:[C&&(0,f.jsx)($.a,{}),(0,f.jsx)(te,{children:i}),(0,f.jsxs)(ne,{onClick:S,type:"button",ref:o,children:[(0,f.jsx)(Q.A,{w:16,h:16,icon:"filter"}),(0,f.jsx)("span",{children:N}),(0,f.jsx)(ie,{w:12,h:12,icon:"arrow",rotate:null!==x&&void 0!==x&&x.selectFilter?"180deg":0})]}),(0,f.jsx)(fe,{className:null!==x&&void 0!==x&&x.selectFilter?null:"visually-hidden",onChange:e=>{"active"===e&&(z(y.v[w].onlyActiveCards),E(t.filter(e=>!1===e.archived))),"archive"===e&&(z(y.v[w].onlyArchivedCards),E(t.filter(e=>!0===e.archived))),"all"===e&&(z(y.v[w].allCards),E(t))},onToggle:S,local:w,checkedRadio:r,forwardedRef:a}),(0,f.jsxs)(re,{to:j.Qy,state:{props:{pathname:k,index:B}},children:[(0,f.jsx)(Q.A,{w:b>413?16:12,h:b>413?16:12,icon:"add"}),(0,f.jsx)("span",{children:y.v[w].addNewProduct})]}),(null===T||void 0===T?void 0:T.length)>0&&(0,f.jsx)("ul",{children:null===T||void 0===T?void 0:T.map((e,t)=>(0,f.jsxs)(le,{children:[(0,f.jsx)(de,{color:ue[t],className:e.archived?"archived":null,children:(0,f.jsx)(ae,{width:b>413?120:100,src:e.imgURL,alt:e.title_en})}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{children:w===j.qL?e.title_en:w===j.MG?e.title_de:e.title_ua}),(0,f.jsxs)(pe,{children:[(0,f.jsx)(ce,{to:`${j.nX}/${e._id}`,state:{props:{pathname:k,index:B}},children:(0,f.jsx)(Q.A,{w:b>413?24:18,h:b>413?24:18,icon:"edit"})}),(0,f.jsx)(l.rA,{onClick:()=>(e=>{c(j.L4),h(e),g("askArchive")})({id:e._id,archived:e.archived}),children:(0,f.jsx)(Q.A,{w:b>413?24:18,h:b>413?24:18,icon:e.archived?"unarchive":"archive"})}),(0,f.jsx)(l.rA,{onClick:()=>(e=>{c(j.WM),h(e),g("askDelete")})({id:e._id}),children:(0,f.jsx)(Q.A,{w:b>413?24:18,h:b>413?24:18,icon:"delete"})})]})]})]},e._id))}),(null===x||void 0===x?void 0:x.askArchive)&&(0,f.jsx)(R,{onClose:()=>m("askArchive"),children:(0,f.jsx)(O,{action:e=>{let{id:t,archived:i}=e;d((0,ve.V)("active")),d(L({id:t,data:{archived:!i}}))},onCloseModal:()=>m("askArchive"),data:u,names:{cancel:y.v[w].cancel,action:u.archived?y.v[w].restore:y.v[w].archive}})}),(null===x||void 0===x?void 0:x.askDelete)&&(0,f.jsx)(R,{onClose:()=>m("askDelete"),children:(0,f.jsx)(O,{action:e=>{let{id:t}=e;d((0,ve.V)("active")),d(L(t))},onCloseModal:()=>m("askDelete"),data:u,names:{cancel:y.v[w].cancel,action:y.v[w].delete}})})]})};var we=i(342);const ke=()=>{const{isLoggedIn:e}=(0,we.A)(),t=(0,_.wA)(),{pathname:i}=(0,p.zy)(),{local:r}=(0,_.d4)(A.mB),d=(0,N.L)(i,r),{collection:a,operation:o}=(0,M.k)(i,j.ZO);return(0,n.useEffect)(()=>{e&&o&&(t((0,ve.V)("active")),t(o()))},[t,e,o]),(0,f.jsx)(l.Eh,{children:(0,f.jsx)(l.mc,{children:i===j.Qy?(0,f.jsx)(V,{}):"edit"===i.split("/")[1]?(0,f.jsx)(Y,{}):a&&(0,f.jsx)(je,{data:a,title:d})})})}}}]);
//# sourceMappingURL=566.0333b29b.chunk.js.map