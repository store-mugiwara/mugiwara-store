(self.webpackChunk=self.webpackChunk||[]).push([[529,195,609,620,713],{195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var o=r(5166),a={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},l={class:"max-w-md w-full space-y-8"},n=(0,o.createVNode)("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"},null,-1),d=(0,o.createVNode)("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Painel administrativo ",-1),i={key:0,class:"mt-3 bg-red-500 text-center text-white p-2 rounded"},s=(0,o.createVNode)("p",null,"Dados incorretos",-1),c=(0,o.createVNode)("input",{type:"hidden",name:"remember",value:"true"},null,-1),u={class:"rounded-md shadow-sm -space-y-px"},p=(0,o.createVNode)("label",{for:"email",class:"sr-only"},"Email",-1),m=(0,o.createVNode)("label",{for:"password",class:"sr-only"},"Senha",-1),f=(0,o.createVNode)("div",{class:"flex items-center justify-between"},[(0,o.createVNode)("div",{class:"text-sm"},[(0,o.createVNode)("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," Recuperar acesso ")])],-1),g=(0,o.createVNode)("div",null,[(0,o.createVNode)("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,o.createVNode)("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[(0,o.createVNode)("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])]),(0,o.createTextVNode)(" acessar ")])],-1);const x={name:"LoginForm",props:{title:String},data:function(){return{form:{email:null,password:null}}},methods:{handleSubmit:function(){this.$inertia.post(route("admin.login"),this.form,{headers:{"X-Requested-With":"ajax"}})}},render:function(e,t,r,x,h,v){return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",null,[n,d,e.$page.props.flash.success?((0,o.openBlock)(),(0,o.createBlock)("div",i,[s])):(0,o.createCommentVNode)("",!0)]),(0,o.createVNode)("form",{onSubmit:t[3]||(t[3]=(0,o.withModifiers)((function(){return v.handleSubmit&&v.handleSubmit.apply(v,arguments)}),["prevent"])),class:"mt-8 space-y-6"},[c,(0,o.createVNode)("div",u,[(0,o.createVNode)("div",null,[p,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.form.email=e}),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[o.vModelText,h.form.email]])]),(0,o.createVNode)("div",null,[m,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.password=e}),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[o.vModelText,h.form.password]])])]),f,g],32)])])}},h=x},9609:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var o=r(5166),a={class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},l={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},n=(0,o.createVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),d={key:1,class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"};var i=r(195);const s={name:"LayoutModal",props:{openModal:Boolean},data:function(){return{}},components:{LoginForm:i.default},methods:{closeModal:function(){this.$emit("closeModal")}},render:function(e,t,r,i,s,c){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("div",l,[r.openModal?((0,o.openBlock)(),(0,o.createBlock)("div",{key:0,onClick:t[1]||(t[1]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)}),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"})):(0,o.createCommentVNode)("",!0),n,r.openModal?((0,o.openBlock)(),(0,o.createBlock)("div",d,[(0,o.renderSlot)(e.$slots,"default")])):(0,o.createCommentVNode)("",!0)])])])}},c=s},9620:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var o=r(5166),a={class:"px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},l={class:"flex-1 flex justify-between sm:hidden"},n=(0,o.createTextVNode)(" Anterior "),d=(0,o.createTextVNode)(" Próxima "),i={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},s={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},c=(0,o.createVNode)("span",{class:"sr-only"},"Anterior",-1),u=(0,o.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),p={key:1,class:"cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},m=(0,o.createVNode)("span",{class:"sr-only"},"Anterior",-1),f=(0,o.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),g=(0,o.createVNode)("span",{class:"sr-only"},"Próxima",-1),x=(0,o.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),h={key:3,class:"cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},v=(0,o.createVNode)("span",{class:"sr-only"},"Próxima",-1),y=(0,o.createVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);const b={name:"Pagination",props:{data:Object},data:function(){return{dataLinks:this.data.links}},methods:{hideLink:function(e){return"&laquo; Previous"===e.label||"Next &raquo;"===e.label}},mounted:function(){},render:function(e,t,r,b,w,V){var N=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("div",l,[r.data.prev_page_url?((0,o.openBlock)(),(0,o.createBlock)(N,{key:0,href:r.data.prev_page_url,class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500","preserve-scroll":""},{default:(0,o.withCtx)((function(){return[n]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(N,{href:r.data.next_page_url,class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500","preserve-scroll":""},{default:(0,o.withCtx)((function(){return[d]})),_:1},8,["href"])]),(0,o.createVNode)("div",i,[(0,o.createVNode)("div",null,[(0,o.createVNode)("nav",s,[r.data.prev_page_url?((0,o.openBlock)(),(0,o.createBlock)(N,{key:0,href:r.data.prev_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50","preserve-scroll":""},{default:(0,o.withCtx)((function(){return[c,u]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),r.data.prev_page_url?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)("span",p,[m,f])),((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(w.dataLinks,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)(N,{key:t,href:e.url,class:[V.hideLink(e)?"hidden":"","relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"],"preserve-scroll":""},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("span",{class:e.active?"text-blue-700":""},(0,o.toDisplayString)(e.label),3)]})),_:2},1032,["href","class"])})),128)),r.data.next_page_url?((0,o.openBlock)(),(0,o.createBlock)(N,{key:2,href:r.data.next_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50","preserve-scroll":""},{default:(0,o.withCtx)((function(){return[g,x]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),r.data.next_page_url?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)("span",h,[v,y]))])])])])])}},w=b},7529:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var o=r(5166),a={class:"flex flex-col"},l={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},n={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},d={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},i={class:"min-w-full divide-y divide-gray-200"},s=(0,o.createVNode)("thead",{class:"bg-gray-50"},[(0,o.createVNode)("tr",null,[(0,o.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Nome "),(0,o.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Descrição "),(0,o.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Preço "),(0,o.createVNode)("th",{scope:"col",class:"relative px-6 py-3"},[(0,o.createVNode)("span",{class:"sr-only"},"Editar")]),(0,o.createVNode)("th",{scope:"col",class:"relative px-6 py-3"},[(0,o.createVNode)("span",{class:"sr-only"},"Excluir")])])],-1),c={class:"bg-white divide-y divide-gray-200"},u={class:"px-6 py-4 whitespace-nowrap"},p={class:"flex items-center"},m={class:"flex-shrink-0 h-10 w-10"},f={class:"ml-4"},g={class:"text-sm font-medium text-gray-900"},x={class:"px-6 py-4 whitespace-nowrap"},h={class:"text-sm text-gray-900"},v={class:"px-6 py-4 whitespace-nowrap"},y={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},b={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},w={key:0,class:"flex justify-center"};var V=r(9609),N=r(9620),k=r(2713);const B={name:"ProductsTable",props:{products:Object,images:Object,categories:Object},data:function(){return{modalOpen:!1,productEdit:null}},components:{Pagination:N.default,LayoutModal:V.default,editProduct:k.default},methods:{remove:function(e){this.$inertia.post(route("admin.deleteProduct"),{product:e})},openModal:function(e){this.productEdit=e,this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},getSingleImages:function(e){return this.images.find((function(t){return t.product_id===e})).path}},mounted:function(){},render:function(e,t,r,V,N,k){var B=(0,o.resolveComponent)("edit-product"),C=(0,o.resolveComponent)("layout-modal"),M=(0,o.resolveComponent)("pagination");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",n,[(0,o.createVNode)("div",d,[(0,o.createVNode)("table",i,[s,(0,o.createVNode)("tbody",c,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.products.data,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("tr",{key:e.id},[(0,o.createVNode)("td",u,[(0,o.createVNode)("div",p,[(0,o.createVNode)("div",m,[(0,o.createVNode)("img",{class:"h-10 w-10 rounded-full",src:k.getSingleImages(e.id),alt:""},null,8,["src"])]),(0,o.createVNode)("div",f,[(0,o.createVNode)("div",g,(0,o.toDisplayString)(e.name),1)])])]),(0,o.createVNode)("td",x,[(0,o.createVNode)("div",h,(0,o.toDisplayString)(e.description),1)]),(0,o.createVNode)("td",v,[(0,o.createVNode)("span",null,(0,o.toDisplayString)(e.price),1)]),(0,o.createVNode)("td",y,[(0,o.createVNode)("button",{onClick:function(t){return k.openModal(e)},class:"text-indigo-600 hover:text-indigo-900"}," Editar ",8,["onClick"])]),(0,o.createVNode)("td",b,[(0,o.createVNode)("button",{onClick:function(t){return k.remove(e.id)},class:"text-red-600 hover:text-indigo-900"}," Excluir ",8,["onClick"])]),N.modalOpen?((0,o.openBlock)(),(0,o.createBlock)(C,{key:0,openModal:N.modalOpen,onCloseModal:k.closeModal},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(B,{product:N.productEdit,images:r.images,categories:r.categories,onCloseForm:k.closeModal},null,8,["product","images","categories","onCloseForm"])]})),_:1},8,["openModal","onCloseModal"])):(0,o.createCommentVNode)("",!0)])})),128))])]),r.products.last_page>1?((0,o.openBlock)(),(0,o.createBlock)("div",w,[(0,o.createVNode)(M,{data:r.products},null,8,["data"])])):(0,o.createCommentVNode)("",!0)])])])])])}},C=B},2713:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var o=r(5166),a={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},l={class:"max-w-md w-full space-y-8"},n=(0,o.createVNode)("div",null,[(0,o.createVNode)("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),(0,o.createVNode)("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Editar produto ")],-1),d=(0,o.createVNode)("input",{type:"hidden",name:"remember",value:"true"},null,-1),i={class:"rounded-md shadow-sm -space-y-px"},s=(0,o.createVNode)("label",{for:"name",class:"sr-only"},"Nome",-1),c=(0,o.createVNode)("label",{for:"description",class:"sr-only"},"Descrição",-1),u=(0,o.createVNode)("label",{for:"price",class:"sr-only"},"Preço",-1),p=(0,o.createVNode)("label",{for:"price",class:"sr-only"},"Preço",-1),m={id:"image",name:"image",type:"file",ref:"files",multiple:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"preço"},f={class:"flex flex-wrap justify-center"},g={class:"flex"},x=(0,o.createVNode)("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[(0,o.createVNode)("svg",{class:"h-5 w-5 text-gray-400 group-hover:text-gray-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])],-1),h=(0,o.createTextVNode)(" cancelar "),v=(0,o.createVNode)("button",{type:"submit",class:"ml-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,o.createVNode)("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[(0,o.createVNode)("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])]),(0,o.createTextVNode)(" Salvar ")],-1);const y={name:"addProduct",props:{categories:Object,product:Object,images:Object},data:function(){return{form:{id:this.product.id,name:this.product.name,description:this.product.description,price:this.product.price,category_id:this.product.category_id,deletedImages:[]},singleImages:[]}},methods:{handleSubmit:function(){this.$refs.files.files.length>0?this.form.newImages=this.$refs.files.files:this.form.newImages=[],this.$inertia.post(route("admin.editProduct"),this.form),this.$emit("closeForm")},closeForm:function(){this.$emit("closeForm")},removeImage:function(e){this.form.deletedImages.push(this.form.images[0][e].id),this.form.images[0].splice(e,1)},getSingleImages:function(){var e=this;this.singleImages.push(this.images.filter((function(t){return t.product_id===e.product.id}))),this.form.images=this.singleImages}},mounted:function(){this.getSingleImages()},render:function(e,t,r,y,b,w){return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.createVNode)("div",l,[n,(0,o.createVNode)("form",{onSubmit:t[6]||(t[6]=(0,o.withModifiers)((function(){return w.handleSubmit&&w.handleSubmit.apply(w,arguments)}),["prevent"])),class:"mt-8 space-y-6"},[d,(0,o.createVNode)("div",i,[(0,o.createVNode)("div",null,[s,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.form.name=e}),id:"text",name:"name",type:"name",autocomplete:"name",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Nome"},null,512),[[o.vModelText,b.form.name]])]),(0,o.createVNode)("div",null,[c,(0,o.withDirectives)((0,o.createVNode)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.form.description=e}),id:"description",name:"description",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"descrição"},null,512),[[o.vModelText,b.form.description]])]),(0,o.createVNode)("div",null,[u,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.form.price=e}),id:"price",name:"price",type:"number",step:".01",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"preço"},null,512),[[o.vModelText,b.form.price]])]),(0,o.createVNode)("div",null,[p,(0,o.createVNode)("input",m,null,512)]),(0,o.createVNode)("div",null,[(0,o.withDirectives)((0,o.createVNode)("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return b.form.category_id=e}),id:"category_id",name:"category_id",class:"rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"},[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.categories,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("option",{key:e.id,value:e.id},(0,o.toDisplayString)(e.name),9,["value"])})),128))],512),[[o.vModelSelect,b.form.category_id]])]),(0,o.createVNode)("div",f,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(b.singleImages[0],(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("div",{key:t,class:"w-28 mr-3"},[(0,o.createVNode)("img",{src:e.path,alt:""},null,8,["src"]),(0,o.createVNode)("button",{onClick:(0,o.withModifiers)((function(e){return w.removeImage(t)}),["prevent"]),class:"bg-red-700 p-1 text-white"},"Excluir",8,["onClick"])])})),128))])]),(0,o.createVNode)("div",g,[(0,o.createVNode)("button",{onClick:t[5]||(t[5]=function(){return w.closeForm&&w.closeForm.apply(w,arguments)}),class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[x,h]),v])],32)])])}},b=y}}]);