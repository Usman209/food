import{f as _}from"./chunk-3WXBLS2P-MKHj1mOQ.js";import{B as T}from"./chunk-BKJC5BGQ-D5lnREhD.js";import{D as P}from"./chunk-UCMPRD5U-CAhYfA6d.js";import{g as D}from"./chunk-43EZDQEG-nPkhzO0n.js";import{f as B}from"./chunk-OV5NMSY6-CzJZ0JaW.js";import{N as C}from"./chunk-EMIHDNB7-DVyZzrfz.js";import{T as m,A as R}from"./chunk-2RQLKDBF-CrorLxLh.js";import{dg as S,j as e,q as A,d as $,R as z,dd as u,a as q,S as k,d6 as L,s as O,b as g,H as f,A as h,u as V,d8 as I,T as l,Y as x}from"./index-DxqzyGii.js";import{P as j}from"./pencil-square-DJOMSDao.js";import{u as M}from"./use-prompt-CHIG5GPn.js";import{T as Q}from"./trash-B9RNm--D.js";import{C as y}from"./container-2oJZWy84.js";import{S as E}from"./status-badge-Q3vJZ9Vb.js";import{C as H}from"./copy-SMALIhPJ.js";import"./chunk-PWBTCXBJ-7-gH_lc8.js";import"./format-DrOfc95B.js";import"./plus-mini-DfAJsRYg.js";import"./Trans-BeWKhczc.js";import"./x-mark-mini-DeOA7xVH.js";import"./check-B9cQSkgB.js";import"./prompt-mZDsn5ES.js";var ye=s=>{const{id:t}=s.params||{},{promotion:a}=S(t,{initialData:s.data,enabled:!!t});return a?e.jsx("span",{children:a.code}):null},J=s=>({queryKey:L.detail(s),queryFn:async()=>O.admin.promotion.retrieve(s)}),be=async({params:s})=>{const t=s.id,a=J(t);return A.ensureQueryData(a)},K=({campaign:s})=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"text-ui-fg-muted flex items-center gap-x-1.5",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-base",children:s.name}),e.jsx(l,{size:"small",weight:"plus",children:"·"}),e.jsx(l,{size:"small",weight:"plus",children:s.campaign_identifier})]}),e.jsx(P,{startsAt:s.starts_at,endsAt:s.ends_at,showTime:!0})]}),U=({campaign:s})=>{const{t}=g(),{id:a}=z(),i=[{label:t("actions.edit"),to:"add-to-campaign",icon:e.jsx(j,{})}];return s&&i.unshift({label:t("promotions.campaign.actions.goToCampaign"),to:`/campaigns/${s.id}`,icon:e.jsx(R,{})}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(f,{level:"h2",children:t("promotions.fields.campaign")}),e.jsx(h,{groups:[{actions:i}]})]}),s?e.jsx(K,{campaign:s}):e.jsx(C,{className:"h-[180px] pt-4 text-center",title:"Not part of a campaign",message:"Add this promotion to an existing campaign",action:{to:`/promotions/${a}/add-to-campaign`,label:"Add to Campaign"},buttonVariant:"transparentIconLeft"})]})};function W({rule:s}){var t;return e.jsx("div",{className:"bg-ui-bg-subtle shadow-borders-base align-center flex justify-around rounded-md p-2",children:e.jsxs("div",{className:"text-ui-fg-subtle txt-compact-xsmall flex items-center whitespace-nowrap",children:[e.jsx(x,{size:"2xsmall",className:"txt-compact-xsmall-plus tag-neutral-text mx-1 inline-block truncate",children:s.attribute_label},"rule-attribute"),e.jsx("span",{className:"txt-compact-2xsmall mx-1 inline-block",children:s.operator_label}),e.jsx(T,{inline:!0,className:"!txt-compact-small-plus",list:s.field_type==="number"?[s.values]:(t=s.values)==null?void 0:t.map(a=>a.label)})]})})}var p=({rules:s,ruleType:t})=>{const{t:a}=g();return e.jsxs(y,{className:"p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{children:a(`promotions.fields.conditions.${t}.title`)})}),e.jsx(h,{groups:[{actions:[{icon:e.jsx(j,{}),label:a("actions.edit"),to:`${t}/edit`}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle flex flex-col gap-2 px-6 pb-4 pt-2",children:[!s.length&&e.jsx(C,{className:"h-[180px]",title:a("general.noRecordsTitle"),message:a("promotions.conditions.list.noRecordsMessage"),action:{to:`${t}/edit`,label:a("promotions.conditions.add")},buttonVariant:"transparentIconLeft"}),s.map(i=>e.jsx(W,{rule:i},`${i.id}-${i.attribute}`))]})]})};function Y(s){var a,i,n,r;const t=(a=s.application_method)==null?void 0:a.value;if(!t)return null;if(((i=s.application_method)==null?void 0:i.type)==="fixed"){const o=(n=s.application_method)==null?void 0:n.currency_code;return o?B(t,o):null}else if(((r=s.application_method)==null?void 0:r.type)==="percentage")return _(t);return null}var F=({promotion:s})=>{var b,v,N,w;const{t}=g(),a=M(),i=V(),{mutateAsync:n}=I(s.id),r=async()=>{await a({title:t("general.areYouSure"),description:t("promotions.deleteWarning",{code:s.code}),verificationInstruction:t("general.typeToConfirm"),verificationText:s.code,confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await n(void 0,{onSuccess:()=>{i("/promotions",{replace:!0})}})},[o,d]=D(s),c=Y(s);return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{children:s.code})}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(E,{color:o,children:d}),e.jsx(h,{groups:[{actions:[{icon:e.jsx(j,{}),label:t("actions.edit"),to:`/promotions/${s.id}/edit`}]},{actions:[{icon:e.jsx(Q,{}),label:t("actions.delete"),onClick:r}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.campaign")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty",children:s.is_automatic?t("promotions.form.method.automatic.title"):t("promotions.form.method.code.title")})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("fields.code")}),e.jsx(H,{content:s.code,className:"text-ui-tag-neutral-text",asChild:!0,children:e.jsx(x,{size:"2xsmall",rounded:"full",className:"cursor-pointer text-pretty",children:s.code})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.type")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty capitalize",children:s.type})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.value")}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(l,{className:"inline",size:"small",leading:"compact",children:c||"-"}),((b=s==null?void 0:s.application_method)==null?void 0:b.type)==="fixed"&&e.jsx(x,{size:"2xsmall",rounded:"full",children:(N=(v=s==null?void 0:s.application_method)==null?void 0:v.currency_code)==null?void 0:N.toUpperCase()})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.allocation")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty capitalize",children:(w=s.application_method)==null?void 0:w.allocation})]})]})},ve=()=>{const s=$(),{id:t}=z(),{promotion:a,isLoading:i}=S(t,{initialData:s}),n={};(a==null?void 0:a.type)==="buyget"&&(n.promotion_type=a.type);const{rules:r}=u(t,"rules",n),{rules:o}=u(t,"target-rules",n),{rules:d}=u(t,"buy-rules",n),{getWidgets:c}=q();return i||!a?e.jsx(k,{mainSections:3,sidebarSections:1,showJSON:!0}):e.jsxs(m,{data:a,widgets:{after:c("promotion.details.after"),before:c("promotion.details.before"),sideAfter:c("promotion.details.side.after"),sideBefore:c("promotion.details.side.before")},hasOutlet:!0,showJSON:!0,children:[e.jsxs(m.Main,{children:[e.jsx(F,{promotion:a}),e.jsx(p,{rules:r||[],ruleType:"rules"}),e.jsx(p,{rules:o||[],ruleType:"target-rules"}),a.type==="buyget"&&e.jsx(p,{rules:d||[],ruleType:"buy-rules"})]}),e.jsx(m.Sidebar,{children:e.jsx(U,{campaign:a.campaign})})]})};export{ye as Breadcrumb,ve as Component,be as loader};
