"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{664:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("글을 작성하는 공간입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.addmemo}},[t._v("전송")]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:"/api/memo/writeform",method:"post"}},[o("input",{attrs:{type:"text",name:"title"}}),t._v(" "),o("br"),o("textarea",{attrs:{cols:"30",rows:"10",name:"memo"}}),t._v(" "),o("br"),o("input",{attrs:{type:"submit",value:"전송"}})])}],n={data(){return{title:"",memo:""}},methods:{addmemo(){this.$http.post("/api/memo",{data:{title:this.title,memo:this.memo}}).then((t=>console.log(t.data))),this.$router.push("/")}}},m=n,i=o(1),s=(0,i.Z)(m,r,a,!1,null,null,null),l=s.exports}}]);
//# sourceMappingURL=about.3673c17c.js.map