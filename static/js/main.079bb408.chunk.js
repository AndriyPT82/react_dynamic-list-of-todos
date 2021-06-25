(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{60:function(e,t,a){e.exports=a(73)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=a(33),l=a(34),i=a(40),u=a(39),d=a(108),m=(a(65),a(66),a(14)),p=a(52),f=a(111),h=a(107),v=a(113),b=a(109),E=a(110),_=a(46),y=a.n(_),j=(a(67),r.a.memo((function(e){var t=e.todos,a=e.setUserId,c=Object(n.useState)({todosFromServer:t,title:"",filterBy:""}),s=Object(p.a)(c,2),o=s[0],l=s[1],i=o.todosFromServer,u=o.title,d=o.filterBy,_=i.filter((function(e){return"boolean"!==typeof d?e.title.includes(u):e.title.includes(u)&&e.completed===d}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__controlers"},r.a.createElement(f.a,{id:"outlined-basic",label:"Search for ...",variant:"outlined",value:o.title,onChange:function(e){return l(Object(m.a)(Object(m.a)({},o),{},{title:e.target.value}))}}),r.a.createElement(h.a,{variant:"outlined",style:{width:150}},r.a.createElement(v.a,{id:"demo-simple-select-outlined-label"},"Filter By"),r.a.createElement(b.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Filter By",value:o.filterBy,onChange:function(e){return l(Object(m.a)(Object(m.a)({},o),{},{filterBy:e.target.value}))}},r.a.createElement(E.a,{value:"all"},"All"),r.a.createElement(E.a,{value:!0},"Completed"),r.a.createElement(E.a,{value:!1},"Active"))),r.a.createElement("button",{type:"button",style:{width:150},onClick:function(){return l(Object(m.a)(Object(m.a)({},o),{},{todosFromServer:t.sort((function(e,t){return Math.random()-.5}))}))}},"Randomize")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},_.map((function(e){var n=e.completed,c=e.userId,s=e.title,i=e.id;return r.a.createElement("li",{key:i,className:y()("TodoList__item",{"TodoList__item--checked":n,"TodoList__item--unchecked":!n})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"completed",checked:n,onChange:function(){e.completed=!n,l(Object(m.a)(Object(m.a)({},o),{},{todosFromServer:t}))}}),r.a.createElement("p",null,s)),r.a.createElement("button",{type:"button",className:" TodoList__user-button TodoList__user-button--selected button ",onClick:function(){return a(c)}},"User\xa0#",c))})))))}))),I=a(31),k=a.n(I),O=a(42),U=(a(72),function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("404 (Not Found)");if(!e.headers.get("content-type").includes("application/json"))throw new Error("no compatible data");return e.json()})).catch((function(e){return e}))}),N=function(e){return U("/users/".concat(e)).then((function(e){return e}))},C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.userId,e.next=3,N(t);case 3:a=e.sent,this.setState({user:a.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(O.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.userId,t.userId!==a){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,N(a);case 5:n=e.sent,this.setState({user:n.data});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user||"",t=e.id,a=e.name,n=e.email,c=e.phone;return r.a.createElement(r.a.Fragment,null,this.state.user&&r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t)),r.a.createElement("h3",{className:"CurrentUser__name"},a),r.a.createElement("p",{className:"CurrentUser__email"},n),r.a.createElement("p",{className:"CurrentUser__phone"},c),r.a.createElement("button",{type:"button",className:"CurrentUser__clear",onClick:this.props.clearSelectedUserId},"Clear")))}}]),a}(r.a.Component),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.setUserId=function(t){e.state.userId!==t&&e.setState({selectedUserId:t})},e.clearSelectedUserId=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){U("/todos").then((function(e){return e})).then((function(t){return e.setState({todos:t.data})}))}),2e3)}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},t.length?r.a.createElement(j,{todos:t,setUserId:this.setUserId}):r.a.createElement(d.a,null)),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(C,{userId:a,clearSelectedUserId:this.clearSelectedUserId}):r.a.createElement("span",null,r.a.createElement("img",{className:"icon-user",src:"https://as1.ftcdn.net/v2/jpg/02/47/24/66/1000_F_247246603_CKyITrdJiCdtQ3pesJhsVWfMRGc20af2.jpg",alt:"icon-user"}),r.a.createElement("h2",null,"No user selected")))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.079bb408.chunk.js.map