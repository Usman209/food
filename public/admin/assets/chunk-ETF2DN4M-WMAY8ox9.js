import{u as p}from"./chunk-W7625H47-tObwF2xZ.js";import{u as n}from"./chunk-C76H5USB-Bl5tTxeg.js";import{a as l}from"./chunk-LU7VJVTE-mb1maDYx.js";import{a as i}from"./chunk-MSDRGCRR-B-zvbQQB.js";import{b as f,r as x,j as r}from"./index-DxqzyGii.js";import{c as T}from"./index-c9KMGmgR.js";var C=()=>p(),F=({prefix:e,pageSize:a=20})=>{const s=n(["offset","q","order","created_at","updated_at"],e),{offset:o,q:c,order:m,created_at:u,updated_at:d}=s;return{searchParams:{limit:a,offset:o?Number(o):0,order:m,created_at:u?JSON.parse(u):void 0,updated_at:d?JSON.parse(d):void 0,q:c},raw:s}},t=T(),q=()=>{const{t:e}=f();return x.useMemo(()=>[t.accessor("value",{header:()=>e("fields.value"),cell:({getValue:a})=>r.jsx(i,{text:a()})}),t.accessor("created_at",{header:()=>e("fields.createdAt"),cell:({getValue:a})=>r.jsx(l,{date:a()})}),t.accessor("updated_at",{header:()=>e("fields.updatedAt"),cell:({getValue:a})=>r.jsx(l,{date:a()})})],[e])};export{C as a,q as b,F as u};
