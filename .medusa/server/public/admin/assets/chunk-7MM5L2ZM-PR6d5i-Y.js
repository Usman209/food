import{b as c,u,eH as i,t as s}from"./index-DxqzyGii.js";import{u as l}from"./use-prompt-CHIG5GPn.js";var g=({productTag:t})=>{const{t:e}=c(),a=l(),o=u(),{mutateAsync:n}=i(t.id);return async()=>{await a({title:e("general.areYouSure"),description:e("productTags.delete.confirmation",{value:t.value}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await n(void 0,{onSuccess:()=>{s.success(e("productTags.delete.successToast",{value:t.value})),o("/settings/product-tags",{replace:!0})},onError:r=>{s.error(r.message)}})}};export{g as u};
