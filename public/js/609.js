(self.webpackChunk=self.webpackChunk||[]).push([[609,195],{195:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>x});var r=t(5166),a={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},l={class:"max-w-md w-full space-y-8"},n=(0,r.createVNode)("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"},null,-1),d=(0,r.createVNode)("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Painel administrativo ",-1),s={key:0,class:"mt-3 bg-red-500 text-center text-white p-2 rounded"},i=(0,r.createVNode)("p",null,"Dados incorretos",-1),c=(0,r.createVNode)("input",{type:"hidden",name:"remember",value:"true"},null,-1),u={class:"rounded-md shadow-sm -space-y-px"},m=(0,r.createVNode)("label",{for:"email",class:"sr-only"},"Email",-1),p=(0,r.createVNode)("label",{for:"password",class:"sr-only"},"Senha",-1),f=(0,r.createVNode)("div",{class:"flex items-center justify-between"},[(0,r.createVNode)("div",{class:"text-sm"},[(0,r.createVNode)("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," Recuperar acesso ")])],-1),g=(0,r.createVNode)("div",null,[(0,r.createVNode)("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,r.createVNode)("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[(0,r.createVNode)("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])]),(0,r.createTextVNode)(" acessar ")])],-1);const h={name:"LoginForm",props:{title:String},data:function(){return{form:{email:null,password:null}}},methods:{handleSubmit:function(){this.$inertia.post(route("admin.login"),this.form,{headers:{"X-Requested-With":"ajax"}})}},render:function(e,o,t,h,x,v){return(0,r.openBlock)(),(0,r.createBlock)("div",a,[(0,r.createVNode)("div",l,[(0,r.createVNode)("div",null,[n,d,e.$page.props.flash.success?((0,r.openBlock)(),(0,r.createBlock)("div",s,[i])):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("form",{onSubmit:o[3]||(o[3]=(0,r.withModifiers)((function(){return v.handleSubmit&&v.handleSubmit.apply(v,arguments)}),["prevent"])),class:"mt-8 space-y-6"},[c,(0,r.createVNode)("div",u,[(0,r.createVNode)("div",null,[m,(0,r.withDirectives)((0,r.createVNode)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return x.form.email=e}),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[r.vModelText,x.form.email]])]),(0,r.createVNode)("div",null,[p,(0,r.withDirectives)((0,r.createVNode)("input",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return x.form.password=e}),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[r.vModelText,x.form.password]])])]),f,g],32)])])}},x=h},9609:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>c});var r=t(5166),a={class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},l={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},n=(0,r.createVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),d={key:1,class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"};var s=t(195);const i={name:"LayoutModal",props:{openModal:Boolean},data:function(){return{}},components:{LoginForm:s.default},methods:{closeModal:function(){this.$emit("closeModal")}},render:function(e,o,t,s,i,c){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("div",a,[(0,r.createVNode)("div",l,[t.openModal?((0,r.openBlock)(),(0,r.createBlock)("div",{key:0,onClick:o[1]||(o[1]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)}),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"})):(0,r.createCommentVNode)("",!0),n,t.openModal?((0,r.openBlock)(),(0,r.createBlock)("div",d,[(0,r.renderSlot)(e.$slots,"default")])):(0,r.createCommentVNode)("",!0)])])])}},c=i}}]);