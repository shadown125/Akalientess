"use strict";(self.webpackChunkAkaLientesS=self.webpackChunkAkaLientesS||[]).push([[179],{2535:function(t,e,n){n(6992),n(1539),n(8783),n(8478),n(3948),n(4747),n(4129);function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function a(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,s(t,e,"get"))}function r(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,s(t,e,"set"),n),n}function s(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var o=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakSet,v=new WeakSet,w=function t(e,n,s,w,b,g,k){var x=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v.add(this),p.add(this),o.set(this,{writable:!0,value:void 0}),c.set(this,{writable:!0,value:void 0}),l.set(this,{writable:!0,value:void 0}),u.set(this,{writable:!0,value:void 0}),h.set(this,{writable:!0,value:void 0}),d.set(this,{writable:!0,value:void 0}),f.set(this,{writable:!0,value:void 0}),r(this,o,e),r(this,c,n),r(this,l,s),r(this,u,w),r(this,h,b),r(this,d,g),r(this,f,k),a(this,d).forEach((function(t){t.addEventListener("click",i(x,v,m).bind(x))})),a(this,h).forEach((function(t){t.addEventListener("click",i(x,p,y).bind(x))})),a(this,o).addEventListener("click",i(this,p,y).bind(this)),a(this,c).addEventListener("click",i(this,p,y).bind(this))};function y(){if(a(this,o).classList.contains("is-active"))return a(this,o).classList.remove("is-active"),a(this,l).classList.remove("is-active"),void a(this,u).classList.remove("is-active");a(this,l).classList.add("is-active"),a(this,u).classList.add("is-active"),a(this,o).classList.add("is-active")}function m(){if(a(this,f).classList.contains("is-active"))return a(this,f).classList.remove("is-active"),void a(this,d).forEach((function(t){t.classList.remove("is-active")}));a(this,f).classList.add("is-active"),a(this,d).forEach((function(t){t.classList.add("is-active")}))}function b(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function g(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,x(t,e,"get"))}function k(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,x(t,e,"set"),n),n}function x(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var L=new WeakMap,S=new WeakMap,W=new WeakMap,M=new WeakSet,E=new WeakSet,T=new WeakSet,O=function t(e,n,i){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),T.add(this),E.add(this),M.add(this),L.set(this,{writable:!0,value:void 0}),S.set(this,{writable:!0,value:void 0}),W.set(this,{writable:!0,value:void 0}),k(this,L,e),k(this,S,n),k(this,W,i),g(this,S).forEach((function(t){b(a,E,A).call(a,t)})),g(this,L).forEach((function(t){b(a,M,q).call(a,t)})),window.addEventListener("DOMContentLoaded",b(this,T,j).bind(this))};function q(t){new IntersectionObserver((function(t){0!==t[0].intersectionRatio&&t.forEach((function(t){t.target.classList.contains("link-project")?(t.target.classList.add("overlay-project"),t.target.classList.add("is-revealed")):t.target.classList.contains("mask")||t.target.classList.contains("mask-about-me")?setTimeout((function(){t.target.classList.add("mask-revealed")}),750):(t.target.classList.add("overlay"),setTimeout((function(){t.target.classList.add("is-revealed")}),1450))}))}),{threshold:.25}).observe(t)}function A(t){new IntersectionObserver((function(t){0!==t[0].intersectionRatio&&t.forEach((function(t){t.target.classList.add("is-revealed")}))}),{threshold:.25}).observe(t)}function j(){g(this,W).classList.add("is-loaded")}n(3290);function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function C(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var R=new WeakSet,D=new WeakSet,H=function(){function t(e,n,i,a,r,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),D.add(this),R.add(this),this.canvas=document.querySelector("[data-canvas]"),this.ctx=this.canvas.getContext("2d"),this.x=e,this.y=n,this.directionX=i,this.directionY=a,this.size=r,this.color=s,this.mouse={x:null,y:null,radius:this.canvas.height/180*(this.canvas.width/180)},window.addEventListener("mousemove",this.mouseMovement.bind(this)),window.addEventListener("mouseout",C(this,R,z).bind(this)),window.addEventListener("resize",C(this,D,I).bind(this))}var e,n,i;return e=t,(n=[{key:"mouseMovement",value:function(t){this.mouse.x=t.x,this.mouse.y=t.y}},{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}},{key:"update",value:function(){(this.x>this.canvas.width||this.x<0)&&(this.directionX=-this.directionX),(this.y>this.canvas.height||this.y<0)&&(this.directionY=-this.directionY);var t=this.mouse.x-this.x,e=this.mouse.y-this.y;Math.sqrt(t*t+e*e)<this.mouse.radius+this.size&&(this.mouse.x<this.x&&this.x<this.canvas.width-10*this.size&&(this.x+=10),this.mouse.x>this.x&&this.x>10*this.size&&(this.x-=10),this.mouse.y<this.y&&this.y<this.canvas.height-10*this.size&&(this.y+=10),this.mouse.y>this.y&&this.y>10*this.size&&(this.y-=10)),this.x+=this.directionX,this.y+=this.directionY,this.draw()}}])&&P(e.prototype,n),i&&P(e,i),t}();function z(){this.mouse.x=void 0,this.mouse.y=void 0}function I(){this.mouse.radius=this.canvas.height/180*(this.canvas.width/180)}function _(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function F(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,B(t,e,"get"))}function U(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,B(t,e,"set"),n),n}function B(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var Y=new WeakMap,X=new WeakMap,$=new WeakMap,G=new WeakSet,N=new WeakSet,Q=new WeakSet,V=new WeakSet,J=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),V.add(this),Q.add(this),N.add(this),G.add(this),Y.set(this,{writable:!0,value:void 0}),X.set(this,{writable:!0,value:void 0}),$.set(this,{writable:!0,value:[]}),U(this,Y,e),U(this,X,e.getContext("2d")),F(this,Y).width=window.innerWidth,F(this,Y).height=window.innerHeight,_(this,N,Z).call(this),_(this,Q,tt).call(this),window.addEventListener("resize",_(this,G,K).bind(this))};function K(){F(this,Y).width=innerWidth,F(this,Y).height=innerHeight}function Z(){U(this,$,[]);for(var t=F(this,Y).height*F(this,Y).width/34e3,e=0;e<t;e++){var n=5*Math.random()+1,i=Math.random()*(innerWidth-2*n-2*n)+2*n,a=Math.random()*(innerHeight-2*n-2*n)+2*n,r=5*Math.random()-2.5,s=5*Math.random()-2.5;F(this,$).push(new H(i,a,r,s,n,"#b0abbe"))}}function tt(){var t=this;setTimeout((function(){requestAnimationFrame(_(t,Q,tt).bind(t))}),15),F(this,X).clearRect(0,0,innerWidth,innerHeight);for(var e=0;e<F(this,$).length;e++)F(this,$)[e].update();_(this,V,et).call(this)}function et(){for(var t=1,e=0;e<F(this,$).length;e++)for(var n=e;n<F(this,$).length;n++){var i=(F(this,$)[e].x-F(this,$)[n].x)*(F(this,$)[e].x-F(this,$)[n].x)+(F(this,$)[e].y-F(this,$)[n].y)*(F(this,$)[e].y-F(this,$)[n].y);i<F(this,Y).width/7*(F(this,Y).height/7)&&(t=1-i/2e4,F(this,X).strokeStyle="rgba(176, 171, 190,"+t+")",F(this,X).lineWidth=1,F(this,X).beginPath(),F(this,X).moveTo(F(this,$)[e].x,F(this,$)[e].y),F(this,X).lineTo(F(this,$)[n].x,F(this,$)[n].y),F(this,X).stroke())}}n(6760),n(489),n(4819),n(5003),n(2419),n(8674),n(2526),n(1817),n(2165),n(7042),n(8309),n(1038),n(1249),n(2707),n(2222),n(7941),n(6699),n(2023);function nt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function it(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}(t,e,"get"))}function at(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var rt=new WeakMap,st=new WeakMap,ot=new WeakMap,ct=new WeakMap,lt=new WeakSet,ut=new WeakSet,ht=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ut.add(this),lt.add(this),rt.set(this,{writable:!0,value:["square","triangle","rectangle","circle"]}),st.set(this,{writable:!0,value:["background","text","number","shape"]}),ot.set(this,{writable:!0,value:{black:"#000000",white:"#FFFFFF",blue:"#1991F9",red:"#8C0C00",yellow:"#FFE335",orange:"#FF9900",green:"#46A04F",purple:"#A43AB5"}}),ct.set(this,{writable:!0,value:{"background color":function(t){return t.colors.background},"text background color":function(t){return t.colors.text},"number color":function(t){return t.colors.number},"shape color":function(t){return t.colors.shape},"color text":function(t){return t.text[0]},"shape text":function(t){return t.text[1]},shape:function(t){return t.shape}}})}var e,n,i;return e=t,(n=[{key:"generateRandomPuzzle",value:function(){for(var t=this,e=at(this,lt,dt).call(this,it(this,rt)),n=at(this,ut,ft).call(this,9)+1,i=at(this,lt,dt).call(this,Object.keys(it(this,ot))),a=at(this,lt,dt).call(this,it(this,rt)),r=it(this,st).reduce((function(e,n){return e[n]=at(t,lt,dt).call(t,Object.keys(it(t,ot))),e}),{});r.text===r.background;)r.text=at(this,lt,dt).call(this,Object.keys(it(this,ot)));for(;["background","text","number"].map((function(t){return r[t]})).includes(r.shape);)r.shape=at(this,lt,dt).call(this,Object.keys(it(this,ot)));return{shape:e,number:n,text:[i,a],colors:r}}},{key:"generateQuestionAndAnswer",value:function(t,e){var n,i=at(this,ut,ft).call(this,t.length);do{n=at(this,ut,ft).call(this,t.length)}while(i===n);var a,r=n,s=at(this,lt,dt).call(this,Object.keys(it(this,ct)));do{a=at(this,lt,dt).call(this,Object.keys(it(this,ct)))}while(a===s);var o=a;return["".concat(s," (").concat(t[i],") AND ").concat(o," (").concat(t[r],")"),it(this,ct)[s](e[i])+" "+it(this,ct)[o](e[r])]}}])&&nt(e.prototype,n),i&&nt(e,i),t}();function dt(t){return t[at(this,ut,ft).call(this,t.length)]}function ft(t){return Math.floor(Math.random()*Math.floor(t))}n(9600);function pt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function vt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function wt(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,mt(t,e,"get"))}function yt(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,mt(t,e,"set"),n),n}function mt(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var bt=new WeakMap,gt=new WeakMap,kt=new WeakMap,xt=new WeakMap,Lt=new WeakMap,St=new WeakMap,Wt=new WeakMap,Mt=new WeakMap,Et=new WeakMap,Tt=new WeakSet,Ot=new WeakSet,qt=new WeakSet,At=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),qt.add(this),Ot.add(this),Tt.add(this),bt.set(this,{writable:!0,value:{square:function(t){return"<rect fill=".concat(t,' stroke="#000" stroke-width="1" width="150" height="150"/>')},triangle:function(t){return"<polygon  fill=".concat(t,'  stroke="#000" stroke-width="1" points="0 150 75 0 150 150 0 150"/>')},rectangle:function(t){return'<rect y="30" fill='.concat(t,'  stroke="#000" stroke-width="1" class="shape" width="150" height="90"/>')},circle:function(t){return"<circle fill=".concat(t,'  stroke="#000" stroke-width="1" cx="75" cy="75" r="75"/>')}}}),gt.set(this,{writable:!0,value:void 0}),kt.set(this,{writable:!0,value:void 0}),xt.set(this,{writable:!0,value:void 0}),Lt.set(this,{writable:!0,value:void 0}),St.set(this,{writable:!0,value:void 0}),Wt.set(this,{writable:!0,value:void 0}),Mt.set(this,{writable:!0,value:void 0}),Et.set(this,{writable:!0,value:void 0}),yt(this,gt,e)}var e,n,i;return e=t,(n=[{key:"getPuzzle",value:function(){return yt(this,kt,21),yt(this,xt,"normal"),yt(this,Lt,wt(this,gt).colors.text),yt(this,St,vt(this,Ot,Pt).call(this,wt(this,gt).shape,wt(this,gt).colors.shape)),yt(this,Wt,vt(this,qt,Ct).call(this,wt(this,gt).text[0].toUpperCase(),wt(this,Lt),wt(this,kt),wt(this,xt),31)),yt(this,Mt,vt(this,qt,Ct).call(this,wt(this,gt).text[1].toUpperCase(),wt(this,Lt),wt(this,kt),wt(this,xt),67)),yt(this,Et,vt(this,qt,Ct).call(this,wt(this,gt).number,wt(this,gt).colors.number,60,100,50,"Arial, Helvetica")),vt(this,Tt,jt).call(this,[wt(this,St),wt(this,Wt),wt(this,Mt),wt(this,Et)])}}])&&pt(e.prototype,n),i&&pt(e,i),t}();function jt(t){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"> '.concat(t.join("\n")," </svg>")}function Pt(t,e){return wt(this,bt)[t](e)}function Ct(t,e,n,i,a,r){return'<text \n        stroke="black" \n        fill="'.concat(e,'" \n        stroke-width="1" \n        style="font-size:').concat(n,'px;" \n        font-weight="').concat(i,'" \n        font-family="').concat(r||"Archivo Black",', sans-serif"\n        x="50%" \n        y="').concat(a,'%" \n        dominant-baseline="middle" \n        text-anchor="middle"\n    >\n        ').concat(t,"\n    </text> ")}function Rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,a,r=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return r}(t,e)||Ht(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dt(t){return function(t){if(Array.isArray(t))return zt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Ht(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ht(t,e){if(t){if("string"==typeof t)return zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zt(t,e):void 0}}function zt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function It(t,e,n,i,a,r,s){try{var o=t[r](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,a)}function _t(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function s(t){It(r,i,a,s,o,"next",t)}function o(t){It(r,i,a,s,o,"throw",t)}s(void 0)}))}}function Ft(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ut(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function Bt(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}(t,e,"get"))}var Yt=new WeakMap,Xt=new WeakMap,$t=new WeakMap,Gt=new WeakMap,Nt=new WeakMap,Qt=new WeakMap,Vt=new WeakMap,Jt=new WeakMap,Kt=new WeakSet,Zt=new WeakSet,te=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Zt.add(this),Kt.add(this),Yt.set(this,{writable:!0,value:document.querySelector("[data-answer-progress-bar]")}),Xt.set(this,{writable:!0,value:document.querySelector("[data-answer-input]")}),$t.set(this,{writable:!0,value:15}),Gt.set(this,{writable:!0,value:4}),Nt.set(this,{writable:!0,value:document.querySelector("[data-number-container]")}),Qt.set(this,{writable:!0,value:document.querySelector("[data-answer-question]")}),Vt.set(this,{writable:!0,value:document.querySelector("[data-answer-countdown]")}),Jt.set(this,{writable:!0,value:document.querySelector("[data-answer-input-label]")})}var e,n,i,a;return e=t,(n=[{key:"addDelay",value:function(t){return new Promise((function(e){return setTimeout(e,1e3*t)}))}},{key:"doPuzzle",value:(a=_t(regeneratorRuntime.mark((function t(){var e,n,i,a,r,s,o,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Bt(this,Xt).classList.add("hidden"),Bt(this,Jt).classList.add("hidden"),Bt(this,Qt).classList.add("hidden"),Bt(this,Vt).classList.add("hidden"),Bt(this,Nt).innerHTML="",e=Dt(Array(Bt(this,Gt)).keys()).map((function(t){var e=document.createElement("div");return e.id="square-".concat(t+1),e.className="square",Bt(c,Nt).appendChild(e),e})),n=Dt(Array(Bt(this,Gt))).map((function(t){return(new ht).generateRandomPuzzle()})),i=Ut(this,Kt,ee).call(this,Dt(Array(Bt(this,Gt))).map((function(t,e){return e+1}))),t.next=10,Ut(this,Zt,ne).call(this,i);case 10:return Bt(this,Qt).classList.remove("hidden"),Bt(this,Yt).classList.remove("hidden"),Bt(this,Xt).classList.remove("hidden"),Bt(this,Jt).classList.remove("hidden"),Bt(this,Vt).classList.remove("hidden"),Bt(this,Xt).value="",Bt(this,Xt).focus(),Bt(this,Yt).style.transition="",Bt(this,Yt).classList.remove("progress-bar-shrink"),t.next=21,this.addDelay(.1);case 21:return Bt(this,Yt).style.transition="width ".concat(1e3*Bt(this,$t),"ms linear"),Bt(this,Yt).classList.add("progress-bar-shrink"),e.forEach((function(t,e){return t.style.backgroundColor=n[e].colors.background})),e.forEach((function(t,e){return t.innerHTML=new At(n[e]).getPuzzle()})),a=(new ht).generateQuestionAndAnswer(i,n),r=Rt(a,2),s=r[0],o=r[1],Bt(this,Qt).textContent=s.toUpperCase(),t.abrupt("return",new Promise(function(){var t=_t(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Bt(c,Xt).addEventListener("keyup",(function(t){13===t.keyCode&&e([Bt(c,Xt).value,o])})),t.next=3,c.addDelay(Bt(c,$t));case 3:e([null,o]);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 28:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}])&&Ft(e.prototype,n),i&&Ft(e,i),t}();function ee(t){return t.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value}))}function ne(t){return ie.apply(this,arguments)}function ie(){return(ie=_t(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.forEach((function(t,e){return document.querySelector("#square-"+(e+1)).innerHTML='<div class="big-numbers can-shrink" id="num-'.concat(e+1,'">').concat(t,"</div>")})),t.next=3,this.addDelay(1.5);case 3:return e.forEach((function(t){return document.querySelector("#num-"+t).classList.add("number-shrink")})),t.next=6,this.addDelay(1.5);case 6:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function ae(t){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function re(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,a,r=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return se(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function oe(t,e,n,i,a,r,s){try{var o=t[r](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,a)}function ce(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function s(t){oe(r,i,a,s,o,"next",t)}function o(t){oe(r,i,a,s,o,"throw",t)}s(void 0)}))}}function le(t,e){return(le=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ue(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=pe(t);if(e){var a=pe(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return he(this,n)}}function he(t,e){if(e&&("object"===ae(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return de(t)}function de(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fe(t,e,n){return(fe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=pe(t)););return t}(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}function pe(t){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ve(t,e){return function(t,e){if(e.set)return"__destrObj"in e||(e.__destrObj={set value(n){e.set.call(t,n)}}),e.__destrObj;if(!e.writable)throw new TypeError("attempted to set read only private field");return e}(t,be(t,e,"set"))}function we(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function ye(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,be(t,e,"get"))}function me(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,be(t,e,"set"),n),n}function be(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var ge=new WeakMap,ke=new WeakMap,xe=new WeakMap,Le=new WeakMap,Se=new WeakMap,We=new WeakMap,Me=new WeakMap,Ee=new WeakMap,Te=new WeakMap,Oe=new WeakMap,qe=new WeakMap,Ae=new WeakMap,je=new WeakMap,Pe=new WeakMap,Ce=new WeakMap,Re=new WeakMap,De=new WeakMap,He=new WeakMap,ze=new WeakMap,Ie=new WeakMap,_e=new WeakMap,Fe=new WeakSet,Ue=new WeakSet,Be=new WeakSet,Ye=new WeakSet,Xe=new WeakSet,$e=new WeakSet,Ge=new WeakSet,Ne=new WeakSet,Qe=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&le(t,e)}(n,t);var e=ue(n);function n(t,i,a,r,s,o,c,l,u,h,d,f,p){var v;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),v=e.call(this),Ne.add(de(v)),Ge.add(de(v)),$e.add(de(v)),Xe.add(de(v)),Ye.add(de(v)),Be.add(de(v)),Ue.add(de(v)),Fe.add(de(v)),ge.set(de(v),{writable:!0,value:void 0}),ke.set(de(v),{writable:!0,value:void 0}),xe.set(de(v),{writable:!0,value:!0}),Le.set(de(v),{writable:!0,value:void 0}),Se.set(de(v),{writable:!0,value:void 0}),We.set(de(v),{writable:!0,value:void 0}),Me.set(de(v),{writable:!0,value:void 0}),Ee.set(de(v),{writable:!0,value:void 0}),Te.set(de(v),{writable:!0,value:void 0}),Oe.set(de(v),{writable:!0,value:void 0}),qe.set(de(v),{writable:!0,value:void 0}),Ae.set(de(v),{writable:!0,value:void 0}),je.set(de(v),{writable:!0,value:void 0}),Pe.set(de(v),{writable:!0,value:void 0}),Ce.set(de(v),{writable:!0,value:void 0}),Re.set(de(v),{writable:!0,value:void 0}),De.set(de(v),{writable:!0,value:document.querySelector("[data-box]")}),He.set(de(v),{writable:!0,value:void 0}),ze.set(de(v),{writable:!0,value:document.querySelector("[data-answer-input-label]")}),Ie.set(de(v),{writable:!0,value:!1}),_e.set(de(v),{writable:!0,value:void 0}),me(de(v),Le,t),me(de(v),Se,i),me(de(v),We,a),me(de(v),Me,r),me(de(v),Ee,s),me(de(v),Te,o),me(de(v),Oe,c),me(de(v),qe,l),me(de(v),Ae,u),me(de(v),je,h),me(de(v),Pe,d),me(de(v),He,f),me(de(v),_e,p),ye(de(v),Le).addEventListener("click",we(de(v),$e,an).bind(de(v))),v}return n}(te);function Ve(){"exit"===ye(this,Ce).value.toLowerCase()?(ye(this,We).classList.toggle("hidden"),me(this,Re,document.querySelectorAll("[data-console-input-container]")),ye(this,Re).forEach((function(t){t.remove()})),ye(this,ze).classList.add("hidden"),ye(this,Ee).classList.add("hidden"),ye(this,Se).classList.add("hidden"),ye(this,Ae).classList.add("hidden"),ye(this,je).classList.add("hidden"),ye(this,Pe).classList.remove("hidden"),ye(this,Me).classList.remove("hidden"),ye(this,We).classList.remove("hidden"),ye(this,Te).remove("hidden"),ye(this,qe).classList.add("hidden"),ye(this,He).classList.remove("is-active")):"hack"===ye(this,Ce).value.toLowerCase()?!0===ye(this,Ie)?(we(this,Be,Ze).call(this),we(this,Ue,Je).call(this)):(we(this,Be,Ze).call(this),ye(this,De).innerHTML+="<div class=\"console-text console-text--red\" data-console-input-container>\n                The software version is outdated! Use 'update' to update\n                </div>",we(this,Xe,nn).call(this)):"help"===ye(this,Ce).value.toLowerCase()?(we(this,Be,Ze).call(this),ye(this,De).innerHTML+="<div class=\"console-text\" data-console-input-container>\n                If you are in console and wanna more data from AkaLientesS then maybe try to type 'hack'? :D\n            </div>",we(this,Xe,nn).call(this)):"update"===ye(this,Ce).value.toLowerCase()?(we(this,Be,Ze).call(this),we(this,Ye,tn).call(this)):(we(this,Be,Ze).call(this),we(this,Xe,nn).call(this))}function Je(){return Ke.apply(this,arguments)}function Ke(){return(Ke=ce(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Breaking the connection cipher...\n            </div>',t.next=3,fe(pe(Qe.prototype),"addDelay",this).call(this,4.5);case 3:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Attempt number #1...\n            </div>',t.next=6,fe(pe(Qe.prototype),"addDelay",this).call(this,4.5);case 6:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Attempt number #2...\n            </div>',t.next=9,fe(pe(Qe.prototype),"addDelay",this).call(this,2.5);case 9:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                The cipher is broken, connecting to the terminal...\n            </div>',t.next=12,fe(pe(Qe.prototype),"addDelay",this).call(this,2);case 12:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Initiating the program 5U5_1MP...\n            </div>',t.next=15,fe(pe(Qe.prototype),"addDelay",this).call(this,7);case 15:ye(this,We).classList.toggle("hidden"),me(this,Re,document.querySelectorAll("[data-console-input-container]")),ye(this,Re).forEach((function(t){t.remove()})),ye(this,_e).classList.add("hidden"),we(this,Ge,sn).call(this);case 20:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Ze(){ye(this,Ce).setAttribute("value",ye(this,Ce).value),ye(this,Ce).disabled=!0,ye(this,Ce).removeAttribute("data-start-input")}function tn(){return en.apply(this,arguments)}function en(){return(en=ce(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ye(this,De).innerHTML+="<div class=\"console-text\" data-console-input-container>\n                Upgrading to 'penguin 1.32'...\n            </div>",t.next=3,fe(pe(Qe.prototype),"addDelay",this).call(this,2.5);case 3:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Update: Importing the latest libraries...\n            </div>',t.next=6,fe(pe(Qe.prototype),"addDelay",this).call(this,1.5);case 6:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Update: Patching bugs...\n            </div>',t.next=9,fe(pe(Qe.prototype),"addDelay",this).call(this,3.5);case 9:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Update: Downloading new modules...\n            </div>',t.next=12,fe(pe(Qe.prototype),"addDelay",this).call(this,2.5);case 12:return ye(this,De).innerHTML+='<div class="console-text" data-console-input-container>\n                Update: Final touches...\n            </div>',t.next=15,fe(pe(Qe.prototype),"addDelay",this).call(this,1.5);case 15:return ye(this,De).innerHTML+="<div class=\"console-text\" data-console-input-container>\n                Successfully upgraded to 'penguin 1.32'!!\n            </div>",t.next=18,fe(pe(Qe.prototype),"addDelay",this).call(this,1);case 18:we(this,Xe,nn).call(this),me(this,Ie,!0);case 20:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function nn(){ye(this,De).innerHTML+='<div class="console-input-container" data-console-input-container>\n                <div>server@AkaLientesS:~$ </div>\n                <input type="text" class="input start-input" data-start-input>\n            </div>',me(this,Ce,document.querySelector("[data-start-input]")),ye(this,Ce).addEventListener("change",we(this,Fe,Ve).bind(this)),ye(this,Ce).focus()}function an(){return rn.apply(this,arguments)}function rn(){return(rn=ce(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ye(this,De).innerHTML+='<div class="console-text console-text--intro" data-console-input-container>\n                Correctly initialized the program on the computer. You are now connected to AkaLientesS.\n            </div>',ye(this,De).innerHTML+="<div class=\"console-text console-text--intro\" data-console-input-container>\n                If you want to exit, type 'exit' in the console. If you are stuck, type 'help' in the console.\n            </div>",ye(this,De).innerHTML+='<div class="console-input-container" data-console-input-container>\n                <div>server@AkaLientesS:~$ </div>\n                <input type="text" class="input start-input" data-start-input>\n            </div>',me(this,Ce,document.querySelector("[data-start-input]")),ye(this,Ce).addEventListener("change",we(this,Fe,Ve).bind(this)),ye(this,_e).classList.remove("hidden"),me(this,Ie,!1),ye(this,Te).classList.add("hidden"),ye(this,Me).classList.add("hidden"),ye(this,Pe).classList.add("hidden"),ye(this,We).classList.toggle("hidden"),ye(this,qe).classList.remove("hidden"),ye(this,He).classList.add("is-active");case 13:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function sn(){return on.apply(this,arguments)}function on(){return(on=ce(regeneratorRuntime.mark((function t(){var e,n,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ye(this,Oe).innerHTML="Establish Connection",t.next=3,fe(pe(Qe.prototype),"addDelay",this).call(this,3);case 3:ye(this,Se).classList.toggle("hidden"),ye(this,We).classList.toggle("hidden"),me(this,ke,""),me(this,ge,""),me(this,xe,!0),e=0;case 9:if(!(e<3&&ye(this,xe))){t.next=20;break}return t.next=12,fe(pe(Qe.prototype),"doPuzzle",this).call(this);case 12:i=t.sent,a=re(i,2),ve(this,ge).value=a[0],ve(this,ke).value=a[1],me(this,xe,(null===(n=ye(this,ge))||void 0===n?void 0:n.toLowerCase())===ye(this,ke));case 17:e++,t.next=9;break;case 20:return ye(this,ze).classList.add("hidden"),ye(this,Ee).classList.add("hidden"),ye(this,Se).classList.add("hidden"),ye(this,Ae).classList.add("hidden"),ye(this,je).classList.add("hidden"),ye(this,Pe).classList.remove("hidden"),ye(this,Me).classList.remove("hidden"),ye(this,We).classList.remove("hidden"),ye(this,Te).remove("hidden"),we(this,Ne,cn).call(this,ye(this,xe)?"Access Granted":"The system didn't accept your answers"),ye(this,xe)||(ye(this,Me).textContent="The answer was: "+ye(this,ke)),ye(this,Te).textContent=ye(this,xe)?"Good job, indeed the":null==ye(this,ge)?"The time ran out,":'You wrote "'.concat(ye(this,ge)||" ",'"'),t.next=34,fe(pe(Qe.prototype),"addDelay",this).call(this,4.9);case 34:ye(this,qe).classList.add("hidden"),ye(this,He).classList.remove("is-active");case 36:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function cn(t){ye(this,Oe).innerHTML=t}n(7327),n(9337);var ln=n(8002);function un(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function hn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?un(Object(n),!0).forEach((function(e){dn(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function vn(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,mn(t,e,"get"))}function wn(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function yn(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,mn(t,e,"set"),n),n}function mn(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}ln.tq.use([ln.W_,ln.pt]);var bn=new WeakMap,gn=new WeakMap,kn=new WeakMap,xn=new WeakMap,Ln=new WeakMap,Sn=new WeakSet,Wn=new WeakSet,Mn=new WeakSet,En=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};fn(this,t),Mn.add(this),Wn.add(this),Sn.add(this),bn.set(this,{writable:!0,value:void 0}),gn.set(this,{writable:!0,value:void 0}),kn.set(this,{writable:!0,value:void 0}),xn.set(this,{writable:!0,value:void 0}),Ln.set(this,{writable:!0,value:{speed:1e3,autoplay:{delay:3e3},loop:!0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}),yn(this,bn,e),yn(this,gn,n)}var e,n,i;return e=t,(n=[{key:"init",value:function(){wn(this,Mn,qn).call(this)}}])&&pn(e.prototype,n),i&&pn(e,i),t}();function Tn(){var t=this;vn(this,kn).el.addEventListener("mouseenter",(function(){vn(t,kn).autoplay.stop()}),!1)}function On(){var t=this;vn(this,kn).el.addEventListener("mouseleave",(function(){vn(t,kn).autoplay.start()}),!1)}function qn(){var t=this;new IntersectionObserver((function(e){0!==e[0].intersectionRatio&&(yn(t,kn,new ln.tq(vn(t,bn),hn(hn({},vn(t,Ln)),vn(t,gn)))),wn(t,Sn,Tn).call(t),wn(t,Wn,On).call(t),yn(t,xn,document.querySelectorAll("[data-slider-image-wrapper]")),vn(t,xn).forEach((function(t,e){e>=3&&(t.style.opacity="1")})))}),{threshold:.25}).observe(vn(this,bn))}function An(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var jn=new WeakSet,Pn=new WeakSet,Cn=new WeakSet,Rn=new WeakSet,Dn=new WeakSet;function Hn(){var t=document.querySelector("[data-button-close]"),e=document.querySelector("[data-button-menu]"),n=document.querySelector("[data-navigation-container]"),i=document.querySelector("[data-mobile-container-animation]"),a=document.querySelectorAll("[data-nav-link]"),r=document.querySelectorAll("[data-nav-contact]"),s=document.querySelector("[data-contact-section]");new w(t,e,n,i,a,r,s)}function zn(){var t=document.querySelectorAll("[data-overlay]"),e=document.querySelectorAll("[data-second-overlay]"),n=document.querySelector("[data-loading-mask]");new O(t,e,n)}function In(){var t=document.querySelector("[data-canvas]");null!==t&&new J(t)}function _n(){var t=document.querySelector("[data-hacking-button]"),e=document.querySelector("[data-number-container]"),n=document.querySelector("[data-text-container]"),i=document.querySelector("[data-answer-reveal]"),a=document.querySelector("[data-answer-question]"),r=document.querySelector("[data-revealed-submitted-text]"),s=document.querySelector("[data-loading-text]"),o=document.querySelector("[data-console-container]"),c=document.querySelector("[data-answer-countdown]"),l=document.querySelector("[data-answer-input]"),u=document.querySelector("[data-answer-box-description]"),h=document.querySelector("[data-console]"),d=document.querySelector("[data-ascii-art]");null!==t&&new Qe(t,e,n,i,a,r,s,o,c,l,u,h,d)}function Fn(){var t=document.querySelectorAll("[data-slider]");t.length>0&&t.forEach((function(t){new En(t).init()}))}new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Dn.add(this),Rn.add(this),Cn.add(this),Pn.add(this),jn.add(this),An(this,jn,Hn).call(this),An(this,Pn,zn).call(this),An(this,Cn,In).call(this),An(this,Rn,_n).call(this),An(this,Dn,Fn).call(this)}}},function(t){t.O(0,[736],(function(){return e=2535,t(t.s=e);var e}));t.O()}]);