(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(28),r=t.n(l),i=(t(83),t(12)),s=t(51),c=t.n(s),d=t(68),u=t(148),h=t(145),b=t(146),m=t(2),j="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"";var p=function(){var e=Object(d.a)({initialValues:{name:"",email:"",address:""},onSubmit:function(e){console.log("values: ",e),c.a.post("".concat(j,"/api/v1/profile"),{name:e.name,email:e.email,address:e.address}).then((function(e){console.log(e.data),f(!p)}))}}),a=Object(n.useState)([]),t=Object(i.a)(a,2),o=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),p=s[0],f=s[1];return Object(n.useEffect)((function(){return c.a.get("".concat(j,"/api/v1/profile")).then((function(e){console.log(e.data),l(e.data)})),function(){console.log("cleanup")}}),[p]),Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{onSubmit:e.handleSubmit,children:Object(m.jsxs)(u.a,{spacing:2,children:[Object(m.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"name",variant:"outlined",name:"name",value:e.values.name,onChange:e.handleChange,error:e.touched.website&&Boolean(e.errors.website),helperText:e.touched.website&&e.errors.website}),Object(m.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"email",variant:"outlined",name:"email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(m.jsx)(h.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Address",variant:"outlined",type:"address",name:"address",value:e.values.address,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(m.jsx)(b.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Add"})]})}),o.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:e.name}),Object(m.jsx)("h3",{children:e.email}),Object(m.jsx)("h3",{children:e.address})]})}))]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(a){var t=a.getCLS,n=a.getFID,o=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),o(e),l(e),r(e)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),f()},83:function(e,a,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.123121f8.chunk.js.map