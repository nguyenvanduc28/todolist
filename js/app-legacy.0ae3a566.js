(function(){var t={7071:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var o=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:{name:"List"}}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:{name:"List"}}},[t._v("Account")])],1)])]),n("router-view")],1)},r=[],c={components:{}},u=c,l=n(1001),d=(0,l.Z)(u,i,r,!1,null,"a509719c",null),m=d.exports,f={name:"App",components:{Home:m}},p=f,v=(0,l.Z)(p,a,s,!1,null,null,null),k=v.exports,h=(n(2713),n(9009)),T=n(81),b=n(6978),g=n(2809),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._l(t.tasks,(function(t,e){return n("Task",{key:e,attrs:{task:t,index:e}})})),n("router-link",{attrs:{to:{name:"Create"}}},[n("button",{staticClass:"btn btn-outline-success"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-plus"}})],1)]),n("router-view")],2)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Viec lam")]),n("th",[t._v("Thoi gian")]),n("th",[t._v("Ngay")])])])])}],y=n(4367),Z=n(4665),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},[n("div",{staticClass:"content",class:{completed:t.task.completed}},[n("p",[t._v(t._s(t.task.content))]),n("p",[t._v(t._s(t.task.time))]),n("p",[t._v(t._s(t.task.date))])]),n("button",{staticClass:"btn btn-outline-success",on:{click:function(e){return t.completeTask(t.index)}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-check"}})],1),n("button",{staticClass:"btn btn-outline-success",on:{click:function(e){return t.deleteTask(t.index)}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash-can"}})],1)])},O=[],C={props:["task","index"],methods:(0,y.Z)({},(0,Z.nv)(["completeTask","deleteTask"]))},$=C,j=(0,l.Z)($,x,O,!1,null,"342d68a2",null),E=j.exports,P={mounted:function(){this.getTasks()},components:{Task:E},computed:(0,y.Z)({},(0,Z.rn)(["tasks"])),methods:(0,y.Z)({},(0,Z.nv)(["getTasks"]))},V=P,N=(0,l.Z)(V,_,w,!1,null,"2f6dfa3d",null),S=N.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",{on:{submit:[function(e){return e.preventDefault(),t.addTask(Object.assign({},t.Task))},function(e){return t.resetForm()}]}},[n("table",{},[n("tbody",[n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Task.content,expression:"Task.content"}],attrs:{type:"text",placeholder:"Nhap noi dung cong viec"},domProps:{value:t.Task.content},on:{input:function(e){e.target.composing||t.$set(t.Task,"content",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Task.time,expression:"Task.time"}],attrs:{type:"time",default:"t"},domProps:{value:t.Task.time},on:{input:function(e){e.target.composing||t.$set(t.Task,"time",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Task.date,expression:"Task.date"}],attrs:{type:"date"},domProps:{value:t.Task.date},on:{input:function(e){e.target.composing||t.$set(t.Task,"date",e.target.value)}}})])])])]),n("button",{staticClass:"btn btn-outline-success"},[t._v("Them")])])])},F=[],H={data:function(){return{Task:{content:"",time:"",date:"",completed:!1}}},methods:(0,y.Z)((0,y.Z)({},(0,Z.nv)(["addTask"])),{},{resetForm:function(){this.Task.content="",this.Task.time="",this.Task.date=""}})},M=H,A=(0,l.Z)(M,L,F,!1,null,"353eddbc",null),B=A.exports,D=[{path:"/list",component:S,name:"List",children:[{path:"create",component:B,name:"Create"}]}],G=D,I={tasks:[]},Q=(n(561),{setTasks:function(t,e){t.tasks=e},addTask:function(t,e){t.tasks.push(e)},completeTask:function(t,e){t.tasks[e].completed=!t.tasks[e].completed},deleteTask:function(t,e){t.tasks.splice(e,1)}}),q=n(3902),z=n.n(q),J=[{content:"Viec lam",time:"00h00",date:"01/03/2022",completed:!1},{content:"Viec lam",time:"00h00",date:"01/03/2022",completed:!0},{content:"Viec lam",time:"00h00",date:"01/03/2022",completed:!1},{content:"Viec lam",time:"00h00",date:"01/03/2022",completed:!1}],K={getTasks:function(t){var e=t.commit;e("setTasks",J)},addTask:function(t,e){var n=t.commit;n("addTask",e)},completeTask:function(t,e){var n=t.commit;n("completeTask",e)},deleteTask:function(t,e){var n=t.commit;n("deleteTask",e)}};o.Z.use(Z.ZP);var R=new Z.ZP.Store({state:I,mutations:Q,getters:z(),actions:K}),U=R;T.vI.add(b.BC0,b.wp6,b.OBu,b.LEp,b.fV7,b.Vui,b.EQ8),o.Z.config.productionTip=!1,o.Z.component("font-awesome-icon",h.GN),o.Z.use(g.Z);var W=new g.Z({mode:"history",routes:G});new o.Z({render:function(t){return t(k)},router:W,store:U}).$mount("#app")},3902:function(){}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],a=t[l][1],s=t[l][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,s<i&&(i=s));if(r){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,i=o[0],r=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var l=c(n)}for(e&&e(o);u<i.length;u++)s=i[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},o=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7071)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.0ae3a566.js.map