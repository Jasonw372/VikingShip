const Xt=()=>{};let _t={},gn={},pn=null,hn={mark:Xt,measure:Xt};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(gn=document),typeof MutationObserver<"u"&&(pn=MutationObserver),typeof performance<"u"&&(hn=performance)}catch{}const{userAgent:Gt=""}=_t.navigator||{},M=_t,g=gn,Ht=pn,at=hn;M.document;const C=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",bn=~Gt.indexOf("MSIE")||~Gt.indexOf("Trident/");var p="classic",yn="duotone",y="sharp",v="sharp-duotone",Vn=[p,yn,y,v],$n={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Bt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qn=["kit"],Kn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Qn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Jn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Zn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},te={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ne={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ae={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},vn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},re=["solid","regular","light","thin","duotone","brands"],xn=[1,2,3,4,5,6,7,8,9,10],ie=xn.concat([11,12,13,14,15,16,17,18,19,20]),q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},se=[...Object.keys(ne),...re,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY].concat(xn.map(t=>"".concat(t,"x"))).concat(ie.map(t=>"w-".concat(t))),oe={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ce={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},le={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const O="___FONT_AWESOME___",yt=16,An="fa",kn="svg-inline--fa",Y="data-fa-i2svg",vt="data-fa-pseudo-element",fe="data-fa-pseudo-element-pending",Mt="data-prefix",Ft="data-icon",$t="fontawesome-i2svg",ue="async",me=["HTML","HEAD","STYLE","SCRIPT"],En=(()=>{try{return!0}catch{return!1}})(),wn=[p,y,v];function nt(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[p]}})}const Sn={...vn};Sn[p]={...vn[p],...Bt.kit,...Bt["kit-duotone"]};const D=nt(Sn),xt={...ae};xt[p]={...xt[p],...Vt.kit,...Vt["kit-duotone"]};const Z=nt(xt),At={...ee};At[p]={...At[p],...le.kit};const j=nt(At),kt={...te};kt[p]={...kt[p],...ce.kit};const de=nt(kt),ge=Kn,Pn="fa-layers-text",pe=Qn,he={...$n};nt(he);const be=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=q,B=new Set;Object.keys(Z[p]).map(B.add.bind(B));Object.keys(Z[y]).map(B.add.bind(B));Object.keys(Z[v]).map(B.add.bind(B));const ye=[...qn,...se],Q=M.FontAwesomeConfig||{};function ve(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function xe(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n;const r=xe(ve(e));r!=null&&(Q[a]=r)});const On={styleDefault:"solid",familyDefault:"classic",cssPrefix:An,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const V={...On,...Q};V.autoReplaceSvg||(V.observeMutations=!1);const f={};Object.keys(On).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(n){V[t]=n,J.forEach(e=>e(f))},get:function(){return V[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,J.forEach(n=>n(f))},get:function(){return V.cssPrefix}});M.FontAwesomeConfig=f;const J=[];function Ae(t){return J.push(t),()=>{J.splice(J.indexOf(t),1)}}const T=yt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ke(t){if(!t||!C)return;const n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;const e=g.head.childNodes;let a=null;for(let r=e.length-1;r>-1;r--){const i=e[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return g.head.insertBefore(n,a),t}const Ee="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,n="";for(;t-- >0;)n+=Ee[Math.random()*62|0];return n}function $(t){const n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Lt(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function Nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function we(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(Nn(t[e]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Rt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function Se(t){let{transform:n,containerWidth:e,iconWidth:a}=t;const r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),o="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function Pe(t){let{transform:n,width:e=yt,height:a=yt,startCentered:r=!1}=t,i="";return r&&bn?i+="translate(".concat(n.x/T-e/2,"em, ").concat(n.y/T-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(n.x/T,"em), calc(-50% + ").concat(n.y/T,"em)) "):i+="translate(".concat(n.x/T,"em, ").concat(n.y/T,"em) "),i+="scale(".concat(n.size/T*(n.flipX?-1:1),", ").concat(n.size/T*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var Oe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cn(){const t=An,n=kn,e=f.cssPrefix,a=f.replacementClass;let r=Oe;if(e!==t||a!==n){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(o,".".concat(a))}return r}let qt=!1;function gt(){f.autoAddCss&&!qt&&(ke(Cn()),qt=!0)}var Ne={mixout(){return{dom:{css:Cn,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}};const N=M||{};N[O]||(N[O]={});N[O].styles||(N[O].styles={});N[O].hooks||(N[O].hooks={});N[O].shims||(N[O].shims=[]);var w=N[O];const In=[],Tn=function(){g.removeEventListener("DOMContentLoaded",Tn),st=1,In.map(t=>t())};let st=!1;C&&(st=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),st||g.addEventListener("DOMContentLoaded",Tn));function Ce(t){C&&(st?setTimeout(t,0):In.push(t))}function et(t){const{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?Nn(t):"<".concat(n," ").concat(we(e),">").concat(a.map(et).join(""),"</").concat(n,">")}function Kt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var pt=function(n,e,a,r){var i=Object.keys(n),s=i.length,o=e,c,l,u;for(a===void 0?(c=1,u=n[i[0]]):(c=0,u=a);c<s;c++)l=i[c],u=o(u,n[l],l,n);return u};function Ie(t){const n=[];let e=0;const a=t.length;for(;e<a;){const r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){const i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Et(t){const n=Ie(t);return n.length===1?n[0].toString(16):null}function Te(t,n){const e=t.length;let a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Qt(t){return Object.keys(t).reduce((n,e)=>{const a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function wt(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=e,r=Qt(n);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,Qt(n)):w.styles[t]={...w.styles[t]||{},...r},t==="fas"&&wt("fa",n)}const{styles:z,shims:_e}=w,Me={[p]:Object.values(j[p]),[y]:Object.values(j[y]),[v]:Object.values(j[v])};let zt=null,_n={},Mn={},Fn={},Ln={},Rn={};const Fe={[p]:Object.keys(D[p]),[y]:Object.keys(D[y]),[v]:Object.keys(D[v])};function Le(t){return~ye.indexOf(t)}function Re(t,n){const e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Le(r)?r:null}const zn=()=>{const t=a=>pt(z,(r,i,s)=>(r[s]=pt(i,a,{}),r),{});_n=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),Mn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),Rn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const n="far"in z||f.autoFetchSvg,e=pt(_e,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});Fn=e.names,Ln=e.unicodes,zt=lt(f.styleDefault,{family:f.familyDefault})};Ae(t=>{zt=lt(t.styleDefault,{family:f.familyDefault})});zn();function Dt(t,n){return(_n[t]||{})[n]}function ze(t,n){return(Mn[t]||{})[n]}function _(t,n){return(Rn[t]||{})[n]}function Dn(t){return Fn[t]||{prefix:null,iconName:null}}function De(t){const n=Ln[t],e=Dt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return zt}const jt=()=>({prefix:null,iconName:null,rest:[]});function lt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=p}=n,a=D[e][t],r=Z[e][t]||Z[e][a],i=t in w.styles?t:null;return r||i||null}const je={[p]:Object.keys(j[p]),[y]:Object.keys(j[y]),[v]:Object.keys(j[v])};function ft(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=n,a={[p]:"".concat(f.cssPrefix,"-").concat(p),[y]:"".concat(f.cssPrefix,"-").concat(y),[v]:"".concat(f.cssPrefix,"-").concat(v)};let r=null,i=p;const s=Vn.filter(c=>c!==yn);s.forEach(c=>{(t.includes(a[c])||t.some(l=>je[c].includes(l)))&&(i=c)});const o=t.reduce((c,l)=>{const u=Re(f.cssPrefix,l);if(z[l]?(l=Me[i].includes(l)?de[i][l]:l,r=l,c.prefix=l):Fe[i].indexOf(l)>-1?(r=l,c.prefix=lt(l,{family:i})):u?c.iconName=u:l!==f.replacementClass&&!s.some(d=>l===a[d])&&c.rest.push(l),!e&&c.prefix&&c.iconName){const d=r==="fa"?Dn(c.iconName):{},m=_(c.prefix,c.iconName);d.prefix&&(r=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!z.far&&z.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},jt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===y&&(z.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=_(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===v&&(z.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=_(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}class Ye{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];const r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},wt(i,r[i]);const s=j[p][i];s&&wt(s,r[i]),zn()})}reset(){this.definitions={}}_pullDefinitions(n,e){const a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],c=o[2];n[i]||(n[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(n[i][l]=o)}),n[i][s]=o}),n}}let Jt=[],G={};const H={},Ue=Object.keys(H);function We(t,n){let{mixoutsTo:e}=n;return Jt=t,G={},Object.keys(H).forEach(a=>{Ue.indexOf(a)===-1&&delete H[a]}),Jt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(e[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{G[s]||(G[s]=[]),G[s].push(i[s])})}a.provides&&a.provides(H)}),e}function St(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];return(G[t]||[]).forEach(s=>{n=s.apply(null,[n,...a])}),n}function U(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];(G[t]||[]).forEach(i=>{i.apply(null,e)})}function L(){const t=arguments[0],n=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,n):void 0}function Pt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t;const e=t.prefix||F();if(n)return n=_(e,n)||n,Kt(jn.definitions,e,n)||Kt(w.styles,e,n)}const jn=new Ye,Xe=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},Ge={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C?(U("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Ce(()=>{Be({autoReplaceSvgRoot:n}),U("watch",t)})}},He={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=lt(t[0]);return{prefix:e,iconName:_(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(ge))){const n=ft(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||F(),iconName:_(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){const n=F();return{prefix:n,iconName:_(n,t)||t}}}},x={noAuto:Xe,config:f,dom:Ge,parse:He,library:jn,findIconDefinition:Pt,toHtml:et},Be=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=g}=t;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&C&&f.autoReplaceSvg&&x.dom.i2svg({node:n})};function ut(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>et(e))}}),Object.defineProperty(t,"node",{get:function(){if(!C)return;const e=g.createElement("div");return e.innerHTML=t.html,e.children}}),t}function Ve(t){let{children:n,main:e,mask:a,attributes:r,styles:i,transform:s}=t;if(Rt(s)&&e.found&&!a.found){const{width:o,height:c}=e,l={x:o/c/2,y:.5};r.style=ct({...i,"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:n}]}function $e(t){let{prefix:n,iconName:e,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(n,"-").concat(f.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function Yt(t){const{icons:{main:n,mask:e},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:u,watchable:d=!1}=t,{width:m,height:h}=e.found?e:n,I=a==="fak",R=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(X=>u.classes.indexOf(X)===-1).filter(X=>X!==""||!!X).concat(u.classes).join(" ");let A={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:R,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)}};const P=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};d&&(A.attributes[Y]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||tt())},children:[o]}),delete A.attributes.title);const b={...A,prefix:a,iconName:r,main:n,mask:e,maskId:c,transform:i,symbol:s,styles:{...P,...u.styles}},{children:k,attributes:W}=e.found&&n.found?L("generateAbstractMask",b)||{children:[],attributes:{}}:L("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=k,b.attributes=W,s?$e(b):Ve(b)}function Zt(t){const{content:n,width:e,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[Y]="");const l={...s.styles};Rt(r)&&(l.transform=Pe({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);const u=ct(l);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[n]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function qe(t){const{content:n,title:e,extra:a}=t,r={...a.attributes,...e?{title:e}:{},class:a.classes.join(" ")},i=ct(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[n]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}const{styles:ht}=w;function Ot(t){const n=t[0],e=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:r}}const Ke={found:!1,width:512,height:512};function Qe(t,n){!En&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Nt(t,n){let e=n;return n==="fa"&&f.styleDefault!==null&&(n=F()),new Promise((a,r)=>{if(e==="fa"){const i=Dn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&ht[n]&&ht[n][t]){const i=ht[n][t];return a(Ot(i))}Qe(t,n),a({...Ke,icon:f.showMissingIcons&&t?L("missingIconAbstract")||{}:{}})})}const tn=()=>{},Ct=f.measurePerformance&&at&&at.mark&&at.measure?at:{mark:tn,measure:tn},K='FA "6.6.0"',Je=t=>(Ct.mark("".concat(K," ").concat(t," begins")),()=>Yn(t)),Yn=t=>{Ct.mark("".concat(K," ").concat(t," ends")),Ct.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var Ut={begin:Je,end:Yn};const rt=()=>{};function nn(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function Ze(t){const n=t.getAttribute?t.getAttribute(Mt):null,e=t.getAttribute?t.getAttribute(Ft):null;return n&&e}function ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function na(){return f.autoReplaceSvg===!0?it.replace:it[f.autoReplaceSvg]||it.replace}function ea(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function aa(t){return g.createElement(t)}function Un(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=t.tag==="svg"?ea:aa}=n;if(typeof t=="string")return g.createTextNode(t);const a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Un(i,{ceFn:e}))}),a}function ra(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const it={replace:function(t){const n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(Un(e),n)}),n.getAttribute(Y)===null&&f.keepOriginalSource){let e=g.createComment(ra(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){const n=t[0],e=t[1];if(~Lt(n).indexOf(f.replacementClass))return it.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const i=e[0].attributes.class.split(" ").reduce((s,o)=>(o===f.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}const r=e.map(i=>et(i)).join(`
`);n.setAttribute(Y,""),n.innerHTML=r}};function en(t){t()}function Wn(t,n){const e=typeof n=="function"?n:rt;if(t.length===0)e();else{let a=en;f.mutateApproach===ue&&(a=M.requestAnimationFrame||en),a(()=>{const r=na(),i=Ut.begin("mutate");t.map(r),i(),e()})}}let Wt=!1;function Xn(){Wt=!0}function It(){Wt=!1}let ot=null;function an(t){if(!Ht||!f.observeMutations)return;const{treeCallback:n=rt,nodeCallback:e=rt,pseudoElementsCallback:a=rt,observeMutationsRoot:r=g}=t;ot=new Ht(i=>{if(Wt)return;const s=F();$(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!nn(o.addedNodes[0])&&(f.searchPseudoElements&&a(o.target),n(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&nn(o.target)&&~be.indexOf(o.attributeName))if(o.attributeName==="class"&&Ze(o.target)){const{prefix:c,iconName:l}=ft(Lt(o.target));o.target.setAttribute(Mt,c||s),l&&o.target.setAttribute(Ft,l)}else ta(o.target)&&e(o.target)})}),C&&ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ia(){ot&&ot.disconnect()}function sa(t){const n=t.getAttribute("style");let e=[];return n&&(e=n.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),e}function oa(t){const n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ft(Lt(t));return r.prefix||(r.prefix=F()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ze(r.prefix,t.innerText)||Dt(r.prefix,Et(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ca(t){const n=$(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(e?n["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||tt()):(n["aria-hidden"]="true",n.focusable="false")),n}function la(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:a,rest:r}=oa(t),i=ca(t),s=St("parseNodeAttributes",{},t);let o=n.styleParser?sa(t):[];return{iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i},...s}}const{styles:fa}=w;function Gn(t){const n=f.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~n.extra.classes.indexOf(Pn)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}let S=new Set;wn.map(t=>{S.add("fa-".concat(t))});Object.keys(D[p]).map(S.add.bind(S));Object.keys(D[y]).map(S.add.bind(S));Object.keys(D[v]).map(S.add.bind(S));S=[...S];function sn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C)return Promise.resolve();const e=g.documentElement.classList,a=u=>e.add("".concat($t,"-").concat(u)),r=u=>e.remove("".concat($t,"-").concat(u)),i=f.autoFetchSvg?S:wn.map(u=>"fa-".concat(u)).concat(Object.keys(fa));i.includes("fa")||i.push("fa");const s=[".".concat(Pn,":not([").concat(Y,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=$(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Ut.begin("onTree"),l=o.reduce((u,d)=>{try{const m=Gn(d);m&&u.push(m)}catch(m){En||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(m=>{Wn(m,()=>{a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),u()})}).catch(m=>{c(),d(m)})})}function ua(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(t).then(e=>{e&&Wn([e],n)})}function ma(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:Pt(n||{});let{mask:r}=e;return r&&(r=(r||{}).icon?r:Pt(r||{})),t(a,{...e,mask:r})}}const da=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=E,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=n;if(!t)return;const{prefix:d,iconName:m,icon:h}=t;return ut({type:"icon",...t},()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:n}),f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||tt()):(l["aria-hidden"]="true",l.focusable="false")),Yt({icons:{main:Ot(h),mask:r?Ot(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...E,...e},symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var ga={mixout(){return{icon:ma(da)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=ua,t}}},provides(t){t.i2svg=function(n){const{node:e=g,callback:a=()=>{}}=n;return sn(e,a)},t.generateSvgReplacementMutation=function(n,e){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:u,extra:d}=e;return new Promise((m,h)=>{Promise.all([Nt(a,s),l.iconName?Nt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[R,A]=I;m([n,Yt({icons:{main:R,mask:A},prefix:s,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:r,transform:i,styles:s}=n;const o=ct(s);o.length>0&&(a.style=o);let c;return Rt(i)&&(c=L("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(c||r.icon),{children:e,attributes:a}}}},pa={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=n;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},ha={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:a=[],attributes:r={},styles:i={}}=n;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:n}),qe({content:t.toString(),title:e,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},ba={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=E,title:a=null,classes:r=[],attributes:i={},styles:s={}}=n;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:n}),Zt({content:t,transform:{...E,...e},title:a,extra:{attributes:i,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(n,e){const{title:a,transform:r,extra:i}=e;let s=null,o=null;if(bn){const c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,o=l.height/c}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Zt({content:n.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const ya=new RegExp('"',"ug"),on=[1105920,1112319],cn={FontAwesome:{normal:"fas",400:"fas"},...Zn,...Jn,...oe},Tt=Object.keys(cn).reduce((t,n)=>(t[n.toLowerCase()]=cn[n],t),{}),va=Object.keys(Tt).reduce((t,n)=>{const e=Tt[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function xa(t){const n=t.replace(ya,""),e=Te(n,0),a=e>=on[0]&&e<=on[1],r=n.length===2?n[0]===n[1]:!1;return{value:Et(r?n[0]:n),isSecondary:a||r}}function Aa(t,n){const e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Tt[e]||{})[r]||va[e]}function ln(t,n){const e="".concat(fe).concat(n.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(e)!==null)return a();const s=$(t.children).filter(m=>m.getAttribute(vt)===n)[0],o=M.getComputedStyle(t,n),c=o.getPropertyValue("font-family"),l=c.match(pe),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&d!=="none"&&d!==""){const m=o.getPropertyValue("content");let h=Aa(c,u);const{value:I,isSecondary:R}=xa(m),A=l[0].startsWith("FontAwesome");let P=Dt(h,I),b=P;if(A){const k=De(I);k.iconName&&k.prefix&&(P=k.iconName,h=k.prefix)}if(P&&!R&&(!s||s.getAttribute(Mt)!==h||s.getAttribute(Ft)!==b)){t.setAttribute(e,b),s&&t.removeChild(s);const k=la(),{extra:W}=k;W.attributes[vt]=n,Nt(P,h).then(X=>{const Hn=Yt({...k,icons:{main:X,mask:jt()},prefix:h,iconName:b,extra:W,watchable:!0}),mt=g.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=Hn.map(Bn=>et(Bn)).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ka(t){return Promise.all([ln(t,"::before"),ln(t,"::after")])}function Ea(t){return t.parentNode!==document.head&&!~me.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(C)return new Promise((n,e)=>{const a=$(t.querySelectorAll("*")).filter(Ea).map(ka),r=Ut.begin("searchPseudoElements");Xn(),Promise.all(a).then(()=>{r(),It(),n()}).catch(()=>{r(),It(),e()})})}var wa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(n){const{node:e=g}=n;f.searchPseudoElements&&fn(e)}}};let un=!1;var Sa={mixout(){return{dom:{unwatch(){Xn(),un=!0}}}},hooks(){return{bootstrap(){an(St("mutationObserverCallbacks",{}))},noAuto(){ia()},watch(t){const{observeMutationsRoot:n}=t;un?It():an(St("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const mn=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)};var Pa={mixout(){return{parse:{transform:t=>mn(t)}}},hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-transform");return e&&(t.transform=mn(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:r,iconWidth:i}=n;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:u,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...m.path}}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function dn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Oa(t){return t.tag==="g"?t.children:[t]}var Na={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-mask"),a=e?ft(e.split(" ").map(r=>r.trim())):jt();return a.prefix||(a.prefix=F()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:r,mask:i,maskId:s,transform:o}=n;const{width:c,icon:l}=r,{width:u,icon:d}=i,m=Se({transform:o,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:{...bt,fill:"white"}},I=l.children?{children:l.children.map(dn)}:{},R={tag:"g",attributes:{...m.inner},children:[dn({tag:l.tag,attributes:{...l.attributes,...m.path},...I})]},A={tag:"g",attributes:{...m.outer},children:[R]},P="mask-".concat(s||tt()),b="clip-".concat(s||tt()),k={tag:"mask",attributes:{...bt,id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Oa(d)},k]};return e.push(W,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(P,")"),...bt}}),{children:e,attributes:a}}}},Ca={provides(t){let n=!1;M.matchMedia&&(n=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return n||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),e.push(s),e.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:n?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),n||e.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ia={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},Ta=[Ne,ga,pa,ha,ba,wa,Sa,Pa,Na,Ca,Ia];We(Ta,{mixoutsTo:x});x.noAuto;x.config;const _a=x.library;x.dom;const Ma=x.parse;x.findIconDefinition;x.toHtml;const Fa=x.icon;x.layer;x.text;x.counter;export{Fa as i,_a as l,Ma as p};
