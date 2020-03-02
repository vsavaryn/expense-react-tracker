(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=function(){return r.a.createElement("h2",null,"Expense Tracker")},o=n(1),i=n(5),m=n(2),s=function(e,t){switch(t.type){case"ADD":return Object(m.a)({},e,{transactions:[Object(m.a)({},t.payload)].concat(Object(i.a)(e.transactions))});case"DELETE":return Object(m.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});default:return e}},d={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(s,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,addTransaction:function(e){u({type:"ADD",payload:e})},deleteTransaction:function(e){u({type:"DELETE",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(E).transactions.reduce((function(e,t){return e+t.amount}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"$",e))},b=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"-$",Math.abs(n))))},x=function(e){var t=e.transaction,n=t.id,c=t.text,l=t.amount,u=l<0?"-":"+",o=Object(a.useContext)(E).deleteTransaction;return r.a.createElement("li",{className:l<0?"minus":"plus"},c,r.a.createElement("span",null,u,"$",Math.abs(l)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return o(n)}},"x"))},v=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(x,{key:e.id,transaction:e})}))))},h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],m=u[1],s=Object(a.useContext)(E).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault(),0!==i?(s({id:Date(),text:n,amount:i}),c(""),m(0)):alert("Amount can't be 0")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",value:n,required:!0,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",id:"amount",value:i,required:!0,onChange:function(e){return m(+e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(11);var y=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.9b3fbff4.chunk.js.map