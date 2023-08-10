import{d,i as _,a as u,u as h,b as p,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as b,o as l,k as y,l as N,m as k,p as w,q as P,_ as S}from"./index-f6b3a5f0.js";import{N as V}from"./NoteDisplay-bbd0396c.js";const j={class:"m-4"},z={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(u),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=f(()=>b.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(l(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",z,[t("h1",C,o(a(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(a(y)),1),N(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/Users/wallezen/Codehub/github/futurelogxyz/slides/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
