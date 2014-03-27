/*!
 * selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(e){function _(e){return e.replace(g,M).replace(y,function(e,t,n){var r=n.split(",");for(var i=0,s=r.length;i<s;i++){var o=R(r[i])+O;var u=[];r[i]=o.replace(b,function(e,t,n,r,i){if(t){if(u.length>0){f.push({selector:o.substring(0,i),patches:u});u=[]}return t}else{var s=n?P(n):D(r);if(s){u.push(s);return"."+s.className}return e}})}return t+r.join(",")})}function D(e){return!T||T.test(e)?{className:j(e),applyClass:true}:null}function P(t){var n=true;var i=j(t.slice(1));var o=t.substring(0,5)==":not(";var u;var f;if(o){t=t.slice(5,-1)}var l=t.indexOf("(");if(l>-1){t=t.substring(0,l)}if(t.charAt(0)==":"){switch(t.slice(1)){case"root":n=function(e){return o?e!=r:e==r};break;case"target":if(s==8){n=function(t){var n=function(){var e=location.hash;var n=e.slice(1);return o?e==A||t.id!=n:e!=A&&t.id==n};W(e,"hashchange",function(){U(t,i,n())});return n()};break}return false;case"checked":n=function(e){if(x.test(e.type)){W(e,"propertychange",function(){if(event.propertyName=="checked"){U(e,i,e.checked!==o)}})}return e.checked!==o};break;case"disabled":o=!o;case"enabled":n=function(e){if(S.test(e.tagName)){W(e,"propertychange",function(){if(event.propertyName=="$disabled"){U(e,i,e.$disabled===o)}});a.push(e);e.$disabled=e.disabled;return e.disabled===o}return t==":enabled"?o:!o};break;case"focus":u="focus";f="blur";case"hover":if(!u){u="mouseenter";f="mouseleave"}n=function(e){W(e,o?f:u,function(){U(e,i,true)});W(e,o?u:f,function(){U(e,i,false)});return o};break;default:if(!m.test(t)){return false}break}}return{className:i,applyClass:n}}function H(){var e,t,n,r;for(var i=0;i<f.length;i++){t=f[i].selector;n=f[i].patches;r=t.replace(w,A);if(r==A||r.charAt(r.length-1)==O){r+="*"}try{e=u(r)}catch(s){F("Selector '"+t+"' threw exception '"+s+"'")}if(e){for(var o=0,a=e.length;o<a;o++){var l=e[o];var c=l.className;for(var h=0,p=n.length;h<p;h++){var d=n[h];if(!B(l,d)){if(d.applyClass&&(d.applyClass===true||d.applyClass(l)===true)){c=z(c,d.className,true)}}}l.className=c}}}}function B(e,t){return(new RegExp("(^|\\s)"+t.className+"(\\s|$)")).test(e.className)}function j(e){return h+"-"+(s==6&&c?l++:e.replace(E,function(e){return e.charCodeAt(0)}))}function F(t){if(e.console){e.console.log(t)}}function I(e){return e.replace(L,M)}function q(e){return I(e).replace(k,O)}function R(e){return q(e.replace(N,M).replace(C,M))}function U(e,t,n){var r=e.className;var i=z(r,t,n);if(i!=r){e.className=i;e.parentNode.className+=A}}function z(e,t,n){var r=RegExp("(^|\\s)"+t+"(\\s|$)");var i=r.test(e);if(n){return i?e:e+O+t}else{return i?I(e.replace(r,M)):e}}function W(e,t,n){e.attachEvent("on"+t,n)}function X(){if(e.XMLHttpRequest){return new XMLHttpRequest}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){return null}}function V(e){i.open("GET",e,false);i.send();return i.status==200?i.responseText:A}function $(e,t,n){function r(e){return e.substring(0,e.indexOf("//"))}function i(e){return e.substring(0,e.indexOf("/",8))}if(!t){t=Y}if(e.substring(0,2)=="//"){e=r(t)+e}if(/^https?:\/\//i.test(e)){return!n&&i(t)!=i(e)?null:e}if(e.charAt(0)=="/"){return i(t)+e}var s=t.split(/[?#]/)[0];if(e.charAt(0)!="?"&&s.charAt(s.length-1)!="/"){s=s.substring(0,s.lastIndexOf("/")+1)}return s+e}function J(e){if(e){return V(e).replace(p,A).replace(d,function(t,n,r,i,s,o){var u=J($(r||s,e));return o?"@media "+o+" {"+u+"}":u}).replace(v,function(t,n,r,i){r=r||A;return n?t:" url("+r+$(i,e,true)+r+") "})}return A}function K(){var e,t;for(var r=0;r<n.styleSheets.length;r++){t=n.styleSheets[r];if(t.href!=A){e=$(t.href);if(e){t.cssText=t["rawCssText"]=_(J(e))}}}}function Q(){H();if(a.length>0){setInterval(function(){for(var e=0,t=a.length;e<t;e++){var n=a[e];if(n.disabled!==n.$disabled){if(n.disabled){n.disabled=false;n.$disabled=true;n.disabled=true}else{n.$disabled=n.disabled}}}},250)}}function Z(e,t){var i=false,s=true,o=function(r){if(r.type=="readystatechange"&&n.readyState!="complete")return;(r.type=="load"?e:n).detachEvent("on"+r.type,o,false);if(!i&&(i=true))t.call(e,r.type||r)},u=function(){try{r.doScroll("left")}catch(e){setTimeout(u,50);return}o("poll")};if(n.readyState=="complete")t.call(e,A);else{if(n.createEventObject&&r.doScroll){try{s=!e.frameElement}catch(a){}if(s)u()}W(n,"readystatechange",o);W(e,"load",o)}}var t=navigator.userAgent.match(/MSIE (\d+)/);if(!t){return false}var n=document;var r=n.documentElement;var i=X();var s=t[1];if(n.compatMode!="CSS1Compat"||s<6||s>8||!i){return}var o={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"};var u;var a=[];var f=[];var l=0;var c=true;var h="slvzr";var p=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;var d=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;var v=/(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;var m=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;var g=/:(:first-(?:line|letter))/g;var y=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;var b=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;var w=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;var E=/[^\w-]/g;var S=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/;var x=/^(checkbox|radio)$/;var T=s>6?/[\$\^*]=(['"])\1/:null;var N=/([(\[+~])\s+/g;var C=/\s+([)\]+~])/g;var k=/\s+/g;var L=/^\s*((?:[\S\s]*\S)?)\s*$/;var A="";var O=" ";var M="$1";var G=n.getElementsByTagName("BASE");var Y=G.length>0?G[0].href:n.location.href;K();Z(e,function(){for(var t in o){var n,r,i=e;if(e[t]){n=o[t].replace("*",t).split(".");while((r=n.shift())&&(i=i[r])){}if(typeof i=="function"){u=i;Q();return}}}});})(this)

/* IE Icon Font Fix */
window.onload = function() {
    var loading_class = document.documentElement.className;
    loading_class = loading_class.replace( 'is-loading', '' );
    document.documentElement.className = loading_class;
}