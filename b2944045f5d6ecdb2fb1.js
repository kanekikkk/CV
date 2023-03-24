/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),ca=__webpack_require__(840);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(935);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/components/typesOfFormValue/personal.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Personal = /*#__PURE__*/function (_Component) {
  _inherits(Personal, _Component);
  var _super = _createSuper(Personal);
  function Personal(props) {
    var _this;
    _classCallCheck(this, Personal);
    _this = _super.call(this, props);
    if (props.prevValues.length != 0) {
      _this.state = _objectSpread({}, _this.props.prevValues[0]);
    } else {
      _this.state = {
        address: "",
        countryCode: "",
        developerType: "",
        discription: "",
        email: "",
        github: "",
        name: "",
        phoneNo: ""
      };
    }
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.countrySelected = _this.countrySelected.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Personal, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return _objectSpread(_objectSpread({}, preValue), {}, _defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'personal', _this2.props.id);
      });
    }
  }, {
    key: "countrySelected",
    value: function countrySelected(event) {
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          countryCode: event.target.value
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        placeholder: "Name",
        name: "name",
        required: true,
        onChange: this.updateState,
        value: this.state.name
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        placeholder: "Developer Type",
        name: "developerType",
        required: true,
        onChange: this.updateState,
        value: this.state.developerType
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "address",
        placeholder: "Address",
        onChange: this.updateState,
        value: this.state.address,
        required: true
      }), /*#__PURE__*/react.createElement("div", {
        className: "phoneNumber flex"
      }, /*#__PURE__*/react.createElement("select", {
        onChange: this.countrySelected
      }, /*#__PURE__*/react.createElement("option", {
        value: "+91"
      }, "Indian"), /*#__PURE__*/react.createElement("option", {
        value: "+997"
      }, "Nepal"), /*#__PURE__*/react.createElement("option", {
        value: "+92"
      }, "Pakistan")), /*#__PURE__*/react.createElement("input", {
        type: "tel",
        name: "phoneNo",
        placeholder: "Phone Number",
        maxLength: "10",
        onChange: this.updateState,
        value: this.state.phoneNo,
        required: true
      })), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "email",
        placeholder: "Email Address",
        onChange: this.updateState,
        value: this.state.email,
        required: true
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "github",
        placeholder: "GitHub",
        onChange: this.updateState,
        value: this.state.github,
        required: true
      }), /*#__PURE__*/react.createElement("textarea", {
        name: "discription",
        cols: "30",
        rows: "10",
        required: true,
        onChange: this.updateState,
        value: this.state.discription,
        placeholder: "Describe yourself...."
      }));
    }
  }]);
  return Personal;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/projects.jsx
function projects_typeof(obj) { "@babel/helpers - typeof"; return projects_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, projects_typeof(obj); }
function projects_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function projects_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? projects_ownKeys(Object(source), !0).forEach(function (key) { projects_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : projects_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function projects_defineProperty(obj, key, value) { key = projects_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function projects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function projects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, projects_toPropertyKey(descriptor.key), descriptor); } }
function projects_createClass(Constructor, protoProps, staticProps) { if (protoProps) projects_defineProperties(Constructor.prototype, protoProps); if (staticProps) projects_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function projects_toPropertyKey(arg) { var key = projects_toPrimitive(arg, "string"); return projects_typeof(key) === "symbol" ? key : String(key); }
function projects_toPrimitive(input, hint) { if (projects_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (projects_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function projects_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) projects_setPrototypeOf(subClass, superClass); }
function projects_setPrototypeOf(o, p) { projects_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return projects_setPrototypeOf(o, p); }
function projects_createSuper(Derived) { var hasNativeReflectConstruct = projects_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = projects_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = projects_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return projects_possibleConstructorReturn(this, result); }; }
function projects_possibleConstructorReturn(self, call) { if (call && (projects_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return projects_assertThisInitialized(self); }
function projects_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function projects_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function projects_getPrototypeOf(o) { projects_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return projects_getPrototypeOf(o); }

var Projects = /*#__PURE__*/function (_Component) {
  projects_inherits(Projects, _Component);
  var _super = projects_createSuper(Projects);
  function Projects(props) {
    var _this;
    projects_classCallCheck(this, Projects);
    _this = _super.call(this, props);
    if (_this.props.prevValues.projectName === undefined) {
      _this.state = {
        projectName: '',
        description: '',
        projectType: '',
        projectSubDes: '',
        discription: ''
      };
    } else {
      _this.state = projects_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(projects_assertThisInitialized(_this));
    return _this;
  }
  projects_createClass(Projects, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return projects_objectSpread(projects_objectSpread({}, preValue), {}, projects_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'projects', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "projectName",
        placeholder: "Project Name",
        value: this.state.projectName,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "projectSubDes",
        placeholder: "Project Sub Describe",
        value: this.state.projectSubDes,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "projectType",
        placeholder: "Project Type",
        value: this.state.projectType,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("textarea", {
        name: "discription",
        cols: "30",
        rows: "10",
        required: true,
        onChange: this.updateState,
        value: this.state.discription,
        placeholder: "Describe your project...."
      }));
    }
  }]);
  return Projects;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/education.jsx
function education_typeof(obj) { "@babel/helpers - typeof"; return education_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, education_typeof(obj); }
function education_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function education_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? education_ownKeys(Object(source), !0).forEach(function (key) { education_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : education_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function education_defineProperty(obj, key, value) { key = education_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function education_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function education_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, education_toPropertyKey(descriptor.key), descriptor); } }
function education_createClass(Constructor, protoProps, staticProps) { if (protoProps) education_defineProperties(Constructor.prototype, protoProps); if (staticProps) education_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function education_toPropertyKey(arg) { var key = education_toPrimitive(arg, "string"); return education_typeof(key) === "symbol" ? key : String(key); }
function education_toPrimitive(input, hint) { if (education_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (education_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function education_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) education_setPrototypeOf(subClass, superClass); }
function education_setPrototypeOf(o, p) { education_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return education_setPrototypeOf(o, p); }
function education_createSuper(Derived) { var hasNativeReflectConstruct = education_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = education_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = education_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return education_possibleConstructorReturn(this, result); }; }
function education_possibleConstructorReturn(self, call) { if (call && (education_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return education_assertThisInitialized(self); }
function education_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function education_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function education_getPrototypeOf(o) { education_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return education_getPrototypeOf(o); }

var Education = /*#__PURE__*/function (_Component) {
  education_inherits(Education, _Component);
  var _super = education_createSuper(Education);
  function Education(props) {
    var _this;
    education_classCallCheck(this, Education);
    _this = _super.call(this, props);
    if (_this.props.prevValues.course === undefined) {
      _this.state = {
        institudeName: '',
        course: '',
        startedDate: '',
        endingDate: '',
        discription: ''
      };
    } else {
      _this.state = education_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(education_assertThisInitialized(_this));
    return _this;
  }
  education_createClass(Education, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return education_objectSpread(education_objectSpread({}, preValue), {}, education_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'education', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "institudeName",
        placeholder: "Institude Name",
        value: this.state.institudeName,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "course",
        placeholder: "Course",
        value: this.state.course,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
        htmlFor: "startedTime"
      }, "Started Date"), /*#__PURE__*/react.createElement("input", {
        type: "month",
        name: "startedDate",
        id: "startedTime",
        value: this.state.startedDate,
        onChange: this.updateState,
        required: true
      })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
        htmlFor: "endingTime"
      }, "Ending Date"), /*#__PURE__*/react.createElement("input", {
        type: "month",
        name: "endingDate",
        id: "endedTime",
        value: this.state.endingDate,
        onChange: this.updateState,
        required: true
      })), /*#__PURE__*/react.createElement("textarea", {
        name: "discription",
        cols: "30",
        rows: "10",
        required: true,
        onChange: this.updateState,
        value: this.state.discription,
        placeholder: "Describe what you study......"
      }));
    }
  }]);
  return Education;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/frameWork.jsx
function frameWork_typeof(obj) { "@babel/helpers - typeof"; return frameWork_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, frameWork_typeof(obj); }
function frameWork_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function frameWork_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? frameWork_ownKeys(Object(source), !0).forEach(function (key) { frameWork_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : frameWork_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function frameWork_defineProperty(obj, key, value) { key = frameWork_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function frameWork_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function frameWork_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, frameWork_toPropertyKey(descriptor.key), descriptor); } }
function frameWork_createClass(Constructor, protoProps, staticProps) { if (protoProps) frameWork_defineProperties(Constructor.prototype, protoProps); if (staticProps) frameWork_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function frameWork_toPropertyKey(arg) { var key = frameWork_toPrimitive(arg, "string"); return frameWork_typeof(key) === "symbol" ? key : String(key); }
function frameWork_toPrimitive(input, hint) { if (frameWork_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (frameWork_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function frameWork_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) frameWork_setPrototypeOf(subClass, superClass); }
function frameWork_setPrototypeOf(o, p) { frameWork_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return frameWork_setPrototypeOf(o, p); }
function frameWork_createSuper(Derived) { var hasNativeReflectConstruct = frameWork_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = frameWork_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = frameWork_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return frameWork_possibleConstructorReturn(this, result); }; }
function frameWork_possibleConstructorReturn(self, call) { if (call && (frameWork_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return frameWork_assertThisInitialized(self); }
function frameWork_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function frameWork_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function frameWork_getPrototypeOf(o) { frameWork_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return frameWork_getPrototypeOf(o); }

var FrameWork = /*#__PURE__*/function (_Component) {
  frameWork_inherits(FrameWork, _Component);
  var _super = frameWork_createSuper(FrameWork);
  function FrameWork(props) {
    var _this;
    frameWork_classCallCheck(this, FrameWork);
    _this = _super.call(this, props);
    if (_this.props.prevValues.frameWork === undefined) {
      _this.state = {
        frameWork: ''
      };
    } else {
      _this.state = frameWork_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(frameWork_assertThisInitialized(_this));
    return _this;
  }
  frameWork_createClass(FrameWork, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return frameWork_objectSpread(frameWork_objectSpread({}, preValue), {}, frameWork_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'frameWork', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "frameWork",
        placeholder: "Framework",
        value: this.state.frameWork,
        onChange: this.updateState,
        required: true
      }));
    }
  }]);
  return FrameWork;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/languages.jsx
function languages_typeof(obj) { "@babel/helpers - typeof"; return languages_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, languages_typeof(obj); }
function languages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function languages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? languages_ownKeys(Object(source), !0).forEach(function (key) { languages_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : languages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function languages_defineProperty(obj, key, value) { key = languages_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function languages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function languages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, languages_toPropertyKey(descriptor.key), descriptor); } }
function languages_createClass(Constructor, protoProps, staticProps) { if (protoProps) languages_defineProperties(Constructor.prototype, protoProps); if (staticProps) languages_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function languages_toPropertyKey(arg) { var key = languages_toPrimitive(arg, "string"); return languages_typeof(key) === "symbol" ? key : String(key); }
function languages_toPrimitive(input, hint) { if (languages_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (languages_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function languages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) languages_setPrototypeOf(subClass, superClass); }
function languages_setPrototypeOf(o, p) { languages_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return languages_setPrototypeOf(o, p); }
function languages_createSuper(Derived) { var hasNativeReflectConstruct = languages_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = languages_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = languages_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return languages_possibleConstructorReturn(this, result); }; }
function languages_possibleConstructorReturn(self, call) { if (call && (languages_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return languages_assertThisInitialized(self); }
function languages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function languages_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function languages_getPrototypeOf(o) { languages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return languages_getPrototypeOf(o); }

var Languages = /*#__PURE__*/function (_Component) {
  languages_inherits(Languages, _Component);
  var _super = languages_createSuper(Languages);
  function Languages(props) {
    var _this;
    languages_classCallCheck(this, Languages);
    _this = _super.call(this, props);
    if (_this.props.prevValues.languages === undefined) {
      _this.state = {
        languages: ''
      };
    } else {
      _this.state = languages_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(languages_assertThisInitialized(_this));
    return _this;
  }
  languages_createClass(Languages, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return languages_objectSpread(languages_objectSpread({}, preValue), {}, languages_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'language', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        placeholder: "Language",
        name: "languages",
        required: true,
        onChange: this.updateState,
        value: this.state.languages
      }));
    }
  }]);
  return Languages;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/experience.jsx
function experience_typeof(obj) { "@babel/helpers - typeof"; return experience_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, experience_typeof(obj); }
function experience_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function experience_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? experience_ownKeys(Object(source), !0).forEach(function (key) { experience_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : experience_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function experience_defineProperty(obj, key, value) { key = experience_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function experience_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function experience_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, experience_toPropertyKey(descriptor.key), descriptor); } }
function experience_createClass(Constructor, protoProps, staticProps) { if (protoProps) experience_defineProperties(Constructor.prototype, protoProps); if (staticProps) experience_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function experience_toPropertyKey(arg) { var key = experience_toPrimitive(arg, "string"); return experience_typeof(key) === "symbol" ? key : String(key); }
function experience_toPrimitive(input, hint) { if (experience_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (experience_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function experience_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) experience_setPrototypeOf(subClass, superClass); }
function experience_setPrototypeOf(o, p) { experience_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return experience_setPrototypeOf(o, p); }
function experience_createSuper(Derived) { var hasNativeReflectConstruct = experience_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = experience_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = experience_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return experience_possibleConstructorReturn(this, result); }; }
function experience_possibleConstructorReturn(self, call) { if (call && (experience_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return experience_assertThisInitialized(self); }
function experience_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function experience_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function experience_getPrototypeOf(o) { experience_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return experience_getPrototypeOf(o); }

var Experience = /*#__PURE__*/function (_Component) {
  experience_inherits(Experience, _Component);
  var _super = experience_createSuper(Experience);
  function Experience(props) {
    var _this;
    experience_classCallCheck(this, Experience);
    _this = _super.call(this, props);
    if (_this.props.prevValues.startedDate === undefined) {
      _this.state = {
        startedDate: '',
        endingDate: '',
        discription: '',
        jobTitle: '',
        companyName: ''
      };
    } else {
      _this.state = experience_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(experience_assertThisInitialized(_this));
    return _this;
  }
  experience_createClass(Experience, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return experience_objectSpread(experience_objectSpread({}, preValue), {}, experience_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'experience', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "companyName",
        placeholder: "Company Name",
        value: this.state.companyName,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "jobTitle",
        placeholder: "Job Title",
        value: this.state.jobTitle,
        onChange: this.updateState,
        required: true
      }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
        htmlFor: "startedTime"
      }, "Started Date"), /*#__PURE__*/react.createElement("input", {
        type: "month",
        name: "startedDate",
        id: "startedTime",
        value: this.state.startedDate,
        onChange: this.updateState,
        required: true
      })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
        htmlFor: "endingTime"
      }, "Ending Date"), /*#__PURE__*/react.createElement("input", {
        type: "month",
        name: "endingDate",
        id: "endedTime",
        value: this.state.endingDate,
        onChange: this.updateState,
        required: true
      })), /*#__PURE__*/react.createElement("textarea", {
        name: "discription",
        cols: "30",
        rows: "10",
        required: true,
        onChange: this.updateState,
        value: this.state.discription,
        placeholder: "Describe what you did...."
      }));
    }
  }]);
  return Experience;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/typesOfFormValue/tools.jsx
function tools_typeof(obj) { "@babel/helpers - typeof"; return tools_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, tools_typeof(obj); }
function tools_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function tools_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? tools_ownKeys(Object(source), !0).forEach(function (key) { tools_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tools_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function tools_defineProperty(obj, key, value) { key = tools_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function tools_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function tools_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, tools_toPropertyKey(descriptor.key), descriptor); } }
function tools_createClass(Constructor, protoProps, staticProps) { if (protoProps) tools_defineProperties(Constructor.prototype, protoProps); if (staticProps) tools_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function tools_toPropertyKey(arg) { var key = tools_toPrimitive(arg, "string"); return tools_typeof(key) === "symbol" ? key : String(key); }
function tools_toPrimitive(input, hint) { if (tools_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (tools_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function tools_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) tools_setPrototypeOf(subClass, superClass); }
function tools_setPrototypeOf(o, p) { tools_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tools_setPrototypeOf(o, p); }
function tools_createSuper(Derived) { var hasNativeReflectConstruct = tools_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tools_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tools_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tools_possibleConstructorReturn(this, result); }; }
function tools_possibleConstructorReturn(self, call) { if (call && (tools_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return tools_assertThisInitialized(self); }
function tools_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function tools_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function tools_getPrototypeOf(o) { tools_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tools_getPrototypeOf(o); }

var Tools = /*#__PURE__*/function (_Component) {
  tools_inherits(Tools, _Component);
  var _super = tools_createSuper(Tools);
  function Tools(props) {
    var _this;
    tools_classCallCheck(this, Tools);
    _this = _super.call(this, props);
    if (_this.props.prevValues.tool === undefined) {
      _this.state = {
        tool: ''
      };
    } else {
      _this.state = tools_objectSpread({}, _this.props.prevValues);
    }
    _this.updateState = _this.updateState.bind(tools_assertThisInitialized(_this));
    return _this;
  }
  tools_createClass(Tools, [{
    key: "updateState",
    value: function updateState(event) {
      var _this2 = this;
      this.setState(function (preValue) {
        return tools_objectSpread(tools_objectSpread({}, preValue), {}, tools_defineProperty({}, event.target.name, event.target.value));
      }, function () {
        return _this2.props.formUpdate(_this2.state, 'tools', _this2.props.id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        name: "tool",
        placeholder: "Tool",
        value: this.state.tool,
        onChange: this.updateState,
        required: true
      }));
    }
  }]);
  return Tools;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/formFill.jsx
function formFill_typeof(obj) { "@babel/helpers - typeof"; return formFill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, formFill_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function formFill_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function formFill_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? formFill_ownKeys(Object(source), !0).forEach(function (key) { formFill_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : formFill_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function formFill_defineProperty(obj, key, value) { key = formFill_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formFill_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function formFill_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, formFill_toPropertyKey(descriptor.key), descriptor); } }
function formFill_createClass(Constructor, protoProps, staticProps) { if (protoProps) formFill_defineProperties(Constructor.prototype, protoProps); if (staticProps) formFill_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function formFill_toPropertyKey(arg) { var key = formFill_toPrimitive(arg, "string"); return formFill_typeof(key) === "symbol" ? key : String(key); }
function formFill_toPrimitive(input, hint) { if (formFill_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (formFill_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function formFill_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) formFill_setPrototypeOf(subClass, superClass); }
function formFill_setPrototypeOf(o, p) { formFill_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return formFill_setPrototypeOf(o, p); }
function formFill_createSuper(Derived) { var hasNativeReflectConstruct = formFill_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = formFill_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = formFill_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return formFill_possibleConstructorReturn(this, result); }; }
function formFill_possibleConstructorReturn(self, call) { if (call && (formFill_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return formFill_assertThisInitialized(self); }
function formFill_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function formFill_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function formFill_getPrototypeOf(o) { formFill_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return formFill_getPrototypeOf(o); }









var Form = /*#__PURE__*/function (_Component) {
  formFill_inherits(Form, _Component);
  var _super = formFill_createSuper(Form);
  function Form() {
    var _this;
    formFill_classCallCheck(this, Form);
    _this = _super.call(this);
    var data = JSON.parse(localStorage.getItem('data'));
    _this.state = formFill_objectSpread({}, data.data);
    _this.fieldAdding = _this.fieldAdding.bind(formFill_assertThisInitialized(_this));
    _this.addMore = _this.addMore.bind(formFill_assertThisInitialized(_this));
    _this.formSubmit = _this.formSubmit.bind(formFill_assertThisInitialized(_this));
    return _this;
  }
  formFill_createClass(Form, [{
    key: "fieldAdding",
    value: function fieldAdding(values, stateType, id) {
      var _this2 = this;
      this.setState(function (preValue) {
        return formFill_objectSpread(formFill_objectSpread({}, preValue), {}, formFill_defineProperty({}, stateType, [].concat(_toConsumableArray(preValue[stateType].slice(0, parseInt(id))), [values], _toConsumableArray(preValue[stateType].slice(parseInt(id + 1), -1)))));
      }, function () {
        return console.log(_this2.state);
      });
    }
  }, {
    key: "addMore",
    value: function addMore(type) {
      var _this3 = this;
      this.setState(function (preValue) {
        return formFill_objectSpread(formFill_objectSpread({}, preValue), {}, formFill_defineProperty({}, type, [].concat(_toConsumableArray(preValue[type]), [{}])));
      }, function () {
        return console.log(_this3.state);
      });
    }
  }, {
    key: "formSubmit",
    value: function formSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      this.props.formFilledCheck(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      return /*#__PURE__*/react.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react.createElement("form", {
        onSubmit: this.formSubmit
      }, /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("h1", null, "Personal"), /*#__PURE__*/react.createElement(Personal, {
        key: 0,
        id: 0,
        formUpdate: this.fieldAdding,
        prevValues: this.state.personal
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Education"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('education');
        },
        className: "addButton"
      }, "Add")), this.state.education.map(function (value, index) {
        return /*#__PURE__*/react.createElement(Education, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.education[index]
        });
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Projects"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('projects');
        },
        className: "addButton"
      }, "Add")), this.state.projects.map(function (value, index) {
        return /*#__PURE__*/react.createElement(Projects, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.projects[index]
        });
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Experience"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('experience');
        },
        className: "addButton"
      }, "Add")), this.state.experience.map(function (value, index) {
        return /*#__PURE__*/react.createElement(Experience, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.experience[index]
        });
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Framework/Library"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('frameWork');
        },
        className: "addButton"
      }, "Add")), this.state.frameWork.map(function (value, index) {
        return /*#__PURE__*/react.createElement(FrameWork, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.frameWork[index]
        });
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Languages"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('language');
        },
        className: "addButton"
      }, "Add")), this.state.language.map(function (value, index) {
        return /*#__PURE__*/react.createElement(Languages, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.language[index]
        });
      })), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/react.createElement("h1", null, "Tools"), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this4.addMore('tools');
        },
        className: "addButton"
      }, "Add")), this.state.tools.map(function (value, index) {
        return /*#__PURE__*/react.createElement(Tools, {
          key: index,
          id: index,
          formUpdate: _this4.fieldAdding,
          prevValues: _this4.state.tools[index]
        });
      })), /*#__PURE__*/react.createElement("button", null, "Submit")));
    }
  }]);
  return Form;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isDate/index.js
function isDate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isDate_typeof = function _typeof(obj) { return typeof obj; }; } else { isDate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isDate_typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || isDate_typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js
function toDate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toDate_typeof = function _typeof(obj) { return typeof obj; }; } else { toDate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toDate_typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || toDate_typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters_formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return lightFormatters.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const format_formatters = (formatters_formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const _lib_formatDistance = (formatDistance);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const _lib_formatRelative = (formatRelative);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const _lib_localize = (localize);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = format_formatters[firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/constants/index.js
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/parseISO/index.js



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isAfter/index.js


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}
;// CONCATENATED MODULE: ./src/components/cv.jsx
function cv_typeof(obj) { "@babel/helpers - typeof"; return cv_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, cv_typeof(obj); }
function cv_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function cv_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, cv_toPropertyKey(descriptor.key), descriptor); } }
function cv_createClass(Constructor, protoProps, staticProps) { if (protoProps) cv_defineProperties(Constructor.prototype, protoProps); if (staticProps) cv_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function cv_toPropertyKey(arg) { var key = cv_toPrimitive(arg, "string"); return cv_typeof(key) === "symbol" ? key : String(key); }
function cv_toPrimitive(input, hint) { if (cv_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (cv_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function cv_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) cv_setPrototypeOf(subClass, superClass); }
function cv_setPrototypeOf(o, p) { cv_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return cv_setPrototypeOf(o, p); }
function cv_createSuper(Derived) { var hasNativeReflectConstruct = cv_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = cv_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = cv_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return cv_possibleConstructorReturn(this, result); }; }
function cv_possibleConstructorReturn(self, call) { if (call && (cv_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return cv_assertThisInitialized(self); }
function cv_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function cv_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function cv_getPrototypeOf(o) { cv_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return cv_getPrototypeOf(o); }



var CV = /*#__PURE__*/function (_Component) {
  cv_inherits(CV, _Component);
  var _super = cv_createSuper(CV);
  function CV() {
    var _this;
    cv_classCallCheck(this, CV);
    _this = _super.call(this);
    _this.state = {
      hide: false
    };
    return _this;
  }
  cv_createClass(CV, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var info = JSON.parse(localStorage.getItem('data'));
      var phoneNo = '';
      for (var i = 0; i < info.data.personal[0].phoneNo.length; i++) {
        if (i === 3 || i === 7) {
          phoneNo += '-';
        }
        phoneNo += info.data.personal[0].phoneNo.charAt(i);
      }
      return /*#__PURE__*/react.createElement("div", {
        id: "cv",
        className: "container"
      }, /*#__PURE__*/react.createElement("div", {
        id: "personal"
      }, /*#__PURE__*/react.createElement("h1", {
        className: "name"
      }, info.data.personal[0].name), /*#__PURE__*/react.createElement("h2", {
        className: "developerType"
      }, info.data.personal[0].developerType)), /*#__PURE__*/react.createElement("div", {
        className: "Socials flex"
      }, /*#__PURE__*/react.createElement("div", {
        className: "phoneNo flex"
      }, /*#__PURE__*/react.createElement("h3", null, "Phone :"), /*#__PURE__*/react.createElement("h3", {
        className: "value"
      }, info.data.personal[0].countryCode, " ", phoneNo)), /*#__PURE__*/react.createElement("div", {
        className: "email flex"
      }, /*#__PURE__*/react.createElement("h3", null, "Email :"), /*#__PURE__*/react.createElement("h3", {
        className: "value"
      }, info.data.personal[0].email)), /*#__PURE__*/react.createElement("div", {
        className: "github flex"
      }, /*#__PURE__*/react.createElement("h3", null, "Github :"), /*#__PURE__*/react.createElement("h3", {
        className: "value"
      }, info.data.personal[0].github))), /*#__PURE__*/react.createElement("div", {
        className: "personalDescription"
      }, /*#__PURE__*/react.createElement("p", null, info.data.personal[0].discription)), /*#__PURE__*/react.createElement("div", {
        className: "Skills grid"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Languages"
      }, /*#__PURE__*/react.createElement("h2", null, "Languages"), /*#__PURE__*/react.createElement("div", {
        className: "coloum"
      }, /*#__PURE__*/react.createElement("ul", null, info.data.language.map(function (val, index) {
        return /*#__PURE__*/react.createElement("li", {
          key: index
        }, val.languages);
      })))), /*#__PURE__*/react.createElement("div", {
        className: "frameWork"
      }, /*#__PURE__*/react.createElement("h2", null, "FrameWork/Library"), /*#__PURE__*/react.createElement("div", {
        className: "coloum"
      }, /*#__PURE__*/react.createElement("ul", null, info.data.frameWork.map(function (val, index) {
        return /*#__PURE__*/react.createElement("li", {
          key: index
        }, val.frameWork);
      })))), /*#__PURE__*/react.createElement("div", {
        className: "tools"
      }, /*#__PURE__*/react.createElement("h2", null, "Tools"), /*#__PURE__*/react.createElement("ul", null, info.data.tools.map(function (val, index) {
        return /*#__PURE__*/react.createElement("li", {
          key: index
        }, val.tool);
      })))), /*#__PURE__*/react.createElement("div", {
        className: "projects"
      }, /*#__PURE__*/react.createElement("h2", {
        className: "title"
      }, "Projects"), info.data.projects.map(function (val, index) {
        return /*#__PURE__*/react.createElement("div", {
          key: index,
          className: "project cvContent"
        }, /*#__PURE__*/react.createElement("div", {
          className: "header"
        }, /*#__PURE__*/react.createElement("div", {
          className: "flex"
        }, /*#__PURE__*/react.createElement("h3", {
          className: "projectName"
        }, val.projectName, ","), /*#__PURE__*/react.createElement("p", null, val.projectSubDes))), /*#__PURE__*/react.createElement("h4", {
          className: "projectType"
        }, val.projectType), /*#__PURE__*/react.createElement("p", {
          className: "discription"
        }, val.discription));
      })), /*#__PURE__*/react.createElement("div", {
        className: "educations"
      }, /*#__PURE__*/react.createElement("h2", {
        className: "title"
      }, "Education"), info.data.education.map(function (val, index) {
        return /*#__PURE__*/react.createElement("div", {
          key: index,
          className: "education cvContent"
        }, /*#__PURE__*/react.createElement("div", {
          className: "header"
        }, /*#__PURE__*/react.createElement("div", {
          className: "flex"
        }, /*#__PURE__*/react.createElement("h3", {
          className: "institudeName"
        }, val.institudeName, ","), /*#__PURE__*/react.createElement("p", null, val.course))), /*#__PURE__*/react.createElement("div", {
          className: "date"
        }, /*#__PURE__*/react.createElement("div", {
          className: "date flex"
        }, /*#__PURE__*/react.createElement("h3", {
          className: "startDate"
        }, format(parseISO(val.startedDate), 'MMM yyyy'), " -"), /*#__PURE__*/react.createElement("h3", {
          className: "endingDate"
        }, " ", isAfter(parseISO(val.endingDate), new Date(1987, 1, 11)) ? 'Current' : format(parseISO(val.endingDate), 'MMMMMMM-yyyy')))), /*#__PURE__*/react.createElement("p", {
          className: "discription"
        }, val.discription));
      })), /*#__PURE__*/react.createElement("div", {
        className: "experiences"
      }, /*#__PURE__*/react.createElement("h2", {
        className: "title"
      }, "Experience"), info.data.experience.map(function (val, index) {
        return /*#__PURE__*/react.createElement("div", {
          key: index,
          className: "experience cvContent"
        }, /*#__PURE__*/react.createElement("div", {
          className: "header"
        }, /*#__PURE__*/react.createElement("div", {
          className: "flex"
        }, /*#__PURE__*/react.createElement("h3", {
          className: "jobName"
        }, val.jobTitle, ","), /*#__PURE__*/react.createElement("p", null, val.companyName))), /*#__PURE__*/react.createElement("div", {
          className: "date flex"
        }, /*#__PURE__*/react.createElement("h3", {
          className: "startDate"
        }, format(parseISO(val.startedDate), 'MMM yyyy')), /*#__PURE__*/react.createElement("h3", {
          className: "endingDate"
        }, " - ", isAfter(parseISO(val.endingDate), new Date(1987, 1, 11)) ? 'Current' : format(parseISO(val.endingDate), 'MMMMMMM-yyyy'))), /*#__PURE__*/react.createElement("p", {
          className: "discription"
        }, val.discription));
      })), /*#__PURE__*/react.createElement("div", {
        className: "edit flex"
      }, /*#__PURE__*/react.createElement("button", {
        onClick: function onClick() {
          localStorage.setItem('formFill', JSON.stringify({
            formFilled: false
          }));
          _this2.props.edit();
        }
      }, "Edit"), /*#__PURE__*/react.createElement("button", {
        onClick: function onClick() {
          localStorage.setItem('data', JSON.stringify({
            data: {
              personal: [],
              education: [],
              projects: [],
              frameWork: [],
              language: [],
              experience: [],
              tools: []
            }
          }));
          localStorage.setItem('formFill', JSON.stringify({
            formFilled: false
          }));
        }
      }, "New")));
    }
  }]);
  return CV;
}(react.Component);

;// CONCATENATED MODULE: ./src/components/App.jsx
function App_typeof(obj) { "@babel/helpers - typeof"; return App_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, App_typeof(obj); }
function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? App_ownKeys(Object(source), !0).forEach(function (key) { App_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function App_defineProperty(obj, key, value) { key = App_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, App_toPropertyKey(descriptor.key), descriptor); } }
function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function App_toPropertyKey(arg) { var key = App_toPrimitive(arg, "string"); return App_typeof(key) === "symbol" ? key : String(key); }
function App_toPrimitive(input, hint) { if (App_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (App_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) App_setPrototypeOf(subClass, superClass); }
function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }
function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = App_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = App_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return App_possibleConstructorReturn(this, result); }; }
function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return App_assertThisInitialized(self); }
function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }



var App = /*#__PURE__*/function (_Component) {
  App_inherits(App, _Component);
  var _super = App_createSuper(App);
  function App() {
    var _this;
    App_classCallCheck(this, App);
    _this = _super.call(this);
    _this.state = {
      formFilled: JSON.parse(localStorage.getItem('formFill')).formFilled,
      data: {}
    };
    _this.formFilledCheck = _this.formFilledCheck.bind(App_assertThisInitialized(_this));
    _this.edit = _this.edit.bind(App_assertThisInitialized(_this));
    return _this;
  }
  App_createClass(App, [{
    key: "formFilledCheck",
    value: function formFilledCheck(data) {
      var _this2 = this;
      this.setState({
        formFilled: true,
        data: data
      }, function () {
        localStorage.setItem('data', JSON.stringify(_this2.state));
        localStorage.setItem('formFill', JSON.stringify({
          formFilled: true
        }));
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      this.setState(function (preValue) {
        return App_objectSpread({
          formFilled: false
        }, preValue);
      }, window.location.reload());
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", null, !this.state.formFilled ? /*#__PURE__*/react.createElement(Form, {
        data: this.state.data,
        formFilledCheck: this.formFilledCheck
      }) : /*#__PURE__*/react.createElement(CV, {
        edit: this.edit
      }));
    }
  }]);
  return App;
}(react.Component);

;// CONCATENATED MODULE: ./src/index.js



if (localStorage.getItem('data') === null) {
  localStorage.setItem('data', JSON.stringify({
    data: {
      personal: [],
      education: [],
      projects: [],
      frameWork: [],
      language: [],
      experience: [],
      tools: []
    }
  }));
  localStorage.setItem('formFill', JSON.stringify({
    formFilled: false
  }));
}
client.createRoot(document.getElementById('root')).render( /*#__PURE__*/react.createElement(App, null));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZUFBZTtBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQSxzREFBZSxVQUFVOztBQ25GNEM7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBVTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsaUJBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsaUJBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtB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QUFJLENBQUN3QyxTQUFTLENBQUM7SUFFNUNDLFVBQVUsRUFBRTtFQUVoQixDQUFDLENBQUMsQ0FBQztBQUVQO0FBRUFNLGlCQUFtQixDQUFDRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDcEYsTUFBTSxlQUV2RHZDLG1CQUFBLENBQUNvSCxHQUFHLE9BQUcsQ0FFVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdi8uL3NyYy9jb21wb25lbnRzL3R5cGVzT2ZGb3JtVmFsdWUvcGVyc29uYWwuanN4Iiwid2VicGFjazovL2N2Ly4vc3JjL2NvbXBvbmVudHMvdHlwZXNPZkZvcm1WYWx1ZS9wcm9qZWN0cy5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy90eXBlc09mRm9ybVZhbHVlL2VkdWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy90eXBlc09mRm9ybVZhbHVlL2ZyYW1lV29yay5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy90eXBlc09mRm9ybVZhbHVlL2xhbmd1YWdlcy5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy90eXBlc09mRm9ybVZhbHVlL2V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovL2N2Ly4vc3JjL2NvbXBvbmVudHMvdHlwZXNPZkZvcm1WYWx1ZS90b29scy5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy9mb3JtRmlsbC5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL2N2Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jdi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy9jdi5qc3giLCJ3ZWJwYWNrOi8vY3YvLi9zcmMvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovL2N2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLGNhPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gcChhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn12YXIgZGE9bmV3IFNldCxlYT17fTtmdW5jdGlvbiBmYShhLGIpe2hhKGEsYik7aGEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGhhKGEsYil7ZWFbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWRhLmFkZChiW2FdKX1cbnZhciBpYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksamE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxrYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8sbGE9XG57fSxtYT17fTtmdW5jdGlvbiBvYShhKXtpZihqYS5jYWxsKG1hLGEpKXJldHVybiEwO2lmKGphLmNhbGwobGEsYSkpcmV0dXJuITE7aWYoa2EudGVzdChhKSlyZXR1cm4gbWFbYV09ITA7bGFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gcGEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBxYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxwYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIHYoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciB6PXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO3pbYl09bmV3IHYoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgcmE9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBzYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYSxcbnNhKTt6W2JdPW5ldyB2KGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbnoueGxpbmtIcmVmPW5ldyB2KFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHRhKGEsYixjLGQpe3ZhciBlPXouaGFzT3duUHJvcGVydHkoYik/eltiXTpudWxsO2lmKG51bGwhPT1lPzAhPT1lLnR5cGU6ZHx8ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdKXFhKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9vYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSl9XG52YXIgdWE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsdmE9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksd2E9U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSx5YT1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksemE9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLEFhPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSxCYT1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksQ2E9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksRGE9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLEVhPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxGYT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxHYT1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxIYT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtTeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik7U3ltYm9sLmZvcihcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7XG52YXIgSWE9U3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QuY2FjaGVcIik7U3ltYm9sLmZvcihcInJlYWN0LnRyYWNpbmdfbWFya2VyXCIpO3ZhciBKYT1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gS2EoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUphJiZhW0phXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBBPU9iamVjdC5hc3NpZ24sTGE7ZnVuY3Rpb24gTWEoYSl7aWYodm9pZCAwPT09TGEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TGE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK0xhK2F9dmFyIE5hPSExO1xuZnVuY3Rpb24gT2EoYSxiKXtpZighYXx8TmEpcmV0dXJuXCJcIjtOYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2gobCl7dmFyIGQ9bH1SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGwpe2Q9bH1hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGwpe2Q9bH1hKCl9fWNhdGNoKGwpe2lmKGwmJmQmJlwic3RyaW5nXCI9PT10eXBlb2YgbC5zdGFjayl7Zm9yKHZhciBlPWwuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSl7dmFyIGs9XCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTthLmRpc3BsYXlOYW1lJiZrLmluY2x1ZGVzKFwiPGFub255bW91cz5cIikmJihrPWsucmVwbGFjZShcIjxhbm9ueW1vdXM+XCIsYS5kaXNwbGF5TmFtZSkpO3JldHVybiBrfXdoaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtOYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP01hKGEpOlwiXCJ9XG5mdW5jdGlvbiBQYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTWEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBNYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTWEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBNYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9T2EoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9T2EoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9T2EoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBRYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHlhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHdhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSBBYTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB6YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEVhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIEZhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIENhOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIEJhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIERhOnZhciBiPWEucmVuZGVyO2E9YS5kaXNwbGF5TmFtZTthfHwoYT1iLmRpc3BsYXlOYW1lfHxcbmIubmFtZXx8XCJcIixhPVwiXCIhPT1hP1wiRm9yd2FyZFJlZihcIithK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtyZXR1cm4gYTtjYXNlIEdhOnJldHVybiBiPWEuZGlzcGxheU5hbWV8fG51bGwsbnVsbCE9PWI/YjpRYShhLnR5cGUpfHxcIk1lbW9cIjtjYXNlIEhhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBRYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gUmEoYSl7dmFyIGI9YS50eXBlO3N3aXRjaChhLnRhZyl7Y2FzZSAyNDpyZXR1cm5cIkNhY2hlXCI7Y2FzZSA5OnJldHVybihiLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIDEwOnJldHVybihiLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIDE4OnJldHVyblwiRGVoeWRyYXRlZEZyYWdtZW50XCI7Y2FzZSAxMTpyZXR1cm4gYT1iLnJlbmRlcixhPWEuZGlzcGxheU5hbWV8fGEubmFtZXx8XCJcIixiLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWE/XCJGb3J3YXJkUmVmKFwiK2ErXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgNzpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSA1OnJldHVybiBiO2Nhc2UgNDpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgMzpyZXR1cm5cIlJvb3RcIjtjYXNlIDY6cmV0dXJuXCJUZXh0XCI7Y2FzZSAxNjpyZXR1cm4gUWEoYik7Y2FzZSA4OnJldHVybiBiPT09emE/XCJTdHJpY3RNb2RlXCI6XCJNb2RlXCI7Y2FzZSAyMjpyZXR1cm5cIk9mZnNjcmVlblwiO1xuY2FzZSAxMjpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSAyMTpyZXR1cm5cIlNjb3BlXCI7Y2FzZSAxMzpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSAxOTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwiO2Nhc2UgMjU6cmV0dXJuXCJUcmFjaW5nTWFya2VyXCI7Y2FzZSAxOmNhc2UgMDpjYXNlIDE3OmNhc2UgMjpjYXNlIDE0OmNhc2UgMTU6aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGIuZGlzcGxheU5hbWV8fGIubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGIpcmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBBKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIGFiKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdGEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGJiKGEsYil7YWIoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9jYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZjYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGRiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgZWI9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHAoOTEpKTtyZXR1cm4gQSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcihwKDkyKSk7aWYoZWIoYykpe2lmKDE8Yy5sZW5ndGgpdGhyb3cgRXJyb3IocCg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9ZnVuY3Rpb24ga2IoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1cbmZ1bmN0aW9uIGxiKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9rYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBtYixuYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIT09YS5uYW1lc3BhY2VVUkl8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXttYj1tYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTttYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1tYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBvYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHBiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxhc3BlY3RSYXRpbzohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsXG56b29tOiEwLGZpbGxPcGFjaXR5OiEwLGZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHFiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhwYikuZm9yRWFjaChmdW5jdGlvbihhKXtxYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3BiW2JdPXBiW2FdfSl9KTtmdW5jdGlvbiByYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cGIuaGFzT3duUHJvcGVydHkoYSkmJnBiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHNiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXJiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHRiPUEoe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB1YihhLGIpe2lmKGIpe2lmKHRiW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IocCg2MCkpO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTHx8IShcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IocCg2MikpO319XG5mdW5jdGlvbiB2YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19dmFyIHdiPW51bGw7ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcihwKDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYigpe312YXIgSWI9ITE7ZnVuY3Rpb24gSmIoYSxiLGMpe2lmKEliKXJldHVybiBhKGIsYyk7SWI9ITA7dHJ5e3JldHVybiBHYihhLGIsYyl9ZmluYWxseXtpZihJYj0hMSxudWxsIT09emJ8fG51bGwhPT1BYilIYigpLEZiKCl9fVxuZnVuY3Rpb24gS2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcihwKDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIExiPSExO2lmKGlhKXRyeXt2YXIgTWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KE1iLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtMYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixNYixNYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsTWIsTWIpfWNhdGNoKGEpe0xiPSExfWZ1bmN0aW9uIE5iKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChtKXt0aGlzLm9uRXJyb3IobSl9fXZhciBPYj0hMSxQYj1udWxsLFFiPSExLFJiPW51bGwsU2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7T2I9ITA7UGI9YX19O2Z1bmN0aW9uIFRiKGEsYixjLGQsZSxmLGcsaCxrKXtPYj0hMTtQYj1udWxsO05iLmFwcGx5KFNiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBVYihhLGIsYyxkLGUsZixnLGgsayl7VGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKE9iKXtpZihPYil7dmFyIGw9UGI7T2I9ITE7UGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHAoMTk4KSk7UWJ8fChRYj0hMCxSYj1sKX19ZnVuY3Rpb24gVmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjQwOTgpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiBXYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIFhiKGEpe2lmKFZiKGEpIT09YSl0aHJvdyBFcnJvcihwKDE4OCkpO31cbmZ1bmN0aW9uIFliKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVZiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHAoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIFhiKGUpLGE7aWYoZj09PWQpcmV0dXJuIFhiKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IocCgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcihwKDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHAoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gWmIoYSl7YT1ZYihhKTtyZXR1cm4gbnVsbCE9PWE/JGIoYSk6bnVsbH1mdW5jdGlvbiAkYihhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYTtmb3IoYT1hLmNoaWxkO251bGwhPT1hOyl7dmFyIGI9JGIoYSk7aWYobnVsbCE9PWIpcmV0dXJuIGI7YT1hLnNpYmxpbmd9cmV0dXJuIG51bGx9XG52YXIgYWM9Y2EudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxiYz1jYS51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxjYz1jYS51bnN0YWJsZV9zaG91bGRZaWVsZCxkYz1jYS51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsQj1jYS51bnN0YWJsZV9ub3csZWM9Y2EudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsZmM9Y2EudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksZ2M9Y2EudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksaGM9Y2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksaWM9Y2EudW5zdGFibGVfTG93UHJpb3JpdHksamM9Y2EudW5zdGFibGVfSWRsZVByaW9yaXR5LGtjPW51bGwsbGM9bnVsbDtmdW5jdGlvbiBtYyhhKXtpZihsYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGxjLm9uQ29tbWl0RmliZXJSb290KXRyeXtsYy5vbkNvbW1pdEZpYmVyUm9vdChrYyxhLHZvaWQgMCwxMjg9PT0oYS5jdXJyZW50LmZsYWdzJjEyOCkpfWNhdGNoKGIpe319XG52YXIgb2M9TWF0aC5jbHozMj9NYXRoLmNsejMyOm5jLHBjPU1hdGgubG9nLHFjPU1hdGguTE4yO2Z1bmN0aW9uIG5jKGEpe2E+Pj49MDtyZXR1cm4gMD09PWE/MzI6MzEtKHBjKGEpL3FjfDApfDB9dmFyIHJjPTY0LHNjPTQxOTQzMDQ7XG5mdW5jdGlvbiB0YyhhKXtzd2l0Y2goYSYtYSl7Y2FzZSAxOnJldHVybiAxO2Nhc2UgMjpyZXR1cm4gMjtjYXNlIDQ6cmV0dXJuIDQ7Y2FzZSA4OnJldHVybiA4O2Nhc2UgMTY6cmV0dXJuIDE2O2Nhc2UgMzI6cmV0dXJuIDMyO2Nhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGEmNDE5NDI0MDtjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OnJldHVybiBhJjEzMDAyMzQyNDtjYXNlIDEzNDIxNzcyODpyZXR1cm4gMTM0MjE3NzI4O2Nhc2UgMjY4NDM1NDU2OnJldHVybiAyNjg0MzU0NTY7Y2FzZSA1MzY4NzA5MTI6cmV0dXJuIDUzNjg3MDkxMjtjYXNlIDEwNzM3NDE4MjQ6cmV0dXJuIDEwNzM3NDE4MjQ7XG5kZWZhdWx0OnJldHVybiBhfX1mdW5jdGlvbiB1YyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiAwO3ZhciBkPTAsZT1hLnN1c3BlbmRlZExhbmVzLGY9YS5waW5nZWRMYW5lcyxnPWMmMjY4NDM1NDU1O2lmKDAhPT1nKXt2YXIgaD1nJn5lOzAhPT1oP2Q9dGMoaCk6KGYmPWcsMCE9PWYmJihkPXRjKGYpKSl9ZWxzZSBnPWMmfmUsMCE9PWc/ZD10YyhnKTowIT09ZiYmKGQ9dGMoZikpO2lmKDA9PT1kKXJldHVybiAwO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmUpJiYoZT1kJi1kLGY9YiYtYixlPj1mfHwxNj09PWUmJjAhPT0oZiY0MTk0MjQwKSkpcmV0dXJuIGI7MCE9PShkJjQpJiYoZHw9YyYxNik7Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1vYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIHZjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSA0OnJldHVybiBiKzI1MDtjYXNlIDg6Y2FzZSAxNjpjYXNlIDMyOmNhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGIrNUUzO2Nhc2UgNDE5NDMwNDpjYXNlIDgzODg2MDg6Y2FzZSAxNjc3NzIxNjpjYXNlIDMzNTU0NDMyOmNhc2UgNjcxMDg4NjQ6cmV0dXJuLTE7Y2FzZSAxMzQyMTc3Mjg6Y2FzZSAyNjg0MzU0NTY6Y2FzZSA1MzY4NzA5MTI6Y2FzZSAxMDczNzQxODI0OnJldHVybi0xO2RlZmF1bHQ6cmV0dXJuLTF9fVxuZnVuY3Rpb24gd2MoYSxiKXtmb3IodmFyIGM9YS5zdXNwZW5kZWRMYW5lcyxkPWEucGluZ2VkTGFuZXMsZT1hLmV4cGlyYXRpb25UaW1lcyxmPWEucGVuZGluZ0xhbmVzOzA8Zjspe3ZhciBnPTMxLW9jKGYpLGg9MTw8ZyxrPWVbZ107aWYoLTE9PT1rKXtpZigwPT09KGgmYyl8fDAhPT0oaCZkKSllW2ddPXZjKGgsYil9ZWxzZSBrPD1iJiYoYS5leHBpcmVkTGFuZXN8PWgpO2YmPX5ofX1mdW5jdGlvbiB4YyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24geWMoKXt2YXIgYT1yYztyYzw8PTE7MD09PShyYyY0MTk0MjQwKSYmKHJjPTY0KTtyZXR1cm4gYX1mdW5jdGlvbiB6YyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIEFjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjs1MzY4NzA5MTIhPT1iJiYoYS5zdXNwZW5kZWRMYW5lcz0wLGEucGluZ2VkTGFuZXM9MCk7YT1hLmV2ZW50VGltZXM7Yj0zMS1vYyhiKTthW2JdPWN9ZnVuY3Rpb24gQmMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcyZ+YjthLnBlbmRpbmdMYW5lcz1iO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWI7YS5tdXRhYmxlUmVhZExhbmVzJj1iO2EuZW50YW5nbGVkTGFuZXMmPWI7Yj1hLmVudGFuZ2xlbWVudHM7dmFyIGQ9YS5ldmVudFRpbWVzO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yzspe3ZhciBlPTMxLW9jKGMpLGY9MTw8ZTtiW2VdPTA7ZFtlXT0tMTthW2VdPS0xO2MmPX5mfX1cbmZ1bmN0aW9uIENjKGEsYil7dmFyIGM9YS5lbnRhbmdsZWRMYW5lc3w9Yjtmb3IoYT1hLmVudGFuZ2xlbWVudHM7Yzspe3ZhciBkPTMxLW9jKGMpLGU9MTw8ZDtlJmJ8YVtkXSZiJiYoYVtkXXw9Yik7YyY9fmV9fXZhciBDPTA7ZnVuY3Rpb24gRGMoYSl7YSY9LWE7cmV0dXJuIDE8YT80PGE/MCE9PShhJjI2ODQzNTQ1NSk/MTY6NTM2ODcwOTEyOjQ6MX12YXIgRWMsRmMsR2MsSGMsSWMsSmM9ITEsS2M9W10sTGM9bnVsbCxNYz1udWxsLE5jPW51bGwsT2M9bmV3IE1hcCxQYz1uZXcgTWFwLFFjPVtdLFJjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIFNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6TGM9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOk1jPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOk5jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpPYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpQYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIFRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9e2Jsb2NrZWRPbjpiLGRvbUV2ZW50TmFtZTpjLGV2ZW50U3lzdGVtRmxhZ3M6ZCxuYXRpdmVFdmVudDpmLHRhcmdldENvbnRhaW5lcnM6W2VdfSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJkZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIFVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIExjPVRjKExjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBNYz1UYyhNYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gTmM9VGMoTmMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtPYy5zZXQoZixUYyhPYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsUGMuc2V0KGYsVGMoUGMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gVmMoYSl7dmFyIGI9V2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1WYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj1XYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtJYyhhLnByaW9yaXR5LGZ1bmN0aW9uKCl7R2MoYyl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24gWGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPVljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGw9PT1jKXtjPWEubmF0aXZlRXZlbnQ7dmFyIGQ9bmV3IGMuY29uc3RydWN0b3IoYy50eXBlLGMpO3diPWQ7Yy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKTt3Yj1udWxsfWVsc2UgcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJkZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIFpjKGEsYixjKXtYYyhhKSYmYy5kZWxldGUoYil9ZnVuY3Rpb24gJGMoKXtKYz0hMTtudWxsIT09TGMmJlhjKExjKSYmKExjPW51bGwpO251bGwhPT1NYyYmWGMoTWMpJiYoTWM9bnVsbCk7bnVsbCE9PU5jJiZYYyhOYykmJihOYz1udWxsKTtPYy5mb3JFYWNoKFpjKTtQYy5mb3JFYWNoKFpjKX1cbmZ1bmN0aW9uIGFkKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxKY3x8KEpjPSEwLGNhLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soY2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksJGMpKSl9XG5mdW5jdGlvbiBiZChhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBhZChiLGEpfWlmKDA8S2MubGVuZ3RoKXthZChLY1swXSxhKTtmb3IodmFyIGM9MTtjPEtjLmxlbmd0aDtjKyspe3ZhciBkPUtjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09TGMmJmFkKExjLGEpO251bGwhPT1NYyYmYWQoTWMsYSk7bnVsbCE9PU5jJiZhZChOYyxhKTtPYy5mb3JFYWNoKGIpO1BjLmZvckVhY2goYik7Zm9yKGM9MDtjPFFjLmxlbmd0aDtjKyspZD1RY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8UWMubGVuZ3RoJiYoYz1RY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOylWYyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJlFjLnNoaWZ0KCl9dmFyIGNkPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLGRkPSEwO1xuZnVuY3Rpb24gZWQoYSxiLGMsZCl7dmFyIGU9QyxmPWNkLnRyYW5zaXRpb247Y2QudHJhbnNpdGlvbj1udWxsO3RyeXtDPTEsZmQoYSxiLGMsZCl9ZmluYWxseXtDPWUsY2QudHJhbnNpdGlvbj1mfX1mdW5jdGlvbiBnZChhLGIsYyxkKXt2YXIgZT1DLGY9Y2QudHJhbnNpdGlvbjtjZC50cmFuc2l0aW9uPW51bGw7dHJ5e0M9NCxmZChhLGIsYyxkKX1maW5hbGx5e0M9ZSxjZC50cmFuc2l0aW9uPWZ9fVxuZnVuY3Rpb24gZmQoYSxiLGMsZCl7aWYoZGQpe3ZhciBlPVljKGEsYixjLGQpO2lmKG51bGw9PT1lKWhkKGEsYixkLGlkLGMpLFNjKGEsZCk7ZWxzZSBpZihVYyhlLGEsYixjLGQpKWQuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihTYyhhLGQpLGImNCYmLTE8UmMuaW5kZXhPZihhKSl7Zm9yKDtudWxsIT09ZTspe3ZhciBmPUNiKGUpO251bGwhPT1mJiZFYyhmKTtmPVljKGEsYixjLGQpO251bGw9PT1mJiZoZChhLGIsZCxpZCxjKTtpZihmPT09ZSlicmVhaztlPWZ9bnVsbCE9PWUmJmQuc3RvcFByb3BhZ2F0aW9uKCl9ZWxzZSBoZChhLGIsZCxudWxsLGMpfX12YXIgaWQ9bnVsbDtcbmZ1bmN0aW9uIFljKGEsYixjLGQpe2lkPW51bGw7YT14YihkKTthPVdjKGEpO2lmKG51bGwhPT1hKWlmKGI9VmIoYSksbnVsbD09PWIpYT1udWxsO2Vsc2UgaWYoYz1iLnRhZywxMz09PWMpe2E9V2IoYik7aWYobnVsbCE9PWEpcmV0dXJuIGE7YT1udWxsfWVsc2UgaWYoMz09PWMpe2lmKGIuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpcmV0dXJuIDM9PT1iLnRhZz9iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7YT1udWxsfWVsc2UgYiE9PWEmJihhPW51bGwpO2lkPWE7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBqZChhKXtzd2l0Y2goYSl7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbGlja1wiOmNhc2UgXCJjbG9zZVwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwiaW52YWxpZFwiOmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcImtleXVwXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcInBhc3RlXCI6Y2FzZSBcInBhdXNlXCI6Y2FzZSBcInBsYXlcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVydXBcIjpjYXNlIFwicmF0ZWNoYW5nZVwiOmNhc2UgXCJyZXNldFwiOmNhc2UgXCJyZXNpemVcIjpjYXNlIFwic2Vla2VkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6Y2FzZSBcInZvbHVtZWNoYW5nZVwiOmNhc2UgXCJjaGFuZ2VcIjpjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6Y2FzZSBcInRleHRJbnB1dFwiOmNhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6Y2FzZSBcImJlZm9yZWlucHV0XCI6Y2FzZSBcImJsdXJcIjpjYXNlIFwiZnVsbHNjcmVlbmNoYW5nZVwiOmNhc2UgXCJmb2N1c1wiOmNhc2UgXCJoYXNoY2hhbmdlXCI6Y2FzZSBcInBvcHN0YXRlXCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJzZWxlY3RzdGFydFwiOnJldHVybiAxO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInNjcm9sbFwiOmNhc2UgXCJ0b2dnbGVcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcIndoZWVsXCI6Y2FzZSBcIm1vdXNlZW50ZXJcIjpjYXNlIFwibW91c2VsZWF2ZVwiOmNhc2UgXCJwb2ludGVyZW50ZXJcIjpjYXNlIFwicG9pbnRlcmxlYXZlXCI6cmV0dXJuIDQ7XG5jYXNlIFwibWVzc2FnZVwiOnN3aXRjaChlYygpKXtjYXNlIGZjOnJldHVybiAxO2Nhc2UgZ2M6cmV0dXJuIDQ7Y2FzZSBoYzpjYXNlIGljOnJldHVybiAxNjtjYXNlIGpjOnJldHVybiA1MzY4NzA5MTI7ZGVmYXVsdDpyZXR1cm4gMTZ9ZGVmYXVsdDpyZXR1cm4gMTZ9fXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtmdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9XG5mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfUEoYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPUEoe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1BKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1BKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1BKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9QSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPUEoe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9QSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPUEoe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9QSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9QSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPUEoe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPUEoe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWlhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2lhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1pYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWlhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGlhKXt2YXIgeGU7aWYoaWEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTtKYihyZSxiKX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZTtcbmZ1bmN0aW9uIEllKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO2lmKCFqYS5jYWxsKGIsZSl8fCFIZShhW2VdLGJbZV0pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIEplKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIEtlKGEsYil7dmFyIGM9SmUoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9SmUoYyl9fWZ1bmN0aW9uIExlKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TGUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTWUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gTmUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbmZ1bmN0aW9uIE9lKGEpe3ZhciBiPU1lKCksYz1hLmZvY3VzZWRFbGVtLGQ9YS5zZWxlY3Rpb25SYW5nZTtpZihiIT09YyYmYyYmYy5vd25lckRvY3VtZW50JiZMZShjLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGMpKXtpZihudWxsIT09ZCYmTmUoYykpaWYoYj1kLnN0YXJ0LGE9ZC5lbmQsdm9pZCAwPT09YSYmKGE9YiksXCJzZWxlY3Rpb25TdGFydFwiaW4gYyljLnNlbGVjdGlvblN0YXJ0PWIsYy5zZWxlY3Rpb25FbmQ9TWF0aC5taW4oYSxjLnZhbHVlLmxlbmd0aCk7ZWxzZSBpZihhPShiPWMub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3csYS5nZXRTZWxlY3Rpb24pe2E9YS5nZXRTZWxlY3Rpb24oKTt2YXIgZT1jLnRleHRDb250ZW50Lmxlbmd0aCxmPU1hdGgubWluKGQuc3RhcnQsZSk7ZD12b2lkIDA9PT1kLmVuZD9mOk1hdGgubWluKGQuZW5kLGUpOyFhLmV4dGVuZCYmZj5kJiYoZT1kLGQ9ZixmPWUpO2U9S2UoYyxmKTt2YXIgZz1LZShjLFxuZCk7ZSYmZyYmKDEhPT1hLnJhbmdlQ291bnR8fGEuYW5jaG9yTm9kZSE9PWUubm9kZXx8YS5hbmNob3JPZmZzZXQhPT1lLm9mZnNldHx8YS5mb2N1c05vZGUhPT1nLm5vZGV8fGEuZm9jdXNPZmZzZXQhPT1nLm9mZnNldCkmJihiPWIuY3JlYXRlUmFuZ2UoKSxiLnNldFN0YXJ0KGUubm9kZSxlLm9mZnNldCksYS5yZW1vdmVBbGxSYW5nZXMoKSxmPmQ/KGEuYWRkUmFuZ2UoYiksYS5leHRlbmQoZy5ub2RlLGcub2Zmc2V0KSk6KGIuc2V0RW5kKGcubm9kZSxnLm9mZnNldCksYS5hZGRSYW5nZShiKSkpfWI9W107Zm9yKGE9YzthPWEucGFyZW50Tm9kZTspMT09PWEubm9kZVR5cGUmJmIucHVzaCh7ZWxlbWVudDphLGxlZnQ6YS5zY3JvbGxMZWZ0LHRvcDphLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmZvY3VzJiZjLmZvY3VzKCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKylhPWJbY10sYS5lbGVtZW50LnNjcm9sbExlZnQ9YS5sZWZ0LGEuZWxlbWVudC5zY3JvbGxUb3A9YS50b3B9fVxudmFyIFBlPWlhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZOZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZJZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5mdW5jdGlvbiBWZShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBXZT17YW5pbWF0aW9uZW5kOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6VmUoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6VmUoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxYZT17fSxZZT17fTtcbmlhJiYoWWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgV2UuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgV2UudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBaZShhKXtpZihYZVthXSlyZXR1cm4gWGVbYV07aWYoIVdlW2FdKXJldHVybiBhO3ZhciBiPVdlW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFllKXJldHVybiBYZVthXT1iW2NdO3JldHVybiBhfXZhciAkZT1aZShcImFuaW1hdGlvbmVuZFwiKSxhZj1aZShcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxiZj1aZShcImFuaW1hdGlvbnN0YXJ0XCIpLGNmPVplKFwidHJhbnNpdGlvbmVuZFwiKSxkZj1uZXcgTWFwLGVmPVwiYWJvcnQgYXV4Q2xpY2sgY2FuY2VsIGNhblBsYXkgY2FuUGxheVRocm91Z2ggY2xpY2sgY2xvc2UgY29udGV4dE1lbnUgY29weSBjdXQgZHJhZyBkcmFnRW5kIGRyYWdFbnRlciBkcmFnRXhpdCBkcmFnTGVhdmUgZHJhZ092ZXIgZHJhZ1N0YXJ0IGRyb3AgZHVyYXRpb25DaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgZ290UG9pbnRlckNhcHR1cmUgaW5wdXQgaW52YWxpZCBrZXlEb3duIGtleVByZXNzIGtleVVwIGxvYWQgbG9hZGVkRGF0YSBsb2FkZWRNZXRhZGF0YSBsb2FkU3RhcnQgbG9zdFBvaW50ZXJDYXB0dXJlIG1vdXNlRG93biBtb3VzZU1vdmUgbW91c2VPdXQgbW91c2VPdmVyIG1vdXNlVXAgcGFzdGUgcGF1c2UgcGxheSBwbGF5aW5nIHBvaW50ZXJDYW5jZWwgcG9pbnRlckRvd24gcG9pbnRlck1vdmUgcG9pbnRlck91dCBwb2ludGVyT3ZlciBwb2ludGVyVXAgcHJvZ3Jlc3MgcmF0ZUNoYW5nZSByZXNldCByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdWJtaXQgc3VzcGVuZCB0aW1lVXBkYXRlIHRvdWNoQ2FuY2VsIHRvdWNoRW5kIHRvdWNoU3RhcnQgdm9sdW1lQ2hhbmdlIHNjcm9sbCB0b2dnbGUgdG91Y2hNb3ZlIHdhaXRpbmcgd2hlZWxcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiBmZihhLGIpe2RmLnNldChhLGIpO2ZhKGIsW2FdKX1mb3IodmFyIGdmPTA7Z2Y8ZWYubGVuZ3RoO2dmKyspe3ZhciBoZj1lZltnZl0samY9aGYudG9Mb3dlckNhc2UoKSxrZj1oZlswXS50b1VwcGVyQ2FzZSgpK2hmLnNsaWNlKDEpO2ZmKGpmLFwib25cIitrZil9ZmYoJGUsXCJvbkFuaW1hdGlvbkVuZFwiKTtmZihhZixcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIpO2ZmKGJmLFwib25BbmltYXRpb25TdGFydFwiKTtmZihcImRibGNsaWNrXCIsXCJvbkRvdWJsZUNsaWNrXCIpO2ZmKFwiZm9jdXNpblwiLFwib25Gb2N1c1wiKTtmZihcImZvY3Vzb3V0XCIsXCJvbkJsdXJcIik7ZmYoY2YsXCJvblRyYW5zaXRpb25FbmRcIik7aGEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtoYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2hhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7XG5oYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2ZhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtmYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2ZhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZmEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZmEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZmEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIGxmPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksbWY9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQobGYpKTtcbmZ1bmN0aW9uIG5mKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1ViKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO25mKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7bmYoZSxoLGwpO2Y9a319fWlmKFFiKXRocm93IGE9UmIsUWI9ITEsUmI9bnVsbCxhO31cbmZ1bmN0aW9uIEQoYSxiKXt2YXIgYz1iW29mXTt2b2lkIDA9PT1jJiYoYz1iW29mXT1uZXcgU2V0KTt2YXIgZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KHBmKGIsYSwyLCExKSxjLmFkZChkKSl9ZnVuY3Rpb24gcWYoYSxiLGMpe3ZhciBkPTA7YiYmKGR8PTQpO3BmKGMsYSxkLGIpfXZhciByZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIHNmKGEpe2lmKCFhW3JmXSl7YVtyZl09ITA7ZGEuZm9yRWFjaChmdW5jdGlvbihiKXtcInNlbGVjdGlvbmNoYW5nZVwiIT09YiYmKG1mLmhhcyhiKXx8cWYoYiwhMSxhKSxxZihiLCEwLGEpKX0pO3ZhciBiPTk9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O251bGw9PT1ifHxiW3JmXXx8KGJbcmZdPSEwLHFmKFwic2VsZWN0aW9uY2hhbmdlXCIsITEsYikpfX1cbmZ1bmN0aW9uIHBmKGEsYixjLGQpe3N3aXRjaChqZChiKSl7Y2FzZSAxOnZhciBlPWVkO2JyZWFrO2Nhc2UgNDplPWdkO2JyZWFrO2RlZmF1bHQ6ZT1mZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshTGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz1XYyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59SmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPWRmLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCxuPWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOm49XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6bj1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgJGU6Y2FzZSBhZjpjYXNlIGJmOms9SGQ7YnJlYWs7Y2FzZSBjZjprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB0PTAhPT0oYiY0KSxKPSF0JiZcInNjcm9sbFwiPT09YSx4PXQ/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dD1bXTtmb3IodmFyIHc9ZCx1O251bGwhPT1cbnc7KXt1PXc7dmFyIEY9dS5zdGF0ZU5vZGU7NT09PXUudGFnJiZudWxsIT09RiYmKHU9RixudWxsIT09eCYmKEY9S2Iodyx4KSxudWxsIT1GJiZ0LnB1c2godGYodyxGLHUpKSkpO2lmKEopYnJlYWs7dz13LnJldHVybn0wPHQubGVuZ3RoJiYoaD1uZXcgayhoLG4sbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6dH0pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJmMhPT13YiYmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKFdjKG4pfHxuW3VmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQsbj1uP1djKG4pOm51bGwsbnVsbCE9PVxubiYmKEo9VmIobiksbiE9PUp8fDUhPT1uLnRhZyYmNiE9PW4udGFnKSluPW51bGx9ZWxzZSBrPW51bGwsbj1kO2lmKGshPT1uKXt0PUJkO0Y9XCJvbk1vdXNlTGVhdmVcIjt4PVwib25Nb3VzZUVudGVyXCI7dz1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXQ9VGQsRj1cIm9uUG9pbnRlckxlYXZlXCIseD1cIm9uUG9pbnRlckVudGVyXCIsdz1cInBvaW50ZXJcIjtKPW51bGw9PWs/aDp1ZShrKTt1PW51bGw9PW4/aDp1ZShuKTtoPW5ldyB0KEYsdytcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PUo7aC5yZWxhdGVkVGFyZ2V0PXU7Rj1udWxsO1djKGUpPT09ZCYmKHQ9bmV3IHQoeCx3K1wiZW50ZXJcIixuLGMsZSksdC50YXJnZXQ9dSx0LnJlbGF0ZWRUYXJnZXQ9SixGPXQpO0o9RjtpZihrJiZuKWI6e3Q9azt4PW47dz0wO2Zvcih1PXQ7dTt1PXZmKHUpKXcrKzt1PTA7Zm9yKEY9eDtGO0Y9dmYoRikpdSsrO2Zvcig7MDx3LXU7KXQ9dmYodCksdy0tO2Zvcig7MDx1LXc7KXg9XG52Zih4KSx1LS07Zm9yKDt3LS07KXtpZih0PT09eHx8bnVsbCE9PXgmJnQ9PT14LmFsdGVybmF0ZSlicmVhayBiO3Q9dmYodCk7eD12Zih4KX10PW51bGx9ZWxzZSB0PW51bGw7bnVsbCE9PWsmJndmKGcsaCxrLHQsITEpO251bGwhPT1uJiZudWxsIT09SiYmd2YoZyxKLG4sdCwhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgbmE9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSluYT1GZTtlbHNle25hPURlO3ZhciB4YT1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKG5hPUVlKTtpZihuYSYmKG5hPW5hKGEsZCkpKXtuZShnLG5hLGMsZSk7YnJlYWsgYX14YSYmeGEoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJih4YT1oLl93cmFwcGVyU3RhdGUpJiZcbnhhLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmNiKGgsXCJudW1iZXJcIixoLnZhbHVlKX14YT1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZSh4YSl8fFwidHJ1ZVwiPT09eGEuY29udGVudEVkaXRhYmxlKVFlPXhhLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgJGE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIGJhPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpiYT1cIm9uQ29tcG9zaXRpb25FbmRcIjtcbmJyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6YmE9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1iYT12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoYmE9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoYmE9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7YmEmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PWJhP1wib25Db21wb3NpdGlvbkVuZFwiPT09YmEmJmllJiYoJGE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSx4YT1vZShkLGJhKSwwPHhhLmxlbmd0aCYmKGJhPW5ldyBMZChiYSxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmJhLGxpc3RlbmVyczp4YX0pLCRhP2JhLmRhdGE9JGE6KCRhPWhlKGMpLG51bGwhPT0kYSYmKGJhLmRhdGE9JGEpKSkpO2lmKCRhPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLFxuMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPSRhKX1zZShnLGIpfSl9ZnVuY3Rpb24gdGYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPUtiKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KHRmKGEsZixlKSksZj1LYihhLGIpLG51bGwhPWYmJmQucHVzaCh0ZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIHZmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiB3ZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPUtiKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KHRmKGMsayxoKSkpOmV8fChrPUtiKGMsZiksbnVsbCE9ayYmZy5wdXNoKHRmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9dmFyIHhmPS9cXHJcXG4/L2cseWY9L1xcdTAwMDB8XFx1RkZGRC9nO2Z1bmN0aW9uIHpmKGEpe3JldHVybihcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpcIlwiK2EpLnJlcGxhY2UoeGYsXCJcXG5cIikucmVwbGFjZSh5ZixcIlwiKX1mdW5jdGlvbiBBZihhLGIsYyl7Yj16ZihiKTtpZih6ZihhKSE9PWImJmMpdGhyb3cgRXJyb3IocCg0MjUpKTt9ZnVuY3Rpb24gQmYoKXt9XG52YXIgQ2Y9bnVsbCxEZj1udWxsO2Z1bmN0aW9uIEVmKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfVxudmFyIEZmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLEdmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxIZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOnZvaWQgMCxKZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcXVldWVNaWNyb3Rhc2s/cXVldWVNaWNyb3Rhc2s6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBIZj9mdW5jdGlvbihhKXtyZXR1cm4gSGYucmVzb2x2ZShudWxsKS50aGVuKGEpLmNhdGNoKElmKX06RmY7ZnVuY3Rpb24gSWYoYSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSl9XG5mdW5jdGlvbiBLZihhLGIpe3ZhciBjPWIsZD0wO2Rve3ZhciBlPWMubmV4dFNpYmxpbmc7YS5yZW1vdmVDaGlsZChjKTtpZihlJiY4PT09ZS5ub2RlVHlwZSlpZihjPWUuZGF0YSxcIi8kXCI9PT1jKXtpZigwPT09ZCl7YS5yZW1vdmVDaGlsZChlKTtiZChiKTtyZXR1cm59ZC0tfWVsc2VcIiRcIiE9PWMmJlwiJD9cIiE9PWMmJlwiJCFcIiE9PWN8fGQrKztjPWV9d2hpbGUoYyk7YmQoYil9ZnVuY3Rpb24gTGYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWs7aWYoOD09PWIpe2I9YS5kYXRhO2lmKFwiJFwiPT09Ynx8XCIkIVwiPT09Ynx8XCIkP1wiPT09YilicmVhaztpZihcIi8kXCI9PT1iKXJldHVybiBudWxsfX1yZXR1cm4gYX1cbmZ1bmN0aW9uIE1mKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciBOZj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxPZj1cIl9fcmVhY3RGaWJlciRcIitOZixQZj1cIl9fcmVhY3RQcm9wcyRcIitOZix1Zj1cIl9fcmVhY3RDb250YWluZXIkXCIrTmYsb2Y9XCJfX3JlYWN0RXZlbnRzJFwiK05mLFFmPVwiX19yZWFjdExpc3RlbmVycyRcIitOZixSZj1cIl9fcmVhY3RIYW5kbGVzJFwiK05mO1xuZnVuY3Rpb24gV2MoYSl7dmFyIGI9YVtPZl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbdWZdfHxjW09mXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPU1mKGEpO251bGwhPT1hOyl7aWYoYz1hW09mXSlyZXR1cm4gYzthPU1mKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbT2ZdfHxhW3VmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHAoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbUGZdfHxudWxsfXZhciBTZj1bXSxUZj0tMTtmdW5jdGlvbiBVZihhKXtyZXR1cm57Y3VycmVudDphfX1cbmZ1bmN0aW9uIEUoYSl7MD5UZnx8KGEuY3VycmVudD1TZltUZl0sU2ZbVGZdPW51bGwsVGYtLSl9ZnVuY3Rpb24gRyhhLGIpe1RmKys7U2ZbVGZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgVmY9e30sSD1VZihWZiksV2Y9VWYoITEpLFhmPVZmO2Z1bmN0aW9uIFlmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gVmY7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBaZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uICRmKCl7RShXZik7RShIKX1mdW5jdGlvbiBhZyhhLGIsYyl7aWYoSC5jdXJyZW50IT09VmYpdGhyb3cgRXJyb3IocCgxNjgpKTtHKEgsYik7RyhXZixjKX1mdW5jdGlvbiBiZyhhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7Yj1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGIpKXRocm93IEVycm9yKHAoMTA4LFJhKGEpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIEEoe30sYyxkKX1cbmZ1bmN0aW9uIGNnKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxWZjtYZj1ILmN1cnJlbnQ7RyhILGEpO0coV2YsV2YuY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gZGcoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHAoMTY5KSk7Yz8oYT1iZyhhLGIsWGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxFKFdmKSxFKEgpLEcoSCxhKSk6RShXZik7RyhXZixjKX12YXIgZWc9bnVsbCxmZz0hMSxnZz0hMTtmdW5jdGlvbiBoZyhhKXtudWxsPT09ZWc/ZWc9W2FdOmVnLnB1c2goYSl9ZnVuY3Rpb24gaWcoYSl7Zmc9ITA7aGcoYSl9XG5mdW5jdGlvbiBqZygpe2lmKCFnZyYmbnVsbCE9PWVnKXtnZz0hMDt2YXIgYT0wLGI9Qzt0cnl7dmFyIGM9ZWc7Zm9yKEM9MTthPGMubGVuZ3RoO2ErKyl7dmFyIGQ9Y1thXTtkbyBkPWQoITApO3doaWxlKG51bGwhPT1kKX1lZz1udWxsO2ZnPSExfWNhdGNoKGUpe3Rocm93IG51bGwhPT1lZyYmKGVnPWVnLnNsaWNlKGErMSkpLGFjKGZjLGpnKSxlO31maW5hbGx5e0M9YixnZz0hMX19cmV0dXJuIG51bGx9dmFyIGtnPVtdLGxnPTAsbWc9bnVsbCxuZz0wLG9nPVtdLHBnPTAscWc9bnVsbCxyZz0xLHNnPVwiXCI7ZnVuY3Rpb24gdGcoYSxiKXtrZ1tsZysrXT1uZztrZ1tsZysrXT1tZzttZz1hO25nPWJ9XG5mdW5jdGlvbiB1ZyhhLGIsYyl7b2dbcGcrK109cmc7b2dbcGcrK109c2c7b2dbcGcrK109cWc7cWc9YTt2YXIgZD1yZzthPXNnO3ZhciBlPTMyLW9jKGQpLTE7ZCY9figxPDxlKTtjKz0xO3ZhciBmPTMyLW9jKGIpK2U7aWYoMzA8Zil7dmFyIGc9ZS1lJTU7Zj0oZCYoMTw8ZyktMSkudG9TdHJpbmcoMzIpO2Q+Pj1nO2UtPWc7cmc9MTw8MzItb2MoYikrZXxjPDxlfGQ7c2c9ZithfWVsc2Ugcmc9MTw8ZnxjPDxlfGQsc2c9YX1mdW5jdGlvbiB2ZyhhKXtudWxsIT09YS5yZXR1cm4mJih0ZyhhLDEpLHVnKGEsMSwwKSl9ZnVuY3Rpb24gd2coYSl7Zm9yKDthPT09bWc7KW1nPWtnWy0tbGddLGtnW2xnXT1udWxsLG5nPWtnWy0tbGddLGtnW2xnXT1udWxsO2Zvcig7YT09PXFnOylxZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxzZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxyZz1vZ1stLXBnXSxvZ1twZ109bnVsbH12YXIgeGc9bnVsbCx5Zz1udWxsLEk9ITEsemc9bnVsbDtcbmZ1bmN0aW9uIEFnKGEsYil7dmFyIGM9QmcoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yj1hLmRlbGV0aW9ucztudWxsPT09Yj8oYS5kZWxldGlvbnM9W2NdLGEuZmxhZ3N8PTE2KTpiLnB1c2goYyl9XG5mdW5jdGlvbiBDZyhhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPUxmKGIuZmlyc3RDaGlsZCksITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPW51bGwsITApOiExO2Nhc2UgMTM6cmV0dXJuIGI9OCE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhjPW51bGwhPT1xZz97aWQ6cmcsb3ZlcmZsb3c6c2d9Om51bGwsYS5tZW1vaXplZFN0YXRlPXtkZWh5ZHJhdGVkOmIsdHJlZUNvbnRleHQ6YyxyZXRyeUxhbmU6MTA3Mzc0MTgyNH0sYz1CZygxOCxudWxsLG51bGwsMCksYy5zdGF0ZU5vZGU9YixjLnJldHVybj1hLGEuY2hpbGQ9Yyx4Zz1hLHlnPVxubnVsbCwhMCk6ITE7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gRGcoYSl7cmV0dXJuIDAhPT0oYS5tb2RlJjEpJiYwPT09KGEuZmxhZ3MmMTI4KX1mdW5jdGlvbiBFZyhhKXtpZihJKXt2YXIgYj15ZztpZihiKXt2YXIgYz1iO2lmKCFDZyhhLGIpKXtpZihEZyhhKSl0aHJvdyBFcnJvcihwKDQxOCkpO2I9TGYoYy5uZXh0U2libGluZyk7dmFyIGQ9eGc7YiYmQ2coYSxiKT9BZyhkLGMpOihhLmZsYWdzPWEuZmxhZ3MmLTQwOTd8MixJPSExLHhnPWEpfX1lbHNle2lmKERnKGEpKXRocm93IEVycm9yKHAoNDE4KSk7YS5mbGFncz1hLmZsYWdzJi00MDk3fDI7ST0hMTt4Zz1hfX19ZnVuY3Rpb24gRmcoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO3hnPWF9XG5mdW5jdGlvbiBHZyhhKXtpZihhIT09eGcpcmV0dXJuITE7aWYoIUkpcmV0dXJuIEZnKGEpLEk9ITAsITE7dmFyIGI7KGI9MyE9PWEudGFnKSYmIShiPTUhPT1hLnRhZykmJihiPWEudHlwZSxiPVwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhRWYoYS50eXBlLGEubWVtb2l6ZWRQcm9wcykpO2lmKGImJihiPXlnKSl7aWYoRGcoYSkpdGhyb3cgSGcoKSxFcnJvcihwKDQxOCkpO2Zvcig7YjspQWcoYSxiKSxiPUxmKGIubmV4dFNpYmxpbmcpfUZnKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IocCgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7eWc9TGYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ315Zz1cbm51bGx9fWVsc2UgeWc9eGc/TGYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gSGcoKXtmb3IodmFyIGE9eWc7YTspYT1MZihhLm5leHRTaWJsaW5nKX1mdW5jdGlvbiBJZygpe3lnPXhnPW51bGw7ST0hMX1mdW5jdGlvbiBKZyhhKXtudWxsPT09emc/emc9W2FdOnpnLnB1c2goYSl9dmFyIEtnPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO2Z1bmN0aW9uIExnKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9QSh7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pO3JldHVybiBifXJldHVybiBifXZhciBNZz1VZihudWxsKSxOZz1udWxsLE9nPW51bGwsUGc9bnVsbDtmdW5jdGlvbiBRZygpe1BnPU9nPU5nPW51bGx9ZnVuY3Rpb24gUmcoYSl7dmFyIGI9TWcuY3VycmVudDtFKE1nKTthLl9jdXJyZW50VmFsdWU9Yn1cbmZ1bmN0aW9uIFNnKGEsYixjKXtmb3IoO251bGwhPT1hOyl7dmFyIGQ9YS5hbHRlcm5hdGU7KGEuY2hpbGRMYW5lcyZiKSE9PWI/KGEuY2hpbGRMYW5lc3w9YixudWxsIT09ZCYmKGQuY2hpbGRMYW5lc3w9YikpOm51bGwhPT1kJiYoZC5jaGlsZExhbmVzJmIpIT09YiYmKGQuY2hpbGRMYW5lc3w9Yik7aWYoYT09PWMpYnJlYWs7YT1hLnJldHVybn19ZnVuY3Rpb24gVGcoYSxiKXtOZz1hO1BnPU9nPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoMCE9PShhLmxhbmVzJmIpJiYoVWc9ITApLGEuZmlyc3RDb250ZXh0PW51bGwpfVxuZnVuY3Rpb24gVmcoYSl7dmFyIGI9YS5fY3VycmVudFZhbHVlO2lmKFBnIT09YSlpZihhPXtjb250ZXh0OmEsbWVtb2l6ZWRWYWx1ZTpiLG5leHQ6bnVsbH0sbnVsbD09PU9nKXtpZihudWxsPT09TmcpdGhyb3cgRXJyb3IocCgzMDgpKTtPZz1hO05nLmRlcGVuZGVuY2llcz17bGFuZXM6MCxmaXJzdENvbnRleHQ6YX19ZWxzZSBPZz1PZy5uZXh0PWE7cmV0dXJuIGJ9dmFyIFdnPW51bGw7ZnVuY3Rpb24gWGcoYSl7bnVsbD09PVdnP1dnPVthXTpXZy5wdXNoKGEpfWZ1bmN0aW9uIFlnKGEsYixjLGQpe3ZhciBlPWIuaW50ZXJsZWF2ZWQ7bnVsbD09PWU/KGMubmV4dD1jLFhnKGIpKTooYy5uZXh0PWUubmV4dCxlLm5leHQ9Yyk7Yi5pbnRlcmxlYXZlZD1jO3JldHVybiBaZyhhLGQpfVxuZnVuY3Rpb24gWmcoYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfXZhciAkZz0hMTtmdW5jdGlvbiBhaChhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGwsaW50ZXJsZWF2ZWQ6bnVsbCxsYW5lczowfSxlZmZlY3RzOm51bGx9fVxuZnVuY3Rpb24gYmgoYSxiKXthPWEudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT09PWEmJihiLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmEuZmlyc3RCYXNlVXBkYXRlLGxhc3RCYXNlVXBkYXRlOmEubGFzdEJhc2VVcGRhdGUsc2hhcmVkOmEuc2hhcmVkLGVmZmVjdHM6YS5lZmZlY3RzfSl9ZnVuY3Rpb24gY2goYSxiKXtyZXR1cm57ZXZlbnRUaW1lOmEsbGFuZTpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbH19XG5mdW5jdGlvbiBkaChhLGIsYyl7dmFyIGQ9YS51cGRhdGVRdWV1ZTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtkPWQuc2hhcmVkO2lmKDAhPT0oSyYyKSl7dmFyIGU9ZC5wZW5kaW5nO251bGw9PT1lP2IubmV4dD1iOihiLm5leHQ9ZS5uZXh0LGUubmV4dD1iKTtkLnBlbmRpbmc9YjtyZXR1cm4gWmcoYSxjKX1lPWQuaW50ZXJsZWF2ZWQ7bnVsbD09PWU/KGIubmV4dD1iLFhnKGQpKTooYi5uZXh0PWUubmV4dCxlLm5leHQ9Yik7ZC5pbnRlcmxlYXZlZD1iO3JldHVybiBaZyhhLGMpfWZ1bmN0aW9uIGVoKGEsYixjKXtiPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWImJihiPWIuc2hhcmVkLDAhPT0oYyY0MTk0MjQwKSkpe3ZhciBkPWIubGFuZXM7ZCY9YS5wZW5kaW5nTGFuZXM7Y3w9ZDtiLmxhbmVzPWM7Q2MoYSxjKX19XG5mdW5jdGlvbiBmaChhLGIpe3ZhciBjPWEudXBkYXRlUXVldWUsZD1hLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmKGQ9ZC51cGRhdGVRdWV1ZSxjPT09ZCkpe3ZhciBlPW51bGwsZj1udWxsO2M9Yy5maXJzdEJhc2VVcGRhdGU7aWYobnVsbCE9PWMpe2Rve3ZhciBnPXtldmVudFRpbWU6Yy5ldmVudFRpbWUsbGFuZTpjLmxhbmUsdGFnOmMudGFnLHBheWxvYWQ6Yy5wYXlsb2FkLGNhbGxiYWNrOmMuY2FsbGJhY2ssbmV4dDpudWxsfTtudWxsPT09Zj9lPWY9ZzpmPWYubmV4dD1nO2M9Yy5uZXh0fXdoaWxlKG51bGwhPT1jKTtudWxsPT09Zj9lPWY9YjpmPWYubmV4dD1ifWVsc2UgZT1mPWI7Yz17YmFzZVN0YXRlOmQuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTplLGxhc3RCYXNlVXBkYXRlOmYsc2hhcmVkOmQuc2hhcmVkLGVmZmVjdHM6ZC5lZmZlY3RzfTthLnVwZGF0ZVF1ZXVlPWM7cmV0dXJufWE9Yy5sYXN0QmFzZVVwZGF0ZTtudWxsPT09YT9jLmZpcnN0QmFzZVVwZGF0ZT1iOmEubmV4dD1cbmI7Yy5sYXN0QmFzZVVwZGF0ZT1ifVxuZnVuY3Rpb24gZ2goYSxiLGMsZCl7dmFyIGU9YS51cGRhdGVRdWV1ZTskZz0hMTt2YXIgZj1lLmZpcnN0QmFzZVVwZGF0ZSxnPWUubGFzdEJhc2VVcGRhdGUsaD1lLnNoYXJlZC5wZW5kaW5nO2lmKG51bGwhPT1oKXtlLnNoYXJlZC5wZW5kaW5nPW51bGw7dmFyIGs9aCxsPWsubmV4dDtrLm5leHQ9bnVsbDtudWxsPT09Zz9mPWw6Zy5uZXh0PWw7Zz1rO3ZhciBtPWEuYWx0ZXJuYXRlO251bGwhPT1tJiYobT1tLnVwZGF0ZVF1ZXVlLGg9bS5sYXN0QmFzZVVwZGF0ZSxoIT09ZyYmKG51bGw9PT1oP20uZmlyc3RCYXNlVXBkYXRlPWw6aC5uZXh0PWwsbS5sYXN0QmFzZVVwZGF0ZT1rKSl9aWYobnVsbCE9PWYpe3ZhciBxPWUuYmFzZVN0YXRlO2c9MDttPWw9az1udWxsO2g9Zjtkb3t2YXIgcj1oLmxhbmUseT1oLmV2ZW50VGltZTtpZigoZCZyKT09PXIpe251bGwhPT1tJiYobT1tLm5leHQ9e2V2ZW50VGltZTp5LGxhbmU6MCx0YWc6aC50YWcscGF5bG9hZDpoLnBheWxvYWQsY2FsbGJhY2s6aC5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBuPWEsdD1oO3I9Yjt5PWM7c3dpdGNoKHQudGFnKXtjYXNlIDE6bj10LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIG4pe3E9bi5jYWxsKHkscSxyKTticmVhayBhfXE9bjticmVhayBhO2Nhc2UgMzpuLmZsYWdzPW4uZmxhZ3MmLTY1NTM3fDEyODtjYXNlIDA6bj10LnBheWxvYWQ7cj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbj9uLmNhbGwoeSxxLHIpOm47aWYobnVsbD09PXJ8fHZvaWQgMD09PXIpYnJlYWsgYTtxPUEoe30scSxyKTticmVhayBhO2Nhc2UgMjokZz0hMH19bnVsbCE9PWguY2FsbGJhY2smJjAhPT1oLmxhbmUmJihhLmZsYWdzfD02NCxyPWUuZWZmZWN0cyxudWxsPT09cj9lLmVmZmVjdHM9W2hdOnIucHVzaChoKSl9ZWxzZSB5PXtldmVudFRpbWU6eSxsYW5lOnIsdGFnOmgudGFnLHBheWxvYWQ6aC5wYXlsb2FkLGNhbGxiYWNrOmguY2FsbGJhY2ssbmV4dDpudWxsfSxudWxsPT09bT8obD1tPXksaz1xKTptPW0ubmV4dD15LGd8PXI7XG5oPWgubmV4dDtpZihudWxsPT09aClpZihoPWUuc2hhcmVkLnBlbmRpbmcsbnVsbD09PWgpYnJlYWs7ZWxzZSByPWgsaD1yLm5leHQsci5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1yLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09bSYmKGs9cSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bTtiPWUuc2hhcmVkLmludGVybGVhdmVkO2lmKG51bGwhPT1iKXtlPWI7ZG8gZ3w9ZS5sYW5lLGU9ZS5uZXh0O3doaWxlKGUhPT1iKX1lbHNlIG51bGw9PT1mJiYoZS5zaGFyZWQubGFuZXM9MCk7aGh8PWc7YS5sYW5lcz1nO2EubWVtb2l6ZWRTdGF0ZT1xfX1cbmZ1bmN0aW9uIGloKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcihwKDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIGpoPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO2Z1bmN0aW9uIGtoKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjpBKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7MD09PWEubGFuZXMmJihhLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1jKX1cbnZhciBuaD17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxzKT9WYihhKT09PWE6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1MKCksZT1saChhKSxmPWNoKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO2I9ZGgoYSxmLGUpO251bGwhPT1iJiYobWgoYixhLGUsZCksZWgoYixhLGUpKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1MKCksZT1saChhKSxmPWNoKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7Yj1kaChhLGYsZSk7bnVsbCE9PWImJihtaChiLGEsZSxkKSxlaChiLGEsZSkpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBjPUwoKSxkPVxubGgoYSksZT1jaChjLGQpO2UudGFnPTI7dm9pZCAwIT09YiYmbnVsbCE9PWImJihlLmNhbGxiYWNrPWIpO2I9ZGgoYSxlLGQpO251bGwhPT1iJiYobWgoYixhLGQsYyksZWgoYixhLGQpKX19O2Z1bmN0aW9uIG9oKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IUllKGMsZCl8fCFJZShlLGYpOiEwfVxuZnVuY3Rpb24gcGgoYSxiLGMpe3ZhciBkPSExLGU9VmY7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9VmcoZik6KGU9WmYoYik/WGY6SC5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/WWYoYSxlKTpWZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPW5oO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbHM9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gcWgoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJm5oLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gcmgoYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1qaDthaChhKTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PVZnKGYpOihmPVpmKGIpP1hmOkguY3VycmVudCxlLmNvbnRleHQ9WWYoYSxmKSk7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKGtoKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fChiPWUuc3RhdGUsXG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJm5oLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLGdoKGEsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZmxhZ3N8PTQxOTQzMDgpfVxuZnVuY3Rpb24gc2goYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHAoMTQ3LGEpKTt2YXIgZT1kLGY9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWYpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZS5yZWZzO2I9PT1qaCYmKGI9ZS5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltmXTpiW2ZdPWF9O2IuX3N0cmluZ1JlZj1mO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcihwKDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcihwKDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gdGgoYSxiKXthPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKTt0aHJvdyBFcnJvcihwKDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1hP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmEpKTt9ZnVuY3Rpb24gdWgoYSl7dmFyIGI9YS5faW5pdDtyZXR1cm4gYihhLl9wYXlsb2FkKX1cbmZ1bmN0aW9uIHZoKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmRlbGV0aW9ucztudWxsPT09ZD8oYi5kZWxldGlvbnM9W2NdLGIuZmxhZ3N8PTE2KTpkLnB1c2goYyl9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXthPXdoKGEsYik7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYi5mbGFnc3w9MTA0ODU3NixjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZmxhZ3N8PTIsYyk6ZDtiLmZsYWdzfD0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmXG5udWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzfD0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9eGgoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gayhhLGIsYyxkKXt2YXIgZj1jLnR5cGU7aWYoZj09PXlhKXJldHVybiBtKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsYy5rZXkpO2lmKG51bGwhPT1iJiYoYi5lbGVtZW50VHlwZT09PWZ8fFwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYuJCR0eXBlb2Y9PT1IYSYmdWgoZik9PT1iLnR5cGUpKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1zaChhLGIsYyksZC5yZXR1cm49YSxkO2Q9eWgoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9c2goYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxcbmIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09Yy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj16aChjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbShhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9QWgoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBxKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiXCIhPT1ifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9eGgoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2UgdmE6cmV0dXJuIGM9eWgoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksXG5jLnJlZj1zaChhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2Ugd2E6cmV0dXJuIGI9emgoYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2Nhc2UgSGE6dmFyIGQ9Yi5faW5pdDtyZXR1cm4gcShhLGQoYi5fcGF5bG9hZCksYyl9aWYoZWIoYil8fEthKGIpKXJldHVybiBiPUFoKGIsYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO3RoKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcihhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYyYmXCJcIiE9PWN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2UgdmE6cmV0dXJuIGMua2V5PT09ZT9rKGEsYixjLGQpOm51bGw7Y2FzZSB3YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbDtjYXNlIEhhOnJldHVybiBlPWMuX2luaXQscihhLFxuYixlKGMuX3BheWxvYWQpLGQpfWlmKGViKGMpfHxLYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDptKGEsYixjLGQsbnVsbCk7dGgoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB5KGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkJiZcIlwiIT09ZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsayhiLGEsZCxlKTtjYXNlIHdhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpO2Nhc2UgSGE6dmFyIGY9ZC5faW5pdDtyZXR1cm4geShhLGIsYyxmKGQuX3BheWxvYWQpLGUpfWlmKGViKGQpfHxLYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxtKGIsYSxkLGUsbnVsbCk7dGgoYixkKX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIG4oZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsbT1udWxsLHU9Zyx3PWc9MCx4PW51bGw7bnVsbCE9PXUmJnc8aC5sZW5ndGg7dysrKXt1LmluZGV4Pnc/KHg9dSx1PW51bGwpOng9dS5zaWJsaW5nO3ZhciBuPXIoZSx1LGhbd10sayk7aWYobnVsbD09PW4pe251bGw9PT11JiYodT14KTticmVha31hJiZ1JiZudWxsPT09bi5hbHRlcm5hdGUmJmIoZSx1KTtnPWYobixnLHcpO251bGw9PT1tP2w9bjptLnNpYmxpbmc9bjttPW47dT14fWlmKHc9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHUpLEkmJnRnKGUsdyksbDtpZihudWxsPT09dSl7Zm9yKDt3PGgubGVuZ3RoO3crKyl1PXEoZSxoW3ddLGspLG51bGwhPT11JiYoZz1mKHUsZyx3KSxudWxsPT09bT9sPXU6bS5zaWJsaW5nPXUsbT11KTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZvcih1PWQoZSx1KTt3PGgubGVuZ3RoO3crKyl4PXkodSxlLHcsaFt3XSxrKSxudWxsIT09eCYmKGEmJm51bGwhPT14LmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PVxueC5rZXk/dzp4LmtleSksZz1mKHgsZyx3KSxudWxsPT09bT9sPXg6bS5zaWJsaW5nPXgsbT14KTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO0kmJnRnKGUsdyk7cmV0dXJuIGx9ZnVuY3Rpb24gdChlLGcsaCxrKXt2YXIgbD1LYShoKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyBFcnJvcihwKDE1MCkpO2g9bC5jYWxsKGgpO2lmKG51bGw9PWgpdGhyb3cgRXJyb3IocCgxNTEpKTtmb3IodmFyIHU9bD1udWxsLG09Zyx3PWc9MCx4PW51bGwsbj1oLm5leHQoKTtudWxsIT09bSYmIW4uZG9uZTt3Kyssbj1oLm5leHQoKSl7bS5pbmRleD53Pyh4PW0sbT1udWxsKTp4PW0uc2libGluZzt2YXIgdD1yKGUsbSxuLnZhbHVlLGspO2lmKG51bGw9PT10KXtudWxsPT09bSYmKG09eCk7YnJlYWt9YSYmbSYmbnVsbD09PXQuYWx0ZXJuYXRlJiZiKGUsbSk7Zz1mKHQsZyx3KTtudWxsPT09dT9sPXQ6dS5zaWJsaW5nPXQ7dT10O209eH1pZihuLmRvbmUpcmV0dXJuIGMoZSxcbm0pLEkmJnRnKGUsdyksbDtpZihudWxsPT09bSl7Zm9yKDshbi5kb25lO3crKyxuPWgubmV4dCgpKW49cShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHcpLG51bGw9PT11P2w9bjp1LnNpYmxpbmc9bix1PW4pO0kmJnRnKGUsdyk7cmV0dXJuIGx9Zm9yKG09ZChlLG0pOyFuLmRvbmU7dysrLG49aC5uZXh0KCkpbj15KG0sZSx3LG4udmFsdWUsayksbnVsbCE9PW4mJihhJiZudWxsIT09bi5hbHRlcm5hdGUmJm0uZGVsZXRlKG51bGw9PT1uLmtleT93Om4ua2V5KSxnPWYobixnLHcpLG51bGw9PT11P2w9bjp1LnNpYmxpbmc9bix1PW4pO2EmJm0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7SSYmdGcoZSx3KTtyZXR1cm4gbH1mdW5jdGlvbiBKKGEsZCxmLGgpe1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXlhJiZudWxsPT09Zi5rZXkmJihmPWYucHJvcHMuY2hpbGRyZW4pO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYpe3N3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHZhOmE6e2Zvcih2YXIgaz1cbmYua2V5LGw9ZDtudWxsIT09bDspe2lmKGwua2V5PT09ayl7az1mLnR5cGU7aWYoaz09PXlhKXtpZig3PT09bC50YWcpe2MoYSxsLnNpYmxpbmcpO2Q9ZShsLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9fWVsc2UgaWYobC5lbGVtZW50VHlwZT09PWt8fFwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWsmJmsuJCR0eXBlb2Y9PT1IYSYmdWgoayk9PT1sLnR5cGUpe2MoYSxsLnNpYmxpbmcpO2Q9ZShsLGYucHJvcHMpO2QucmVmPXNoKGEsbCxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWMoYSxsKTticmVha31lbHNlIGIoYSxsKTtsPWwuc2libGluZ31mLnR5cGU9PT15YT8oZD1BaChmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9eWgoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9c2goYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIHdhOmE6e2ZvcihsPWYua2V5O251bGwhPT1cbmQ7KXtpZihkLmtleT09PWwpaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9emgoZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSk7Y2FzZSBIYTpyZXR1cm4gbD1mLl9pbml0LEooYSxkLGwoZi5fcGF5bG9hZCksaCl9aWYoZWIoZikpcmV0dXJuIG4oYSxkLGYsaCk7aWYoS2EoZikpcmV0dXJuIHQoYSxkLGYsaCk7dGgoYSxmKX1yZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGYmJlwiXCIhPT1mfHxcIm51bWJlclwiPT09dHlwZW9mIGY/KGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYpLGQucmV0dXJuPWEsYT1kKTpcbihjKGEsZCksZD14aChmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKSk6YyhhLGQpfXJldHVybiBKfXZhciBCaD12aCghMCksQ2g9dmgoITEpLERoPXt9LEVoPVVmKERoKSxGaD1VZihEaCksR2g9VWYoRGgpO2Z1bmN0aW9uIEhoKGEpe2lmKGE9PT1EaCl0aHJvdyBFcnJvcihwKDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIEloKGEsYil7RyhHaCxiKTtHKEZoLGEpO0coRWgsRGgpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bGIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPWxiKGIsYSl9RShFaCk7RyhFaCxiKX1mdW5jdGlvbiBKaCgpe0UoRWgpO0UoRmgpO0UoR2gpfVxuZnVuY3Rpb24gS2goYSl7SGgoR2guY3VycmVudCk7dmFyIGI9SGgoRWguY3VycmVudCk7dmFyIGM9bGIoYixhLnR5cGUpO2IhPT1jJiYoRyhGaCxhKSxHKEVoLGMpKX1mdW5jdGlvbiBMaChhKXtGaC5jdXJyZW50PT09YSYmKEUoRWgpLEUoRmgpKX12YXIgTT1VZigwKTtcbmZ1bmN0aW9uIE1oKGEpe2Zvcih2YXIgYj1hO251bGwhPT1iOyl7aWYoMTM9PT1iLnRhZyl7dmFyIGM9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbD09PWN8fFwiJD9cIj09PWMuZGF0YXx8XCIkIVwiPT09Yy5kYXRhKSlyZXR1cm4gYn1lbHNlIGlmKDE5PT09Yi50YWcmJnZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5yZXZlYWxPcmRlcil7aWYoMCE9PShiLmZsYWdzJjEyOCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBOaD1bXTtcbmZ1bmN0aW9uIE9oKCl7Zm9yKHZhciBhPTA7YTxOaC5sZW5ndGg7YSsrKU5oW2FdLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PW51bGw7TmgubGVuZ3RoPTB9dmFyIFBoPXVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsUWg9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsUmg9MCxOPW51bGwsTz1udWxsLFA9bnVsbCxTaD0hMSxUaD0hMSxVaD0wLFZoPTA7ZnVuY3Rpb24gUSgpe3Rocm93IEVycm9yKHAoMzIxKSk7fWZ1bmN0aW9uIFdoKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIUhlKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBYaChhLGIsYyxkLGUsZil7Umg9ZjtOPWI7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2IubGFuZXM9MDtQaC5jdXJyZW50PW51bGw9PT1hfHxudWxsPT09YS5tZW1vaXplZFN0YXRlP1loOlpoO2E9YyhkLGUpO2lmKFRoKXtmPTA7ZG97VGg9ITE7VWg9MDtpZigyNTw9Zil0aHJvdyBFcnJvcihwKDMwMSkpO2YrPTE7UD1PPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO1BoLmN1cnJlbnQ9JGg7YT1jKGQsZSl9d2hpbGUoVGgpfVBoLmN1cnJlbnQ9YWk7Yj1udWxsIT09TyYmbnVsbCE9PU8ubmV4dDtSaD0wO1A9Tz1OPW51bGw7U2g9ITE7aWYoYil0aHJvdyBFcnJvcihwKDMwMCkpO3JldHVybiBhfWZ1bmN0aW9uIGJpKCl7dmFyIGE9MCE9PVVoO1VoPTA7cmV0dXJuIGF9XG5mdW5jdGlvbiBjaSgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwsYmFzZVF1ZXVlOm51bGwscXVldWU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1QP04ubWVtb2l6ZWRTdGF0ZT1QPWE6UD1QLm5leHQ9YTtyZXR1cm4gUH1mdW5jdGlvbiBkaSgpe2lmKG51bGw9PT1PKXt2YXIgYT1OLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1PLm5leHQ7dmFyIGI9bnVsbD09PVA/Ti5tZW1vaXplZFN0YXRlOlAubmV4dDtpZihudWxsIT09YilQPWIsTz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IocCgzMTApKTtPPWE7YT17bWVtb2l6ZWRTdGF0ZTpPLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOk8uYmFzZVN0YXRlLGJhc2VRdWV1ZTpPLmJhc2VRdWV1ZSxxdWV1ZTpPLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVA/Ti5tZW1vaXplZFN0YXRlPVA9YTpQPVAubmV4dD1hfXJldHVybiBQfVxuZnVuY3Rpb24gZWkoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBmaShhKXt2YXIgYj1kaSgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcihwKDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPU8sZT1kLmJhc2VRdWV1ZSxmPWMucGVuZGluZztpZihudWxsIT09Zil7aWYobnVsbCE9PWUpe3ZhciBnPWUubmV4dDtlLm5leHQ9Zi5uZXh0O2YubmV4dD1nfWQuYmFzZVF1ZXVlPWU9ZjtjLnBlbmRpbmc9bnVsbH1pZihudWxsIT09ZSl7Zj1lLm5leHQ7ZD1kLmJhc2VTdGF0ZTt2YXIgaD1nPW51bGwsaz1udWxsLGw9Zjtkb3t2YXIgbT1sLmxhbmU7aWYoKFJoJm0pPT09bSludWxsIT09ayYmKGs9ay5uZXh0PXtsYW5lOjAsYWN0aW9uOmwuYWN0aW9uLGhhc0VhZ2VyU3RhdGU6bC5oYXNFYWdlclN0YXRlLGVhZ2VyU3RhdGU6bC5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9bC5oYXNFYWdlclN0YXRlP2wuZWFnZXJTdGF0ZTphKGQsbC5hY3Rpb24pO2Vsc2V7dmFyIHE9e2xhbmU6bSxhY3Rpb246bC5hY3Rpb24saGFzRWFnZXJTdGF0ZTpsLmhhc0VhZ2VyU3RhdGUsXG5lYWdlclN0YXRlOmwuZWFnZXJTdGF0ZSxuZXh0Om51bGx9O251bGw9PT1rPyhoPWs9cSxnPWQpOms9ay5uZXh0PXE7Ti5sYW5lc3w9bTtoaHw9bX1sPWwubmV4dH13aGlsZShudWxsIT09bCYmbCE9PWYpO251bGw9PT1rP2c9ZDprLm5leHQ9aDtIZShkLGIubWVtb2l6ZWRTdGF0ZSl8fChVZz0hMCk7Yi5tZW1vaXplZFN0YXRlPWQ7Yi5iYXNlU3RhdGU9ZztiLmJhc2VRdWV1ZT1rO2MubGFzdFJlbmRlcmVkU3RhdGU9ZH1hPWMuaW50ZXJsZWF2ZWQ7aWYobnVsbCE9PWEpe2U9YTtkbyBmPWUubGFuZSxOLmxhbmVzfD1mLGhofD1mLGU9ZS5uZXh0O3doaWxlKGUhPT1hKX1lbHNlIG51bGw9PT1lJiYoYy5sYW5lcz0wKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gZ2koYSl7dmFyIGI9ZGkoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IocCgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1jLmRpc3BhdGNoLGU9Yy5wZW5kaW5nLGY9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lKXtjLnBlbmRpbmc9bnVsbDt2YXIgZz1lPWUubmV4dDtkbyBmPWEoZixnLmFjdGlvbiksZz1nLm5leHQ7d2hpbGUoZyE9PWUpO0hlKGYsYi5tZW1vaXplZFN0YXRlKXx8KFVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtudWxsPT09Yi5iYXNlUXVldWUmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2YsZF19ZnVuY3Rpb24gaGkoKXt9XG5mdW5jdGlvbiBpaShhLGIpe3ZhciBjPU4sZD1kaSgpLGU9YigpLGY9IUhlKGQubWVtb2l6ZWRTdGF0ZSxlKTtmJiYoZC5tZW1vaXplZFN0YXRlPWUsVWc9ITApO2Q9ZC5xdWV1ZTtqaShraS5iaW5kKG51bGwsYyxkLGEpLFthXSk7aWYoZC5nZXRTbmFwc2hvdCE9PWJ8fGZ8fG51bGwhPT1QJiZQLm1lbW9pemVkU3RhdGUudGFnJjEpe2MuZmxhZ3N8PTIwNDg7bGkoOSxtaS5iaW5kKG51bGwsYyxkLGUsYiksdm9pZCAwLG51bGwpO2lmKG51bGw9PT1SKXRocm93IEVycm9yKHAoMzQ5KSk7MCE9PShSaCYzMCl8fG5pKGMsYixlKX1yZXR1cm4gZX1mdW5jdGlvbiBuaShhLGIsYyl7YS5mbGFnc3w9MTYzODQ7YT17Z2V0U25hcHNob3Q6Yix2YWx1ZTpjfTtiPU4udXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbCxzdG9yZXM6bnVsbH0sTi51cGRhdGVRdWV1ZT1iLGIuc3RvcmVzPVthXSk6KGM9Yi5zdG9yZXMsbnVsbD09PWM/Yi5zdG9yZXM9W2FdOmMucHVzaChhKSl9XG5mdW5jdGlvbiBtaShhLGIsYyxkKXtiLnZhbHVlPWM7Yi5nZXRTbmFwc2hvdD1kO29pKGIpJiZwaShhKX1mdW5jdGlvbiBraShhLGIsYyl7cmV0dXJuIGMoZnVuY3Rpb24oKXtvaShiKSYmcGkoYSl9KX1mdW5jdGlvbiBvaShhKXt2YXIgYj1hLmdldFNuYXBzaG90O2E9YS52YWx1ZTt0cnl7dmFyIGM9YigpO3JldHVybiFIZShhLGMpfWNhdGNoKGQpe3JldHVybiEwfX1mdW5jdGlvbiBwaShhKXt2YXIgYj1aZyhhLDEpO251bGwhPT1iJiZtaChiLGEsMSwtMSl9XG5mdW5jdGlvbiBxaShhKXt2YXIgYj1jaSgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjAsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmVpLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2IucXVldWU9YTthPWEuZGlzcGF0Y2g9cmkuYmluZChudWxsLE4sYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX1cbmZ1bmN0aW9uIGxpKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtiPU4udXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbCxzdG9yZXM6bnVsbH0sTi51cGRhdGVRdWV1ZT1iLGIubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGM9Yi5sYXN0RWZmZWN0LG51bGw9PT1jP2IubGFzdEVmZmVjdD1hLm5leHQ9YTooZD1jLm5leHQsYy5uZXh0PWEsYS5uZXh0PWQsYi5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBzaSgpe3JldHVybiBkaSgpLm1lbW9pemVkU3RhdGV9ZnVuY3Rpb24gdGkoYSxiLGMsZCl7dmFyIGU9Y2koKTtOLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1saSgxfGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gdWkoYSxiLGMsZCl7dmFyIGU9ZGkoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Tyl7dmFyIGc9Ty5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZXaChkLGcuZGVwcykpe2UubWVtb2l6ZWRTdGF0ZT1saShiLGMsZixkKTtyZXR1cm59fU4uZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPWxpKDF8YixjLGYsZCl9ZnVuY3Rpb24gdmkoYSxiKXtyZXR1cm4gdGkoODM5MDY1Niw4LGEsYil9ZnVuY3Rpb24gamkoYSxiKXtyZXR1cm4gdWkoMjA0OCw4LGEsYil9ZnVuY3Rpb24gd2koYSxiKXtyZXR1cm4gdWkoNCwyLGEsYil9ZnVuY3Rpb24geGkoYSxiKXtyZXR1cm4gdWkoNCw0LGEsYil9XG5mdW5jdGlvbiB5aShhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fWZ1bmN0aW9uIHppKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gdWkoNCw0LHlpLmJpbmQobnVsbCxiLGEpLGMpfWZ1bmN0aW9uIEFpKCl7fWZ1bmN0aW9uIEJpKGEsYil7dmFyIGM9ZGkoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJldoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gQ2koYSxiKXt2YXIgYz1kaSgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmV2goYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9ZnVuY3Rpb24gRGkoYSxiLGMpe2lmKDA9PT0oUmgmMjEpKXJldHVybiBhLmJhc2VTdGF0ZSYmKGEuYmFzZVN0YXRlPSExLFVnPSEwKSxhLm1lbW9pemVkU3RhdGU9YztIZShjLGIpfHwoYz15YygpLE4ubGFuZXN8PWMsaGh8PWMsYS5iYXNlU3RhdGU9ITApO3JldHVybiBifWZ1bmN0aW9uIEVpKGEsYil7dmFyIGM9QztDPTAhPT1jJiY0PmM/Yzo0O2EoITApO3ZhciBkPVFoLnRyYW5zaXRpb247UWgudHJhbnNpdGlvbj17fTt0cnl7YSghMSksYigpfWZpbmFsbHl7Qz1jLFFoLnRyYW5zaXRpb249ZH19ZnVuY3Rpb24gRmkoKXtyZXR1cm4gZGkoKS5tZW1vaXplZFN0YXRlfVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWxoKGEpO2M9e2xhbmU6ZCxhY3Rpb246YyxoYXNFYWdlclN0YXRlOiExLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O2lmKEhpKGEpKUlpKGIsYyk7ZWxzZSBpZihjPVlnKGEsYixjLGQpLG51bGwhPT1jKXt2YXIgZT1MKCk7bWgoYyxhLGQsZSk7SmkoYyxiLGQpfX1cbmZ1bmN0aW9uIHJpKGEsYixjKXt2YXIgZD1saChhKSxlPXtsYW5lOmQsYWN0aW9uOmMsaGFzRWFnZXJTdGF0ZTohMSxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfTtpZihIaShhKSlJaShiLGUpO2Vsc2V7dmFyIGY9YS5hbHRlcm5hdGU7aWYoMD09PWEubGFuZXMmJihudWxsPT09Znx8MD09PWYubGFuZXMpJiYoZj1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWYpKXRyeXt2YXIgZz1iLmxhc3RSZW5kZXJlZFN0YXRlLGg9ZihnLGMpO2UuaGFzRWFnZXJTdGF0ZT0hMDtlLmVhZ2VyU3RhdGU9aDtpZihIZShoLGcpKXt2YXIgaz1iLmludGVybGVhdmVkO251bGw9PT1rPyhlLm5leHQ9ZSxYZyhiKSk6KGUubmV4dD1rLm5leHQsay5uZXh0PWUpO2IuaW50ZXJsZWF2ZWQ9ZTtyZXR1cm59fWNhdGNoKGwpe31maW5hbGx5e31jPVlnKGEsYixlLGQpO251bGwhPT1jJiYoZT1MKCksbWgoYyxhLGQsZSksSmkoYyxiLGQpKX19XG5mdW5jdGlvbiBIaShhKXt2YXIgYj1hLmFsdGVybmF0ZTtyZXR1cm4gYT09PU58fG51bGwhPT1iJiZiPT09Tn1mdW5jdGlvbiBJaShhLGIpe1RoPVNoPSEwO3ZhciBjPWEucGVuZGluZztudWxsPT09Yz9iLm5leHQ9YjooYi5uZXh0PWMubmV4dCxjLm5leHQ9Yik7YS5wZW5kaW5nPWJ9ZnVuY3Rpb24gSmkoYSxiLGMpe2lmKDAhPT0oYyY0MTk0MjQwKSl7dmFyIGQ9Yi5sYW5lcztkJj1hLnBlbmRpbmdMYW5lcztjfD1kO2IubGFuZXM9YztDYyhhLGMpfX1cbnZhciBhaT17cmVhZENvbnRleHQ6VmcsdXNlQ2FsbGJhY2s6USx1c2VDb250ZXh0OlEsdXNlRWZmZWN0OlEsdXNlSW1wZXJhdGl2ZUhhbmRsZTpRLHVzZUluc2VydGlvbkVmZmVjdDpRLHVzZUxheW91dEVmZmVjdDpRLHVzZU1lbW86USx1c2VSZWR1Y2VyOlEsdXNlUmVmOlEsdXNlU3RhdGU6USx1c2VEZWJ1Z1ZhbHVlOlEsdXNlRGVmZXJyZWRWYWx1ZTpRLHVzZVRyYW5zaXRpb246USx1c2VNdXRhYmxlU291cmNlOlEsdXNlU3luY0V4dGVybmFsU3RvcmU6USx1c2VJZDpRLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sWWg9e3JlYWRDb250ZXh0OlZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7Y2koKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDpWZyx1c2VFZmZlY3Q6dmksdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIHRpKDQxOTQzMDgsXG40LHlpLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGkoNDE5NDMwOCw0LGEsYil9LHVzZUluc2VydGlvbkVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiB0aSg0LDIsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPWNpKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWNpKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPXtwZW5kaW5nOm51bGwsaW50ZXJsZWF2ZWQ6bnVsbCxsYW5lczowLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2QucXVldWU9YTthPWEuZGlzcGF0Y2g9R2kuYmluZChudWxsLE4sYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3ZhciBiPVxuY2koKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6cWksdXNlRGVidWdWYWx1ZTpBaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3JldHVybiBjaSgpLm1lbW9pemVkU3RhdGU9YX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPXFpKCExKSxiPWFbMF07YT1FaS5iaW5kKG51bGwsYVsxXSk7Y2koKS5tZW1vaXplZFN0YXRlPWE7cmV0dXJuW2IsYV19LHVzZU11dGFibGVTb3VyY2U6ZnVuY3Rpb24oKXt9LHVzZVN5bmNFeHRlcm5hbFN0b3JlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1OLGU9Y2koKTtpZihJKXtpZih2b2lkIDA9PT1jKXRocm93IEVycm9yKHAoNDA3KSk7Yz1jKCl9ZWxzZXtjPWIoKTtpZihudWxsPT09Uil0aHJvdyBFcnJvcihwKDM0OSkpOzAhPT0oUmgmMzApfHxuaShkLGIsYyl9ZS5tZW1vaXplZFN0YXRlPWM7dmFyIGY9e3ZhbHVlOmMsZ2V0U25hcHNob3Q6Yn07ZS5xdWV1ZT1mO3ZpKGtpLmJpbmQobnVsbCxkLFxuZixhKSxbYV0pO2QuZmxhZ3N8PTIwNDg7bGkoOSxtaS5iaW5kKG51bGwsZCxmLGMsYiksdm9pZCAwLG51bGwpO3JldHVybiBjfSx1c2VJZDpmdW5jdGlvbigpe3ZhciBhPWNpKCksYj1SLmlkZW50aWZpZXJQcmVmaXg7aWYoSSl7dmFyIGM9c2c7dmFyIGQ9cmc7Yz0oZCZ+KDE8PDMyLW9jKGQpLTEpKS50b1N0cmluZygzMikrYztiPVwiOlwiK2IrXCJSXCIrYztjPVVoKys7MDxjJiYoYis9XCJIXCIrYy50b1N0cmluZygzMikpO2IrPVwiOlwifWVsc2UgYz1WaCsrLGI9XCI6XCIrYitcInJcIitjLnRvU3RyaW5nKDMyKStcIjpcIjtyZXR1cm4gYS5tZW1vaXplZFN0YXRlPWJ9LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sWmg9e3JlYWRDb250ZXh0OlZnLHVzZUNhbGxiYWNrOkJpLHVzZUNvbnRleHQ6VmcsdXNlRWZmZWN0OmppLHVzZUltcGVyYXRpdmVIYW5kbGU6emksdXNlSW5zZXJ0aW9uRWZmZWN0OndpLHVzZUxheW91dEVmZmVjdDp4aSx1c2VNZW1vOkNpLHVzZVJlZHVjZXI6ZmksdXNlUmVmOnNpLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGZpKGVpKX0sXG51c2VEZWJ1Z1ZhbHVlOkFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9ZGkoKTtyZXR1cm4gRGkoYixPLm1lbW9pemVkU3RhdGUsYSl9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1maShlaSlbMF0sYj1kaSgpLm1lbW9pemVkU3RhdGU7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6aGksdXNlU3luY0V4dGVybmFsU3RvcmU6aWksdXNlSWQ6RmksdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSwkaD17cmVhZENvbnRleHQ6VmcsdXNlQ2FsbGJhY2s6QmksdXNlQ29udGV4dDpWZyx1c2VFZmZlY3Q6amksdXNlSW1wZXJhdGl2ZUhhbmRsZTp6aSx1c2VJbnNlcnRpb25FZmZlY3Q6d2ksdXNlTGF5b3V0RWZmZWN0OnhpLHVzZU1lbW86Q2ksdXNlUmVkdWNlcjpnaSx1c2VSZWY6c2ksdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZ2koZWkpfSx1c2VEZWJ1Z1ZhbHVlOkFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9ZGkoKTtyZXR1cm4gbnVsbD09PVxuTz9iLm1lbW9pemVkU3RhdGU9YTpEaShiLE8ubWVtb2l6ZWRTdGF0ZSxhKX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPWdpKGVpKVswXSxiPWRpKCkubWVtb2l6ZWRTdGF0ZTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpoaSx1c2VTeW5jRXh0ZXJuYWxTdG9yZTppaSx1c2VJZDpGaSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9O2Z1bmN0aW9uIEtpKGEsYil7dHJ5e3ZhciBjPVwiXCIsZD1iO2RvIGMrPVBhKGQpLGQ9ZC5yZXR1cm47d2hpbGUoZCk7dmFyIGU9Y31jYXRjaChmKXtlPVwiXFxuRXJyb3IgZ2VuZXJhdGluZyBzdGFjazogXCIrZi5tZXNzYWdlK1wiXFxuXCIrZi5zdGFja31yZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazplLGRpZ2VzdDpudWxsfX1mdW5jdGlvbiBMaShhLGIsYyl7cmV0dXJue3ZhbHVlOmEsc291cmNlOm51bGwsc3RhY2s6bnVsbCE9Yz9jOm51bGwsZGlnZXN0Om51bGwhPWI/YjpudWxsfX1cbmZ1bmN0aW9uIE1pKGEsYil7dHJ5e2NvbnNvbGUuZXJyb3IoYi52YWx1ZSl9Y2F0Y2goYyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGM7fSl9fXZhciBOaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBPaShhLGIsYyl7Yz1jaCgtMSxjKTtjLnRhZz0zO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtQaXx8KFBpPSEwLFFpPWQpO01pKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gUmkoYSxiLGMpe2M9Y2goLTEsYyk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe3JldHVybiBkKGUpfTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7TWkoYSxiKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe01pKGEsYik7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09U2k/U2k9bmV3IFNldChbdGhpc10pOlNpLmFkZCh0aGlzKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBUaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7aWYobnVsbD09PWQpe2Q9YS5waW5nQ2FjaGU9bmV3IE5pO3ZhciBlPW5ldyBTZXQ7ZC5zZXQoYixlKX1lbHNlIGU9ZC5nZXQoYiksdm9pZCAwPT09ZSYmKGU9bmV3IFNldCxkLnNldChiLGUpKTtlLmhhcyhjKXx8KGUuYWRkKGMpLGE9VWkuYmluZChudWxsLGEsYixjKSxiLnRoZW4oYSxhKSl9ZnVuY3Rpb24gVmkoYSl7ZG97dmFyIGI7aWYoYj0xMz09PWEudGFnKWI9YS5tZW1vaXplZFN0YXRlLGI9bnVsbCE9PWI/bnVsbCE9PWIuZGVoeWRyYXRlZD8hMDohMTohMDtpZihiKXJldHVybiBhO2E9YS5yZXR1cm59d2hpbGUobnVsbCE9PWEpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gV2koYSxiLGMsZCxlKXtpZigwPT09KGEubW9kZSYxKSlyZXR1cm4gYT09PWI/YS5mbGFnc3w9NjU1MzY6KGEuZmxhZ3N8PTEyOCxjLmZsYWdzfD0xMzEwNzIsYy5mbGFncyY9LTUyODA1LDE9PT1jLnRhZyYmKG51bGw9PT1jLmFsdGVybmF0ZT9jLnRhZz0xNzooYj1jaCgtMSwxKSxiLnRhZz0yLGRoKGMsYiwxKSkpLGMubGFuZXN8PTEpLGE7YS5mbGFnc3w9NjU1MzY7YS5sYW5lcz1lO3JldHVybiBhfXZhciBYaT11YS5SZWFjdEN1cnJlbnRPd25lcixVZz0hMTtmdW5jdGlvbiBZaShhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP0NoKGIsbnVsbCxjLGQpOkJoKGIsYS5jaGlsZCxjLGQpfVxuZnVuY3Rpb24gWmkoYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO1RnKGIsZSk7ZD1YaChhLGIsYyxkLGYsZSk7Yz1iaSgpO2lmKG51bGwhPT1hJiYhVWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tMjA1MyxhLmxhbmVzJj1+ZSwkaShhLGIsZSk7SSYmYyYmdmcoYik7Yi5mbGFnc3w9MTtZaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGFqKGEsYixjLGQsZSl7aWYobnVsbD09PWEpe3ZhciBmPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmIWJqKGYpJiZ2b2lkIDA9PT1mLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1mLGNqKGEsYixmLGQsZSk7YT15aChjLnR5cGUsbnVsbCxkLGIsYi5tb2RlLGUpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1mPWEuY2hpbGQ7aWYoMD09PShhLmxhbmVzJmUpKXt2YXIgZz1mLm1lbW9pemVkUHJvcHM7Yz1jLmNvbXBhcmU7Yz1udWxsIT09Yz9jOkllO2lmKGMoZyxkKSYmYS5yZWY9PT1iLnJlZilyZXR1cm4gJGkoYSxiLGUpfWIuZmxhZ3N8PTE7YT13aChmLGQpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIGNqKGEsYixjLGQsZSl7aWYobnVsbCE9PWEpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihJZShmLGQpJiZhLnJlZj09PWIucmVmKWlmKFVnPSExLGIucGVuZGluZ1Byb3BzPWQ9ZiwwIT09KGEubGFuZXMmZSkpMCE9PShhLmZsYWdzJjEzMTA3MikmJihVZz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLCRpKGEsYixlKX1yZXR1cm4gZGooYSxiLGMsZCxlKX1cbmZ1bmN0aW9uIGVqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlKWlmKDA9PT0oYi5tb2RlJjEpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjAsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH0sRyhmaixnaiksZ2p8PWM7ZWxzZXtpZigwPT09KGMmMTA3Mzc0MTgyNCkpcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YSxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfSxiLnVwZGF0ZVF1ZXVlPW51bGwsRyhmaixnaiksZ2p8PWEsbnVsbDtiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9O2Q9bnVsbCE9PWY/Zi5iYXNlTGFuZXM6YztHKGZqLGdqKTtnanw9ZH1lbHNlIG51bGwhPT1cbmY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLEcoZmosZ2opLGdqfD1kO1lpKGEsYixlLGMpO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIGhqKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZmxhZ3N8PTUxMixiLmZsYWdzfD0yMDk3MTUyfWZ1bmN0aW9uIGRqKGEsYixjLGQsZSl7dmFyIGY9WmYoYyk/WGY6SC5jdXJyZW50O2Y9WWYoYixmKTtUZyhiLGUpO2M9WGgoYSxiLGMsZCxmLGUpO2Q9YmkoKTtpZihudWxsIT09YSYmIVVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTIwNTMsYS5sYW5lcyY9fmUsJGkoYSxiLGUpO0kmJmQmJnZnKGIpO2IuZmxhZ3N8PTE7WWkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaihhLGIsYyxkLGUpe2lmKFpmKGMpKXt2YXIgZj0hMDtjZyhiKX1lbHNlIGY9ITE7VGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpamooYSxiKSxwaChiLGMsZCkscmgoYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGs9Zy5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9VmcobCk6KGw9WmYoYyk/WGY6SC5jdXJyZW50LGw9WWYoYixsKSk7dmFyIG09Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMscT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgbXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7cXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fFxuKGghPT1kfHxrIT09bCkmJnFoKGIsZyxkLGwpOyRnPSExO3ZhciByPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXI7Z2goYixkLGcsZSk7az1iLm1lbW9pemVkU3RhdGU7aCE9PWR8fHIhPT1rfHxXZi5jdXJyZW50fHwkZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihraChiLGMsbSxkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9JGd8fG9oKGIsYyxoLGQscixrLGwpKT8ocXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQxOTQzMDgpKTpcbihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQxOTQzMDgpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO2JoKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6TGcoYi50eXBlLGgpO2cucHJvcHM9bDtxPWIucGVuZGluZ1Byb3BzO3I9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9Vmcoayk6KGs9WmYoYyk/WGY6SC5jdXJyZW50LGs9WWYoYixrKSk7dmFyIHk9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG09XCJmdW5jdGlvblwiPT09dHlwZW9mIHl8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1xfHxyIT09aykmJnFoKGIsZyxkLGspOyRnPSExO3I9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cjtnaChiLGQsZyxlKTt2YXIgbj1iLm1lbW9pemVkU3RhdGU7aCE9PXF8fHIhPT1ufHxXZi5jdXJyZW50fHwkZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIHkmJihraChiLGMseSxkKSxuPWIubWVtb2l6ZWRTdGF0ZSksKGw9JGd8fG9oKGIsYyxsLGQscixuLGspfHwhMSk/KG18fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsbixrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXG5nLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQsbixrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmZsYWdzfD0xMDI0KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MTAyNCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPW4pLGcucHJvcHM9ZCxnLnN0YXRlPW4sZy5jb250ZXh0PWssZD1sKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09XG5hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTEwMjQpLGQ9ITEpfXJldHVybiBraihhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBraihhLGIsYyxkLGUsZil7aGooYSxiKTt2YXIgZz0wIT09KGIuZmxhZ3MmMTI4KTtpZighZCYmIWcpcmV0dXJuIGUmJmRnKGIsYywhMSksJGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7WGkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1CaChiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPUJoKGIsbnVsbCxoLGYpKTpZaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZkZyhiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIGxqKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/YWcoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmYWcoYSxiLmNvbnRleHQsITEpO0loKGEsYi5jb250YWluZXJJbmZvKX1cbmZ1bmN0aW9uIG1qKGEsYixjLGQsZSl7SWcoKTtKZyhlKTtiLmZsYWdzfD0yNTY7WWkoYSxiLGMsZCk7cmV0dXJuIGIuY2hpbGR9dmFyIG5qPXtkZWh5ZHJhdGVkOm51bGwsdHJlZUNvbnRleHQ6bnVsbCxyZXRyeUxhbmU6MH07ZnVuY3Rpb24gb2ooYSl7cmV0dXJue2Jhc2VMYW5lczphLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9fVxuZnVuY3Rpb24gcGooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9TS5jdXJyZW50LGY9ITEsZz0wIT09KGIuZmxhZ3MmMTI4KSxoOyhoPWcpfHwoaD1udWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZT8hMTowIT09KGUmMikpO2lmKGgpZj0hMCxiLmZsYWdzJj0tMTI5O2Vsc2UgaWYobnVsbD09PWF8fG51bGwhPT1hLm1lbW9pemVkU3RhdGUpZXw9MTtHKE0sZSYxKTtpZihudWxsPT09YSl7RWcoYik7YT1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJihhPWEuZGVoeWRyYXRlZCxudWxsIT09YSkpcmV0dXJuIDA9PT0oYi5tb2RlJjEpP2IubGFuZXM9MTpcIiQhXCI9PT1hLmRhdGE/Yi5sYW5lcz04OmIubGFuZXM9MTA3Mzc0MTgyNCxudWxsO2c9ZC5jaGlsZHJlbjthPWQuZmFsbGJhY2s7cmV0dXJuIGY/KGQ9Yi5tb2RlLGY9Yi5jaGlsZCxnPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Z30sMD09PShkJjEpJiZudWxsIT09Zj8oZi5jaGlsZExhbmVzPTAsZi5wZW5kaW5nUHJvcHM9XG5nKTpmPXFqKGcsZCwwLG51bGwpLGE9QWgoYSxkLGMsbnVsbCksZi5yZXR1cm49YixhLnJldHVybj1iLGYuc2libGluZz1hLGIuY2hpbGQ9ZixiLmNoaWxkLm1lbW9pemVkU3RhdGU9b2ooYyksYi5tZW1vaXplZFN0YXRlPW5qLGEpOnJqKGIsZyl9ZT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUmJihoPWUuZGVoeWRyYXRlZCxudWxsIT09aCkpcmV0dXJuIHNqKGEsYixnLGQsaCxlLGMpO2lmKGYpe2Y9ZC5mYWxsYmFjaztnPWIubW9kZTtlPWEuY2hpbGQ7aD1lLnNpYmxpbmc7dmFyIGs9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpkLmNoaWxkcmVufTswPT09KGcmMSkmJmIuY2hpbGQhPT1lPyhkPWIuY2hpbGQsZC5jaGlsZExhbmVzPTAsZC5wZW5kaW5nUHJvcHM9ayxiLmRlbGV0aW9ucz1udWxsKTooZD13aChlLGspLGQuc3VidHJlZUZsYWdzPWUuc3VidHJlZUZsYWdzJjE0NjgwMDY0KTtudWxsIT09aD9mPXdoKGgsZik6KGY9QWgoZixnLGMsbnVsbCksZi5mbGFnc3w9Mik7Zi5yZXR1cm49XG5iO2QucmV0dXJuPWI7ZC5zaWJsaW5nPWY7Yi5jaGlsZD1kO2Q9ZjtmPWIuY2hpbGQ7Zz1hLmNoaWxkLm1lbW9pemVkU3RhdGU7Zz1udWxsPT09Zz9vaihjKTp7YmFzZUxhbmVzOmcuYmFzZUxhbmVzfGMsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6Zy50cmFuc2l0aW9uc307Zi5tZW1vaXplZFN0YXRlPWc7Zi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YztiLm1lbW9pemVkU3RhdGU9bmo7cmV0dXJuIGR9Zj1hLmNoaWxkO2E9Zi5zaWJsaW5nO2Q9d2goZix7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpkLmNoaWxkcmVufSk7MD09PShiLm1vZGUmMSkmJihkLmxhbmVzPWMpO2QucmV0dXJuPWI7ZC5zaWJsaW5nPW51bGw7bnVsbCE9PWEmJihjPWIuZGVsZXRpb25zLG51bGw9PT1jPyhiLmRlbGV0aW9ucz1bYV0sYi5mbGFnc3w9MTYpOmMucHVzaChhKSk7Yi5jaGlsZD1kO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBkfVxuZnVuY3Rpb24gcmooYSxiKXtiPXFqKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmJ9LGEubW9kZSwwLG51bGwpO2IucmV0dXJuPWE7cmV0dXJuIGEuY2hpbGQ9Yn1mdW5jdGlvbiB0aihhLGIsYyxkKXtudWxsIT09ZCYmSmcoZCk7QmgoYixhLmNoaWxkLG51bGwsYyk7YT1yaihiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuKTthLmZsYWdzfD0yO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBhfVxuZnVuY3Rpb24gc2ooYSxiLGMsZCxlLGYsZyl7aWYoYyl7aWYoYi5mbGFncyYyNTYpcmV0dXJuIGIuZmxhZ3MmPS0yNTcsZD1MaShFcnJvcihwKDQyMikpKSx0aihhLGIsZyxkKTtpZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXJldHVybiBiLmNoaWxkPWEuY2hpbGQsYi5mbGFnc3w9MTI4LG51bGw7Zj1kLmZhbGxiYWNrO2U9Yi5tb2RlO2Q9cWooe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46ZC5jaGlsZHJlbn0sZSwwLG51bGwpO2Y9QWgoZixlLGcsbnVsbCk7Zi5mbGFnc3w9MjtkLnJldHVybj1iO2YucmV0dXJuPWI7ZC5zaWJsaW5nPWY7Yi5jaGlsZD1kOzAhPT0oYi5tb2RlJjEpJiZCaChiLGEuY2hpbGQsbnVsbCxnKTtiLmNoaWxkLm1lbW9pemVkU3RhdGU9b2ooZyk7Yi5tZW1vaXplZFN0YXRlPW5qO3JldHVybiBmfWlmKDA9PT0oYi5tb2RlJjEpKXJldHVybiB0aihhLGIsZyxudWxsKTtpZihcIiQhXCI9PT1lLmRhdGEpe2Q9ZS5uZXh0U2libGluZyYmZS5uZXh0U2libGluZy5kYXRhc2V0O1xuaWYoZCl2YXIgaD1kLmRnc3Q7ZD1oO2Y9RXJyb3IocCg0MTkpKTtkPUxpKGYsZCx2b2lkIDApO3JldHVybiB0aihhLGIsZyxkKX1oPTAhPT0oZyZhLmNoaWxkTGFuZXMpO2lmKFVnfHxoKXtkPVI7aWYobnVsbCE9PWQpe3N3aXRjaChnJi1nKXtjYXNlIDQ6ZT0yO2JyZWFrO2Nhc2UgMTY6ZT04O2JyZWFrO2Nhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6Y2FzZSA0MTk0MzA0OmNhc2UgODM4ODYwODpjYXNlIDE2Nzc3MjE2OmNhc2UgMzM1NTQ0MzI6Y2FzZSA2NzEwODg2NDplPTMyO2JyZWFrO2Nhc2UgNTM2ODcwOTEyOmU9MjY4NDM1NDU2O2JyZWFrO2RlZmF1bHQ6ZT0wfWU9MCE9PShlJihkLnN1c3BlbmRlZExhbmVzfGcpKT8wOmU7XG4wIT09ZSYmZSE9PWYucmV0cnlMYW5lJiYoZi5yZXRyeUxhbmU9ZSxaZyhhLGUpLG1oKGQsYSxlLC0xKSl9dWooKTtkPUxpKEVycm9yKHAoNDIxKSkpO3JldHVybiB0aihhLGIsZyxkKX1pZihcIiQ/XCI9PT1lLmRhdGEpcmV0dXJuIGIuZmxhZ3N8PTEyOCxiLmNoaWxkPWEuY2hpbGQsYj12ai5iaW5kKG51bGwsYSksZS5fcmVhY3RSZXRyeT1iLG51bGw7YT1mLnRyZWVDb250ZXh0O3lnPUxmKGUubmV4dFNpYmxpbmcpO3hnPWI7ST0hMDt6Zz1udWxsO251bGwhPT1hJiYob2dbcGcrK109cmcsb2dbcGcrK109c2csb2dbcGcrK109cWcscmc9YS5pZCxzZz1hLm92ZXJmbG93LHFnPWIpO2I9cmooYixkLmNoaWxkcmVuKTtiLmZsYWdzfD00MDk2O3JldHVybiBifWZ1bmN0aW9uIHdqKGEsYixjKXthLmxhbmVzfD1iO3ZhciBkPWEuYWx0ZXJuYXRlO251bGwhPT1kJiYoZC5sYW5lc3w9Yik7U2coYS5yZXR1cm4sYixjKX1cbmZ1bmN0aW9uIHhqKGEsYixjLGQsZSl7dmFyIGY9YS5tZW1vaXplZFN0YXRlO251bGw9PT1mP2EubWVtb2l6ZWRTdGF0ZT17aXNCYWNrd2FyZHM6YixyZW5kZXJpbmc6bnVsbCxyZW5kZXJpbmdTdGFydFRpbWU6MCxsYXN0OmQsdGFpbDpjLHRhaWxNb2RlOmV9OihmLmlzQmFja3dhcmRzPWIsZi5yZW5kZXJpbmc9bnVsbCxmLnJlbmRlcmluZ1N0YXJ0VGltZT0wLGYubGFzdD1kLGYudGFpbD1jLGYudGFpbE1vZGU9ZSl9XG5mdW5jdGlvbiB5aihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO1lpKGEsYixkLmNoaWxkcmVuLGMpO2Q9TS5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZmxhZ3N8PTEyODtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmMTI4KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJndqKGEsYyxiKTtlbHNlIGlmKDE5PT09YS50YWcpd2ooYSxjLGIpO2Vsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PWIpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9ZCY9MX1HKE0sZCk7aWYoMD09PShiLm1vZGUmMSkpYi5tZW1vaXplZFN0YXRlPVxubnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspYT1jLmFsdGVybmF0ZSxudWxsIT09YSYmbnVsbD09PU1oKGEpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7eGooYiwhMSxlLGMsZik7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1NaChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9eGooYiwhMCxjLG51bGwsZik7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6eGooYiwhMSxudWxsLG51bGwsdm9pZCAwKTticmVhaztkZWZhdWx0OmIubWVtb2l6ZWRTdGF0ZT1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gamooYSxiKXswPT09KGIubW9kZSYxKSYmbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mil9ZnVuY3Rpb24gJGkoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO2hofD1iLmxhbmVzO2lmKDA9PT0oYyZiLmNoaWxkTGFuZXMpKXJldHVybiBudWxsO2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcihwKDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz13aChhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9d2goYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHpqKGEsYixjKXtzd2l0Y2goYi50YWcpe2Nhc2UgMzpsaihiKTtJZygpO2JyZWFrO2Nhc2UgNTpLaChiKTticmVhaztjYXNlIDE6WmYoYi50eXBlKSYmY2coYik7YnJlYWs7Y2FzZSA0OkloKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDp2YXIgZD1iLnR5cGUuX2NvbnRleHQsZT1iLm1lbW9pemVkUHJvcHMudmFsdWU7RyhNZyxkLl9jdXJyZW50VmFsdWUpO2QuX2N1cnJlbnRWYWx1ZT1lO2JyZWFrO2Nhc2UgMTM6ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQpe2lmKG51bGwhPT1kLmRlaHlkcmF0ZWQpcmV0dXJuIEcoTSxNLmN1cnJlbnQmMSksYi5mbGFnc3w9MTI4LG51bGw7aWYoMCE9PShjJmIuY2hpbGQuY2hpbGRMYW5lcykpcmV0dXJuIHBqKGEsYixjKTtHKE0sTS5jdXJyZW50JjEpO2E9JGkoYSxiLGMpO3JldHVybiBudWxsIT09YT9hLnNpYmxpbmc6bnVsbH1HKE0sTS5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmXG5iLmNoaWxkTGFuZXMpO2lmKDAhPT0oYS5mbGFncyYxMjgpKXtpZihkKXJldHVybiB5aihhLGIsYyk7Yi5mbGFnc3w9MTI4fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCxlLmxhc3RFZmZlY3Q9bnVsbCk7RyhNLE0uY3VycmVudCk7aWYoZClicmVhaztlbHNlIHJldHVybiBudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gYi5sYW5lcz0wLGVqKGEsYixjKX1yZXR1cm4gJGkoYSxiLGMpfXZhciBBaixCaixDaixEajtcbkFqPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtCaj1mdW5jdGlvbigpe307XG5Daj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLm1lbW9pemVkUHJvcHM7aWYoZSE9PWQpe2E9Yi5zdGF0ZU5vZGU7SGgoRWguY3VycmVudCk7dmFyIGY9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6ZT1ZYShhLGUpO2Q9WWEoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPUEoe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1BKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1CZil9dWIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1sKXt2YXIgaD1lW2xdO2ZvcihnIGluIGgpaC5oYXNPd25Qcm9wZXJ0eShnKSYmXG4oY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihlYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8KGM9e30pLGNbZ109a1tnXSl9ZWxzZSBjfHwoZnx8KGY9W10pLGYucHVzaChsLFxuYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoZWEuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkQoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTooZj1mfHxbXSkucHVzaChsLGspKX1jJiYoZj1mfHxbXSkucHVzaChcInN0eWxlXCIsYyk7dmFyIGw9ZjtpZihiLnVwZGF0ZVF1ZXVlPWwpYi5mbGFnc3w9NH19O0RqPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiYoYi5mbGFnc3w9NCl9O1xuZnVuY3Rpb24gRWooYSxiKXtpZighSSlzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gUyhhKXt2YXIgYj1udWxsIT09YS5hbHRlcm5hdGUmJmEuYWx0ZXJuYXRlLmNoaWxkPT09YS5jaGlsZCxjPTAsZD0wO2lmKGIpZm9yKHZhciBlPWEuY2hpbGQ7bnVsbCE9PWU7KWN8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGR8PWUuc3VidHJlZUZsYWdzJjE0NjgwMDY0LGR8PWUuZmxhZ3MmMTQ2ODAwNjQsZS5yZXR1cm49YSxlPWUuc2libGluZztlbHNlIGZvcihlPWEuY2hpbGQ7bnVsbCE9PWU7KWN8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGR8PWUuc3VidHJlZUZsYWdzLGR8PWUuZmxhZ3MsZS5yZXR1cm49YSxlPWUuc2libGluZzthLnN1YnRyZWVGbGFnc3w9ZDthLmNoaWxkTGFuZXM9YztyZXR1cm4gYn1cbmZ1bmN0aW9uIEZqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wczt3ZyhiKTtzd2l0Y2goYi50YWcpe2Nhc2UgMjpjYXNlIDE2OmNhc2UgMTU6Y2FzZSAwOmNhc2UgMTE6Y2FzZSA3OmNhc2UgODpjYXNlIDEyOmNhc2UgOTpjYXNlIDE0OnJldHVybiBTKGIpLG51bGw7Y2FzZSAxOnJldHVybiBaZihiLnR5cGUpJiYkZigpLFMoYiksbnVsbDtjYXNlIDM6ZD1iLnN0YXRlTm9kZTtKaCgpO0UoV2YpO0UoSCk7T2goKTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpR2coYik/Yi5mbGFnc3w9NDpudWxsPT09YXx8YS5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCYmMD09PShiLmZsYWdzJjI1Nil8fChiLmZsYWdzfD0xMDI0LG51bGwhPT16ZyYmKEdqKHpnKSx6Zz1udWxsKSk7QmooYSxiKTtTKGIpO3JldHVybiBudWxsO2Nhc2UgNTpMaChiKTt2YXIgZT1IaChHaC5jdXJyZW50KTtcbmM9Yi50eXBlO2lmKG51bGwhPT1hJiZudWxsIT1iLnN0YXRlTm9kZSlDaihhLGIsYyxkLGUpLGEucmVmIT09Yi5yZWYmJihiLmZsYWdzfD01MTIsYi5mbGFnc3w9MjA5NzE1Mik7ZWxzZXtpZighZCl7aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHAoMTY2KSk7UyhiKTtyZXR1cm4gbnVsbH1hPUhoKEVoLmN1cnJlbnQpO2lmKEdnKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi50eXBlO3ZhciBmPWIubWVtb2l6ZWRQcm9wcztkW09mXT1iO2RbUGZdPWY7YT0wIT09KGIubW9kZSYxKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkQoXCJjYW5jZWxcIixkKTtEKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkQoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPGxmLmxlbmd0aDtlKyspRChsZltlXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RChcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RChcImVycm9yXCIsXG5kKTtEKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RChcInRvZ2dsZVwiLGQpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGQsZik7RChcImludmFsaWRcIixkKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZC5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0QoXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxEKFwiaW52YWxpZFwiLGQpfXViKGMsZik7ZT1udWxsO2Zvcih2YXIgZyBpbiBmKWlmKGYuaGFzT3duUHJvcGVydHkoZykpe3ZhciBoPWZbZ107XCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGg/ZC50ZXh0Q29udGVudCE9PWgmJighMCE9PWYuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLnRleHRDb250ZW50LGgsYSksZT1bXCJjaGlsZHJlblwiLGhdKTpcIm51bWJlclwiPT09dHlwZW9mIGgmJmQudGV4dENvbnRlbnQhPT1cIlwiK2gmJighMCE9PWYuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLnRleHRDb250ZW50LFxuaCxhKSxlPVtcImNoaWxkcmVuXCIsXCJcIitoXSk6ZWEuaGFzT3duUHJvcGVydHkoZykmJm51bGwhPWgmJlwib25TY3JvbGxcIj09PWcmJkQoXCJzY3JvbGxcIixkKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7ZGIoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1CZil9ZD1lO2IudXBkYXRlUXVldWU9ZDtudWxsIT09ZCYmKGIuZmxhZ3N8PTQpfWVsc2V7Zz05PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudDtcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWEmJihhPWtiKGMpKTtcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlxuXCJzdHJpbmdcIj09PXR5cGVvZiBkLmlzP2E9Zy5jcmVhdGVFbGVtZW50KGMse2lzOmQuaXN9KTooYT1nLmNyZWF0ZUVsZW1lbnQoYyksXCJzZWxlY3RcIj09PWMmJihnPWEsZC5tdWx0aXBsZT9nLm11bHRpcGxlPSEwOmQuc2l6ZSYmKGcuc2l6ZT1kLnNpemUpKSk6YT1nLmNyZWF0ZUVsZW1lbnROUyhhLGMpO2FbT2ZdPWI7YVtQZl09ZDtBaihhLGIsITEsITEpO2Iuc3RhdGVOb2RlPWE7YTp7Zz12YihjLGQpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RChcImNhbmNlbFwiLGEpO0QoXCJjbG9zZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkQoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxsZi5sZW5ndGg7ZSsrKUQobGZbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpEKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RChcImVycm9yXCIsXG5hKTtEKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwiZGV0YWlsc1wiOkQoXCJ0b2dnbGVcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoYSxkKTtlPVlhKGEsZCk7RChcImludmFsaWRcIixhKTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1kO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZC5tdWx0aXBsZX07ZT1BKHt9LGQse3ZhbHVlOnZvaWQgMH0pO0QoXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoYSxkKTtlPWdiKGEsZCk7RChcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH11YihjLGUpO2g9ZTtmb3IoZiBpbiBoKWlmKGguaGFzT3duUHJvcGVydHkoZikpe3ZhciBrPWhbZl07XCJzdHlsZVwiPT09Zj9zYihhLGspOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWY/KGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmbmIoYSxrKSk6XCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGs/KFwidGV4dGFyZWFcIiE9PVxuY3x8XCJcIiE9PWspJiZvYihhLGspOlwibnVtYmVyXCI9PT10eXBlb2YgayYmb2IoYSxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1mJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ZiYmXCJhdXRvRm9jdXNcIiE9PWYmJihlYS5oYXNPd25Qcm9wZXJ0eShmKT9udWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1mJiZEKFwic2Nyb2xsXCIsYSk6bnVsbCE9ayYmdGEoYSxmLGssZykpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShhKTtkYihhLGQsITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGEpO2piKGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1kLnZhbHVlJiZhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitTYShkLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEubXVsdGlwbGU9ISFkLm11bHRpcGxlO2Y9ZC52YWx1ZTtudWxsIT1mP2ZiKGEsISFkLm11bHRpcGxlLGYsITEpOm51bGwhPWQuZGVmYXVsdFZhbHVlJiZmYihhLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSxcbiEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLm9uQ2xpY2smJihhLm9uY2xpY2s9QmYpfXN3aXRjaChjKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOmQ9ISFkLmF1dG9Gb2N1czticmVhayBhO2Nhc2UgXCJpbWdcIjpkPSEwO2JyZWFrIGE7ZGVmYXVsdDpkPSExfX1kJiYoYi5mbGFnc3w9NCl9bnVsbCE9PWIucmVmJiYoYi5mbGFnc3w9NTEyLGIuZmxhZ3N8PTIwOTcxNTIpfVMoYik7cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKURqKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcihwKDE2NikpO2M9SGgoR2guY3VycmVudCk7SGgoRWguY3VycmVudCk7aWYoR2coYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLm1lbW9pemVkUHJvcHM7ZFtPZl09YjtpZihmPWQubm9kZVZhbHVlIT09YylpZihhPVxueGcsbnVsbCE9PWEpc3dpdGNoKGEudGFnKXtjYXNlIDM6QWYoZC5ub2RlVmFsdWUsYywwIT09KGEubW9kZSYxKSk7YnJlYWs7Y2FzZSA1OiEwIT09YS5tZW1vaXplZFByb3BzLnN1cHByZXNzSHlkcmF0aW9uV2FybmluZyYmQWYoZC5ub2RlVmFsdWUsYywwIT09KGEubW9kZSYxKSl9ZiYmKGIuZmxhZ3N8PTQpfWVsc2UgZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbT2ZdPWIsYi5zdGF0ZU5vZGU9ZH1TKGIpO3JldHVybiBudWxsO2Nhc2UgMTM6RShNKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09YXx8bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZS5kZWh5ZHJhdGVkKXtpZihJJiZudWxsIT09eWcmJjAhPT0oYi5tb2RlJjEpJiYwPT09KGIuZmxhZ3MmMTI4KSlIZygpLElnKCksYi5mbGFnc3w9OTg1NjAsZj0hMTtlbHNlIGlmKGY9R2coYiksbnVsbCE9PWQmJm51bGwhPT1kLmRlaHlkcmF0ZWQpe2lmKG51bGw9PT1cbmEpe2lmKCFmKXRocm93IEVycm9yKHAoMzE4KSk7Zj1iLm1lbW9pemVkU3RhdGU7Zj1udWxsIT09Zj9mLmRlaHlkcmF0ZWQ6bnVsbDtpZighZil0aHJvdyBFcnJvcihwKDMxNykpO2ZbT2ZdPWJ9ZWxzZSBJZygpLDA9PT0oYi5mbGFncyYxMjgpJiYoYi5tZW1vaXplZFN0YXRlPW51bGwpLGIuZmxhZ3N8PTQ7UyhiKTtmPSExfWVsc2UgbnVsbCE9PXpnJiYoR2ooemcpLHpnPW51bGwpLGY9ITA7aWYoIWYpcmV0dXJuIGIuZmxhZ3MmNjU1MzY/YjpudWxsfWlmKDAhPT0oYi5mbGFncyYxMjgpKXJldHVybiBiLmxhbmVzPWMsYjtkPW51bGwhPT1kO2QhPT0obnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUpJiZkJiYoYi5jaGlsZC5mbGFnc3w9ODE5MiwwIT09KGIubW9kZSYxKSYmKG51bGw9PT1hfHwwIT09KE0uY3VycmVudCYxKT8wPT09VCYmKFQ9Myk6dWooKSkpO251bGwhPT1iLnVwZGF0ZVF1ZXVlJiYoYi5mbGFnc3w9NCk7UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIEpoKCksXG5CaihhLGIpLG51bGw9PT1hJiZzZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxTKGIpLG51bGw7Y2FzZSAxMDpyZXR1cm4gUmcoYi50eXBlLl9jb250ZXh0KSxTKGIpLG51bGw7Y2FzZSAxNzpyZXR1cm4gWmYoYi50eXBlKSYmJGYoKSxTKGIpLG51bGw7Y2FzZSAxOTpFKE0pO2Y9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1mKXJldHVybiBTKGIpLG51bGw7ZD0wIT09KGIuZmxhZ3MmMTI4KTtnPWYucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGQpRWooZiwhMSk7ZWxzZXtpZigwIT09VHx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyYxMjgpKWZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtnPU1oKGEpO2lmKG51bGwhPT1nKXtiLmZsYWdzfD0xMjg7RWooZiwhMSk7ZD1nLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiYoYi51cGRhdGVRdWV1ZT1kLGIuZmxhZ3N8PTQpO2Iuc3VidHJlZUZsYWdzPTA7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MTQ2ODAwNjYsXG5nPWYuYWx0ZXJuYXRlLG51bGw9PT1nPyhmLmNoaWxkTGFuZXM9MCxmLmxhbmVzPWEsZi5jaGlsZD1udWxsLGYuc3VidHJlZUZsYWdzPTAsZi5tZW1vaXplZFByb3BzPW51bGwsZi5tZW1vaXplZFN0YXRlPW51bGwsZi51cGRhdGVRdWV1ZT1udWxsLGYuZGVwZW5kZW5jaWVzPW51bGwsZi5zdGF0ZU5vZGU9bnVsbCk6KGYuY2hpbGRMYW5lcz1nLmNoaWxkTGFuZXMsZi5sYW5lcz1nLmxhbmVzLGYuY2hpbGQ9Zy5jaGlsZCxmLnN1YnRyZWVGbGFncz0wLGYuZGVsZXRpb25zPW51bGwsZi5tZW1vaXplZFByb3BzPWcubWVtb2l6ZWRQcm9wcyxmLm1lbW9pemVkU3RhdGU9Zy5tZW1vaXplZFN0YXRlLGYudXBkYXRlUXVldWU9Zy51cGRhdGVRdWV1ZSxmLnR5cGU9Zy50eXBlLGE9Zy5kZXBlbmRlbmNpZXMsZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztHKE0sTS5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1cbmEuc2libGluZ31udWxsIT09Zi50YWlsJiZCKCk+SGomJihiLmZsYWdzfD0xMjgsZD0hMCxFaihmLCExKSxiLmxhbmVzPTQxOTQzMDQpfWVsc2V7aWYoIWQpaWYoYT1NaChnKSxudWxsIT09YSl7aWYoYi5mbGFnc3w9MTI4LGQ9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEVqKGYsITApLG51bGw9PT1mLnRhaWwmJlwiaGlkZGVuXCI9PT1mLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFJKXJldHVybiBTKGIpLG51bGx9ZWxzZSAyKkIoKS1mLnJlbmRlcmluZ1N0YXJ0VGltZT5IaiYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD0xMjgsZD0hMCxFaihmLCExKSxiLmxhbmVzPTQxOTQzMDQpO2YuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGM9Zi5sYXN0LG51bGwhPT1jP2Muc2libGluZz1nOmIuY2hpbGQ9ZyxmLmxhc3Q9Zyl9aWYobnVsbCE9PWYudGFpbClyZXR1cm4gYj1mLnRhaWwsZi5yZW5kZXJpbmc9XG5iLGYudGFpbD1iLnNpYmxpbmcsZi5yZW5kZXJpbmdTdGFydFRpbWU9QigpLGIuc2libGluZz1udWxsLGM9TS5jdXJyZW50LEcoTSxkP2MmMXwyOmMmMSksYjtTKGIpO3JldHVybiBudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gSWooKSxkPW51bGwhPT1iLm1lbW9pemVkU3RhdGUsbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT1kJiYoYi5mbGFnc3w9ODE5MiksZCYmMCE9PShiLm1vZGUmMSk/MCE9PShnaiYxMDczNzQxODI0KSYmKFMoYiksYi5zdWJ0cmVlRmxhZ3MmNiYmKGIuZmxhZ3N8PTgxOTIpKTpTKGIpLG51bGw7Y2FzZSAyNDpyZXR1cm4gbnVsbDtjYXNlIDI1OnJldHVybiBudWxsfXRocm93IEVycm9yKHAoMTU2LGIudGFnKSk7fVxuZnVuY3Rpb24gSmooYSxiKXt3ZyhiKTtzd2l0Y2goYi50YWcpe2Nhc2UgMTpyZXR1cm4gWmYoYi50eXBlKSYmJGYoKSxhPWIuZmxhZ3MsYSY2NTUzNj8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDM6cmV0dXJuIEpoKCksRShXZiksRShIKSxPaCgpLGE9Yi5mbGFncywwIT09KGEmNjU1MzYpJiYwPT09KGEmMTI4KT8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDU6cmV0dXJuIExoKGIpLG51bGw7Y2FzZSAxMzpFKE0pO2E9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXtpZihudWxsPT09Yi5hbHRlcm5hdGUpdGhyb3cgRXJyb3IocCgzNDApKTtJZygpfWE9Yi5mbGFncztyZXR1cm4gYSY2NTUzNj8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDE5OnJldHVybiBFKE0pLG51bGw7Y2FzZSA0OnJldHVybiBKaCgpLG51bGw7Y2FzZSAxMDpyZXR1cm4gUmcoYi50eXBlLl9jb250ZXh0KSxudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gSWooKSxcbm51bGw7Y2FzZSAyNDpyZXR1cm4gbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX12YXIgS2o9ITEsVT0hMSxMaj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldCxWPW51bGw7ZnVuY3Rpb24gTWooYSxiKXt2YXIgYz1hLnJlZjtpZihudWxsIT09YylpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYyl0cnl7YyhudWxsKX1jYXRjaChkKXtXKGEsYixkKX1lbHNlIGMuY3VycmVudD1udWxsfWZ1bmN0aW9uIE5qKGEsYixjKXt0cnl7YygpfWNhdGNoKGQpe1coYSxiLGQpfX12YXIgT2o9ITE7XG5mdW5jdGlvbiBQaihhLGIpe0NmPWRkO2E9TWUoKTtpZihOZShhKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gYSl2YXIgYz17c3RhcnQ6YS5zZWxlY3Rpb25TdGFydCxlbmQ6YS5zZWxlY3Rpb25FbmR9O2Vsc2UgYTp7Yz0oYz1hLm93bmVyRG9jdW1lbnQpJiZjLmRlZmF1bHRWaWV3fHx3aW5kb3c7dmFyIGQ9Yy5nZXRTZWxlY3Rpb24mJmMuZ2V0U2VsZWN0aW9uKCk7aWYoZCYmMCE9PWQucmFuZ2VDb3VudCl7Yz1kLmFuY2hvck5vZGU7dmFyIGU9ZC5hbmNob3JPZmZzZXQsZj1kLmZvY3VzTm9kZTtkPWQuZm9jdXNPZmZzZXQ7dHJ5e2Mubm9kZVR5cGUsZi5ub2RlVHlwZX1jYXRjaChGKXtjPW51bGw7YnJlYWsgYX12YXIgZz0wLGg9LTEsaz0tMSxsPTAsbT0wLHE9YSxyPW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgeTs7KXtxIT09Y3x8MCE9PWUmJjMhPT1xLm5vZGVUeXBlfHwoaD1nK2UpO3EhPT1mfHwwIT09ZCYmMyE9PXEubm9kZVR5cGV8fChrPWcrZCk7Mz09PXEubm9kZVR5cGUmJihnKz1cbnEubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PSh5PXEuZmlyc3RDaGlsZCkpYnJlYWs7cj1xO3E9eX1mb3IoOzspe2lmKHE9PT1hKWJyZWFrIGI7cj09PWMmJisrbD09PWUmJihoPWcpO3I9PT1mJiYrK209PT1kJiYoaz1nKTtpZihudWxsIT09KHk9cS5uZXh0U2libGluZykpYnJlYWs7cT1yO3I9cS5wYXJlbnROb2RlfXE9eX1jPS0xPT09aHx8LTE9PT1rP251bGw6e3N0YXJ0OmgsZW5kOmt9fWVsc2UgYz1udWxsfWM9Y3x8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgYz1udWxsO0RmPXtmb2N1c2VkRWxlbTphLHNlbGVjdGlvblJhbmdlOmN9O2RkPSExO2ZvcihWPWI7bnVsbCE9PVY7KWlmKGI9VixhPWIuY2hpbGQsMCE9PShiLnN1YnRyZWVGbGFncyYxMDI4KSYmbnVsbCE9PWEpYS5yZXR1cm49YixWPWE7ZWxzZSBmb3IoO251bGwhPT1WOyl7Yj1WO3RyeXt2YXIgbj1iLmFsdGVybmF0ZTtpZigwIT09KGIuZmxhZ3MmMTAyNCkpc3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmJyZWFrO1xuY2FzZSAxOmlmKG51bGwhPT1uKXt2YXIgdD1uLm1lbW9pemVkUHJvcHMsSj1uLm1lbW9pemVkU3RhdGUseD1iLnN0YXRlTm9kZSx3PXguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT90OkxnKGIudHlwZSx0KSxKKTt4Ll9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPXd9YnJlYWs7Y2FzZSAzOnZhciB1PWIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87MT09PXUubm9kZVR5cGU/dS50ZXh0Q29udGVudD1cIlwiOjk9PT11Lm5vZGVUeXBlJiZ1LmRvY3VtZW50RWxlbWVudCYmdS5yZW1vdmVDaGlsZCh1LmRvY3VtZW50RWxlbWVudCk7YnJlYWs7Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMTYzKSk7fX1jYXRjaChGKXtXKGIsYi5yZXR1cm4sRil9YT1iLnNpYmxpbmc7aWYobnVsbCE9PWEpe2EucmV0dXJuPWIucmV0dXJuO1Y9YTticmVha31WPWIucmV0dXJufW49T2o7T2o9ITE7cmV0dXJuIG59XG5mdW5jdGlvbiBRaihhLGIsYyl7dmFyIGQ9Yi51cGRhdGVRdWV1ZTtkPW51bGwhPT1kP2QubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1kKXt2YXIgZT1kPWQubmV4dDtkb3tpZigoZS50YWcmYSk9PT1hKXt2YXIgZj1lLmRlc3Ryb3k7ZS5kZXN0cm95PXZvaWQgMDt2b2lkIDAhPT1mJiZOaihiLGMsZil9ZT1lLm5leHR9d2hpbGUoZSE9PWQpfX1mdW5jdGlvbiBSaihhLGIpe2I9Yi51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXt2YXIgYz1iPWIubmV4dDtkb3tpZigoYy50YWcmYSk9PT1hKXt2YXIgZD1jLmNyZWF0ZTtjLmRlc3Ryb3k9ZCgpfWM9Yy5uZXh0fXdoaWxlKGMhPT1iKX19ZnVuY3Rpb24gU2ooYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpe3ZhciBjPWEuc3RhdGVOb2RlO3N3aXRjaChhLnRhZyl7Y2FzZSA1OmE9YzticmVhaztkZWZhdWx0OmE9Y31cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmIuY3VycmVudD1hfX1cbmZ1bmN0aW9uIFRqKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO251bGwhPT1iJiYoYS5hbHRlcm5hdGU9bnVsbCxUaihiKSk7YS5jaGlsZD1udWxsO2EuZGVsZXRpb25zPW51bGw7YS5zaWJsaW5nPW51bGw7NT09PWEudGFnJiYoYj1hLnN0YXRlTm9kZSxudWxsIT09YiYmKGRlbGV0ZSBiW09mXSxkZWxldGUgYltQZl0sZGVsZXRlIGJbb2ZdLGRlbGV0ZSBiW1FmXSxkZWxldGUgYltSZl0pKTthLnN0YXRlTm9kZT1udWxsO2EucmV0dXJuPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLm1lbW9pemVkUHJvcHM9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2Euc3RhdGVOb2RlPW51bGw7YS51cGRhdGVRdWV1ZT1udWxsfWZ1bmN0aW9uIFVqKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24gVmooYSl7YTpmb3IoOzspe2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8VWooYS5yZXR1cm4pKXJldHVybiBudWxsO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjtmb3IoYT1hLnNpYmxpbmc7NSE9PWEudGFnJiY2IT09YS50YWcmJjE4IT09YS50YWc7KXtpZihhLmZsYWdzJjIpY29udGludWUgYTtpZihudWxsPT09YS5jaGlsZHx8ND09PWEudGFnKWNvbnRpbnVlIGE7ZWxzZSBhLmNoaWxkLnJldHVybj1hLGE9YS5jaGlsZH1pZighKGEuZmxhZ3MmMikpcmV0dXJuIGEuc3RhdGVOb2RlfX1cbmZ1bmN0aW9uIFdqKGEsYixjKXt2YXIgZD1hLnRhZztpZig1PT09ZHx8Nj09PWQpYT1hLnN0YXRlTm9kZSxiPzg9PT1jLm5vZGVUeXBlP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxiKTpjLmluc2VydEJlZm9yZShhLGIpOig4PT09Yy5ub2RlVHlwZT8oYj1jLnBhcmVudE5vZGUsYi5pbnNlcnRCZWZvcmUoYSxjKSk6KGI9YyxiLmFwcGVuZENoaWxkKGEpKSxjPWMuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09YyYmdm9pZCAwIT09Y3x8bnVsbCE9PWIub25jbGlja3x8KGIub25jbGljaz1CZikpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihXaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KVdqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIFhqKGEsYixjKXt2YXIgZD1hLnRhZztpZig1PT09ZHx8Nj09PWQpYT1hLnN0YXRlTm9kZSxiP2MuaW5zZXJ0QmVmb3JlKGEsYik6Yy5hcHBlbmRDaGlsZChhKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoWGooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylYaihhLGIsYyksYT1hLnNpYmxpbmd9dmFyIFg9bnVsbCxZaj0hMTtmdW5jdGlvbiBaaihhLGIsYyl7Zm9yKGM9Yy5jaGlsZDtudWxsIT09YzspYWsoYSxiLGMpLGM9Yy5zaWJsaW5nfVxuZnVuY3Rpb24gYWsoYSxiLGMpe2lmKGxjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbGMub25Db21taXRGaWJlclVubW91bnQpdHJ5e2xjLm9uQ29tbWl0RmliZXJVbm1vdW50KGtjLGMpfWNhdGNoKGgpe31zd2l0Y2goYy50YWcpe2Nhc2UgNTpVfHxNaihjLGIpO2Nhc2UgNjp2YXIgZD1YLGU9WWo7WD1udWxsO1pqKGEsYixjKTtYPWQ7WWo9ZTtudWxsIT09WCYmKFlqPyhhPVgsYz1jLnN0YXRlTm9kZSw4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyk6YS5yZW1vdmVDaGlsZChjKSk6WC5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSkpO2JyZWFrO2Nhc2UgMTg6bnVsbCE9PVgmJihZaj8oYT1YLGM9Yy5zdGF0ZU5vZGUsOD09PWEubm9kZVR5cGU/S2YoYS5wYXJlbnROb2RlLGMpOjE9PT1hLm5vZGVUeXBlJiZLZihhLGMpLGJkKGEpKTpLZihYLGMuc3RhdGVOb2RlKSk7YnJlYWs7Y2FzZSA0OmQ9WDtlPVlqO1g9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztZaj0hMDtcblpqKGEsYixjKTtYPWQ7WWo9ZTticmVhaztjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6aWYoIVUmJihkPWMudXBkYXRlUXVldWUsbnVsbCE9PWQmJihkPWQubGFzdEVmZmVjdCxudWxsIT09ZCkpKXtlPWQ9ZC5uZXh0O2Rve3ZhciBmPWUsZz1mLmRlc3Ryb3k7Zj1mLnRhZzt2b2lkIDAhPT1nJiYoMCE9PShmJjIpP05qKGMsYixnKTowIT09KGYmNCkmJk5qKGMsYixnKSk7ZT1lLm5leHR9d2hpbGUoZSE9PWQpfVpqKGEsYixjKTticmVhaztjYXNlIDE6aWYoIVUmJihNaihjLGIpLGQ9Yy5zdGF0ZU5vZGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50V2lsbFVubW91bnQpKXRyeXtkLnByb3BzPWMubWVtb2l6ZWRQcm9wcyxkLnN0YXRlPWMubWVtb2l6ZWRTdGF0ZSxkLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goaCl7VyhjLGIsaCl9WmooYSxiLGMpO2JyZWFrO2Nhc2UgMjE6WmooYSxiLGMpO2JyZWFrO2Nhc2UgMjI6Yy5tb2RlJjE/KFU9KGQ9VSl8fG51bGwhPT1cbmMubWVtb2l6ZWRTdGF0ZSxaaihhLGIsYyksVT1kKTpaaihhLGIsYyk7YnJlYWs7ZGVmYXVsdDpaaihhLGIsYyl9fWZ1bmN0aW9uIGJrKGEpe3ZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2EudXBkYXRlUXVldWU9bnVsbDt2YXIgYz1hLnN0YXRlTm9kZTtudWxsPT09YyYmKGM9YS5zdGF0ZU5vZGU9bmV3IExqKTtiLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9Y2suYmluZChudWxsLGEsYik7Yy5oYXMoYil8fChjLmFkZChiKSxiLnRoZW4oZCxkKSl9KX19XG5mdW5jdGlvbiBkayhhLGIpe3ZhciBjPWIuZGVsZXRpb25zO2lmKG51bGwhPT1jKWZvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO3RyeXt2YXIgZj1hLGc9YixoPWc7YTpmb3IoO251bGwhPT1oOyl7c3dpdGNoKGgudGFnKXtjYXNlIDU6WD1oLnN0YXRlTm9kZTtZaj0hMTticmVhayBhO2Nhc2UgMzpYPWguc3RhdGVOb2RlLmNvbnRhaW5lckluZm87WWo9ITA7YnJlYWsgYTtjYXNlIDQ6WD1oLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO1lqPSEwO2JyZWFrIGF9aD1oLnJldHVybn1pZihudWxsPT09WCl0aHJvdyBFcnJvcihwKDE2MCkpO2FrKGYsZyxlKTtYPW51bGw7WWo9ITE7dmFyIGs9ZS5hbHRlcm5hdGU7bnVsbCE9PWsmJihrLnJldHVybj1udWxsKTtlLnJldHVybj1udWxsfWNhdGNoKGwpe1coZSxiLGwpfX1pZihiLnN1YnRyZWVGbGFncyYxMjg1NClmb3IoYj1iLmNoaWxkO251bGwhPT1iOyllayhiLGEpLGI9Yi5zaWJsaW5nfVxuZnVuY3Rpb24gZWsoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZSxkPWEuZmxhZ3M7c3dpdGNoKGEudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6ZGsoYixhKTtmayhhKTtpZihkJjQpe3RyeXtRaigzLGEsYS5yZXR1cm4pLFJqKDMsYSl9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfXRyeXtRaig1LGEsYS5yZXR1cm4pfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSAxOmRrKGIsYSk7ZmsoYSk7ZCY1MTImJm51bGwhPT1jJiZNaihjLGMucmV0dXJuKTticmVhaztjYXNlIDU6ZGsoYixhKTtmayhhKTtkJjUxMiYmbnVsbCE9PWMmJk1qKGMsYy5yZXR1cm4pO2lmKGEuZmxhZ3MmMzIpe3ZhciBlPWEuc3RhdGVOb2RlO3RyeXtvYihlLFwiXCIpfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19aWYoZCY0JiYoZT1hLnN0YXRlTm9kZSxudWxsIT1lKSl7dmFyIGY9YS5tZW1vaXplZFByb3BzLGc9bnVsbCE9PWM/Yy5tZW1vaXplZFByb3BzOmYsaD1hLnR5cGUsaz1hLnVwZGF0ZVF1ZXVlO1xuYS51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1rKXRyeXtcImlucHV0XCI9PT1oJiZcInJhZGlvXCI9PT1mLnR5cGUmJm51bGwhPWYubmFtZSYmYWIoZSxmKTt2YihoLGcpO3ZhciBsPXZiKGgsZik7Zm9yKGc9MDtnPGsubGVuZ3RoO2crPTIpe3ZhciBtPWtbZ10scT1rW2crMV07XCJzdHlsZVwiPT09bT9zYihlLHEpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PW0/bmIoZSxxKTpcImNoaWxkcmVuXCI9PT1tP29iKGUscSk6dGEoZSxtLHEsbCl9c3dpdGNoKGgpe2Nhc2UgXCJpbnB1dFwiOmJiKGUsZik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoZSxmKTticmVhaztjYXNlIFwic2VsZWN0XCI6dmFyIHI9ZS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlO2UuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWYubXVsdGlwbGU7dmFyIHk9Zi52YWx1ZTtudWxsIT15P2ZiKGUsISFmLm11bHRpcGxlLHksITEpOnIhPT0hIWYubXVsdGlwbGUmJihudWxsIT1mLmRlZmF1bHRWYWx1ZT9mYihlLCEhZi5tdWx0aXBsZSxcbmYuZGVmYXVsdFZhbHVlLCEwKTpmYihlLCEhZi5tdWx0aXBsZSxmLm11bHRpcGxlP1tdOlwiXCIsITEpKX1lW1BmXT1mfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSA2OmRrKGIsYSk7ZmsoYSk7aWYoZCY0KXtpZihudWxsPT09YS5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IocCgxNjIpKTtlPWEuc3RhdGVOb2RlO2Y9YS5tZW1vaXplZFByb3BzO3RyeXtlLm5vZGVWYWx1ZT1mfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSAzOmRrKGIsYSk7ZmsoYSk7aWYoZCY0JiZudWxsIT09YyYmYy5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCl0cnl7YmQoYi5jb250YWluZXJJbmZvKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9YnJlYWs7Y2FzZSA0OmRrKGIsYSk7ZmsoYSk7YnJlYWs7Y2FzZSAxMzpkayhiLGEpO2ZrKGEpO2U9YS5jaGlsZDtlLmZsYWdzJjgxOTImJihmPW51bGwhPT1lLm1lbW9pemVkU3RhdGUsZS5zdGF0ZU5vZGUuaXNIaWRkZW49ZiwhZnx8XG5udWxsIT09ZS5hbHRlcm5hdGUmJm51bGwhPT1lLmFsdGVybmF0ZS5tZW1vaXplZFN0YXRlfHwoZ2s9QigpKSk7ZCY0JiZiayhhKTticmVhaztjYXNlIDIyOm09bnVsbCE9PWMmJm51bGwhPT1jLm1lbW9pemVkU3RhdGU7YS5tb2RlJjE/KFU9KGw9VSl8fG0sZGsoYixhKSxVPWwpOmRrKGIsYSk7ZmsoYSk7aWYoZCY4MTkyKXtsPW51bGwhPT1hLm1lbW9pemVkU3RhdGU7aWYoKGEuc3RhdGVOb2RlLmlzSGlkZGVuPWwpJiYhbSYmMCE9PShhLm1vZGUmMSkpZm9yKFY9YSxtPWEuY2hpbGQ7bnVsbCE9PW07KXtmb3IocT1WPW07bnVsbCE9PVY7KXtyPVY7eT1yLmNoaWxkO3N3aXRjaChyLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OlFqKDQscixyLnJldHVybik7YnJlYWs7Y2FzZSAxOk1qKHIsci5yZXR1cm4pO3ZhciBuPXIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuLmNvbXBvbmVudFdpbGxVbm1vdW50KXtkPXI7Yz1yLnJldHVybjt0cnl7Yj1kLG4ucHJvcHM9XG5iLm1lbW9pemVkUHJvcHMsbi5zdGF0ZT1iLm1lbW9pemVkU3RhdGUsbi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKHQpe1coZCxjLHQpfX1icmVhaztjYXNlIDU6TWoocixyLnJldHVybik7YnJlYWs7Y2FzZSAyMjppZihudWxsIT09ci5tZW1vaXplZFN0YXRlKXtoayhxKTtjb250aW51ZX19bnVsbCE9PXk/KHkucmV0dXJuPXIsVj15KTpoayhxKX1tPW0uc2libGluZ31hOmZvcihtPW51bGwscT1hOzspe2lmKDU9PT1xLnRhZyl7aWYobnVsbD09PW0pe209cTt0cnl7ZT1xLnN0YXRlTm9kZSxsPyhmPWUuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuc2V0UHJvcGVydHk/Zi5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpmLmRpc3BsYXk9XCJub25lXCIpOihoPXEuc3RhdGVOb2RlLGs9cS5tZW1vaXplZFByb3BzLnN0eWxlLGc9dm9pZCAwIT09ayYmbnVsbCE9PWsmJmsuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2suZGlzcGxheTpudWxsLGguc3R5bGUuZGlzcGxheT1cbnJiKFwiZGlzcGxheVwiLGcpKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fX1lbHNlIGlmKDY9PT1xLnRhZyl7aWYobnVsbD09PW0pdHJ5e3Euc3RhdGVOb2RlLm5vZGVWYWx1ZT1sP1wiXCI6cS5tZW1vaXplZFByb3BzfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19ZWxzZSBpZigoMjIhPT1xLnRhZyYmMjMhPT1xLnRhZ3x8bnVsbD09PXEubWVtb2l6ZWRTdGF0ZXx8cT09PWEpJiZudWxsIT09cS5jaGlsZCl7cS5jaGlsZC5yZXR1cm49cTtxPXEuY2hpbGQ7Y29udGludWV9aWYocT09PWEpYnJlYWsgYTtmb3IoO251bGw9PT1xLnNpYmxpbmc7KXtpZihudWxsPT09cS5yZXR1cm58fHEucmV0dXJuPT09YSlicmVhayBhO209PT1xJiYobT1udWxsKTtxPXEucmV0dXJufW09PT1xJiYobT1udWxsKTtxLnNpYmxpbmcucmV0dXJuPXEucmV0dXJuO3E9cS5zaWJsaW5nfX1icmVhaztjYXNlIDE5OmRrKGIsYSk7ZmsoYSk7ZCY0JiZiayhhKTticmVhaztjYXNlIDIxOmJyZWFrO2RlZmF1bHQ6ZGsoYixcbmEpLGZrKGEpfX1mdW5jdGlvbiBmayhhKXt2YXIgYj1hLmZsYWdzO2lmKGImMil7dHJ5e2E6e2Zvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKFVqKGMpKXt2YXIgZD1jO2JyZWFrIGF9Yz1jLnJldHVybn10aHJvdyBFcnJvcihwKDE2MCkpO31zd2l0Y2goZC50YWcpe2Nhc2UgNTp2YXIgZT1kLnN0YXRlTm9kZTtkLmZsYWdzJjMyJiYob2IoZSxcIlwiKSxkLmZsYWdzJj0tMzMpO3ZhciBmPVZqKGEpO1hqKGEsZixlKTticmVhaztjYXNlIDM6Y2FzZSA0OnZhciBnPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saD1WaihhKTtXaihhLGgsZyk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDE2MSkpO319Y2F0Y2goayl7VyhhLGEucmV0dXJuLGspfWEuZmxhZ3MmPS0zfWImNDA5NiYmKGEuZmxhZ3MmPS00MDk3KX1mdW5jdGlvbiBpayhhLGIsYyl7Vj1hO2prKGEsYixjKX1cbmZ1bmN0aW9uIGprKGEsYixjKXtmb3IodmFyIGQ9MCE9PShhLm1vZGUmMSk7bnVsbCE9PVY7KXt2YXIgZT1WLGY9ZS5jaGlsZDtpZigyMj09PWUudGFnJiZkKXt2YXIgZz1udWxsIT09ZS5tZW1vaXplZFN0YXRlfHxLajtpZighZyl7dmFyIGg9ZS5hbHRlcm5hdGUsaz1udWxsIT09aCYmbnVsbCE9PWgubWVtb2l6ZWRTdGF0ZXx8VTtoPUtqO3ZhciBsPVU7S2o9ZztpZigoVT1rKSYmIWwpZm9yKFY9ZTtudWxsIT09VjspZz1WLGs9Zy5jaGlsZCwyMj09PWcudGFnJiZudWxsIT09Zy5tZW1vaXplZFN0YXRlP2trKGUpOm51bGwhPT1rPyhrLnJldHVybj1nLFY9ayk6a2soZSk7Zm9yKDtudWxsIT09ZjspVj1mLGprKGYsYixjKSxmPWYuc2libGluZztWPWU7S2o9aDtVPWx9bGsoYSxiLGMpfWVsc2UgMCE9PShlLnN1YnRyZWVGbGFncyY4NzcyKSYmbnVsbCE9PWY/KGYucmV0dXJuPWUsVj1mKTpsayhhLGIsYyl9fVxuZnVuY3Rpb24gbGsoYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7aWYoMCE9PShiLmZsYWdzJjg3NzIpKXt2YXIgYz1iLmFsdGVybmF0ZTt0cnl7aWYoMCE9PShiLmZsYWdzJjg3NzIpKXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpVfHxSaig1LGIpO2JyZWFrO2Nhc2UgMTp2YXIgZD1iLnN0YXRlTm9kZTtpZihiLmZsYWdzJjQmJiFVKWlmKG51bGw9PT1jKWQuY29tcG9uZW50RGlkTW91bnQoKTtlbHNle3ZhciBlPWIuZWxlbWVudFR5cGU9PT1iLnR5cGU/Yy5tZW1vaXplZFByb3BzOkxnKGIudHlwZSxjLm1lbW9pemVkUHJvcHMpO2QuY29tcG9uZW50RGlkVXBkYXRlKGUsYy5tZW1vaXplZFN0YXRlLGQuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpfXZhciBmPWIudXBkYXRlUXVldWU7bnVsbCE9PWYmJmloKGIsZixkKTticmVhaztjYXNlIDM6dmFyIGc9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09Zyl7Yz1udWxsO2lmKG51bGwhPT1iLmNoaWxkKXN3aXRjaChiLmNoaWxkLnRhZyl7Y2FzZSA1OmM9XG5iLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6Yz1iLmNoaWxkLnN0YXRlTm9kZX1paChiLGcsYyl9YnJlYWs7Y2FzZSA1OnZhciBoPWIuc3RhdGVOb2RlO2lmKG51bGw9PT1jJiZiLmZsYWdzJjQpe2M9aDt2YXIgaz1iLm1lbW9pemVkUHJvcHM7c3dpdGNoKGIudHlwZSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjprLmF1dG9Gb2N1cyYmYy5mb2N1cygpO2JyZWFrO2Nhc2UgXCJpbWdcIjprLnNyYyYmKGMuc3JjPWsuc3JjKX19YnJlYWs7Y2FzZSA2OmJyZWFrO2Nhc2UgNDpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6aWYobnVsbD09PWIubWVtb2l6ZWRTdGF0ZSl7dmFyIGw9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWwpe3ZhciBtPWwubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09bSl7dmFyIHE9bS5kZWh5ZHJhdGVkO251bGwhPT1xJiZiZChxKX19fWJyZWFrO2Nhc2UgMTk6Y2FzZSAxNzpjYXNlIDIxOmNhc2UgMjI6Y2FzZSAyMzpjYXNlIDI1OmJyZWFrO1xuZGVmYXVsdDp0aHJvdyBFcnJvcihwKDE2MykpO31VfHxiLmZsYWdzJjUxMiYmU2ooYil9Y2F0Y2gocil7VyhiLGIucmV0dXJuLHIpfX1pZihiPT09YSl7Vj1udWxsO2JyZWFrfWM9Yi5zaWJsaW5nO2lmKG51bGwhPT1jKXtjLnJldHVybj1iLnJldHVybjtWPWM7YnJlYWt9Vj1iLnJldHVybn19ZnVuY3Rpb24gaGsoYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7aWYoYj09PWEpe1Y9bnVsbDticmVha312YXIgYz1iLnNpYmxpbmc7aWYobnVsbCE9PWMpe2MucmV0dXJuPWIucmV0dXJuO1Y9YzticmVha31WPWIucmV0dXJufX1cbmZ1bmN0aW9uIGtrKGEpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYj1WO3RyeXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6dmFyIGM9Yi5yZXR1cm47dHJ5e1JqKDQsYil9Y2F0Y2goayl7VyhiLGMsayl9YnJlYWs7Y2FzZSAxOnZhciBkPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZE1vdW50KXt2YXIgZT1iLnJldHVybjt0cnl7ZC5jb21wb25lbnREaWRNb3VudCgpfWNhdGNoKGspe1coYixlLGspfX12YXIgZj1iLnJldHVybjt0cnl7U2ooYil9Y2F0Y2goayl7VyhiLGYsayl9YnJlYWs7Y2FzZSA1OnZhciBnPWIucmV0dXJuO3RyeXtTaihiKX1jYXRjaChrKXtXKGIsZyxrKX19fWNhdGNoKGspe1coYixiLnJldHVybixrKX1pZihiPT09YSl7Vj1udWxsO2JyZWFrfXZhciBoPWIuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Yi5yZXR1cm47Vj1oO2JyZWFrfVY9Yi5yZXR1cm59fVxudmFyIG1rPU1hdGguY2VpbCxuaz11YS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLG9rPXVhLlJlYWN0Q3VycmVudE93bmVyLHBrPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLEs9MCxSPW51bGwsWT1udWxsLFo9MCxnaj0wLGZqPVVmKDApLFQ9MCxxaz1udWxsLGhoPTAscms9MCxzaz0wLHRrPW51bGwsdWs9bnVsbCxnaz0wLEhqPUluZmluaXR5LHZrPW51bGwsUGk9ITEsUWk9bnVsbCxTaT1udWxsLHdrPSExLHhrPW51bGwseWs9MCx6az0wLEFrPW51bGwsQms9LTEsQ2s9MDtmdW5jdGlvbiBMKCl7cmV0dXJuIDAhPT0oSyY2KT9CKCk6LTEhPT1Caz9CazpCaz1CKCl9XG5mdW5jdGlvbiBsaChhKXtpZigwPT09KGEubW9kZSYxKSlyZXR1cm4gMTtpZigwIT09KEsmMikmJjAhPT1aKXJldHVybiBaJi1aO2lmKG51bGwhPT1LZy50cmFuc2l0aW9uKXJldHVybiAwPT09Q2smJihDaz15YygpKSxDazthPUM7aWYoMCE9PWEpcmV0dXJuIGE7YT13aW5kb3cuZXZlbnQ7YT12b2lkIDA9PT1hPzE2OmpkKGEudHlwZSk7cmV0dXJuIGF9ZnVuY3Rpb24gbWgoYSxiLGMsZCl7aWYoNTA8emspdGhyb3cgems9MCxBaz1udWxsLEVycm9yKHAoMTg1KSk7QWMoYSxjLGQpO2lmKDA9PT0oSyYyKXx8YSE9PVIpYT09PVImJigwPT09KEsmMikmJihya3w9YyksND09PVQmJkRrKGEsWikpLEVrKGEsZCksMT09PWMmJjA9PT1LJiYwPT09KGIubW9kZSYxKSYmKEhqPUIoKSs1MDAsZmcmJmpnKCkpfVxuZnVuY3Rpb24gRWsoYSxiKXt2YXIgYz1hLmNhbGxiYWNrTm9kZTt3YyhhLGIpO3ZhciBkPXVjKGEsYT09PVI/WjowKTtpZigwPT09ZCludWxsIT09YyYmYmMoYyksYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrUHJpb3JpdHk9MDtlbHNlIGlmKGI9ZCYtZCxhLmNhbGxiYWNrUHJpb3JpdHkhPT1iKXtudWxsIT1jJiZiYyhjKTtpZigxPT09YikwPT09YS50YWc/aWcoRmsuYmluZChudWxsLGEpKTpoZyhGay5iaW5kKG51bGwsYSkpLEpmKGZ1bmN0aW9uKCl7MD09PShLJjYpJiZqZygpfSksYz1udWxsO2Vsc2V7c3dpdGNoKERjKGQpKXtjYXNlIDE6Yz1mYzticmVhaztjYXNlIDQ6Yz1nYzticmVhaztjYXNlIDE2OmM9aGM7YnJlYWs7Y2FzZSA1MzY4NzA5MTI6Yz1qYzticmVhaztkZWZhdWx0OmM9aGN9Yz1HayhjLEhrLmJpbmQobnVsbCxhKSl9YS5jYWxsYmFja1ByaW9yaXR5PWI7YS5jYWxsYmFja05vZGU9Y319XG5mdW5jdGlvbiBIayhhLGIpe0JrPS0xO0NrPTA7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7dmFyIGM9YS5jYWxsYmFja05vZGU7aWYoSWsoKSYmYS5jYWxsYmFja05vZGUhPT1jKXJldHVybiBudWxsO3ZhciBkPXVjKGEsYT09PVI/WjowKTtpZigwPT09ZClyZXR1cm4gbnVsbDtpZigwIT09KGQmMzApfHwwIT09KGQmYS5leHBpcmVkTGFuZXMpfHxiKWI9SmsoYSxkKTtlbHNle2I9ZDt2YXIgZT1LO0t8PTI7dmFyIGY9S2soKTtpZihSIT09YXx8WiE9PWIpdms9bnVsbCxIaj1CKCkrNTAwLExrKGEsYik7ZG8gdHJ5e01rKCk7YnJlYWt9Y2F0Y2goaCl7TmsoYSxoKX13aGlsZSgxKTtRZygpO25rLmN1cnJlbnQ9ZjtLPWU7bnVsbCE9PVk/Yj0wOihSPW51bGwsWj0wLGI9VCl9aWYoMCE9PWIpezI9PT1iJiYoZT14YyhhKSwwIT09ZSYmKGQ9ZSxiPU9rKGEsZSkpKTtpZigxPT09Yil0aHJvdyBjPXFrLExrKGEsMCksRGsoYSxkKSxFayhhLEIoKSksYztpZig2PT09YilEayhhLGQpO1xuZWxzZXtlPWEuY3VycmVudC5hbHRlcm5hdGU7aWYoMD09PShkJjMwKSYmIVBrKGUpJiYoYj1KayhhLGQpLDI9PT1iJiYoZj14YyhhKSwwIT09ZiYmKGQ9ZixiPU9rKGEsZikpKSwxPT09YikpdGhyb3cgYz1xayxMayhhLDApLERrKGEsZCksRWsoYSxCKCkpLGM7YS5maW5pc2hlZFdvcms9ZTthLmZpbmlzaGVkTGFuZXM9ZDtzd2l0Y2goYil7Y2FzZSAwOmNhc2UgMTp0aHJvdyBFcnJvcihwKDM0NSkpO2Nhc2UgMjpRayhhLHVrLHZrKTticmVhaztjYXNlIDM6RGsoYSxkKTtpZigoZCYxMzAwMjM0MjQpPT09ZCYmKGI9Z2srNTAwLUIoKSwxMDxiKSl7aWYoMCE9PXVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmQpIT09ZCl7TCgpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmZTticmVha31hLnRpbWVvdXRIYW5kbGU9RmYoUWsuYmluZChudWxsLGEsdWssdmspLGIpO2JyZWFrfVFrKGEsdWssdmspO2JyZWFrO2Nhc2UgNDpEayhhLGQpO2lmKChkJjQxOTQyNDApPT09XG5kKWJyZWFrO2I9YS5ldmVudFRpbWVzO2ZvcihlPS0xOzA8ZDspe3ZhciBnPTMxLW9jKGQpO2Y9MTw8ZztnPWJbZ107Zz5lJiYoZT1nKTtkJj1+Zn1kPWU7ZD1CKCktZDtkPSgxMjA+ZD8xMjA6NDgwPmQ/NDgwOjEwODA+ZD8xMDgwOjE5MjA+ZD8xOTIwOjNFMz5kPzNFMzo0MzIwPmQ/NDMyMDoxOTYwKm1rKGQvMTk2MCkpLWQ7aWYoMTA8ZCl7YS50aW1lb3V0SGFuZGxlPUZmKFFrLmJpbmQobnVsbCxhLHVrLHZrKSxkKTticmVha31RayhhLHVrLHZrKTticmVhaztjYXNlIDU6UWsoYSx1ayx2ayk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDMyOSkpO319fUVrKGEsQigpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1jP0hrLmJpbmQobnVsbCxhKTpudWxsfVxuZnVuY3Rpb24gT2soYSxiKXt2YXIgYz10azthLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQmJihMayhhLGIpLmZsYWdzfD0yNTYpO2E9SmsoYSxiKTsyIT09YSYmKGI9dWssdWs9YyxudWxsIT09YiYmR2ooYikpO3JldHVybiBhfWZ1bmN0aW9uIEdqKGEpe251bGw9PT11az91az1hOnVrLnB1c2guYXBwbHkodWssYSl9XG5mdW5jdGlvbiBQayhhKXtmb3IodmFyIGI9YTs7KXtpZihiLmZsYWdzJjE2Mzg0KXt2YXIgYz1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1jJiYoYz1jLnN0b3JlcyxudWxsIT09YykpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj1lLmdldFNuYXBzaG90O2U9ZS52YWx1ZTt0cnl7aWYoIUhlKGYoKSxlKSlyZXR1cm4hMX1jYXRjaChnKXtyZXR1cm4hMX19fWM9Yi5jaGlsZDtpZihiLnN1YnRyZWVGbGFncyYxNjM4NCYmbnVsbCE9PWMpYy5yZXR1cm49YixiPWM7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4hMDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiEwfVxuZnVuY3Rpb24gRGsoYSxiKXtiJj1+c2s7YiY9fnJrO2Euc3VzcGVuZGVkTGFuZXN8PWI7YS5waW5nZWRMYW5lcyY9fmI7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxiOyl7dmFyIGM9MzEtb2MoYiksZD0xPDxjO2FbY109LTE7YiY9fmR9fWZ1bmN0aW9uIEZrKGEpe2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMyNykpO0lrKCk7dmFyIGI9dWMoYSwwKTtpZigwPT09KGImMSkpcmV0dXJuIEVrKGEsQigpKSxudWxsO3ZhciBjPUprKGEsYik7aWYoMCE9PWEudGFnJiYyPT09Yyl7dmFyIGQ9eGMoYSk7MCE9PWQmJihiPWQsYz1PayhhLGQpKX1pZigxPT09Yyl0aHJvdyBjPXFrLExrKGEsMCksRGsoYSxiKSxFayhhLEIoKSksYztpZig2PT09Yyl0aHJvdyBFcnJvcihwKDM0NSkpO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWI7UWsoYSx1ayx2ayk7RWsoYSxCKCkpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gUmsoYSxiKXt2YXIgYz1LO0t8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7Sz1jLDA9PT1LJiYoSGo9QigpKzUwMCxmZyYmamcoKSl9fWZ1bmN0aW9uIFNrKGEpe251bGwhPT14ayYmMD09PXhrLnRhZyYmMD09PShLJjYpJiZJaygpO3ZhciBiPUs7S3w9MTt2YXIgYz1way50cmFuc2l0aW9uLGQ9Qzt0cnl7aWYocGsudHJhbnNpdGlvbj1udWxsLEM9MSxhKXJldHVybiBhKCl9ZmluYWxseXtDPWQscGsudHJhbnNpdGlvbj1jLEs9YiwwPT09KEsmNikmJmpnKCl9fWZ1bmN0aW9uIElqKCl7Z2o9ZmouY3VycmVudDtFKGZqKX1cbmZ1bmN0aW9uIExrKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLEdmKGMpKTtpZihudWxsIT09WSlmb3IoYz1ZLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7d2coZCk7c3dpdGNoKGQudGFnKXtjYXNlIDE6ZD1kLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWQmJnZvaWQgMCE9PWQmJiRmKCk7YnJlYWs7Y2FzZSAzOkpoKCk7RShXZik7RShIKTtPaCgpO2JyZWFrO2Nhc2UgNTpMaChkKTticmVhaztjYXNlIDQ6SmgoKTticmVhaztjYXNlIDEzOkUoTSk7YnJlYWs7Y2FzZSAxOTpFKE0pO2JyZWFrO2Nhc2UgMTA6UmcoZC50eXBlLl9jb250ZXh0KTticmVhaztjYXNlIDIyOmNhc2UgMjM6SWooKX1jPWMucmV0dXJufVI9YTtZPWE9d2goYS5jdXJyZW50LG51bGwpO1o9Z2o9YjtUPTA7cWs9bnVsbDtzaz1yaz1oaD0wO3VrPXRrPW51bGw7aWYobnVsbCE9PVdnKXtmb3IoYj1cbjA7YjxXZy5sZW5ndGg7YisrKWlmKGM9V2dbYl0sZD1jLmludGVybGVhdmVkLG51bGwhPT1kKXtjLmludGVybGVhdmVkPW51bGw7dmFyIGU9ZC5uZXh0LGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXt2YXIgZz1mLm5leHQ7Zi5uZXh0PWU7ZC5uZXh0PWd9Yy5wZW5kaW5nPWR9V2c9bnVsbH1yZXR1cm4gYX1cbmZ1bmN0aW9uIE5rKGEsYil7ZG97dmFyIGM9WTt0cnl7UWcoKTtQaC5jdXJyZW50PWFpO2lmKFNoKXtmb3IodmFyIGQ9Ti5tZW1vaXplZFN0YXRlO251bGwhPT1kOyl7dmFyIGU9ZC5xdWV1ZTtudWxsIT09ZSYmKGUucGVuZGluZz1udWxsKTtkPWQubmV4dH1TaD0hMX1SaD0wO1A9Tz1OPW51bGw7VGg9ITE7VWg9MDtvay5jdXJyZW50PW51bGw7aWYobnVsbD09PWN8fG51bGw9PT1jLnJldHVybil7VD0xO3FrPWI7WT1udWxsO2JyZWFrfWE6e3ZhciBmPWEsZz1jLnJldHVybixoPWMsaz1iO2I9WjtoLmZsYWdzfD0zMjc2ODtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rLG09aCxxPW0udGFnO2lmKDA9PT0obS5tb2RlJjEpJiYoMD09PXF8fDExPT09cXx8MTU9PT1xKSl7dmFyIHI9bS5hbHRlcm5hdGU7cj8obS51cGRhdGVRdWV1ZT1yLnVwZGF0ZVF1ZXVlLG0ubWVtb2l6ZWRTdGF0ZT1yLm1lbW9pemVkU3RhdGUsXG5tLmxhbmVzPXIubGFuZXMpOihtLnVwZGF0ZVF1ZXVlPW51bGwsbS5tZW1vaXplZFN0YXRlPW51bGwpfXZhciB5PVZpKGcpO2lmKG51bGwhPT15KXt5LmZsYWdzJj0tMjU3O1dpKHksZyxoLGYsYik7eS5tb2RlJjEmJlRpKGYsbCxiKTtiPXk7az1sO3ZhciBuPWIudXBkYXRlUXVldWU7aWYobnVsbD09PW4pe3ZhciB0PW5ldyBTZXQ7dC5hZGQoayk7Yi51cGRhdGVRdWV1ZT10fWVsc2Ugbi5hZGQoayk7YnJlYWsgYX1lbHNle2lmKDA9PT0oYiYxKSl7VGkoZixsLGIpO3VqKCk7YnJlYWsgYX1rPUVycm9yKHAoNDI2KSl9fWVsc2UgaWYoSSYmaC5tb2RlJjEpe3ZhciBKPVZpKGcpO2lmKG51bGwhPT1KKXswPT09KEouZmxhZ3MmNjU1MzYpJiYoSi5mbGFnc3w9MjU2KTtXaShKLGcsaCxmLGIpO0pnKEtpKGssaCkpO2JyZWFrIGF9fWY9az1LaShrLGgpOzQhPT1UJiYoVD0yKTtudWxsPT09dGs/dGs9W2ZdOnRrLnB1c2goZik7Zj1nO2Rve3N3aXRjaChmLnRhZyl7Y2FzZSAzOmYuZmxhZ3N8PTY1NTM2O1xuYiY9LWI7Zi5sYW5lc3w9Yjt2YXIgeD1PaShmLGssYik7ZmgoZix4KTticmVhayBhO2Nhc2UgMTpoPWs7dmFyIHc9Zi50eXBlLHU9Zi5zdGF0ZU5vZGU7aWYoMD09PShmLmZsYWdzJjEyOCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygdy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT11JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgdS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1TaXx8IVNpLmhhcyh1KSkpKXtmLmZsYWdzfD02NTUzNjtiJj0tYjtmLmxhbmVzfD1iO3ZhciBGPVJpKGYsaCxiKTtmaChmLEYpO2JyZWFrIGF9fWY9Zi5yZXR1cm59d2hpbGUobnVsbCE9PWYpfVRrKGMpfWNhdGNoKG5hKXtiPW5hO1k9PT1jJiZudWxsIT09YyYmKFk9Yz1jLnJldHVybik7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9ZnVuY3Rpb24gS2soKXt2YXIgYT1uay5jdXJyZW50O25rLmN1cnJlbnQ9YWk7cmV0dXJuIG51bGw9PT1hP2FpOmF9XG5mdW5jdGlvbiB1aigpe2lmKDA9PT1UfHwzPT09VHx8Mj09PVQpVD00O251bGw9PT1SfHwwPT09KGhoJjI2ODQzNTQ1NSkmJjA9PT0ocmsmMjY4NDM1NDU1KXx8RGsoUixaKX1mdW5jdGlvbiBKayhhLGIpe3ZhciBjPUs7S3w9Mjt2YXIgZD1LaygpO2lmKFIhPT1hfHxaIT09Yil2az1udWxsLExrKGEsYik7ZG8gdHJ5e1VrKCk7YnJlYWt9Y2F0Y2goZSl7TmsoYSxlKX13aGlsZSgxKTtRZygpO0s9Yztuay5jdXJyZW50PWQ7aWYobnVsbCE9PVkpdGhyb3cgRXJyb3IocCgyNjEpKTtSPW51bGw7Wj0wO3JldHVybiBUfWZ1bmN0aW9uIFVrKCl7Zm9yKDtudWxsIT09WTspVmsoWSl9ZnVuY3Rpb24gTWsoKXtmb3IoO251bGwhPT1ZJiYhY2MoKTspVmsoWSl9ZnVuY3Rpb24gVmsoYSl7dmFyIGI9V2soYS5hbHRlcm5hdGUsYSxnaik7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iP1RrKGEpOlk9Yjtvay5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiBUayhhKXt2YXIgYj1hO2Rve3ZhciBjPWIuYWx0ZXJuYXRlO2E9Yi5yZXR1cm47aWYoMD09PShiLmZsYWdzJjMyNzY4KSl7aWYoYz1GaihjLGIsZ2opLG51bGwhPT1jKXtZPWM7cmV0dXJufX1lbHNle2M9SmooYyxiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MzI3Njc7WT1jO3JldHVybn1pZihudWxsIT09YSlhLmZsYWdzfD0zMjc2OCxhLnN1YnRyZWVGbGFncz0wLGEuZGVsZXRpb25zPW51bGw7ZWxzZXtUPTY7WT1udWxsO3JldHVybn19Yj1iLnNpYmxpbmc7aWYobnVsbCE9PWIpe1k9YjtyZXR1cm59WT1iPWF9d2hpbGUobnVsbCE9PWIpOzA9PT1UJiYoVD01KX1mdW5jdGlvbiBRayhhLGIsYyl7dmFyIGQ9QyxlPXBrLnRyYW5zaXRpb247dHJ5e3BrLnRyYW5zaXRpb249bnVsbCxDPTEsWGsoYSxiLGMsZCl9ZmluYWxseXtway50cmFuc2l0aW9uPWUsQz1kfXJldHVybiBudWxsfVxuZnVuY3Rpb24gWGsoYSxiLGMsZCl7ZG8gSWsoKTt3aGlsZShudWxsIT09eGspO2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMyNykpO2M9YS5maW5pc2hlZFdvcms7dmFyIGU9YS5maW5pc2hlZExhbmVzO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcihwKDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7YS5jYWxsYmFja1ByaW9yaXR5PTA7dmFyIGY9Yy5sYW5lc3xjLmNoaWxkTGFuZXM7QmMoYSxmKTthPT09UiYmKFk9Uj1udWxsLFo9MCk7MD09PShjLnN1YnRyZWVGbGFncyYyMDY0KSYmMD09PShjLmZsYWdzJjIwNjQpfHx3a3x8KHdrPSEwLEdrKGhjLGZ1bmN0aW9uKCl7SWsoKTtyZXR1cm4gbnVsbH0pKTtmPTAhPT0oYy5mbGFncyYxNTk5MCk7aWYoMCE9PShjLnN1YnRyZWVGbGFncyYxNTk5MCl8fGYpe2Y9cGsudHJhbnNpdGlvbjtway50cmFuc2l0aW9uPW51bGw7XG52YXIgZz1DO0M9MTt2YXIgaD1LO0t8PTQ7b2suY3VycmVudD1udWxsO1BqKGEsYyk7ZWsoYyxhKTtPZShEZik7ZGQ9ISFDZjtEZj1DZj1udWxsO2EuY3VycmVudD1jO2lrKGMsYSxlKTtkYygpO0s9aDtDPWc7cGsudHJhbnNpdGlvbj1mfWVsc2UgYS5jdXJyZW50PWM7d2smJih3az0hMSx4az1hLHlrPWUpO2Y9YS5wZW5kaW5nTGFuZXM7MD09PWYmJihTaT1udWxsKTttYyhjLnN0YXRlTm9kZSxkKTtFayhhLEIoKSk7aWYobnVsbCE9PWIpZm9yKGQ9YS5vblJlY292ZXJhYmxlRXJyb3IsYz0wO2M8Yi5sZW5ndGg7YysrKWU9YltjXSxkKGUudmFsdWUse2NvbXBvbmVudFN0YWNrOmUuc3RhY2ssZGlnZXN0OmUuZGlnZXN0fSk7aWYoUGkpdGhyb3cgUGk9ITEsYT1RaSxRaT1udWxsLGE7MCE9PSh5ayYxKSYmMCE9PWEudGFnJiZJaygpO2Y9YS5wZW5kaW5nTGFuZXM7MCE9PShmJjEpP2E9PT1Baz96aysrOih6az0wLEFrPWEpOnprPTA7amcoKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIElrKCl7aWYobnVsbCE9PXhrKXt2YXIgYT1EYyh5ayksYj1way50cmFuc2l0aW9uLGM9Qzt0cnl7cGsudHJhbnNpdGlvbj1udWxsO0M9MTY+YT8xNjphO2lmKG51bGw9PT14ayl2YXIgZD0hMTtlbHNle2E9eGs7eGs9bnVsbDt5az0wO2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMzMSkpO3ZhciBlPUs7S3w9NDtmb3IoVj1hLmN1cnJlbnQ7bnVsbCE9PVY7KXt2YXIgZj1WLGc9Zi5jaGlsZDtpZigwIT09KFYuZmxhZ3MmMTYpKXt2YXIgaD1mLmRlbGV0aW9ucztpZihudWxsIT09aCl7Zm9yKHZhciBrPTA7azxoLmxlbmd0aDtrKyspe3ZhciBsPWhba107Zm9yKFY9bDtudWxsIT09Vjspe3ZhciBtPVY7c3dpdGNoKG0udGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlFqKDgsbSxmKX12YXIgcT1tLmNoaWxkO2lmKG51bGwhPT1xKXEucmV0dXJuPW0sVj1xO2Vsc2UgZm9yKDtudWxsIT09Vjspe209Vjt2YXIgcj1tLnNpYmxpbmcseT1tLnJldHVybjtUaihtKTtpZihtPT09XG5sKXtWPW51bGw7YnJlYWt9aWYobnVsbCE9PXIpe3IucmV0dXJuPXk7Vj1yO2JyZWFrfVY9eX19fXZhciBuPWYuYWx0ZXJuYXRlO2lmKG51bGwhPT1uKXt2YXIgdD1uLmNoaWxkO2lmKG51bGwhPT10KXtuLmNoaWxkPW51bGw7ZG97dmFyIEo9dC5zaWJsaW5nO3Quc2libGluZz1udWxsO3Q9Sn13aGlsZShudWxsIT09dCl9fVY9Zn19aWYoMCE9PShmLnN1YnRyZWVGbGFncyYyMDY0KSYmbnVsbCE9PWcpZy5yZXR1cm49ZixWPWc7ZWxzZSBiOmZvcig7bnVsbCE9PVY7KXtmPVY7aWYoMCE9PShmLmZsYWdzJjIwNDgpKXN3aXRjaChmLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpRaig5LGYsZi5yZXR1cm4pfXZhciB4PWYuc2libGluZztpZihudWxsIT09eCl7eC5yZXR1cm49Zi5yZXR1cm47Vj14O2JyZWFrIGJ9Vj1mLnJldHVybn19dmFyIHc9YS5jdXJyZW50O2ZvcihWPXc7bnVsbCE9PVY7KXtnPVY7dmFyIHU9Zy5jaGlsZDtpZigwIT09KGcuc3VidHJlZUZsYWdzJjIwNjQpJiZudWxsIT09XG51KXUucmV0dXJuPWcsVj11O2Vsc2UgYjpmb3IoZz13O251bGwhPT1WOyl7aD1WO2lmKDAhPT0oaC5mbGFncyYyMDQ4KSl0cnl7c3dpdGNoKGgudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlJqKDksaCl9fWNhdGNoKG5hKXtXKGgsaC5yZXR1cm4sbmEpfWlmKGg9PT1nKXtWPW51bGw7YnJlYWsgYn12YXIgRj1oLnNpYmxpbmc7aWYobnVsbCE9PUYpe0YucmV0dXJuPWgucmV0dXJuO1Y9RjticmVhayBifVY9aC5yZXR1cm59fUs9ZTtqZygpO2lmKGxjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbGMub25Qb3N0Q29tbWl0RmliZXJSb290KXRyeXtsYy5vblBvc3RDb21taXRGaWJlclJvb3Qoa2MsYSl9Y2F0Y2gobmEpe31kPSEwfXJldHVybiBkfWZpbmFsbHl7Qz1jLHBrLnRyYW5zaXRpb249Yn19cmV0dXJuITF9ZnVuY3Rpb24gWWsoYSxiLGMpe2I9S2koYyxiKTtiPU9pKGEsYiwxKTthPWRoKGEsYiwxKTtiPUwoKTtudWxsIT09YSYmKEFjKGEsMSxiKSxFayhhLGIpKX1cbmZ1bmN0aW9uIFcoYSxiLGMpe2lmKDM9PT1hLnRhZylZayhhLGEsYyk7ZWxzZSBmb3IoO251bGwhPT1iOyl7aWYoMz09PWIudGFnKXtZayhiLGEsYyk7YnJlYWt9ZWxzZSBpZigxPT09Yi50YWcpe3ZhciBkPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1TaXx8IVNpLmhhcyhkKSkpe2E9S2koYyxhKTthPVJpKGIsYSwxKTtiPWRoKGIsYSwxKTthPUwoKTtudWxsIT09YiYmKEFjKGIsMSxhKSxFayhiLGEpKTticmVha319Yj1iLnJldHVybn19XG5mdW5jdGlvbiBVaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2I9TCgpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztSPT09YSYmKFomYyk9PT1jJiYoND09PVR8fDM9PT1UJiYoWiYxMzAwMjM0MjQpPT09WiYmNTAwPkIoKS1naz9MayhhLDApOnNrfD1jKTtFayhhLGIpfWZ1bmN0aW9uIFprKGEsYil7MD09PWImJigwPT09KGEubW9kZSYxKT9iPTE6KGI9c2Msc2M8PD0xLDA9PT0oc2MmMTMwMDIzNDI0KSYmKHNjPTQxOTQzMDQpKSk7dmFyIGM9TCgpO2E9WmcoYSxiKTtudWxsIT09YSYmKEFjKGEsYixjKSxFayhhLGMpKX1mdW5jdGlvbiB2aihhKXt2YXIgYj1hLm1lbW9pemVkU3RhdGUsYz0wO251bGwhPT1iJiYoYz1iLnJldHJ5TGFuZSk7WmsoYSxjKX1cbmZ1bmN0aW9uIGNrKGEsYil7dmFyIGM9MDtzd2l0Y2goYS50YWcpe2Nhc2UgMTM6dmFyIGQ9YS5zdGF0ZU5vZGU7dmFyIGU9YS5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoYz1lLnJldHJ5TGFuZSk7YnJlYWs7Y2FzZSAxOTpkPWEuc3RhdGVOb2RlO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgzMTQpKTt9bnVsbCE9PWQmJmQuZGVsZXRlKGIpO1prKGEsYyl9dmFyIFdrO1xuV2s9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxXZi5jdXJyZW50KVVnPSEwO2Vsc2V7aWYoMD09PShhLmxhbmVzJmMpJiYwPT09KGIuZmxhZ3MmMTI4KSlyZXR1cm4gVWc9ITEsemooYSxiLGMpO1VnPTAhPT0oYS5mbGFncyYxMzEwNzIpPyEwOiExfWVsc2UgVWc9ITEsSSYmMCE9PShiLmZsYWdzJjEwNDg1NzYpJiZ1ZyhiLG5nLGIuaW5kZXgpO2IubGFuZXM9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjp2YXIgZD1iLnR5cGU7amooYSxiKTthPWIucGVuZGluZ1Byb3BzO3ZhciBlPVlmKGIsSC5jdXJyZW50KTtUZyhiLGMpO2U9WGgobnVsbCxiLGQsYSxlLGMpO3ZhciBmPWJpKCk7Yi5mbGFnc3w9MTtcIm9iamVjdFwiPT09dHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Y/KGIudGFnPTEsYi5tZW1vaXplZFN0YXRlPW51bGwsYi51cGRhdGVRdWV1ZT1cbm51bGwsWmYoZCk/KGY9ITAsY2coYikpOmY9ITEsYi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbCxhaChiKSxlLnVwZGF0ZXI9bmgsYi5zdGF0ZU5vZGU9ZSxlLl9yZWFjdEludGVybmFscz1iLHJoKGIsZCxhLGMpLGI9a2oobnVsbCxiLGQsITAsZixjKSk6KGIudGFnPTAsSSYmZiYmdmcoYiksWWkobnVsbCxiLGUsYyksYj1iLmNoaWxkKTtyZXR1cm4gYjtjYXNlIDE2OmQ9Yi5lbGVtZW50VHlwZTthOntqaihhLGIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1kLl9pbml0O2Q9ZShkLl9wYXlsb2FkKTtiLnR5cGU9ZDtlPWIudGFnPSRrKGQpO2E9TGcoZCxhKTtzd2l0Y2goZSl7Y2FzZSAwOmI9ZGoobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTpiPWlqKG51bGwsYixkLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9WmkobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1haihudWxsLGIsZCxMZyhkLnR5cGUsYSksYyk7YnJlYWsgYX10aHJvdyBFcnJvcihwKDMwNixcbmQsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkxnKGQsZSksZGooYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkxnKGQsZSksaWooYSxiLGQsZSxjKTtjYXNlIDM6YTp7bGooYik7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IocCgzODcpKTtkPWIucGVuZGluZ1Byb3BzO2Y9Yi5tZW1vaXplZFN0YXRlO2U9Zi5lbGVtZW50O2JoKGEsYik7Z2goYixkLG51bGwsYyk7dmFyIGc9Yi5tZW1vaXplZFN0YXRlO2Q9Zy5lbGVtZW50O2lmKGYuaXNEZWh5ZHJhdGVkKWlmKGY9e2VsZW1lbnQ6ZCxpc0RlaHlkcmF0ZWQ6ITEsY2FjaGU6Zy5jYWNoZSxwZW5kaW5nU3VzcGVuc2VCb3VuZGFyaWVzOmcucGVuZGluZ1N1c3BlbnNlQm91bmRhcmllcyx0cmFuc2l0aW9uczpnLnRyYW5zaXRpb25zfSxiLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1cbmYsYi5tZW1vaXplZFN0YXRlPWYsYi5mbGFncyYyNTYpe2U9S2koRXJyb3IocCg0MjMpKSxiKTtiPW1qKGEsYixkLGMsZSk7YnJlYWsgYX1lbHNlIGlmKGQhPT1lKXtlPUtpKEVycm9yKHAoNDI0KSksYik7Yj1taihhLGIsZCxjLGUpO2JyZWFrIGF9ZWxzZSBmb3IoeWc9TGYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mby5maXJzdENoaWxkKSx4Zz1iLEk9ITAsemc9bnVsbCxjPUNoKGIsbnVsbCxkLGMpLGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8NDA5NixjPWMuc2libGluZztlbHNle0lnKCk7aWYoZD09PWUpe2I9JGkoYSxiLGMpO2JyZWFrIGF9WWkoYSxiLGQsYyl9Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gS2goYiksbnVsbD09PWEmJkVnKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW4sRWYoZCxlKT9nPW51bGw6bnVsbCE9PWYmJkVmKGQsZikmJihiLmZsYWdzfD0zMiksXG5oaihhLGIpLFlpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmRWcoYiksbnVsbDtjYXNlIDEzOnJldHVybiBwaihhLGIsYyk7Y2FzZSA0OnJldHVybiBJaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1CaChiLG51bGwsZCxjKTpZaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkxnKGQsZSksWmkoYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIFlpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gWWkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gWWkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2Y9Yi5tZW1vaXplZFByb3BzO1xuZz1lLnZhbHVlO0coTWcsZC5fY3VycmVudFZhbHVlKTtkLl9jdXJyZW50VmFsdWU9ZztpZihudWxsIT09ZilpZihIZShmLnZhbHVlLGcpKXtpZihmLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIVdmLmN1cnJlbnQpe2I9JGkoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGY9Yi5jaGlsZCxudWxsIT09ZiYmKGYucmV0dXJuPWIpO251bGwhPT1mOyl7dmFyIGg9Zi5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWgpe2c9Zi5jaGlsZDtmb3IodmFyIGs9aC5maXJzdENvbnRleHQ7bnVsbCE9PWs7KXtpZihrLmNvbnRleHQ9PT1kKXtpZigxPT09Zi50YWcpe2s9Y2goLTEsYyYtYyk7ay50YWc9Mjt2YXIgbD1mLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1sKXtsPWwuc2hhcmVkO3ZhciBtPWwucGVuZGluZztudWxsPT09bT9rLm5leHQ9azooay5uZXh0PW0ubmV4dCxtLm5leHQ9ayk7bC5wZW5kaW5nPWt9fWYubGFuZXN8PWM7az1mLmFsdGVybmF0ZTtudWxsIT09ayYmKGsubGFuZXN8PWMpO1NnKGYucmV0dXJuLFxuYyxiKTtoLmxhbmVzfD1jO2JyZWFrfWs9ay5uZXh0fX1lbHNlIGlmKDEwPT09Zi50YWcpZz1mLnR5cGU9PT1iLnR5cGU/bnVsbDpmLmNoaWxkO2Vsc2UgaWYoMTg9PT1mLnRhZyl7Zz1mLnJldHVybjtpZihudWxsPT09Zyl0aHJvdyBFcnJvcihwKDM0MSkpO2cubGFuZXN8PWM7aD1nLmFsdGVybmF0ZTtudWxsIT09aCYmKGgubGFuZXN8PWMpO1NnKGcsYyxiKTtnPWYuc2libGluZ31lbHNlIGc9Zi5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1mO2Vsc2UgZm9yKGc9ZjtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9Zj1nLnNpYmxpbmc7aWYobnVsbCE9PWYpe2YucmV0dXJuPWcucmV0dXJuO2c9ZjticmVha31nPWcucmV0dXJufWY9Z31ZaShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxkPWIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFRnKGIsYyksZT1WZyhlKSxkPWQoZSksYi5mbGFnc3w9MSxZaShhLGIsZCxjKSxcbmIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZD1iLnR5cGUsZT1MZyhkLGIucGVuZGluZ1Byb3BzKSxlPUxnKGQudHlwZSxlKSxhaihhLGIsZCxlLGMpO2Nhc2UgMTU6cmV0dXJuIGNqKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6TGcoZCxlKSxqaihhLGIpLGIudGFnPTEsWmYoZCk/KGE9ITAsY2coYikpOmE9ITEsVGcoYixjKSxwaChiLGQsZSkscmgoYixkLGUsYyksa2oobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiB5aihhLGIsYyk7Y2FzZSAyMjpyZXR1cm4gZWooYSxiLGMpfXRocm93IEVycm9yKHAoMTU2LGIudGFnKSk7fTtmdW5jdGlvbiBHayhhLGIpe3JldHVybiBhYyhhLGIpfVxuZnVuY3Rpb24gYWwoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLnN1YnRyZWVGbGFncz10aGlzLmZsYWdzPTA7dGhpcy5kZWxldGlvbnM9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gQmcoYSxiLGMsZCl7cmV0dXJuIG5ldyBhbChhLGIsYyxkKX1mdW5jdGlvbiBiaihhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gJGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGJqKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1EYSlyZXR1cm4gMTE7aWYoYT09PUdhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIHdoKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9QmcoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5zdWJ0cmVlRmxhZ3M9MCxjLmRlbGV0aW9ucz1udWxsKTtjLmZsYWdzPWEuZmxhZ3MmMTQ2ODAwNjQ7Yy5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcztjLmxhbmVzPWEubGFuZXM7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntsYW5lczpiLmxhbmVzLGZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dH07XG5jLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHloKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSliaihhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSB5YTpyZXR1cm4gQWgoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSB6YTpnPTg7ZXw9ODticmVhaztjYXNlIEFhOnJldHVybiBhPUJnKDEyLGMsYixlfDIpLGEuZWxlbWVudFR5cGU9QWEsYS5sYW5lcz1mLGE7Y2FzZSBFYTpyZXR1cm4gYT1CZygxMyxjLGIsZSksYS5lbGVtZW50VHlwZT1FYSxhLmxhbmVzPWYsYTtjYXNlIEZhOnJldHVybiBhPUJnKDE5LGMsYixlKSxhLmVsZW1lbnRUeXBlPUZhLGEubGFuZXM9ZixhO2Nhc2UgSWE6cmV0dXJuIHFqKGMsZSxmLGIpO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBCYTpnPTEwO2JyZWFrIGE7Y2FzZSBDYTpnPTk7YnJlYWsgYTtjYXNlIERhOmc9MTE7XG5icmVhayBhO2Nhc2UgR2E6Zz0xNDticmVhayBhO2Nhc2UgSGE6Zz0xNjtkPW51bGw7YnJlYWsgYX10aHJvdyBFcnJvcihwKDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPUJnKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gQWgoYSxiLGMsZCl7YT1CZyg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gcWooYSxiLGMsZCl7YT1CZygyMixhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7YS5zdGF0ZU5vZGU9e2lzSGlkZGVuOiExfTtyZXR1cm4gYX1mdW5jdGlvbiB4aChhLGIsYyl7YT1CZyg2LGEsbnVsbCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiB6aChhLGIsYyl7Yj1CZyg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5sYW5lcz1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGJsKGEsYixjLGQsZSl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5jYWxsYmFja05vZGU9dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmNhbGxiYWNrUHJpb3JpdHk9MDt0aGlzLmV2ZW50VGltZXM9emMoMCk7dGhpcy5leHBpcmF0aW9uVGltZXM9emMoLTEpO3RoaXMuZW50YW5nbGVkTGFuZXM9dGhpcy5maW5pc2hlZExhbmVzPXRoaXMubXV0YWJsZVJlYWRMYW5lcz10aGlzLmV4cGlyZWRMYW5lcz10aGlzLnBpbmdlZExhbmVzPXRoaXMuc3VzcGVuZGVkTGFuZXM9dGhpcy5wZW5kaW5nTGFuZXM9MDt0aGlzLmVudGFuZ2xlbWVudHM9emMoMCk7dGhpcy5pZGVudGlmaWVyUHJlZml4PWQ7dGhpcy5vblJlY292ZXJhYmxlRXJyb3I9ZTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9XG5udWxsfWZ1bmN0aW9uIGNsKGEsYixjLGQsZSxmLGcsaCxrKXthPW5ldyBibChhLGIsYyxoLGspOzE9PT1iPyhiPTEsITA9PT1mJiYoYnw9OCkpOmI9MDtmPUJnKDMsbnVsbCxudWxsLGIpO2EuY3VycmVudD1mO2Yuc3RhdGVOb2RlPWE7Zi5tZW1vaXplZFN0YXRlPXtlbGVtZW50OmQsaXNEZWh5ZHJhdGVkOmMsY2FjaGU6bnVsbCx0cmFuc2l0aW9uczpudWxsLHBlbmRpbmdTdXNwZW5zZUJvdW5kYXJpZXM6bnVsbH07YWgoZik7cmV0dXJuIGF9ZnVuY3Rpb24gZGwoYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjp3YSxrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbmZ1bmN0aW9uIGVsKGEpe2lmKCFhKXJldHVybiBWZjthPWEuX3JlYWN0SW50ZXJuYWxzO2E6e2lmKFZiKGEpIT09YXx8MSE9PWEudGFnKXRocm93IEVycm9yKHAoMTcwKSk7dmFyIGI9YTtkb3tzd2l0Y2goYi50YWcpe2Nhc2UgMzpiPWIuc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYTtjYXNlIDE6aWYoWmYoYi50eXBlKSl7Yj1iLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBhfX1iPWIucmV0dXJufXdoaWxlKG51bGwhPT1iKTt0aHJvdyBFcnJvcihwKDE3MSkpO31pZigxPT09YS50YWcpe3ZhciBjPWEudHlwZTtpZihaZihjKSlyZXR1cm4gYmcoYSxjLGIpfXJldHVybiBifVxuZnVuY3Rpb24gZmwoYSxiLGMsZCxlLGYsZyxoLGspe2E9Y2woYyxkLCEwLGEsZSxmLGcsaCxrKTthLmNvbnRleHQ9ZWwobnVsbCk7Yz1hLmN1cnJlbnQ7ZD1MKCk7ZT1saChjKTtmPWNoKGQsZSk7Zi5jYWxsYmFjaz12b2lkIDAhPT1iJiZudWxsIT09Yj9iOm51bGw7ZGgoYyxmLGUpO2EuY3VycmVudC5sYW5lcz1lO0FjKGEsZSxkKTtFayhhLGQpO3JldHVybiBhfWZ1bmN0aW9uIGdsKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPUwoKSxnPWxoKGUpO2M9ZWwoYyk7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1jaChmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PWQ/bnVsbDpkO251bGwhPT1kJiYoYi5jYWxsYmFjaz1kKTthPWRoKGUsYixnKTtudWxsIT09YSYmKG1oKGEsZSxnLGYpLGVoKGEsZSxnKSk7cmV0dXJuIGd9XG5mdW5jdGlvbiBobChhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIGlsKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe3ZhciBjPWEucmV0cnlMYW5lO2EucmV0cnlMYW5lPTAhPT1jJiZjPGI/YzpifX1mdW5jdGlvbiBqbChhLGIpe2lsKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZpbChhLGIpfWZ1bmN0aW9uIGtsKCl7cmV0dXJuIG51bGx9dmFyIGxsPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXBvcnRFcnJvcj9yZXBvcnRFcnJvcjpmdW5jdGlvbihhKXtjb25zb2xlLmVycm9yKGEpfTtmdW5jdGlvbiBtbChhKXt0aGlzLl9pbnRlcm5hbFJvb3Q9YX1cbm5sLnByb3RvdHlwZS5yZW5kZXI9bWwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pbnRlcm5hbFJvb3Q7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IocCg0MDkpKTtnbChhLGIsbnVsbCxudWxsKX07bmwucHJvdG90eXBlLnVubW91bnQ9bWwucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9pbnRlcm5hbFJvb3Q7aWYobnVsbCE9PWEpe3RoaXMuX2ludGVybmFsUm9vdD1udWxsO3ZhciBiPWEuY29udGFpbmVySW5mbztTayhmdW5jdGlvbigpe2dsKG51bGwsYSxudWxsLG51bGwpfSk7Ylt1Zl09bnVsbH19O2Z1bmN0aW9uIG5sKGEpe3RoaXMuX2ludGVybmFsUm9vdD1hfVxubmwucHJvdG90eXBlLnVuc3RhYmxlX3NjaGVkdWxlSHlkcmF0aW9uPWZ1bmN0aW9uKGEpe2lmKGEpe3ZhciBiPUhjKCk7YT17YmxvY2tlZE9uOm51bGwsdGFyZ2V0OmEscHJpb3JpdHk6Yn07Zm9yKHZhciBjPTA7YzxRYy5sZW5ndGgmJjAhPT1iJiZiPFFjW2NdLnByaW9yaXR5O2MrKyk7UWMuc3BsaWNlKGMsMCxhKTswPT09YyYmVmMoYSl9fTtmdW5jdGlvbiBvbChhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSl9ZnVuY3Rpb24gcGwoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfWZ1bmN0aW9uIHFsKCl7fVxuZnVuY3Rpb24gcmwoYSxiLGMsZCxlKXtpZihlKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGY9ZDtkPWZ1bmN0aW9uKCl7dmFyIGE9aGwoZyk7Zi5jYWxsKGEpfX12YXIgZz1mbChiLGQsYSwwLG51bGwsITEsITEsXCJcIixxbCk7YS5fcmVhY3RSb290Q29udGFpbmVyPWc7YVt1Zl09Zy5jdXJyZW50O3NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtTaygpO3JldHVybiBnfWZvcig7ZT1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChlKTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGg9ZDtkPWZ1bmN0aW9uKCl7dmFyIGE9aGwoayk7aC5jYWxsKGEpfX12YXIgaz1jbChhLDAsITEsbnVsbCxudWxsLCExLCExLFwiXCIscWwpO2EuX3JlYWN0Um9vdENvbnRhaW5lcj1rO2FbdWZdPWsuY3VycmVudDtzZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7U2soZnVuY3Rpb24oKXtnbChiLGssYyxkKX0pO3JldHVybiBrfVxuZnVuY3Rpb24gc2woYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7dmFyIGc9ZjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9aGwoZyk7aC5jYWxsKGEpfX1nbChiLGcsYSxlKX1lbHNlIGc9cmwoYyxiLGEsZSxkKTtyZXR1cm4gaGwoZyl9RWM9ZnVuY3Rpb24oYSl7c3dpdGNoKGEudGFnKXtjYXNlIDM6dmFyIGI9YS5zdGF0ZU5vZGU7aWYoYi5jdXJyZW50Lm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXt2YXIgYz10YyhiLnBlbmRpbmdMYW5lcyk7MCE9PWMmJihDYyhiLGN8MSksRWsoYixCKCkpLDA9PT0oSyY2KSYmKEhqPUIoKSs1MDAsamcoKSkpfWJyZWFrO2Nhc2UgMTM6U2soZnVuY3Rpb24oKXt2YXIgYj1aZyhhLDEpO2lmKG51bGwhPT1iKXt2YXIgYz1MKCk7bWgoYixhLDEsYyl9fSksamwoYSwxKX19O1xuRmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9WmcoYSwxMzQyMTc3MjgpO2lmKG51bGwhPT1iKXt2YXIgYz1MKCk7bWgoYixhLDEzNDIxNzcyOCxjKX1qbChhLDEzNDIxNzcyOCl9fTtHYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1saChhKSxjPVpnKGEsYik7aWYobnVsbCE9PWMpe3ZhciBkPUwoKTttaChjLGEsYixkKX1qbChhLGIpfX07SGM9ZnVuY3Rpb24oKXtyZXR1cm4gQ307SWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1DO3RyeXtyZXR1cm4gQz1hLGIoKX1maW5hbGx5e0M9Y319O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjpiYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IocCg5MCkpO1dhKGQpO2JiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1SaztIYj1TaztcbnZhciB0bD17dXNpbmdDbGllbnRFbnRyeVBvaW50OiExLEV2ZW50czpbQ2IsdWUsRGIsRWIsRmIsUmtdfSx1bD17ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6V2MsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxOC4yLjBcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9O1xudmFyIHZsPXtidW5kbGVUeXBlOnVsLmJ1bmRsZVR5cGUsdmVyc2lvbjp1bC52ZXJzaW9uLHJlbmRlcmVyUGFja2FnZU5hbWU6dWwucmVuZGVyZXJQYWNrYWdlTmFtZSxyZW5kZXJlckNvbmZpZzp1bC5yZW5kZXJlckNvbmZpZyxvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlSG9va1N0YXRlRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlSG9va1N0YXRlUmVuYW1lUGF0aDpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxvdmVycmlkZVByb3BzRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlUHJvcHNSZW5hbWVQYXRoOm51bGwsc2V0RXJyb3JIYW5kbGVyOm51bGwsc2V0U3VzcGVuc2VIYW5kbGVyOm51bGwsc2NoZWR1bGVVcGRhdGU6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjp1YS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9WmIoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOnVsLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlfHxcbmtsLGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGwscmVjb25jaWxlclZlcnNpb246XCIxOC4yLjAtbmV4dC05ZTNiNzcyYjgtMjAyMjA2MDhcIn07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB3bD1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXdsLmlzRGlzYWJsZWQmJndsLnN1cHBvcnRzRmliZXIpdHJ5e2tjPXdsLmluamVjdCh2bCksbGM9d2x9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXRsO1xuZXhwb3J0cy5jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighb2woYikpdGhyb3cgRXJyb3IocCgyMDApKTtyZXR1cm4gZGwoYSxiLG51bGwsYyl9O2V4cG9ydHMuY3JlYXRlUm9vdD1mdW5jdGlvbihhLGIpe2lmKCFvbChhKSl0aHJvdyBFcnJvcihwKDI5OSkpO3ZhciBjPSExLGQ9XCJcIixlPWxsO251bGwhPT1iJiZ2b2lkIDAhPT1iJiYoITA9PT1iLnVuc3RhYmxlX3N0cmljdE1vZGUmJihjPSEwKSx2b2lkIDAhPT1iLmlkZW50aWZpZXJQcmVmaXgmJihkPWIuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yi5vblJlY292ZXJhYmxlRXJyb3ImJihlPWIub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1jbChhLDEsITEsbnVsbCxudWxsLGMsITEsZCxlKTthW3VmXT1iLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO3JldHVybiBuZXcgbWwoYil9O1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcihwKDE4OCkpO2E9T2JqZWN0LmtleXMoYSkuam9pbihcIixcIik7dGhyb3cgRXJyb3IocCgyNjgsYSkpO31hPVpiKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSl7cmV0dXJuIFNrKGEpfTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFwbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBzbChudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLmh5ZHJhdGVSb290PWZ1bmN0aW9uKGEsYixjKXtpZighb2woYSkpdGhyb3cgRXJyb3IocCg0MDUpKTt2YXIgZD1udWxsIT1jJiZjLmh5ZHJhdGVkU291cmNlc3x8bnVsbCxlPSExLGY9XCJcIixnPWxsO251bGwhPT1jJiZ2b2lkIDAhPT1jJiYoITA9PT1jLnVuc3RhYmxlX3N0cmljdE1vZGUmJihlPSEwKSx2b2lkIDAhPT1jLmlkZW50aWZpZXJQcmVmaXgmJihmPWMuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yy5vblJlY292ZXJhYmxlRXJyb3ImJihnPWMub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1mbChiLG51bGwsYSwxLG51bGwhPWM/YzpudWxsLGUsITEsZixnKTthW3VmXT1iLmN1cnJlbnQ7c2YoYSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9ZFthXSxlPWMuX2dldFZlcnNpb24sZT1lKGMuX3NvdXJjZSksbnVsbD09Yi5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2IubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYyxlXTpiLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChjLFxuZSk7cmV0dXJuIG5ldyBubChiKX07ZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFwbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBzbChudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFwbChhKSl0aHJvdyBFcnJvcihwKDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oU2soZnVuY3Rpb24oKXtzbChudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbdWZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1SaztcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXBsKGMpKXRocm93IEVycm9yKHAoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IocCgzOCkpO3JldHVybiBzbChhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTguMi4wLW5leHQtOWUzYjc3MmI4LTIwMjIwNjA4XCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtcbmV4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9O1xuZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjIuMFwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIGYoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzA8Yzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKDA8ZyhlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gMD09PWEubGVuZ3RoP251bGw6YVswXX1mdW5jdGlvbiBrKGEpe2lmKDA9PT1hLmxlbmd0aClyZXR1cm4gbnVsbDt2YXIgYj1hWzBdLGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aCx3PWU+Pj4xO2Q8dzspe3ZhciBtPTIqKGQrMSktMSxDPWFbbV0sbj1tKzEseD1hW25dO2lmKDA+ZyhDLGMpKW48ZSYmMD5nKHgsQyk/KGFbZF09eCxhW25dPWMsZD1uKTooYVtkXT1DLGFbbV09YyxkPW0pO2Vsc2UgaWYobjxlJiYwPmcoeCxjKSlhW2RdPXgsYVtuXT1jLGQ9bjtlbHNlIGJyZWFrIGF9fXJldHVybiBifVxuZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH1pZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19dmFyIHI9W10sdD1bXSx1PTEsdj1udWxsLHk9Myx6PSExLEE9ITEsQj0hMSxEPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bnVsbCxFPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0Om51bGwsRj1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRJbW1lZGlhdGU6bnVsbDtcblwidW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiZ2b2lkIDAhPT1uYXZpZ2F0b3Iuc2NoZWR1bGluZyYmdm9pZCAwIT09bmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcmJm5hdmlnYXRvci5zY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nLmJpbmQobmF2aWdhdG9yLnNjaGVkdWxpbmcpO2Z1bmN0aW9uIEcoYSl7Zm9yKHZhciBiPWgodCk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylrKHQpO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpayh0KSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLGYocixiKTtlbHNlIGJyZWFrO2I9aCh0KX19ZnVuY3Rpb24gSChhKXtCPSExO0coYSk7aWYoIUEpaWYobnVsbCE9PWgocikpQT0hMCxJKEopO2Vsc2V7dmFyIGI9aCh0KTtudWxsIT09YiYmSyhILGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIEooYSxiKXtBPSExO0ImJihCPSExLEUoTCksTD0tMSk7ej0hMDt2YXIgYz15O3RyeXtHKGIpO2Zvcih2PWgocik7bnVsbCE9PXYmJighKHYuZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFNKCkpOyl7dmFyIGQ9di5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7di5jYWxsYmFjaz1udWxsO3k9di5wcmlvcml0eUxldmVsO3ZhciBlPWQodi5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP3YuY2FsbGJhY2s9ZTp2PT09aChyKSYmayhyKTtHKGIpfWVsc2UgayhyKTt2PWgocil9aWYobnVsbCE9PXYpdmFyIHc9ITA7ZWxzZXt2YXIgbT1oKHQpO251bGwhPT1tJiZLKEgsbS5zdGFydFRpbWUtYik7dz0hMX1yZXR1cm4gd31maW5hbGx5e3Y9bnVsbCx5PWMsej0hMX19dmFyIE49ITEsTz1udWxsLEw9LTEsUD01LFE9LTE7XG5mdW5jdGlvbiBNKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCktUTxQPyExOiEwfWZ1bmN0aW9uIFIoKXtpZihudWxsIT09Tyl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtRPWE7dmFyIGI9ITA7dHJ5e2I9TyghMCxhKX1maW5hbGx5e2I/UygpOihOPSExLE89bnVsbCl9fWVsc2UgTj0hMX12YXIgUztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgRilTPWZ1bmN0aW9uKCl7RihSKX07ZWxzZSBpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgVD1uZXcgTWVzc2FnZUNoYW5uZWwsVT1ULnBvcnQyO1QucG9ydDEub25tZXNzYWdlPVI7Uz1mdW5jdGlvbigpe1UucG9zdE1lc3NhZ2UobnVsbCl9fWVsc2UgUz1mdW5jdGlvbigpe0QoUiwwKX07ZnVuY3Rpb24gSShhKXtPPWE7Tnx8KE49ITAsUygpKX1mdW5jdGlvbiBLKGEsYil7TD1EKGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9XG5leHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7QXx8enx8KEE9ITAsSShKKSl9O1xuZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6UD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiB5fTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGgocil9O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goeSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9eX12YXIgYz15O3k9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e3k9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O1xuZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9eTt5PWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXt5PWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6dSsrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsZih0LGEpLG51bGw9PT1oKHIpJiZhPT09aCh0KSYmKEI/KEUoTCksTD0tMSk6Qj0hMCxLKEgsYy1kKSkpOihhLnNvcnRJbmRleD1lLGYocixhKSxBfHx6fHwoQT0hMCxJKEopKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1NO2V4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPXk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9eTt5PWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e3k9Y319fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uYWwgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIGlmKHByb3BzLnByZXZWYWx1ZXMubGVuZ3RoICE9IDApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnByZXZWYWx1ZXNbMF1cclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeUNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXZlbG9wZXJUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGdpdGh1YjogXCJcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZU5vOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0aGlzLmNvdW50cnlTZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0sICgpPT50aGlzLnByb3BzLmZvcm1VcGRhdGUodGhpcy5zdGF0ZSwgJ3BlcnNvbmFsJywgdGhpcy5wcm9wcy5pZCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50cnlTZWxlY3RlZChldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldj0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiRGV2ZWxvcGVyIFR5cGVcIiBuYW1lPVwiZGV2ZWxvcGVyVHlwZVwiIHJlcXVpcmVkIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXZlbG9wZXJUeXBlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZU51bWJlciBmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmNvdW50cnlTZWxlY3RlZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIis5MVwiPkluZGlhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIis5OTdcIj5OZXBhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIis5MlwiPlBha2lzdGFuPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lTm9cIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIG1heExlbmd0aD1cIjEwXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTm99IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2l0aHViXCIgcGxhY2Vob2xkZXI9XCJHaXRIdWJcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gdmFsdWU9e3RoaXMuc3RhdGUuZ2l0aHVifSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGlzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiByZXF1aXJlZCBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGlzY3JpcHRpb259IHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgeW91cnNlbGYuLi4uXCI+PC90ZXh0YXJlYT5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcmV2VmFsdWVzLnByb2plY3ROYW1lID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3ViRGVzOiAnJyxcclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uOiAnJ1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5wcmV2VmFsdWVzXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+dGhpcy5wcm9wcy5mb3JtVXBkYXRlKHRoaXMuc3RhdGUsICdwcm9qZWN0cycsIHRoaXMucHJvcHMuaWQpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0U3ViRGVzXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IFN1YiBEZXNjcmliZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3RTdWJEZXN9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdFR5cGVcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgVHlwZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3RUeXBlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkaXNjcmlwdGlvblwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kaXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIHByb2plY3QuLi4uXCI+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkdWNhdGlvbiBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcmV2VmFsdWVzLmNvdXJzZSA9PT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5zdGl0dWRlTmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRlZERhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW5kaW5nRGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogJydcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnByZXZWYWx1ZXNcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+dGhpcy5wcm9wcy5mb3JtVXBkYXRlKHRoaXMuc3RhdGUsICdlZHVjYXRpb24nLCB0aGlzLnByb3BzLmlkKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0aXR1ZGVOYW1lXCIgcGxhY2Vob2xkZXI9XCJJbnN0aXR1ZGUgTmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmluc3RpdHVkZU5hbWV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdXJzZVwiIHBsYWNlaG9sZGVyPVwiQ291cnNlXCIgdmFsdWU9e3RoaXMuc3RhdGUuY291cnNlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFydGVkVGltZVwiPlN0YXJ0ZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJtb250aFwiIG5hbWU9XCJzdGFydGVkRGF0ZVwiIGlkPVwic3RhcnRlZFRpbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydGVkRGF0ZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRpbmdUaW1lXCI+RW5kaW5nIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibW9udGhcIiBuYW1lPVwiZW5kaW5nRGF0ZVwiIGlkPVwiZW5kZWRUaW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW5kaW5nRGF0ZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRpc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLmRpc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHdoYXQgeW91IHN0dWR5Li4uLi4uXCI+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lV29yayBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcmV2VmFsdWVzLmZyYW1lV29yayA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZnJhbWVXb3JrOiAnJ1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5wcmV2VmFsdWVzXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+dGhpcy5wcm9wcy5mb3JtVXBkYXRlKHRoaXMuc3RhdGUsICdmcmFtZVdvcmsnLCB0aGlzLnByb3BzLmlkKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZyYW1lV29ya1wiIHBsYWNlaG9sZGVyPVwiRnJhbWV3b3JrXCIgdmFsdWU9e3RoaXMuc3RhdGUuZnJhbWVXb3JrfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlcyBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcmV2VmFsdWVzLmxhbmd1YWdlcyA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VzOiAnJ1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5wcmV2VmFsdWVzXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+dGhpcy5wcm9wcy5mb3JtVXBkYXRlKHRoaXMuc3RhdGUsICdsYW5ndWFnZScsIHRoaXMucHJvcHMuaWQpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhbmd1YWdlXCIgbmFtZT1cImxhbmd1YWdlc1wiIHJlcXVpcmVkIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYW5ndWFnZXN9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcmllbmNlIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLnByZXZWYWx1ZXMuc3RhcnRlZERhdGUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0ZWREYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIGVuZGluZ0RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgam9iVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueU5hbWU6ICcnXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnByZXZWYWx1ZXNcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmVWYWx1ZSk9PntcclxuXHJcbiAgICAgICAgICAgIHJldHVybntcclxuXHJcbiAgICAgICAgICAgICAgICAuLi5wcmVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgKCk9PnRoaXMucHJvcHMuZm9ybVVwZGF0ZSh0aGlzLnN0YXRlLCAnZXhwZXJpZW5jZScsIHRoaXMucHJvcHMuaWQpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21wYW55TmFtZVwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueSBOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuY29tcGFueU5hbWV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImpvYlRpdGxlXCIgcGxhY2Vob2xkZXI9XCJKb2IgVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5qb2JUaXRsZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcnRlZFRpbWVcIj5TdGFydGVkIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibW9udGhcIiBuYW1lPVwic3RhcnRlZERhdGVcIiBpZD1cInN0YXJ0ZWRUaW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnRlZERhdGV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kaW5nVGltZVwiPkVuZGluZyBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm1vbnRoXCIgbmFtZT1cImVuZGluZ0RhdGVcIiBpZD1cImVuZGVkVGltZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmVuZGluZ0RhdGV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRpc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLmRpc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHdoYXQgeW91IGRpZC4uLi5cIj48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJldlZhbHVlcy50b29sID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b29sOiAnJ1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnByZXZWYWx1ZXNcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKGV2ZW50KXtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJlVmFsdWUpPT57XHJcblxyXG4gICAgICAgICAgICByZXR1cm57XHJcblxyXG4gICAgICAgICAgICAgICAgLi4ucHJlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sICgpPT50aGlzLnByb3BzLmZvcm1VcGRhdGUodGhpcy5zdGF0ZSwgJ3Rvb2xzJywgdGhpcy5wcm9wcy5pZCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0b29sXCIgcGxhY2Vob2xkZXI9XCJUb29sXCIgdmFsdWU9e3RoaXMuc3RhdGUudG9vbH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi9zdHlsZS9mb3JtLmNzcyc7XHJcbmltcG9ydCBQZXJzb25hbCBmcm9tIFwiLi90eXBlc09mRm9ybVZhbHVlL3BlcnNvbmFsLmpzeFwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vdHlwZXNPZkZvcm1WYWx1ZS9wcm9qZWN0cy5qc3hcIjtcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi90eXBlc09mRm9ybVZhbHVlL2VkdWNhdGlvbi5qc3hcIjtcclxuaW1wb3J0IEZyYW1lV29yayBmcm9tIFwiLi90eXBlc09mRm9ybVZhbHVlL2ZyYW1lV29yay5qc3hcIjtcclxuaW1wb3J0IExhbmd1YWdlcyBmcm9tIFwiLi90eXBlc09mRm9ybVZhbHVlL2xhbmd1YWdlcy5qc3hcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4vdHlwZXNPZkZvcm1WYWx1ZS9leHBlcmllbmNlLmpzeFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vdHlwZXNPZkZvcm1WYWx1ZS90b29scy5qc3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICAuLi5kYXRhLmRhdGFcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpZWxkQWRkaW5nID0gdGhpcy5maWVsZEFkZGluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkTW9yZSA9IHRoaXMuYWRkTW9yZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdCA9IHRoaXMuZm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuICAgIGZpZWxkQWRkaW5nKHZhbHVlcywgc3RhdGVUeXBlLCBpZCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJlVmFsdWU9PntcclxuXHJcbiAgICAgICAgICAgIHJldHVybntcclxuXHJcbiAgICAgICAgICAgICAgICAuLi5wcmVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtzdGF0ZVR5cGVdOiBbLi4ucHJlVmFsdWVbc3RhdGVUeXBlXS5zbGljZSgwLHBhcnNlSW50KGlkKSksIHZhbHVlcywgLi4ucHJlVmFsdWVbc3RhdGVUeXBlXS5zbGljZShwYXJzZUludChpZCArIDEpLCAtMSldICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+Y29uc29sZS5sb2codGhpcy5zdGF0ZSkpXHJcblxyXG4gICAgfVxyXG4gICAgYWRkTW9yZSh0eXBlKXtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmVWYWx1ZT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgICAgIC4uLnByZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW3R5cGVdOiBbLi4ucHJlVmFsdWVbdHlwZV0sIHt9XVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAoKT0+Y29uc29sZS5sb2codGhpcy5zdGF0ZSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JtU3VibWl0KGV2ZW50KXtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmZvcm1GaWxsZWRDaGVjayh0aGlzLnN0YXRlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuZm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlBlcnNvbmFsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmFsIGtleT17MH0gaWQ9ezB9IGZvcm1VcGRhdGU9e3RoaXMuZmllbGRBZGRpbmd9IHByZXZWYWx1ZXM9e3RoaXMuc3RhdGUucGVyc29uYWx9Lz4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkVkdWNhdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmFkZE1vcmUoJ2VkdWNhdGlvbicpfSBjbGFzc05hbWU9XCJhZGRCdXR0b25cIj5BZGQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZWR1Y2F0aW9uKS5tYXAoKHZhbHVlLCBpbmRleCkgPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RWR1Y2F0aW9uIGtleT17aW5kZXh9IGlkPXtpbmRleH0gZm9ybVVwZGF0ZT17dGhpcy5maWVsZEFkZGluZ30gcHJldlZhbHVlcz17dGhpcy5zdGF0ZS5lZHVjYXRpb25baW5kZXhdfS8+ICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmFkZE1vcmUoJ3Byb2plY3RzJyl9IGNsYXNzTmFtZT1cImFkZEJ1dHRvblwiPkFkZDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnByb2plY3RzKS5tYXAoKHZhbHVlLCBpbmRleCkgPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvamVjdHMga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBmb3JtVXBkYXRlPXt0aGlzLmZpZWxkQWRkaW5nfSBwcmV2VmFsdWVzPXt0aGlzLnN0YXRlLnByb2plY3RzW2luZGV4XX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FeHBlcmllbmNlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnRoaXMuYWRkTW9yZSgnZXhwZXJpZW5jZScpfSBjbGFzc05hbWU9XCJhZGRCdXR0b25cIj5BZGQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5leHBlcmllbmNlLm1hcCgodmFsdWUsIGluZGV4KSA9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFeHBlcmllbmNlIGtleT17aW5kZXh9IGlkPXtpbmRleH0gZm9ybVVwZGF0ZT17dGhpcy5maWVsZEFkZGluZ30gcHJldlZhbHVlcz17dGhpcy5zdGF0ZS5leHBlcmllbmNlW2luZGV4XX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5GcmFtZXdvcmsvTGlicmFyeTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmFkZE1vcmUoJ2ZyYW1lV29yaycpfSBjbGFzc05hbWU9XCJhZGRCdXR0b25cIj5BZGQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZnJhbWVXb3JrKS5tYXAoKHZhbHVlLCBpbmRleCkgPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RnJhbWVXb3JrIGtleT17aW5kZXh9IGlkPXtpbmRleH0gZm9ybVVwZGF0ZT17dGhpcy5maWVsZEFkZGluZ30gcHJldlZhbHVlcz17dGhpcy5zdGF0ZS5mcmFtZVdvcmtbaW5kZXhdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkxhbmd1YWdlczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmFkZE1vcmUoJ2xhbmd1YWdlJyl9IGNsYXNzTmFtZT1cImFkZEJ1dHRvblwiPkFkZDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxhbmd1YWdlLm1hcCgodmFsdWUsIGluZGV4KSA9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMYW5ndWFnZXMga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBmb3JtVXBkYXRlPXt0aGlzLmZpZWxkQWRkaW5nfSBwcmV2VmFsdWVzPXt0aGlzLnN0YXRlLmxhbmd1YWdlW2luZGV4XX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub29sczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmFkZE1vcmUoJ3Rvb2xzJyl9IGNsYXNzTmFtZT1cImFkZEJ1dHRvblwiPkFkZDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvb2xzLm1hcCgodmFsdWUsIGluZGV4KSA9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29scyBrZXk9e2luZGV4fSBpZD17aW5kZXh9IGZvcm1VcGRhdGU9e3RoaXMuZmllbGRBZGRpbmd9IHByZXZWYWx1ZXM9e3RoaXMuc3RhdGUudG9vbHNbaW5kZXhdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD4gICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi9zdHlsZS9jdi5jc3MnO1xyXG5pbXBvcnQgeyBmb3JtYXQsIGlzQWZ0ZXIsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1YgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuXHJcbiAgICAgICAgICAgIGhpZGU6IGZhbHNlXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGhvbmVObyA9ICcnO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbmZvLmRhdGEucGVyc29uYWxbMF0ucGhvbmVOby5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICBpZihpID09PSAzIHx8IGkgPT09IDcpe1xyXG5cclxuICAgICAgICAgICAgICAgIHBob25lTm8gKz0gJy0nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaG9uZU5vICs9IGluZm8uZGF0YS5wZXJzb25hbFswXS5waG9uZU5vLmNoYXJBdChpKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjdlwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwZXJzb25hbFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmFtZVwiPntpbmZvLmRhdGEucGVyc29uYWxbMF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkZXZlbG9wZXJUeXBlXCI+e2luZm8uZGF0YS5wZXJzb25hbFswXS5kZXZlbG9wZXJUeXBlfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNvY2lhbHMgZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lTm8gZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBob25lIDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmFsdWVcIj57aW5mby5kYXRhLnBlcnNvbmFsWzBdLmNvdW50cnlDb2RlfSB7cGhvbmVOb308L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsIGZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FbWFpbCA6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZhbHVlXCI+e2luZm8uZGF0YS5wZXJzb25hbFswXS5lbWFpbH08L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpdGh1YiBmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+R2l0aHViIDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmFsdWVcIj57aW5mby5kYXRhLnBlcnNvbmFsWzBdLmdpdGh1Yn08L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbmFsRGVzY3JpcHRpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2luZm8uZGF0YS5wZXJzb25hbFswXS5kaXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTa2lsbHMgZ3JpZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGFuZ3VhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvdW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLmRhdGEubGFuZ3VhZ2UubWFwKCh2YWwsIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmFsLmxhbmd1YWdlc308L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWVXb3JrXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5GcmFtZVdvcmsvTGlicmFyeTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLmRhdGEuZnJhbWVXb3JrLm1hcCgodmFsLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmFsLmZyYW1lV29ya308L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VG9vbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZm8uZGF0YS50b29scy5tYXAoKHZhbCwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e3ZhbC50b29sfTwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlByb2plY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby5kYXRhLnByb2plY3RzLm1hcCgodmFsLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInByb2plY3QgY3ZDb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdE5hbWVcIj57dmFsLnByb2plY3ROYW1lfSw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dmFsLnByb2plY3RTdWJEZXN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvamVjdFR5cGVcIj57dmFsLnByb2plY3RUeXBlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY3JpcHRpb25cIj57dmFsLmRpc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbnNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+RWR1Y2F0aW9uPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLmRhdGEuZWR1Y2F0aW9uLm1hcCgodmFsLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJlZHVjYXRpb24gY3ZDb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW5zdGl0dWRlTmFtZVwiPnt2YWwuaW5zdGl0dWRlTmFtZX0sPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2YWwuY291cnNlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUgZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGFydERhdGVcIj57Zm9ybWF0KHBhcnNlSVNPKHZhbC5zdGFydGVkRGF0ZSksICdNTU0geXl5eScpfSAtPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJlbmRpbmdEYXRlXCI+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZnRlcihwYXJzZUlTTyh2YWwuZW5kaW5nRGF0ZSksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSk/ICdDdXJyZW50JzogZm9ybWF0KHBhcnNlSVNPKHZhbC5lbmRpbmdEYXRlKSwgJ01NTU1NTU0teXl5eScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NyaXB0aW9uXCI+e3ZhbC5kaXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+RXhwZXJpZW5jZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8uZGF0YS5leHBlcmllbmNlLm1hcCgodmFsLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImV4cGVyaWVuY2UgY3ZDb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiam9iTmFtZVwiPnt2YWwuam9iVGl0bGV9LDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2YWwuY29tcGFueU5hbWV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZSBmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGFydERhdGVcIj57Zm9ybWF0KHBhcnNlSVNPKHZhbC5zdGFydGVkRGF0ZSksICdNTU0geXl5eScpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImVuZGluZ0RhdGVcIj4gLSB7aXNBZnRlcihwYXJzZUlTTyh2YWwuZW5kaW5nRGF0ZSksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSk/ICdDdXJyZW50JzogZm9ybWF0KHBhcnNlSVNPKHZhbC5lbmRpbmdEYXRlKSwgJ01NTU1NTU0teXl5eScpfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjcmlwdGlvblwiPnt2YWwuZGlzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybUZpbGwnLEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1GaWxsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVkaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeSh7ZGF0YTp7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uYWw6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkdWNhdGlvbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV29yazogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybUZpbGwnLEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRmlsbGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19Pk5ldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL2Zvcm1GaWxsLmpzeFwiO1xyXG5pbXBvcnQgQ1YgZnJvbSBcIi4vY3YuanN4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1GaWxsZWQ6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1GaWxsJykpLmZvcm1GaWxsZWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JtRmlsbGVkQ2hlY2sgPSB0aGlzLmZvcm1GaWxsZWRDaGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWRpdCA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JtRmlsbGVkQ2hlY2soZGF0YSl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG5cclxuICAgICAgICAgICAgZm9ybUZpbGxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG5cclxuICAgICAgICB9LCAoKT0+e1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybUZpbGwnLEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZvcm1GaWxsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBlZGl0KCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZVZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtRmlsbGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAuLi5wcmVWYWx1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5mb3JtRmlsbGVkID8gPEZvcm0gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBmb3JtRmlsbGVkQ2hlY2s9e3RoaXMuZm9ybUZpbGxlZENoZWNrfS8+OiA8Q1YgZWRpdCA9IHt0aGlzLmVkaXR9Lz59XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCdcclxuXHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykgPT09IG51bGwpe1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoe2RhdGE6e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcnNvbmFsOiBbXSxcclxuICAgICAgICBlZHVjYXRpb246IFtdLFxyXG4gICAgICAgIHByb2plY3RzOiBbXSxcclxuICAgICAgICBmcmFtZVdvcms6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBbXSxcclxuICAgICAgICBleHBlcmllbmNlOiBbXSxcclxuICAgICAgICB0b29sczogW11cclxuXHJcbiAgICB9fSkpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybUZpbGwnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybUZpbGxlZDogZmFsc2VcclxuICAgIFxyXG4gICAgfSkpXHJcblxyXG59XHJcblxyXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcclxuXHJcbiAgICA8QXBwIC8+XHJcblxyXG4pOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBlcnNvbmFsIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwicHJldlZhbHVlcyIsImxlbmd0aCIsInN0YXRlIiwiX29iamVjdFNwcmVhZCIsImFkZHJlc3MiLCJjb3VudHJ5Q29kZSIsImRldmVsb3BlclR5cGUiLCJkaXNjcmlwdGlvbiIsImVtYWlsIiwiZ2l0aHViIiwibmFtZSIsInBob25lTm8iLCJ1cGRhdGVTdGF0ZSIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY291bnRyeVNlbGVjdGVkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJldmVudCIsIl90aGlzMiIsInNldFN0YXRlIiwicHJlVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJmb3JtVXBkYXRlIiwiaWQiLCJwcmV2IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJjb2xzIiwicm93cyIsImRlZmF1bHQiLCJQcm9qZWN0cyIsInByb2plY3ROYW1lIiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0VHlwZSIsInByb2plY3RTdWJEZXMiLCJFZHVjYXRpb24iLCJjb3Vyc2UiLCJpbnN0aXR1ZGVOYW1lIiwic3RhcnRlZERhdGUiLCJlbmRpbmdEYXRlIiwiaHRtbEZvciIsIkZyYW1lV29yayIsImZyYW1lV29yayIsIkxhbmd1YWdlcyIsImxhbmd1YWdlcyIsIkV4cGVyaWVuY2UiLCJqb2JUaXRsZSIsImNvbXBhbnlOYW1lIiwiVG9vbHMiLCJ0b29sIiwiRm9ybSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmllbGRBZGRpbmciLCJhZGRNb3JlIiwiZm9ybVN1Ym1pdCIsInZhbHVlcyIsInN0YXRlVHlwZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNsaWNlIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiLCJmb3JtRmlsbGVkQ2hlY2siLCJfdGhpczQiLCJvblN1Ym1pdCIsInBlcnNvbmFsIiwib25DbGljayIsImVkdWNhdGlvbiIsIm1hcCIsImluZGV4IiwicHJvamVjdHMiLCJleHBlcmllbmNlIiwibGFuZ3VhZ2UiLCJ0b29scyIsImZvcm1hdCIsImlzQWZ0ZXIiLCJwYXJzZUlTTyIsIkNWIiwiaGlkZSIsImluZm8iLCJpIiwiY2hhckF0IiwidmFsIiwiRGF0ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmb3JtRmlsbGVkIiwiZWRpdCIsIkFwcCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiUmVhY3RET00iLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=