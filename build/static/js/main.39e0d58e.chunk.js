(this["webpackJsonpsmart-evolution"]=this["webpackJsonpsmart-evolution"]||[]).push([[0],{103:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(13),i=t.n(r),s=t(6),c=t(7),l=t(9),u=t(8),p=t(18),d=t.n(p),m="https://smart-evolution.azurewebsites.net",y="850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com",h=JSON.parse(localStorage.getItem("user")),f=function(){var e=JSON.parse(localStorage.getItem("user")).profileObj.email;return e=e.slice(0,e.indexOf("@"))},g=function(e){localStorage.setItem("user",JSON.stringify(e)),window.location.reload()},b=function(e){console.error("B\u0142\u0105d logowania:",e)},k=function(){localStorage.clear("user"),console.log("Pomy\u015blnie wylogowano."),window.location.reload()},v=(t(103),t(48)),w=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"o-section o-section--full c-start o-flex o-flex--centered o-flex--grids o-flex--wrap u-padding-none"},o.a.createElement("div",{className:"c-start__image o-flex__item u-flex-7/12"}),o.a.createElement("div",{className:"c-start__container o-flex__item u-flex-5/12 o-flex o-flex--centered"},o.a.createElement("div",{className:"c-menu--top"},o.a.createElement("div",{className:"c-heading c-heading--h3 u-font-color--3 u-text--bold u-margin-none"},"SMART Evolution")),o.a.createElement("div",{className:"o-wrapper c-start__content u-bg-color--1"},o.a.createElement("p",{className:"c-heading c-heading--h0 u-margin-bottom-huge u-font-color--1 u-text--thin"},"Przemie\u0144 marzenia w plan"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase"},"Wykreuj rzeczywisto\u015b\u0107 dla siebie"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase u-margin-bottom-none"},"i ciesz si\u0119 \u017cyciem, jakiego chcia\u0142e\u015b"),o.a.createElement("div",{className:"c-start__buttons u-position-relative"},o.a.createElement(v.GoogleLogin,{clientId:y,buttonText:"Zaloguj z Google",onSuccess:g,onFailure:b,cookiePolicy:"single_host_origin",isSignedIn:!0})))))}}]),t}(n.Component),z=t(37),j=t(154),E=t(156),O=t(157),C=t(148),x=t(153),T=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).handleChange=function(a){e.props.action(e.props.question,a.target.value),e.setState({done:1}),setTimeout((function(){e.props.stepindex<e.props.lastindex-1?document.querySelectorAll(".multi-step-nav button")[1].click():e.props.submitForm()}),300)},e}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,{m:"auto",className:"survey-content"},o.a.createElement(x.a,{className:"survey-header",height:"100px"},o.a.createElement("h3",null,this.props.question)),o.a.createElement(C.a,{component:"fieldset"},o.a.createElement(x.a,{className:"survey-header",mb:2},"Odpowiedz wed\u0142ug podanej skali"),o.a.createElement(E.a,{className:"survey-header",onChange:this.handleChange,row:!0},o.a.createElement(O.a,{value:"1",control:o.a.createElement(j.a,null),label:"1",labelPlacement:"top"}),o.a.createElement(O.a,{value:"2",control:o.a.createElement(j.a,null),label:"2",labelPlacement:"top"}),o.a.createElement(O.a,{value:"3",control:o.a.createElement(j.a,null),label:"3",labelPlacement:"top"}),o.a.createElement(O.a,{value:"4",control:o.a.createElement(j.a,null),label:"4",labelPlacement:"top"}),o.a.createElement(O.a,{value:"5",control:o.a.createElement(j.a,null),label:"5",labelPlacement:"top"}))))}}]),t}(n.Component),N=t(67),q=t.n(N),S=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={survey:[{questionID:1,question:"Czy masz plan na siebie?"},{questionID:2,question:"Czy inwestujesz w sw\xf3j rozw\xf3j?"},{questionID:3,question:"Czy regularnie czytasz ksi\u0105\u017cki?"},{questionID:4,question:"Czy obecna praca daje Ci satysfakcj\u0119?"},{questionID:5,question:"Czy lubisz swoj\u0105 prac\u0119?"},{questionID:6,question:"Czy praca pozwala Ci si\u0119 rozwija\u0107?"},{questionID:7,question:"Czy jeste\u015b zadowolony z poziomu dochodu?"},{questionID:8,question:"Czy masz zabezpieczenie finansowe na kilka miesi\u0119cy bez pracy?"},{questionID:9,question:"Czy wystarcza Ci na \u017cycie i podstawowe rzeczy?"},{questionID:10,question:"Czy jeste\u015b zadowolony z miejsca zamieszkania, stanu mieszkania?"},{questionID:11,question:"Czy lubisz swoje otoczenie?"},{questionID:12,question:"Czy otoczenie zapewnia Ci poczucie bezpiecze\u0144stwa?"},{questionID:13,question:"Czy jeste\u015b szcz\u0119\u015bliwy w obecnym zwi\u0105zku?"},{questionID:14,question:"Czy partner jest dla Ciebie wsparciem?"},{questionID:15,question:"Czy ufacie sobie?"},{questionID:16,question:"Czy masz zaufane grono przyjaci\xf3\u0142?"},{questionID:17,question:"Czy mo\u017cesz polega\u0107 na rodzinnie i przyjacio\u0142ach?"},{questionID:18,question:"Czy lubisz sp\u0119dza\u0107 czas z rodzin\u0105?"},{questionID:19,question:"Czy masz czas na swoje hobby i zainteresowania?"},{questionID:20,question:"Czy budzisz si\u0119 wypocz\u0119ty?"},{questionID:21,question:"Czy wychodzisz z domu i odpoczywasz np. w parku, lesie?"},{questionID:22,question:"Czy masz jakie\u015b dolegliwo\u015bci, choroby przewlek\u0142e?"},{questionID:23,question:"Czy robisz profilaktyczne badania?"},{questionID:24,question:"Czy uprawiasz sport, \u0107wiczenia fizyczne, regularnie?"}],answers:[]},e.removeSurvey=function(){var e=document.querySelector(".survey-content"),a=document.querySelector("#survey");e.classList.add("fading-out"),a.classList.add("fading-out"),setTimeout((function(){e.remove(),a.remove(),window.location.reload()}),500)},e.submitForm=function(){d.a.post("".concat(m,"/Survey/UserResponse"),{surveyName:"Life_Circle",userName:f(),userResponseQuestionAndAnswerViewModels:e.state.answers},{"Content-Type":"application/json"}).then((function(a){console.info("Wys\u0142ano ankiet\u0119. Nast\u0119puje zamkni\u0119cie ankiety."),e.removeSurvey()})).catch((function(e){console.error("B\u0142\u0105d wysy\u0142ki ankiety.",e)}))},e.handleChange=function(a,t){e.setState({answers:[].concat(Object(z.a)(e.state.answers),[{questionText:a,answerText:t}])})},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"survey",className:"overlay"},o.a.createElement(q.a,null,function(){for(var a=[],t=0;t<e.state.survey.length;t++)a.push(o.a.createElement(T,{key:e.state.survey[t].questionID,question:e.state.survey[t].question,action:e.handleChange,lastindex:e.state.survey.length,submitForm:e.submitForm}));return a}()))}}]),t}(n.Component),I=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"c-dashboard o-flex o-flex--wrap o-flex--space-between u-padding-none u-bg-color--6 o-flex--lock-top js-dashboard"},this.props.children)}}]),t}(n.Component),D=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3"},o.a.createElement("a",{className:"o-link u-margin-right-great"},"RODO"),o.a.createElement("a",{className:"o-link u-margin-right-great"},"Polityka prywatno\u015bci"),o.a.createElement(v.GoogleLogout,{clientId:y,buttonText:"Wyloguj",onLogoutSuccess:k,render:function(e){return o.a.createElement("a",{className:"o-link",onClick:e.onClick,disabled:e.disabled},"Wyloguj")}}))}}]),t}(n.Component),M=t(54),F=t.n(M),A=t(150),_=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).chartRef=o.a.createRef(),e.state={data:null},e.getGraphData=function(){d.a.get("".concat(m,"/Survey/UserResponse"),{params:{surveyName:"Life_Circle",userName:f()}}).then((function(a){console.log("pobrano dane grafu.",a);for(var t=a.data.userResponseQuestionAndAnswerViewModels,n=[],o=0;o<t.length;o+=3){var r=parseInt(t[o].answerText)+parseInt(t[o+1].answerText)+parseInt(t[o+2].answerText);r/=3,r=parseFloat(r.toFixed(2)),n=[].concat(Object(z.a)(n),[r])}e.setState({data:n})})).catch((function(e){console.error("B\u0142\u0105d pobierania danych grafu.",e)}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getGraphData(),setTimeout((function(){var a=e.chartRef.current.getContext("2d");F.a.Legend.prototype.afterFit=function(){this.height=this.height+20},new F.a(a,{type:"polarArea",data:{labels:["Rozw\xf3j osobisty","Kariera","Finanse","Otoczenie","Partner","Rodzina","Wypoczynek","Zdrowie"],datasets:[{data:e.state.data,backgroundColor:["rgba(255,61,0 ,1)","rgba(255,171,0 ,1)","rgba(174,234,0 ,1)","rgba(0,200,83 ,1)","rgba(0,184,212 ,1)","rgba(41,98,255 ,1)","rgba(98,0,234 ,1)","rgba(213,0,0 ,1)"]}]},options:{responsive:!0,maintainAspectRatio:!1,scale:{angleLines:{display:!1},ticks:{min:0,max:5,precision:0,z:1,display:!1},gridLines:{drawOnChartArea:!0,lineWidth:2}},legend:{display:!0,labels:{fontColor:"black"}},tooltips:{enabled:!0},animation:{tension:{duration:1e3,easing:"easeOutCubic",from:1,to:0,loop:!0}}}})}),650)}},{key:"render",value:function(){return o.a.createElement("div",{className:"c-chart--life-graph"},o.a.createElement("canvas",{width:"350",height:"400",id:"myChart",ref:this.chartRef}),o.a.createElement(x.a,{mt:1},o.a.createElement("div",{className:"o-flex o-flex--wrap o-flex--space-between"},o.a.createElement(A.a,{variant:"contained",color:"primary"},"Nowy test"),o.a.createElement(A.a,{variant:"contained",color:"primary"},"Historia"))))}}]),t}(n.Component),L=t(68),P=t.n(L),U=t(70),V=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,{mb:1},o.a.createElement("h3",{className:"u-text--left u-margin-bottom-tiny"},this.props.title,o.a.createElement(x.a,{display:"inline",ml:.5},this.props.desc&&o.a.createElement(P.a,{"data-tip":this.props.desc,color:"action",fontSize:"small",ml:"2",className:"fadeOnStart"})),o.a.createElement(U.a,{style:"max-width: 400px"})))}}]),t}(n.Component),B=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"u-flex-3/12 u-padding-horizontal-big"},o.a.createElement("div",{className:"c-card u-padding-big u-padding-horizontal-great o-flex o-flex--centered-v u-margin-bottom-big"},o.a.createElement("img",{className:"c-nav__picture u-margin-right fadeOnStart",src:h.profileObj.imageUrl}),o.a.createElement("strong",null,h.profileObj.name)),o.a.createElement("div",{className:"c-card c-card--info c-card--white u-padding-great o-flex o-flex o-flex--wrap"},o.a.createElement(V,{title:"Ko\u0142o \u017cycia",desc:"Ko\u0142o powsta\u0142o na podstawie Twoich odpowiedzi w ankiecie. Obrazuje obszary \u017cycia, nad kt\xf3rymi powiniene\u015b popracowa\u0107, aby utrzyma\u0107 r\xf3wnowag\u0119 w \u017cyciu. Poziom warto\u015bci powinien by\u0107 wyr\xf3wnywany i stopniowo zwi\u0119kszany w ka\u017cdej ze sfer."}),o.a.createElement("div",{className:"o-flex",style:{margin:"0 auto 0 auto"}},!!this.props.displayGraph&&o.a.createElement(_,null))))}}]),t}(n.Component),R=t(47),W=t(69),G=t.n(W),J=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,{mb:2.5,px:0,className:"fadeOnStart light-shadow"},o.a.createElement(G.a,{completed:this.props.completed,labelSize:"9px",height:"10px",className:"fadeOnStart"}))}}]),t}(n.Component),K=t(151),Z=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).createTask=function(a){e.props.createTask(a),"Enter"===a.key&&(a.target.value="")},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(x.a,{mb:2.5},o.a.createElement(K.a,{id:"standard-search",label:this.props.label,variant:"outlined",type:"search",fullWidth:!0,background:"white",margin:"dense",onChange:function(a){e.props.updateValue(a.target.value)},onKeyDown:function(a){e.createTask(a)}}))}}]),t}(n.Component),Q=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).stage={task:e.props.task},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("li",{className:"c-list__item",key:this.props.id,id:this.props.id,completed:this.props.completed.toString(),onClick:function(){e.props.isMainTask&&e.props.chooseMainTask(e.props.id)}},this.props.title)}}]),t}(n.Component),H=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"u-flex-1/2 o-flex o-flex--centered-h"},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement(V,{title:"Twoje \u017cyciowe cele",desc:"Przegl\u0105daj swoje marzenia codziennie, aby pami\u0119ta\u0107 do czego d\u0105\u017cysz i jak to osi\u0105gn\u0105\u0107."}),o.a.createElement(J,{completed:15}),o.a.createElement(Z,{label:"Dodaj nowy cel",createTask:this.props.createTask,updateValue:this.props.updateValue}),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none list-scrolling"},this.props.readyForTask&&this.props.tasks.map((function(a){return o.a.createElement(Q,{task:a,key:a.taskid,id:a.taskid,title:a.name,completed:a.isCompleted,chooseMainTask:e.props.chooseMainTask,isMainTask:"true"})})))))}}]),t}(n.Component),$=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).createTask=function(a){e.props.createTask(a,e.props.parentId),"Enter"===a.key&&(a.target.value="")},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(x.a,{mb:2.5},o.a.createElement(K.a,{id:"standard-search",label:this.props.label,variant:"outlined",type:"search",fullWidth:!0,background:"white",margin:"dense",onChange:function(a){e.props.updateValue(a.target.value)},onKeyDown:function(a){e.createTask(a)}}))}}]),t}(n.Component),X=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"u-flex-1/2 u-padding-horizontal-big ".concat(this.props.isVisible?"is-active":"u-hidden")},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement(V,{title:"Plan: ".concat(this.props.parentName),desc:"Tw\xf3j plan to gwarancja osi\u0105gni\u0119cia zamierzonego celu. Przemy\u015bl realizacj\u0119 zgodnie z metodologi\u0105 SMART, nast\u0119pnie wypisz wszystkie kroki i zacznij dzia\u0142a\u0107."}),o.a.createElement(J,{completed:65}),o.a.createElement($,{label:"Dodaj nowy krok",createTask:this.props.createTask,parentId:this.props.parentId,updateValue:this.props.updateValue}),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none list-scrolling"},this.props.readyForTask&&this.props.userSubtasks.map((function(e){return o.a.createElement(Q,{task:e,key:Math.floor(Math.random()*Math.floor(3e3)),id:Math.floor(Math.random()*Math.floor(3e3)),title:e.name,completed:e.isCompleted,isMainTask:"false"})})))))}}]),t}(n.Component),Y=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={textField:"",readyForTask:null,tasks:null,visibleTask:null},e.updateValue=function(a){e.setState({textField:a})},e.createTask=function(a){if("Enter"===a.key){var t=f();d.a.post("".concat(m,"/UserTask"),{name:e.state.textField,isCompleted:!1,isArchiwed:!1,userName:t},{"Content-Type":"application/json"}).then((function(a){console.log("Wys\u0142ano dane do utworzenia g\u0142\xf3wnego celu.",a),e.getMainTasks()})).catch((function(e){console.error("B\u0142\u0105d wysy\u0142ki danych do utworzenia celu.",e)}))}},e.createSubTask=function(a,t){if("Enter"===a.key){f();var n={},o={name:e.state.textField,isCompleted:!1};e.state.tasks.forEach((function(a){a.taskid===t&&(a.userSubtasks=[].concat(Object(z.a)(a.userSubtasks),[o]),n=a,console.log(n),d.a.post("".concat(m,"/UserTask"),n,{"Content-Type":"application/json"}).then((function(a){console.log("Wys\u0142ano dane do utworzenia g\u0142\xf3wnego celu.",a),e.getMainTasks()})).catch((function(e){console.error("B\u0142\u0105d wysy\u0142ki danych do utworzenia celu.",e)})))}))}},e.getMainTasks=function(){var a=f(),t=Object(R.a)(e);d.a.get("".concat(m,"/UserTask"),{params:{userName:a}}).then((function(e){console.log("Pobrano g\u0142\xf3wne cele:",e),t.setState({tasks:e.data,readyForTask:!0,textField:null})})).catch((function(e){console.error("B\u0142\u0105d pobierania listy zada\u0144.",e)}))},e.chooseMainTask=function(a){console.log("klikni\u0119to g\u0142\xf3wny task"),e.setState({visibleTask:a})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getMainTasks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"u-flex-8/12 o-flex u-padding-horizontal-big"},o.a.createElement(H,{tasks:this.state.tasks,readyForTask:this.state.readyForTask,updateValue:this.updateValue,createTask:this.createTask,chooseMainTask:this.chooseMainTask}),this.state.tasks&&this.state.tasks.map((function(a){return o.a.createElement(X,{key:a.taskid,parentId:a.taskid,parentName:a.name,userSubtasks:a.userSubtasks,readyForTask:e.state.readyForTask.toString(),isVisible:e.state.visibleTask===a.taskid,updateValue:e.updateValue,createTask:e.createSubTask})})))}}]),t}(n.Component),ee=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={user:h,BE:null,displaySurvey:null,displayGraph:null},e.getUserData=function(){var a=f();d.a.get("".concat(m,"/User"),{params:{userName:a}}).then((function(a){200===a.status?(console.log("Zalogowano. Pobieramy dane u\u017cytkownika:",a),e.setState({BE:a.data}),a.data.isLifeCircleFilled||e.displaySurvey(),a.data.isLifeCircleFilled&&e.initLifeCircle()):(console.error("Brak danych u\u017cytkownika w systemie."),console.log("Nast\u0119puje pr\xf3ba rejestracji u\u017cytkownika do systemu."),e.registerUser())})).catch((function(a){console.error("Brak danych u\u017cytkownika w systemie.",a),console.log("Nast\u0119puje pr\xf3ba rejestracji u\u017cytkownika do systemu."),e.registerUser()}))},e.registerUser=function(){var a=f(),t=h.profileObj.email;d.a.post("".concat(m,"/User"),{userName:a,email:t},{"Content-Type":"application/json"}).then((function(a){200===a.status&&(console.log("Zarejestrowano nowego u\u017cytkownika.",a),e.getUserData(),e.displaySurvey())})).catch((function(a){409===a.response.status?(console.log("U\u017cytkownik ju\u017c istnieje w systemie i nie mo\u017ce by\u0107 ponownie zarejestrowany.",a),console.log("Nast\u0119puje ponowna pr\xf3ba pobrania danych u\u017cytkownika."),e.getUserData()):(console.error("B\u0142\u0105d rejestracji nowego u\u017cytkownika.",a),console.log("Brak dalszych wskaza\u0144 do dzia\u0142ania."))}))},e.initLifeCircle=function(){e.setState({displayGraph:!0})},e.displaySurvey=function(){e.setState({displaySurvey:!0})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){return o.a.createElement(I,null,o.a.createElement(D,null),o.a.createElement(B,{displayGraph:this.state.displayGraph}),o.a.createElement(Y,null),this.state.displaySurvey&&o.a.createElement(S,null))}}]),t}(n.Component),ae=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={loggedIn:0},e.updateLogin=function(){e.setState({loggedIn:!e.state.loggedIn})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){h&&this.updateLogin()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.loggedIn?o.a.createElement(ee,null):o.a.createElement(w,{updateLogin:this.updateLogin}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t(113)}},[[81,1,2]]]);
//# sourceMappingURL=main.39e0d58e.chunk.js.map