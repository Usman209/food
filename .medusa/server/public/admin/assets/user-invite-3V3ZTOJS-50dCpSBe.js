import{u as A}from"./chunk-C76H5USB-Bl5tTxeg.js";import{r as C}from"./chunk-K7S5TX6I-BhPW2ooi.js";import{u as D,_ as F}from"./chunk-O6K7WXYN-C9el9mU7.js";import{r as n,aT as L,a2 as R,a4 as U,j as r,b,a8 as H,a9 as z,eh as q,H as I,T as B,w as p,x as $,B as V,V as h,A as K}from"./index-DxqzyGii.js";import"./lodash-d16DqWgf.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{K as J}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as f}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{u as Q,a as W,b as G,c as X}from"./chunk-RLY2SL5E-DsgLrF8d.js";import{T as Y}from"./Trans-BeWKhczc.js";import{u as Z}from"./use-prompt-CHIG5GPn.js";import{A as ee}from"./arrow-path-Co80rTWK.js";import{T as re}from"./trash-B9RNm--D.js";import{A as te}from"./alert-tamZ0XPF.js";import{C as ae}from"./container-2oJZWy84.js";import{f as u}from"./format-DrOfc95B.js";import{S as y}from"./status-badge-Q3vJZ9Vb.js";import{c as se}from"./index-c9KMGmgR.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./prompt-mZDsn5ES.js";var ie=Object.defineProperty,x=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,a)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ne=(e,t)=>{for(var a in t)M.call(t,a)&&S(e,a,t[a]);if(x)for(var a of x(t))P.call(t,a)&&S(e,a,t[a]);return e},oe=(e,t)=>{var a={};for(var s in e)M.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&x)for(var s of x(e))t.indexOf(s)<0&&P.call(e,s)&&(a[s]=e[s]);return a};const E=n.forwardRef((e,t)=>{var a=e,{color:s="currentColor"}=a,i=oe(a,["color"]);return n.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},i),n.createElement("g",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},n.createElement("path",{d:"m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});E.displayName="Link";var le=({prefix:e,pageSize:t=20})=>{const a=A(["offset","q","order","created_at","updated_at"],e),{offset:s,created_at:i,updated_at:o,q:l,order:c}=a;return{searchParams:{limit:t,offset:s?Number(s):0,order:c,created_at:i?JSON.parse(i):void 0,updated_at:o?JSON.parse(o):void 0,q:l},raw:a}},ce=L(C()),de=R({email:U().email()}),j=10,g="usr_invite",me=`${window.location.origin}/app/invite?token=`,pe=()=>{const{t:e}=b(),t=H({defaultValues:{email:""},resolver:z(de)}),{raw:a,searchParams:s}=le({prefix:g,pageSize:j}),{invites:i,count:o,isPending:l,isError:c,error:d}=Q(s),w=fe(),{table:N}=D({data:i??[],columns:w,count:o,enablePagination:!0,getRowId:m=>m.id,pageSize:j,prefix:g}),{mutateAsync:T,isPending:O}=W(),k=t.handleSubmit(async m=>{try{await T({email:m.email}),t.reset()}catch(v){if(q(v)&&v.status===400){t.setError("root",{type:"manual",message:v.message});return}}});if(c)throw d;return r.jsx(f.Form,{form:t,children:r.jsxs(J,{onSubmit:k,className:"flex h-full flex-col overflow-hidden",children:[r.jsx(f.Header,{}),r.jsx(f.Body,{className:"flex flex-1 flex-col overflow-hidden",children:r.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:r.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[r.jsxs("div",{children:[r.jsx(I,{children:e("users.inviteUser")}),r.jsx(B,{size:"small",className:"text-ui-fg-subtle",children:e("users.inviteUserHint")})]}),t.formState.errors.root&&r.jsx(te,{variant:"error",dismissible:!1,className:"text-balance",children:t.formState.errors.root.message}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.jsx(p.Field,{control:t.control,name:"email",render:({field:m})=>r.jsxs(p.Item,{children:[r.jsx(p.Label,{children:e("fields.email")}),r.jsx(p.Control,{children:r.jsx($,{...m})}),r.jsx(p.ErrorMessage,{})]})})}),r.jsx("div",{className:"flex items-center justify-end",children:r.jsx(V,{size:"small",variant:"secondary",type:"submit",isLoading:O,children:e("users.sendInvite")})})]}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx(I,{level:"h2",children:e("users.pendingInvites")}),r.jsx(ae,{className:"overflow-hidden p-0",children:r.jsx(F,{table:N,columns:w,count:o,pageSize:j,pagination:!0,search:"autofocus",isLoading:l,queryObject:a,prefix:g,orderBy:[{key:"email",label:e("fields.email")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})})]})]})})})]})})},ue=({invite:e})=>{const{mutateAsync:t}=G(e.id),{mutateAsync:a}=X(e.id),s=Z(),{t:i}=b(),o=async()=>{await s({title:i("general.areYouSure"),description:i("users.deleteInviteWarning",{email:e.email}),cancelText:i("actions.cancel"),confirmText:i("actions.delete")})&&await t()},l=async()=>{await a()},c=()=>{const d=`${me}${e.token}`;(0,ce.default)(d)};return r.jsx(K,{groups:[{actions:[{icon:r.jsx(ee,{}),label:i("users.resendInvite"),onClick:l}]},{actions:[{icon:r.jsx(E,{}),label:i("users.copyInviteLink"),onClick:c}]},{actions:[{icon:r.jsx(re,{}),label:i("actions.delete"),onClick:o}]}]})},_=se(),fe=()=>{const{t:e}=b();return n.useMemo(()=>[_.accessor("email",{header:e("fields.email"),cell:({getValue:t})=>t()}),_.accessor("accepted",{header:e("fields.status"),cell:({getValue:t,row:a})=>{const s=t(),i=new Date(a.original.expires_at)<new Date;return s?r.jsx(h,{content:e("users.acceptedOnDate",{date:u(new Date(a.original.updated_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"green",children:e("users.inviteStatus.accepted")})}):i?r.jsx(h,{content:e("users.expiredOnDate",{date:u(new Date(a.original.expires_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"red",children:e("users.inviteStatus.expired")})}):r.jsx(h,{content:r.jsx(Y,{i18nKey:"users.validFromUntil",components:[r.jsx("span",{className:"font-medium"},"from"),r.jsx("span",{className:"font-medium"},"untill")],values:{from:u(new Date(a.original.created_at),"dd MMM, yyyy"),until:u(new Date(a.original.expires_at),"dd MMM, yyyy")}}),children:r.jsx(y,{color:"orange",children:e("users.inviteStatus.pending")})})}}),_.display({id:"actions",cell:({row:t})=>r.jsx(ue,{invite:t.original})})],[e])},We=()=>r.jsx(f,{children:r.jsx(pe,{})});export{We as Component};
