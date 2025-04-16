import{u as $,a as q,b as G}from"./chunk-NOAFLTPV-CCnX8r1d.js";import{f as Q}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{u as U,_ as W}from"./chunk-O6K7WXYN-C9el9mU7.js";import{a2 as w,a4 as p,a5 as N,ad as T,g as Z,j as e,r as F,a8 as J,a9 as Y,v as ee,b as se,e8 as re,t as R,cN as k,B as x,m as ie,H as te,T as j,w as r,x as ae,ab as P}from"./index-DxqzyGii.js";import"./lodash-d16DqWgf.js";import{C as oe}from"./chunk-GZBFGV7Y-BCj1yJTj.js";import{c as ne}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-CIE5NZAY-0Om9Cnfp.js";import{K as le}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as g,a as ce,u as de,S as u}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{b as me}from"./chunk-4GJJIXM6-DbIaAZSS.js";import{X as ue}from"./x-mark-mini-DeOA7xVH.js";import{S as f}from"./select-DFhUA7Mg.js";import{C as I}from"./checkbox-46EN5I5b.js";import{c as xe}from"./index-c9KMGmgR.js";import"./chunk-C76H5USB-Bl5tTxeg.js";import"./chunk-YEDAFXMB-C8d6kZpe.js";import"./chunk-AOFGTNG6-QYS7V_Kv.js";import"./table-lFxXs127.js";import"./chunk-EMIHDNB7-DVyZzrfz.js";import"./plus-mini-DfAJsRYg.js";import"./command-bar-DnoNbKmh.js";import"./index-xmdHhDhf.js";import"./triangles-mini-DdF9y2hK.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./_isIndex-dF8T-vgb.js";import"./date-picker-BBkshG0A.js";import"./clsx-B-dksMZM.js";import"./popover-DcdjzaEL.js";import"./triangle-left-mini-Sl2dWmXC.js";import"./index-CzvRkENa.js";import"./prompt-mZDsn5ES.js";import"./check-B9cQSkgB.js";var he=w({name:p().min(1),currency_code:p().min(2,"Select a currency"),automatic_taxes:N(),is_tax_inclusive:N(),countries:T(w({code:p(),name:p()})),payment_providers:T(p()).min(1)}),b="cr",C=50,z="countries-modal",pe=({currencies:n,paymentProviders:a})=>{const{setIsOpen:m}=ce(),[c,h]=F.useState({}),{handleSuccess:v}=de(),o=J({defaultValues:{name:"",currency_code:"",automatic_taxes:!0,is_tax_inclusive:!1,countries:[],payment_providers:[]},resolver:Y(he)}),y=ee({control:o.control,name:"countries",defaultValue:[]}),{t}=se(),{mutateAsync:E,isPending:H}=re(),M=o.handleSubmit(async s=>{await E({name:s.name,countries:s.countries.map(i=>i.code),currency_code:s.currency_code,payment_providers:s.payment_providers,automatic_taxes:s.automatic_taxes,is_tax_inclusive:s.is_tax_inclusive},{onSuccess:({region:i})=>{R.success(t("regions.toast.create")),v(`../${i.id}`)},onError:i=>{R.error(i.message)}})}),{searchParams:D,raw:L}=$({pageSize:C,prefix:b}),{countries:A,count:_}=q({countries:k.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...D}),S=fe(),{table:V}=U({data:A||[],columns:S,count:_,enablePagination:!0,enableRowSelection:!0,rowSelection:{state:c,updater:h},getRowId:s=>s.iso_2,pageSize:C,prefix:b}),B=()=>{const s=Object.keys(c).filter(i=>c[i]);o.setValue("countries",s.map(i=>({code:i,name:k.find(d=>d.iso_2===i).display_name})),{shouldDirty:!0,shouldTouch:!0}),m(z,!1)},O=s=>{const i=y.filter(l=>l.code!==s),d=i.map(l=>l.code).reduce((l,X)=>(l[X]=!0,l),{});o.setValue("countries",i,{shouldDirty:!0,shouldTouch:!0}),h(d)},K=()=>{o.setValue("countries",[],{shouldDirty:!0,shouldTouch:!0}),h({})};return e.jsx(g.Form,{form:o,children:e.jsxs(le,{className:"flex h-full flex-col overflow-hidden",onSubmit:M,children:[e.jsx(g.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(g.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:H,children:t("actions.save")})]})}),e.jsx(g.Body,{className:"flex overflow-hidden",children:e.jsx("div",{className:ie("flex h-full w-full flex-col items-center overflow-y-auto p-16"),id:"form-section",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(te,{children:t("regions.createRegion")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle",children:t("regions.createRegionHint")})]}),e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(r.Field,{control:o.control,name:"name",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("fields.name")}),e.jsx(r.Control,{children:e.jsx(ae,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"currency_code",render:({field:{onChange:s,ref:i,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("fields.currency")}),e.jsx(r.Control,{children:e.jsxs(f,{...d,onValueChange:s,children:[e.jsx(f.Trigger,{ref:i,children:e.jsx(f.Value,{})}),e.jsx(f.Content,{children:n.map(l=>e.jsx(f.Item,{value:l.code,children:l.name},l.code))})]})}),e.jsx(r.ErrorMessage,{})]})})]})}),e.jsx(r.Field,{control:o.control,name:"automatic_taxes",render:({field:{value:s,onChange:i,...d}})=>e.jsx(r.Item,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r.Label,{children:t("fields.automaticTaxes")}),e.jsx(r.Control,{children:e.jsx(P,{...d,checked:s,onCheckedChange:i})})]}),e.jsx(r.Hint,{children:t("regions.automaticTaxesHint")}),e.jsx(r.ErrorMessage,{})]})})}),e.jsx(r.Field,{control:o.control,name:"is_tax_inclusive",render:({field:{value:s,onChange:i,...d}})=>e.jsx(r.Item,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(r.Label,{children:t("fields.taxInclusivePricing")}),e.jsx(r.Control,{children:e.jsx(P,{...d,checked:s,onCheckedChange:i})})]}),e.jsx(r.Hint,{children:t("regions.taxInclusiveHint")}),e.jsx(r.ErrorMessage,{})]})})}),e.jsx("div",{className:"bg-ui-border-base h-px w-full"}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{children:[e.jsx(j,{size:"small",leading:"compact",weight:"plus",children:t("fields.countries")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle",children:t("regions.countriesHint")})]}),y.length>0&&e.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.map(s=>e.jsx(ge,{country:s,onRemove:O},s.code)),e.jsx(x,{variant:"transparent",size:"small",className:"text-ui-fg-muted hover:text-ui-fg-subtle",onClick:K,children:t("actions.clearAll")})]}),e.jsxs(u,{id:z,children:[e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(u.Trigger,{asChild:!0,children:e.jsx(x,{variant:"secondary",size:"small",children:t("regions.addCountries")})})}),e.jsx(u.Content,{children:e.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[e.jsx(u.Header,{children:e.jsx(u.Title,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:t("regions.addCountries")})})}),e.jsx(u.Body,{className:"overflow-hidden",children:e.jsx(W,{table:V,columns:S,count:_,pageSize:C,orderBy:[{key:"display_name",label:t("fields.name")},{key:"iso_2",label:t("fields.code")}],pagination:!0,search:"autofocus",layout:"fill",queryObject:L,prefix:b})}),e.jsx(u.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(u.Close,{asChild:!0,children:e.jsx(x,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(x,{size:"small",type:"button",onClick:B,children:t("actions.save")})]})})]})})]})]}),e.jsx("div",{className:"bg-ui-border-base h-px w-full"}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{children:[e.jsx(j,{size:"small",leading:"compact",weight:"plus",children:t("fields.providers")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle",children:t("regions.providersHint")})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(r.Field,{control:o.control,name:"payment_providers",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("fields.paymentProviders")}),e.jsx(r.Control,{children:e.jsx(oe,{options:a.map(i=>({label:Q(i.id),value:i.id})),...s})}),e.jsx(r.ErrorMessage,{})]})})})]})]})})})]})})},je=xe(),fe=()=>{const n=G();return F.useMemo(()=>[je.display({id:"select",header:({table:a})=>e.jsx(I,{checked:a.getIsSomePageRowsSelected()?"indeterminate":a.getIsAllPageRowsSelected(),onCheckedChange:m=>a.toggleAllPageRowsSelected(!!m)}),cell:({row:a})=>{const m=!a.getCanSelect();return e.jsx(I,{checked:a.getIsSelected()||m,disabled:m,onCheckedChange:c=>a.toggleSelected(!!c),onClick:c=>{c.stopPropagation()}})}}),...n],[n])},ge=({country:n,onRemove:a})=>e.jsxs("div",{className:"bg-ui-bg-field shadow-borders-base transition-fg hover:bg-ui-bg-field-hover flex h-7 items-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"txt-compact-small-plus flex h-full select-none items-center justify-center px-2 py-0.5",children:n.name}),e.jsx("button",{type:"button",onClick:()=>a(n.code),className:"focus-visible:bg-ui-bg-field-hover transition-fg hover:bg-ui-bg-field-hover flex h-full w-7 items-center justify-center border-l outline-none",children:e.jsx(ue,{className:"text-ui-fg-muted"})})]}),Ye=()=>{const{store:n,isPending:a,isError:m,error:c}=Z(),h=((n==null?void 0:n.supported_currencies)??[]).map(o=>ne[o.currency_code.toUpperCase()]),{payment_providers:v=[]}=me({is_enabled:!0});if(m)throw c;return e.jsx(g,{children:!a&&n&&e.jsx(pe,{currencies:h,paymentProviders:v})})};export{Ye as Component};
