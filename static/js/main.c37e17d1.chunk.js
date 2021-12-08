(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{211:function(e,t,n){},213:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71),c=n.n(o),s=(n(210),n(211),n(29)),i=n.n(s),u=n(55),l=n(25),d=n(31),h=n(26),f=n(27),p=(n(213),n(368)),m=n(369),v=n(178),b=n(378),j=n(380),g=n(2),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed,n=new Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(new Date(e.start.dateTime)),a=new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(new Date(e.start.dateTime));return Object(g.jsxs)(b.a,{className:"event-card",children:[Object(g.jsx)(b.a.Header,{as:"h3",className:"summary",children:e.summary}),Object(g.jsxs)(b.a.Body,{children:[Object(g.jsxs)(b.a.Text,{children:[Object(g.jsxs)("p",{className:"start-date",children:["Event date: ",a]}),Object(g.jsxs)("p",{className:"start-date",children:["Event starts at: ",n]}),Object(g.jsxs)("p",{children:["Timezone: ",e.start.timeZone]}),Object(g.jsxs)("p",{className:"location",children:["Event location: ",e.location]})]}),!t&&Object(g.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(g.jsx)("h3",{children:"About the event:"}),Object(g.jsx)("a",{href:e.htmlLink,role:"Event link",target:"_blank",children:"See details on Google Calendar"}),Object(g.jsx)("p",{className:"event-description",children:e.description})]})]}),Object(g.jsx)(b.a.Footer,{children:Object(g.jsx)(j.a,{variant:"primary",className:"".concat(t?"show":"hide"," details-btn"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"})})]})}}]),n}(a.Component),O=w,x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(g.jsx)(p.a,{children:Object(g.jsx)(m.a,{as:"ul",className:"EventList d-flex justify-content-center",children:e.map((function(e){return Object(g.jsx)(v.a,{as:"li",lg:6,children:Object(g.jsx)(O,{event:e})},e.id)}))})})}}]),n}(a.Component),y=x,k=n(376),S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Alert",children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(S),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(S),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"handleWindowClick",value:function(e){!this.state.showSuggestions||this.textInput.current&&this.textInput.current.contains(e.target)||this.setState({showSuggestions:!1})}},{key:"componentDidMount",value:function(){this.handleWindowClickBound=this.handleWindowClick.bind(this),this.textInput=r.a.createRef(),window.addEventListener("click",this.handleWindowClickBound)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleWindowClickBound)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",ref:this.textInput,children:[Object(g.jsx)(T,{text:this.state.infoText}),Object(g.jsx)(k.a.Control,{size:"lg",type:"text",className:"searchBar",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search for city"}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),N=E,W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:12,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;""===n?e.setState({numberOfEvents:n,errorText:""}):n>=1&&n<=32?(e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(n)):e.setState({numberOfEvents:e.state.numberOfEvents,errorText:"Please enter a number between 1 and 32"})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"num-events-container",children:[Object(g.jsx)(C,{text:this.state.errorText}),Object(g.jsxs)("div",{className:"numberOfEvents",children:[Object(g.jsx)("h5",{className:"events-text",children:"Number of events:"}),Object(g.jsx)(k.a.Control,{type:"number",name:"number",className:"num-events",value:this.state.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}})]})]})}}]),n}(a.Component),I=W,Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h1",{className:"welcome-title",children:["Hello, welcome to ",Object(g.jsx)("strong",{className:"meet-logo",children:"Meet"})]}),Object(g.jsx)("h4",{className:"slogan",children:"A web application designed to connect people together."})]})}}]),n}(r.a.Component),D=Z,A=n(20),L=n(370),B=n(379),M=n(190),J=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(A.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return s()}))}),[t]);var s=function(){return["React","JavaScript","Node","jQuery","AngularJS"].reduce((function(e,n){var a=t.filter((function(e){return e.summary.split(" ").includes(n)})).length;return a>0&&e.push({name:n,value:a}),e}),[])};return Object(g.jsx)(L.a,{width:400,height:400,children:Object(g.jsx)(B.a,{width:400,height:400,children:Object(g.jsx)(M.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},U=n(199),q=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],R=n(127),F=n.n(R),z=n(82),H=n.n(z),_=function(e){var t=e.map((function(e){return e.location}));return Object(U.a)(new Set(t))},P=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return H.a.done(),e.abrupt("return",q);case 4:if(navigator.onLine){e.next=8;break}return n=localStorage.getItem("lastEvents"),H.a.done(),e.abrupt("return",n?JSON.parse(t).events:[]);case 8:return e.next=10,G();case 10:if(!(a=e.sent)){e.next=20;break}return K(),r="https://6mccwalxe0.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+a,e.next=16,F.a.get(r);case 16:return(o=e.sent).data&&(c=_(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(c))),H.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,P(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,F.a.get("https://6mccwalxe0.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&V(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},V=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6mccwalxe0.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=(n(366),n(374)),Q=n(375),$=n(195),ee=n(196),te=n(83),ne=n(200),ae=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentLocation:"all",locations:[],events:[],numberOfEvents:12},e.updateEvents=function(t){Y().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({currentLocation:t,events:a})}))},e.updateEventCount=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({numberOfEvents:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Y().then((function(t){e.mounted&&e.setState({events:t,locations:_(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(D,{}),Object(g.jsx)(N,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(I,{updateEventCount:this.updateEventCount}),Object(g.jsxs)("div",{className:"data-vis-wrapper",children:[Object(g.jsx)(J,{events:this.state.events}),Object(g.jsx)(L.a,{height:400,children:Object(g.jsxs)(X.a,{margin:{top:20,right:40,bottom:20,left:0},children:[Object(g.jsx)(Q.a,{}),Object(g.jsx)($.a,{type:"category",dataKey:"city",name:"city"}),Object(g.jsx)(ee.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(g.jsx)(te.a,{cursor:{strokeDasharray:"3 3"}}),Object(g.jsx)(ne.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(g.jsx)(y,{events:this.state.events.slice(0,this.state.numberOfEvents)})]})}}]),n}(a.Component),re=ae,oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,381)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},ie=n(197);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(re,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ce(t,e)}))}}(),se(),ie.config("1ffb7b4fc884435d885a81ef15360b99").install()}},[[367,1,2]]]);
//# sourceMappingURL=main.c37e17d1.chunk.js.map