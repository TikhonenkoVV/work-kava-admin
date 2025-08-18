"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[688],{688:(e,t,i)=>{i.r(t),i.d(t,{default:()=>X});var r=i(43),l=i(284);const n=l.A.h1`
  margin-bottom: 16px;
`,o=l.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s=l.A.button`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
`,a=l.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`,d=e=>"/coffee-classic"===e?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],image:["image"]}:"/coffee-with-milk"===e?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],image:["image"]}:"/desserts"===e?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],image:["image"]}:"/burgers"===e||"/hot-dogs"===e?{title:["title_en","title_de","title_ua"],price:["price_en","price_double_en","price_de","price_double_de","price_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],image:["image"]}:"/rolls"===e?{title:["title_en","title_de","title_ua"],price:["price_en","price_xl_en","price_de","price_xl_de","price_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],image:["image"]}:void 0;var c=i(615);const p=e=>({en:36,de:8364,ua:8372}[e]),g=e=>String.fromCharCode(e),m=(e,t)=>{const i=e.split("_"),r=i[i.length-1];return"Price"===t?3===i.length?`${r.toUpperCase()} (${l=e.split("_")[1],String(l[0]).toUpperCase()+String(l).slice(1)}) (${g(p(r))})`:`${r.toUpperCase()} (${g(p(r))})`:r.toUpperCase();var l},u=l.A.h2`
  margin-bottom: 10px;
`,x=l.A.label`
  display: grid;
  grid-template-columns: 120px auto;
  text-align: start;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,h=l.A.span`
  display: flex;
  align-items: center;
  height: 32px;
`,f=l.A.input`
  width: 100%;
  height: 32px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`,_=l.A.textarea`
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  height: 100px;
  resize: none;
`;var b=i(579);const j=e=>{let{data:t,title:i,onChange:r}=e;return(0,b.jsxs)("div",{children:[(0,b.jsx)(u,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,b.jsxs)(x,{children:[(0,b.jsx)(h,{children:m(e,i)}),"ingredients_en"===t[0]?(0,b.jsx)(_,{onChange:r}):(0,b.jsx)(f,{type:"text",name:e,hidden:"Image"===i,onChange:r})]},e))]})},v=l.A.label`
  display: grid;
  grid-template-columns: 120px auto;
  text-align: start;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,w=l.A.span`
  display: flex;
  align-items: center;
  height: 32px;
`,y=(l.A.input`
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`,l.A.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
`),A=e=>{let{onChange:t}=e;const i=["Image","Image 2x","Webp","Webp 2x"];return(0,b.jsx)("div",{children:["img","img2x","webpImg","webpImg2x"].map((e,r)=>(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:i[r]}),(0,b.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,b.jsx)(y,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:"Select file"})]},e))})},k=()=>{var e,t;const i=(0,c.zy)(),l=(0,r.useRef)(null===i||void 0===i||null===(e=i.state)||void 0===e?void 0:e.from),p=d(null===l||void 0===l||null===(t=l.current)||void 0===t?void 0:t.pathname),g=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const r={};return i.map(e=>r[e]=""),r})(p),[m,u]=(0,r.useState)(d(g)),[x,h]=(0,r.useState)({img:null,img2x:null,webpImg:null,webpImg2x:null}),[f,_]=(0,r.useState)({img:null,img2x:null,webpImg:null,webpImg2x:null}),v=e=>{const{name:t,value:i}=e.target;u({...m,[t]:i})};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n,{children:"Add new product"}),(0,b.jsxs)(o,{onSubmit:e=>{e.preventDefault(),console.log(m)},children:[(0,b.jsx)(j,{data:p.title,title:"Name",onChange:v}),(0,b.jsx)(j,{data:p.price,title:"Price",onChange:v}),(null===p||void 0===p?void 0:p.ingredients)&&(0,b.jsx)(j,{data:p.ingredients,title:"Ingredients",onChange:v}),(null===p||void 0===p?void 0:p.weight)&&(0,b.jsx)(j,{data:p.weight,title:"Weight",onChange:v}),(0,b.jsx)(A,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;h({...x,[i]:t}),e.onloadend=()=>{_({...f,[i]:e.result})},e.readAsDataURL(t)}}}),(0,b.jsxs)(a,{children:[(null===f||void 0===f?void 0:f.img)&&(0,b.jsx)("img",{src:null===f||void 0===f?void 0:f.img,alt:"Image_x1"}),(null===f||void 0===f?void 0:f.img2x)&&(0,b.jsx)("img",{src:null===f||void 0===f?void 0:f.img2x,alt:"Image_x2"}),(null===f||void 0===f?void 0:f.webpImg)&&(0,b.jsx)("img",{src:null===f||void 0===f?void 0:f.webpImg,alt:"Webp_image_x1"}),(null===f||void 0===f?void 0:f.webpImg2x)&&(0,b.jsx)("img",{src:null===f||void 0===f?void 0:f.webpImg2x,alt:"Webp_image_x2"})]}),(0,b.jsx)(s,{type:"submit",children:"Submit"})]})]})};var C=i(136),I=i(114);const $=l.A.h1`
  margin-bottom: 24px;
`,S=(l.A.ul``,l.A.li`
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
`),T=l.A.div`
  /* display: flex; */
  width: 100%;
`,W=l.A.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: 16px;
`,B=l.A.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
`,z=(0,l.A)(c.N_)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
`,D=l.A.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  /* border-radius: 50%; */
  background-color: ${e=>{let{color:t}=e;return t}};
`;var E=i(208);const U=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"],R=e=>{let{collection:t,detales:i}=e;const r=(0,c.zy)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(z,{to:"/add-product",state:{from:r},children:(0,b.jsx)(E.A,{w:24,h:24,icon:"add"})}),(0,b.jsx)($,{children:i.title}),(0,b.jsx)("ul",{children:t.map((e,t)=>(0,b.jsxs)(S,{children:[(0,b.jsx)(D,{src:I.Y5+i.department+"/"+e.image+"-mobile.png",alt:e.title,color:U[t]}),(0,b.jsxs)(T,{children:[(0,b.jsx)(W,{children:e.title}),(0,b.jsxs)(B,{children:[(0,b.jsx)(z,{children:(0,b.jsx)(E.A,{w:24,h:24,icon:"edit"})}),(0,b.jsx)(z,{children:(0,b.jsx)(E.A,{w:24,h:24,icon:"archive"})}),(0,b.jsx)(z,{children:(0,b.jsx)(E.A,{w:24,h:24,icon:"delete"})})]})]})]},e._id))})]})};var F=i(342),M=i(3),L=i(813);const N=e=>e.burgers;var O=i(367);const P=e=>e.coffeeClassic;var H=i(432);const Y=e=>e.coffeeWithMilk;var q=i(902);const G=e=>e.desserts;var J=i(903);const K=e=>e.hotDogs;var Q=i(739);const V=e=>e.rolls,X=()=>{const{coffeeClassics:e}=(0,M.d4)(P),{coffeeWithMilks:t}=(0,M.d4)(Y),{desserts:i}=(0,M.d4)(G),{burgers:l}=(0,M.d4)(N),{hotDogs:n}=(0,M.d4)(K),{rolls:o}=(0,M.d4)(V),{isLoggedIn:s}=(0,F.A)(),a=(0,M.wA)(),{pathname:d}=(0,c.zy)(),[p,g]=(0,r.useState)({title:"empty",department:"empty"});return(0,r.useEffect)(()=>{s&&("/coffee-classic"===d&&(a((0,O.O)()),g({title:"Coffee classic",department:"cafe"})),"/coffee-with-milk"===d&&(a((0,H.C)()),g({title:"Coffee with milk",department:"cafe"})),"/desserts"===d&&(a((0,q.M)()),g({title:"Desserts",department:"cafe"})),"/burgers"===d&&(a((0,L.l)()),g({title:"Burgers",department:"fastfood"})),"/rolls"===d&&(a((0,Q.f)()),g({title:"Rolls",department:"fastfood"})),"/hot-dogs"===d&&(a((0,J.b)()),g({title:"Hot dogs",department:"fastfood"})))},[a,d,s]),(0,b.jsx)(C.E,{children:(0,b.jsxs)(C.m,{children:["/coffee-classic"===d&&(0,b.jsx)(R,{collection:e,detales:p}),"/coffee-with-milk"===d&&(0,b.jsx)(R,{collection:t,detales:p}),"/desserts"===d&&(0,b.jsx)(R,{collection:i,detales:p}),"/burgers"===d&&(0,b.jsx)(R,{collection:l,detales:p}),"/rolls"===d&&(0,b.jsx)(R,{collection:o,detales:p}),"/hot-dogs"===d&&(0,b.jsx)(R,{collection:n,detales:p}),"/add-product"===d&&(0,b.jsx)(k,{path:d})]})})}}}]);
//# sourceMappingURL=688.97e04471.chunk.js.map