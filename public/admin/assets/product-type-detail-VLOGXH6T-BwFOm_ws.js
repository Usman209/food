import{u as g}from"./chunk-S22NYSST-Bjs-_NVw.js";import{u as h,a as T}from"./chunk-PCFUZKDS-CDEXRggc.js";import{eV as c,j as r,q as j,R as v,d as S,a as D,du as _,eW as w,s as C,b as l,H as m,A as q,e as k}from"./index-DxqzyGii.js";import{u as A,_ as E}from"./chunk-O6K7WXYN-C9el9mU7.js";import"./lodash-d16DqWgf.js";import{u as N}from"./chunk-2WQFRVK5-pAFwL-H7.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{S as B}from"./chunk-2RQLKDBF-CrorLxLh.js";import{P as Q}from"./pencil-square-DJOMSDao.js";import{T as z}from"./trash-B9RNm--D.js";import{C as y}from"./container-2oJZWy84.js";import"./use-prompt-CHIG5GPn.js";import"./prompt-mZDsn5ES.js";import"./chunk-IQBAUTU5-BI_Zn-bn.js";import"./chunk-ADOCJB6L-DcsqZ8LV.js";import"./chunk-P3UUX2T6-DpmDKtBZ.js";import"./index-c9KMGmgR.js";import"./chunk-C76H5USB-Bl5tTxeg.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./Trans-BeWKhczc.js";import"./check-B9cQSkgB.js";var je=e=>{const{id:t}=e.params||{},{product_type:a}=c(t,void 0,{initialData:e.data,enabled:!!t});return a?r.jsx("span",{children:a.value}):null},L=e=>({queryKey:w.detail(e),queryFn:async()=>C.admin.productType.retrieve(e)}),ve=async({params:e})=>{const t=e.id,a=L(t);return j.ensureQueryData(a)},M=({productType:e})=>{const{t}=l(),a=g(e.id,e.value);return r.jsxs(y,{className:"flex items-center justify-between",children:[r.jsx(m,{children:e.value}),r.jsx(q,{groups:[{actions:[{label:t("actions.edit"),icon:r.jsx(Q,{}),to:"edit"}]},{actions:[{label:t("actions.delete"),icon:r.jsx(z,{}),onClick:a}]}]})]})},u=10,O=({productType:e})=>{const{t}=l(),{searchParams:a,raw:i}=h({pageSize:u}),{products:o,count:n,isPending:s,isError:f,error:x}=k({...a,type_id:[e.id]}),P=N(["product_types"]),p=T(),{table:b}=A({columns:p,data:o,count:(o==null?void 0:o.length)||0,getRowId:d=>d.id,pageSize:u});if(f)throw x;return r.jsxs(y,{className:"divide-y p-0",children:[r.jsx("div",{className:"px-6 py-4",children:r.jsx(m,{level:"h2",children:t("products.domain")})}),r.jsx(E,{table:b,filters:P,isLoading:s,columns:p,count:n,pageSize:u,navigateTo:({original:d})=>`/products/${d.id}`,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],queryObject:i,search:!0,pagination:!0})]})},Se=()=>{const{id:e}=v(),t=S(),{product_type:a,isPending:i,isError:o,error:n}=c(e,void 0,{initialData:t}),{getWidgets:s}=D();if(i||!a)return r.jsx(_,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw n;return r.jsxs(B,{widgets:{after:s("product_type.details.after"),before:s("product_type.details.before")},showJSON:!0,showMetadata:!0,data:a,children:[r.jsx(M,{productType:a}),r.jsx(O,{productType:a})]})};export{je as Breadcrumb,Se as Component,ve as loader};
