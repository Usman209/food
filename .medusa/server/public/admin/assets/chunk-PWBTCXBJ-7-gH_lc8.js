import{bx as f,b as m,by as h,bz as b,bA as N}from"./index-DxqzyGii.js";import{c as i,f as M}from"./format-DrOfc95B.js";function y(e,t){const n=f(e);return isNaN(t)?i(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function F(e,t){const n=f(e);if(isNaN(t))return i(e,NaN);if(!t)return n;const o=n.getDate(),s=i(e,n.getTime());s.setMonth(n.getMonth()+t+1,0);const a=s.getDate();return o>=a?s:(n.setFullYear(s.getFullYear(),s.getMonth(),o),n)}function S(e,t){return y(e,-t)}function w(e,t){return F(e,-t)}function p(e,t){const{years:n=0,months:o=0,weeks:s=0,days:a=0,hours:r=0,minutes:u=0,seconds:c=0}=t,D=w(e,o+n*12),d=S(D,a+s*7),l=u+r*60,g=(c+l*60)*1e3;return i(e,d.getTime()-g)}var O=()=>{var s;const{i18n:e}=m(),t=((s=h.find(a=>a.code===e.language))==null?void 0:s.date_locale)||b,n=({date:a,includeTime:r=!1})=>{const u=new Date(a);return isNaN(u.getTime())?"":M(u,`PP ${r?"p":""}`,{locale:t})};function o(a){const r=new Date;return N(p(new Date(a),{minutes:0}),r,{addSuffix:!0,locale:t})}return{getFullDate:n,getRelativeDate:o}};export{w as a,S as s,O as u};
