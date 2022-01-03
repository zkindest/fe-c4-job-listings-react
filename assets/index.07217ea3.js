var S=Object.defineProperty,N=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&w(e,o,t[o]);if(y)for(var o of y(t))L.call(t,o)&&w(e,o,t[o]);return e},u=(e,t)=>N(e,b(t));import{j as x,R as $,r as c,a as J}from"./vendor.f75304d5.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};k();var A=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];const n=x.exports.jsx,i=x.exports.jsxs,j=()=>n("header",{className:"hero"}),R="_root_cfxu4_1",I="___next_cfxu4_1",T="_hidden_cfxu4_95",D="_container_cfxu4_137";var M={root:R,__next:I,hidden:T,container:D,"info-tag":"_info-tag_cfxu4_142"};const f=({children:e})=>n("button",{className:M["info-tag"],children:e}),O="_root_4x0wo_1",E="___next_4x0wo_1",P="_hidden_4x0wo_95",U="_container_4x0wo_137",H="_tag_4x0wo_142",K="_primary_4x0wo_152",W="_dark_4x0wo_157";var h={root:O,__next:E,hidden:P,container:U,tag:H,primary:K,dark:W};const F=({children:e,fill:t})=>n("span",{className:`${h.tag} ${t==="dark"?h.dark:h.primary}`,children:e}),B="_root_1cv0s_1",V="___next_1cv0s_1",q="_hidden_1cv0s_95",z="_container_1cv0s_137",G="_info_1cv0s_171",Q="_logo_1cv0s_179",X="_details_1cv0s_198",Y="_name_1cv0s_210",Z="_title_1cv0s_218",ee="_dot_1cv0s_247",te="_tags_1cv0s_251",oe="_featured_1cv0s_271";var l={root:B,__next:V,hidden:q,container:z,"list-card":"_list-card_1cv0s_142",info:G,logo:Q,details:X,"top-details":"_top-details_1cv0s_207",name:Y,"top-details-tags":"_top-details-tags_1cv0s_215",title:Z,"bottom-details":"_bottom-details_1cv0s_238",dot:ee,tags:te,"info-tag":"_info-tag_1cv0s_267",featured:oe};const ne=$.memo(({item:e})=>i("div",{className:`${l["list-card"]} ${e.featured?l.featured:""}`,children:[i("div",{className:l.info,children:[n("div",{className:l.logo,children:n("img",{src:e.logo,alt:"photosnap company logo"})}),i("div",{className:l.details,children:[i("div",{className:l["top-details"],children:[n("span",{className:l.name,children:e.company}),i("span",{className:l["top-details-tags"],children:[e.new?n(F,{children:"New!"}):null,e.featured?n(F,{fill:"dark",children:"Featured"}):null]})]}),n("a",{href:"#",className:l.title,children:n("h1",{children:e.position})}),i("div",{className:l["bottom-details"],children:[n("span",{className:l.dot,children:e.postedAt}),n("span",{className:l.dot,children:e.contract}),n("span",{children:e.location})]})]})]}),i("div",{className:l.tags,children:[e.role?n(f,{children:e.role}):null,e.level?n(f,{children:e.level}):null,e.languages&&e.languages.length!==0?e.languages.map((t,o)=>n(f,{children:t},o)):null,e.tools&&e.tools.length!==0?e.tools.map((t,o)=>n(f,{children:t},o)):null]})]})),re="_root_yr2c4_1",ae="___next_yr2c4_1",se="_hidden_yr2c4_95",le="_container_yr2c4_137",ie="_jobs_yr2c4_142";var ce={root:re,__next:ae,hidden:se,container:le,jobs:ie};const de=({jobs:e})=>n("div",{className:"container",children:n("div",{className:ce.jobs,children:e.map(t=>n(ne,{item:t},t.id))})}),_e="_root_1cg6f_1",pe="___next_1cg6f_1",ue="_hidden_1cg6f_95",fe="_container_1cg6f_137";var ge={root:_e,__next:pe,hidden:ue,container:fe,"filter-item":"_filter-item_1cg6f_142"};const he=({value:e})=>{const t=c.exports.useContext(v);return i("div",{className:ge["filter-item"],children:[n("span",{children:e}),n("button",{"aria-label":`remove ${e} filter`,onClick:()=>t({type:"filter-remove",payload:e}),children:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",children:n("path",{fill:"#FFF",fillRule:"evenodd",d:"M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"})})})]})},me="_root_1rtlc_1",ve="___next_1rtlc_1",ye="_hidden_1rtlc_95",we="_container_1rtlc_137",xe="_input__filter__wrapper_1rtlc_142",$e="_input__filter_1rtlc_142",Fe="_wrapper_1rtlc_184",Se="_left__adornment_1rtlc_203",Ne="_field__body_1rtlc_213",be="_right__adornment_1rtlc_217";var d={root:me,__next:ve,hidden:ye,container:we,input__filter__wrapper:xe,input__filter:$e,wrapper:Fe,left__adornment:Se,field__body:Ne,right__adornment:be};const Ce=({filters:e})=>{const t=c.exports.useContext(v),[o,s]=c.exports.useState(""),r=a=>{a.key==="Enter"&&(t({type:"filter-add",payload:o}),s(""))};return n("div",{className:d.input__filter__wrapper,children:i("div",{className:d.input__filter,children:[i("div",{className:d.wrapper,children:[n("div",{className:d.left__adornment,children:e.map(a=>n(he,{value:a},a))}),n("div",{className:d.field__body,children:n("input",{type:"text",name:"filter",value:o,onChange:a=>s(a.target.value),onKeyUp:r,"aria-label":"type filter or key word and press enter"})})]}),n("div",{className:d.right__adornment,children:n("button",{className:"clear",type:"button",onClick:()=>t({type:"clear"}),children:"Clear"})})]})})},_={jobs:A,filters:["Frontend","CSS","JavaScript"]},m=(e,t)=>t.length===0?e:e.map(o=>{let s=0;return t.findIndex(r=>r.toLowerCase()===o.role.toLowerCase())!==-1&&s++,t.findIndex(r=>r.toLowerCase()===o.level.toLowerCase())!==-1&&s++,t.forEach(r=>{o.languages.findIndex(a=>a.toLowerCase()===r.toLowerCase())!==-1&&s++}),t.forEach(r=>{o.tools.findIndex(a=>a.toLowerCase()===r.toLowerCase())!==-1&&s++}),{job:o,score:s}}).filter(o=>o.score!==0).sort((o,s)=>s.score-o.score).map(o=>o.job),v=c.exports.createContext(null),Le=(e,t)=>{switch(t.type){case"filter-add":if(e.filters.findIndex(o=>o.toLowerCase()===t.payload.toLowerCase())===-1){const o=[...e.filters,t.payload];return{jobs:m(e.jobs,o),filters:o}}return e;case"clear":return u(p({},_),{filters:[]});case"filter-remove":if(e.filters.findIndex(o=>o.toLowerCase()===t.payload.toLowerCase())!==-1){const o=e.filters.filter(s=>s!==t.payload);return o.length===0?u(p({},_),{filters:[]}):{jobs:m(e.jobs,o),filters:o}}return e;case"init":return u(p({},_),{jobs:m(_.jobs,e.filters)});default:return e}};function Je(){const[e,t]=c.exports.useReducer(Le,_);return c.exports.useEffect(()=>{t({type:"init"})},[]),n(v.Provider,{value:t,children:i("div",{className:"App",children:[n(j,{}),i("main",{children:[n("div",{className:"container",children:n(Ce,{filters:e.filters})}),n(de,{jobs:e.jobs})]})]})})}J.render(n($.StrictMode,{children:n(Je,{})}),document.getElementById("root"));
