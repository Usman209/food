import{D as j}from"./chunk-7I5DQGWY-CwOWioty.js";import{K as f}from"./chunk-6HTZNHPT-CsRznDUp.js";import{b as r,u as p}from"./chunk-ZCO6EK4W-CsaMn7VR.js";import{a2 as y,a4 as E,b as u,R as b,aS as v,j as e,H as F,a8 as g,a9 as S,d5 as w,t as m,w as i,x as O,B as c}from"./index-DxqzyGii.js";import"./prompt-mZDsn5ES.js";var C=y({email:E().email()});function D({order:t}){const{t:s}=u(),{handleSuccess:o}=p(),a=g({defaultValues:{email:t.email||""},resolver:S(C)}),{mutateAsync:n,isPending:d}=w(t.id),x=a.handleSubmit(async l=>{try{await n({email:l.email}),m.success(s("orders.edit.email.requestSuccess",{email:l.email})),o()}catch(h){m.error(h.message)}});return e.jsx(r.Form,{form:a,children:e.jsxs(f,{onSubmit:x,className:"flex size-full flex-col overflow-hidden",children:[e.jsx(r.Body,{className:"flex-1 overflow-auto",children:e.jsx(i.Field,{control:a.control,name:"email",render:({field:l})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:s("fields.email")}),e.jsx(i.Control,{children:e.jsx(O,{type:"email",...l})}),e.jsx(i.ErrorMessage,{})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(c,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(c,{isLoading:d,type:"submit",variant:"primary",size:"small",children:s("actions.save")})]})})]})})}var H=()=>{const{t}=u(),s=b(),{order:o,isPending:a,isError:n,error:d}=v(s.id,{fields:j});if(!a&&n)throw d;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(F,{children:t("orders.edit.email.title")})}),o&&e.jsx(D,{order:o})]})};export{H as Component};
