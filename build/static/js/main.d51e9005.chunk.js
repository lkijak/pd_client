(this["webpackJsonpsmart-evolution"]=this["webpackJsonpsmart-evolution"]||[]).push([[0],{54:function(e,a,t){e.exports=t(83)},76:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(18),s=t.n(i),r=t(9),l=t(10),c=t(12),u=t(11),m=t(14),d=t.n(m),p="https://smart-evolution.azurewebsites.net",y="850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com",g=JSON.parse(localStorage.getItem("user")),z=function(){var e=JSON.parse(localStorage.getItem("user")).profileObj.email;return e=e.slice(0,e.indexOf("@"))},f=function(e){localStorage.setItem("user",JSON.stringify(e)),window.location.reload()},h=function(e){console.error("B\u0142\u0105d logowania:",e)},b=function(){localStorage.clear("user"),console.log("Pomy\u015blnie wylogowano."),window.location.reload()},w=(t(76),t(26)),v=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"o-section o-section--full c-start o-flex o-flex--centered o-flex--grids o-flex--wrap u-padding-none"},o.a.createElement("div",{className:"c-start__image o-flex__item u-flex-7/12"}),o.a.createElement("div",{className:"c-start__container o-flex__item u-flex-5/12 o-flex o-flex--centered"},o.a.createElement("div",{className:"c-menu--top"},o.a.createElement("div",{className:"c-heading c-heading--h3 u-font-color--3 u-text--bold u-margin-none"},"SMART Evolution")),o.a.createElement("div",{className:"o-wrapper c-start__content u-bg-color--1"},o.a.createElement("p",{className:"c-heading c-heading--h0 u-margin-bottom-huge u-font-color--1 u-text--thin"},"Przemie\u0144 marzenia w plan"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase"},"Wykreuj rzeczywisto\u015b\u0107 dla siebie"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase u-margin-bottom-none"},"i ciesz si\u0119 \u017cyciem, jakiego chcia\u0142e\u015b"),o.a.createElement("div",{className:"c-start__buttons u-position-relative"},o.a.createElement(w.GoogleLogin,{clientId:y,buttonText:"Zaloguj z Google",onSuccess:f,onFailure:h,cookiePolicy:"single_host_origin",isSignedIn:!0})))))}}]),t}(n.Component),j=t(34),k=t(35),E=t.n(k),N=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).chartRef=o.a.createRef(),e.state={data:null},e.getGraphData=function(){d.a.get("".concat(p,"/Survey/UserResponse"),{params:{surveyName:"Life_Circle",userName:z()}}).then((function(a){console.log("pobrano dane grafu.",a);for(var t=a.data.userResponseQuestionAndAnswerViewModels,n=[],o=0;o<t.length;o+=3){var i=parseInt(t[o].answerText)+parseInt(t[o+1].answerText)+parseInt(t[o+2].answerText);i/=3,n=[].concat(Object(j.a)(n),[i])}e.setState({data:n})})).catch((function(e){console.error("B\u0142\u0105d pobierania danych grafu.",e)}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getGraphData(),setTimeout((function(){var a=e.chartRef.current.getContext("2d");E.a.Legend.prototype.afterFit=function(){this.height=this.height+30},new E.a(a,{type:"polarArea",data:{labels:["Rozw\xf3j osobisty","Kariera","Finanse","Otoczenie","Partner","Rodzina","Wypoczynek","Zdrowie"],datasets:[{data:e.state.data,backgroundColor:["rgba(255,61,0 ,1)","rgba(255,171,0 ,1)","rgba(174,234,0 ,1)","rgba(0,200,83 ,1)","rgba(0,184,212 ,1)","rgba(41,98,255 ,1)","rgba(98,0,234 ,1)","rgba(213,0,0 ,1)"]}]},options:{responsive:!0,maintainAspectRatio:!1,scale:{angleLines:{display:!1},ticks:{min:0,max:5,precision:0,z:1,display:!1},gridLines:{drawOnChartArea:!0,lineWidth:2}},legend:{display:!0,labels:{fontColor:"black"}},tooltips:{enabled:!0},animation:{tension:{duration:1e3,easing:"easeOutCubic",from:1,to:0,loop:!0}}}})}),650)}},{key:"render",value:function(){return o.a.createElement("div",{className:"c-chart--life-graph"},o.a.createElement("canvas",{width:"350",height:"400",id:"myChart",ref:this.chartRef}))}}]),t}(n.Component),x=t(102),q=t(105),C=t(106),_=t(104),O=t(103),I=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).handleChange=function(a){e.props.action(e.props.question,a.target.value),e.setState({done:1}),setTimeout((function(){e.props.stepindex<e.props.lastindex-1?document.querySelectorAll(".multi-step-nav button")[1].click():e.props.submitForm()}),300)},e}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{m:"auto",className:"survey-content"},o.a.createElement(O.a,{className:"survey-header",height:"100px"},o.a.createElement("h3",null,this.props.question)),o.a.createElement(_.a,{component:"fieldset"},o.a.createElement(O.a,{className:"survey-header",mb:2},"Odpowiedz wed\u0142ug podanej skali"),o.a.createElement(q.a,{className:"survey-header",onChange:this.handleChange,row:!0},o.a.createElement(C.a,{value:"1",control:o.a.createElement(x.a,null),label:"1",labelPlacement:"top"}),o.a.createElement(C.a,{value:"2",control:o.a.createElement(x.a,null),label:"2",labelPlacement:"top"}),o.a.createElement(C.a,{value:"3",control:o.a.createElement(x.a,null),label:"3",labelPlacement:"top"}),o.a.createElement(C.a,{value:"4",control:o.a.createElement(x.a,null),label:"4",labelPlacement:"top"}),o.a.createElement(C.a,{value:"5",control:o.a.createElement(x.a,null),label:"5",labelPlacement:"top"}))))}}]),t}(n.Component),D=t(46),S=t.n(D),L=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={survey:[{questionID:1,question:"Czy masz plan na siebie?"},{questionID:2,question:"Czy inwestujesz w sw\xf3j rozw\xf3j?"},{questionID:3,question:"Czy regularnie czytasz ksi\u0105\u017cki?"},{questionID:4,question:"Czy obecna praca daje Ci satysfakcj\u0119?"},{questionID:5,question:"Czy lubisz swoj\u0105 prac\u0119?"},{questionID:6,question:"Czy praca pozwala Ci si\u0119 rozwija\u0107?"},{questionID:7,question:"Czy jeste\u015b zadowolony z poziomu dochodu?"},{questionID:8,question:"Czy masz zabezpieczenie finansowe na kilka miesi\u0119cy bez pracy?"},{questionID:9,question:"Czy wystarcza Ci na \u017cycie i podstawowe rzeczy?"},{questionID:10,question:"Czy jeste\u015b zadowolony z miejsca zamieszkania, stanu mieszkania?"},{questionID:11,question:"Czy lubisz swoje otoczenie?"},{questionID:12,question:"Czy otoczenie zapewnia Ci poczucie bezpiecze\u0144stwa?"},{questionID:13,question:"Czy jeste\u015b szcz\u0119\u015bliwy w obecnym zwi\u0105zku?"},{questionID:14,question:"Czy partner jest dla Ciebie wsparciem?"},{questionID:15,question:"Czy ufacie sobie?"},{questionID:16,question:"Czy masz zaufane grono przyjaci\xf3\u0142?"},{questionID:17,question:"Czy mo\u017cesz polega\u0107 na rodzinnie i przyjacio\u0142ach?"},{questionID:18,question:"Czy lubisz sp\u0119dza\u0107 czas z rodzin\u0105?"},{questionID:19,question:"Czy masz czas na swoje hobby i zainteresowania?"},{questionID:20,question:"Czy budzisz si\u0119 wypocz\u0119ty?"},{questionID:21,question:"Czy wychodzisz z domu i odpoczywasz np. w parku, lesie?"},{questionID:22,question:"Czy masz jakie\u015b dolegliwo\u015bci, choroby przewlek\u0142e?"},{questionID:23,question:"Czy robisz profilaktyczne badania?"},{questionID:24,question:"Czy uprawiasz sport, \u0107wiczenia fizyczne, regularnie?"}],answers:[]},e.removeSurvey=function(){var e=document.querySelector(".survey-content"),a=document.querySelector("#survey");e.classList.add("fading-out"),a.classList.add("fading-out"),setTimeout((function(){e.remove(),a.remove(),window.location.reload()}),500)},e.submitForm=function(){d.a.post("".concat(p,"/Survey/UserResponse"),{surveyName:"Life_Circle",userName:z(),userResponseQuestionAndAnswerViewModels:e.state.answers},{"Content-Type":"application/json"}).then((function(a){console.info("Wys\u0142ano ankiet\u0119. Nast\u0119puje zamkni\u0119cie ankiety."),e.removeSurvey()})).catch((function(e){console.error("B\u0142\u0105d wysy\u0142ki ankiety.",e)}))},e.handleChange=function(a,t){e.setState({answers:[].concat(Object(j.a)(e.state.answers),[{questionText:a,answerText:t}])})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"survey",className:"overlay"},o.a.createElement(S.a,null,function(){for(var a=[],t=0;t<e.state.survey.length;t++)a.push(o.a.createElement(I,{key:e.state.survey[t].questionID,question:e.state.survey[t].question,action:e.handleChange,lastindex:e.state.survey.length,submitForm:e.submitForm}));return a}()))}}]),t}(n.Component),T=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={user:g,BE:null,displaySurvey:null,displayGraph:null},e.getUserData=function(){var a=z();d.a.get("".concat(p,"/User"),{params:{userName:a}}).then((function(a){200===a.status?(console.log("Zalogowano. Pobieramy dane u\u017cytkownika:",a),e.setState({BE:a.data}),a.data.isLifeCircleFilled||e.displaySurvey(),a.data.isLifeCircleFilled&&e.initLifeCircle()):(console.error("Brak danych u\u017cytkownika w systemie."),console.log("Nast\u0119puje pr\xf3ba rejestracji u\u017cytkownika do systemu."),e.registerUser())})).catch((function(a){console.error("Brak danych u\u017cytkownika w systemie.",a),console.log("Nast\u0119puje pr\xf3ba rejestracji u\u017cytkownika do systemu."),e.registerUser()}))},e.registerUser=function(){var a=z(),t=g.profileObj.email;d.a.post("".concat(p,"/User"),{userName:a,email:t},{"Content-Type":"application/json"}).then((function(a){200===a.status&&(console.log("Zarejestrowano nowego u\u017cytkownika.",a),e.getUserData(),e.displaySurvey())})).catch((function(a){409===a.response.status?(console.log("U\u017cytkownik ju\u017c istnieje w systemie i nie mo\u017ce by\u0107 ponownie zarejestrowany.",a),console.log("Nast\u0119puje ponowna pr\xf3ba pobrania danych u\u017cytkownika."),e.getUserData()):(console.error("B\u0142\u0105d rejestracji nowego u\u017cytkownika.",a),console.log("Brak dalszych wskaza\u0144 do dzia\u0142ania."))}))},e.initLifeCircle=function(){e.setState({displayGraph:!0})},e.displaySurvey=function(){e.setState({displaySurvey:!0})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){return o.a.createElement("section",{className:"c-dashboard o-flex o-flex--wrap o-flex--space-between u-padding-none u-bg-color--6 o-flex--lock-top js-dashboard"},o.a.createElement("div",{className:"u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3"},o.a.createElement("a",{className:"o-link u-margin-right-great"},"RODO"),o.a.createElement("a",{className:"o-link u-margin-right-great"},"Polityka prywatno\u015bci"),o.a.createElement(w.GoogleLogout,{clientId:y,buttonText:"Wyloguj",onLogoutSuccess:b,render:function(e){return o.a.createElement("a",{className:"o-link",onClick:e.onClick,disabled:e.disabled},"Wyloguj")}})),o.a.createElement("div",{className:"u-flex-3/12 u-padding-horizontal-big"},o.a.createElement("div",{className:"c-card u-padding-big o-flex o-flex--centered-v u-margin-bottom-big"},o.a.createElement("img",{className:"c-nav__picture u-margin-right",src:g.profileObj.imageUrl}),o.a.createElement("strong",null,g.profileObj.name)),o.a.createElement("div",{className:"c-card c-card--info c-card--white u-padding-big o-flex o-flex o-flex--wrap"},o.a.createElement("h3",{className:"o-flex u-text--left u-margin-bottom-tiny"},"Ko\u0142o \u017cycia"),o.a.createElement("div",{className:"o-flex",style:{margin:"30px auto"}},!!this.state.displayGraph&&o.a.createElement(N,null)))),o.a.createElement("div",{className:"u-flex-4/12 o-flex o-flex--centered-h"},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement("h3",{className:"u-text--center u-margin-bottom-tiny"},"Twoje \u017cyciowe cele"),o.a.createElement("p",{className:"u-text--center u-text--smaller"},"Przegl\u0105daj je codziennie, aby pami\u0119ta\u0107",o.a.createElement("br",null),"do czego d\u0105\u017cysz i jak to osi\u0105gn\u0105\u0107"),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none"},o.a.createElement("li",{className:"c-list__item"},"Sprzedawa\u0107 odzie\u017c w\u0142asnej marki"),o.a.createElement("li",{className:"c-list__item"},"Osiedli\u0107 si\u0119 w Tajlandii"),o.a.createElement("li",{className:"c-list__item"},"W\u0142ada\u0107 p\u0142ynnie pi\u0119cioma j\u0119zykami"),o.a.createElement("li",{className:"c-list__item"},"Mie\u0107 tytu\u0142 mistrza szachowego"),o.a.createElement("li",{className:"c-list__item"},"Zbudowa\u0107 dom"),o.a.createElement("li",{className:"c-list__item"},"Za\u0142o\u017cy\u0107 rodzin\u0119 z dw\xf3jk\u0105 dzieci"),o.a.createElement("li",{className:"c-list__item"},"Zwiedzi\u0107 ca\u0142y \u015bwiat")))),o.a.createElement("div",{className:"u-flex-5/12 u-padding-horizontal-big"},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement("h3",{className:"u-text--left u-margin-bottom-tiny"},"Plan realizacji: Sprzedawa\u0107 odzie\u017c w\u0142asnej marki"),o.a.createElement("p",{className:"u-text--left"},"Tw\xf3j plan to gwarancja osi\u0105gni\u0119cia zamierzonego celu. Przemy\u015bl realizacj\u0119 zgodnie z metodologi\u0105 SMART, nast\u0119pnie wypisz wszystkie kroki i zacznij dzia\u0142a\u0107."),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none"},o.a.createElement("li",{className:"c-list__item"},"Nawi\u0105za\u0107 znajomo\u015b\u0107 z projektantem odzie\u017cy"),o.a.createElement("li",{className:"c-list__item"},"Nawi\u0105za\u0107 znajomo\u015b\u0107 z dystrybutorem"),o.a.createElement("li",{className:"c-list__item"},"Wyszuka\u0107 w internecie fabryki odzie\u017cy"),o.a.createElement("li",{className:"c-list__item"},"Wykona\u0107 telefon dla zorientowania w kosztach produkcji"),o.a.createElement("li",{className:"c-list__item"},"Kolejny krok"),o.a.createElement("li",{className:"c-list__item"},"Kolejny krok")))),!!this.state.displaySurvey&&o.a.createElement(L,null))}}]),t}(n.Component),A=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={loggedIn:0},e.updateLogin=function(){e.setState({loggedIn:!e.state.loggedIn})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g&&this.updateLogin()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.loggedIn?o.a.createElement(T,null):o.a.createElement(v,{updateLogin:this.updateLogin}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.d51e9005.chunk.js.map