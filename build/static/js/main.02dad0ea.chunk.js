(this["webpackJsonpsmart-evolution"]=this["webpackJsonpsmart-evolution"]||[]).push([[0],{142:function(e,a,t){e.exports=t(446)},146:function(e,a,t){},446:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),i=t(20),l=t.n(i),c=(t(146),t(147),t(424),"".concat("https://smart-evolution.azurewebsites.net","/Login/GoogleLogin"),"617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com"),r=function(e){console.info(e),"/dashboard/"!=window.location.href&&(window.location.href="/dashboard/")},s=function(e){console.error(e),"/"!=window.location.href&&(window.location.href="/")},m=function(){console.info("logout")},d=t(78),u=t(3),g=t(34),h=t(35),f=t(37),p=t(36),b=t(54),E=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"o-section o-section--full c-start o-flex o-flex--centered o-flex--grids o-flex--wrap u-padding-none"},o.a.createElement("div",{className:"c-start__image o-flex__item u-flex-7/12"}),o.a.createElement("div",{className:"c-start__container o-flex__item u-flex-5/12 o-flex o-flex--centered"},o.a.createElement("div",{className:"c-menu--top"},o.a.createElement("div",{className:"c-heading c-heading--h3 u-font-color--3 u-text--bold u-margin-none"},"SMART Evolution")),o.a.createElement("div",{className:"o-wrapper c-start__content u-bg-color--1"},o.a.createElement("p",{className:"c-heading c-heading--h0 u-margin-bottom-huge u-font-color--1 u-text--thin"},"Przemie\u0144 marzenia w plan"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase"},"Wykreuj rzeczywisto\u015b\u0107 dla siebie"),o.a.createElement("p",{className:"c-heading c-heading--h3 u-text--normal u-text--uppercase u-margin-bottom-none"},"i ciesz si\u0119 \u017cyciem, jakiego chcia\u0142e\u015b"),o.a.createElement("div",{className:"c-start__buttons u-position-relative"},o.a.createElement(b.GoogleLogin,{clientId:c,buttonText:"Zaloguj z Google",onSuccess:r,onFailure:s,cookiePolicy:"single_host_origin",isSignedIn:!0})))))}}]),t}(o.a.Component),x=t(81),w=t.n(x),z=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).chartRef=o.a.createRef(),e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){var a=e.chartRef.current.getContext("2d");w.a.Legend.prototype.afterFit=function(){this.height=this.height+30},new w.a(a,{type:"polarArea",data:{labels:["Rozw\xf3j osobisty","Kariera","Finanse","Otoczenie","Partner","Rodzina","Wypoczynek","Zdrowie"],datasets:[{data:[Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1],backgroundColor:["rgba(255,61,0 ,1)","rgba(255,171,0 ,1)","rgba(174,234,0 ,1)","rgba(0,200,83 ,1)","rgba(0,184,212 ,1)","rgba(41,98,255 ,1)","rgba(98,0,234 ,1)","rgba(213,0,0 ,1)"]}]},options:{responsive:!0,maintainAspectRatio:!1,scale:{angleLines:{display:!1},ticks:{min:0,max:5,precision:0,z:1,display:!1},gridLines:{drawOnChartArea:!0,lineWidth:2}},legend:{display:!0,labels:{fontColor:"black"}},tooltips:{enabled:!0},animation:{tension:{duration:1e3,easing:"easeOutCubic",from:1,to:0,loop:!0}}}})}),650)}},{key:"render",value:function(){return o.a.createElement("div",{className:"c-chart--life-graph"},o.a.createElement("canvas",{width:"350",height:"400",id:"myChart",ref:this.chartRef}))}}]),t}(n.Component),y=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"c-dashboard o-flex o-flex--wrap o-flex--space-between u-padding-none u-bg-color--6 o-flex--lock-top"},o.a.createElement("div",{className:"u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3"},o.a.createElement("a",{className:"o-link u-margin-right-great"},"RODO"),o.a.createElement("a",{className:"o-link u-margin-right-great"},"Polityka prywatno\u015bci"),o.a.createElement(b.GoogleLogout,{clientId:c,buttonText:"Wyloguj",onLogoutSuccess:m,render:function(e){return o.a.createElement("a",{className:"o-link",onClick:e.onClick,disabled:e.disabled},"Wyloguj")}})),o.a.createElement("div",{className:"u-flex-3/12 u-padding-horizontal-big"},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement("h3",{className:"u-text--center u-margin-bottom-tiny"},"Twoje \u017cyciowe cele"),o.a.createElement("p",{className:"u-text--center u-text--smaller"},"Przegl\u0105daj je codziennie, aby pami\u0119ta\u0107",o.a.createElement("br",null),"do czego d\u0105\u017cysz i jak to osi\u0105gn\u0105\u0107"),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none"},o.a.createElement("li",{className:"c-list__item"},"Sprzedawa\u0107 odzie\u017c w\u0142asnej marki"),o.a.createElement("li",{className:"c-list__item"},"Osiedli\u0107 si\u0119 w Tajlandii"),o.a.createElement("li",{className:"c-list__item"},"W\u0142ada\u0107 p\u0142ynnie pi\u0119cioma j\u0119zykami"),o.a.createElement("li",{className:"c-list__item"},"Mie\u0107 tytu\u0142 mistrza szachowego"),o.a.createElement("li",{className:"c-list__item"},"Zbudowa\u0107 dom"),o.a.createElement("li",{className:"c-list__item"},"Za\u0142o\u017cy\u0107 rodzin\u0119 z dw\xf3jk\u0105 dzieci"),o.a.createElement("li",{className:"c-list__item"},"Zwiedzi\u0107 ca\u0142y \u015bwiat")))),o.a.createElement("div",{className:"u-flex-6/12 o-flex o-flex--centered-h"},o.a.createElement("div",{className:"c-card u-padding-great o-flex o-flex--start o-flex--column"},o.a.createElement("h3",{className:"u-text--left u-margin-bottom-tiny"},"Plan realizacji: Sprzedawa\u0107 odzie\u017c w\u0142asnej marki"),o.a.createElement("p",{className:"u-text--left"},"Tw\xf3j plan to gwarancja osi\u0105gni\u0119cia zamierzonego celu. Przemy\u015bl realizacj\u0119 zgodnie z metodologi\u0105 SMART, nast\u0119pnie wypisz wszystkie kroki i zacznij dzia\u0142a\u0107."),o.a.createElement("ul",{className:"c-list u-flex-12/12 u-margin-bottom-none"},o.a.createElement("li",{className:"c-list__item"},"Nawi\u0105za\u0107 znajomo\u015b\u0107 z projektantem odzie\u017cy"),o.a.createElement("li",{className:"c-list__item"},"Nawi\u0105za\u0107 znajomo\u015b\u0107 z dystrybutorem"),o.a.createElement("li",{className:"c-list__item"},"Wyszuka\u0107 w internecie fabryki odzie\u017cy"),o.a.createElement("li",{className:"c-list__item"},"Wykona\u0107 telefon dla zorientowania w kosztach produkcji"),o.a.createElement("li",{className:"c-list__item"},"Kolejny krok"),o.a.createElement("li",{className:"c-list__item"},"Kolejny krok")))),o.a.createElement("div",{className:"u-flex-3/12 u-padding-horizontal-big"},o.a.createElement("div",{className:"c-card u-padding-big o-flex o-flex--centered-v u-margin-bottom-big"},o.a.createElement("img",{className:"c-nav__picture u-margin-right",src:"s"}),o.a.createElement("strong",null,"s")),o.a.createElement("div",{className:"c-card c-card--info c-card--white u-padding-big o-flex o-flex o-flex--wrap"},o.a.createElement("h3",{className:"o-flex u-text--left u-margin-bottom-tiny"},"Ko\u0142o \u017cycia"),o.a.createElement("div",{className:"o-flex",style:{margin:"30px auto"}},o.a.createElement(z,null)))))}}]),t}(o.a.Component),N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/"},o.a.createElement(E,null)),o.a.createElement(u.a,{exact:!0,path:"/dashboard/"},o.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.02dad0ea.chunk.js.map