(this.webpackJsonpstart=this.webpackJsonpstart||[]).push([[0],{43:function(e,t,c){},45:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(21),n=c.n(s),r=c(8),i=c(4),l=c(7),o=c.n(l),j=c(15),d=c(16),b=(c(43),c(19),c.p+"static/media/abhaya.12c96a09.png"),h=c(59),m=c(0);var O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(d.a)(n,2),i=r[0],l=r[1],O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(c=e.sent,s(c.name),l(!0),200!==!t.status){e.next=12;break}throw new Error(t.error);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(m.jsxs)("div",{className:"container-fluid img-fluid abs",children:[Object(m.jsxs)("div",{className:"heading",children:[Object(m.jsxs)("div",{className:"h1",children:[Object(m.jsx)("h1",{children:Object(m.jsxs)(h.a,{variant:"secondary",children:["Welcome ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:c})]})}),Object(m.jsx)("h2",{children:i?"Happy to See You":"I am a Web Devloper"})]}),Object(m.jsx)("div",{className:"img",children:Object(m.jsx)("img",{src:b,alt:"abhaya",className:"image"})})]}),Object(m.jsxs)("div",{className:"center",children:[Object(m.jsx)("button",{children:"Let's Go--"}),Object(m.jsx)("h2",{children:"I am a Engineere and A Web Devloper"}),Object(m.jsx)("p",{children:"I am studing at Collecge of Engineering and Technology , Bhubaneswar"}),Object(m.jsx)("h3",{children:"Web development is quickly becoming one of the most attractive and best-paid career choices in the modern world. But what is a web developer and what exactly does one do?"})]})]})},x=(c(45),c(60)),u=c(62),p=c(61);console.log("PROFILE DATA COMMING");var v=function(){var e=Object(i.f)(),t=Object(a.useState)(""),c=Object(d.a)(t,2),s=c[0],n=c[1],r=function(){var t=Object(j.a)(o.a.mark((function t(){var c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Heelooo abhaya"),t.prev=1,console.log("PROFILE DATA COMMING"),t.next=5,fetch("/about",{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}});case 5:return c=t.sent,t.next=8,c.json();case 8:if(a=t.sent,n(a),200!==!c.status){t.next=13;break}throw new Error(c.error);case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0),e.push("/login");case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"container emp-profile",children:Object(m.jsxs)("form",{method:"GET",children:[Object(m.jsxs)("div",{className:"row header",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(x.a,{className:"profile-img",src:b,alt:"Abhaya",thumbnail:!0,roundedCircle:!0})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"profile-head",children:[Object(m.jsx)("h5",{children:s.name}),Object(m.jsx)("h6",{children:s.work}),Object(m.jsxs)("p",{className:"profile-ratting mt-1 mb-5",children:["RANKING",Object(m.jsx)("span",{children:"1/10"})]}),Object(m.jsxs)(u.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example",children:[Object(m.jsxs)(p.a,{eventKey:"home",title:"Home",children:[Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"User Id"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s._id})})]}),Object(m.jsxs)("div",{className:"row mt-3",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Name"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.name})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Email"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.email})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Phone"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.phone})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Profession"})}),Object(m.jsx)("div",{className:"col-md-6 ",children:Object(m.jsx)("p",{children:s.work})})]})]}),Object(m.jsxs)(p.a,{eventKey:"profile",title:"Profile",children:[Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"User Id"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:"1234"})})]}),Object(m.jsxs)("div",{className:"row mt-3",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Name"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:"Barsa Rani Sahoo"})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Email"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:"abhayasahoolk@gmail.com"})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Phone"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:"9148557181"})})]}),Object(m.jsxs)("div",{className:"row mt-1",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("lable",{children:"Profession"})}),Object(m.jsx)("div",{className:"col-md-6 ",children:Object(m.jsx)("p",{children:"Student"})})]})]})]})]})}),Object(m.jsx)("div",{className:"col-md-2",children:Object(m.jsx)("input",{type:"submit",name:"btnAddmore",className:"profile-edit-btn",value:"Edit Profile"})})]}),Object(m.jsx)("div",{className:"row header1",children:Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"profile-work",children:[Object(m.jsx)("h5",{children:"WORK LINK"}),Object(m.jsx)("a",{href:"https://github.com/abhaya-kumar-sahoo",target:"_abhaya",children:"Github"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.facebook.com/abhaya.lk/",target:"_abhaya",children:"Facebook"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.instagram.com/abhaya540/?hl=en",target:"_abhaya",children:"Instagram"})]})})})]})})})},f=c(17),N=c(12);var g=function(){var e=Object(a.useState)({name:"",email:"",phone:"",message:""}),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(e.sent,s(Object(N.a)(Object(N.a)({},c),{},{name:c.name,email:c.email,phone:c.phone})),200!==!t.status){e.next=11;break}throw new Error(t.error);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}),[]);var r=function(e){var t=e.target.name,a=e.target.value;s(Object(N.a)(Object(N.a)({},c),{},Object(f.a)({},t,a)))},i=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,n,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=c.name,n=c.email,r=c.phone,i=c.message,e.next=4,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:n,phone:r,message:i})});case 4:return l=e.sent,e.next=7,l.json();case 7:e.sent?(alert("Message Send Successfully"),s(Object(N.a)(Object(N.a)({},c),{},{message:""}))):console.log("Message Not Sent");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-lg-10 offset-lg-1 d-flex justify-content-between",children:[Object(m.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center",children:[Object(m.jsx)("img",{src:"",alt:"Phone"}),Object(m.jsx)("div",{className:"contact_info_content",children:"Phone"}),Object(m.jsx)("div",{className:"contact_info_content",children:"9348557381"})]}),Object(m.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center",children:[Object(m.jsx)("img",{src:"",alt:"Phone"}),Object(m.jsx)("div",{className:"contact_info_content",children:"Email"}),Object(m.jsx)("div",{className:"contact_info_content",children:"abhayasahooab1234@gmail.com"})]}),Object(m.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center",children:[Object(m.jsx)("img",{src:"",alt:"Phone"}),Object(m.jsx)("div",{className:"contact_info_content",children:"Address"}),Object(m.jsx)("div",{className:"contact_info_content",children:"Bhadrak"})]})]})})}),Object(m.jsx)("div",{className:"contact_form",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-lg-10 offset-lg-1",children:Object(m.jsxs)("div",{className:"contact_form_title",children:["Get In Touch",Object(m.jsxs)("form",{method:"POST",id:"contact_form",children:[Object(m.jsxs)("div",{className:"contact_form_name d-flex justify-content-between align-item-center",children:[Object(m.jsx)("input",{id:"contact_form_name",type:"text",className:"contact_fprm_name input_feild",name:"name",onChange:r,value:c.name,placeholder:"Your Name",required:"true"}),Object(m.jsx)("input",{id:"contact_form_email",type:"email",className:"contact_fprm_email input_feild",name:"email",onChange:r,value:c.email,placeholder:"Your Email",required:"true"}),Object(m.jsx)("input",{id:"contact_form_phone",type:"tel",className:"contact_fprm_phone input_feild",name:"phone",onChange:r,value:c.phone,placeholder:"Your Phone Number",required:"true"})]}),Object(m.jsx)("div",{className:"contact_form_text mt-5",children:Object(m.jsx)("textarea",{className:"text_feild contact_form_message",name:"message",onChange:r,value:c.message,placeholder:"Type Your Message",id:"",col:"50",rows:"10"})}),Object(m.jsx)("div",{className:"contact_form_button",children:Object(m.jsx)("button",{type:"submit",onClick:i,className:"button contact_submit_button",children:"Send Message"})})]})]})})})})})]})};var w=function(){var e=Object(i.f)();return Object(a.useEffect)((function(){fetch("/logout",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(t){if(e.push("/",{replace:!0}),200===!t.status)throw new Error(t.error)})).catch((function(e){console.log(e)}))})),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Logout"})})};c(55);var y=function(){var e,t,c=Object(i.f)(),s=Object(a.useState)({email:"",password:""}),n=Object(d.a)(s,2),r=n[0],l=n[1],b=function(c){e=c.target.name,t=c.target.value,l(Object(N.a)(Object(N.a)({},r),{},Object(f.a)({},e,t)))},h=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,s,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.email,s=r.password,t.preventDefault(),e.next=4,fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:s})});case 4:n=e.sent,i=n.json(),400!==n.status&&i?(window.alert("Login Successful "),c.push("/")):window.alert("Invalid Login");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)("div",{className:"container box1",children:[Object(m.jsx)("h3",{children:"Sign In"}),Object(m.jsxs)("form",{method:"POST",children:[Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"text",placeholder:"Email",name:"email",onChange:b,value:r.email})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:b,value:r.password})}),Object(m.jsx)("button",{className:"button",type:"submit",onClick:h,children:Object(m.jsx)("h4",{children:"Sign In"})})]})]})})})};var _=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(r.b,{className:"navbar-brand",to:"/",children:"PROFILE"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ",to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ",to:"/about",children:"About"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ",to:"/login",children:"Login"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ",to:"signup",children:"Signup"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ",to:"/logout",children:"Logout"})})]})})]})})})};c(56);var k=function(){var e,t,c=Object(i.f)(),s=Object(a.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),n=Object(d.a)(s,2),r=n[0],l=n[1],b=function(c){e=c.target.name,t=c.target.value,l(Object(N.a)(Object(N.a)({},r),{},Object(f.a)({},e,t)))},h=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,s,n,i,l,j,d,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.name,s=r.email,n=r.phone,i=r.work,l=r.password,j=r.cpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:s,phone:n,work:i,password:l,cpassword:j})});case 4:return d=e.sent,e.next=7,d.json();case 7:422!==(b=e.sent).status&&b?(window.alert("Sucessesful Registration"),console.log("Sucessesful Registration"),c.push("/login")):(window.alert("Invalid Registration"),console.log("Invalid Registration"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)("div",{className:"container box",children:[Object(m.jsx)("h3",{children:"Registartion Form"}),Object(m.jsxs)("form",{method:"POST",children:[Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"text",placeholder:"Full Name",name:"name",onChange:b,value:r.name})}),Object(m.jsx)("div",{class:"input",children:Object(m.jsx)("input",{type:"text",placeholder:"Email",name:"email",onChange:b,value:r.email})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"tel",placeholder:"Phone",name:"phone",onChange:b,value:r.phone})}),Object(m.jsx)("div",{class:"input",children:Object(m.jsx)("input",{type:"text",placeholder:"Work",name:"work",onChange:b,value:r.work})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:b,value:r.password})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"password",placeholder:"Conform Password",name:"cpassword",onChange:b,value:r.cpassword})}),Object(m.jsx)("button",{className:"button",type:"submit",onClick:h,children:"Signup"})]})]})})},C=c(26);var S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"404"}),Object(m.jsx)("h1",{children:"Page is Not Available "}),Object(m.jsx)(C.a,{to:"/",children:"GO BACK TO HOME"})]})};var E=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(_,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(O,{})}),Object(m.jsx)(i.a,{path:"/about",children:Object(m.jsx)(v,{})}),Object(m.jsx)(i.a,{path:"/contact",children:Object(m.jsx)(g,{})}),Object(m.jsx)(i.a,{path:"/login",children:Object(m.jsx)(y,{})}),Object(m.jsx)(i.a,{path:"/signup",children:Object(m.jsx)(k,{})}),Object(m.jsx)(i.a,{path:"/logout",children:Object(m.jsx)(w,{})}),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(S,{}),Object(m.jsx)(w,{})]})]})]})};n.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8652a4bd.chunk.js.map