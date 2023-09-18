import{V as b,X as w,Y as M,Z as z,_ as A,$ as x,a0 as W,a1 as $,B as p,a2 as E,j as S,u as R,i as L,z as N}from"./entry.1e6d920e.js";const Q=()=>b("modalActive",()=>!1),K=()=>b("popupTitle",()=>"");async function O(e,t){return await P(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function P(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>s(o),i.src=e})}function y(e){return t=>t?e[t]||t:e.missingValue}function q({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(r,n)=>`${r}=${n}`),t&&typeof t!="function"&&(t=y(t));const o=i||{};return Object.keys(o).forEach(r=>{typeof o[r]!="function"&&(o[r]=y(o[r]))}),(r={})=>Object.entries(r).filter(([d,u])=>typeof u<"u").map(([d,u])=>{const l=o[d];return typeof l=="function"&&(u=l(r[d])),d=typeof t=="function"?t(d):d,e(d,u)}).join(s)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function U(e){const t={options:e},s=(o,r={})=>_(t,o,r),i=(o,r={},n={})=>s(o,{...n,modifiers:x(r,n.modifiers||{})}).url;for(const o in e.presets)i[o]=(r,n,d)=>i(r,n,{...e.presets[o],...d});return i.options=e,i.getImage=s,i.getMeta=(o,r)=>B(t,o,r),i.getSizes=(o,r)=>F(t,o,r),t.$img=i,i}async function B(e,t,s){const i=_(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await O(e,i.url)}function _(e,t,s){var l,g;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=T(e,s.provider||e.options.provider),r=H(e,s.preset);if(t=w(t)?t:M(t),!i.supportsAlias)for(const c in e.options.alias)t.startsWith(c)&&(t=z(e.options.alias[c],t.substr(c.length)));if(i.validateDomains&&w(t)){const c=A(t).host;if(!e.options.domains.find(f=>f===c))return{url:t}}const n=x(s,r,o);n.modifiers={...n.modifiers};const d=n.modifiers.format;(l=n.modifiers)!=null&&l.width&&(n.modifiers.width=h(n.modifiers.width)),(g=n.modifiers)!=null&&g.height&&(n.modifiers.height=h(n.modifiers.height));const u=i.getImage(t,n,e);return u.format=u.format||d||"",u}function T(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function H(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function F(e,t,s){var l,g;const i=h((l=s.modifiers)==null?void 0:l.width),o=h((g=s.modifiers)==null?void 0:g.height),r=i&&o?o/i:0,n=[],d={};if(typeof s.sizes=="string")for(const c of s.sizes.split(/[\s,]+/).filter(f=>f)){const f=c.split(":");f.length===2&&(d[f[0].trim()]=f[1].trim())}else Object.assign(d,s.sizes);for(const c in d){const f=e.options.screens&&e.options.screens[c]||parseInt(c);let a=String(d[c]);const m=a.endsWith("vw");if(!m&&/^\d+$/.test(a)&&(a=a+"px"),!m&&!a.endsWith("px"))continue;let v=parseInt(a);if(!f||!v)continue;m&&(v=Math.round(v/100*f));const j=r?Math.round(v*r):o;n.push({width:v,size:a,screenMaxWidth:f,media:`(max-width: ${f}px)`,src:e.$img(t,{...s.modifiers,width:v,height:j},s)})}n.sort((c,f)=>c.screenMaxWidth-f.screenMaxWidth);const u=n[n.length-1];return u&&(u.media=""),{sizes:n.map(c=>`${c.media?c.media+" ":""}${c.size}`).join(", "),srcset:n.map(c=>`${c.src} ${c.width}w`).join(", "),src:u==null?void 0:u.src}}const V=y({fill:"resize",inside:"contain",outside:"contain",cover:"cover",contain:"inside",missingValue:"cover"}),k=q({keyMap:{format:"output",quality:"quality",background:"background",focus:"focus",zoom:"zoom"},valueMap:{format(e){return e==="jpg"?"jpeg":e},background(e){return e.startsWith("#")?e.replace("#",""):e},focus:{auto:"auto",faces:"faces",north:"50px0p",northEast:"100px0p",northWest:"0px0p",west:"0px50p",southWest:"100px100p",south:"50px100p",southEast:"0px100p",east:"100px50p",center:"50px50p"}},joinWith:"/",formatter:(e,t)=>`${e}=${t}`}),C=(e,{modifiers:t={},baseURL:s="/"}={})=>{const{width:i,height:o,fit:r,...n}=t;let d=i,u=o;(i||o)&&(r&&r==="outside"&&(d=Math.max(i||0,o||0),u=Math.max(i||0,o||0)),n[V(r)]=`${d||"-"}x${u||"-"}`);const l=k(n);return{url:z(s,e+(l?"?twic=v1/"+l:""))}},D=Object.freeze(Object.defineProperty({__proto__:null,getImage:C},Symbol.toStringTag,{value:"Module"})),I={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"twicpics",domains:[],alias:{}};I.providers={twicpics:{provider:D,defaults:{baseURL:"https://github.com/nDArtemka1/weblinex/tree/gh-pages/images"}}};const G=()=>{const e=W(),t=$();return t.$img||t._img||(t._img=U({...I,nuxt:{baseURL:e.app.baseURL}}))},J={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},X=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),s=p(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=p(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:i}},Y={...J,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ee=E({name:"NuxtImg",props:Y,emits:["load","error"],setup:(e,t)=>{const s=G(),i=X(e),o=S(!1),r=p(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),n=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(a.sizes=r.value.sizes,a.srcset=r.value.srcset),a}),d=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const m=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50},i.options.value)}),u=p(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),l=p(()=>d.value?d.value:u.value);if(e.preload){const a=Object.values(r.value).every(m=>m);R({link:[{rel:"preload",as:"image",...a?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:l.value}}]})}const g=S(),f=$().isHydrating;return L(()=>{if(d.value){const a=new Image;a.src=u.value,a.onload=m=>{g.value&&(g.value.src=u.value),o.value=!0,t.emit("load",m)};return}g.value&&(g.value.complete&&f&&(g.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),g.value.onload=a=>{t.emit("load",a)},g.value.onerror=a=>{t.emit("error",a)})}),()=>N("img",{ref:g,key:l.value,src:l.value,...n.value,...t.attrs})}});export{ee as _,K as a,Q as u};