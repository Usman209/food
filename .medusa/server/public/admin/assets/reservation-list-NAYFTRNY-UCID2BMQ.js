import{a as h}from"./chunk-LU7VJVTE-mb1maDYx.js";import{P as x}from"./chunk-P3UUX2T6-DpmDKtBZ.js";import{u as v,_ as j}from"./chunk-O6K7WXYN-C9el9mU7.js";import{a as g,j as e,b as d,b2 as y,H as b,T as _,B as T,L as N,r as P,cZ as w,dV as S,A as k}from"./index-DxqzyGii.js";import"./lodash-d16DqWgf.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{S as C}from"./chunk-2RQLKDBF-CrorLxLh.js";import{u as R}from"./chunk-C76H5USB-Bl5tTxeg.js";import{u as z}from"./use-prompt-CHIG5GPn.js";import{P as L}from"./pencil-square-DJOMSDao.js";import{T as q}from"./trash-B9RNm--D.js";import{C as A}from"./container-2oJZWy84.js";import{c as E}from"./index-c9KMGmgR.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./Trans-BeWKhczc.js";import"./check-B9cQSkgB.js";import"./prompt-mZDsn5ES.js";var I=({reservation:r})=>{const{t}=d(),s=z(),{mutateAsync:i}=S(r.id),a=async()=>{await s({title:t("general.areYouSure"),description:t("reservations.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await i()};return e.jsx(k,{groups:[{actions:[{label:t("actions.edit"),to:`${r.id}/edit`,icon:e.jsx(L,{})}]},{actions:[{label:t("actions.delete"),onClick:a,icon:e.jsx(q,{})}]}]})},o=E(),D=()=>{const{t:r}=d();return P.useMemo(()=>[o.accessor("inventory_item",{header:r("fields.sku"),cell:({getValue:t})=>{const s=t();return!s||!s.sku?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.sku})})}}),o.accessor("description",{header:r("fields.description"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})}):e.jsx(x,{})}}),o.accessor("created_at",{header:r("fields.created"),cell:({getValue:t})=>{const s=t();return e.jsx(h,{date:s})}}),o.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:r("fields.quantity")})}),cell:({getValue:t})=>{const s=t();return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:s})})}}),o.display({id:"actions",cell:({row:t})=>{const s=t.original;return e.jsx(I,{reservation:s})}})],[r])},H=()=>{const{t:r}=d(),{stock_locations:t}=w({limit:1e3}),s=[];if(t){const i={type:"select",options:t.map(a=>({label:a.name,value:a.id})),key:"location_id",searchable:!0,label:r("fields.location")};s.push(i)}return s.push({type:"date",key:"created_at",label:r("fields.createdAt")}),s},B=({pageSize:r=20,prefix:t})=>{const s=R(["location_id","offset","created_at","quantity","updated_at","order"],t),{location_id:i,created_at:a,updated_at:n,quantity:p,offset:c,...l}=s;return{searchParams:{limit:r,offset:c?parseInt(c):void 0,location_id:i,created_at:a?JSON.parse(a):void 0,updated_at:n?JSON.parse(n):void 0,...l},raw:s}},u=20,F=()=>{const{t:r}=d(),{searchParams:t}=B({pageSize:u}),{reservations:s,count:i,isPending:a,isError:n,error:p}=y({...t}),c=H(),l=D(),{table:f}=v({data:s||[],columns:l,count:i,enablePagination:!0,getRowId:m=>m.id,pageSize:u});if(n)throw p;return e.jsxs(A,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(b,{children:r("reservations.domain")}),e.jsx(_,{className:"text-ui-fg-subtle",size:"small",children:r("reservations.subtitle")})]}),e.jsx(T,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(N,{to:"create",children:r("actions.create")})})]}),e.jsx(j,{table:f,columns:l,pageSize:u,count:i,isLoading:a,filters:c,pagination:!0,navigateTo:m=>m.id,search:!1})]})},ge=()=>{const{getWidgets:r}=g();return e.jsx(C,{widgets:{before:r("reservation.list.before"),after:r("reservation.list.after")},children:e.jsx(F,{})})};export{ge as Component};
