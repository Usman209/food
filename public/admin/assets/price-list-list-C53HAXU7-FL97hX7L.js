import{u as g}from"./chunk-LTC6LGS4-uNUAxMWB.js";import{g as b}from"./chunk-G2J2T2QU-CMt42MQH.js";import{T as h,a as j}from"./chunk-MSDRGCRR-B-zvbQQB.js";import{S as P}from"./chunk-ADOCJB6L-DcsqZ8LV.js";import{a as T,j as t,b as n,dy as L,H as v,T as y,B as C,L as S,r as k,k as _,A}from"./index-DxqzyGii.js";import{u as D,_ as w}from"./chunk-O6K7WXYN-C9el9mU7.js";import"./lodash-d16DqWgf.js";import{u as E}from"./chunk-W7625H47-tObwF2xZ.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{S as q}from"./chunk-2RQLKDBF-CrorLxLh.js";import{u as z}from"./chunk-C76H5USB-Bl5tTxeg.js";import{P as H}from"./pencil-square-DJOMSDao.js";import{T as F}from"./trash-B9RNm--D.js";import{C as N}from"./container-2oJZWy84.js";import{c as B}from"./index-c9KMGmgR.js";import"./use-prompt-CHIG5GPn.js";import"./prompt-mZDsn5ES.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./chunk-P3UUX2T6-DpmDKtBZ.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./Trans-BeWKhczc.js";import"./check-B9cQSkgB.js";var I=({priceList:e})=>{const{t:r}=n(),s=g({priceList:e});return t.jsx(A,{groups:[{actions:[{label:r("actions.edit"),to:`${e.id}/edit`,icon:t.jsx(H,{})}]},{actions:[{label:r("actions.delete"),onClick:s,icon:t.jsx(F,{})}]}]})},o=B(),M=()=>{const{t:e}=n();return k.useMemo(()=>[o.accessor("title",{header:()=>t.jsx(h,{text:e("fields.title")}),cell:r=>r.getValue()}),o.accessor("status",{header:e("priceLists.fields.status.label"),cell:({row:r})=>{const{color:s,text:a}=b(e,r.original);return t.jsx(P,{color:s,children:a})}}),o.accessor("prices",{header:e("priceLists.fields.priceOverrides.header"),cell:r=>{var s;return t.jsx(j,{text:`${((s=r.getValue())==null?void 0:s.length)||"-"}`})}}),o.display({id:"actions",cell:({row:r})=>t.jsx(I,{priceList:r.original})})],[e])},O=()=>E(),Q=({pageSize:e=20,prefix:r})=>{var i;const s=z(["offset","q","order","status"],r);return{searchParams:{limit:e,offset:s.offset?Number(s.offset):0,order:s.order,status:(i=s.status)==null?void 0:i.split(","),q:s.q},raw:s}},c=20,R=()=>{const{t:e}=n(),{searchParams:r,raw:s}=Q({pageSize:c}),{price_lists:a,count:i,isLoading:p,isError:u,error:d}=L(r,{placeholderData:_}),f=O(),m=M(),{table:x}=D({data:a||[],columns:m,count:i,enablePagination:!0,getRowId:l=>l.id,pageSize:c});if(u)throw d;return t.jsxs(N,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(v,{children:e("priceLists.domain")}),t.jsx(y,{className:"text-ui-fg-subtle",size:"small",children:e("priceLists.subtitle")})]}),t.jsx(C,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(S,{to:"create",children:e("actions.create")})})]}),t.jsx(w,{table:x,columns:m,count:i,filters:f,orderBy:[{key:"title",label:e("fields.title")},{key:"status",label:e("fields.status")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:s,pageSize:c,navigateTo:l=>l.original.id,isLoading:p,pagination:!0,search:!0})]})},ke=()=>{const{getWidgets:e}=T();return t.jsx(q,{widgets:{after:e("price_list.list.after"),before:e("price_list.list.before")},children:t.jsx(R,{})})};export{ke as Component};
