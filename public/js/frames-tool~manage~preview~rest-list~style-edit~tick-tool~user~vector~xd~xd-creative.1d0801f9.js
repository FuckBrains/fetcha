(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["frames-tool~manage~preview~rest-list~style-edit~tick-tool~user~vector~xd~xd-creative"],{"450d":function(t,e,n){},"4b26":function(t,e,n){"use strict";e.__esModule=!0;var o=n("2b0e"),r=a(o),i=n("5924");function a(t){return t&&t.__esModule?t:{default:t}}var s=!1,l=!1,d=void 0,u=function(){if(!r.default.prototype.$isServer){var t=f.modalDom;return t?s=!0:(s=!1,t=document.createElement("div"),f.modalDom=t,t.addEventListener("touchmove",(function(t){t.preventDefault(),t.stopPropagation()})),t.addEventListener("click",(function(){f.doOnModalClick&&f.doOnModalClick()}))),t}},c={},f={modalFade:!0,getInstance:function(t){return c[t]},register:function(t,e){t&&e&&(c[t]=e)},deregister:function(t){t&&(c[t]=null,delete c[t])},nextZIndex:function(){return f.zIndex++},modalStack:[],doOnModalClick:function(){var t=f.modalStack[f.modalStack.length-1];if(t){var e=f.getInstance(t.id);e&&e.closeOnClickModal&&e.close()}},openModal:function(t,e,n,o,a){if(!r.default.prototype.$isServer&&t&&void 0!==e){this.modalFade=a;for(var l=this.modalStack,d=0,c=l.length;d<c;d++){var f=l[d];if(f.id===t)return}var p=u();if((0,i.addClass)(p,"v-modal"),this.modalFade&&!s&&(0,i.addClass)(p,"v-modal-enter"),o){var h=o.trim().split(/\s+/);h.forEach((function(t){return(0,i.addClass)(p,t)}))}setTimeout((function(){(0,i.removeClass)(p,"v-modal-enter")}),200),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(p):document.body.appendChild(p),e&&(p.style.zIndex=e),p.tabIndex=0,p.style.display="",this.modalStack.push({id:t,zIndex:e,modalClass:o})}},closeModal:function(t){var e=this.modalStack,n=u();if(e.length>0){var o=e[e.length-1];if(o.id===t){if(o.modalClass){var r=o.modalClass.trim().split(/\s+/);r.forEach((function(t){return(0,i.removeClass)(n,t)}))}e.pop(),e.length>0&&(n.style.zIndex=e[e.length-1].zIndex)}else for(var a=e.length-1;a>=0;a--)if(e[a].id===t){e.splice(a,1);break}}0===e.length&&(this.modalFade&&(0,i.addClass)(n,"v-modal-leave"),setTimeout((function(){0===e.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none",f.modalDom=void 0),(0,i.removeClass)(n,"v-modal-leave")}),200))}};Object.defineProperty(f,"zIndex",{configurable:!0,get:function(){return l||(d=d||(r.default.prototype.$ELEMENT||{}).zIndex||2e3,l=!0),d},set:function(t){d=t}});var p=function(){if(!r.default.prototype.$isServer&&f.modalStack.length>0){var t=f.modalStack[f.modalStack.length-1];if(!t)return;var e=f.getInstance(t.id);return e}};r.default.prototype.$isServer||window.addEventListener("keydown",(function(t){if(27===t.keyCode){var e=p();e&&e.closeOnPressEscape&&(e.handleClose?e.handleClose():e.handleAction?e.handleAction("cancel"):e.close())}})),e.default=f},5128:function(t,e,n){"use strict";e.__esModule=!0,e.PopupManager=void 0;var o=n("2b0e"),r=f(o),i=n("7f4d"),a=f(i),s=n("4b26"),l=f(s),d=n("e62d"),u=f(d),c=n("5924");function f(t){return t&&t.__esModule?t:{default:t}}var p=1,h=void 0;e.default={props:{visible:{type:Boolean,default:!1},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},modalAppendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},beforeMount:function(){this._popupId="popup-"+p++,l.default.register(this._popupId,this)},beforeDestroy:function(){l.default.deregister(this._popupId),l.default.closeModal(this._popupId),this.restoreBodyStyle()},data:function(){return{opened:!1,bodyPaddingRight:null,computedBodyPaddingRight:0,withoutHiddenClass:!0,rendered:!1}},watch:{visible:function(t){var e=this;if(t){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,r.default.nextTick((function(){e.open()})))}else this.close()}},methods:{open:function(t){var e=this;this.rendered||(this.rendered=!0);var n=(0,a.default)({},this.$props||this,t);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var o=Number(n.openDelay);o>0?this._openTimer=setTimeout((function(){e._openTimer=null,e.doOpen(n)}),o):this.doOpen(n)},doOpen:function(t){if(!this.$isServer&&(!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0;var e=this.$el,n=t.modal,o=t.zIndex;if(o&&(l.default.zIndex=o),n&&(this._closing&&(l.default.closeModal(this._popupId),this._closing=!1),l.default.openModal(this._popupId,l.default.nextZIndex(),this.modalAppendToBody?void 0:e,t.modalClass,t.modalFade),t.lockScroll)){this.withoutHiddenClass=!(0,c.hasClass)(document.body,"el-popup-parent--hidden"),this.withoutHiddenClass&&(this.bodyPaddingRight=document.body.style.paddingRight,this.computedBodyPaddingRight=parseInt((0,c.getStyle)(document.body,"paddingRight"),10)),h=(0,u.default)();var r=document.documentElement.clientHeight<document.body.scrollHeight,i=(0,c.getStyle)(document.body,"overflowY");h>0&&(r||"scroll"===i)&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.computedBodyPaddingRight+h+"px"),(0,c.addClass)(document.body,"el-popup-parent--hidden")}"static"===getComputedStyle(e).position&&(e.style.position="absolute"),e.style.zIndex=l.default.nextZIndex(),this.opened=!0,this.onOpen&&this.onOpen(),this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var t=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var e=Number(this.closeDelay);e>0?this._closeTimer=setTimeout((function(){t._closeTimer=null,t.doClose()}),e):this.doClose()}},doClose:function(){this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(this.restoreBodyStyle,200),this.opened=!1,this.doAfterClose()},doAfterClose:function(){l.default.closeModal(this._popupId),this._closing=!1},restoreBodyStyle:function(){this.modal&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.bodyPaddingRight,(0,c.removeClass)(document.body,"el-popup-parent--hidden")),this.withoutHiddenClass=!0}}},e.PopupManager=l.default},5924:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=y,e.addClass=m,e.removeClass=v,e.setStyle=b;var r=n("2b0e"),i=a(r);function a(t){return t&&t.__esModule?t:{default:t}}var s=i.default.prototype.$isServer,l=/([\:\-\_]+(.))/g,d=/^moz([A-Z])/,u=s?0:Number(document.documentMode),c=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},f=function(t){return t.replace(l,(function(t,e,n,o){return o?n.toUpperCase():n})).replace(d,"Moz$1")},p=e.on=function(){return!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),h=e.off=function(){return!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}();e.once=function(t,e,n){var o=function o(){n&&n.apply(this,arguments),h(t,e,o)};p(t,e,o)};function y(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function m(t,e){if(t){for(var n=t.className,o=(e||"").split(" "),r=0,i=o.length;r<i;r++){var a=o[r];a&&(t.classList?t.classList.add(a):y(t,a)||(n+=" "+a))}t.classList||(t.className=n)}}function v(t,e){if(t&&e){for(var n=e.split(" "),o=" "+t.className+" ",r=0,i=n.length;r<i;r++){var a=n[r];a&&(t.classList?t.classList.remove(a):y(t,a)&&(o=o.replace(" "+a+" "," ")))}t.classList||(t.className=c(o))}}var g=e.getStyle=u<9?function(t,e){if(!s){if(!t||!e)return null;e=f(e),"float"===e&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(n){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;e=f(e),"float"===e&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(o){return t.style[e]}}};function b(t,e,n){if(t&&e)if("object"===("undefined"===typeof e?"undefined":o(e)))for(var r in e)e.hasOwnProperty(r)&&b(t,r,e[r]);else e=f(e),"opacity"===e&&u<9?t.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":t.style[e]=n}var w=e.isScroll=function(t,e){if(!s){var n=null!==e||void 0!==e,o=g(t,n?e?"overflow-y":"overflow-x":"overflow");return o.match(/(scroll|auto)/)}};e.getScrollContainer=function(t,e){if(!s){var n=t;while(n){if([window,document,document.documentElement].includes(n))return window;if(w(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),o=void 0;return o=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}},"7f4d":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){for(var e=1,n=arguments.length;e<n;e++){var o=arguments[e]||{};for(var r in o)if(o.hasOwnProperty(r)){var i=o[r];void 0!==i&&(t[r]=i)}}return t}},8122:function(t,e,n){"use strict";e.__esModule=!0,e.isEmpty=e.isEqual=e.arrayEquals=e.looseEqual=e.capitalize=e.kebabCase=e.autoprefixer=e.isFirefox=e.isEdge=e.isIE=e.coerceTruthyValueToArray=e.arrayFind=e.arrayFindIndex=e.escapeRegexpString=e.valueEquals=e.generateId=e.getValueByPath=void 0;var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.noop=d,e.hasOwn=u,e.toObject=f,e.getPropByPath=p,e.rafThrottle=g,e.objToArray=b;var r=n("2b0e"),i=s(r),a=n("a742");function s(t){return t&&t.__esModule?t:{default:t}}var l=Object.prototype.hasOwnProperty;function d(){}function u(t,e){return l.call(t,e)}function c(t,e){for(var n in e)t[n]=e[n];return t}function f(t){for(var e={},n=0;n<t.length;n++)t[n]&&c(e,t[n]);return e}e.getValueByPath=function(t,e){e=e||"";for(var n=e.split("."),o=t,r=null,i=0,a=n.length;i<a;i++){var s=n[i];if(!o)break;if(i===a-1){r=o[s];break}o=o[s]}return r};function p(t,e,n){var o=t;e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,"");for(var r=e.split("."),i=0,a=r.length;i<a-1;++i){if(!o&&!n)break;var s=r[i];if(!(s in o)){if(n)throw new Error("please transfer a valid prop path to form item!");break}o=o[s]}return{o:o,k:r[i],v:o?o[r[i]]:null}}e.generateId=function(){return Math.floor(1e4*Math.random())},e.valueEquals=function(t,e){if(t===e)return!0;if(!(t instanceof Array))return!1;if(!(e instanceof Array))return!1;if(t.length!==e.length)return!1;for(var n=0;n!==t.length;++n)if(t[n]!==e[n])return!1;return!0},e.escapeRegexpString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var h=e.arrayFindIndex=function(t,e){for(var n=0;n!==t.length;++n)if(e(t[n]))return n;return-1},y=(e.arrayFind=function(t,e){var n=h(t,e);return-1!==n?t[n]:void 0},e.coerceTruthyValueToArray=function(t){return Array.isArray(t)?t:t?[t]:[]},e.isIE=function(){return!i.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},e.isEdge=function(){return!i.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},e.isFirefox=function(){return!i.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},e.autoprefixer=function(t){if("object"!==("undefined"===typeof t?"undefined":o(t)))return t;var e=["transform","transition","animation"],n=["ms-","webkit-"];return e.forEach((function(e){var o=t[e];e&&o&&n.forEach((function(n){t[n+e]=o}))})),t},e.kebabCase=function(t){var e=/([^-])([A-Z])/g;return t.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()},e.capitalize=function(t){return(0,a.isString)(t)?t.charAt(0).toUpperCase()+t.slice(1):t},e.looseEqual=function(t,e){var n=(0,a.isObject)(t),o=(0,a.isObject)(e);return n&&o?JSON.stringify(t)===JSON.stringify(e):!n&&!o&&String(t)===String(e)}),m=e.arrayEquals=function(t,e){if(t=t||[],e=e||[],t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!y(t[n],e[n]))return!1;return!0},v=(e.isEqual=function(t,e){return Array.isArray(t)&&Array.isArray(e)?m(t,e):y(t,e)},e.isEmpty=function(t){if(null==t)return!0;if("boolean"===typeof t)return!1;if("number"===typeof t)return!t;if(t instanceof Error)return""===t.message;switch(Object.prototype.toString.call(t)){case"[object String]":case"[object Array]":return!t.length;case"[object File]":case"[object Map]":case"[object Set]":return!t.size;case"[object Object]":return!Object.keys(t).length}return!1});function g(t){var e=!1;return function(){for(var n=this,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];e||(e=!0,window.requestAnimationFrame((function(o){t.apply(n,r),e=!1})))}}function b(t){return Array.isArray(t)?t:v(t)?[]:[t]}},a742:function(t,e,n){"use strict";function o(t){return"[object String]"===Object.prototype.toString.call(t)}function r(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){return t&&t.nodeType===Node.ELEMENT_NODE}e.__esModule=!0,e.isString=o,e.isObject=r,e.isHtmlElement=i;e.isFunction=function(t){var e={};return t&&"[object Function]"===e.toString.call(t)},e.isUndefined=function(t){return void 0===t},e.isDefined=function(t){return void 0!==t&&null!==t}},b5f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{constructor(t,e){this.ctx=t,this.path=e}serialize(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&t[n]&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}async getOne(t){const e=await this.ctx.get(`${this.path}/${t}`);return e.data.data}async list(t){const e=await this.ctx.get(`${this.path}?${this.serialize(t)}`);return e.data.data}async multiGet(t){const e=await this.ctx.post(this.path+"/id",{ids:t});return e.data.data}async update(t){return t._id&&await this.delete(t),delete t._id,this.create(t)}async createOrPatch(t){return t._id?this.patch(t._id,t):(delete t._id,this.create(t))}async create(t){const e=await this.ctx.post(""+this.path,t);return e.data.data}async regex(t,e,n){const o=await this.ctx.get(`${this.path}/regex/${t}/${e}?limit=${n||1e3}`);return o.data.data}async patch(t,e){const n=await this.ctx.patch(`${this.path}/${t}`,e);return n.data.data}async delete(t){if("string"===typeof t){const e=await this.ctx.delete(`${this.path}/${t}`);return e.data.data}{const e=await this.ctx.delete(`${this.path}/${t._id}`);return e.data.data}}async distinct(t,e){const n=await this.ctx.post(`${this.path}/distinct/${t}`,e);return n.data.data}}},e62d:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(){if(r.default.prototype.$isServer)return 0;if(void 0!==a)return a;var t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var o=n.offsetWidth;return t.parentNode.removeChild(t),a=e-o,a};var o=n("2b0e"),r=i(o);function i(t){return t&&t.__esModule?t:{default:t}}var a=void 0}}]);