(this["webpackJsonpkwitter-starter"]=this["webpackJsonpkwitter-starter"]||[]).push([[0],{17:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),c=n.n(r),i=(n(17),n(18)),o=n.n(i),u=n(26),j=n(10),l=n(15),d=n(19),h=(n(25),"https://kwitter-api-b.herokuapp.com/"),p=function(){return fetch(h+"messages",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))},b=function(){return fetch(h+"users?limit=10",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))},m=function(e){return fetch(h+"users/"+e,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))},O=function(e,t,n){return fetch(h+"users/".concat(t),{method:"PATCH",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},f=n(47),x=n(36),y="LOGIN",g="LOGOUT",v="GET_MESSAGES",N="RANDOM_USERS",C="SELECTED_USER",S="CLOSE_MODAL",k="OPEN_MODAL",E="CLOSE_MODAL2",A="OPEN_MODAL2",w="PROFILE_PIC",I=Object(f.a)(Object(x.devtools)(Object(x.redux)((function(e,t){switch(t.type){case y:return{user:t.payload};case"SET_PASSWORD":return{password:t.payload};case g:return{user:{}};case v:return{messageList:t.payload};case N:return{userList:t.payload};case C:return{selectedUser:t.payload};case k:return{isModalOpen:!0};case S:return{isModalOpen:!1};case A:return{isModal2Open:!0};case E:return{isModal2Open:!1};case w:return{profilePic:t.payload};default:return e}}),{user:{},password:"",profilePic:"",messages:[],messageList:[],userList:[],selectedUser:{user:{pictureLocation:"default",username:"default",displayName:"default",about:"default",updatedAt:"default",createdAt:"default"}},isModalOpen:!1,isModal2Open:!1}))),R=n(27),L=n.n(R),M=n(1),U=function(e){var t=e.messageData,n=e.messageId,s=e.likeId,r=Object(a.useState)(t.likes.length),c=Object(j.a)(r,2),i=c[0],o=c[1],u=I((function(e){return e.user.token})),p=I((function(e){return e.dispatch})),b=I((function(e){return e.isModalOpen})),O=I((function(e){return e.selectedUser}));return Object(a.useEffect)((function(){}),[i]),Object(M.jsxs)("div",{className:"messageCardContainer",children:[Object(M.jsxs)(l.a,{className:"text-center",style:{margin:"2%",borderRadius:"2%",boxShadow:"8px 8px black",height:"200px"},children:[Object(M.jsxs)(l.a.Body,{children:[Object(M.jsx)(l.a.Text,{className:"messageUsername",children:t.username}),Object(M.jsx)(l.a.Text,{className:"messageMessage",children:t.text}),Object(M.jsxs)(l.a.Text,{className:"messageLikes",children:["Likes: ",i]}),Object(M.jsx)(d.a,{className:"likeButton",variant:"primary",onClick:function(){(function(e,t){return fetch(h+"likes",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+e},body:JSON.stringify({messageId:t})}).then((function(e){return e.json()}))})(u,n).then(o((function(e){return e+1})))},children:"Like"}),Object(M.jsx)(d.a,{className:"unlikeButton",variant:"primary",onClick:function(){var e=s.filter((function(e){return"notLiked"!==e}));e&&(!function(e,t){fetch(h+"likes/"+t,{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()}))}(u,e),o((function(e){return e-1})))},children:"unLike"}),Object(M.jsx)(d.a,{size:"sm",className:"infoButton",variant:"primary",onClick:function(){m(t.username).then((function(e){return p({type:C,payload:e})})),p({type:k}),console.log(O)},children:"View User Info"})]}),Object(M.jsx)(l.a.Footer,{className:"text-muted",children:t.createdAt.slice(0,10)})]}),Object(M.jsx)(L.a,{style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.15)"},content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",width:"30%",height:"40%",transform:"translate(-40%, -10%)"}},isOpen:b,children:Object(M.jsxs)("div",{className:"modalContentsContainer",children:[Object(M.jsx)("img",{src:"".concat(h,"users/").concat(O.user.username,"/picture"),alt:""}),Object(M.jsxs)("p",{children:["Name : ",O.user.username]}),Object(M.jsxs)("p",{children:["AKA : ",O.user.displayName]}),Object(M.jsxs)("p",{children:["About Me : ",O.user.about]}),Object(M.jsxs)("p",{children:["User Since : ",O.user.createdAt.slice(0,10)," "]}),Object(M.jsxs)("p",{children:["Last Update : ",O.user.updatedAt.slice(0,10)]}),Object(M.jsx)("button",{className:"modalButton",onClick:function(){p({type:S})},children:"X"})]})})]})},q=function(){var e=I((function(e){return e.messageList})),t=I((function(e){return e.user})),n=I((function(e){return e.dispatch}));return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,n({type:v,payload:t.messages});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,e]),Object(M.jsx)("section",{className:"messageList",children:e.map((function(e){return Object(M.jsx)(U,{likeId:e.likes.map((function(e){return e.username===t.username?e.id:"notLiked"})),messageData:e,messageId:e.id},e.id)}))})},T=n(41),B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEUilNIdd6v///86iacbeanz+/QXdawhldL///wceKn8//8dd6z///j///sjk9P///f//P8lktT2//z///Mmk80ljMT/+/f/9/4hlc8ZeqgajtEqksgbl9f8//X2/+7/+/v//uwAbqIAbacAcp8agLQshbEAitAknNI4ptdaqdhfqtSWyOHB4evg8fDs9frS5Oyk0d9os9d4t9Mckt46ota03+fC5ffX8vaGw+q12uvM6OlFl8cSkODc6uLS4eTt8/ILksGfxuNup8Xo7viGrMW/1d2iyd2z0tyLssJ0u9+01ddXkrra4O54o8VjnLshfpd1rbwEdbYairkngKOFwtUnmcCxx+S51OlworBhudOZ0OYoosMAaJ+Dtd1Ji7yfztnn35DFAAAMlElEQVR4nO2dC1PbxhqGJSFppZW01h1ZMjHGJk7A4ABpCKQnJhcMaVJOU9qTnqan/f//4nxrShIuNt6VxModvTOdaWc6RE+++96QpFq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVeuqWoRIkufBv6EkSSQpDCXieQh5oj+sKKEsTBBJH0b9R48eP37cD9M9gpIs9Fqiv6wokZRkG5uDLcNeDRRFsZXt4ZOdvreX9kV/WW4hiUghSZPd77RGw7Z938cGyLHhv7SXm0+Jh8BfCRL9nXnk7ZGn45FymwzH/24jglBc6HD00v6B1vBvJXSdIG48e5yizCOiv5Nf0aaGnWDlVkJFwRivNg4yL1lQN81Q9Hi/0Y4VbNzOp7RtB2N7e5eGYib6czmUpc81H08x3zeKVw76R9me6M/l0UGjPQcgxrEzzLzFsyHZO1xZmQNQcWys2Psvvl+wWEzC/r/moLuUuzJ66iXpItmRJC9jBsJAC0Yv9rIFauLI0acHtyfQ29V2NW0/Q4tSFkkiha8abRZCv91w7WcpQd6CRCPamSfFXJVhK5spWowWFaVH2wEHYcPfaGULQShJ41VmQKiLTrAvoeoTeijbe+z4LEH4VcFzsgBjBvHSZ40pnehdMkYLYEMU7m0YscOeaajc4FX1iz458o5txeYjbPujSDTAnULeU42LjsrGjddR1SuGJ71qcBMqOBh2oiQUDTFT3tEbm5/QdhRT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",F=function(){var e=I((function(e){return e.userList}));return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(T.a,{className:"carouselContainer",children:e.map((function(e,t){return Object(M.jsx)(T.a.Item,{children:Object(M.jsxs)(l.a,{className:"userCards",children:[Object(M.jsx)(l.a.Img,{variant:"top",src:e.pictureLocation?"https://kwitter-api-b.herokuapp.com/users/".concat(e.username,"/picture"):B,style:{height:"339px"}}),Object(M.jsxs)(l.a.Body,{children:[Object(M.jsx)(l.a.Title,{children:e.displayName}),Object(M.jsx)(l.a.Text,{style:{height:"80px"},children:e.about?e.about:"One thing about me, I haven't gotten around to updating my about me info yet"})]})]})},t)}))})})},D=function(){return Object(M.jsxs)("div",{className:"header",children:[" ",Object(M.jsx)("h1",{children:"KENZER"})]})},P=n(13),V=n(7);var W=function(){var e=Object(V.f)(),t=I((function(e){return e.user})),n=I((function(e){return e.dispatch}));return Object(M.jsxs)("div",{id:"menu",children:[Object(M.jsx)(P.b,{to:"/home",children:"Home"}),Object(M.jsx)(P.b,{to:"/profilepage",children:"Profile"}),t.token&&Object(M.jsx)(P.b,{onClick:function(){var a;(a=t.token,fetch(h+"auth/logout",{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.json()}))).then((function(){return n({type:g})})).then(void e.push("/"))},children:"Logout"})]})},z=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],r=I((function(e){return e.user})),c=Object(a.useState)(""),i=Object(j.a)(c,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){fetch("".concat(h,"users/").concat(r.username,"/picture")).then((function(e){return u(e)}))}),[r.username]),Object(M.jsx)("section",{className:"messageItem",children:Object(M.jsxs)("div",{className:"messageInputContainer",children:[200===o.status?Object(M.jsx)("img",{src:o.url,alt:""}):Object(M.jsx)("img",{src:B,alt:""}),Object(M.jsx)("input",{style:{border:"none"},type:"text",placeholder:"what are you thinking?",onChange:function(e){return t=e.target.value,void s(t);var t},value:n}),Object(M.jsx)("button",{className:"post-message",onClick:function(){!function(e,t){fetch(h+"messages",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t},body:JSON.stringify({text:e})}).then((function(e){return e.json()}))}(n,r.token),s("")},children:"ZEET"})]})})};var Q=function(){return Object(M.jsxs)("section",{className:"homePage",children:[Object(M.jsx)("div",{className:"leftContainer",children:Object(M.jsx)(W,{})}),Object(M.jsxs)("div",{className:"middleContainer",children:[Object(M.jsx)(D,{}),Object(M.jsx)(z,{}),Object(M.jsx)(q,{})]}),Object(M.jsx)("div",{className:"rightContainer",children:Object(M.jsx)(F,{})})]})},H=n(28),G=n(39);var J=function(){var e=Object(V.f)(),t=I((function(e){return e.dispatch})),n=Object(a.useState)({username:"",password:""}),s=Object(j.a)(n,2),r=s[0],c=s[1],i=function(n){var a,s;n.preventDefault(),(a=r.username,s=r.password,fetch(h+"auth/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:a,password:s})}).then((function(e){return e.json()}))).then((function(e){return t({type:y,payload:e})})).then(void e.push("/home"))},o=function(e){var t=e.target.name,n=e.target.value;c((function(e){return Object(G.a)(Object(G.a)({},e),{},Object(H.a)({},t,n))}))};return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("form",{id:"login-form",onSubmit:i,children:[Object(M.jsx)("label",{htmlFor:"username",children:"Username"}),Object(M.jsx)("input",{type:"text",name:"username",value:r.username,autoFocus:!0,required:!0,onChange:o}),Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)("input",{type:"password",name:"password",value:r.password,required:!0,onChange:o}),Object(M.jsx)("button",{type:"submit",onSubmit:i,children:"Login"}),Object(M.jsxs)("p",{children:["Click",Object(M.jsx)(P.b,{to:"/createNewUser",c:!0,children:"Here"}),"to sign up"]})]})})},X=(n(69),function(){var e=I((function(e){return e.user}));return Object(M.jsx)("div",{className:"loginScreen",children:Object(M.jsxs)("section",{className:"loginContainer",children:[Object(M.jsx)("h2",{children:"Welcome To"}),Object(M.jsx)("h2",{children:"Kenzer"}),!e.token&&Object(M.jsx)(J,{})]})})});var K=function(e){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("p",{children:["Page not found for ",e.location.pathname]}),Object(M.jsx)(P.b,{to:"/",children:"Go Home"})]})},Y=n(9),Z=n(21),_=n(40),$=n(23),ee=(n(70),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(j.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(""),l=Object(j.a)(u,2),p=l[0],b=l[1];return Object(M.jsx)("div",{className:"newUserScreen",children:Object(M.jsxs)("div",{className:"newUserFormContainer",children:[Object(M.jsx)("h1",{children:"Create New User"}),Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(Y.a.Row,{className:"align-items-center",children:Object(M.jsxs)(Z.a,{xs:"auto",children:[Object(M.jsx)(Y.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Name"}),Object(M.jsx)(Y.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"DisplayName",onChange:function(e){return o(e.target.value)}})]})}),Object(M.jsx)(Y.a.Row,{className:"align-items-center",children:Object(M.jsxs)(Z.a,{xs:"auto",children:[Object(M.jsx)(Y.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Username"}),Object(M.jsx)(_.a,{className:"mb-2",children:Object(M.jsx)($.a,{id:"inlineFormInputGroup",placeholder:"Username",onChange:function(e){return s(e.target.value)}})})]})}),Object(M.jsx)(Y.a.Row,{className:"align-items-center",children:Object(M.jsxs)(Z.a,{xs:"auto",children:[Object(M.jsx)(Y.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Username"}),Object(M.jsx)(_.a,{className:"mb-2",children:Object(M.jsx)($.a,{id:"inlineFormInputGroup",type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})})]})}),Object(M.jsx)(Y.a.Row,{style:{justifyContent:"center"},children:Object(M.jsx)(Z.a,{xs:"auto",children:Object(M.jsx)(P.b,{to:"/",children:Object(M.jsx)(d.a,{type:"submit",className:"mb-2",onClick:function(){return function(e,t,n){return fetch(h+"users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,displayName:t,password:n})}).then((function(e){return e.json()}))}(n,i,p)},children:"Submit"})})})})]})]})})}),te=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),c=Object(j.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(""),l=Object(j.a)(u,2),p=l[0],b=l[1],f=Object(a.useState)(""),x=Object(j.a)(f,2),y=x[0],g=x[1],v=I((function(e){return e.profilePic})),N=I((function(e){return e.user})),C=I((function(e){return e.isModal2Open})),S=I((function(e){return e.dispatch})),k=function(e){!function(e,t,n){var a=new FormData;a.append("picture",n),fetch(h+"users/".concat(t,"/picture"),{method:"PUT",headers:{Authorization:"Bearer "+e,ContentType:"multipart/form-data"},body:a}).then((function(e){return e.json()}))}(N.token,N.username,i),S({type:w,payload:"https://kwitter-api-b.herokuapp.com/users/".concat(N.username,"/picture")})};Object(a.useEffect)((function(){m(N.username).then((function(e){return s(e.user)})),k()}),[y,p]);return Object(M.jsxs)("div",{className:"profileContainer",children:[Object(M.jsx)("img",{className:"profilePic",src:n.pictureLocation?v:B,alt:""}),Object(M.jsxs)("div",{className:"profileBody",children:[Object(M.jsxs)("div",{children:["NAME : ",n.displayName]}),Object(M.jsxs)("div",{children:["About Me :",n.about?n.about:" One thing about me, I haven't gotten around to updating my about me info yet"]}),Object(M.jsx)("input",{type:"file",onChange:function(e){return o(e.target.files[0])}}),Object(M.jsx)("button",{onClick:k,children:"Update Photo"}),Object(M.jsx)("button",{onClick:function(){return S({type:A})},children:"Change User Info"})]}),Object(M.jsx)(L.a,{style:{content:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",right:"auto",bottom:"auto",marginRight:"-50%",width:"20%",height:"40%"}},isOpen:C,children:Object(M.jsxs)("div",{children:[Object(M.jsx)("button",{className:"modalButton",onClick:function(){S({type:E})},children:"X"}),Object(M.jsxs)(Y.a,{onSubmit:function(e){e.preventDefault();var t={about:p};O(N.token,N.username,t),b("")},children:[Object(M.jsxs)(Y.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(Y.a.Label,{children:"About"}),Object(M.jsx)(Y.a.Control,{onChange:function(e){return b(e.target.value)},value:p,type:"text",placeholder:"About me..."})]}),Object(M.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(M.jsxs)(Y.a,{onSubmit:function(e){e.preventDefault();var t={displayName:y};O(N.token,N.username,t),g("")},children:[Object(M.jsxs)(Y.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(Y.a.Label,{children:"Display Name"}),Object(M.jsx)(Y.a.Control,{onChange:function(e){return g(e.target.value)},value:y,type:"text",placeholder:"my real name"})]}),Object(M.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})]})},ne=function(){I((function(e){return e.user}));return Object(M.jsxs)("section",{className:"profilePage",children:[Object(M.jsx)("div",{className:"leftContainer",children:Object(M.jsx)(W,{})}),Object(M.jsx)(te,{}),Object(M.jsx)("div",{className:"rightContainer",children:Object(M.jsx)(F,{})})]})};var ae=function(){var e=I((function(e){return e.dispatch}));return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e({type:N,payload:n.users});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)(V.c,{children:[Object(M.jsx)(V.a,{exact:!0,path:"/",component:X}),Object(M.jsx)(V.a,{path:"/home",component:Q}),Object(M.jsx)(V.a,{path:"/createNewUser",component:ee}),Object(M.jsx)(V.a,{path:"/profilepage",component:ne}),Object(M.jsx)(V.a,{component:K})]})})};c.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(P.a,{basename:"/kwitter-Bwardstories",children:Object(M.jsx)(ae,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.9848c55e.chunk.js.map