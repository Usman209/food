import{bm as M,c1 as z,c2 as q,aM as V,r as k,c3 as D,c4 as I,bq as J,c5 as U}from"./index-DxqzyGii.js";var X={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const Y=M(X);var Z=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function B(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(Y[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var i=e.indexOf("-->");return{type:"comment",comment:i!==-1?e.slice(4,i):""}}for(var f=new RegExp(Z),s=null;(s=f.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),p=[l,""];l.indexOf("=")>-1&&(p=l.split("=")),t.attrs[p[0]]=p[1],f.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var _=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,G=/^\s*$/,Q=Object.create(null);function L(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var i=[];for(var f in n)i.push(f+'="'+n[f]+'"');return i.length?" "+i.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(L,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var R={parse:function(e,t){t||(t={}),t.components||(t.components=Q);var n,i=[],f=[],s=-1,l=!1;if(e.indexOf("<")!==0){var p=e.indexOf("<");i.push({type:"text",content:p===-1?e:e.substring(0,p)})}return e.replace(_,function(m,u){if(l){if(m!=="</"+n.name+">")return;l=!1}var v,j=m.charAt(1)!=="/",C=m.startsWith("<!--"),b=u+m.length,x=e.charAt(b);if(C){var h=B(m);return s<0?(i.push(h),i):((v=f[s]).children.push(h),i)}if(j&&(s++,(n=B(m)).type==="tag"&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!x||x==="<"||n.children.push({type:"text",content:e.slice(b,e.indexOf("<",b))}),s===0&&i.push(n),(v=f[s-1])&&v.children.push(n),f[s]=n),(!j||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?i:f[s]),!l&&x!=="<"&&x)){v=s===-1?i:f[s].children;var c=e.indexOf("<",b),o=e.slice(b,c===-1?void 0:c);G.test(o)&&(o=" "),(c>-1&&s+v.length>=0||o!==" ")&&v.push({type:"text",content:o})}}),i},stringify:function(e){return e.reduce(function(t,n){return t+L("",n)},"")}};function H(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function S(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?P(t):t}function ee(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>k.isValidElement(t))}function P(e){return Array.isArray(e)?e:[e]}function te(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function W(e,t){if(!e)return"";let n="";const i=P(e),f=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return i.forEach((s,l)=>{if(typeof s=="string")n+=`${s}`;else if(k.isValidElement(s)){const p=Object.keys(s.props).length,m=f.indexOf(s.type)>-1,u=s.props.children;if(!u&&m&&p===0)n+=`<${s.type}/>`;else if(!u&&(!m||p!==0))n+=`<${l}></${l}>`;else if(s.props.i18nIsDynamicList)n+=`<${l}></${l}>`;else if(m&&p===1&&typeof u=="string")n+=`<${s.type}>${u}</${s.type}>`;else{const v=W(u,t);n+=`<${l}>${v}</${l}>`}}else if(s===null)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:p,...m}=s,u=Object.keys(m);if(u.length===1){const v=p?`${u[0]}, ${p}`:u[0];n+=`{{${v}}}`}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function ne(e,t,n,i,f,s){if(t==="")return[];const l=i.transKeepBasicHtmlNodesFor||[],p=t&&new RegExp(l.map(c=>`<${c}`).join("|")).test(t);if(!e&&!p&&!s)return[t];const m={};function u(c){P(c).forEach(a=>{typeof a!="string"&&(H(a)?u(S(a)):typeof a=="object"&&!k.isValidElement(a)&&Object.assign(m,a))})}u(e);const v=R.parse(`<0>${t}</0>`),j={...m,...f};function C(c,o,a){const g=S(c),O=x(g,o.children,a);return ee(g)&&O.length===0||c.props&&c.props.i18nIsDynamicList?g:O}function b(c,o,a,g,O){c.dummy?(c.children=o,a.push(k.cloneElement(c,{key:g},O?void 0:o))):a.push(...k.Children.map([c],y=>{const r={...y.props};return delete r.i18nIsDynamicList,V.createElement(y.type,J({},r,{key:g,ref:y.ref},O?{}:{children:o}))}))}function x(c,o,a){const g=P(c);return P(o).reduce((y,r,A)=>{const N=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,j,n.language);if(r.type==="tag"){let $=g[parseInt(r.name,10)];a.length===1&&!$&&($=a[0][r.name]),$||($={});const d=Object.keys(r.attrs).length!==0?te({props:r.attrs},$):$,w=k.isValidElement(d),T=w&&H(r,!0)&&!r.voidElement,F=p&&typeof d=="object"&&d.dummy&&!w,K=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof d=="string"){const E=n.services.interpolator.interpolate(d,j,n.language);y.push(E)}else if(H(d)||T){const E=C(d,r,a);b(d,E,y,A)}else if(F){const E=x(g,r.children,a);b(d,E,y,A)}else if(Number.isNaN(parseFloat(r.name)))if(K){const E=C(d,r,a);b(d,E,y,A,r.voidElement)}else if(i.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)y.push(k.createElement(r.name,{key:`${r.name}-${A}`}));else{const E=x(g,r.children,a);y.push(k.createElement(r.name,{key:`${r.name}-${A}`},E))}else if(r.voidElement)y.push(`<${r.name} />`);else{const E=x(g,r.children,a);y.push(`<${r.name}>${E}</${r.name}>`)}else if(typeof d=="object"&&!w){const E=r.children[0]?N:null;E&&y.push(E)}else b(d,N,y,A,r.children.length!==1||!N)}else if(r.type==="text"){const $=i.transWrapTextNodes,d=s?i.unescape(n.services.interpolator.interpolate(r.content,j,n.language)):n.services.interpolator.interpolate(r.content,j,n.language);$?y.push(k.createElement($,{key:`${r.name}-${A}`},d)):y.push(d)}return y},[])}const h=x([{dummy:!0,children:e||[]}],v,P(e||[]));return S(h[0])}function se(e){let{children:t,count:n,parent:i,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:j,t:C,shouldUnescape:b,...x}=e;const h=j||I();if(!h)return z("You will need to pass in an i18next instance by using i18nextReactModule"),t;const c=C||h.t.bind(h)||(T=>T);s&&(l.context=s);const o={...q(),...h.options&&h.options.react};let a=v||c.ns||h.options&&h.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"];const g=W(t,o),O=m||g||o.transEmptyNodeValue||f,{hashTransKey:y}=o,r=f||(y?y(g||O):g||O);h.options&&h.options.interpolation&&h.options.interpolation.defaultVariables&&(p=p&&Object.keys(p).length>0?{...p,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const A=p?l.interpolation:{interpolation:{...l.interpolation,prefix:"#$?",suffix:"?$#"}},N={...l,count:n,...p,...A,defaultValue:O,ns:a},$=r?c(r,N):O;u&&Object.keys(u).forEach(T=>{const F=u[T];if(typeof F.type=="function"||!F.props||!F.props.children||$.indexOf(`${T}/>`)<0&&$.indexOf(`${T} />`)<0)return;function K(){return V.createElement(V.Fragment,null,F)}u[T]=V.createElement(K,null)});const d=ne(u||t,$,h,o,N,b),w=i!==void 0?i:o.defaultTransParent;return w?k.createElement(w,x,d):d}function ae(e){let{children:t,count:n,parent:i,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:j,t:C,shouldUnescape:b,...x}=e;const{i18n:h,defaultNS:c}=k.useContext(U)||{},o=j||h||I(),a=C||o&&o.t.bind(o);return se({children:t,count:n,parent:i,i18nKey:f,context:s,tOptions:l,values:p,defaults:m,components:u,ns:v||a&&a.ns||c||o&&o.options&&o.options.defaultNS,i18n:o,t:C,shouldUnescape:b,...x})}export{ae as T};
