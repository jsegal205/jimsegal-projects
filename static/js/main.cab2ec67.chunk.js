(this["webpackJsonpjsegal205.github.io"]=this["webpackJsonpjsegal205.github.io"]||[]).push([[0],{100:function(e,t,a){},210:function(e,t,a){e.exports=a(494)},215:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},26:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},492:function(e,t,a){},493:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(64),c=a.n(l),o=(a(215),a(26),a(11)),s=a(7),m=a(24),i=a(69);i.a.initialize("UA-45142145-1",{testMode:!1,gaOptions:{cookieDomain:"auto"}});var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(e){i.a.set(Object(m.a)({page:e},t)),i.a.pageview(e)},l=function(t){return Object(n.useEffect)((function(){return a(t.location.pathname)}),[t.location.pathname]),r.a.createElement(e,t)};return l},E=a(13),f="https://api.jimsegal.com",p=[{link:"/congress",subtitle:"Some fun data surrounding the current congressional sesssion",title:"Congress"},{link:"/recipes",subtitle:"A bunch of recipes that I frequent and wanted to show off",title:"Recipes"},{link:"/spacex",subtitle:"A countdown timer until the next launch of a Space X rocket",title:"Space X"}],h=a(101),d=a.n(h),g=a(173),b=a(174),v=a.n(b),N=function(e,t){var a=Object(n.useState)(t),r=Object(E.a)(a,2),l=r[0],c=r[1],o=Object(n.useState)(!0),s=Object(E.a)(o,2),m=s[0],i=s[1];return Object(n.useEffect)((function(){(function(){var t=Object(g.a)(d.a.mark((function t(){var a,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(!0),t.next=4,v.a.get(e);case 4:a=t.sent,c(a.data),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),n=t.t0.message,r=t.t0.response,c({error:n,status:r?r.status:"500"});case 13:return t.prev=13,i(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,8,13,16]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),{loading:m,data:l}},y=function(e){var t=e.componentName;return r.a.createElement("section",null,r.a.createElement("h3",null,"Whoops! There was a problem loading"," ",t?"".concat(t," data."):"data."),r.a.createElement("p",null,"Please reload browser to try again in a little bit."))},w=(a(235),a(236),function(){return r.a.createElement("section",{className:"loader"},r.a.createElement("div",{className:"loader-wheel"}),r.a.createElement("div",{className:"loader-text"},"Loading"))}),k=function(){var e=N("".concat(f,"/recipes")),t=e.loading,a=e.data,l=Object(n.useState)(""),c=Object(E.a)(l,2),s=c[0],i=c[1],u=Object(n.useState)([]),p=Object(E.a)(u,2),h=p[0],d=p[1];return Object(n.useEffect)((function(){if(!t&&a){if(a.error)return void d([]);var e=a.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));d(e)}}),[t,a,s]),r.a.createElement("section",null,r.a.createElement("h2",null,"Recipes"),t&&r.a.createElement(w,null),a&&a.error&&r.a.createElement(y,{componentName:"Recipes"}),a&&a.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"recipes-filter-container"},r.a.createElement("label",{htmlFor:"recipes-filter"},"Search"),r.a.createElement("input",{type:"text",id:"recipes-filter",className:"recipes-filter-input",value:s,onChange:function(e){i(e.target.value)},"data-testid":"recipes-filter"}),s&&r.a.createElement("button",{className:"recipes-filter-reset",onClick:function(){i("")},"data-testid":"recipes-filter-reset"},"reset")),h.length?r.a.createElement("ul",{"data-testid":"recipes-list"},h.map((function(e){return r.a.createElement("li",{key:e.slug},r.a.createElement(o.b,{to:{pathname:"/recipe/".concat(e.slug),state:Object(m.a)({},e)}},e.title))}))):r.a.createElement("div",{className:"recipes-no-results"},"No results for"," ",r.a.createElement("strong",null,r.a.createElement("em",null,s)))))},j=a(67),O=a.n(j),_=function(){return r.a.createElement("h1",null,"Not Found")},S=(a(318),function(e){var t=function(e){var t=e.pathname,a=e.state;if(a&&a.slug)return a.slug;var n=t.split("/");return n[n.length-1]}(e.location),a=N("".concat(f,"/recipe/").concat(t)),n=a.loading,l=a.data;if(n)return r.a.createElement(w,null);if(404===l.status)return r.a.createElement(_,null);if(l.error)return r.a.createElement(y,{componentName:"Recipe"});var c=l.title,o=l.referenceLink,s=l.ingredients,m=l.directions,i=l.notes;return r.a.createElement("section",null,r.a.createElement("h2",null,c),o&&r.a.createElement("small",null,r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Original Reference")),r.a.createElement("h3",null,"Ingredients"),r.a.createElement("div",{className:"ingredients"},r.a.createElement(O.a,{source:s})),r.a.createElement("h3",null,"Directions"),r.a.createElement("div",{className:"directions"},r.a.createElement(O.a,{source:m})),i&&[r.a.createElement("h3",{key:"notes-header"},"Notes"),r.a.createElement("div",{key:"notes-desc"},r.a.createElement(O.a,{source:i}))])}),F=(a(319),function(){var e=N("https://api.spacexdata.com/v3/launches/upcoming?limit=1"),t=e.loading,a=e.data,l=function(){var e={};if(!t){if(a.error)return e;if(a[0]){var n=+new Date(a[0].launch_date_utc)-+new Date;n>0&&(e={days:Math.floor(n/864e5),hours:Math.floor(n/36e5%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)})}}return e},c=Object(n.useState)(l()),o=Object(E.a)(c,2),s=o[0],m=o[1];Object(n.useEffect)((function(){var e=setTimeout((function(){m(l())}),1e3);return function(){return clearTimeout(e)}}));var i=[];return Object.keys(s).forEach((function(e){("seconds"===e||s[e])&&i.push(r.a.createElement("div",{key:e},s[e]," ",e," "))})),r.a.createElement("section",{className:"spacex-container"},r.a.createElement("h2",null,"Next Space X Launch"),t&&r.a.createElement(w,null),a&&a.error&&r.a.createElement(y,{componentName:"SpaceX"}),a&&a.length&&r.a.createElement(r.a.Fragment,null,a.map((function(e){var t=new Date(e.launch_date_utc).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return r.a.createElement(n.Fragment,{key:e.mission_name},r.a.createElement("div",{className:"spacex-mega"},i),r.a.createElement("h3",null,e.mission_name),r.a.createElement("div",{className:"spacex-item"},r.a.createElement("label",null,"When:"),r.a.createElement("span",null,t)),r.a.createElement("div",{className:"spacex-item"},r.a.createElement("label",null,"Rocket:"),r.a.createElement("span",null,e.rocket.rocket_name)),r.a.createElement("div",{className:"spacex-item"},r.a.createElement("label",null,"Launch Site:"),r.a.createElement("span",null,e.launch_site.site_name_long)),r.a.createElement("div",{className:"spacex-details"},e.details))}))))}),D=function(){var e=window;return{height:e.innerHeight,width:e.innerWidth}},M=function(){var e=Object(n.useState)(D()),t=Object(E.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){r(D())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a},C=a(9),x=(a(100),function(){var e=N("".concat(f,"/congress/stats")),t=e.loading,a=e.data,n=M().width,l={D:"democrat",F:"female",M:"male",R:"republican",house:"House of Representatives",senate:"Senate"},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},s=function(e,t){return r.a.createElement("div",null,r.a.createElement("label",null,e,": "),r.a.createElement("span",null,t))},i=function(e){var t=Object.keys(e).map((function(t){return Object(m.a)({},e[t],{age:t})}));return r.a.createElement("section",{className:"chamber-chart"},r.a.createElement("h3",null,"Distrobution of age"),r.a.createElement(C.b,{width:.9*n,height:400,data:t,barGap:"10%",barCategoryGap:"20%",margin:{top:20,right:10,left:10,bottom:20}},r.a.createElement(C.c,{strokeDasharray:"3 3"}),r.a.createElement(C.i,{dataKey:"age",label:{value:"Age",position:"bottom"}}),r.a.createElement(C.j,{allowDecimals:!1}),r.a.createElement(C.h,null),r.a.createElement(C.e,{verticalAlign:"top"}),r.a.createElement(C.a,{dataKey:"D",stackId:"a",fill:"#0015BC",name:c(l.D)}),r.a.createElement(C.a,{dataKey:"R",stackId:"a",fill:"#E9141D",name:c(l.R)}),r.a.createElement(C.a,{dataKey:"M",stackId:"b",fill:"#00D136",name:c(l.M)}),r.a.createElement(C.a,{dataKey:"F",stackId:"b",fill:"#B533FF",name:c(l.F)})))},u=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h4",null,"Average Age"),E("",e.average.all),r.a.createElement("section",null,r.a.createElement("h5",null,"By Party"),E(c(l.D),e.average.democrat),E(c(l.R),e.average.republican)),r.a.createElement("section",null,r.a.createElement("h5",null,"By Gender"),E(c(l.F),e.average.female),E(c(l.M),e.average.male))),p(e,"youngest",t),p(e,"oldest",t))},E=function(e,t){return r.a.createElement("div",null,e?r.a.createElement("label",null,e,": "):"",r.a.createElement("span",null,t," years old"))},p=function(e,t,a){return r.a.createElement("section",null,r.a.createElement("h4",null,c(t)," Member"),r.a.createElement("label",null,r.a.createElement(o.b,{to:{pathname:"/congress/".concat(a,"/member/").concat(e[t].id),state:Object(m.a)({},e[t])}},e[t].full_name)),E("Age",e[t].age),s("Date of Birth",e[t].date_of_birth),s("State Representation",e[t].state),s("Gender",c(l[e[t].gender])),s("Party",c(l[e[t].party])))},h=function(e){return r.a.createElement("section",null,r.a.createElement("h4",null,"Number of Members by Gender"),d(e))},d=function(e){return r.a.createElement(r.a.Fragment,null,s("Total",e.total),s(c(l.F),"".concat(e.women," (").concat(e.percentWomen,"%)")),s(c(l.M),"".concat(e.men," (").concat(e.percentMen,"%)")))},g=function(e){return r.a.createElement("section",{className:"congress-party-section"},r.a.createElement("h4",null,"Number of Members by Party"),b(e))},b=function(e){var t=[{name:"Male",value:e.D.men,color:"#00D136"},{name:"Female",value:e.D.women,color:"#B533FF"}],a=[{name:"Male",value:e.R.men,color:"#00D136"},{name:"Female",value:e.R.women,color:"#B533FF"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"congress-party-chart-legend"},r.a.createElement("span",{className:"congress-party-chart-legend-item congress-party-chart-legend-item-male"},"."),r.a.createElement("span",null,"Male"),r.a.createElement("span",{className:"congress-party-chart-legend-item congress-party-chart-legend-item-female"},"."),r.a.createElement("span",null,"Female")),r.a.createElement("section",{className:"congress-party-chart-section"},r.a.createElement("h4",{className:"congress-party-chart-section-header"},"Democrats"),r.a.createElement(C.g,{width:200,height:200},r.a.createElement(C.f,{dataKey:"value",data:t,outerRadius:80},t.map((function(e){return r.a.createElement(C.d,{fill:e.color,key:e.name})}))),r.a.createElement(C.h,null)),d(e.D)),r.a.createElement("section",{className:"congress-party-chart-section"},r.a.createElement("h4",{className:"congress-party-chart-section-header"},"Republicans"),r.a.createElement(C.g,{width:200,height:200},r.a.createElement(C.f,{dataKey:"value",data:a,outerRadius:80},a.map((function(e){return r.a.createElement(C.d,{fill:e.color,key:e.name})}))),r.a.createElement(C.h,null)),d(e.R)))};return r.a.createElement("section",null,r.a.createElement("h2",{className:"congress-header"},"Congressional Information"),r.a.createElement("article",{className:"congress-citation"},r.a.createElement("span",null,"Data provided by "),r.a.createElement("a",{href:"https://projects.propublica.org/api-docs/congress-api/",target:"_blank",rel:"noopener noreferrer"},"Propublica Congress API")),t&&r.a.createElement(w,null),a&&a.error&&r.a.createElement(y,{componentName:"Congress"}),a&&!a.error&&r.a.createElement("div",{className:"congress"},["house","senate"].map((function(e){return function(e,t){return r.a.createElement("article",{key:t},r.a.createElement("hr",null),r.a.createElement("h3",null,l[t]),r.a.createElement(o.b,{className:"chamber-members",to:{pathname:"/congress/".concat(t,"/members"),state:{chamber:t}}},"View all ","house"===t?"Representatives":"Senators"),r.a.createElement("section",{className:"chamber"},!!e[t].age.distribution&&i(e[t].age.distribution),r.a.createElement("section",{className:"chamber-data"},u(e[t].age,t),h(e[t].gender),g(e[t].party))))}(a,e)}))))}),R=function(e){var t=function(e){var t=e.pathname,a=e.state;if(a&&a.chamber)return a.chamber;var n=t.split("/");return n[n.length-2]}(e.location),a=N("".concat(f,"/congress/").concat(t,"/members")),l=a.loading,c=a.data,s=Object(n.useState)(""),i=Object(E.a)(s,2),u=i[0],p=i[1],h=Object(n.useState)([]),d=Object(E.a)(h,2),g=d[0],b=d[1];return Object(n.useEffect)((function(){if(!l&&c){if(c.error||404===c.status)return void b([]);var e=c[t].filter((function(e){return e.first_name.toLowerCase().includes(u.toLowerCase())||e.last_name.toLowerCase().includes(u.toLowerCase())}));b(e)}}),[l,c,t,u]),l?r.a.createElement(w,null):404!==c.status&&t.match(/^(house|senate)$/)?c.error?r.a.createElement(y,{componentName:"Congress Memebers"}):r.a.createElement("section",null,r.a.createElement(o.b,{className:"chamber-members",to:{pathname:"/congress"}},"All Congress Data"),r.a.createElement("section",{className:"members-filter-container"},r.a.createElement("label",{htmlFor:"members-filter"},"Search"),r.a.createElement("input",{type:"text",id:"members-filter",className:"members-filter-input",value:u,onChange:function(e){p(e.target.value)},"data-testid":"members-filter"}),u&&r.a.createElement("button",{className:"members-filter-reset",onClick:function(){p("")},"data-testid":"members-filter-reset"},"reset")),g.length?r.a.createElement("ul",{className:"congress-members","data-testid":"members-list"},g.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{pathname:"/congress/".concat(t,"/member/").concat(e.id),state:Object(m.a)({},e)}},e.first_name," ",e.last_name," (",e.party,"-",e.state,")"))}))):r.a.createElement("div",{className:"members-no-results"},"No results for"," ",r.a.createElement("strong",null,r.a.createElement("em",null,u)))):r.a.createElement(_,null)},L=function(e){var t=function(e){var t=e.pathname,a=e.state;if(a&&a.chamber&&a.id)return{chamber:a.chamber,id:a.id};var n=t.split("/");return{chamber:n[n.length-3],id:n[n.length-1]}}(e.location),a=t.chamber,n=t.id,l=N("".concat(f,"/congress/").concat(a,"/member/").concat(n)),c=l.loading,s=l.data;if(c)return r.a.createElement(w,null);if(404===s.status||!a.match(/^(house|senate)$/))return r.a.createElement(_,null);if(s.error)return r.a.createElement(y,{componentName:"Congress Memeber"});var m=s.age,i=s.first_name,u=s.last_name,E=s.date_of_birth,p=s.gender,h=s.current_party,d=s.url,g=s.twitter_account,b=s.state,v=s.next_election,k=s.terms,j=s.initial_elected_in,O=s.most_recent_vote;return r.a.createElement("section",{className:"congress-member"},r.a.createElement(o.b,{to:{pathname:"/congress/".concat(a,"/members"),state:{chamber:a}}},"Back to all members"),r.a.createElement("h2",null,i," ",u),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("label",null,"Most recent vote: ",O)),r.a.createElement("li",null,r.a.createElement("label",null,"Date of Birth: ",E," (age: ",m,")")),r.a.createElement("li",null,r.a.createElement("label",null,"Gender: ",p)),r.a.createElement("li",null,r.a.createElement("label",null,"Current Party: ",h)),r.a.createElement("li",null,r.a.createElement("label",null,"State Representing: ",b)),r.a.createElement("li",null,r.a.createElement("label",null,"Will be up for reelection in: ",v)),r.a.createElement("li",null,r.a.createElement("label",null,"Has served ",r.a.createElement("em",null,k)," terms starting initially elected into office in ",r.a.createElement("em",null,j)))),r.a.createElement("section",{className:"congress-member-links"},r.a.createElement("a",{href:d,target:"_blank",rel:"noopener"},"Website"),r.a.createElement("a",{href:"https://twitter.com/".concat(g),target:"_blank",rel:"noopener"},"Twitter")))},I=(a(492),function(e){return"/"===e.location.pathname?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"topnav-list"},p.map((function(e){return r.a.createElement("li",{className:"topnav-list-item",key:e.title},r.a.createElement(o.b,{to:e.link},e.title))})))),r.a.createElement("hr",null))}),A=Object(s.f)((function(e){return r.a.createElement(I,e)})),B=(a(493),function(e){return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}),P=function(e){var t=B(e),a=t.r,n=t.g,r=t.b;return Math.round((299*a+587*n+114*r)/1e3)>125?"444444":"efefef"},W=function(){return r.a.createElement("section",null,r.a.createElement("ul",{className:"project-list"},p.map((function(e){var t=Math.floor(16777215*Math.random()).toString(16),a=function(e){var t=function(e){return("00"+(255-e).toString(16)).slice(-2)},a=B(e),n=a.r,r=a.g,l=a.b;return t(n)+t(r)+t(l)}(t);return r.a.createElement("li",{key:e.title,className:"project-list-item",style:{borderColor:"#".concat(t)}},r.a.createElement(o.b,{className:"project-list-item-link",to:e.link},r.a.createElement("div",{className:"project-list-item-placeholder",style:{backgroundColor:"#".concat(a)}},r.a.createElement("h2",{className:"project-list-item-title",style:{color:"#".concat(P(a))}},e.title)),r.a.createElement("p",null,e.subtitle)))}))))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{role:"banner",className:"vote-banner"},"Vote on November 3, 2020. More information at"," ",r.a.createElement("a",{href:"https://www.vote.org/",target:"_blank",rel:"noopener noreferrer"},"vote.org")),r.a.createElement("header",null,r.a.createElement("h1",{className:"app-header"},"Jim Segal Projects")),r.a.createElement(o.a,null,r.a.createElement("article",null,r.a.createElement(A,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:u(W)}),r.a.createElement(s.a,{path:"/congress/:chamber/members",component:u(R)}),r.a.createElement(s.a,{path:"/congress/:chamber/member/:id",component:u(L)}),r.a.createElement(s.a,{path:"/congress",component:u(x)}),r.a.createElement(s.a,{path:"/recipes",component:u(k)}),r.a.createElement(s.a,{path:"/recipe/:recipeSlug",component:u(S)}),r.a.createElement(s.a,{path:"/spacex",component:u(F)}),r.a.createElement(s.a,{path:"*",component:u(_)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.cab2ec67.chunk.js.map