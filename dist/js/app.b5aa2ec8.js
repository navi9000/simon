(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var r=i[c];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"178a":function(t,e,i){"use strict";i("f396")},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("7a23");const s={class:"game-screen"};function a(t,e,i,a,o,c){return Object(n["j"])(),Object(n["e"])("div",s,[(Object(n["j"])(),Object(n["c"])(Object(n["m"])(o.currentPage),{game:o.game,onInit:e[0]||(e[0]=t=>c.changePage("Settings")),onSet_difficulty:e[1]||(e[1]=t=>c.changePage("InGame",t)),onGame_over:e[2]||(e[2]=t=>c.changePage("GameOver")),onGame_mounted:e[3]||(e[3]=t=>c.mountGame()),onLevel_complete:e[4]||(e[4]=t=>c.completeLevel())},null,8,["game"]))])}const o=t=>(Object(n["l"])("data-v-504c9d6e"),t=t(),Object(n["k"])(),t),c={class:"start-page"},r=o(()=>Object(n["f"])("h1",{class:"start-page__header"},"Simon the Game",-1));function l(t,e,i,s,a,o){return Object(n["j"])(),Object(n["e"])("div",c,[r,Object(n["h"])(n["a"],{name:"title"},{default:Object(n["o"])(()=>[a.active?(Object(n["j"])(),Object(n["e"])("button",{key:0,class:"start-page__button",onClick:e[0]||(e[0]=(...t)=>o.startGame&&o.startGame(...t))},"Start")):Object(n["d"])("",!0)]),_:1})])}var u={name:"StartPage",data(){return{active:!1}},methods:{startGame(){setTimeout(()=>this.$emit("init"),1e3)}},emits:{init:null},mounted(){setTimeout(()=>this.active=!0,8e3)}},f=(i("b00d"),i("d959")),d=i.n(f);const m=d()(u,[["render",l],["__scopeId","data-v-504c9d6e"]]);var g=m;const b=t=>(Object(n["l"])("data-v-20b6f6aa"),t=t(),Object(n["k"])(),t),h={class:"settings"},_=b(()=>Object(n["f"])("p",{class:"settings__text"},"Choose difficulty level",-1)),p={for:"difficulty1",class:"settings__label"},j=b(()=>Object(n["f"])("div",{class:"settings__custom-radio"},null,-1)),v=b(()=>Object(n["f"])("div",{class:"settings__difficulty"},"Easy",-1)),O={for:"difficulty2",class:"settings__label"},y=b(()=>Object(n["f"])("div",{class:"settings__custom-radio"},null,-1)),w=b(()=>Object(n["f"])("div",{class:"settings__difficulty"},"Medium",-1)),S={for:"difficulty3",class:"settings__label"},P=b(()=>Object(n["f"])("div",{class:"settings__custom-radio"},null,-1)),k=b(()=>Object(n["f"])("div",{class:"settings__difficulty"},"Hard",-1)),G=b(()=>Object(n["f"])("button",{class:"settings__button",type:"submit"},"OK",-1));function I(t,e,i,s,a,o){return Object(n["j"])(),Object(n["e"])("div",h,[Object(n["f"])("form",{class:"settings__form",onSubmit:e[3]||(e[3]=Object(n["p"])((...t)=>o.submitDifficulty&&o.submitDifficulty(...t),["prevent"]))},[_,Object(n["f"])("label",p,[Object(n["f"])("input",{class:"settings__radio",type:"radio",name:"difficulty",onChange:e[0]||(e[0]=t=>o.setDifficulty("easy")),id:"difficulty1"},null,32),j,v]),Object(n["f"])("label",O,[Object(n["f"])("input",{class:"settings__radio",type:"radio",name:"difficulty",onChange:e[1]||(e[1]=t=>o.setDifficulty("medium")),id:"difficulty2"},null,32),y,w]),Object(n["f"])("label",S,[Object(n["f"])("input",{class:"settings__radio",type:"radio",name:"difficulty",onChange:e[2]||(e[2]=t=>o.setDifficulty("hard")),id:"difficulty3"},null,32),P,k]),G],32)])}var C={name:"Settings",data(){return{difficultyLevel:null}},methods:{setDifficulty(t){this.difficultyLevel=t},submitDifficulty(){this.$emit("set_difficulty",this.difficultyLevel)}},emits:{set_difficulty:t=>!!t||(console.warn("Invalid emit"),!1)}};i("798a");const D=d()(C,[["render",I],["__scopeId","data-v-20b6f6aa"]]);var x=D;const T=t=>(Object(n["l"])("data-v-b5a02110"),t=t(),Object(n["k"])(),t),B={class:"ingame"},L={class:"ingame__gamefield"},M={class:"ingame__top-row"},A={class:"ingame__bottom-row"},$={class:"ingame__aside"},E=T(()=>Object(n["f"])("strong",null,"Level: ",-1));function N(t,e,i,s,a,o){return Object(n["j"])(),Object(n["e"])("div",B,[Object(n["f"])("div",L,[Object(n["f"])("div",M,[Object(n["f"])("button",{class:Object(n["i"])({ingame__button:!0,ingame__button_red:!0,ingame__button_play:i.game.highlightButtons[0]}),id:"btn-1",onClick:e[0]||(e[0]=t=>o.check(1))},null,2),Object(n["f"])("button",{class:Object(n["i"])({ingame__button:!0,ingame__button_yellow:!0,ingame__button_play:i.game.highlightButtons[1]}),id:"btn-2",onClick:e[1]||(e[1]=t=>o.check(2))},null,2)]),Object(n["f"])("div",A,[Object(n["f"])("button",{class:Object(n["i"])({ingame__button:!0,ingame__button_blue:!0,ingame__button_play:i.game.highlightButtons[3]}),id:"btn-4",onClick:e[2]||(e[2]=t=>o.check(4))},null,2),Object(n["f"])("button",{class:Object(n["i"])({ingame__button:!0,ingame__button_green:!0,ingame__button_play:i.game.highlightButtons[2]}),id:"btn-3",onClick:e[3]||(e[3]=t=>o.check(3))},null,2)])]),Object(n["f"])("div",$,[Object(n["f"])("p",null,[E,Object(n["g"])(Object(n["n"])(i.game.level),1)])])])}var R={name:"InGame",data(){return{progressionStep:0}},props:{game:{type:Object,required:!0}},methods:{check(t){this.game.playElement(t),t!=this.game.progression[this.progressionStep]?this.$emit("game_over"):(this.progressionStep++,this.progressionStep==this.game.len&&(this.progressionStep=0,this.$emit("level_complete")))}},mounted(){this.$emit("game_mounted")}};i("b72e");const J=d()(R,[["render",N],["__scopeId","data-v-b5a02110"]]);var q=J;const H=t=>(Object(n["l"])("data-v-f06a4330"),t=t(),Object(n["k"])(),t),K={class:"game-over"},z=H(()=>Object(n["f"])("p",{class:"game-over__text"},"Game Over",-1));function F(t,e,i,s,a,o){return Object(n["j"])(),Object(n["e"])("div",K,[z,Object(n["f"])("button",{class:"game-over__button",onClick:e[0]||(e[0]=(...t)=>o.startGame&&o.startGame(...t))},"Try Again")])}var Q={methods:{startGame(){this.$emit("init")}}};i("178a");const U=d()(Q,[["render",F],["__scopeId","data-v-f06a4330"]]);var V=U;class W{constructor(t){this.difficulty=t,this.delay=this._setDelay(),this.progression=[],this.len=0,this.level=1,this.audios=[new Audio("audio/1.mp3"),new Audio("audio/2.mp3"),new Audio("audio/3.mp3"),new Audio("audio/4.mp3")],this.highlightButtons=[!1,!1,!1,!1]}_setDelay(){switch(this.difficulty){case"easy":return this.delay=1500;case"medium":return this.delay=1e3;case"hard":return this.delay=400;default:throw new Error("Something went wrong")}}generateRandomNumber(){this.progression.push(Math.floor(4*Math.random())+1),this.len++}playElement(t){this.audios[t-1].play()}playProgression(){let t=0,e=setInterval(()=>{this.playElement(this.progression[t]),this.highlightButtons[this.progression[t]-1]=!0,setTimeout(()=>{this.highlightButtons[this.progression[t++]-1]=!1},200)},this.delay);setTimeout(()=>clearInterval(e),this.delay*this.len+1)}}var X={name:"App",components:{StartPage:g,Settings:x,InGame:q,GameOver:V},data(){return{currentPage:"StartPage",game:null}},methods:{changePage(t,e){null!==e&&(void 0!==e&&(this.game=new W(e)),this.currentPage=t)},mountGame(){this.game.generateRandomNumber(),this.game.playProgression(),console.log(this.game.progression)},completeLevel(){this.game.level++,this.game.generateRandomNumber(),setTimeout(()=>this.game.playProgression(),1e3),console.log(this.game.progression)}}};i("d476");const Y=d()(X,[["render",a]]);var Z=Y;Object(n["b"])(Z).mount("#app")},"584c":function(t,e,i){},"6eba":function(t,e,i){},"798a":function(t,e,i){"use strict";i("6eba")},b00d:function(t,e,i){"use strict";i("584c")},b72e:function(t,e,i){"use strict";i("ce5a")},c966:function(t,e,i){},ce5a:function(t,e,i){},d476:function(t,e,i){"use strict";i("c966")},f396:function(t,e,i){}});
//# sourceMappingURL=app.b5aa2ec8.js.map