import{u as I,a as A}from"./chunk-PCFUZKDS-CDEXRggc.js";import{a6 as u,R as B,aN as H,j as t,b as P,r as S,a8 as M,a9 as N,e as D,aO as O,t as f,E as V,B as x,V as K}from"./index-DxqzyGii.js";import{u as L,_ as q}from"./chunk-O6K7WXYN-C9el9mU7.js";import"./lodash-d16DqWgf.js";import{u as G}from"./chunk-2WQFRVK5-pAFwL-H7.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{K as Q}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as l,u as U}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{C as y}from"./checkbox-46EN5I5b.js";import{c as X}from"./index-c9KMGmgR.js";import"./chunk-IQBAUTU5-BI_Zn-bn.js";import"./chunk-ADOCJB6L-DcsqZ8LV.js";import"./chunk-P3UUX2T6-DpmDKtBZ.js";import"./chunk-C76H5USB-Bl5tTxeg.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./_isIndex-dF8T-vgb.js";import"./x-mark-mini-DeOA7xVH.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./prompt-mZDsn5ES.js";var Z=u.object({product_ids:u.array(u.string())}),m=50,p="p",$=({categoryId:c,products:o=[]})=>{const{t:e}=P(),{handleSuccess:a}=U(),[d,n]=S.useState(o.reduce((r,i)=>(r[i.id]=!0,r),{})),s=M({defaultValues:{product_ids:[]},resolver:N(Z)}),b=r=>{const i=typeof r=="function"?r(d):r;s.setValue("product_ids",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),n(i)},{searchParams:j,raw:C}=I({pageSize:m,prefix:p}),{products:v,count:g,isPending:_,isError:E,error:R}=D({...j}),h=W(),k=G(["categories"]),{table:T}=L({data:v,columns:h,getRowId:r=>r.id,count:g,pageSize:m,prefix:p,enableRowSelection:r=>!o.some(i=>i.id===r.original.id),enablePagination:!0,rowSelection:{state:d,updater:b}}),{mutateAsync:w,isPending:F}=O(c),z=s.handleSubmit(async r=>{await w({add:r.product_ids},{onSuccess:()=>{f.success(e("categories.products.add.successToast",{count:r.product_ids.length-o.length})),a()},onError:i=>{f.error(i.message)}})});if(E)throw R;return t.jsx(l.Form,{form:s,children:t.jsxs(Q,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(l.Header,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.product_ids&&t.jsx(V,{variant:"error",children:s.formState.errors.product_ids.message}),t.jsx(l.Close,{asChild:!0,children:t.jsx(x,{size:"small",variant:"secondary",children:e("actions.cancel")})}),t.jsx(x,{size:"small",type:"submit",isLoading:F,children:e("actions.save")})]})}),t.jsx(l.Body,{className:"size-full overflow-hidden",children:t.jsx(q,{table:T,columns:h,pageSize:m,count:g,queryObject:C,filters:k,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],prefix:p,isLoading:_,layout:"fill",pagination:!0,search:"autofocus"})})]})})},J=X(),W=()=>{const{t:c}=P(),o=A();return S.useMemo(()=>[J.display({id:"select",header:({table:e})=>t.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect(),d=e.getIsSelected()||a,n=t.jsx(y,{checked:d,disabled:a,onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}});return a?t.jsx(K,{content:c("categories.products.add.disabledTooltip"),side:"right",children:n}):n}}),...o],[c,o])},we=()=>{const{id:c}=B(),{product_category:o,isPending:e,isFetching:a,isError:d,error:n}=H(c,{fields:"products.id"}),s=!e&&!a&&!!o;if(d)throw n;return t.jsx(l,{children:s&&t.jsx($,{categoryId:o.id,products:o.products})})};export{we as Component};
