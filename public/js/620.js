(self.webpackChunk=self.webpackChunk||[]).push([[620],{9620:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var a=t(5166),l={class:"px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},o={class:"flex-1 flex justify-between sm:hidden"},n=(0,a.createTextVNode)(" Anterior "),d=(0,a.createTextVNode)(" Próxima "),i={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},s={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},c=(0,a.createVNode)("span",{class:"sr-only"},"Anterior",-1),u=(0,a.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),p={key:1,class:"cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},m=(0,a.createVNode)("span",{class:"sr-only"},"Anterior",-1),x=(0,a.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),f=(0,a.createVNode)("span",{class:"sr-only"},"Próxima",-1),g=(0,a.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),h={key:3,class:"cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},v=(0,a.createVNode)("span",{class:"sr-only"},"Próxima",-1),w=(0,a.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);const y={name:"Pagination",props:{data:Object},data:function(){return{dataLinks:this.data.links}},methods:{hideLink:function(e){return"&laquo; Previous"===e.label||"Next &raquo;"===e.label}},mounted:function(){},render:function(e,r,t,y,b,k){var N=(0,a.resolveComponent)("inertia-link");return(0,a.openBlock)(),(0,a.createBlock)("div",null,[(0,a.createVNode)("div",l,[(0,a.createVNode)("div",o,[t.data.prev_page_url?((0,a.openBlock)(),(0,a.createBlock)(N,{key:0,href:t.data.prev_page_url,class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500","preserve-scroll":""},{default:(0,a.withCtx)((function(){return[n]})),_:1},8,["href"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(N,{href:t.data.next_page_url,class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500","preserve-scroll":""},{default:(0,a.withCtx)((function(){return[d]})),_:1},8,["href"])]),(0,a.createVNode)("div",i,[(0,a.createVNode)("div",null,[(0,a.createVNode)("nav",s,[t.data.prev_page_url?((0,a.openBlock)(),(0,a.createBlock)(N,{key:0,href:t.data.prev_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50","preserve-scroll":""},{default:(0,a.withCtx)((function(){return[c,u]})),_:1},8,["href"])):(0,a.createCommentVNode)("",!0),t.data.prev_page_url?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)("span",p,[m,x])),((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(b.dataLinks,(function(e,r){return(0,a.openBlock)(),(0,a.createBlock)(N,{key:r,href:e.url,class:[k.hideLink(e)?"hidden":"","relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"],"preserve-scroll":""},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("span",{class:e.active?"text-blue-700":""},(0,a.toDisplayString)(e.label),3)]})),_:2},1032,["href","class"])})),128)),t.data.next_page_url?((0,a.openBlock)(),(0,a.createBlock)(N,{key:2,href:t.data.next_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50","preserve-scroll":""},{default:(0,a.withCtx)((function(){return[f,g]})),_:1},8,["href"])):(0,a.createCommentVNode)("",!0),t.data.next_page_url?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)("span",h,[v,w]))])])])])])}},b=y}}]);