"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[145],{5145:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ee});var n=i(5043),r=i(5903);const l=r.A.h1`
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
`;var m=i(1874),v=i(579);const f=e=>{let{data:t,title:i,onChange:n}=e;return(0,v.jsxs)("div",{children:[(0,v.jsx)(m.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,v.jsxs)(m.Gw,{children:[(0,v.jsx)(m.HL,{children:h(e,i)}),"ingredients_en"===t[0]?(0,v.jsx)(x,{name:e,onChange:n}):(0,v.jsx)(g,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var b=i(114);var j=i(3003),w=i(5051),_=i(6753);const y=e=>{let{onChange:t}=e;const{local:i}=(0,j.d4)(w.mB),n=["Jpg/Png","Webp"];return(0,v.jsxs)("div",{children:[(0,v.jsx)(m.E9,{children:_.v[i].imagesTitle}),["img","webpImg"].map((e,r)=>(0,v.jsxs)(m.Gw,{children:[(0,v.jsx)(m.HL,{children:n[r]}),(0,v.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,v.jsx)(m.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:_.v[i].selectFile})]},e))]})};var k=i(3061),C=i(7954),A=i(7950),$=i(5285);const L=document.querySelector("#modal-root"),M=e=>{let{onClose:t,children:i,forwardetRef:r,id:l}=e;(0,n.useEffect)(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o),document.body.style.overflow="visible"}));const o=e=>{"Escape"===e.code&&"function"===typeof t&&t()};return(0,A.createPortal)((0,v.jsx)($.z,{className:"visually-hidden",id:l,ref:r,onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t()},children:i}),L)},T=r.A.div`
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
`,I=e=>{let{backLink:t,onCloseModal:i}=e;const n=(0,s.Zp)(),{local:r}=(0,j.d4)(w.mB);return(0,v.jsxs)(T,{children:[(0,v.jsx)(B,{children:_.v[r].selectAnAction}),(0,v.jsx)(m.OV,{onClick:()=>{i()},children:_.v[r].addNewProduct}),(0,v.jsx)(m.OV,{onClick:()=>{i(),n(t)},children:_.v[r].ba\u0441kToProduktList})]})};var N=i(6555),E=i(6422);const z=()=>{var e,t,i,r;const{local:c}=(0,j.d4)(w.mB),p=(0,j.wA)(),u=(0,n.useRef)(null),h=(0,n.useRef)(null),g=(null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.id)||"askModal",{isModalOpen:x,openModal:A,closeModal:$}=(0,N.h)(g),L=(0,s.zy)(),T=(0,n.useRef)(null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.props),B=null===T||void 0===T||null===(i=T.current)||void 0===i?void 0:i.pathname,z=(0,E.L)(B,c),S=(O=B)===b.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:O===b.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:O===b.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:O===b.d4||O===b.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:O===b.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0;var O;const{isLoading:R}=(0,C.k)(B),{operation:P}=(0,C.k)(B,b.tq),U=null===T||void 0===T||null===(r=T.current)||void 0===r?void 0:r.index,W=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.img=null,n.webpImg=null,n})(S),[V,q]=(0,n.useState)(W),[F,G]=(0,n.useState)({img:null,webpImg:null}),D=e=>{const{name:t,value:i}=e.target,n=Number(i);let r=i;isNaN(i)||(r=n),q({...V,[t]:r})};return(0,v.jsxs)(v.Fragment,{children:[R&&(0,v.jsx)(k.a,{}),(0,v.jsx)(l,{children:z}),(0,v.jsx)(o,{children:_.v[c].addNewProduct}),(0,v.jsxs)(d,{ref:h,onSubmit:e=>{e.preventDefault();const t=(e=>{const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]){i=!1;break}return i})(V);t?(p(P({...V,index:U})),console.log(e),e.current,h.current.reset(),G({img:null,webpImg:null}),A()):alert("Not all fields are filled in")},children:[(0,v.jsx)(f,{data:S.title,title:_.v[c].nameTitle,onChange:D}),(0,v.jsx)(f,{data:S.price,title:_.v[c].priceTitle,onChange:D}),(null===S||void 0===S?void 0:S.ingredients)&&(0,v.jsx)(f,{data:S.ingredients,title:_.v[c].ingredientsTitle,onChange:D}),(null===S||void 0===S?void 0:S.weight)&&(0,v.jsx)(f,{data:S.weight,title:_.v[c].weightTitle,onChange:D}),(0,v.jsx)(y,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;q({...V,[i]:t}),e.onloadend=()=>{G({...F,[i]:e.result})},e.readAsDataURL(t)}}}),(0,v.jsxs)(a,{children:[(null===F||void 0===F?void 0:F.img)&&(0,v.jsx)("img",{src:null===F||void 0===F?void 0:F.img,alt:"Raster"}),(null===F||void 0===F?void 0:F.webpImg)&&(0,v.jsx)("img",{src:null===F||void 0===F?void 0:F.webpImg,alt:"Webp"})]}),(0,v.jsx)(m.OV,{type:"submit",children:_.v[c].submit})]}),x&&!R&&(0,v.jsx)(M,{id:"askModal",forwardetRef:u,onClose:$,children:(0,v.jsx)(I,{backLink:B,onCloseModal:$})})]})};var S=i(4208);const O=r.A.h1`
  margin-bottom: 16px;
`,R=(0,r.A)(S.A)`
  rotate: ${e=>{let{rotate:t}=e;return t}};
`,P=(0,r.A)(m.OV)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`,U=(0,r.A)(s.N_)`
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
`,W=(r.A.ul``,r.A.li`
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
`),V=r.A.div`
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
`,F=r.A.button`
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
`,K=e=>{let{className:t,onChange:i,onToggle:r}=e;const{local:l}=(0,j.d4)(w.mB),[o,d]=(0,n.useState)("active"),a=e=>{const t=e.target.id;d(t),i(t),r()};return(0,v.jsxs)(Q,{className:t,children:[(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"active"===o?"active":null}),_.v[l].onlyActiveCards,(0,v.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",onChange:a})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"archive"===o?"active":null}),_.v[l].onlyArchivedCards,(0,v.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",onChange:a})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)(J,{className:"all"===o?"active":null}),_.v[l].allCards,(0,v.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",onChange:a})]})]})};var X=i(342);const Y=e=>{let{data:t,title:i}=e;const r=(0,j.wA)(),{isLoggedIn:l}=(0,X.A)(),[o,d]=(0,n.useState)(!1),{windowWidth:a}=(()=>{const[e,t]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)(()=>{const e=()=>t(window.innerWidth);return document.addEventListener("resize",e),()=>document.removeEventListener("resize",e)},[]),{windowWidth:e}})(),{local:c}=(0,j.d4)(w.mB),{pathname:p}=(0,s.zy)(),[u,h]=(0,n.useState)(b.L4),{isLoading:g,operation:x}=(0,C.k)(p,u),[m,f]=(0,n.useState)();(0,n.useState)(()=>{l&&f(_.v[c].onlyActiveCards)});const y=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1,A=()=>{},$=()=>{d(!o)};return(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)(k.a,{}),(0,v.jsx)(O,{children:i}),(0,v.jsxs)(P,{onClick:$,type:"button",children:[(0,v.jsx)(S.A,{w:16,h:16,icon:"filter"}),(0,v.jsx)("span",{children:m}),(0,v.jsx)(R,{w:12,h:12,icon:"arrow",rotate:o?"180deg":0})]}),(0,v.jsx)(K,{className:o?null:"visually-hidden",onChange:e=>{"active"===e&&f(_.v[c].onlyActiveCards),"archive"===e&&f(_.v[c].onlyArchivedCards),"all"===e&&f(_.v[c].allCards)},onToggle:$}),(0,v.jsxs)(U,{to:b.Qy,state:{props:{pathname:p,index:y}},children:[(0,v.jsx)(S.A,{w:a>413?16:12,h:a>413?16:12,icon:"add"}),(0,v.jsx)("span",{children:_.v[c].addNewProduct})]}),t.length>0&&(0,v.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((e,t)=>(0,v.jsxs)(W,{children:[(0,v.jsx)(D,{width:a>413?120:100,src:e.imgURL,alt:e.title_en,color:H[t]}),(0,v.jsxs)(V,{children:[(0,v.jsx)(q,{children:c===b.qL?e.title_en:c===b.MG?e.title_de:e.title_ua}),(0,v.jsxs)(G,{children:[(0,v.jsx)(F,{children:(0,v.jsx)(S.A,{w:a>413?24:18,h:a>413?24:18,icon:"edit"})}),(0,v.jsx)(F,{onClick:()=>(e=>{let{id:t,archived:i}=e;h(b.L4),r(x({id:t,data:{archived:!i}}))})({id:e._id,archived:e.archived}),children:(0,v.jsx)(S.A,{w:a>413?24:18,h:a>413?24:18,icon:"archive"})}),(0,v.jsx)(F,{onClick:A,children:(0,v.jsx)(S.A,{w:a>413?24:18,h:a>413?24:18,icon:"delete"})})]})]})]},e._id))})]})},ee=()=>{const{isLoggedIn:e}=(0,X.A)(),t=(0,j.wA)(),{pathname:i}=(0,s.zy)(),{local:r}=(0,j.d4)(w.mB),l=(0,E.L)(i,r),{collection:o,operation:d}=(0,C.k)(i,b.ZO);return(0,n.useEffect)(()=>{e&&d&&t(d())},[t,e,d]),(0,v.jsx)(m.Eh,{children:(0,v.jsx)(m.mc,{children:i===b.Qy?(0,v.jsx)(z,{}):o&&(0,v.jsx)(Y,{data:o,title:l})})})}}}]);
//# sourceMappingURL=145.fd09d63d.chunk.js.map