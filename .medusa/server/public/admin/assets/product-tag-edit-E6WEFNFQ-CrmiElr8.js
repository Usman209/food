import{K as g}from"./chunk-6HTZNHPT-CsRznDUp.js";import{b as e,u as p}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{a6 as m,R as f,b as j,eJ as v,j as s,H as T,a8 as b,a9 as y,eK as P,t as x,w as t,x as E,B as h}from"./index-DxqzyGii.js";import"./prompt-mZDsn5ES.js";var F=m.object({value:m.string().min(1)}),w=({productTag:o})=>{const{t:r}=j(),{handleSuccess:n}=p(),a=b({defaultValues:{value:o.value},resolver:y(F)}),{mutateAsync:i,isPending:l}=P(o.id),c=a.handleSubmit(async d=>{await i(d,{onSuccess:({product_tag:u})=>{x.success(r("productTags.edit.successToast",{value:u.value})),n()},onError:u=>{x.error(u.message)}})});return s.jsx(e.Form,{form:a,children:s.jsxs(g,{className:"flex size-full flex-col overflow-hidden",onSubmit:c,children:[s.jsx(e.Body,{className:"flex flex-1 flex-col overflow-auto",children:s.jsx(t.Field,{control:a.control,name:"value",render:({field:d})=>s.jsxs(t.Item,{children:[s.jsx(t.Label,{children:r("productTags.fields.value")}),s.jsx(t.Control,{children:s.jsx(E,{...d})}),s.jsx(t.ErrorMessage,{})]})})}),s.jsx(e.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(e.Close,{asChild:!0,children:s.jsx(h,{variant:"secondary",size:"small",type:"button",children:r("actions.cancel")})}),s.jsx(h,{size:"small",type:"submit",isLoading:l,children:r("actions.save")})]})})]})})},R=()=>{const{id:o}=f(),{t:r}=j(),{product_tag:n,isPending:a,isError:i,error:l}=v(o),c=!a&&!!n;if(i)throw l;return s.jsxs(e,{children:[s.jsxs(e.Header,{children:[s.jsx(e.Title,{asChild:!0,children:s.jsx(T,{children:r("productTags.edit.header")})}),s.jsx(e.Description,{className:"sr-only",children:r("productTags.edit.subtitle")})]}),c&&s.jsx(w,{productTag:n})]})};export{R as Component};
