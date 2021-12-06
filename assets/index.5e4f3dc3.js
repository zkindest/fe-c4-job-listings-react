var F=Object.defineProperty,S=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,d=(e,o)=>{for(var t in o||(o={}))L.call(o,t)&&v(e,t,o[t]);if(h)for(var t of h(o))x.call(o,t)&&v(e,t,o[t]);return e},u=(e,o)=>S(e,N(o));import{j as y,r as i,R as C,a as J}from"./vendor.e888553d.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};A();var b=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];const l=y.exports.jsx,s=y.exports.jsxs,I=({value:e})=>{const o=i.exports.useContext(m);return s("div",{className:"filter-item",children:[l("span",{children:e}),l("button",{onClick:()=>o({type:"filter-remove",payload:e}),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",children:l("path",{fill:"#FFF",fillRule:"evenodd",d:"M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"})})})]})},j=({filters:e})=>{const o=i.exports.useContext(m),[t,n]=i.exports.useState(""),a=r=>{r.key==="Enter"&&(o({type:"filter-add",payload:t}),n(""))};return l("div",{className:"input-filter-wrapper",children:s("div",{className:"input-filter",children:[s("div",{className:"wrapper",children:[l("div",{className:"field-filters",children:e.map(r=>l(I,{value:r},r))}),l("div",{className:"field-body",children:l("input",{type:"text",name:"filter",value:t,onChange:r=>n(r.target.value),onKeyUp:a})})]}),l("div",{className:"field-clear",children:l("button",{className:"clear",type:"button",onClick:()=>o({type:"clear"}),children:"Clear"})})]})})},R=({filters:e})=>l("header",{className:"hero",children:l("div",{className:"container",children:l(j,{filters:e})})}),p=({children:e})=>l("button",{className:"info-tag",children:e}),w=({children:e,fill:o})=>l("span",{className:`tag ${o==="dark"?"dark":""}`,children:e}),T=({item:e})=>s("article",{className:"list-card featured",children:[s("div",{className:"info",children:[l("div",{className:"logo",children:l("img",{src:e.logo,alt:"photosnap company logo"})}),s("div",{className:"details",children:[s("div",{className:"top-details",children:[l("span",{className:"name",children:e.company}),s("span",{className:"top-details-tags",children:[e.new?l(w,{children:"New!"}):null,e.featured?l(w,{fill:"dark",children:"Featured"}):null]})]}),l("a",{href:"#",className:"title",children:l("div",{children:e.position})}),s("div",{className:"bottom-details",children:[l("span",{className:"dot",children:e.postedAt}),l("span",{className:"dot",children:e.contract}),l("span",{children:e.location})]})]})]}),s("div",{className:"tags",children:[e.role?l(p,{children:e.role}):null,e.level?l(p,{children:e.level}):null,e.languages&&e.languages.length!==0?e.languages.map((o,t)=>l(p,{children:o},t)):null,e.tools&&e.tools.length!==0?e.tools.map((o,t)=>l(p,{children:o},t)):null]})]}),k=({jobs:e})=>l("div",{className:"container",children:l("section",{className:"jobs",children:e.map(o=>l(T,{item:o},o.id))})}),c={jobs:b,filters:["Frontend","CSS","JavaScript"]},g=(e,o)=>o.length===0?e:e.map(t=>{let n=0;return o.findIndex(a=>a.toLowerCase()===t.role.toLowerCase())!==-1&&n++,o.findIndex(a=>a.toLowerCase()===t.level.toLowerCase())!==-1&&n++,o.forEach(a=>{t.languages.findIndex(r=>r.toLowerCase()===a.toLowerCase())!==-1&&n++}),o.forEach(a=>{t.tools.findIndex(r=>r.toLowerCase()===a.toLowerCase())!==-1&&n++}),{job:t,score:n}}).filter(t=>t.score!==0).sort((t,n)=>n.score-t.score).map(t=>t.job),m=i.exports.createContext(null),D=(e,o)=>{switch(o.type){case"filter-add":if(e.filters.findIndex(t=>t.toLowerCase()===o.payload.toLowerCase())===-1){const t=[...e.filters,o.payload];return{jobs:g(e.jobs,t),filters:t}}return e;case"clear":return u(d({},c),{filters:[]});case"filter-remove":if(e.filters.findIndex(t=>t.toLowerCase()===o.payload.toLowerCase())!==-1){const t=e.filters.filter(n=>n!==o.payload);return t.length===0?u(d({},c),{filters:[]}):{jobs:g(e.jobs,t),filters:t}}return e;case"init":return u(d({},c),{jobs:g(c.jobs,e.filters)});default:return e}};function M(){const[e,o]=i.exports.useReducer(D,c);return i.exports.useEffect(()=>{o({type:"init"})},[]),l(m.Provider,{value:o,children:s("div",{className:"App",children:[l(R,{filters:e.filters}),l("main",{children:l(k,{jobs:e.jobs})})]})})}C.render(l(J.StrictMode,{children:l(M,{})}),document.getElementById("root"));