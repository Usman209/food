import{u as b,a as g}from"./chunk-DFA6WGYO-Cfbc5tWi.js";import{a as j,j as t,b as m,dq as C,k as h,H as T,T as y,L as v,B as k,r as w,dr as P,A as S}from"./index-DxqzyGii.js";import{u as A,_}from"./chunk-O6K7WXYN-C9el9mU7.js";import"./lodash-d16DqWgf.js";import{u as D}from"./chunk-GW6TVOAA-Js27BiGK.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{S as E}from"./chunk-2RQLKDBF-CrorLxLh.js";import{u as z}from"./use-prompt-CHIG5GPn.js";import{P as L}from"./pencil-square-DJOMSDao.js";import{T as H}from"./trash-B9RNm--D.js";import{C as q}from"./container-2oJZWy84.js";import{c as B}from"./index-c9KMGmgR.js";import"./chunk-MSDRGCRR-B-zvbQQB.js";import"./chunk-P3UUX2T6-DpmDKtBZ.js";import"./chunk-C76H5USB-Bl5tTxeg.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./chunk-W7625H47-tObwF2xZ.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./Trans-BeWKhczc.js";import"./check-B9cQSkgB.js";import"./prompt-mZDsn5ES.js";var I=({collection:e})=>{const{t:i}=m(),s=z(),{mutateAsync:r}=P(e.id),o=async()=>{await s({title:i("general.areYouSure"),description:i("collections.deleteWarning",{title:e.title}),verificationText:e.title,verificationInstruction:i("general.typeToConfirm"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await r()};return t.jsx(S,{groups:[{actions:[{label:i("actions.edit"),to:`/collections/${e.id}/edit`,icon:t.jsx(L,{})}]},{actions:[{label:i("actions.delete"),onClick:o,icon:t.jsx(H,{}),disabled:!e.id}]}]})},l=20,N=()=>{const{t:e}=m(),{searchParams:i,raw:s}=b({pageSize:l}),{collections:r,count:o,isError:n,error:p,isLoading:d}=C({...i,fields:"+products.id"},{placeholderData:h}),u=D(),c=$(),{table:f}=A({data:r??[],columns:c,count:o,enablePagination:!0,getRowId:(a,x)=>a.id??`${x}`,pageSize:l});if(n)throw p;return t.jsxs(q,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(T,{children:e("collections.domain")}),t.jsx(y,{className:"text-ui-fg-subtle",size:"small",children:e("collections.subtitle")})]}),t.jsx(v,{to:"/collections/create",children:t.jsx(k,{size:"small",variant:"secondary",children:e("actions.create")})})]}),t.jsx(_,{table:f,columns:c,pageSize:l,count:o,filters:u,orderBy:[{key:"title",label:e("fields.title")},{key:"handle",label:e("fields.handle")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],search:!0,navigateTo:a=>`/collections/${a.original.id}`,queryObject:s,isLoading:d})]})},R=B(),$=()=>{const e=g();return w.useMemo(()=>[...e,R.display({id:"actions",cell:({row:i})=>t.jsx(I,{collection:i.original})})],[e])},ye=()=>{const{getWidgets:e}=j();return t.jsx(E,{widgets:{after:e("product_collection.list.after"),before:e("product_collection.list.before")},children:t.jsx(N,{})})};export{ye as Component};
