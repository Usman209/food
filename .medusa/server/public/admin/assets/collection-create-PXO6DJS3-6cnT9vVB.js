import{H as j}from"./chunk-7OYLCEKK-B64QUzPq.js";import{K as h}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as o,u as p}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{a2 as f,a4 as n,j as e,b as C,a8 as g,a9 as y,ds as b,t as i,B as c,H as v,T as F,w as s,x as S}from"./index-DxqzyGii.js";import"./prompt-mZDsn5ES.js";var H=f({title:n().min(1),handle:n().optional()}),T=()=>{const{t:l}=C(),{handleSuccess:d}=p(),r=g({defaultValues:{title:"",handle:""},resolver:y(H)}),{mutateAsync:m,isPending:x}=b(),u=r.handleSubmit(async t=>{await m(t,{onSuccess:({collection:a})=>{d(`/collections/${a.id}`),i.success(l("collections.createSuccess"))},onError:a=>{i.error(a.message)}})});return e.jsx(o.Form,{form:r,children:e.jsxs(h,{onSubmit:u,children:[e.jsx(o.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(c,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(c,{size:"small",variant:"primary",type:"submit",isLoading:x,children:l("actions.create")})]})}),e.jsx(o.Body,{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(v,{children:l("collections.createCollection")}),e.jsx(F,{size:"small",className:"text-ui-fg-subtle",children:l("collections.createCollectionHint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"title",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.title")}),e.jsx(s.Control,{children:e.jsx(S,{autoComplete:"off",...t})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"handle",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,tooltip:l("collections.handleTooltip"),children:l("fields.handle")}),e.jsx(s.Control,{children:e.jsx(j,{...t})}),e.jsx(s.ErrorMessage,{})]})})]})]})})]})})},R=()=>e.jsx(o,{children:e.jsx(T,{})});export{R as Component};
