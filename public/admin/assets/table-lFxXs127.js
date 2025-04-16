import{r as a,m as n,B as p}from"./index-DxqzyGii.js";var H=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(r,t,e)=>t in r?H(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,L=(r,t)=>{for(var e in t)d.call(t,e)&&m(r,e,t[e]);if(i)for(var e of i(t))b.call(t,e)&&m(r,e,t[e]);return r},S=(r,t)=>{var e={};for(var l in r)d.call(r,l)&&t.indexOf(l)<0&&(e[l]=r[l]);if(r!=null&&i)for(var l of i(r))t.indexOf(l)<0&&b.call(r,l)&&(e[l]=r[l]);return e};const D=a.forwardRef((r,t)=>{var e=r,{color:l="currentColor"}=e,o=S(e,["color"]);return a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},o),a.createElement("path",{stroke:l,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m8.611 10.833 2.222 2.223 2.223-2.223M10.833 13.056v-8M1.944 8.167h5.778M1.944 5.056h5.778M1.944 1.944h8.89"}))});D.displayName="DescendingSorting";var V=Object.defineProperty,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,c=(r,t,e)=>t in r?V(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,W=(r,t)=>{for(var e in t)u.call(t,e)&&c(r,e,t[e]);if(f)for(var e of f(t))v.call(t,e)&&c(r,e,t[e]);return r},I=(r,t)=>{var e={};for(var l in r)u.call(r,l)&&t.indexOf(l)<0&&(e[l]=r[l]);if(r!=null&&f)for(var l of f(r))t.indexOf(l)<0&&v.call(r,l)&&(e[l]=r[l]);return e};const g=a.forwardRef((r,t)=>{var e=r,{color:l="currentColor"}=e,o=I(e,["color"]);return a.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},o),a.createElement("path",{stroke:l,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.5 7.5h10"}))});g.displayName="Minus";const _=a.forwardRef(({className:r,...t},e)=>a.createElement("table",{ref:e,className:n("text-ui-fg-subtle txt-compact-small w-full",r),...t}));_.displayName="Table";const h=a.forwardRef(({className:r,...t},e)=>a.createElement("tr",{ref:e,className:n("bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base transition-fg border-b","[&_td:last-child]:pr-6 [&_th:last-child]:pr-6","[&_td:first-child]:pl-6 [&_th:first-child]:pl-6",r),...t}));h.displayName="Table.Row";const w=a.forwardRef(({className:r,...t},e)=>a.createElement("td",{ref:e,className:n("h-12 py-0 pl-0 pr-6",r),...t}));w.displayName="Table.Cell";const y=a.forwardRef(({className:r,...t},e)=>a.createElement("thead",{ref:e,className:n("border-ui-border-base txt-compact-small-plus [&_tr]:bg-ui-bg-subtle [&_tr]:hover:bg-ui-bg-subtle border-y",r),...t}));y.displayName="Table.Header";const x=a.forwardRef(({className:r,...t},e)=>a.createElement("th",{ref:e,className:n("txt-compact-small-plus h-12 py-0 pl-0 pr-6 text-left",r),...t}));x.displayName="Table.HeaderCell";const E=a.forwardRef(({className:r,...t},e)=>a.createElement("tbody",{ref:e,className:n("border-ui-border-base border-b",r),...t}));E.displayName="Table.Body";const N=a.forwardRef(({className:r,count:t,pageSize:e,pageCount:l,pageIndex:o,canPreviousPage:O,canNextPage:P,nextPage:R,previousPage:$,translations:s={of:"of",results:"results",pages:"pages",prev:"Prev",next:"Next"},...j},M)=>{const{from:T,to:C}=a.useMemo(()=>{const k=t===0?t:o*e+1,B=Math.min(t,(o+1)*e);return{from:k,to:B}},[t,o,e]);return a.createElement("div",{ref:M,className:n("text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-3 py-4",r),...j},a.createElement("div",{className:"inline-flex items-center gap-x-1 px-3 py-[5px]"},a.createElement("p",null,T),a.createElement(g,{className:"text-ui-fg-muted"}),a.createElement("p",null,`${C} ${s.of} ${t} ${s.results}`)),a.createElement("div",{className:"flex items-center gap-x-2"},a.createElement("div",{className:"inline-flex items-center gap-x-1 px-3 py-[5px]"},a.createElement("p",null,o+1," ",s.of," ",Math.max(l,1)," ",s.pages)),a.createElement(p,{type:"button",variant:"transparent",onClick:$,disabled:!O},s.prev),a.createElement(p,{type:"button",variant:"transparent",onClick:R,disabled:!P},s.next)))});N.displayName="Table.Pagination";const A=Object.assign(_,{Row:h,Cell:w,Header:y,HeaderCell:x,Body:E,Pagination:N});export{D,A as T};
