(this.webpackJsonpcicd=this.webpackJsonpcicd||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},135:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=(n(127),n(128),n(60)),s=n(201),l=n(202),d=n(197),u=n(28),b=n(225),j=n(109),p=n(227),O=n(159),f=n(103),h=n.n(f),m=n(17),x=n(102),g=n(35),v=Object(g.a)({name:"food",initialState:{foodInfo:[],input:"",options:[],foodItem:"",currentWeight:0,targetWeight:0,calorie:0},reducers:{foodAutoCompleteRequest:function(e,t){e.input=t.payload},foodOptionsReceived:function(e,t){e.options=t.payload},fooditemsRequest:function(e,t){e.foodItem=t.payload},foodItemsReceived:function(e,t){var n=new Map;e.foodInfo=t.payload.hints.filter((function(e){if(n.has(e.food.label)){if(n.has(e.food.label))return!1}else n.set(e.food.label,1);return e.food.image})).map((function(e){return e.food.nutrients=Object(x.a)({image:e.food.image,label:e.food.label,foodId:e.food.foodId},e.food.nutrients),e}))},foodApiErrorReceived:function(e,t){return e}}}),C=v.reducer,E=v.actions,y=n(5),S=Object(d.a)((function(e){return Object(b.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})}));function _(){var e=S(),t=Object(m.b)(),n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],o=r[1];return Object(y.jsxs)(j.a,{component:"form",className:e.root,onSubmit:function(e){e.preventDefault()},children:[Object(y.jsx)(p.a,{className:e.input,placeholder:"Search Your Meal",inputProps:{"aria-label":"search meal ingr"},onChange:function(e){return o(e.target.value)}}),Object(y.jsx)(O.a,{type:"button",className:e.iconButton,"aria-label":"search",onClick:function(){return e=c,void t(E.foodAutoCompleteRequest(e));var e},children:Object(y.jsx)(h.a,{})})]})}var R=function(e){return e.survey.complete},k=Object(d.a)({root:{background:"#FFE2EC",width:"100%"},grow:{flexGrow:1,color:"#F60057"}});function A(){var e=k(),t=Object(m.c)(R);return Object(y.jsx)(s.a,{position:"static",className:e.root,children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(i.a,{variant:"h6",color:"inherit",className:e.grow,children:"Calorie Simulator"}),t?Object(y.jsx)(_,{}):null]})})}var P=function(e){return e.simulator.targetWeight},T=function(e){return e.simulator.beforeImage},w=function(e){return e.simulator.afterImage},I=n(223),D=(n(135),n(226));function N(){var e=Object(m.c)(T),t=Object(m.c)(w),n=Object(a.useState)(!0),r=Object(u.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),l=s[0],d=s[1];return Object(y.jsxs)("div",{style:{padding:"2%",display:"flex",justifyContent:"center"},children:[c&&Object(y.jsx)(D.a,{title:"Current Body Shape",children:Object(y.jsx)("img",{src:e,alt:"current","aria-label":"current",onClick:function(){return d(!0)}})}),Object(y.jsx)(I.a,{in:l,timeout:300,classNames:"alert",unmountOnExit:!0,onEnter:function(){return o(!1)},onExited:function(){return o(!0)},children:Object(y.jsx)(D.a,{title:"Target Body Shape",children:Object(y.jsx)("img",{src:t,alt:"goal","aria-label":"current",onClick:function(){return d(!1)}})})})]})}var F=n(207),W=n(206),K=n(204),H=n(205),L=function(e){return e.food.input},B=function(e){return e.food.options},q=function(e){return e.food.foodItem},U=function(e){return e.food.foodInfo},M=Object(d.a)((function(e){return Object(b.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{width:"300px"}})}));function V(){var e=M(),t=Object(m.b)(),n=Object(m.c)(B),a=n.map((function(e,n){return Object(y.jsx)(K.a,{button:!0,children:Object(y.jsx)(H.a,{primary:e,onClick:function(){return n=e,void t(E.fooditemsRequest(n));var n}})},n)}));return 0===n.length?null:Object(y.jsx)(j.a,{className:e.paper,children:Object(y.jsx)(W.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(y.jsx)(F.a,{component:"div",id:"nested-list-subheader",style:{background:"#FFE2EC",color:"#F60057"},children:"Do you mean one of following ingredients ?"}),className:e.root,children:a})})}var Y=n(67),G=n(6),z=n(14),J=n(212),Q=n(213),X=n(210),Z=n(211),$=n(208),ee=n(222),te=n(209),ne=n(228),ae=n(224),re=n(105),ce=n.n(re),oe=n(217),ie=n(218),se=n(106),le=n.n(se),de=n(216),ue=n(214),be=n(215),je=Object(g.a)({name:"intake",initialState:{data:[],calorie:0},reducers:{addItem:function(e,t){e.data=e.data.concat(t.payload),e.calorie=e.data.reduce((function(e,t){return e+t.ENERC_KCAL}),0)},reduceItem:function(e,t){e.data.splice(t.payload,1),e.calorie=e.data.reduce((function(e,t){return e+t.ENERC_KCAL}),0)},intakeApiErrorReceived:function(e,t){return e}}}),pe=je.reducer,Oe=je.actions;function fe(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function he(e,t){return"desc"===e?function(e,n){return fe(e,n,t)}:function(e,n){return-fe(e,n,t)}}function me(e,t){var n=e.map((function(e,t){return[e.food.nutrients,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var xe=[{id:"Name",numeric:!1,disablePadding:!0,label:"Food (per serve)"},{id:"ENERC_KCAL",numeric:!0,disablePadding:!1,label:"ENERC (kcal)"},{id:"PROCNT",numeric:!0,disablePadding:!1,label:"PROCNT (g)"},{id:"FIBTG",numeric:!0,disablePadding:!1,label:"FIBTG (g)"},{id:"FAT",numeric:!0,disablePadding:!1,label:"FAT (g)"},{id:"CHOCDF",numeric:!0,disablePadding:!1,label:"CHOCDF (g)"}];function ge(e){var t=e.classes,n=e.onSelectAllClick,a=e.order,r=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return Object(y.jsx)($.a,{children:Object(y.jsxs)(te.a,{children:[Object(y.jsx)(X.a,{padding:"checkbox",children:Object(y.jsx)(ae.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),xe.map((function(e){return Object(y.jsx)(X.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&a,children:Object(y.jsxs)(ne.a,{active:r===e.id,direction:r===e.id?a:"asc",onClick:(n=e.id,function(e){i(e,n)}),children:[e.label,r===e.id?Object(y.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),Object(y.jsx)(X.a,{})]})})}var ve=Object(d.a)((function(e){return Object(b.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(z.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),Ce=function(e){var t=ve(),n=e.numSelected,a=e.selected,r=Object(m.b)();return Object(y.jsxs)(l.a,{className:Object(G.a)(t.root,Object(Y.a)({},t.highlight,n>0)),children:[n>0?Object(y.jsxs)(i.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(y.jsx)(i.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),n>0?Object(y.jsx)(D.a,{title:"Add to diet plan",children:Object(y.jsx)(O.a,{"aria-label":"diet plan",onClick:function(){r(Oe.addItem(a))},children:Object(y.jsx)(ce.a,{})})}):null]})},Ee=Object(d.a)((function(e){return Object(b.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},card:{maxWidth:125}})}));function ye(){var e=Object(m.c)(U),t=Ee(),n=r.a.useState("asc"),c=Object(u.a)(n,2),o=c[0],i=c[1],s=r.a.useState("ENERC_KCAL"),l=Object(u.a)(s,2),d=l[0],b=l[1],p=r.a.useState([]),f=Object(u.a)(p,2),h=f[0],x=f[1],g=r.a.useState(0),v=Object(u.a)(g,2),C=v[0],E=v[1],S=r.a.useState(!1),_=Object(u.a)(S,2),R=_[0],k=_[1],A=r.a.useState(!1),P=Object(u.a)(A,2),T=P[0],w=P[1],I=r.a.useState(5),N=Object(u.a)(I,2),F=N[0],W=N[1];Object(a.useEffect)((function(){x([])}),[e]);var K=F-Math.min(F,e.length-C*F);return Object(y.jsxs)("div",{className:t.root,children:[Object(y.jsxs)(j.a,{className:t.paper,children:[Object(y.jsx)(Ce,{numSelected:h.length,selected:h}),Object(y.jsx)(Z.a,{children:Object(y.jsxs)(J.a,{className:t.table,"aria-labelledby":"tableTitle",size:R?"small":"medium","aria-label":"enhanced table",children:[Object(y.jsx)(ge,{classes:t,numSelected:h.length,order:o,orderBy:d,onSelectAllClick:function(t){if(t.target.checked){var n=e.map((function(e){return e.food.nutrients}));x(n)}else x([])},onRequestSort:function(e,t){i(d===t&&"asc"===o?"desc":"asc"),b(t)},rowCount:e.length}),Object(y.jsxs)(Q.a,{children:[me(e,he(o,d)).slice(C*F,C*F+F).map((function(e,n){var a=function(e){var t=-1;return h.forEach((function(n,a){n.label!==e.label||(t=a)})),-1!==t}(e),r="enhanced-table-checkbox-".concat(n);return Object(y.jsxs)(te.a,{hover:!0,onClick:function(t){return function(e,t){var n=-1;h.forEach((function(e,a){e.label!==t.label||(n=a)}));var a=[];-1===n?a=a.concat(h,t):0===n?a=a.concat(h.slice(1)):n===h.length-1?a=a.concat(h.slice(0,-1)):n>0&&(a=a.concat(h.slice(0,n),h.slice(n+1))),x(a)}(0,e)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(y.jsx)(X.a,{padding:"checkbox",children:Object(y.jsx)(ae.a,{checked:a,inputProps:{"aria-labelledby":r}})}),Object(y.jsx)(X.a,{component:"th",id:r,scope:"row",padding:"none",children:e.label}),Object(y.jsx)(X.a,{align:"right",children:e.ENERC_KCAL}),Object(y.jsx)(X.a,{align:"right",children:e.PROCNT}),Object(y.jsx)(X.a,{align:"right",children:e.FIBTG}),Object(y.jsx)(X.a,{align:"right",children:e.FAT}),Object(y.jsx)(X.a,{align:"right",children:e.CHOCDF}),Object(y.jsx)(X.a,{align:"right",children:T?Object(y.jsx)(ue.a,{className:t.card,children:Object(y.jsx)(be.a,{children:Object(y.jsx)(de.a,{component:"img",alt:e.label,height:"140",image:e.image,title:e.label,onMouseLeave:function(){return w(!T)}})})}):Object(y.jsx)(D.a,{title:"preview",onMouseEnter:function(){return w(!T)},children:Object(y.jsx)(O.a,{"aria-label":"Image",children:Object(y.jsx)(le.a,{})})})})]},e.label)})),K>0&&Object(y.jsx)(te.a,{style:{height:(R?33:53)*K},children:Object(y.jsx)(X.a,{colSpan:6})})]})]})}),Object(y.jsx)(ee.a,{rowsPerPageOptions:[5,10,25],component:"div",count:e.length,rowsPerPage:F,page:C,onChangePage:function(e,t){E(t)},onChangeRowsPerPage:function(e){W(parseInt(e.target.value,10)),E(0)}})]}),Object(y.jsx)(oe.a,{control:Object(y.jsx)(ie.a,{checked:R,onChange:function(e){k(e.target.checked)}}),label:"Dense padding"})]})}var Se=n(85),_e=(n(136),Object(g.a)({name:"survey",initialState:{complete:!1,age:"",weight:0},reducers:{surveyCompleted:function(e,t){e.complete=!0,e.age="AG"+t.payload.age,e.weight=t.payload.weight},surveyApiErrorReceived:function(e,t){return e}}})),Re=_e.reducer,ke=_e.actions;function Ae(){var e=Object(m.b)(),t=new Se.Model({elements:[{type:"text",name:"age",title:"How old are you?",isRequired:!0,validators:[{type:"numeric",minValue:10,maxValue:90}]},{type:"text",name:"weight",title:"What is your current weight (lb)?",isRequired:!0,validators:[{type:"numeric",minValue:60,maxValue:300}]}]});return Object(y.jsx)(Se.Survey,{model:t,onComplete:function(t,n){e(ke.surveyCompleted(t.data))}})}var Pe=n(219),Te=n(220),we=n(221),Ie=Object(d.a)({root:{maxWidth:245,minWidth:150,zIndex:10,margin:"10px"}});function De(e){var t=Ie(),n=Object(m.b)();return Object(y.jsxs)(ue.a,{className:t.root,children:[Object(y.jsxs)(be.a,{children:[Object(y.jsx)(de.a,{component:"img",alt:e.food.label,height:"140",image:e.food.image,title:e.food.label}),Object(y.jsxs)(Pe.a,{children:[Object(y.jsx)(i.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.food.label}),Object(y.jsxs)(i.a,{variant:"body2",color:"textSecondary",component:"p",children:["Calorie per serve: ",e.food.ENERC_KCAL," KCAl"]})]})]}),Object(y.jsx)(Te.a,{children:Object(y.jsx)(we.a,{size:"small",variant:"contained",color:"primary",onClick:function(){return console.log(e),void n(Oe.reduceItem(e.foodId))},children:"Remove"})})]})}var Ne=function(e){return e.intake.data},Fe=function(e){return e.intake.calorie},We=Object(g.a)({name:"simulator",initialState:{currentWeight:0,targetWeight:0,beforeImage:"",afterImage:""},reducers:{simulatorDataRecevied:function(e,t){e.targetWeight=t.payload},imageDataReceived:function(e,t){console.log(t.payload),e.beforeImage=t.payload.current,e.afterImage=t.payload.goal},simulatorApiErrorReceived:function(e,t){return e}}}),Ke=We.reducer,He=We.actions,Le=n(74);function Be(){var e=Object(m.b)(),t=Object(m.c)(Ne),n=Object(m.c)(Fe),a=t.length>0?t.map((function(e,t){return Object(y.jsx)(De,{food:e,foodId:t,style:{minWidth:"100px"}},t)})):null;return Object(y.jsxs)(ue.a,{children:[Object(y.jsx)(be.a,{children:Object(y.jsxs)(Pe.a,{children:[Object(y.jsxs)(i.a,{color:"textSecondary",gutterBottom:!0,children:["Total Calories: ",n," KCAL"]}),Object(y.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a})]})}),Object(y.jsx)(Te.a,{children:Object(y.jsx)(we.a,{component:Le.b,to:"/simulator",size:"large",variant:"contained",color:"secondary",onClick:function(){if(n>4e3||n<1500)!function(){var t="";n>3e3?t="It is too much for an adult daily intake, please remove some food":n<1900&&(t="It is too less for an adult daily intake, please add more food"),e(Oe.intakeApiErrorReceived({error:t}))}();else{var t=Math.sqrt((n-752.901)/.028)-167.074;e(He.simulatorDataRecevied(t))}},children:"Run Simulation"})})]})}function qe(){var e=Object(m.c)(U),t=Object(m.c)(R);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"50px"},children:Object(y.jsx)(V,{})}),e.length>0?Object(y.jsx)(ye,{}):null,t?Object(y.jsx)(Be,{}):Object(y.jsx)(Ae,{})]})}var Ue=n(24),Me=n(68),Ve=n(107),Ye=n(19),Ge=n.n(Ye),ze=n(16),Je=n(75),Qe=n.n(Je),Xe=function(e){return Qe.a.get("https://api.edamam.com/auto-complete",{params:{q:e,limit:10,app_id:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_ID,app_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_KEY}})},Ze=function(e){return Qe.a.get("/api/food-database/v2/parser",{params:{ingr:e,app_id:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_ID,app_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_KEY}})},$e=function(e){return Qe.a.post("http://sandbox.modelmydiet.com/women",{api_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SIMULATOR_APP_KEY,units:"imperial",height:"65",shape:"hourglass",bust:"small",ethnicity:"CA01",age:"AG20",eyes:"EYR",nose:"NOS",lips:"LPT",beard_style:"BS01",beard_color:"BC01",hair_color:"HC01",hair_style:"HS21",outfit:"undergarment",background:"blank",view:"front",delta:{current:{weight:"190"},goal:{weight:e}}})},et=n(38),tt=Ge.a.mark(rt),nt=Ge.a.mark(ct),at=Ge.a.mark(ot);function rt(e){var t,n;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.c)(P);case 2:return t=e.sent,e.prev=3,e.next=6,Object(ze.a)($e,t);case 6:return n=e.sent,e.next=9,Object(ze.b)(He.imageDataReceived(n.data));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),e.next=15,Object(ze.b)(He.simulatorApiErrorReceived(e.t0));case 15:case"end":return e.stop()}}),tt,null,[[3,11]])}function ct(e){return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ze.a)(et.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),nt)}function ot(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.e)(He.simulatorDataRecevied.type,rt);case 2:return e.next=4,Object(ze.e)(He.simulatorApiErrorReceived.type,ct);case 4:case"end":return e.stop()}}),at)}var it=Ge.a.mark(ut),st=Ge.a.mark(bt),lt=Ge.a.mark(jt),dt=Ge.a.mark(pt);function ut(e){var t,n;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.c)(L);case 2:return t=e.sent,e.prev=3,e.next=6,Object(ze.a)(Xe,t);case 6:if(0!==(n=e.sent).data.length){e.next=11;break}return"Your input is not valid, please try another food",e.next=11,Object(ze.b)(E.foodApiErrorReceived({error:"Your input is not valid, please try another food"}));case 11:return e.next=13,Object(ze.b)(E.foodOptionsReceived(n.data));case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(3),e.next=19,Object(ze.b)(E.foodApiErrorReceived(e.t0));case 19:case"end":return e.stop()}}),it,null,[[3,15]])}function bt(e){var t,n;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.c)(q);case 2:return t=e.sent,e.prev=3,e.next=6,Object(ze.a)(Ze,t);case 6:return n=e.sent,e.next=9,Object(ze.b)(E.foodItemsReceived(n.data));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),e.next=15,Object(ze.b)(E.foodApiErrorReceived(e.t0));case 15:case"end":return e.stop()}}),st,null,[[3,11]])}function jt(e){return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ze.a)(et.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),lt)}function pt(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.e)(E.foodAutoCompleteRequest.type,ut);case 2:return e.next=4,Object(ze.e)(E.fooditemsRequest.type,bt);case 4:return e.next=6,Object(ze.e)(E.foodApiErrorReceived.type,jt);case 6:case"end":return e.stop()}}),dt)}var Ot=Ge.a.mark(ht),ft=Ge.a.mark(mt);function ht(e){return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ze.a)(et.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),Ot)}function mt(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.e)(Oe.intakeApiErrorReceived.type,ht);case 2:case"end":return e.stop()}}),ft)}var xt=Ge.a.mark(gt);function gt(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ze.d)(ot);case 2:return e.next=4,Object(ze.d)(pt);case 4:return e.next=6,Object(ze.d)(mt);case 6:case"end":return e.stop()}}),xt)}var vt={simulator:Ke,food:C,intake:pe,survey:Re},Ct=Object(Ue.combineReducers)(vt);n(156);var Et=n(20),yt=function(){var e=Object(Me.composeWithDevTools)({}),t=Object(Ve.a)(),n=Object(Ue.applyMiddleware)(t),a=Object(Ue.createStore)(Ct,e(n));return t.run(gt),a}();var St=function(){return Object(y.jsx)(m.a,{store:yt,children:Object(y.jsxs)(Le.a,{children:[Object(y.jsx)(et.a,{}),Object(y.jsxs)(Et.c,{children:[Object(y.jsxs)(Et.a,{exact:!0,path:"/CICD",children:[Object(y.jsx)(A,{}),Object(y.jsx)(qe,{})]}),Object(y.jsx)(Et.a,{exact:!0,path:"/CICD/simulator",children:Object(y.jsx)(N,{})})]})]})})};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(St,{})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.b22c6b42.chunk.js.map