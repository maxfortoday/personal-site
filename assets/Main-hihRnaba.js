import{f as e,i as t,l as n,r,s as i,t as a}from"./jsx-runtime-iDO-CFVn.js";import{n as o,t as s}from"./index-DVcstFWq.js";var c=e(n(),1),l=(...e)=>{typeof window<`u`&&(window.gtag===void 0&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...e))},u=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function d(e){return e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(e,t,n)=>t>0&&t+e.length!==n.length&&e.search(u)>-1&&n.charAt(t-2)!==`:`&&(n.charAt(t+e.length)!==`-`||n.charAt(t-1)===`-`)&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1))}function f(e){return typeof e==`string`&&e.indexOf(`@`)!==-1}var p=`REDACTED (Potential Email Address)`;function m(e){return f(e)?(console.warn(`This arg looks like an email address, redacting.`),p):e}function h(e=``,t=!0,n=!0){let r=e||``;return t&&(r=d(e)),n&&(r=m(r)),r}new class{isInitialized;_testMode;_currentMeasurementId;_hasLoadedGA;_isQueuing;_queueGtag;constructor(){this.reset()}reset=()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId=``,this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]};_gtag=(...e)=>{this._testMode||this._isQueuing?this._queueGtag.push(e):l(...e)};gtag(...e){this._gtag(...e)}_loadGA=(e,t,n=`https://www.googletagmanager.com/gtag/js`)=>{if(!(typeof window>`u`||typeof document>`u`)&&!this._hasLoadedGA){let r=document.createElement(`script`);r.async=!0,r.src=`${n}?id=${e}`,t&&r.setAttribute(`nonce`,t),document.body.appendChild(r),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}};_toGtagOptions=e=>{if(!e)return;let t={cookieUpdate:`cookie_update`,cookieExpires:`cookie_expires`,cookieDomain:`cookie_domain`,cookieFlags:`cookie_flags`,userId:`user_id`,clientId:`client_id`,anonymizeIp:`anonymize_ip`,contentGroup1:`content_group1`,contentGroup2:`content_group2`,contentGroup3:`content_group3`,contentGroup4:`content_group4`,contentGroup5:`content_group5`,allowAdFeatures:`allow_google_signals`,allowAdPersonalizationSignals:`allow_ad_personalization_signals`,nonInteraction:`non_interaction`,page:`page_path`,hitCallback:`event_callback`};return Object.entries(e).reduce((e,[n,r])=>(t[n]?e[t[n]]=r:e[n]=r,e),{})};initialize=(e,t={})=>{if(!e)throw Error(`Require GA_MEASUREMENT_ID`);let n=typeof e==`string`?[{trackingId:e}]:e;this._currentMeasurementId=n[0].trackingId;let{gaOptions:r,gtagOptions:i,nonce:a,testMode:o=!1,gtagUrl:s}=t;if(this._testMode=o,o||this._loadGA(this._currentMeasurementId,a,s),this.isInitialized||(this._gtag(`js`,new Date),n.forEach(e=>{let t={...this._toGtagOptions({...r,...e.gaOptions}),...i,...e.gtagOptions};Object.keys(t).length?this._gtag(`config`,e.trackingId,t):this._gtag(`config`,e.trackingId)})),this.isInitialized=!0,!o){let e=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;e.length;){let t=e.shift();this._gtag(...t),t[0]===`get`&&(this._isQueuing=!0)}}};set=e=>{if(!e){console.warn("`fieldsObject` is required in .set()");return}if(typeof e!=`object`){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(e).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand(`set`,e)};_gaCommandSendEvent=(e,t,n,r,i)=>{this._gtag(`event`,t,{event_category:e,event_label:n,value:r,...i&&{non_interaction:i.nonInteraction},...this._toGtagOptions(i)})};_gaCommandSendEventParameters=(...e)=>{if(typeof e[0]==`string`)this._gaCommandSendEvent(...e.slice(1));else{let{eventCategory:t,eventAction:n,eventLabel:r,eventValue:i,hitType:a,...o}=e[0];this._gaCommandSendEvent(t,n,r,i,o)}};_gaCommandSendTiming=(e,t,n,r)=>{this._gtag(`event`,`timing_complete`,{name:t,value:n,event_category:e,event_label:r})};_gaCommandSendPageview=(e,t)=>{if(t&&Object.keys(t).length){let{title:n,location:r,...i}=this._toGtagOptions(t)||{};this._gtag(`event`,`page_view`,{...e&&{page_path:e},...n&&{page_title:n},...r&&{page_location:r},...i})}else e?this._gtag(`event`,`page_view`,{page_path:e}):this._gtag(`event`,`page_view`)};_gaCommandSendPageviewParameters=(...e)=>{if(typeof e[0]==`string`)this._gaCommandSendPageview(...e.slice(1));else{let{page:t,hitType:n,...r}=e[0];this._gaCommandSendPageview(t,r)}};_gaCommandSend=(...e)=>{let t=typeof e[0]==`string`?e[0]:e[0].hitType;switch(t){case`event`:this._gaCommandSendEventParameters(...e);break;case`pageview`:this._gaCommandSendPageviewParameters(...e);break;case`timing`:this._gaCommandSendTiming(...e.slice(1));break;case`screenview`:case`transaction`:case`item`:case`social`:case`exception`:console.warn(`Unsupported send command: ${t}`);break;default:console.warn(`Send command doesn't exist: ${t}`)}};_gaCommandSet=(...e)=>{typeof e[0]==`string`&&(e[0]={[e[0]]:e[1]}),this._gtag(`set`,this._toGtagOptions(e[0]))};_gaCommand=(e,...t)=>{switch(e){case`send`:this._gaCommandSend(...t);break;case`set`:this._gaCommandSet(...t);break;default:console.warn(`Command doesn't exist: ${e}`)}};ga=(...e)=>{if(typeof e[0]==`string`)this._gaCommand(...e);else{let[t]=e;this._gtag(`get`,this._currentMeasurementId,`client_id`,e=>{this._isQueuing=!1;let n=this._queueGtag;for(t({get:t=>t===`clientId`?e:t===`trackingId`?this._currentMeasurementId:t===`apiVersion`?`1`:void 0});n.length;){let e=n.shift();this._gtag(...e)}}),this._isQueuing=!0}return this.ga};event=(e,t)=>{if(typeof e==`string`)this._gtag(`event`,e,this._toGtagOptions(t));else{let{action:t,category:n,label:r,value:i,nonInteraction:a,transport:o}=e;if(!n||!t){console.warn(`args.category AND args.action are required in event()`);return}let s={hitType:`event`,eventCategory:h(n),eventAction:h(t)};r&&(s.eventLabel=h(r)),i!==void 0&&(typeof i==`number`?s.eventValue=i:console.warn("Expected `args.value` arg to be a Number.")),a!==void 0&&(typeof a==`boolean`?s.nonInteraction=a:console.warn("`args.nonInteraction` must be a boolean.")),o!==void 0&&(typeof o==`string`?([`beacon`,`xhr`,`image`].indexOf(o)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=o):console.warn("`args.transport` must be a string.")),this._gaCommand(`send`,s)}};send=e=>{this._gaCommand(`send`,e)}};var g=()=>{let{pathname:e}=i();return(0,c.useEffect)(()=>{},[e]),null};function _(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?v(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}var ee=()=>{},te={},ne={},re=null,ie={mark:ee,measure:ee};try{typeof window<`u`&&(te=window),typeof document<`u`&&(ne=document),typeof MutationObserver<`u`&&(re=MutationObserver),typeof performance<`u`&&(ie=performance)}catch{}var{userAgent:ae=``}=te.navigator||{},S=te,C=ne,oe=re,se=ie;S.document;var w=!!C.documentElement&&!!C.head&&typeof C.addEventListener==`function`&&typeof C.createElement==`function`,ce=~ae.indexOf(`MSIE`)||~ae.indexOf(`Trident/`),le=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ue=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,de={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},fe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},pe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],T=`classic`,me=`duotone`,he=[T,me,`sharp`,`sharp-duotone`],ge={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},_e={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},ve=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),ye={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},be=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],xe={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Se=[`kit`],Ce={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},we=[`fak`,`fakd`],Te={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Ee={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},De={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Oe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],ke=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Ae={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},je={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Me={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},Ne={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Pe=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Fe=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...Oe,...Pe],Ie=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Le=[1,2,3,4,5,6,7,8,9,10],Re=Le.concat([11,12,13,14,15,16,17,18,19,20]),ze=[...Object.keys(Me),...Ie,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,De.GROUP,De.SWAP_OPACITY,De.PRIMARY,De.SECONDARY].concat(Le.map(e=>`${e}x`),Re.map(e=>`w-${e}`)),Be={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},E=`___FONT_AWESOME___`,Ve=16,He=`fa`,Ue=`svg-inline--fa`,D=`data-fa-i2svg`,We=`data-fa-pseudo-element`,Ge=`data-fa-pseudo-element-pending`,Ke=`data-prefix`,qe=`data-icon`,Je=`fontawesome-i2svg`,Ye=`async`,Xe=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ze=(()=>{try{return!0}catch{return!1}})();function O(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[T]}})}var Qe=y({},de);Qe[T]=y(y(y(y({},{"fa-duotone":`duotone`}),de[T]),xe.kit),xe[`kit-duotone`]);var $e=O(Qe),et=y({},ye);et[T]=y(y(y(y({},{duotone:`fad`}),et[T]),Ee.kit),Ee[`kit-duotone`]);var tt=O(et),nt=y({},Ne);nt[T]=y(y({},nt[T]),Te.kit);var rt=O(nt),it=y({},je);it[T]=y(y({},it[T]),Ce.kit),O(it);var at=le,ot=`fa-layers-text`,st=ue;O(y({},ge));var ct=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],lt=fe,ut=[...Se,...ze],k=S.FontAwesomeConfig||{};function dt(e){var t=C.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ft(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}C&&typeof C.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=ft(dt(t));r!=null&&(k[n]=r)});var pt={styleDefault:`solid`,familyDefault:T,cssPrefix:He,replacementClass:Ue,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};k.familyPrefix&&(k.cssPrefix=k.familyPrefix);var A=y(y({},pt),k);A.autoReplaceSvg||(A.observeMutations=!1);var j={};Object.keys(pt).forEach(e=>{Object.defineProperty(j,e,{enumerable:!0,set:function(t){A[e]=t,M.forEach(e=>e(j))},get:function(){return A[e]}})}),Object.defineProperty(j,`familyPrefix`,{enumerable:!0,set:function(e){A.cssPrefix=e,M.forEach(e=>e(j))},get:function(){return A.cssPrefix}}),S.FontAwesomeConfig=j;var M=[];function mt(e){return M.push(e),()=>{M.splice(M.indexOf(e),1)}}var N=Ve,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ht(e){if(!e||!w)return;let t=C.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=C.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return C.head.insertBefore(t,r),e}var gt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function F(){let e=12,t=``;for(;e-- >0;)t+=gt[Math.random()*62|0];return t}function I(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _t(e){return e.classList?I(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function vt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function yt(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${vt(e[n])}" `,``).trim()}function bt(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function xt(e){return e.size!==P.size||e.x!==P.x||e.y!==P.y||e.rotate!==P.rotate||e.flipX||e.flipY}function St(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Ct(e){let{transform:t,width:n=Ve,height:r=Ve,startCentered:i=!1}=e,a=``;return i&&ce?a+=`translate(${t.x/N-n/2}em, ${t.y/N-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/N}em), calc(-50% + ${t.y/N}em)) `:a+=`translate(${t.x/N}em, ${t.y/N}em) `,a+=`scale(${t.size/N*(t.flipX?-1:1)}, ${t.size/N*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var wt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
}`;function Tt(){let e=He,t=Ue,n=j.cssPrefix,r=j.replacementClass,i=wt;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Et=!1;function Dt(){j.autoAddCss&&!Et&&(ht(Tt()),Et=!0)}var Ot={mixout(){return{dom:{css:Tt,insertCss:Dt}}},hooks(){return{beforeDOMElementCreation(){Dt()},beforeI2svg(){Dt()}}}},L=S||{};L[E]||(L[E]={}),L[E].styles||(L[E].styles={}),L[E].hooks||(L[E].hooks={}),L[E].shims||(L[E].shims=[]);var R=L[E],kt=[],At=function(){C.removeEventListener(`DOMContentLoaded`,At),jt=1,kt.map(e=>e())},jt=!1;w&&(jt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),jt||C.addEventListener(`DOMContentLoaded`,At));function Mt(e){w&&(jt?setTimeout(e,0):kt.push(e))}function z(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?vt(e):`<${t} ${yt(n)}>${r.map(z).join(``)}</${t}>`}function Nt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pt=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Ft=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Pt(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function It(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Lt(e){let t=It(e);return t.length===1?t[0].toString(16):null}function Rt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function zt(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Bt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=zt(t);typeof R.hooks.addPack==`function`&&!n?R.hooks.addPack(e,zt(t)):R.styles[e]=y(y({},R.styles[e]||{}),r),e===`fas`&&Bt(`fa`,t)}var{styles:B,shims:Vt}=R,Ht=Object.keys(rt),Ut=Ht.reduce((e,t)=>(e[t]=Object.keys(rt[t]),e),{}),Wt=null,Gt={},Kt={},qt={},Jt={},Yt={};function Xt(e){return~ut.indexOf(e)}function Zt(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Xt(i)?i:null}var Qt=()=>{let e=e=>Ft(B,(t,n,r)=>(t[r]=Ft(n,e,{}),t),{});Gt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Kt=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Yt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in B||j.autoFetchSvg,n=Ft(Vt,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});qt=n.names,Jt=n.unicodes,Wt=on(j.styleDefault,{family:j.familyDefault})};mt(e=>{Wt=on(e.styleDefault,{family:j.familyDefault})}),Qt();function $t(e,t){return(Gt[e]||{})[t]}function en(e,t){return(Kt[e]||{})[t]}function V(e,t){return(Yt[e]||{})[t]}function tn(e){return qt[e]||{prefix:null,iconName:null}}function nn(e){let t=Jt[e],n=$t(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Wt}var rn=()=>({prefix:null,iconName:null,rest:[]});function an(e){let t=T,n=Ht.reduce((e,t)=>(e[t]=`${j.cssPrefix}-${t}`,e),{});return he.forEach(r=>{(e.includes(n[r])||e.some(e=>Ut[r].includes(e)))&&(t=r)}),t}function on(e){let{family:t=T}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=$e[t][e];if(t===me&&!e)return`fad`;let r=tt[t][e]||tt[t][n],i=e in R.styles?e:null;return r||i||null}function sn(e){let t=[],n=null;return e.forEach(e=>{let r=Zt(j.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function cn(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function ln(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Fe.concat(ke),i=cn(e.filter(e=>r.includes(e))),a=cn(e.filter(e=>!Fe.includes(e))),[o=null]=i.filter(e=>(n=e,!pe.includes(e))),s=an(i),c=y(y({},sn(a)),{},{prefix:on(o,{family:s})});return y(y(y({},c),pn({values:e,family:s,styles:B,config:j,canonical:c,givenPrefix:n})),un(t,n,c))}function un(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?tn(i):{},o=V(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!B.far&&B.fas&&!j.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var dn=he.filter(e=>e!==T||e!==me),fn=Object.keys(Ne).filter(e=>e!==T).map(e=>Object.keys(Ne[e])).flat();function pn(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===me,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&dn.includes(n)&&(Object.keys(a).find(e=>fn.includes(e))||o.autoFetchSvg)&&(r.prefix=ve.get(n).defaultShortPrefixId,r.iconName=V(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=H()||`fas`),r}var mn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=y(y({},this.definitions[t]||{}),e[t]),Bt(t,e[t]);let n=rt[T][t];n&&Bt(n,e[t]),Qt()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},hn=[],U={},W={},gn=Object.keys(W);function _n(e,t){let{mixoutsTo:n}=t;return hn=e,U={},Object.keys(W).forEach(e=>{gn.indexOf(e)===-1&&delete W[e]}),hn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{U[e]||(U[e]=[]),U[e].push(t[e])})}e.provides&&e.provides(W)}),n}function vn(e,t){var n=[...arguments].slice(2);return(U[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function G(e){var t=[...arguments].slice(1);(U[e]||[]).forEach(e=>{e.apply(null,t)})}function K(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function yn(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||H();if(t)return t=V(n,t)||t,Nt(bn.definitions,n,t)||Nt(R.styles,n,t)}var bn=new mn,q={noAuto:()=>{j.autoReplaceSvg=!1,j.observeMutations=!1,G(`noAuto`)},config:j,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w?(G(`beforeI2svg`,e),K(`pseudoElements2svg`,e),K(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Mt(()=>{xn({autoReplaceSvgRoot:t}),G(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=on(e[0]);return{prefix:n,iconName:V(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${j.cssPrefix}-`)>-1||e.match(at))){let t=ln(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||H(),iconName:V(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=H();return{prefix:t,iconName:V(t,e)||e}}}},library:bn,findIconDefinition:yn,toHtml:z},xn=function(){let{autoReplaceSvgRoot:e=C}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(R.styles).length>0||j.autoFetchSvg)&&w&&j.autoReplaceSvg&&q.dom.i2svg({node:e})};function Sn(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(e=>z(e))}}),Object.defineProperty(e,`node`,{get:function(){if(!w)return;let t=C.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function Cn(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(xt(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=bt(y(y({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function wn(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${j.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:y(y({},i),{},{id:o}),children:r}]}]}function Tn(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=we.includes(r),h=[j.replacementClass,i?`${j.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:y(y({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`})},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[D]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||F()}`},children:[s]}),delete g.attributes.title);let v=y(y({},g),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:y(y({},_),u.styles)}),{children:b,attributes:x}=n.found&&t.found?K(`generateAbstractMask`,v)||{children:[],attributes:{}}:K(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=b,v.attributes=x,o?wn(v):Cn(v)}function En(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c=y(y(y({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(c[D]=``);let l=y({},o.styles);xt(i)&&(l.transform=Ct({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=bt(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function Dn(e){let{content:t,title:n,extra:r}=e,i=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=bt(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:On}=R;function kn(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${j.cssPrefix}-${lt.GROUP}`},children:[{tag:`path`,attributes:{class:`${j.cssPrefix}-${lt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${j.cssPrefix}-${lt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var An={found:!1,width:512,height:512};function jn(e,t){!Ze&&!j.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Mn(e,t){let n=t;return t===`fa`&&j.styleDefault!==null&&(t=H()),new Promise((r,i)=>{if(n===`fa`){let n=tn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&On[t]&&On[t][e]){let n=On[t][e];return r(kn(n))}jn(e,t),r(y(y({},An),{},{icon:j.showMissingIcons&&e&&K(`missingIconAbstract`)||{}}))})}var Nn=()=>{},Pn=j.measurePerformance&&se&&se.mark&&se.measure?se:{mark:Nn,measure:Nn},J=`FA "6.7.2"`,Fn=e=>(Pn.mark(`${J} ${e} begins`),()=>In(e)),In=e=>{Pn.mark(`${J} ${e} ends`),Pn.measure(`${J} ${e}`,`${J} ${e} begins`,`${J} ${e} ends`)},Ln={begin:Fn,end:In},Rn=()=>{};function zn(e){return typeof(e.getAttribute?e.getAttribute(D):null)==`string`}function Bn(e){let t=e.getAttribute?e.getAttribute(Ke):null,n=e.getAttribute?e.getAttribute(qe):null;return t&&n}function Vn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function Hn(){return j.autoReplaceSvg===!0?qn.replace:qn[j.autoReplaceSvg]||qn.replace}function Un(e){return C.createElementNS(`http://www.w3.org/2000/svg`,e)}function Wn(e){return C.createElement(e)}function Gn(e){let{ceFn:t=e.tag===`svg`?Un:Wn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return C.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Gn(e,{ceFn:t}))}),n}function Kn(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var qn={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Gn(e),t)}),t.getAttribute(D)===null&&j.keepOriginalSource){let e=C.createComment(Kn(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~_t(t).indexOf(j.replacementClass))return qn.replace(e);let r=RegExp(`${j.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===j.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>z(e)).join(`
`);t.setAttribute(D,``),t.innerHTML=i}};function Jn(e){e()}function Yn(e,t){let n=typeof t==`function`?t:Rn;if(e.length===0)n();else{let t=Jn;j.mutateApproach===Ye&&(t=S.requestAnimationFrame||Jn),t(()=>{let t=Hn(),r=Ln.begin(`mutate`);e.map(t),r(),n()})}}var Xn=!1;function Zn(){Xn=!0}function Qn(){Xn=!1}var $n=null;function er(e){if(!oe||!j.observeMutations)return;let{treeCallback:t=Rn,nodeCallback:n=Rn,pseudoElementsCallback:r=Rn,observeMutationsRoot:i=C}=e;$n=new oe(e=>{if(Xn)return;let i=H();I(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!zn(e.addedNodes[0])&&(j.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&j.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&zn(e.target)&&~ct.indexOf(e.attributeName))if(e.attributeName===`class`&&Bn(e.target)){let{prefix:t,iconName:n}=ln(_t(e.target));e.target.setAttribute(Ke,t||i),n&&e.target.setAttribute(qe,n)}else Vn(e.target)&&n(e.target)})}),w&&$n.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tr(){$n&&$n.disconnect()}function nr(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function rr(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=ln(_t(e));return i.prefix||=H(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=en(i.prefix,e.innerText)||$t(i.prefix,Lt(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ir(e){let t=I(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return j.autoA11y&&(n?t[`aria-labelledby`]=`${j.replacementClass}-title-${r||F()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function ar(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function or(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=rr(e),a=ir(e),o=vn(`parseNodeAttributes`,{},e),s=t.styleParser?nr(e):[];return y({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:sr}=R;function cr(e){let t=j.autoReplaceSvg===`nest`?or(e,{styleParser:!1}):or(e);return~t.extra.classes.indexOf(ot)?K(`generateLayersText`,e,t):K(`generateSvgReplacementMutation`,e,t)}function lr(){return[...be,...Fe]}function ur(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w)return Promise.resolve();let n=C.documentElement.classList,r=e=>n.add(`${Je}-${e}`),i=e=>n.remove(`${Je}-${e}`),a=j.autoFetchSvg?lr():pe.concat(Object.keys(sr));a.includes(`fa`)||a.push(`fa`);let o=[`.${ot}:not([${D}])`].concat(a.map(e=>`.${e}:not([${D}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=I(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Ln.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=cr(t);n&&e.push(n)}catch(e){Ze||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Yn(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function dr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cr(e).then(e=>{e&&Yn([e],t)})}function fr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:yn(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:yn(i||{}),e(r,y(y({},n),{},{mask:i}))}}var pr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return Sn(y({type:`icon`},e),()=>(G(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),j.autoA11y&&(o?l[`aria-labelledby`]=`${j.replacementClass}-title-${s||F()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),Tn({icons:{main:kn(p),mask:i?kn(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:y(y({},P),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},mr={mixout(){return{icon:fr(pr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ur,e.nodeCallback=dr,e}}},provides(e){e.i2svg=function(e){let{node:t=C,callback:n=()=>{}}=e;return ur(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Mn(n,a),c.iconName?Mn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,Tn({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=bt(a);o.length>0&&(n.style=o);let s;return xt(i)&&(s=K(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},hr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Sn({type:`layer`},()=>{G(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${j.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},gr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Sn({type:`counter`,content:e},()=>(G(`beforeDOMElementCreation`,{content:e,params:t}),Dn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${j.cssPrefix}-layers-counter`,...r]}})))}}}},_r={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=P,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Sn({type:`text`,content:e},()=>(G(`beforeDOMElementCreation`,{content:e,params:t}),En({content:e,transform:y(y({},P),n),title:r,extra:{attributes:a,styles:o,classes:[`${j.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(ce){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return j.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,En({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},vr=RegExp(`"`,`ug`),yr=[1105920,1112319],br=y(y(y(y({},{FontAwesome:{normal:`fas`,400:`fas`}}),_e),Be),Ae),xr=Object.keys(br).reduce((e,t)=>(e[t.toLowerCase()]=br[t],e),{}),Sr=Object.keys(xr).reduce((e,t)=>{let n=xr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Cr(e){let t=e.replace(vr,``),n=Rt(t,0),r=n>=yr[0]&&n<=yr[1],i=t.length===2?t[0]===t[1]:!1;return{value:Lt(i?t[0]:t),isSecondary:r||i}}function wr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(xr[n]||{})[i]||Sr[n]}function Tr(e,t){let n=`${Ge}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=I(e.children).filter(e=>e.getAttribute(We)===t)[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(st),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=wr(s,l),{value:f,isSecondary:p}=Cr(u),m=c[0].startsWith(`FontAwesome`),h=$t(d,f),g=h;if(m){let e=nn(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(h&&!p&&(!a||a.getAttribute(Ke)!==d||a.getAttribute(qe)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);let o=ar(),{extra:s}=o;s.attributes[We]=t,Mn(h,d).then(i=>{let a=Tn(y(y({},o),{},{icons:{main:i,mask:rn()},prefix:d,iconName:g,extra:s,watchable:!0})),c=C.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>z(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Er(e){return Promise.all([Tr(e,`::before`),Tr(e,`::after`)])}function Dr(e){return e.parentNode!==document.head&&!~Xe.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(We)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Or(e){if(w)return new Promise((t,n)=>{let r=I(e.querySelectorAll(`*`)).filter(Dr).map(Er),i=Ln.begin(`searchPseudoElements`);Zn(),Promise.all(r).then(()=>{i(),Qn(),t()}).catch(()=>{i(),Qn(),n()})})}var kr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Or,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=C}=e;j.searchPseudoElements&&Or(t)}}},Ar=!1,jr={mixout(){return{dom:{unwatch(){Zn(),Ar=!0}}}},hooks(){return{bootstrap(){er(vn(`mutationObserverCallbacks`,{}))},noAuto(){tr()},watch(e){let{observeMutationsRoot:t}=e;Ar?Qn():er(vn(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Mr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Nr={mixout(){return{parse:{transform:e=>Mr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Mr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:y({},a.outer),children:[{tag:`g`,attributes:y({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:y(y({},t.icon.attributes),a.path)}]}]}}}},Pr={x:0,y:0,width:`100%`,height:`100%`};function Fr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ir(e){return e.tag===`g`?e.children:[e]}_n([Ot,mr,hr,gr,_r,kr,jr,Nr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?ln(n.split(` `).map(e=>e.trim())):rn();return r.prefix||=H(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=St({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:y(y({},Pr),{},{fill:`white`})},p=c.children?{children:c.children.map(Fr)}:{},m={tag:`g`,attributes:y({},d.inner),children:[Fr(y({tag:c.tag,attributes:y(y({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:y({},d.outer),children:[m]},g=`mask-${a||F()}`,_=`clip-${a||F()}`,v={tag:`mask`,attributes:y(y({},Pr),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ir(u)},v]};return t.push(b,{tag:`rect`,attributes:y({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Pr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;S.matchMedia&&(t=S.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:y(y({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=y(y({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:y(y({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:y(y({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:y(y({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:y(y({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:y(y({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:y(y({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:y(y({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:q}),q.noAuto;var Y=q.config;q.library,q.dom;var Lr=q.parse;q.findIconDefinition,q.toHtml;var Rr=q.icon;q.layer,q.text,q.counter;var X=a();function zr(e){return e-=0,e===e}function Br(e){return zr(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Vr=(e,t)=>c.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Hr(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Z=new Map,Ur=1e3;function Wr(e){if(Z.has(e))return Z.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Br(n);t[e.startsWith(`webkit`)?Hr(e):e]=r}}}n=a+1}if(Z.size===Ur){let e=Z.keys().next().value;e&&Z.delete(e)}return Z.set(e,t),t}function Gr(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Gr(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Wr(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Br(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Vr)))}return e(t.tag,{...a,...u},...r)}var Kr=Gr.bind(null,c.createElement),qr=(e,t)=>{let n=(0,c.useId)();return e||(t?n:void 0)},Jr=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}?.FA_VERSION;var Yr=`searchPseudoElementsFullScan`in Y&&typeof Y.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Xr=Number.parseInt(Yr)>=7,Zr=()=>Xr,Qr=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},$r={left:`fa-pull-left`,right:`fa-pull-right`},ei={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},ti={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},ni={default:`fa-layers`};function ri(e){let t=Y.cssPrefix||Y.familyPrefix||Qr;return t===Qr?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Qr}-`,`g`),`${t}-`)}function ii(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Q.beat),n&&x.push(Q.fade),r&&x.push(Q.beatFade),i&&x.push(Q.bounce),a&&x.push(Q.shake),o&&x.push(Q.spin),c&&x.push(Q.spinReverse),s&&x.push(Q.spinPulse),l&&x.push(Q.pulse),u&&x.push($.fixedWidth),d&&x.push($.inverse),f&&x.push($.border),p===!0&&x.push($.flip),(p===`horizontal`||p===`both`)&&x.push($.flipHorizontal),(p===`vertical`||p===`both`)&&x.push($.flipVertical),m!=null&&x.push(ti[m]),h!=null&&h!==0&&x.push(ei[h]),g!=null&&x.push($r[g]),_&&x.push($.swapOpacity),Zr()?(v&&x.push($.rotateBy),y&&x.push($.widthAuto),(Y.cssPrefix||Y.familyPrefix||Qr)===Qr?x:x.map(ri)):x}var ai=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function oi(e){if(e)return ai(e)?e:Lr.icon(e)}function si(e){return Object.keys(e)}var ci=new Jr(`FontAwesomeIcon`),li={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ui=new Set(Object.keys(li)),di=c.forwardRef((e,t)=>{let n={...li,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=qr(c,!!i),d=qr(s,!!o),f=oi(r);if(!f)return ci.error(`Icon lookup is undefined`,r),null;let p=ii(n),m=typeof l==`string`?Lr.transform(l):l,h=oi(i),g=Rr(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ci.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of si(n))ui.has(e)||(v[e]=n[e]);return Kr(_[0],v)});di.displayName=`FontAwesomeIcon`,`${ni.default}${$.fixedWidth}`;var fi=[{link:`https://github.com/maxfortoday`,label:`Github`,icon:{prefix:`fab`,iconName:`github`,icon:[496,512,[],`f09b`,`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`]}},{link:`https://www.instagram.com/maxfortoday/`,label:`Instagram`,icon:{prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]}},{link:`https://www.linkedin.com/in/max-kozlov-769822114`,label:`LinkedIn`,icon:{prefix:`fab`,iconName:`linkedin-in`,icon:[448,512,[],`f0e1`,`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`]}},{link:`mailto:admtrigger@gmail.com`,label:`Email`,icon:{prefix:`far`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z`]}}],pi=()=>(0,X.jsx)(`footer`,{className:`border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-auto`,children:(0,X.jsxs)(`div`,{className:`max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400`,children:[(0,X.jsx)(`a`,{href:`mailto:admtrigger@gmail.com`,className:`hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium`,children:`admtrigger@gmail.com`}),(0,X.jsx)(`span`,{className:`text-gray-300 dark:text-gray-600`,children:`·`}),(0,X.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` Maxim Kozlov`]})]}),(0,X.jsx)(`div`,{className:`flex items-center gap-4`,children:fi.map(e=>(0,X.jsx)(`a`,{href:e.link,"aria-label":e.label,target:`_blank`,rel:`noopener noreferrer`,className:`text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`,children:(0,X.jsx)(di,{icon:e.icon,className:`w-4 h-4`})},e.label))})]})}),mi=[{path:`/`,label:`Maxim Kozlov`,index:!0},{path:`/resume`,label:`Resume`},{path:`/projects`,label:`Projects`},{path:`/ai`,label:`AI`},{path:`/about`,label:`About`},{path:`/stats`,label:`Stats`}],hi=e(o(),1),gi=()=>{let[e,n]=(0,c.useState)(!1),r=(0,c.useCallback)(()=>n(!1),[]);return(0,c.useEffect)(()=>{if(!e)return;let t=document.body.style.overflow;document.body.style.overflow=`hidden`;let n=e=>{e.key===`Escape`&&r()};return document.addEventListener(`keydown`,n),()=>{document.body.style.overflow=t,document.removeEventListener(`keydown`,n)}},[e,r]),(0,X.jsxs)(`div`,{className:`lg:hidden`,children:[(0,X.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),className:`p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`,"aria-label":e?`Close menu`:`Open menu`,"aria-expanded":e,"aria-controls":`mobile-nav`,children:(0,X.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,strokeWidth:2,viewBox:`0 0 24 24`,children:e?(0,X.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`}):(0,X.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 6h16M4 12h16M4 18h16`})})}),(0,hi.createPortal)((0,X.jsxs)(`div`,{className:`fixed inset-0 z-50 ${e?`pointer-events-auto`:`pointer-events-none`}`,"aria-hidden":!e,children:[(0,X.jsx)(`div`,{className:`absolute inset-0 bg-black/50 transition-opacity duration-300 ${e?`opacity-100`:`opacity-0`}`,onClick:r}),(0,X.jsx)(`div`,{id:`mobile-nav`,role:`dialog`,"aria-modal":`true`,"aria-label":`Navigation menu`,className:`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-slate-900 shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${e?`translate-x-0`:`translate-x-full`}`,children:(0,X.jsxs)(`div`,{className:`flex flex-col h-full p-6`,children:[(0,X.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,X.jsx)(`span`,{className:`text-white font-semibold text-sm tracking-wide`,children:`Menu`}),(0,X.jsx)(`button`,{type:`button`,onClick:r,className:`p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors`,"aria-label":`Close menu`,children:(0,X.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,strokeWidth:2,viewBox:`0 0 24 24`,children:(0,X.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`})})})]}),(0,X.jsx)(`nav`,{children:(0,X.jsx)(`ul`,{className:`space-y-1`,children:mi.map(e=>(0,X.jsx)(`li`,{children:(0,X.jsx)(t,{to:e.path,end:e.index,onClick:r,className:({isActive:e})=>`block px-4 py-3 rounded-lg font-medium transition-colors ${e?`bg-blue-600 text-white`:`text-slate-200 hover:bg-slate-800 hover:text-white`}`,children:e.label})},e.label))})})]})})]}),document.body)]})},_i=()=>{let{dark:e,toggle:n}=s();return(0,X.jsx)(`header`,{className:`sticky top-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700`,children:(0,X.jsxs)(`div`,{className:`px-4 sm:px-6 h-14 flex items-center justify-between gap-4`,children:[(0,X.jsx)(r,{to:`/`,className:`lg:hidden font-bold text-gray-900 dark:text-white text-base truncate`,children:`Maxim Kozlov`}),(0,X.jsx)(`nav`,{className:`hidden lg:flex items-center gap-1`,children:mi.filter(e=>!e.index).map(e=>(0,X.jsx)(t,{to:e.path,className:({isActive:e})=>`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${e?`bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400`:`text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800`}`,children:e.label},e.label))}),(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(`button`,{type:`button`,onClick:n,"aria-label":e?`Switch to light mode`:`Switch to dark mode`,className:`p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`,children:e?(0,X.jsx)(`svg`,{className:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,X.jsx)(`path`,{fillRule:`evenodd`,d:`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z`,clipRule:`evenodd`})}):(0,X.jsx)(`svg`,{className:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,X.jsx)(`path`,{d:`M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z`})})}),(0,X.jsx)(gi,{})]})]})})},vi=()=>{let{pathname:e}=i(),t=e===`/resume`;return(0,X.jsxs)(`div`,{className:`flex flex-col h-full p-6`,children:[(0,X.jsxs)(`div`,{className:`flex flex-col items-center text-center mb-8`,children:[(0,X.jsx)(`img`,{src:`/personal-site/images/me_icon.jpg`,alt:`Maxim Kozlov`,className:`w-24 h-24 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 mb-4`}),(0,X.jsx)(`h2`,{className:`text-xl font-bold text-white`,children:`Max Kozlov`}),(0,X.jsx)(`p`,{className:`text-sm text-slate-400 mt-0.5`,children:`Engineering Leader`}),(0,X.jsx)(`a`,{href:`mailto:admtrigger@gmail.com`,className:`text-xs text-slate-500 hover:text-blue-400 mt-1 transition-colors`,children:`admtrigger@gmail.com`})]}),(0,X.jsxs)(`div`,{className:`mb-8`,children:[(0,X.jsx)(`h3`,{className:`text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3`,children:`About`}),(0,X.jsx)(`p`,{className:`text-sm text-slate-300 leading-relaxed`,children:`Engineering Leader building cloud platforms and scaling teams. Currently driving multi-team delivery at Phoenix Insurance (~400K users).`}),(0,X.jsx)(r,{to:t?`/about`:`/resume`,className:`mt-4 inline-block w-full text-center text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 transition-colors`,children:t?`About Me`:`View Resume`})]}),(0,X.jsxs)(`div`,{className:`mt-auto`,children:[(0,X.jsx)(`div`,{className:`flex justify-center gap-5`,children:fi.map(e=>(0,X.jsx)(`a`,{href:e.link,"aria-label":e.label,target:`_blank`,rel:`noopener noreferrer`,className:`text-slate-400 hover:text-blue-400 transition-colors text-lg`,children:(0,X.jsx)(di,{icon:e.icon})},e.label))}),(0,X.jsxs)(`p`,{className:`text-center text-xs text-slate-600 mt-3`,children:[`© `,new Date().getFullYear(),` Maxim Kozlov`]})]})]})},yi=()=>{let{pathname:e}=i();return(0,c.useEffect)(()=>{window.scrollTo(0,0)},[e]),null},bi=({children:e})=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`title`,{children:`Maxim Kozlov`}),(0,X.jsx)(g,{}),(0,X.jsx)(yi,{}),(0,X.jsx)(`a`,{href:`#main-content`,className:`skip-to-content`,children:`Skip to content`}),(0,X.jsxs)(`div`,{className:`flex min-h-screen bg-gray-50 dark:bg-gray-950 font-sans`,children:[(0,X.jsx)(`aside`,{className:`hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:flex-col bg-slate-900 overflow-y-auto z-20`,children:(0,X.jsx)(vi,{})}),(0,X.jsxs)(`div`,{className:`flex-1 lg:ml-72 flex flex-col min-h-screen`,children:[(0,X.jsx)(_i,{}),(0,X.jsx)(`main`,{id:`main-content`,className:`flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8`,children:e}),(0,X.jsx)(pi,{})]})]})]});export{fi as n,di as r,bi as t};