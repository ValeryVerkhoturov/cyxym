function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function i(e,t,n,r,o,s,c){const i=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(i){const o=a(t,n,r,c);e.p(o,i)}}function l(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function $(){return m("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function w(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):d(t)}function E(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return m(t)}function _(e){return E(e," ")}function x(e,t=document.body){return Array.from(t.querySelectorAll(e))}let S;function A(e){S=e}function R(){if(!S)throw new Error("Function called outside component initialization");return S}const P=[],L=[],j=[],C=[],N=Promise.resolve();let O=!1;function q(e){j.push(e)}let k=!1;const U=new Set;function D(){if(!k){k=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];A(t),I(t.$$)}for(A(null),P.length=0;L.length;)L.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];U.has(t)||(U.add(t),t())}j.length=0}while(P.length);for(;C.length;)C.pop()();O=!1,k=!1,U.clear()}}function I(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const H=new Set;let T;function F(){T={r:0,c:[],p:T}}function M(){T.r||o(T.c),T=T.p}function B(e,t){e&&e.i&&(H.delete(e),e.i(t))}function J(e,t,n,r){if(e&&e.o){if(H.has(e))return;H.add(e),T.c.push((()=>{H.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function K(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const c=e[s],a=t[s];if(a){for(const e in c)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in c)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function V(e){return"object"==typeof e&&null!==e?e:{}}function Y(e){e&&e.c()}function G(e,t){e&&e.l(t)}function z(e,t,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=e.$$;c&&c.m(t,r),q((()=>{const t=a.map(n).filter(s);i?i.push(...t):o(t),e.$$.on_mount=[]})),l.forEach(q)}function W(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){-1===e.$$.dirty[0]&&(P.push(e),O||(O=!0,N.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(t,n,s,c,a,i,l=[-1]){const u=S;A(t);const f=n.props||{},h=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(t,f,((e,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),d&&X(t,e)),n})):[],h.update(),d=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const e=b(n.target);h.fragment&&h.fragment.l(e),e.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&B(t.$$.fragment),z(t,n.target,n.anchor),D()}A(u)}class Z{$destroy(){W(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=[];function te(t,n=e){let r;const o=[];function s(e){if(c(t,e)&&(t=e,r)){const e=!ee.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),ee.push(n,t)}if(e){for(let e=0;e<ee.length;e+=2)ee[e][0](ee[e+1]);ee.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,a=e){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||e),c(t),()=>{const e=o.indexOf(i);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const ne={},re=()=>({});function oe(t){let n,r,o,s,c,a,i,h,$,y,x,S,A,R,P,L;return{c(){n=d("nav"),r=d("a"),o=m("Cyxym"),c=g(),a=d("a"),i=m("История"),$=g(),y=d("a"),x=m("Гид"),A=g(),R=d("a"),P=m("Люди"),this.h()},l(e){n=w(e,"NAV",{});var t=b(n);r=w(t,"A",{class:!0,href:!0});var s=b(r);o=E(s,"Cyxym"),s.forEach(p),c=_(t),a=w(t,"A",{rel:!0,class:!0,href:!0});var l=b(a);i=E(l,"История"),l.forEach(p),$=_(t),y=w(t,"A",{rel:!0,class:!0,href:!0});var u=b(y);x=E(u,"Гид"),u.forEach(p),A=_(t),R=w(t,"A",{rel:!0,class:!0,href:!0});var f=b(R);P=E(f,"Люди"),f.forEach(p),t.forEach(p),this.h()},h(){v(r,"class",s=l(void 0===t[0]?"selected":"")+" svelte-1w2towl"),v(r,"href","/"),v(a,"rel","prefetch"),v(a,"class",h=l("history"===t[0]?"selected":"")+" svelte-1w2towl"),v(a,"href","/history"),v(y,"rel","prefetch"),v(y,"class",S=l("guide"===t[0]?"selected":"")+" svelte-1w2towl"),v(y,"href","/guide"),v(R,"rel","prefetch"),v(R,"class",L=l("people"===t[0]?"selected":"")+" svelte-1w2towl"),v(R,"href","/people")},m(e,t){f(e,n,t),u(n,r),u(r,o),u(n,c),u(n,a),u(a,i),u(n,$),u(n,y),u(y,x),u(n,A),u(n,R),u(R,P)},p(e,[t]){1&t&&s!==(s=l(void 0===e[0]?"selected":"")+" svelte-1w2towl")&&v(r,"class",s),1&t&&h!==(h=l("history"===e[0]?"selected":"")+" svelte-1w2towl")&&v(a,"class",h),1&t&&S!==(S=l("guide"===e[0]?"selected":"")+" svelte-1w2towl")&&v(y,"class",S),1&t&&L!==(L=l("people"===e[0]?"selected":"")+" svelte-1w2towl")&&v(R,"class",L)},i:e,o:e,d(e){e&&p(n)}}}function se(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ce extends Z{constructor(e){super(),Q(this,e,se,oe,c,{segment:0})}}function ae(e){let t,n,r,o,s,c,l,h,$,y,x,S,A;n=new ce({props:{segment:e[0]}});const R=e[3].default,P=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(R,e,e[2],null);return{c(){t=d("header"),Y(n.$$.fragment),r=g(),o=d("main"),P&&P.c(),s=g(),c=d("footer"),l=m("© "),h=d("span"),$=m(e[1]),y=m(". Проект \n  "),x=d("a"),S=m("Давида Кистаури"),this.h()},l(a){t=w(a,"HEADER",{});var i=b(t);G(n.$$.fragment,i),i.forEach(p),r=_(a),o=w(a,"MAIN",{});var u=b(o);P&&P.l(u),u.forEach(p),s=_(a),c=w(a,"FOOTER",{class:!0});var f=b(c);l=E(f,"© "),h=w(f,"SPAN",{});var d=b(h);$=E(d,e[1]),d.forEach(p),y=E(f,". Проект \n  "),x=w(f,"A",{href:!0,target:!0,rel:!0});var m=b(x);S=E(m,"Давида Кистаури"),m.forEach(p),f.forEach(p),this.h()},h(){v(x,"href","https://dtroode.vercel.app"),v(x,"target","_blank"),v(x,"rel","noopener"),v(c,"class","svelte-17ugwlh")},m(e,a){f(e,t,a),z(n,t,null),f(e,r,a),f(e,o,a),P&&P.m(o,null),f(e,s,a),f(e,c,a),u(c,l),u(c,h),u(h,$),u(c,y),u(c,x),u(x,S),A=!0},p(e,[t]){const r={};1&t&&(r.segment=e[0]),n.$set(r),P&&P.p&&4&t&&i(P,R,e,e[2],t,null,null)},i(e){A||(B(n.$$.fragment,e),B(P,e),A=!0)},o(e){J(n.$$.fragment,e),J(P,e),A=!1},d(e){e&&p(t),W(n),e&&p(r),e&&p(o),P&&P.d(e),e&&p(s),e&&p(c)}}}function ie(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;const c=(new Date).getFullYear();return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(2,o=e.$$scope)},[s,c,o,r]}class le extends Z{constructor(e){super(),Q(this,e,ie,ae,c,{segment:0})}}function ue(t){let n,r,o,s,c,a,i,l,h;return{c(){n=d("link"),r=g(),o=d("main"),s=d("h1"),c=m("404"),a=g(),i=d("figure"),l=d("img"),this.h()},l(e){const t=x('[data-svelte="svelte-e00a62"]',document.head);n=w(t,"LINK",{rel:!0,href:!0}),t.forEach(p),r=_(e),o=w(e,"MAIN",{});var u=b(o);s=w(u,"H1",{});var f=b(s);c=E(f,"404"),f.forEach(p),a=_(u),i=w(u,"FIGURE",{});var h=b(i);l=w(h,"IMG",{src:!0,alt:!0}),h.forEach(p),u.forEach(p),this.h()},h(){document.title="404",v(n,"rel","stylesheet"),v(n,"href","styles/error.css"),l.src!==(h="images/error-main.jpg")&&v(l,"src","images/error-main.jpg"),v(l,"alt","Код ошибки: 404")},m(e,t){u(document.head,n),f(e,r,t),f(e,o,t),u(o,s),u(s,c),u(o,a),u(o,i),u(i,l)},p:e,i:e,o:e,d(e){p(n),e&&p(r),e&&p(o)}}}function fe(e){(new Date).getFullYear();return[]}class pe extends Z{constructor(e){super(),Q(this,e,fe,ue,c,{})}}function he(e){let n,r,o;const s=[e[4].props];var c=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=$()},l(e){n&&G(n.$$.fragment,e),r=$()},m(e,t){n&&z(n,e,t),f(e,r,t),o=!0},p(e,t){const o=16&t?K(s,[V(e[4].props)]):{};if(c!==(c=e[4].component)){if(n){F();const e=n;J(e.$$.fragment,1,0,(()=>{W(e,1)})),M()}c?(n=new c(a()),Y(n.$$.fragment),B(n.$$.fragment,1),z(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(e){o||(n&&B(n.$$.fragment,e),o=!0)},o(e){n&&J(n.$$.fragment,e),o=!1},d(e){e&&p(r),n&&W(n,e)}}}function de(e){let t,n;return t=new pe({props:{error:e[0],status:e[1]}}),{c(){Y(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,r){z(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(B(t.$$.fragment,e),n=!0)},o(e){J(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function me(e){let t,n,r,o;const s=[de,he],c=[];function a(e,t){return e[0]?0:1}return t=a(e),n=c[t]=s[t](e),{c(){n.c(),r=$()},l(e){n.l(e),r=$()},m(e,n){c[t].m(e,n),f(e,r,n),o=!0},p(e,o){let i=t;t=a(e),t===i?c[t].p(e,o):(F(),J(c[i],1,1,(()=>{c[i]=null})),M(),n=c[t],n||(n=c[t]=s[t](e),n.c()),B(n,1),n.m(r.parentNode,r))},i(e){o||(B(n),o=!0)},o(e){J(n),o=!1},d(e){c[t].d(e),e&&p(r)}}}function ge(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[me]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new le({props:s}),{c(){Y(n.$$.fragment)},l(e){G(n.$$.fragment,e)},m(e,t){z(n,e,t),r=!0},p(e,[t]){const r=12&t?K(o,[4&t&&{segment:e[2][0]},8&t&&V(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(B(n.$$.fragment,e),r=!0)},o(e){J(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function $e(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:c}=t,{level0:a}=t,{level1:i=null}=t,{notify:l}=t;var u,f,p;return u=l,R().$$.after_update.push(u),f=ne,p=r,R().$$.context.set(f,p),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,c=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,i=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,c,a,i,r,l]}class ye extends Z{constructor(e){super(),Q(this,e,$e,ge,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ve=[],be=[{js:()=>import("./index.7f3a3629.js"),css:["client.c444c382.css"]},{js:()=>import("./index.4bee1b0f.js"),css:["client.c444c382.css"]},{js:()=>import("./index.bef3c042.js"),css:["client.c444c382.css"]},{js:()=>import("./index.2ebf864d.js"),css:["client.c444c382.css"]}],we=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/history\/?$/,parts:[{i:1}]},{pattern:/^\/people\/?$/,parts:[{i:2}]},{pattern:/^\/guide\/?$/,parts:[{i:3}]}];const Ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let _e,xe,Se,Ae=!1,Re=[],Pe="{}";const Le={page:function(e){const t=te(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:te(null),session:te(Ee&&Ee.session)};let je,Ce;Le.session.subscribe((async e=>{if(je=e,!Ae)return;Ce=!0;const t=He(new URL(location.href)),n=xe={},{redirect:r,props:o,branch:s}=await Be(t);n===xe&&await Me(r,s,o,t.page)}));let Ne,Oe=null;let qe,ke=1;const Ue="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},De={};function Ie(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function He(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ee.baseUrl))return null;let t=e.pathname.slice(Ee.baseUrl.length);if(""===t&&(t="/"),!ve.some((e=>e.test(t))))for(let n=0;n<we.length;n+=1){const r=we[n],o=r.pattern.exec(t);if(o){const n=Ie(e.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:c};return{href:e.href,route:r,match:o,page:a}}}}function Te(){return{x:pageXOffset,y:pageYOffset}}async function Fe(e,t,n,r){if(t)qe=t;else{const e=Te();De[qe]=e,t=qe=++ke,De[qe]=n?e:{x:0,y:0}}qe=t,_e&&Le.preloading.set(!0);const o=Oe&&Oe.href===e.href?Oe.promise:Be(e);Oe=null;const s=xe={},{redirect:c,props:a,branch:i}=await o;if(s===xe&&(await Me(c,i,a,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=De[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}De[qe]=e,e&&scrollTo(e.x,e.y)}}async function Me(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=He(new URL(e,document.baseURI));return n?(Ue[t.replaceState?"replaceState":"pushState"]({id:qe},"",e),Fe(n,null).then((()=>{}))):(location.href=e,new Promise((e=>{})))}(e.location,{replaceState:!0});if(Le.page.set(r),Le.preloading.set(!1),_e)_e.$set(n);else{n.stores={page:{subscribe:Le.page.subscribe},preloading:{subscribe:Le.preloading.subscribe},session:Le.session},n.level0={props:await Se},n.notify=Le.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ke(e.nextSibling);Ke(e),Ke(t)}_e=new ye({target:Ne,props:n,hydrate:!0})}Re=t,Pe=JSON.stringify(r.query),Ae=!0,Ce=!1}async function Be(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};let a;Se||(Se=Ee.preloaded[0]||re.call(c,{host:n.host,path:n.path,query:n.query,params:{}},je));let i=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=await Promise.all(t.parts.map((async(t,a)=>{const f=r[a];if(function(e,t,n,r){if(r!==Pe)return!0;const o=Re[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!t)return{segment:f};const p=i++;if(!Ce&&!u&&Re[a]&&Re[a].part===t.i)return Re[a];u=!1;const{default:h,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Je);return t.unshift(e.js()),Promise.all(t).then((e=>e[0]))}(be[t.i]);let m;return m=Ae||!Ee.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},je):{}:Ee.preloaded[a+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:t.i}})))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Je(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise(((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)}))}function Ke(e){e.parentNode.removeChild(e)}function Ve(e){const t=He(new URL(e,document.baseURI));if(t)return Oe&&e===Oe.href||function(e,t){Oe={href:e,promise:t}}(e,Be(t)),Oe.promise}let Ye;function Ge(e){clearTimeout(Ye),Ye=setTimeout((()=>{ze(e)}),20)}function ze(e){const t=Xe(e.target);t&&"prefetch"===t.rel&&Ve(t.href)}function We(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Xe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=He(o);if(s){Fe(s,null,t.hasAttribute("sapper-noscroll"),o.hash),e.preventDefault(),Ue.pushState({id:qe},"",o.href)}}function Xe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Qe(e){if(De[qe]=Te(),e.state){const t=He(new URL(location.href));t?Fe(t,e.state.id):location.href=location.href}else ke=ke+1,function(e){qe=e}(ke),Ue.replaceState({id:qe},"",location.href)}var Ze;Ze={target:document.querySelector("#sapper")},"scrollRestoration"in Ue&&(Ue.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Ue.scrollRestoration="auto"})),addEventListener("load",(()=>{Ue.scrollRestoration="manual"})),function(e){Ne=e}(Ze.target),addEventListener("click",We),addEventListener("popstate",Qe),addEventListener("touchstart",ze),addEventListener("mousemove",Ge),Promise.resolve().then((()=>{const{hash:e,href:t}=location;Ue.replaceState({id:ke},"",t);const n=new URL(location.href);if(Ee.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=Ee;Se||(Se=s&&s[0]),Me(null,[],{error:a,status:c,session:o,level0:{props:Se},level1:{props:{status:c,error:a},component:pe},segments:s},{host:t,path:n,query:Ie(r),params:{}})}();const r=He(n);return r?Fe(r,ke,!0,e):void 0}));export{Z as S,g as a,_ as b,w as c,p as d,d as e,b as f,E as g,v as h,Q as i,u as j,f as k,y as l,h as m,e as n,x as q,c as s,m as t};
