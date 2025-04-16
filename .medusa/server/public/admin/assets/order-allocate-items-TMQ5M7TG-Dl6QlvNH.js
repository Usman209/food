import{g as Y}from"./chunk-WKOPGFW5-Di_6cJlP.js";import{K as Z}from"./chunk-6HTZNHPT-CsRznDUp.js";import{R as _,u as J}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{a6 as N,R as U,aS as ee,j as e,b as K,r as b,c$ as se,a8 as te,a9 as ae,cZ as le,q as ie,aW as ne,t as D,v as P,H as re,w as m,x as Q,B as H,aY as R,aB as oe,T as z,m as ce,b4 as de}from"./index-DxqzyGii.js";import{C as xe}from"./component-CP-3un5y.js";import{S as A}from"./select-DFhUA7Mg.js";import{A as ue}from"./alert-tamZ0XPF.js";import"./prompt-mZDsn5ES.js";import"./triangles-mini-DdF9y2hK.js";import"./check-B9cQSkgB.js";import"./x-mark-mini-DeOA7xVH.js";var me=N.object({location_id:N.string(),quantity:N.record(N.string(),N.number().or(N.string()))});function fe({item:s,form:i,locationId:d,onQuantityChange:v}){var q,w,$,k,n,c;const{t:x}=K(),r=s.variant,j=((q=s.variant)==null?void 0:q.inventory)||[],[y,F]=b.useState(!1),u=P({control:i.control,name:"quantity"}),f=!!(r!=null&&r.inventory_items.length)&&(r==null?void 0:r.inventory_items.length)>1,{availableQuantity:o,inStockQuantity:T}=b.useMemo(()=>{var a,l;if(!r||!d)return{};const t=(l=(a=j[0])==null?void 0:a.location_levels)==null?void 0:l.find(h=>h.location_id===d);return t?{availableQuantity:t.available_quantity,inStockQuantity:t.stocked_quantity}:{}},[r,d]),L=!f&&o&&u[`${s.id}-${(w=s.variant)==null?void 0:w.inventory[0].id}`]&&u[`${s.id}-${($=s.variant)==null?void 0:$.inventory[0].id}`]>o,M=0,p=Math.min(Y(s),o||Number.MAX_SAFE_INTEGER);return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 min-w-[720px] divide-y divide-dashed rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-x-3 p-3 text-sm",children:[e.jsx("div",{className:"flex flex-1 items-center",children:e.jsxs("div",{className:"flex items-center gap-x-3",children:[L&&e.jsx(R,{className:"text-ui-fg-error"}),e.jsx(oe,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(z,{className:"txt-small flex",as:"span",weight:"plus",children:s.product_title}),s.variant_sku&&e.jsxs("span",{className:"text-ui-fg-subtle",children:[" ","(",s.variant_sku,")"]}),f&&e.jsx(xe,{className:"text-ui-fg-muted ml-2 overflow-visible pt-[2px]"})]}),e.jsx(z,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.title})]})]})}),e.jsxs("div",{className:ce("flex flex-1 items-center gap-x-3",f?"justify-end":"justify-between"),children:[!f&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:x("labels.available")}),e.jsxs("span",{className:"text-ui-fg-muted",children:[o||"-",o&&!f&&u[`${s.id}-${(k=s.variant)==null?void 0:k.inventory[0].id}`]&&e.jsxs("span",{className:"text-ui-fg-error txt-small ml-1",children:["-",u[`${s.id}-${(n=s.variant)==null?void 0:n.inventory[0].id}`]]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:x("labels.inStock")}),e.jsx("span",{className:"text-ui-fg-muted",children:T||"-"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-row items-center gap-2",children:[e.jsx(m.Field,{control:i.control,name:f?`quantity.${s.id}-`:`quantity.${s.id}-${(c=s.variant)==null?void 0:c.inventory[0].id}`,rules:{required:!f,min:!f&&M,max:p},render:({field:t})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(Q,{className:"bg-ui-bg-base txt-small w-[46px] rounded-lg text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",type:"number",...t,disabled:!d,onChange:a=>{var h;const l=a.target.value===""?null:Number(a.target.value);v((h=s.variant)==null?void 0:h.inventory[0],s,f,l,!0)}})})})})," ","/ ",s.quantity," ",x("fields.qty")]})]})]})]}),f&&e.jsx("div",{className:"px-4 py-2",children:e.jsxs("div",{onClick:()=>F(t=>!t),className:"flex items-center gap-x-2",children:[e.jsx(de,{style:{transform:`rotate(${y?-90:0}deg)`},className:"text-ui-fg-muted -mt-[1px]"}),e.jsx("span",{className:"txt-small text-ui-fg-muted cursor-pointer",children:x("orders.allocateItems.consistsOf",{num:j.length})})]})}),y&&r.inventory.map((t,a)=>{const l=t.location_levels.find(S=>S.location_id===d),h=!!u[`${s.id}-${t.id}`]&&u[`${s.id}-${t.id}`]>l.available_quantity;return e.jsxs("div",{className:"txt-small flex items-center gap-x-3 p-4",children:[e.jsxs("div",{className:"flex flex-1 flex-row items-center gap-3",children:[h&&e.jsx(R,{className:"text-ui-fg-error"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle",children:t.title}),e.jsx("span",{className:"text-ui-fg-muted",children:x("orders.allocateItems.requires",{num:r.inventory_items[a].required_quantity})})]})]}),e.jsxs("div",{className:"flex flex-1 flex-row justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:x("labels.available")}),e.jsxs("span",{className:"text-ui-fg-muted",children:[(l==null?void 0:l.available_quantity)||"-",(l==null?void 0:l.available_quantity)&&u[`${s.id}-${t.id}`]&&e.jsxs("span",{className:"text-ui-fg-error txt-small ml-1",children:["-",u[`${s.id}-${t.id}`]]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:x("labels.inStock")}),e.jsx("span",{className:"text-ui-fg-muted",children:(l==null?void 0:l.stocked_quantity)||"-"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"text-ui-fg-subtle txt-small mr-1 flex flex-row items-center gap-2",children:[e.jsx(m.Field,{control:i.control,name:`quantity.${s.id}-${t.id}`,rules:{required:!0,min:0,max:l==null?void 0:l.available_quantity},render:({field:S})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(Q,{className:"bg-ui-bg-base txt-small w-[46px] rounded-lg text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",type:"number",...S,disabled:!d,onChange:C=>{const g=C.target.value===""?null:Number(C.target.value);v(t,s,f,g)}})})})}),"/"," ",s.quantity*r.inventory_items[a].required_quantity," ",x("fields.qty")]})]})]})]},t.id)})]})}function he({order:s}){var w,$,k;const{t:i}=K(),{handleSuccess:d}=J(),[v,x]=b.useState(!1),[r,j]=b.useState(""),{mutateAsync:y,isPending:F}=se(),u=b.useMemo(()=>s.items.filter(n=>{var c,t;return((c=n.variant)==null?void 0:c.manage_inventory)&&((t=n.variant)==null?void 0:t.inventory.length)&&n.quantity-n.detail.fulfilled_quantity>0}),[s.items]),f=b.useMemo(()=>u.filter(n=>n.variant_title.toLowerCase().includes(r)||n.product_title.toLowerCase().includes(r)),[u,r]);u.length;const o=te({defaultValues:{location_id:"",quantity:B(u)},resolver:ae(me)}),{stock_locations:T=[]}=le(),L=o.handleSubmit(async n=>{try{const c=Object.entries(n.quantity).filter(([a])=>!a.endsWith("-")).map(([a,l])=>[...a.split("-"),l]);if(c.some(a=>a[2]==="")){o.setError("root.quantityNotAllocated",{type:"manual",message:i("orders.allocateItems.error.quantityNotAllocated")});return}const t=c.map(([a,l,h])=>y({location_id:n.location_id,inventory_item_id:l,line_item_id:a,quantity:h}));await Promise.all(t),await ie.invalidateQueries({queryKey:ne.details()}),d(`/orders/${s.id}`),D.success(i("general.success"),{description:i("orders.allocateItems.toast.created"),dismissLabel:i("actions.close")})}catch(c){D.error(i("general.error"),{description:c.message,dismissLabel:i("actions.close")})}}),M=(n,c,t,a,l)=>{var C;let h=!1;const S=l&&t?`quantity.${c.id}-`:`quantity.${c.id}-${n.id}`;if(o.setValue(S,a),a){const g=n.location_levels.find(I=>I.location_id===p);g&&g.available_quantity<a&&(h=!0)}if(t&&!l&&o.resetField(`quantity.${c.id}-`,{defaultValue:""}),t&&l){const g=u.find(I=>I.id===c.id);(C=g.variant)==null||C.inventory_items.forEach((I,W)=>{var V;const G=a||0,E=(V=g.variant)==null?void 0:V.inventory[W];if(o.setValue(`quantity.${c.id}-${E.id}`,G*I.required_quantity),a){const O=E==null?void 0:E.location_levels.find(X=>X.location_id===p);O&&O.available_quantity<a&&(h=!0)}})}o.clearErrors("root.quantityNotAllocated"),x(h)},p=P({name:"location_id",control:o.control});b.useEffect(()=>{p&&o.setValue("quantity",B(u))},[p]);const q=(k=($=(w=o.formState.errors)==null?void 0:w.root)==null?void 0:$.quantityNotAllocated)==null?void 0:k.message;return e.jsx(_.Form,{form:o,children:e.jsxs(Z,{onSubmit:L,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(_.Header,{}),e.jsx(_.Body,{className:"flex h-full w-full flex-col items-center divide-y overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center overflow-auto p-16",children:e.jsx("div",{className:"flex w-full max-w-[736px] flex-col justify-center px-2 pb-2",children:e.jsxs("div",{className:"flex flex-col gap-8 divide-y divide-dashed",children:[e.jsx(re,{children:i("orders.allocateItems.title")}),e.jsxs("div",{className:"flex-1 divide-y divide-dashed pt-8",children:[e.jsx(m.Field,{control:o.control,name:"location_id",render:({field:{onChange:n,ref:c,...t}})=>e.jsxs(m.Item,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(m.Label,{children:i("fields.location")}),e.jsx(m.Hint,{children:i("orders.allocateItems.locationDescription")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(m.Control,{children:e.jsxs(A,{onValueChange:n,...t,children:[e.jsx(A.Trigger,{className:"bg-ui-bg-base",ref:c,children:e.jsx(A.Value,{})}),e.jsx(A.Content,{children:T.map(a=>e.jsx(A.Item,{value:a.id,children:a.name},a.id))})]})})})]}),e.jsx(m.ErrorMessage,{})]})}),e.jsxs(m.Item,{className:"mt-8 pt-8",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(m.Label,{children:i("orders.allocateItems.itemsToAllocate")}),e.jsx(m.Hint,{children:i("orders.allocateItems.itemsToAllocateDesc")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(Q,{value:r,onChange:n=>j(n.target.value),placeholder:i("orders.allocateItems.search"),autoComplete:"off",type:"search"})})]}),q&&e.jsx(ue,{className:"mb-4",dismissible:!0,variant:"error",children:q}),e.jsx("div",{className:"flex flex-col gap-y-1",children:f.map(n=>e.jsx(fe,{form:o,item:n,locationId:p,onQuantityChange:M},n.id))})]})]})]})})})}),e.jsx(_.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(_.Close,{asChild:!0,children:e.jsx(H,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(H,{size:"small",type:"submit",isLoading:F,disabled:!p||v,children:i("orders.allocateItems.action")})]})})]})})}function B(s){const i={};return s.forEach(d=>{var x,r,j;const v=((x=d.variant)==null?void 0:x.inventory_items.length)>1;i[v?`${d.id}-`:`${d.id}-${(r=d.variant)==null?void 0:r.inventory[0].id}`]="",v&&((j=d.variant)==null||j.inventory.forEach(y=>{i[`${d.id}-${y.id}`]=""}))}),i}function ke(){const{id:s}=U(),{order:i,isLoading:d,isError:v,error:x}=ee(s,{fields:"currency_code,*items,*items.variant,+items.variant.product.title,*items.variant.inventory,*items.variant.inventory.location_levels,*items.variant.inventory_items,*shipping_address"});if(v)throw x;const r=!d&&i;return e.jsx(_,{children:r&&e.jsx(he,{order:i})})}export{ke as Component};
