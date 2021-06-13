(this.webpackJsonpcicd=this.webpackJsonpcicd||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},135:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=(n(127),n(128),n(60)),s=n(201),l=n(202),d=n(197),u=n(28),b=n(225),j=n(109),p=n(227),O=n(159),f=n(103),h=n.n(f),m=n(17),x=n(102),g=n(35),v=Object(g.a)({name:"food",initialState:{foodInfo:[],input:"",options:[],foodItem:"",currentWeight:0,targetWeight:0,calorie:0},reducers:{foodAutoCompleteRequest:function(e,t){e.input=t.payload},foodOptionsReceived:function(e,t){e.options=t.payload},fooditemsRequest:function(e,t){e.foodItem=t.payload},foodItemsReceived:function(e,t){var n=new Map;e.foodInfo=t.payload.hints.filter((function(e){if(n.has(e.food.label)){if(n.has(e.food.label))return!1}else n.set(e.food.label,1);return e.food.image})).map((function(e){return e.food.nutrients=Object(x.a)({image:e.food.image,label:e.food.label,foodId:e.food.foodId},e.food.nutrients),e}))},foodApiErrorReceived:function(e,t){return e}}}),C=v.reducer,y=v.actions,E=n(5),S=Object(d.a)((function(e){return Object(b.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})}));function _(){var e=S(),t=Object(m.b)(),n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],o=r[1];return Object(E.jsxs)(j.a,{component:"form",className:e.root,onSubmit:function(e){e.preventDefault()},children:[Object(E.jsx)(p.a,{className:e.input,placeholder:"Search Your Meal",inputProps:{"aria-label":"search meal ingr"},onChange:function(e){return o(e.target.value)}}),Object(E.jsx)(O.a,{type:"button",className:e.iconButton,"aria-label":"search",onClick:function(){return e=c,void t(y.foodAutoCompleteRequest(e));var e},children:Object(E.jsx)(h.a,{})})]})}var R=function(e){return e.survey.complete},k=function(e){return e.survey.weight},A=function(e){return e.survey.age},w=Object(d.a)({root:{background:"#FFE2EC",width:"100%"},grow:{flexGrow:1,color:"#F60057"}});function P(){var e=w(),t=Object(m.c)(R);return Object(E.jsx)(s.a,{position:"static",className:e.root,children:Object(E.jsxs)(l.a,{children:[Object(E.jsx)(i.a,{variant:"h6",color:"inherit",className:e.grow,children:"Calorie Simulator"}),t?Object(E.jsx)(_,{}):null]})})}var T=function(e){return e.simulator.targetWeight},I=function(e){return e.simulator.beforeImage},D=function(e){return e.simulator.afterImage},N=n(223),F=(n(135),n(226));function W(){var e=Object(m.c)(I),t=Object(m.c)(D),n=Object(a.useState)(!0),r=Object(u.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),l=s[0],d=s[1];return Object(E.jsxs)("div",{style:{padding:"2%",display:"flex",justifyContent:"center"},children:[c&&Object(E.jsx)(F.a,{title:"Current Body Shape",children:Object(E.jsx)("img",{src:e,alt:"current","aria-label":"current",onClick:function(){return d(!0)}})}),Object(E.jsx)(N.a,{in:l,timeout:300,classNames:"alert",unmountOnExit:!0,onEnter:function(){return o(!1)},onExited:function(){return o(!0)},children:Object(E.jsx)(F.a,{title:"Target Body Shape",children:Object(E.jsx)("img",{src:t,alt:"goal","aria-label":"current",onClick:function(){return d(!1)}})})})]})}var K=n(207),H=n(206),L=n(204),B=n(205),q=function(e){return e.food.input},U=function(e){return e.food.options},M=function(e){return e.food.foodItem},V=function(e){return e.food.foodInfo},Y=Object(d.a)((function(e){return Object(b.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{width:"300px"}})}));function z(){var e=Y(),t=Object(m.b)(),n=Object(m.c)(U),a=n.map((function(e,n){return Object(E.jsx)(L.a,{button:!0,children:Object(E.jsx)(B.a,{primary:e,onClick:function(){return n=e,void t(y.fooditemsRequest(n));var n}})},n)}));return 0===n.length?null:Object(E.jsx)(j.a,{className:e.paper,children:Object(E.jsx)(H.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(E.jsx)(K.a,{component:"div",id:"nested-list-subheader",style:{background:"#FFE2EC",color:"#F60057"},children:"Do you mean one of following ingredients ?"}),className:e.root,children:a})})}var G=n(67),J=n(6),Q=n(14),X=n(212),Z=n(213),$=n(210),ee=n(211),te=n(208),ne=n(222),ae=n(209),re=n(228),ce=n(224),oe=n(105),ie=n.n(oe),se=n(217),le=n(218),de=n(106),ue=n.n(de),be=n(216),je=n(214),pe=n(215),Oe=Object(g.a)({name:"intake",initialState:{data:[],calorie:0},reducers:{addItem:function(e,t){e.data=e.data.concat(t.payload),e.calorie=e.data.reduce((function(e,t){return e+t.ENERC_KCAL}),0)},reduceItem:function(e,t){e.data.splice(t.payload,1),e.calorie=e.data.reduce((function(e,t){return e+t.ENERC_KCAL}),0)},intakeApiErrorReceived:function(e,t){return e}}}),fe=Oe.reducer,he=Oe.actions;function me(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function xe(e,t){return"desc"===e?function(e,n){return me(e,n,t)}:function(e,n){return-me(e,n,t)}}function ge(e,t){var n=e.map((function(e,t){return[e.food.nutrients,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var ve=[{id:"Name",numeric:!1,disablePadding:!0,label:"Food (per serve)"},{id:"ENERC_KCAL",numeric:!0,disablePadding:!1,label:"ENERC (kcal)"},{id:"PROCNT",numeric:!0,disablePadding:!1,label:"PROCNT (g)"},{id:"FIBTG",numeric:!0,disablePadding:!1,label:"FIBTG (g)"},{id:"FAT",numeric:!0,disablePadding:!1,label:"FAT (g)"},{id:"CHOCDF",numeric:!0,disablePadding:!1,label:"CHOCDF (g)"}];function Ce(e){var t=e.classes,n=e.onSelectAllClick,a=e.order,r=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return Object(E.jsx)(te.a,{children:Object(E.jsxs)(ae.a,{children:[Object(E.jsx)($.a,{padding:"checkbox",children:Object(E.jsx)(ce.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),ve.map((function(e){return Object(E.jsx)($.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&a,children:Object(E.jsxs)(re.a,{active:r===e.id,direction:r===e.id?a:"asc",onClick:(n=e.id,function(e){i(e,n)}),children:[e.label,r===e.id?Object(E.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),Object(E.jsx)($.a,{})]})})}var ye=Object(d.a)((function(e){return Object(b.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(Q.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),Ee=function(e){var t=ye(),n=e.numSelected,a=e.selected,r=Object(m.b)();return Object(E.jsxs)(l.a,{className:Object(J.a)(t.root,Object(G.a)({},t.highlight,n>0)),children:[n>0?Object(E.jsxs)(i.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(E.jsx)(i.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),n>0?Object(E.jsx)(F.a,{title:"Add to diet plan",children:Object(E.jsx)(O.a,{"aria-label":"diet plan",onClick:function(){r(he.addItem(a))},children:Object(E.jsx)(ie.a,{})})}):null]})},Se=Object(d.a)((function(e){return Object(b.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},card:{maxWidth:125}})}));function _e(){var e=Object(m.c)(V),t=Se(),n=r.a.useState("asc"),c=Object(u.a)(n,2),o=c[0],i=c[1],s=r.a.useState("ENERC_KCAL"),l=Object(u.a)(s,2),d=l[0],b=l[1],p=r.a.useState([]),f=Object(u.a)(p,2),h=f[0],x=f[1],g=r.a.useState(0),v=Object(u.a)(g,2),C=v[0],y=v[1],S=r.a.useState(!1),_=Object(u.a)(S,2),R=_[0],k=_[1],A=r.a.useState(!1),w=Object(u.a)(A,2),P=w[0],T=w[1],I=r.a.useState(5),D=Object(u.a)(I,2),N=D[0],W=D[1];Object(a.useEffect)((function(){x([])}),[e]);var K=N-Math.min(N,e.length-C*N);return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsxs)(j.a,{className:t.paper,children:[Object(E.jsx)(Ee,{numSelected:h.length,selected:h}),Object(E.jsx)(ee.a,{children:Object(E.jsxs)(X.a,{className:t.table,"aria-labelledby":"tableTitle",size:R?"small":"medium","aria-label":"enhanced table",children:[Object(E.jsx)(Ce,{classes:t,numSelected:h.length,order:o,orderBy:d,onSelectAllClick:function(t){if(t.target.checked){var n=e.map((function(e){return e.food.nutrients}));x(n)}else x([])},onRequestSort:function(e,t){i(d===t&&"asc"===o?"desc":"asc"),b(t)},rowCount:e.length}),Object(E.jsxs)(Z.a,{children:[ge(e,xe(o,d)).slice(C*N,C*N+N).map((function(e,n){var a=function(e){var t=-1;return h.forEach((function(n,a){n.label!==e.label||(t=a)})),-1!==t}(e),r="enhanced-table-checkbox-".concat(n);return Object(E.jsxs)(ae.a,{hover:!0,onClick:function(t){return function(e,t){var n=-1;h.forEach((function(e,a){e.label!==t.label||(n=a)}));var a=[];-1===n?a=a.concat(h,t):0===n?a=a.concat(h.slice(1)):n===h.length-1?a=a.concat(h.slice(0,-1)):n>0&&(a=a.concat(h.slice(0,n),h.slice(n+1))),x(a)}(0,e)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(E.jsx)($.a,{padding:"checkbox",children:Object(E.jsx)(ce.a,{checked:a,inputProps:{"aria-labelledby":r}})}),Object(E.jsx)($.a,{component:"th",id:r,scope:"row",padding:"none",children:e.label}),Object(E.jsx)($.a,{align:"right",children:e.ENERC_KCAL}),Object(E.jsx)($.a,{align:"right",children:e.PROCNT}),Object(E.jsx)($.a,{align:"right",children:e.FIBTG}),Object(E.jsx)($.a,{align:"right",children:e.FAT}),Object(E.jsx)($.a,{align:"right",children:e.CHOCDF}),Object(E.jsx)($.a,{align:"right",children:P?Object(E.jsx)(je.a,{className:t.card,children:Object(E.jsx)(pe.a,{children:Object(E.jsx)(be.a,{component:"img",alt:e.label,height:"140",image:e.image,title:e.label,onMouseLeave:function(){return T(!P)}})})}):Object(E.jsx)(F.a,{title:"preview",onMouseEnter:function(){return T(!P)},children:Object(E.jsx)(O.a,{"aria-label":"Image",children:Object(E.jsx)(ue.a,{})})})})]},e.label)})),K>0&&Object(E.jsx)(ae.a,{style:{height:(R?33:53)*K},children:Object(E.jsx)($.a,{colSpan:6})})]})]})}),Object(E.jsx)(ne.a,{rowsPerPageOptions:[5,10,25],component:"div",count:e.length,rowsPerPage:N,page:C,onChangePage:function(e,t){y(t)},onChangeRowsPerPage:function(e){W(parseInt(e.target.value,10)),y(0)}})]}),Object(E.jsx)(se.a,{control:Object(E.jsx)(le.a,{checked:R,onChange:function(e){k(e.target.checked)}}),label:"Dense padding"})]})}var Re=n(85),ke=(n(136),Object(g.a)({name:"survey",initialState:{complete:!1,age:"",weight:0},reducers:{surveyCompleted:function(e,t){e.complete=!0,e.age="AG"+t.payload.age,e.weight=t.payload.weight},surveyApiErrorReceived:function(e,t){return e}}})),Ae=ke.reducer,we=ke.actions;function Pe(){var e=Object(m.b)(),t=new Re.Model({elements:[{type:"text",name:"age",title:"How old are you?",isRequired:!0,validators:[{type:"numeric",minValue:10,maxValue:90}]},{type:"text",name:"weight",title:"What is your current weight (lb)?",isRequired:!0,validators:[{type:"numeric",minValue:60,maxValue:300}]}]});return Object(E.jsx)(Re.Survey,{model:t,onComplete:function(t,n){e(we.surveyCompleted(t.data))}})}var Te=n(219),Ie=n(220),De=n(221),Ne=Object(d.a)({root:{maxWidth:245,minWidth:150,zIndex:10,margin:"10px"}});function Fe(e){var t=Ne(),n=Object(m.b)();return Object(E.jsxs)(je.a,{className:t.root,children:[Object(E.jsxs)(pe.a,{children:[Object(E.jsx)(be.a,{component:"img",alt:e.food.label,height:"140",image:e.food.image,title:e.food.label}),Object(E.jsxs)(Te.a,{children:[Object(E.jsx)(i.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.food.label}),Object(E.jsxs)(i.a,{variant:"body2",color:"textSecondary",component:"p",children:["Calorie per serve: ",e.food.ENERC_KCAL," KCAl"]})]})]}),Object(E.jsx)(Ie.a,{children:Object(E.jsx)(De.a,{size:"small",variant:"contained",color:"primary",onClick:function(){return console.log(e),void n(he.reduceItem(e.foodId))},children:"Remove"})})]})}var We=function(e){return e.intake.data},Ke=function(e){return e.intake.calorie},He=Object(g.a)({name:"simulator",initialState:{targetWeight:0,beforeImage:"",afterImage:""},reducers:{simulatorDataRecevied:function(e,t){e.targetWeight=t.payload},imageDataReceived:function(e,t){e.beforeImage=t.payload.current,e.afterImage=t.payload.goal},simulatorApiErrorReceived:function(e,t){return e}}}),Le=He.reducer,Be=He.actions,qe=n(74);function Ue(){var e=Object(m.b)(),t=Object(m.c)(We),n=Object(m.c)(Ke),a=n<4500&&n>1900,r=function(){if(n>4500||n<1900)!function(){var t="";n>4500?t="It is too much for an adult daily intake, please remove some food":n<1900&&(t="It is too less for an adult daily intake, please add more food"),e(he.intakeApiErrorReceived({error:t}))}();else{var t=Math.sqrt((n-752.901)/.028)-167.074;e(Be.simulatorDataRecevied(t))}},c=t.length>0?t.map((function(e,t){return Object(E.jsx)(Fe,{food:e,foodId:t,style:{minWidth:"100px"}},t)})):null;return Object(E.jsxs)(je.a,{children:[Object(E.jsx)(pe.a,{children:Object(E.jsxs)(Te.a,{children:[Object(E.jsxs)(i.a,{color:"textSecondary",gutterBottom:!0,children:["Total Calories: ",n," KCAL"]}),Object(E.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:c})]})}),Object(E.jsx)(Ie.a,{children:a?Object(E.jsx)(De.a,{component:qe.b,to:"/simulator",size:"large",variant:"contained",color:"secondary",onClick:r,children:"Run Simulation"}):Object(E.jsx)(De.a,{size:"large",variant:"contained",color:"secondary",onClick:r,children:"Run Simulation"})})]})}function Me(){var e=Object(m.c)(V),t=Object(m.c)(R);return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"50px"},children:Object(E.jsx)(z,{})}),e.length>0?Object(E.jsx)(_e,{}):null,t?Object(E.jsx)(Ue,{}):Object(E.jsx)(Pe,{})]})}var Ve=n(24),Ye=n(68),ze=n(107),Ge=n(19),Je=n.n(Ge),Qe=n(15),Xe=n(75),Ze=n.n(Xe),$e=function(e){return Ze.a.get("https://api.edamam.com/auto-complete",{params:{q:e,limit:10,app_id:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_ID,app_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_KEY}})},et=function(e){return Ze.a.get("/api/food-database/v2/parser",{params:{ingr:e,app_id:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_ID,app_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FOOD_APP_KEY}})},tt=function(e,t,n){return Ze.a.post("http://sandbox.modelmydiet.com/women",{api_key:Object({NODE_ENV:"production",PUBLIC_URL:"/CICD",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SIMULATOR_APP_KEY,units:"imperial",height:"65",shape:"hourglass",bust:"small",ethnicity:"CA01",age:t,eyes:"EYR",nose:"NOS",lips:"LPT",beard_style:"BS01",beard_color:"BC01",hair_color:"HC01",hair_style:"HS21",outfit:"undergarment",background:"blank",view:"front",delta:{current:{weight:e},goal:{weight:n}}})},nt=n(38),at=Je.a.mark(ot),rt=Je.a.mark(it),ct=Je.a.mark(st);function ot(e){var t,n,a,r;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.c)(k);case 2:return t=e.sent,e.next=5,Object(Qe.c)(A);case 5:return n=e.sent,e.next=8,Object(Qe.c)(T);case 8:return a=e.sent,e.prev=9,e.next=12,Object(Qe.a)(tt,t,n,a);case 12:return r=e.sent,e.next=15,Object(Qe.b)(Be.imageDataReceived(r.data));case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(9),e.next=21,Object(Qe.b)(Be.simulatorApiErrorReceived(e.t0));case 21:case"end":return e.stop()}}),at,null,[[9,17]])}function it(e){return Je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Qe.a)(nt.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),rt)}function st(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.e)(Be.simulatorDataRecevied.type,ot);case 2:return e.next=4,Object(Qe.e)(Be.simulatorApiErrorReceived.type,it);case 4:case"end":return e.stop()}}),ct)}var lt=Je.a.mark(jt),dt=Je.a.mark(pt),ut=Je.a.mark(Ot),bt=Je.a.mark(ft);function jt(e){var t,n;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.c)(q);case 2:return t=e.sent,e.prev=3,e.next=6,Object(Qe.a)($e,t);case 6:if(0!==(n=e.sent).data.length){e.next=11;break}return"Your input is not valid, please try another food",e.next=11,Object(Qe.b)(y.foodApiErrorReceived({error:"Your input is not valid, please try another food"}));case 11:return e.next=13,Object(Qe.b)(y.foodOptionsReceived(n.data));case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(3),e.next=19,Object(Qe.b)(y.foodApiErrorReceived(e.t0));case 19:case"end":return e.stop()}}),lt,null,[[3,15]])}function pt(e){var t,n;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.c)(M);case 2:return t=e.sent,e.prev=3,e.next=6,Object(Qe.a)(et,t);case 6:return n=e.sent,e.next=9,Object(Qe.b)(y.foodItemsReceived(n.data));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),e.next=15,Object(Qe.b)(y.foodApiErrorReceived(e.t0));case 15:case"end":return e.stop()}}),dt,null,[[3,11]])}function Ot(e){return Je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Qe.a)(nt.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),ut)}function ft(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.e)(y.foodAutoCompleteRequest.type,jt);case 2:return e.next=4,Object(Qe.e)(y.fooditemsRequest.type,pt);case 4:return e.next=6,Object(Qe.e)(y.foodApiErrorReceived.type,Ot);case 6:case"end":return e.stop()}}),bt)}var ht=Je.a.mark(xt),mt=Je.a.mark(gt);function xt(e){return Je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Qe.a)(nt.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),ht)}function gt(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.e)(he.intakeApiErrorReceived.type,xt);case 2:case"end":return e.stop()}}),mt)}var vt=Je.a.mark(Ct);function Ct(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.d)(st);case 2:return e.next=4,Object(Qe.d)(ft);case 4:return e.next=6,Object(Qe.d)(gt);case 6:case"end":return e.stop()}}),vt)}var yt={simulator:Le,food:C,intake:fe,survey:Ae},Et=Object(Ve.combineReducers)(yt);n(156);var St=n(20),_t=function(){var e=Object(Ye.composeWithDevTools)({}),t=Object(ze.a)(),n=Object(Ve.applyMiddleware)(t),a=Object(Ve.createStore)(Et,e(n));return t.run(Ct),a}();var Rt=function(){return Object(E.jsx)(m.a,{store:_t,children:Object(E.jsxs)(qe.a,{children:[Object(E.jsx)(nt.a,{}),Object(E.jsxs)(St.c,{children:[Object(E.jsxs)(St.a,{exact:!0,path:"/CICD",children:[Object(E.jsx)(P,{}),Object(E.jsx)(Me,{})]}),Object(E.jsx)(St.a,{exact:!0,path:"/simulator",children:Object(E.jsx)(W,{})})]})]})})};o.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(Rt,{})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.626d34d8.chunk.js.map