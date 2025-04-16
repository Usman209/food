import{V as C}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{u as V}from"./chunk-YIZSVS2R-BKTrhYTi.js";import{C as E}from"./chunk-GZBFGV7Y-BCj1yJTj.js";import{c as x}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as w}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as m,u as M}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{a2 as v,ad as P,a4 as g,an as j,ae as S,af as T,aF as z,R,a7 as $,j as e,b as L,a8 as k,a9 as A,y as B,s as H,aG as K,t as q,B as h,H as D,w as o,z as b,x as X,I as G}from"./index-DxqzyGii.js";import{X as O}from"./x-mark-mini-DeOA7xVH.js";import"./triangles-mini-DdF9y2hK.js";import"./plus-mini-DfAJsRYg.js";import"./prompt-mZDsn5ES.js";var Z=v({inventory:P(v({inventory_item_id:g().min(1,j.t("products.variant.inventory.validation.itemId")),required_quantity:S([T(),g()])}).superRefine((i,n)=>{(i.required_quantity?x(i.required_quantity):0)<1&&n.addIssue({code:z.custom,message:j.t("products.variant.inventory.validation.quantity"),path:["required_quantity"]})}))});function J({variant:i}){var _,f;const{t:n}=L(),{handleSuccess:u}=M(),d=k({defaultValues:{inventory:i.inventory_items.length?i.inventory_items.map(a=>({required_quantity:a.required_quantity,inventory_item_id:a.inventory.id})):[{inventory_item_id:"",required_quantity:""}]},resolver:A(Z)}),l=B({control:d.control,name:"inventory"}),y=l.fields.length>1,p=V({queryKey:["inventory_items"],queryFn:a=>H.admin.inventoryItem.list(a),getOptions:a=>a.inventory_items.map(s=>({label:`${s.title} (${s.sku})`,value:s.id})),defaultValue:(f=(_=i.inventory_items)==null?void 0:_[0])==null?void 0:f.inventory_item_id}),{mutateAsync:I,isPending:N}=K(i==null?void 0:i.product_id),F=d.handleSubmit(async a=>{const s={},c={};i.inventory_items.forEach(t=>s[t.inventory.id]=t.required_quantity),a.inventory.forEach(t=>c[t.inventory_item_id]=!0);const r={};a.inventory.forEach(t=>{t.inventory_item_id in s?t.required_quantity!==s[t.inventory_item_id]&&(r.update=r.update||[],r.update.push({required_quantity:x(t.required_quantity),inventory_item_id:t.inventory_item_id,variant_id:i.id})):(r.create=r.create||[],r.create.push({required_quantity:x(t.required_quantity),inventory_item_id:t.inventory_item_id,variant_id:i.id}))}),i.inventory_items.forEach(t=>{t.inventory.id in c||(r.delete=r.delete||[],r.delete.push({inventory_item_id:t.inventory.id,variant_id:i.id}))}),await I(r,{onSuccess:()=>{q.success(n("products.variant.inventory.toast.itemsManageSuccess")),u()},onError:t=>{q.error(t.message)}})});return e.jsx(m.Form,{form:d,children:e.jsxs(w,{className:"flex h-full flex-col overflow-hidden",onSubmit:F,children:[e.jsx(m.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:n("actions.cancel")})}),e.jsx(h,{size:"small",type:"submit",isLoading:N,children:n("actions.save")})]})}),e.jsx(m.Body,{className:"flex justify-center",children:e.jsxs("div",{className:"flex w-full flex-col gap-y-8 px-6 pt-12 md:w-[720px] md:pt-24",children:[e.jsx(D,{children:n(y?"products.create.inventory.heading":"fields.inventoryItems")}),e.jsxs("div",{className:"grid gap-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(o.Label,{children:i.title}),e.jsx(o.Hint,{children:n(y?"products.create.inventory.label":"fields.inventoryItem")})]}),e.jsx(h,{size:"small",variant:"secondary",type:"button",onClick:()=>{l.append({inventory_item_id:"",required_quantity:""})},children:n("actions.add")})]}),l.fields.map((a,s)=>e.jsxs("li",{className:"bg-ui-bg-component shadow-elevation-card-rest grid grid-cols-[1fr_28px] items-center gap-1.5 rounded-xl p-1.5",children:[e.jsxs("div",{className:"grid grid-cols-[min-content,1fr] items-center gap-1.5",children:[e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(b,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${s}.inventory_item_id`,children:n("fields.item")})}),e.jsx(o.Field,{control:d.control,name:`inventory.${s}.inventory_item_id`,render:({field:c})=>e.jsxs(o.Item,{children:[e.jsx(o.Control,{children:e.jsx(E,{...c,options:p.options,searchValue:p.searchValue,onSearchValueChange:p.onSearchValueChange,fetchNextPage:p.fetchNextPage,className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",placeholder:n("products.create.inventory.itemPlaceholder")})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(b,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${s}.required_quantity`,children:n("fields.quantity")})}),e.jsx(o.Field,{control:d.control,name:`inventory.${s}.required_quantity`,render:({field:{onChange:c,value:r,...t}})=>e.jsxs(o.Item,{children:[e.jsx(o.Control,{children:e.jsx(X,{type:"number",className:"bg-ui-bg-field-component",min:0,value:r,onChange:c,...t,placeholder:n("products.create.inventory.quantityPlaceholder")})}),e.jsx(o.ErrorMessage,{})]})})]}),e.jsx(G,{type:"button",size:"small",variant:"transparent",className:"text-ui-fg-muted",onClick:()=>l.remove(s),children:e.jsx(O,{})})]},a.id))]})]})})]})})}function oe(){const{id:i,variant_id:n}=R(),{variant:u,isPending:d,isError:l,error:y}=$(i,n,{fields:C});if(l)throw y;return e.jsx(m,{children:!d&&u&&e.jsx(J,{variant:u})})}export{oe as Component};
