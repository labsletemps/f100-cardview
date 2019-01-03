/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(m){"use strict";var g=null,p=null;!function(){var t=["webkit","moz","o","ms"],e=m.document.createElement("div"),n=-1,a,i,o,r,s,l,c;
// window.requestAnimationFrame
for(n=0;n<t.length&&!m.requestAnimationFrame;n++)m.requestAnimationFrame=m[t[n]+"RequestAnimationFrame"];
// Element.nextElementSibling
void 0===e.nextElementSibling&&Object.defineProperty(m.Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),(
// Element.matches
a=m.Element.prototype).matches=a.matches||a.machesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector||function(t){return-1<Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t),this)},
// Object.keys
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Object.keys||(Object.keys=(i=Object.prototype.hasOwnProperty,o=!1,r=[],s=-1,o=!{toString:null}.propertyIsEnumerable("toString"),s=(r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){var e=[],n="",a=-1;if("object"!=typeof t&&("function"!=typeof t||null===t))throw new TypeError("Object.keys called on non-object");for(n in t)i.call(t,n)&&e.push(n);if(o)for(a=0;a<s;a++)i.call(t,r[a])&&e.push(r[a]);return e})),
// Array.isArray
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),
// Object.create
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
"function"!=typeof Object.create&&(Object.create=(c=function(){},function(t,e){if(t!==Object(t)&&null!==t)throw TypeError("Argument must be an object, or null");c.prototype=t||{};var n=new c;return c.prototype=null,e!==l&&Object.defineProperties(n,e),null===t&&(
/* jshint ignore:start */
n.__proto__=null),n})),
// String.prototyoe.trim
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),
// Array.prototype.indexOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var n,a,i,o;if(null===this)throw new TypeError;if(0===(o=(i=Object(this)).length>>>0))return-1;if(n=0,1<arguments.length&&((n=Number(e))!=n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(0<n||-1)*Math.floor(Math.abs(n)))),o<=n)return-1;for(a=0<=n?n:Math.max(o-Math.abs(n),0);a<o;a++)if(a in i&&i[a]===t)return a;return-1}),
// Function.prototype.bind
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
Function.prototype.bind||(Function.prototype.bind=function(t){var e,n,a,i;if("function"!=typeof this)throw new TypeError;return e=Array.prototype.slice.call(arguments,1),a=function(){},i=function(){return n.apply(this instanceof a?this:t,e.concat(Array.prototype.slice.call(arguments)))},(n=this).prototype&&(a.prototype=this.prototype),i.prototype=new a,i}),
// Element.prototype.dispatchEvent
m.Element.prototype.dispatchEvent||(m.Element.prototype.dispatchEvent=function(t){try{return this.fireEvent("on"+t.type,t)}catch(t){}});
// Element.matches
}(),
/**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */
(
/**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */
g=function(t,e,n,a){var i=null,o=!1,r=null,s=null,l=null,c=null,u=[],f="",h=[],d=-1;if(l=n||m.document,(o=a)&&(
// A non-documented 4th paramater enabling control of multiple instances
o="boolean"==typeof o),"string"==typeof t)h=l.querySelectorAll(t);else if(t&&"object"==typeof t&&p.isElement(t,l))h=[t];else{if(!t||"object"!=typeof t||!t.length)throw new Error(g.messages.errorFactoryInvalidContainer());
// Although not documented, the container may also be an array-like list of
// elements such as a NodeList or jQuery collection, is returnCollection is true
h=t}if(h.length<1)throw new Error(g.messages.errorFactoryContainerNotFound());for(d=0;(i=h[d])&&(!(0<d)||o);d++)i.id?f=i.id:(f="MixItUp"+p.randomHex(),i.id=f),g.instances[f]instanceof g.Mixer?(r=g.instances[f],(!e||e&&e.debug&&!1!==e.debug.showWarnings)&&console.warn(g.messages.warningFactoryPreexistingInstance())):((r=new g.Mixer).attach(i,l,f,e),g.instances[f]=r),s=new g.Facade(r),e&&e.debug&&e.debug.enable?u.push(r):u.push(s);return c=o?new g.Collection(u):u[0]}).use=function(t){g.Base.prototype.callActions.call(g,"beforeUse",arguments),
// Call the extension's factory function, passing
// the mixitup factory as a paramater
"function"==typeof t&&"mixitup-extension"===t.TYPE?
// Mixitup extension
void 0===g.extensions[t.NAME]&&(t(g),g.extensions[t.NAME]=t):t.fn&&t.fn.jquery&&(
// jQuery
g.libraries.$=t),g.Base.prototype.callActions.call(g,"afterUse",arguments)},g.instances={},g.extensions={},g.libraries={},
/**
     * @private
     */
p={
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */
hasClass:function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */
addClass:function(t,e){this.hasClass(t,e)||(t.className+=t.className?" "+e:e)},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */
removeClass:function(t,e){if(this.hasClass(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ").trim()}},
/**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */
extend:function(e,t,n,a){var i=[],o="",r=-1;n=n||!1,a=a||!1;try{if(Array.isArray(t))for(r=0;r<t.length;r++)i.push(r);else t&&(i=Object.keys(t));for(r=0;r<i.length;r++)o=i[r],!n||"object"!=typeof t[o]||this.isElement(t[o])?
// All non-object properties, or all properties if shallow extend
e[o]=t[o]:(Array.isArray(t[o])?
// Arrays
e[o]||(e[o]=[]):
// Objects
e[o]||(e[o]={}),this.extend(e[o],t[o],n,a))}catch(t){if(!a)throw t;this.handleExtendError(t,e)}return e},
/**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */
handleExtendError:function(t,e){var n,a=null,i="",o="",r="",s="",l="",c=-1,u=-1;if(t instanceof TypeError&&(a=/property "?(\w*)"?[,:] object/i.exec(t.message))){for(l in i=a[1],e){for(u=0;u<i.length&&i.charAt(u)===l.charAt(u);)u++;c<u&&(c=u,s=l)}throw 1<c&&(r=g.messages.errorConfigInvalidPropertySuggestion({probableMatch:s})),o=g.messages.errorConfigInvalidProperty({erroneous:i,suggestion:r}),new TypeError(o)}throw t},
/**
         * @private
         * @param   {string} str
         * @return  {function}
         */
template:function(a){for(var t=/\${([\w]*)}/g,i={},e=null;e=t.exec(a);)i[e[1]]=new RegExp("\\${"+e[1]+"}","g");return function(t){var e="",n=a;for(e in t=t||{},i)n=n.replace(i[e],void 0!==t[e]?t[e]:"");return n}},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */
on:function(t,e,n,a){t&&(t.addEventListener?t.addEventListener(e,n,a):t.attachEvent&&(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](m.event)},t.attachEvent("on"+e,t[e+n])))},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */
off:function(t,e,n){t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+n]),t[e+n]=null))},
/**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */
getCustomEvent:function(t,e,n){var a=null;return n=n||m.document,"function"==typeof m.CustomEvent?a=new m.CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0}):"function"==typeof n.createEvent?(a=n.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,e):((a=n.createEventObject()).type=t,a.returnValue=!1,a.cancelBubble=!1,a.detail=e),a},
/**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */
getOriginalEvent:function(t){return t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */
index:function(t,e){for(var n=0;null!==(t=t.previousElementSibling);)e&&!t.matches(e)||++n;return n},
/**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */
camelCase:function(t){return t.toLowerCase().replace(/([_-][a-z])/g,function(t){return t.toUpperCase().replace(/[_-]/,"")})},
/**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */
pascalCase:function(t){return(t=this.camelCase(t)).charAt(0).toUpperCase()+t.slice(1)},
/**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */
dashCase:function(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()},
/**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */
isElement:function(t,e){return e=e||m.document,!!(m.HTMLElement&&t instanceof m.HTMLElement)||(!!(e.defaultView&&e.defaultView.HTMLElement&&t instanceof e.defaultView.HTMLElement)||null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)},
/**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */
createElement:function(t,e){var n=null,a=null;for(n=(e=e||m.document).createDocumentFragment(),(a=e.createElement("div")).innerHTML=t.trim();a.firstChild;)n.appendChild(a.firstChild);return n},
/**
         * @private
         * @param   {Node} node
         * @return  {void}
         */
removeWhitespace:function(t){for(var e;t&&"#text"===t.nodeName;)t=(e=t).previousSibling,e.parentElement&&e.parentElement.removeChild(e)},
/**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */
isEqualArray:function(t,e){var n=t.length;if(n!==e.length)return!1;for(;n--;)if(t[n]!==e[n])return!1;return!0},
/**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */
deepEquals:function(t,e){var n;if("object"==typeof t&&t&&"object"==typeof e&&e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(!e.hasOwnProperty(n)||!this.deepEquals(t[n],e[n]))return!1}else if(t!==e)return!1;return!0},
/**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */
arrayShuffle:function(t){for(var e=t.slice(),n=e.length,a=n,i=-1,o=[];a--;)i=~~(Math.random()*n),o=e[a],e[a]=e[i],e[i]=o;return e},
/**
         * @private
         * @param   {object}    list
         */
arrayFromList:function(e){var n,a;try{return Array.prototype.slice.call(e)}catch(t){for(n=[],a=0;a<e.length;a++)n.push(e[a]);return n}},
/**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */
debounce:function(i,o,r){var s;return function(){var t=this,e=arguments,n=r&&!s,a=null;a=function(){s=null,r||i.apply(t,e)},clearTimeout(s),s=setTimeout(a,o),n&&i.apply(t,e)}},
/**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */
position:function(t){for(var e=0,n=0,a=t;t;)e-=t.scrollLeft,n-=t.scrollTop,t===a&&(e+=t.offsetLeft,n+=t.offsetTop,a=t.offsetParent),t=t.parentElement;return{x:e,y:n}},
/**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */
getHypotenuse:function(t,e){var n=t.x-e.x,a=t.y-e.y;return n=n<0?-1*n:n,a=a<0?-1*a:a,Math.sqrt(Math.pow(n,2)+Math.pow(a,2))},
/**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */
getIntersectionRatio:function(t,e){var n=t.width*t.height,a=-1,i=-1,o=-1,r=-1;return a=Math.max(0,Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left)),r=(o=(i=Math.max(0,Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top)))*a)/n},
/**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */
closestParent:function(t,e,n,a){var i=t.parentNode;if(a=a||m.document,n&&t.matches(e))return t;for(;i&&i!=a.body;){if(i.matches&&i.matches(e))return i;if(!i.parentNode)return null;i=i.parentNode}return null},
/**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */
children:function(t,e,n){var a=[],i="";return n=n||m.doc,t&&(t.id||(i="Temp"+this.randomHexKey(),t.id=i),a=n.querySelectorAll("#"+t.id+" > "+e),i&&t.removeAttribute("id")),a},
/**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */
clean:function(t){var e=[],n=-1;for(n=0;n<t.length;n++)""!==t[n]&&e.push(t[n]);return e},
/**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */
defer:function(t){var e=null,n=null,a=null;return n=new this.Deferred,g.features.has.promises?
// ES6 native promise or polyfill
n.promise=new Promise(function(t,e){n.resolve=t,n.reject=e}):(a=m.jQuery||t.$)&&"function"==typeof a.Deferred?(
// jQuery
e=a.Deferred(),n.promise=e.promise(),n.resolve=e.resolve,n.reject=e.reject):m.console&&
// No implementation
console.warn(g.messages.warningNoPromiseImplementation()),n},
/**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */
all:function(t,e){var n=null;return g.features.has.promises?Promise.all(t):(n=m.jQuery||e.$)&&"function"==typeof n.when?n.when.apply(n,t).done(function(){
// jQuery when returns spread arguments rather than an array or resolutions
return arguments}):(
// No implementation
m.console&&console.warn(g.messages.warningNoPromiseImplementation()),[])},
/**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */
getPrefix:function(t,e,n){var a=-1,i="";if(p.dashCase(e)in t.style)return"";for(a=0;i=n[a];a++)if(i+e in t.style)return i.toLowerCase();return"unsupported"},
/**
         * @private
         * @return  {string}
         */
randomHex:function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()},
/**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */
getDocumentState:function(t){return t="object"==typeof t.body?t:m.document,{scrollTop:m.pageYOffset,scrollLeft:m.pageXOffset,docHeight:t.documentElement.scrollHeight,docWidth:t.documentElement.scrollWidth,viewportHeight:t.documentElement.clientHeight,viewportWidth:t.documentElement.clientWidth}},
/**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */
bind:function(t,e){return function(){return e.apply(t,arguments)}},
/**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */
isVisible:function(t){var e=null;return!!t.offsetParent||"fixed"===(e=m.getComputedStyle(t)).position&&"hidden"!==e.visibility&&"0"!==e.opacity},
/**
         * @private
         * @param   {object}    obj
         */
seal:function(t){"function"==typeof Object.seal&&Object.seal(t)},
/**
         * @private
         * @param   {object}    obj
         */
freeze:function(t){"function"==typeof Object.freeze&&Object.freeze(t)},
/**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */
compareVersions:function(t,e){var n=t.split("."),a=e.split("."),i=-1,o=-1,r=-1;for(r=0;r<n.length;r++){if(i=parseInt(n[r].replace(/[^\d.]/g,"")),(o=parseInt(a[r].replace(/[^\d.]/g,"")||0))<i)return!1;if(i<o)return!0}return!0},
/**
         * @private
         * @constructor
         */
Deferred:function(){this.promise=null,this.resolve=null,this.reject=null,this.id=p.randomHex()},
/**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */
isEmptyObject:function(t){var e="";if("function"==typeof Object.keys)return 0===Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0},
/**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */
getClassname:function(t,e,n){var a="";return(a+=t.block).length&&(a+=t.delineatorElement),a+=t["element"+this.pascalCase(e)],n?(a.length&&(a+=t.delineatorModifier),a+=n):a},
/**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */
getProperty:function(t,e){var n=e.split("."),a=null,i="",o=0;if(!e)return t;for(a=function(t){return t?t[i]:null};o<n.length;)i=n[o],t=a(t),o++;return void 0!==t?t:null}},g.h=p,
/**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Base=function(){},g.Base.prototype={constructor:g.Base,
/**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */
callActions:function(t,e){var n=this,a=n.constructor.actions[t],i="";if(a&&!p.isEmptyObject(a))for(i in a)a[i].apply(n,e)},
/**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */
callFilters:function(t,e,n){var a=this,i=a.constructor.filters[t],o=e,r="";if(!i||p.isEmptyObject(i))return o;for(r in n=n||[],i)(n=p.arrayFromList(n)).unshift(o),o=i[r].apply(a,n);return o}},
/**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.BaseStatic=function(){this.actions={},this.filters={},
/**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */
this.extend=function(t){p.extend(this.prototype,t)},
/**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */
this.registerAction=function(t,e,n){(this.actions[t]=this.actions[t]||{})[e]=n},
/**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */
this.registerFilter=function(t,e,n){(this.filters[t]=this.filters[t]||{})[e]=n}},
/**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Features=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.boxSizingPrefix="",this.transformPrefix="",this.transitionPrefix="",this.boxSizingPrefix="",this.transformProp="",this.transformRule="",this.transitionProp="",this.perspectiveProp="",this.perspectiveOriginProp="",this.has=new g.Has,this.canary=null,this.BOX_SIZING_PROP="boxSizing",this.TRANSITION_PROP="transition",this.TRANSFORM_PROP="transform",this.PERSPECTIVE_PROP="perspective",this.PERSPECTIVE_ORIGIN_PROP="perspectiveOrigin",this.VENDORS=["Webkit","moz","O","ms"],this.TWEENABLE=["opacity","width","height","marginRight","marginBottom","x","y","scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],this.callActions("afterConstruct")},g.BaseStatic.call(g.Features),g.Features.prototype=Object.create(g.Base.prototype),p.extend(g.Features.prototype,
/** @lends mixitup.Features */
{constructor:g.Features,
/**
         * @private
         * @return  {void}
         */
init:function(){var t=this;t.callActions("beforeInit",arguments),t.canary=document.createElement("div"),t.setPrefixes(),t.runTests(),t.callActions("beforeInit",arguments)},
/**
         * @private
         * @return  {void}
         */
runTests:function(){var t=this;t.callActions("beforeRunTests",arguments),t.has.promises="function"==typeof m.Promise,t.has.transitions="unsupported"!==t.transitionPrefix,t.callActions("afterRunTests",arguments),p.freeze(t.has)},
/**
         * @private
         * @return  {void}
         */
setPrefixes:function(){var t=this;t.callActions("beforeSetPrefixes",arguments),t.transitionPrefix=p.getPrefix(t.canary,"Transition",t.VENDORS),t.transformPrefix=p.getPrefix(t.canary,"Transform",t.VENDORS),t.boxSizingPrefix=p.getPrefix(t.canary,"BoxSizing",t.VENDORS),t.boxSizingProp=t.boxSizingPrefix?t.boxSizingPrefix+p.pascalCase(t.BOX_SIZING_PROP):t.BOX_SIZING_PROP,t.transitionProp=t.transitionPrefix?t.transitionPrefix+p.pascalCase(t.TRANSITION_PROP):t.TRANSITION_PROP,t.transformProp=t.transformPrefix?t.transformPrefix+p.pascalCase(t.TRANSFORM_PROP):t.TRANSFORM_PROP,t.transformRule=t.transformPrefix?"-"+t.transformPrefix+"-"+t.TRANSFORM_PROP:t.TRANSFORM_PROP,t.perspectiveProp=t.transformPrefix?t.transformPrefix+p.pascalCase(t.PERSPECTIVE_PROP):t.PERSPECTIVE_PROP,t.perspectiveOriginProp=t.transformPrefix?t.transformPrefix+p.pascalCase(t.PERSPECTIVE_ORIGIN_PROP):t.PERSPECTIVE_ORIGIN_PROP,t.callActions("afterSetPrefixes",arguments)}}),
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Has=function(){this.transitions=!1,this.promises=!1,p.seal(this)},
// Assign a singleton instance to `mixitup.features` and initialise:
g.features=new g.Features,g.features.init(),
/**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */
g.ConfigAnimation=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.enable=!0,
/**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */
this.effects="fade scale",
/**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */
this.effectsIn="",
/**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */
this.effectsOut="",
/**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */
this.duration=600,
/**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */
this.easing="ease",
/**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */
this.applyPerspective=!0,
/**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */
this.perspectiveDistance="3000px",
/**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */
this.perspectiveOrigin="50% 50%",
/**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.queue=!0,
/**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */
this.queueLimit=3,
/**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.animateResizeContainer=!0,
/**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.animateResizeTargets=!1,
/**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */
this.staggerSequence=null,
/**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.reverseOut=!1,
/**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.nudge=!0,
/**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.clampHeight=!0,
/**
         * A boolean dictating whether or not to clamp the width of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * width of the container might affect its horitzontal positioning in the viewport
         * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container width-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampWidth: false
         *     }
         * });
         *
         * @name        clampWidth
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.clampWidth=!0,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigAnimation),g.ConfigAnimation.prototype=Object.create(g.Base.prototype),g.ConfigAnimation.prototype.constructor=g.ConfigAnimation,
/**
     * A group of properties relating to the behavior of the Mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        behavior
     * @namespace
     * @public
     * @since       3.1.12
     */
g.ConfigBehavior=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A boolean dictating whether to allow "live" sorting of the mixer.
         *
         * Because of the expensive nature of sorting, MixItUp makes use of several
         * internal optimizations to skip redundant sorting operations, such as when
         * the newly requested sort command is the same as the active one. The caveat
         * to this optimization is that "live" edits to the value of a target's sorting
         * attribute will be ignored when requesting a re-sort by the same attribute.
         *
         * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
         * regardless of whether or not the sorting attribute and order have changed.
         *
         * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     behavior: {
         *         liveSort: true
         *     },
         *     load: {
         *         sort: 'edited:desc'
         *     }
         * });
         *
         * var target = containerEl.children[3];
         *
         * console.log(target.getAttribute('data-edited')); // '2015-04-24'
         *
         * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
         *
         * mixer.sort('edited:desc')
         *     .then(function(state) {
         *         // The target is now at the top of the list
         *
         *         console.log(state.targets[0] === target); // true
         *     });
         *
         * @name        liveSort
         * @memberof    mixitup.Config.behavior
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.liveSort=!1,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigBehavior),g.ConfigBehavior.prototype=Object.create(g.Base.prototype),g.ConfigBehavior.prototype.constructor=g.ConfigBehavior,
/**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */
g.ConfigCallbacks=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */
this.onMixStart=null,
/**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */
this.onMixBusy=null,
/**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */
this.onMixEnd=null,
/**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */
this.onMixFail=null,
/**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */
this.onMixClick=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigCallbacks),g.ConfigCallbacks.prototype=Object.create(g.Base.prototype),g.ConfigCallbacks.prototype.constructor=g.ConfigCallbacks,
/**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */
g.ConfigControls=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.enable=!0,
/**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.live=!1,
/**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */
this.scope="global",// enum: ['local' ,'global']
/**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */
this.toggleLogic="or",// enum: ['or', 'and']
/**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */
this.toggleDefault="all",// enum: ['all', 'none']
this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigControls),g.ConfigControls.prototype=Object.create(g.Base.prototype),g.ConfigControls.prototype.constructor=g.ConfigControls,
/**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigClassNames=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */
this.block="mixitup",
/**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */
this.elementContainer="container",
/**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */
this.elementFilter="control",
/**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */
this.elementSort="control",
/**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */
this.elementMultimix="control",
/**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */
this.elementToggle="control",
/**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */
this.modifierActive="active",
/**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */
this.modifierDisabled="disabled",
/**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */
this.modifierFailed="failed",
/**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */
this.delineatorElement="-",
/**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */
this.delineatorModifier="-",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigClassNames),g.ConfigClassNames.prototype=Object.create(g.Base.prototype),g.ConfigClassNames.prototype.constructor=g.ConfigClassNames,
/**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigData=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */
this.uidKey="",
/**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.dirtyCheck=!1,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigData),g.ConfigData.prototype=Object.create(g.Base.prototype),g.ConfigData.prototype.constructor=g.ConfigData,
/**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigDebug=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.enable=!1,
/**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.showWarnings=!0,
/**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.fauxAsync=!1,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigDebug),g.ConfigDebug.prototype=Object.create(g.Base.prototype),g.ConfigDebug.prototype.constructor=g.ConfigDebug,
/**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigLayout=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */
this.allowNestedTargets=!0,
/**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */
this.containerClassName="",
/**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */
this.siblingBefore=null,
/**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */
this.siblingAfter=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigLayout),g.ConfigLayout.prototype=Object.create(g.Base.prototype),g.ConfigLayout.prototype.constructor=g.ConfigLayout,
/**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */
g.ConfigLoad=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */
this.filter="all",
/**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */
this.sort="default:asc",
/**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */
this.dataset=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigLoad),g.ConfigLoad.prototype=Object.create(g.Base.prototype),g.ConfigLoad.prototype.constructor=g.ConfigLoad,
/**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigSelectors=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */
this.target=".mix",
/**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */
this.control="",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigSelectors),g.ConfigSelectors.prototype=Object.create(g.Base.prototype),g.ConfigSelectors.prototype.constructor=g.ConfigSelectors,
/**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */
g.ConfigRender=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */
this.target=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigRender),g.ConfigRender.prototype=Object.create(g.Base.prototype),g.ConfigRender.prototype.constructor=g.ConfigRender,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.ConfigTemplates=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.ConfigTemplates),g.ConfigTemplates.prototype=Object.create(g.Base.prototype),g.ConfigTemplates.prototype.constructor=g.ConfigTemplates,
/**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */
g.Config=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.animation=new g.ConfigAnimation,this.behavior=new g.ConfigBehavior,this.callbacks=new g.ConfigCallbacks,this.controls=new g.ConfigControls,this.classNames=new g.ConfigClassNames,this.data=new g.ConfigData,this.debug=new g.ConfigDebug,this.layout=new g.ConfigLayout,this.load=new g.ConfigLoad,this.selectors=new g.ConfigSelectors,this.render=new g.ConfigRender,this.templates=new g.ConfigTemplates,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Config),g.Config.prototype=Object.create(g.Base.prototype),g.Config.prototype.constructor=g.Config,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.MixerDom=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.document=null,this.body=null,this.container=null,this.parent=null,this.targets=[],this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.MixerDom),g.MixerDom.prototype=Object.create(g.Base.prototype),g.MixerDom.prototype.constructor=g.MixerDom,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.UiClassNames=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.base="",this.active="",this.disabled="",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.UiClassNames),g.UiClassNames.prototype=Object.create(g.Base.prototype),g.UiClassNames.prototype.constructor=g.UiClassNames,
/**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandDataset=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.dataset=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandDataset),g.CommandDataset.prototype=Object.create(g.Base.prototype),g.CommandDataset.prototype.constructor=g.CommandDataset,
/**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandMultimix=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.filter=null,this.sort=null,this.insert=null,this.remove=null,this.changeLayout=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandMultimix),g.CommandMultimix.prototype=Object.create(g.Base.prototype),g.CommandMultimix.prototype.constructor=g.CommandMultimix,
/**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandFilter=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.selector="",this.collection=null,this.action="show",// enum: ['show', 'hide']
this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandFilter),g.CommandFilter.prototype=Object.create(g.Base.prototype),g.CommandFilter.prototype.constructor=g.CommandFilter,
/**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandSort=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.sortString="",this.attribute="",this.order="asc",this.collection=null,this.next=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandSort),g.CommandSort.prototype=Object.create(g.Base.prototype),g.CommandSort.prototype.constructor=g.CommandSort,
/**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandInsert=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.index=0,this.collection=[],this.position="before",// enum: ['before', 'after']
this.sibling=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandInsert),g.CommandInsert.prototype=Object.create(g.Base.prototype),g.CommandInsert.prototype.constructor=g.CommandInsert,
/**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandRemove=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.targets=[],this.collection=[],this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandRemove),g.CommandRemove.prototype=Object.create(g.Base.prototype),g.CommandRemove.prototype.constructor=g.CommandRemove,
/**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.CommandChangeLayout=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.containerClassName="",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.CommandChangeLayout),g.CommandChangeLayout.prototype=Object.create(g.Base.prototype),g.CommandChangeLayout.prototype.constructor=g.CommandChangeLayout,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */
g.ControlDefinition=function(t,e,n,a){g.Base.call(this),this.callActions("beforeConstruct"),this.type=t,this.selector=e,this.live=n||!1,this.parent=a||"",this.callActions("afterConstruct"),p.freeze(this),p.seal(this)},g.BaseStatic.call(g.ControlDefinition),g.ControlDefinition.prototype=Object.create(g.Base.prototype),g.ControlDefinition.prototype.constructor=g.ControlDefinition,g.controlDefinitions=[],g.controlDefinitions.push(new g.ControlDefinition("multimix","[data-filter][data-sort]")),g.controlDefinitions.push(new g.ControlDefinition("filter","[data-filter]")),g.controlDefinitions.push(new g.ControlDefinition("sort","[data-sort]")),g.controlDefinitions.push(new g.ControlDefinition("toggle","[data-toggle]")),
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Control=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.selector="",this.bound=[],this.pending=-1,this.type="",this.status="inactive",// enum: ['inactive', 'active', 'disabled', 'live']
this.filter="",this.sort="",this.canDisable=!1,this.handler=null,this.classNames=new g.UiClassNames,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Control),g.Control.prototype=Object.create(g.Base.prototype),p.extend(g.Control.prototype,
/** @lends mixitup.Control */
{constructor:g.Control,
/**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */
init:function(t,e,n){var a=this;if(this.callActions("beforeInit",arguments),a.el=t,a.type=e,a.selector=n,a.selector)a.status="live";else switch(a.canDisable="boolean"==typeof a.el.disable,a.type){case"filter":a.filter=a.el.getAttribute("data-filter");break;case"toggle":a.filter=a.el.getAttribute("data-toggle");break;case"sort":a.sort=a.el.getAttribute("data-sort");break;case"multimix":a.filter=a.el.getAttribute("data-filter"),a.sort=a.el.getAttribute("data-sort");break}a.bindClick(),g.controls.push(a),this.callActions("afterInit",arguments)},
/**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */
isBound:function(t){var e=this,n=!1;return this.callActions("beforeIsBound",arguments),n=-1<e.bound.indexOf(t),e.callFilters("afterIsBound",n,arguments)},
/**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */
addBinding:function(t){var e=this;this.callActions("beforeAddBinding",arguments),e.isBound()||e.bound.push(t),this.callActions("afterAddBinding",arguments)},
/**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */
removeBinding:function(t){var e=this,n=-1;this.callActions("beforeRemoveBinding",arguments),-1<(n=e.bound.indexOf(t))&&e.bound.splice(n,1),e.bound.length<1&&(
// No bindings exist, unbind event click handlers
e.unbindClick(),
// Remove from `mixitup.controls` list
n=g.controls.indexOf(e),g.controls.splice(n,1),"active"===e.status&&e.renderStatus(e.el,"inactive")),this.callActions("afterRemoveBinding",arguments)},
/**
         * @private
         * @return {void}
         */
bindClick:function(){var e=this;this.callActions("beforeBindClick",arguments),e.handler=function(t){e.handleClick(t)},p.on(e.el,"click",e.handler),this.callActions("afterBindClick",arguments)},
/**
         * @private
         * @return {void}
         */
unbindClick:function(){var t=this;this.callActions("beforeUnbindClick",arguments),p.off(t.el,"click",t.handler),t.handler=null,this.callActions("afterUnbindClick",arguments)},
/**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */
handleClick:function(t){var e=this,n=null,a=null,i=!1,o=void 0,r={},s=null,l=[],c=-1;if(this.callActions("beforeHandleClick",arguments),this.pending=0,a=e.bound[0],n=e.selector?p.closestParent(t.target,a.config.selectors.control+e.selector,!0,a.dom.document):e.el){switch(e.type){case"filter":r.filter=e.filter||n.getAttribute("data-filter");break;case"sort":r.sort=e.sort||n.getAttribute("data-sort");break;case"multimix":r.filter=e.filter||n.getAttribute("data-filter"),r.sort=e.sort||n.getAttribute("data-sort");break;case"toggle":r.filter=e.filter||n.getAttribute("data-toggle"),i="live"===e.status?p.hasClass(n,e.classNames.active):"active"===e.status;break}for(c=0;c<e.bound.length;c++)
// Create a clone of the command for each bound mixer instance
s=new g.CommandMultimix,p.extend(s,r),l.push(s);for(l=e.callFilters("commandsHandleClick",l,arguments),e.pending=e.bound.length,c=0;a=e.bound[c];c++)(r=l[c])&&(a.lastClicked||(a.lastClicked=n),g.events.fire("mixClick",a.dom.container,{state:a.state,instance:a,originalEvent:t,control:a.lastClicked},a.dom.document),"function"==typeof a.config.callbacks.onMixClick&&!1===(o=a.config.callbacks.onMixClick.call(a.lastClicked,a.state,t,a))||("toggle"===e.type?i?a.toggleOff(r.filter):a.toggleOn(r.filter):a.multimix(r)));this.callActions("afterHandleClick",arguments)}else e.callActions("afterHandleClick",arguments)},
/**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */
update:function(t,e){var n=this,a=new g.CommandMultimix;n.callActions("beforeUpdate",arguments),n.pending--,n.pending=Math.max(0,n.pending),0<n.pending||("live"===n.status?
// Live control (status unknown)
n.updateLive(t,e):(
// Static control
a.sort=n.sort,a.filter=n.filter,n.callFilters("actionsUpdate",a,arguments),n.parseStatusChange(n.el,t,a,e)),n.callActions("afterUpdate",arguments))},
/**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */
updateLive:function(t,e){var n=this,a=null,i=null,o=null,r=-1;if(n.callActions("beforeUpdateLive",arguments),n.el){for(a=n.el.querySelectorAll(n.selector),r=0;o=a[r];r++){switch(i=new g.CommandMultimix,n.type){case"filter":i.filter=o.getAttribute("data-filter");break;case"sort":i.sort=o.getAttribute("data-sort");break;case"multimix":i.filter=o.getAttribute("data-filter"),i.sort=o.getAttribute("data-sort");break;case"toggle":i.filter=o.getAttribute("data-toggle");break}i=n.callFilters("actionsUpdateLive",i,arguments),n.parseStatusChange(o,t,i,e)}n.callActions("afterUpdateLive",arguments)}},
/**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */
parseStatusChange:function(t,e,n,a){var i=this,o="",r="",s=-1;switch(i.callActions("beforeParseStatusChange",arguments),i.type){case"filter":e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"multimix":e.sort===n.sort&&e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"sort":e.sort.match(/:asc/g)&&(o=e.sort.replace(/:asc/g,"")),e.sort===n.sort||o===n.sort?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"toggle":for(a.length<1&&i.renderStatus(t,"inactive"),e.filter===n.filter&&i.renderStatus(t,"active"),s=0;s<a.length;s++){if((r=a[s])===n.filter){
// Button matches one active toggle
i.renderStatus(t,"active");break}i.renderStatus(t,"inactive")}break}i.callActions("afterParseStatusChange",arguments)},
/**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */
renderStatus:function(t,e){var n=this;switch(n.callActions("beforeRenderStatus",arguments),e){case"active":p.addClass(t,n.classNames.active),p.removeClass(t,n.classNames.disabled),n.canDisable&&(n.el.disabled=!1);break;case"inactive":p.removeClass(t,n.classNames.active),p.removeClass(t,n.classNames.disabled),n.canDisable&&(n.el.disabled=!1);break;case"disabled":n.canDisable&&(n.el.disabled=!0),p.addClass(t,n.classNames.disabled),p.removeClass(t,n.classNames.active);break}"live"!==n.status&&(
// Update the control's status propery if not live
n.status=e),n.callActions("afterRenderStatus",arguments)}}),g.controls=[],
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.StyleData=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.x=0,this.y=0,this.top=0,this.right=0,this.bottom=0,this.left=0,this.width=0,this.height=0,this.marginRight=0,this.marginBottom=0,this.opacity=0,this.scale=new g.TransformData,this.translateX=new g.TransformData,this.translateY=new g.TransformData,this.translateZ=new g.TransformData,this.rotateX=new g.TransformData,this.rotateY=new g.TransformData,this.rotateZ=new g.TransformData,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.StyleData),g.StyleData.prototype=Object.create(g.Base.prototype),g.StyleData.prototype.constructor=g.StyleData,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.TransformData=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.value=0,this.unit="",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.TransformData),g.TransformData.prototype=Object.create(g.Base.prototype),g.TransformData.prototype.constructor=g.TransformData,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.TransformDefaults=function(){g.StyleData.apply(this),this.callActions("beforeConstruct"),this.scale.value=.01,this.scale.unit="",this.translateX.value=20,this.translateX.unit="px",this.translateY.value=20,this.translateY.unit="px",this.translateZ.value=20,this.translateZ.unit="px",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateY.value=90,this.rotateY.unit="deg",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateZ.value=180,this.rotateZ.unit="deg",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.TransformDefaults),g.TransformDefaults.prototype=Object.create(g.StyleData.prototype),g.TransformDefaults.prototype.constructor=g.TransformDefaults,
/**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */
g.transformDefaults=new g.TransformDefaults,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.EventDetail=function(){this.state=null,this.futureState=null,this.instance=null,this.originalEvent=null},
/**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */
g.Events=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */
this.mixStart=null,
/**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */
this.mixBusy=null,
/**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */
this.mixEnd=null,
/**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */
this.mixFail=null,
/**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */
this.mixClick=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Events),g.Events.prototype=Object.create(g.Base.prototype),g.Events.prototype.constructor=g.Events,
/**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */
g.Events.prototype.fire=function(t,e,n,a){var i=this,o=null,r=new g.EventDetail;if(i.callActions("beforeFire",arguments),void 0===i[t])throw new Error('Event type "'+t+'" not found.');r.state=new g.State,p.extend(r.state,n.state),n.futureState&&(r.futureState=new g.State,p.extend(r.futureState,n.futureState)),r.instance=n.instance,n.originalEvent&&(r.originalEvent=n.originalEvent),o=p.getCustomEvent(t,r,a),i.callFilters("eventFire",o,arguments),e.dispatchEvent(o)},
// Asign a singleton instance to `mixitup.events`:
g.events=new g.Events,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.QueueItem=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.args=[],this.instruction=null,this.triggerElement=null,this.deferred=null,this.isToggling=!1,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.QueueItem),g.QueueItem.prototype=Object.create(g.Base.prototype),g.QueueItem.prototype.constructor=g.QueueItem,
/**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */
g.Mixer=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.config=new g.Config,this.id="",this.isBusy=!1,this.isToggling=!1,this.incPadding=!0,this.controls=[],this.targets=[],this.origOrder=[],this.cache={},this.toggleArray=[],this.targetsMoved=0,this.targetsImmovable=0,this.targetsBound=0,this.targetsDone=0,this.staggerDuration=0,this.effectsIn=null,this.effectsOut=null,this.transformIn=[],this.transformOut=[],this.queue=[],this.state=null,this.lastOperation=null,this.lastClicked=null,this.userCallback=null,this.userDeferred=null,this.dom=new g.MixerDom,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Mixer),g.Mixer.prototype=Object.create(g.Base.prototype),p.extend(g.Mixer.prototype,
/** @lends mixitup.Mixer */
{constructor:g.Mixer,
/**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */
attach:function(t,e,n,a){var i=this,o=null,r=-1;for(i.callActions("beforeAttach",arguments),i.id=n,a&&p.extend(i.config,a,!0,!0),i.sanitizeConfig(),i.cacheDom(t,e),i.config.layout.containerClassName&&p.addClass(i.dom.container,i.config.layout.containerClassName),g.features.has.transitions||(i.config.animation.enable=!1),void 0===m.console&&(i.config.debug.showWarnings=!1),i.config.data.uidKey&&(
// If the dataset API is in use, force disable controls
i.config.controls.enable=!1),i.indexTargets(),i.state=i.getInitialState(),r=0;o=i.lastOperation.toHide[r];r++)o.hide();i.config.controls.enable&&(i.initControls(),i.buildToggleArray(null,i.state),i.updateControls({filter:i.state.activeFilter,sort:i.state.activeSort})),i.parseEffects(),i.callActions("afterAttach",arguments)},
/**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */
sanitizeConfig:function(){var t=this;t.callActions("beforeSanitizeConfig",arguments),
// Sanitize enum/string config options
t.config.controls.scope=t.config.controls.scope.toLowerCase().trim(),t.config.controls.toggleLogic=t.config.controls.toggleLogic.toLowerCase().trim(),t.config.controls.toggleDefault=t.config.controls.toggleDefault.toLowerCase().trim(),t.config.animation.effects=t.config.animation.effects.trim(),t.callActions("afterSanitizeConfig",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */
getInitialState:function(){var t=this,e=new g.State,n=new g.Operation;if(t.callActions("beforeGetInitialState",arguments),
// Map initial values into a mock state object in order to construct an operation
e.activeContainerClassName=t.config.layout.containerClassName,t.config.load.dataset){
// Dataset API
if(!t.config.data.uidKey||"string"!=typeof t.config.data.uidKey)throw new TypeError(g.messages.errorConfigDataUidKeyNotSet());n.startDataset=n.newDataset=e.activeDataset=t.config.load.dataset.slice(),n.startContainerClassName=n.newContainerClassName=e.activeContainerClassName,n.show=t.targets.slice(),e=t.callFilters("stateGetInitialState",e,arguments)}else
// DOM API
e.activeFilter=t.parseFilterArgs([t.config.load.filter]).command,e.activeSort=t.parseSortArgs([t.config.load.sort]).command,e.totalTargets=t.targets.length,(e=t.callFilters("stateGetInitialState",e,arguments)).activeSort.collection||e.activeSort.attribute||"random"===e.activeSort.order||"desc"===e.activeSort.order?(
// Sorting on load
n.newSort=e.activeSort,t.sortOperation(n),t.printSort(!1,n),t.targets=n.newOrder):n.startOrder=n.newOrder=t.targets,n.startFilter=n.newFilter=e.activeFilter,n.startSort=n.newSort=e.activeSort,n.startContainerClassName=n.newContainerClassName=e.activeContainerClassName,"all"===n.newFilter.selector?n.newFilter.selector=t.config.selectors.target:"none"===n.newFilter.selector&&(n.newFilter.selector="");return n=t.callFilters("operationGetInitialState",n,[e]),(t.lastOperation=n).newFilter&&t.filterOperation(n),e=t.buildState(n)},
/**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */
cacheDom:function(t,e){var n=this;n.callActions("beforeCacheDom",arguments),n.dom.document=e,n.dom.body=n.dom.document.querySelector("body"),n.dom.container=t,n.dom.parent=t,n.callActions("afterCacheDom",arguments)},
/**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */
indexTargets:function(){var t=this,e=null,n=null,a=null,i=-1;if(t.callActions("beforeIndexTargets",arguments),t.dom.targets=t.config.layout.allowNestedTargets?t.dom.container.querySelectorAll(t.config.selectors.target):p.children(t.dom.container,t.config.selectors.target,t.dom.document),t.dom.targets=p.arrayFromList(t.dom.targets),t.targets=[],(a=t.config.load.dataset)&&a.length!==t.dom.targets.length)throw new Error(g.messages.errorDatasetPrerenderedMismatch());if(t.dom.targets.length){for(i=0;n=t.dom.targets[i];i++)(e=new g.Target).init(n,t,a?a[i]:void 0),e.isInDom=!0,t.targets.push(e);t.dom.parent=t.dom.targets[0].parentElement===t.dom.container?t.dom.container:t.dom.targets[0].parentElement}t.origOrder=t.targets,t.callActions("afterIndexTargets",arguments)},initControls:function(){var t=this,e="",n=null,a=null,i=null,o=null,r=null,s=-1,l=-1;switch(t.callActions("beforeInitControls",arguments),t.config.controls.scope){case"local":i=t.dom.container;break;case"global":i=t.dom.document;break;default:throw new Error(g.messages.errorConfigInvalidControlsScope())}for(s=0;e=g.controlDefinitions[s];s++)if(t.config.controls.live||e.live){if(e.parent){if(!(o=t.dom[e.parent])||o.length<0)continue;"number"!=typeof o.length&&(o=[o])}else o=[i];for(l=0;a=o[l];l++)r=t.getControl(a,e.type,e.selector),t.controls.push(r)}else for(n=i.querySelectorAll(t.config.selectors.control+e.selector),l=0;a=n[l];l++)(r=t.getControl(a,e.type,""))&&t.controls.push(r);t.callActions("afterInitControls",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */
getControl:function(t,e,n){var a=this,i=null,o=-1;if(a.callActions("beforeGetControl",arguments),!n)
// Static controls only
for(o=0;i=g.controls[o];o++){if(i.el===t&&i.isBound(a))
// Control already bound to this mixer (as another type).
// NB: This prevents duplicate controls from being registered where a selector
// might collide, eg: "[data-filter]" and "[data-filter][data-sort]"
return a.callFilters("controlGetControl",null,arguments);if(i.el===t&&i.type===e&&i.selector===n)
// Another mixer is already using this control, add this mixer as a binding
return i.addBinding(a),a.callFilters("controlGetControl",i,arguments)}
// Create new control
return(i=new g.Control).init(t,e,n),i.classNames.base=p.getClassname(a.config.classNames,e),i.classNames.active=p.getClassname(a.config.classNames,e,a.config.classNames.modifierActive),i.classNames.disabled=p.getClassname(a.config.classNames,e,a.config.classNames.modifierDisabled),
// Add a reference to this mixer as a binding
i.addBinding(a),a.callFilters("controlGetControl",i,arguments)},
/**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */
getToggleSelector:function(){var t=this,e="or"===t.config.controls.toggleLogic?", ":"",n="";return t.callActions("beforeGetToggleSelector",arguments),t.toggleArray=p.clean(t.toggleArray),""===(n=t.toggleArray.join(e))&&(n=t.config.controls.toggleDefault),t.callFilters("selectorGetToggleSelector",n,arguments)},
/**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */
buildToggleArray:function(t,e){var n=this,a="";if(n.callActions("beforeBuildToggleArray",arguments),t&&t.filter)a=t.filter.selector.replace(/\s/g,"");else{if(!e)return;a=e.activeFilter.selector.replace(/\s/g,"")}a!==n.config.selectors.target&&"all"!==a||(a=""),"or"===n.config.controls.toggleLogic?n.toggleArray=a.split(","):n.toggleArray=n.splitCompoundSelector(a),n.toggleArray=p.clean(n.toggleArray),n.callActions("afterBuildToggleArray",arguments)},
/**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */
splitCompoundSelector:function(t){
// Break at a `.` or `[`, capturing the delineator
var e=t.split(/([\.\[])/g),n=[],a="",i=-1;for(""===e[0]&&e.shift(),i=0;i<e.length;i++)i%2==0&&(a=""),a+=e[i],i%2!=0&&n.push(a);return n},
/**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */
updateControls:function(t){var e=this,n=null,a=new g.CommandMultimix,i=-1;for(e.callActions("beforeUpdateControls",arguments),
// Sanitise to defaults
t.filter?a.filter=t.filter.selector:a.filter=e.state.activeFilter.selector,t.sort?a.sort=e.buildSortString(t.sort):a.sort=e.buildSortString(e.state.activeSort),a.filter===e.config.selectors.target&&(a.filter="all"),""===a.filter&&(a.filter="none"),p.freeze(a),i=0;n=e.controls[i];i++)n.update(a,e.toggleArray);e.callActions("afterUpdateControls",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */
buildSortString:function(t){var e=this,n="";return n+=t.sortString,t.next&&(n+=" "+e.buildSortString(t.next)),n},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */
insertTargets:function(t,e){var n=this,a=null,i=-1,o=null,r=null,s=null,l=-1;if(n.callActions("beforeInsertTargets",arguments),void 0===t.index&&(t.index=0),a=n.getNextSibling(t.index,t.sibling,t.position),o=n.dom.document.createDocumentFragment(),i=a?p.index(a,n.config.selectors.target):n.targets.length,t.collection){for(l=0;s=t.collection[l];l++){if(-1<n.dom.targets.indexOf(s))throw new Error(g.messages.errorInsertPreexistingElement());
// Ensure elements are hidden when they are added to the DOM, so they can
// be animated in gracefully
s.style.display="none",o.appendChild(s),o.appendChild(n.dom.document.createTextNode(" ")),p.isElement(s,n.dom.document)&&s.matches(n.config.selectors.target)&&((r=new g.Target).init(s,n),r.isInDom=!0,n.targets.splice(i,0,r),i++)}n.dom.parent.insertBefore(o,a)}
// Since targets have been added, the original order must be updated
e.startOrder=n.origOrder=n.targets,n.callActions("afterInsertTargets",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */
getNextSibling:function(t,e,n){var a=this,i=null;return t=Math.max(t,0),e&&"before"===n?
// Explicit sibling
i=e:e&&"after"===n?
// Explicit sibling
i=e.nextElementSibling||null:0<a.targets.length&&void 0!==t?
// Index and targets exist
i=t<a.targets.length||!a.targets.length?a.targets[t].dom.el:a.targets[a.targets.length-1].dom.el.nextElementSibling:0===a.targets.length&&0<a.dom.parent.children.length&&(
// No targets but other siblings
a.config.layout.siblingAfter?i=a.config.layout.siblingAfter:a.config.layout.siblingBefore?i=a.config.layout.siblingBefore.nextElementSibling:a.dom.parent.children[0]),a.callFilters("elementGetNextSibling",i,arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
filterOperation:function(t){var e=this,n=!1,a=-1,i="",o=null,r=-1;for(e.callActions("beforeFilterOperation",arguments),i=t.newFilter.action,r=0;o=t.newOrder[r];r++)
// show via collection
n=t.newFilter.collection?-1<t.newFilter.collection.indexOf(o.dom.el):
// show via selector
""!==t.newFilter.selector&&o.dom.el.matches(t.newFilter.selector),e.evaluateHideShow(n,o,i,t);if(t.toRemove.length)for(r=0;o=t.show[r];r++)-1<t.toRemove.indexOf(o)&&(
// If any shown targets should be removed, move them into the toHide array
t.show.splice(r,1),-1<(a=t.toShow.indexOf(o))&&t.toShow.splice(a,1),t.toHide.push(o),t.hide.push(o),r--);t.matching=t.show.slice(),0===t.show.length&&""!==t.newFilter.selector&&0!==e.targets.length&&(t.hasFailed=!0),e.callActions("afterFilterOperation",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */
evaluateHideShow:function(t,e,n,a){var i=this,o=!1,r=Array.prototype.slice.call(arguments,1);o=i.callFilters("testResultEvaluateHideShow",t,r),i.callActions("beforeEvaluateHideShow",arguments),!0===o&&"show"===n||!1===o&&"hide"===n?(a.show.push(e),!e.isShown&&a.toShow.push(e)):(a.hide.push(e),e.isShown&&a.toHide.push(e)),i.callActions("afterEvaluateHideShow",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
sortOperation:function(n){var a=this,t=[],e=null,i=null,o=-1;if(a.callActions("beforeSortOperation",arguments),n.startOrder=a.targets,n.newSort.collection){for(
// Sort by collection
t=[],o=0;i=n.newSort.collection[o];o++){if(a.dom.targets.indexOf(i)<0)throw new Error(g.messages.errorSortNonExistentElement());(e=new g.Target).init(i,a),e.isInDom=!0,t.push(e)}n.newOrder=t}else"random"===n.newSort.order?
// Sort random
n.newOrder=p.arrayShuffle(n.startOrder):""===n.newSort.attribute?(
// Sort by default
n.newOrder=a.origOrder.slice(),"desc"===n.newSort.order&&n.newOrder.reverse()):(
// Sort by attribute
n.newOrder=n.startOrder.slice(),n.newOrder.sort(function(t,e){return a.compare(t,e,n.newSort)}));p.isEqualArray(n.newOrder,n.startOrder)&&(n.willSort=!1),a.callActions("afterSortOperation",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */
compare:function(t,e,n){var a=this,i=n.order,o=a.getAttributeValue(t,n.attribute),r=a.getAttributeValue(e,n.attribute);return isNaN(1*o)||isNaN(1*r)?(o=o.toLowerCase(),r=r.toLowerCase()):(o*=1,r*=1),o<r?"asc"===i?-1:1:r<o?"asc"===i?1:-1:o===r&&n.next?a.compare(t,e,n.next):0},
/**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */
getAttributeValue:function(t,e){var n=this,a="";
// If an attribute is not present, return 0 as a safety value
return null===(a=t.dom.el.getAttribute("data-"+e))&&n.config.debug.showWarnings&&
// Encourage users to assign values to all targets to avoid erroneous sorting
// when types are mixed
console.warn(g.messages.warningInconsistentSortingAttributes({attribute:"data-"+e})),n.callFilters("valueGetAttributeValue",a||0,arguments)},
/**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */
printSort:function(t,e){var n=this,a=t?e.newOrder:e.startOrder,i=t?e.startOrder:e.newOrder,o=a.length?a[a.length-1].dom.el.nextElementSibling:null,r=m.document.createDocumentFragment(),s=null,l=null,c=null,u=-1;
// Empty the container
for(n.callActions("beforePrintSort",arguments),u=0;l=a[u];u++)"absolute"!==(c=l.dom.el).style.position&&(p.removeWhitespace(c.previousSibling),c.parentElement.removeChild(c));for((s=o?o.previousSibling:n.dom.parent.lastChild)&&"#text"===s.nodeName&&p.removeWhitespace(s),u=0;l=i[u];u++)
// Add targets into a document fragment
c=l.dom.el,p.isElement(r.lastChild)&&r.appendChild(m.document.createTextNode(" ")),r.appendChild(c);
// Insert the document fragment into the container
// before any other non-target elements
n.dom.parent.firstChild&&n.dom.parent.firstChild!==o&&r.insertBefore(m.document.createTextNode(" "),r.childNodes[0]),o?(r.appendChild(m.document.createTextNode(" ")),n.dom.parent.insertBefore(r,o)):n.dom.parent.appendChild(r),n.callActions("afterPrintSort",arguments)},
/**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */
parseSortString:function(t,e){var n=this,a=t.split(" "),i=e,o=[],r=-1;
// command.sortString = sortString;
for(r=0;r<a.length;r++){switch(o=a[r].split(":"),i.sortString=a[r],i.attribute=p.dashCase(o[0]),i.order=o[1]||"asc",i.attribute){case"default":
// treat "default" as sorting by no attribute
i.attribute="";break;case"random":
// treat "random" as an order not an attribute
i.attribute="",i.order="random";break}if(!i.attribute||"random"===i.order)break;r<a.length-1&&(
// Embed reference to the next command
i.next=new g.CommandSort,p.freeze(i),i=i.next)}return n.callFilters("commandsParseSort",e,arguments)},
/**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */
parseEffects:function(){var t=this,e="",n=t.config.animation.effectsIn||t.config.animation.effects,a=t.config.animation.effectsOut||t.config.animation.effects;for(e in t.callActions("beforeParseEffects",arguments),t.effectsIn=new g.StyleData,t.effectsOut=new g.StyleData,t.transformIn=[],t.transformOut=[],t.effectsIn.opacity=t.effectsOut.opacity=1,t.parseEffect("fade",n,t.effectsIn,t.transformIn),t.parseEffect("fade",a,t.effectsOut,t.transformOut,!0),g.transformDefaults)g.transformDefaults[e]instanceof g.TransformData&&(t.parseEffect(e,n,t.effectsIn,t.transformIn),t.parseEffect(e,a,t.effectsOut,t.transformOut,!0));t.parseEffect("stagger",n,t.effectsIn,t.transformIn),t.parseEffect("stagger",a,t.effectsOut,t.transformOut,!0),t.callActions("afterParseEffects",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */
parseEffect:function(t,e,n,a,i){var o=this,r=/\(([^)]+)\)/,s=-1,l="",c=[],u="",f=["%","px","em","rem","vh","vw","deg"],h="",d=-1;if(o.callActions("beforeParseEffect",arguments),"string"!=typeof e)throw new TypeError(g.messages.errorConfigInvalidAnimationEffects());if(e.indexOf(t)<0)
// The effect is not present in the effects string
"stagger"===t&&(
// Reset stagger to 0
o.staggerDuration=0);else{switch(
// The effect is present
-1<(s=e.indexOf(t+"("))&&(
// The effect has a user defined value in parentheses
// Extract from the first parenthesis to the end of string
l=e.substring(s),u=(
// Match any number of characters between "(" and ")"
c=r.exec(l))[1]),t){case"fade":n.opacity=u?parseFloat(u):0;break;case"stagger":o.staggerDuration=u?parseFloat(u):100;
// TODO: Currently stagger must be applied globally, but
// if seperate values are specified for in/out, this should
// be respected
break;default:if(
// All other effects are transforms following the same structure
i&&o.config.animation.reverseOut&&"scale"!==t?n[t].value=-1*(u?parseFloat(u):g.transformDefaults[t].value):n[t].value=u?parseFloat(u):g.transformDefaults[t].value,u){for(d=0;h=f[d];d++)if(-1<u.indexOf(h)){n[t].unit=h;break}}else n[t].unit=g.transformDefaults[t].unit;a.push(t+"("+n[t].value+n[t].unit+")")}o.callActions("afterParseEffect",arguments)}},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */
buildState:function(t){var e=this,n=new g.State,a=null,i=-1;
// Map target elements into state arrays.
// the real target objects should never be exposed
for(e.callActions("beforeBuildState",arguments),i=0;a=e.targets[i];i++)(!t.toRemove.length||t.toRemove.indexOf(a)<0)&&n.targets.push(a.dom.el);for(i=0;a=t.matching[i];i++)n.matching.push(a.dom.el);for(i=0;a=t.show[i];i++)n.show.push(a.dom.el);for(i=0;a=t.hide[i];i++)(!t.toRemove.length||t.toRemove.indexOf(a)<0)&&n.hide.push(a.dom.el);return n.id=e.id,n.container=e.dom.container,n.activeFilter=t.newFilter,n.activeSort=t.newSort,n.activeDataset=t.newDataset,n.activeContainerClassName=t.newContainerClassName,n.hasFailed=t.hasFailed,n.totalTargets=e.targets.length,n.totalShow=t.show.length,n.totalHide=t.hide.length,n.totalMatching=t.matching.length,n.triggerElement=t.triggerElement,e.callFilters("stateBuildState",n,arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */
goMix:function(t,e){var n=this,a=null;return n.callActions("beforeGoMix",arguments),
// If the animation duration is set to 0ms,
// or no effects specified,
// or the container is hidden
// then abort animation
n.config.animation.duration&&n.config.animation.effects&&p.isVisible(n.dom.container)||(t=!1),e.toShow.length||e.toHide.length||e.willSort||e.willChangeLayout||(
// If nothing to show or hide, and not sorting or
// changing layout
t=!1),e.startState.show.length||e.show.length||(
// If nothing currently shown, nothing to show
t=!1),g.events.fire("mixStart",n.dom.container,{state:e.startState,futureState:e.newState,instance:n},n.dom.document),"function"==typeof n.config.callbacks.onMixStart&&n.config.callbacks.onMixStart.call(n.dom.container,e.startState,e.newState,n),p.removeClass(n.dom.container,p.getClassname(n.config.classNames,"container",n.config.classNames.modifierFailed)),
// Use existing deferred
a=n.userDeferred?n.userDeferred:n.userDeferred=p.defer(g.libraries),n.isBusy=!0,t&&g.features.has.transitions?(
// If we should animate and the platform supports transitions, go for it
m.pageYOffset!==e.docState.scrollTop&&m.scrollTo(e.docState.scrollLeft,e.docState.scrollTop),n.config.animation.applyPerspective&&(n.dom.parent.style[g.features.perspectiveProp]=n.config.animation.perspectiveDistance,n.dom.parent.style[g.features.perspectiveOriginProp]=n.config.animation.perspectiveOrigin),n.config.animation.animateResizeContainer&&e.startHeight!==e.newHeight&&e.viewportDeltaY!==e.startHeight-e.newHeight&&(n.dom.parent.style.height=e.startHeight+"px"),n.config.animation.animateResizeContainer&&e.startWidth!==e.newWidth&&e.viewportDeltaX!==e.startWidth-e.newWidth&&(n.dom.parent.style.width=e.startWidth+"px"),e.startHeight===e.newHeight&&(n.dom.parent.style.height=e.startHeight+"px"),e.startWidth===e.newWidth&&(n.dom.parent.style.width=e.startWidth+"px"),e.startHeight===e.newHeight&&e.startWidth===e.newWidth&&(n.dom.parent.style.overflow="hidden"),requestAnimationFrame(function(){n.moveTargets(e)})):
// Abort
n.config.debug.fauxAsync?setTimeout(function(){n.cleanUp(e)},n.config.animation.duration):n.cleanUp(e),n.callFilters("promiseGoMix",a.promise,arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
getStartMixData:function(t){var e=this,n=m.getComputedStyle(e.dom.parent),a=e.dom.parent.getBoundingClientRect(),i=null,o={},r=-1,s=n[g.features.boxSizingProp];for(e.incPadding="border-box"===s,e.callActions("beforeGetStartMixData",arguments),r=0;i=t.show[r];r++)o=i.getPosData(),t.showPosData[r]={startPosData:o};for(r=0;i=t.toHide[r];r++)o=i.getPosData(),t.toHidePosData[r]={startPosData:o};t.startX=a.left,t.startY=a.top,t.startHeight=e.incPadding?a.height:a.height-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom)-parseFloat(n.borderTop)-parseFloat(n.borderBottom),t.startWidth=e.incPadding?a.width:a.width-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)-parseFloat(n.borderLeft)-parseFloat(n.borderRight),e.callActions("afterGetStartMixData",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
setInter:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeSetInter",arguments),
// Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width
e.config.animation.clampHeight&&(e.dom.parent.style.height=t.startHeight+"px",e.dom.parent.style.overflow="hidden"),e.config.animation.clampWidth&&(e.dom.parent.style.width=t.startWidth+"px",e.dom.parent.style.overflow="hidden"),a=0;n=t.toShow[a];a++)n.show();t.willChangeLayout&&(p.removeClass(e.dom.container,t.startContainerClassName),p.addClass(e.dom.container,t.newContainerClassName)),e.callActions("afterSetInter",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
getInterMixData:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeGetInterMixData",arguments),a=0;n=t.show[a];a++)t.showPosData[a].interPosData=n.getPosData();for(a=0;n=t.toHide[a];a++)t.toHidePosData[a].interPosData=n.getPosData();e.callActions("afterGetInterMixData",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
setFinal:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeSetFinal",arguments),t.willSort&&e.printSort(!1,t),a=0;n=t.toHide[a];a++)n.hide();e.callActions("afterSetFinal",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
getFinalMixData:function(t){var e=this,n=null,a=null,i=null,o=-1;for(e.callActions("beforeGetFinalMixData",arguments),o=0;i=t.show[o];o++)t.showPosData[o].finalPosData=i.getPosData();for(o=0;i=t.toHide[o];o++)t.toHidePosData[o].finalPosData=i.getPosData();
// Remove clamping
for((e.config.animation.clampHeight||e.config.animation.clampWidth)&&(e.dom.parent.style.height=e.dom.parent.style.width=e.dom.parent.style.overflow=""),e.incPadding||(n=m.getComputedStyle(e.dom.parent)),a=e.dom.parent.getBoundingClientRect(),t.newX=a.left,t.newY=a.top,t.newHeight=e.incPadding?a.height:a.height-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom)-parseFloat(n.borderTop)-parseFloat(n.borderBottom),t.newWidth=e.incPadding?a.width:a.width-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)-parseFloat(n.borderLeft)-parseFloat(n.borderRight),t.viewportDeltaX=t.docState.viewportWidth-this.dom.document.documentElement.clientWidth,t.viewportDeltaY=t.docState.viewportHeight-this.dom.document.documentElement.clientHeight,t.willSort&&e.printSort(!0,t),o=0;i=t.toShow[o];o++)i.hide();for(o=0;i=t.toHide[o];o++)i.show();t.willChangeLayout&&(p.removeClass(e.dom.container,t.newContainerClassName),p.addClass(e.dom.container,e.config.layout.containerClassName)),e.callActions("afterGetFinalMixData",arguments)},
/**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */
getTweenData:function(t){var e=this,n=null,a=null,i=Object.getOwnPropertyNames(e.effectsIn),o="",r=null,s=-1,l=-1,c=-1,u=-1;for(e.callActions("beforeGetTweenData",arguments),c=0;n=t.show[c];c++)
// Process transforms
for((a=t.showPosData[c]).posIn=new g.StyleData,a.posOut=new g.StyleData,a.tweenData=new g.StyleData,
// Process x and y
n.isShown?(a.posIn.x=a.startPosData.x-a.interPosData.x,a.posIn.y=a.startPosData.y-a.interPosData.y):a.posIn.x=a.posIn.y=0,a.posOut.x=a.finalPosData.x-a.interPosData.x,a.posOut.y=a.finalPosData.y-a.interPosData.y,
// Process opacity
a.posIn.opacity=n.isShown?1:e.effectsIn.opacity,a.posOut.opacity=1,a.tweenData.opacity=a.posOut.opacity-a.posIn.opacity,
// Adjust x and y if not nudging
n.isShown||e.config.animation.nudge||(a.posIn.x=a.posOut.x,a.posIn.y=a.posOut.y),a.tweenData.x=a.posOut.x-a.posIn.x,a.tweenData.y=a.posOut.y-a.posIn.y,
// Process width, height, and margins
e.config.animation.animateResizeTargets&&(a.posIn.width=a.startPosData.width,a.posIn.height=a.startPosData.height,
// "||" Prevents width/height change from including 0 width/height if hiding or showing
s=(a.startPosData.width||a.finalPosData.width)-a.interPosData.width,a.posIn.marginRight=a.startPosData.marginRight-s,l=(a.startPosData.height||a.finalPosData.height)-a.interPosData.height,a.posIn.marginBottom=a.startPosData.marginBottom-l,a.posOut.width=a.finalPosData.width,a.posOut.height=a.finalPosData.height,s=(a.finalPosData.width||a.startPosData.width)-a.interPosData.width,a.posOut.marginRight=a.finalPosData.marginRight-s,l=(a.finalPosData.height||a.startPosData.height)-a.interPosData.height,a.posOut.marginBottom=a.finalPosData.marginBottom-l,a.tweenData.width=a.posOut.width-a.posIn.width,a.tweenData.height=a.posOut.height-a.posIn.height,a.tweenData.marginRight=a.posOut.marginRight-a.posIn.marginRight,a.tweenData.marginBottom=a.posOut.marginBottom-a.posIn.marginBottom),u=0;o=i[u];u++)(r=e.effectsIn[o])instanceof g.TransformData&&r.value&&(a.posIn[o].value=r.value,a.posOut[o].value=0,a.tweenData[o].value=a.posOut[o].value-a.posIn[o].value,a.posIn[o].unit=a.posOut[o].unit=a.tweenData[o].unit=r.unit);for(c=0;n=t.toHide[c];c++)
// Process transforms
for((a=t.toHidePosData[c]).posIn=new g.StyleData,a.posOut=new g.StyleData,a.tweenData=new g.StyleData,
// Process x and y
a.posIn.x=n.isShown?a.startPosData.x-a.interPosData.x:0,a.posIn.y=n.isShown?a.startPosData.y-a.interPosData.y:0,a.posOut.x=e.config.animation.nudge?0:a.posIn.x,a.posOut.y=e.config.animation.nudge?0:a.posIn.y,a.tweenData.x=a.posOut.x-a.posIn.x,a.tweenData.y=a.posOut.y-a.posIn.y,
// Process width, height, and margins
e.config.animation.animateResizeTargets&&(a.posIn.width=a.startPosData.width,a.posIn.height=a.startPosData.height,s=a.startPosData.width-a.interPosData.width,a.posIn.marginRight=a.startPosData.marginRight-s,l=a.startPosData.height-a.interPosData.height,a.posIn.marginBottom=a.startPosData.marginBottom-l),
// Process opacity
a.posIn.opacity=1,a.posOut.opacity=e.effectsOut.opacity,a.tweenData.opacity=a.posOut.opacity-a.posIn.opacity,u=0;o=i[u];u++)(r=e.effectsOut[o])instanceof g.TransformData&&r.value&&(a.posIn[o].value=0,a.posOut[o].value=r.value,a.tweenData[o].value=a.posOut[o].value-a.posIn[o].value,a.posIn[o].unit=a.posOut[o].unit=a.tweenData[o].unit=r.unit);e.callActions("afterGetTweenData",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
moveTargets:function(t){var e=this,n=null,a=null,i=null,o="",r=!1,s=-1,l=-1,c=e.checkProgress.bind(e);
// TODO: this is an extra loop in addition to the calcs
// done in getOperation, could some of this be done there?
for(e.callActions("beforeMoveTargets",arguments),l=0;n=t.show[l];l++)a=new g.IMoveData,i=t.showPosData[l],o=n.isShown?"none":"show",(r=e.willTransition(o,t.hasEffect,i.posIn,i.posOut))&&
// Prevent non-transitioning targets from incrementing the staggerIndex
s++,n.show(),a.posIn=i.posIn,a.posOut=i.posOut,a.statusChange=o,a.staggerIndex=s,a.operation=t,a.callback=r?c:null,n.move(a);for(l=0;n=t.toHide[l];l++)i=t.toHidePosData[l],a=new g.IMoveData,o="hide",r=e.willTransition(o,i.posIn,i.posOut),a.posIn=i.posIn,a.posOut=i.posOut,a.statusChange=o,a.staggerIndex=l,a.operation=t,a.callback=r?c:null,n.move(a);e.config.animation.animateResizeContainer&&(e.dom.parent.style[g.features.transitionProp]="height "+e.config.animation.duration+"ms ease, width "+e.config.animation.duration+"ms ease ",requestAnimationFrame(function(){t.startHeight!==t.newHeight&&t.viewportDeltaY!==t.startHeight-t.newHeight&&(e.dom.parent.style.height=t.newHeight+"px"),t.startWidth!==t.newWidth&&t.viewportDeltaX!==t.startWidth-t.newWidth&&(e.dom.parent.style.width=t.newWidth+"px")})),t.willChangeLayout&&(p.removeClass(e.dom.container,e.config.layout.ContainerClassName),p.addClass(e.dom.container,t.newContainerClassName)),e.callActions("afterMoveTargets",arguments)},
/**
         * @private
         * @instance
         * @return  {boolean}
         */
hasEffect:function(){var t=this,e=["scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],n="",a=null,i=!1,o=-1,r=-1;if(1!==t.effectsIn.opacity)return t.callFilters("resultHasEffect",!0,arguments);for(r=0;n=e[r];r++)if(0!==(o="undefined"!==(a=t.effectsIn[n]).value?a.value:a)){i=!0;break}return t.callFilters("resultHasEffect",i,arguments)},
/**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */
willTransition:function(t,e,n,a){var i=this,o=!1;
// If opacity and/or translate will change
return o=!!p.isVisible(i.dom.container)&&(!!("none"!==t&&e||n.x!==a.x||n.y!==a.y)||!!i.config.animation.animateResizeTargets&&(n.width!==a.width||n.height!==a.height||n.marginRight!==a.marginRight||n.marginTop!==a.marginTop)),i.callFilters("resultWillTransition",o,arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
checkProgress:function(t){var e=this;e.targetsDone++,e.targetsBound===e.targetsDone&&e.cleanUp(t)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */
cleanUp:function(t){var e=this,n=null,a=null,i=null,o=null,r=-1;for(e.callActions("beforeCleanUp",arguments),e.targetsMoved=e.targetsImmovable=e.targetsBound=e.targetsDone=0,r=0;n=t.show[r];r++)n.cleanUp(),n.show();for(r=0;n=t.toHide[r];r++)n.cleanUp(),n.hide();if(t.willSort&&e.printSort(!1,t),
// Remove any styles applied to the parent container
e.dom.parent.style[g.features.transitionProp]=e.dom.parent.style.height=e.dom.parent.style.width=e.dom.parent.style.overflow=e.dom.parent.style[g.features.perspectiveProp]=e.dom.parent.style[g.features.perspectiveOriginProp]="",t.willChangeLayout&&(p.removeClass(e.dom.container,t.startContainerClassName),p.addClass(e.dom.container,t.newContainerClassName)),t.toRemove.length){for(r=0;n=e.targets[r];r++)-1<t.toRemove.indexOf(n)&&((a=n.dom.el.previousSibling)&&"#text"===a.nodeName&&(i=n.dom.el.nextSibling)&&"#text"===i.nodeName&&p.removeWhitespace(a),t.willSort||
// NB: Sorting will remove targets as a bi-product of `printSort()`
e.dom.parent.removeChild(n.dom.el),e.targets.splice(r,1),n.isInDom=!1,r--);
// Since targets have been removed, the original order must be updated
e.origOrder=e.targets}t.willSort&&(e.targets=t.newOrder),e.state=t.newState,e.lastOperation=t,e.dom.targets=e.state.targets,
// mixEnd
g.events.fire("mixEnd",e.dom.container,{state:e.state,instance:e},e.dom.document),"function"==typeof e.config.callbacks.onMixEnd&&e.config.callbacks.onMixEnd.call(e.dom.container,e.state,e),t.hasFailed&&(
// mixFail
g.events.fire("mixFail",e.dom.container,{state:e.state,instance:e},e.dom.document),"function"==typeof e.config.callbacks.onMixFail&&e.config.callbacks.onMixFail.call(e.dom.container,e.state,e),p.addClass(e.dom.container,p.getClassname(e.config.classNames,"container",e.config.classNames.modifierFailed))),
// User-defined callback function
"function"==typeof e.userCallback&&e.userCallback.call(e.dom.container,e.state,e),"function"==typeof e.userDeferred.resolve&&e.userDeferred.resolve(e.state),e.userCallback=null,e.userDeferred=null,e.lastClicked=null,e.isToggling=!1,e.isBusy=!1,e.queue.length&&(e.callActions("beforeReadQueueCleanUp",arguments),o=e.queue.shift(),
// Update non-public API properties stored in queue
e.userDeferred=o.deferred,e.isToggling=o.isToggling,e.lastClicked=o.triggerElement,o.instruction.command instanceof g.CommandMultimix?e.multimix.apply(e,o.args):e.dataset.apply(e,o.args)),e.callActions("afterCleanUp",arguments)},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseMultimixArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandMultimix,i=0;i<t.length;i++)null!==(a=t[i])&&("object"==typeof a?p.extend(n.command,a):"boolean"==typeof a?n.animate=a:"function"==typeof a&&(n.callback=a));
// Coerce arbitrary command arguments into typed command objects
return!n.command.insert||n.command.insert instanceof g.CommandInsert||(n.command.insert=e.parseInsertArgs([n.command.insert]).command),!n.command.remove||n.command.remove instanceof g.CommandRemove||(n.command.remove=e.parseRemoveArgs([n.command.remove]).command),!n.command.filter||n.command.filter instanceof g.CommandFilter||(n.command.filter=e.parseFilterArgs([n.command.filter]).command),!n.command.sort||n.command.sort instanceof g.CommandSort||(n.command.sort=e.parseSortArgs([n.command.sort]).command),!n.command.changeLayout||n.command.changeLayout instanceof g.CommandChangeLayout||(n.command.changeLayout=e.parseChangeLayoutArgs([n.command.changeLayout]).command),n=e.callFilters("instructionParseMultimixArgs",n,arguments),p.freeze(n),n},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseFilterArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandFilter,i=0;i<t.length;i++)"string"==typeof(a=t[i])?
// Selector
n.command.selector=a:null===a?n.command.collection=[]:"object"==typeof a&&p.isElement(a,e.dom.document)?
// Single element
n.command.collection=[a]:"object"==typeof a&&void 0!==a.length?
// Multiple elements in array, NodeList or jQuery collection
n.command.collection=p.arrayFromList(a):"object"==typeof a?
// Filter command
p.extend(n.command,a):"boolean"==typeof a?n.animate=a:"function"==typeof a&&(n.callback=a);if(n.command.selector&&n.command.collection)throw new Error(g.messages.errorFilterInvalidArguments());return n=e.callFilters("instructionParseFilterArgs",n,arguments),p.freeze(n),n},parseSortArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i="",o=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandSort,o=0;o<t.length;o++)if(null!==(a=t[o]))switch(typeof a){case"string":
// Sort string
i=a;break;case"object":
// Array of element references
a.length&&(n.command.collection=p.arrayFromList(a));break;case"boolean":n.animate=a;break;case"function":n.callback=a;break}return i&&(n.command=e.parseSortString(i,n.command)),n=e.callFilters("instructionParseSortArgs",n,arguments),p.freeze(n),n},
/**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseInsertArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandInsert,i=0;i<t.length;i++)null!==(a=t[i])&&("number"==typeof a?
// Insert index
n.command.index=a:"string"==typeof a&&-1<["before","after"].indexOf(a)?
// 'before'/'after'
n.command.position=a:"string"==typeof a?
// Markup
n.command.collection=p.arrayFromList(p.createElement(a).childNodes):"object"==typeof a&&p.isElement(a,e.dom.document)?
// Single element
n.command.collection.length?n.command.sibling=a:n.command.collection=[a]:"object"==typeof a&&a.length?
// Multiple elements in array or jQuery collection
n.command.collection.length?n.command.sibling=a[0]:n.command.collection=a:"object"==typeof a&&a.childNodes&&a.childNodes.length?
// Document fragment
n.command.collection.length?n.command.sibling=a.childNodes[0]:n.command.collection=p.arrayFromList(a.childNodes):"object"==typeof a?
// Insert command
p.extend(n.command,a):"boolean"==typeof a?n.animate=a:"function"==typeof a&&(n.callback=a));if(n.command.index&&n.command.sibling)throw new Error(g.messages.errorInsertInvalidArguments());return!n.command.collection.length&&e.config.debug.showWarnings&&console.warn(g.messages.warningInsertNoElements()),n=e.callFilters("instructionParseInsertArgs",n,arguments),p.freeze(n),n},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseRemoveArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=null,o=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandRemove,o=0;o<t.length;o++)if(null!==(i=t[o]))switch(typeof i){case"number":e.targets[i]&&(n.command.targets[0]=e.targets[i]);break;case"string":n.command.collection=p.arrayFromList(e.dom.parent.querySelectorAll(i));break;case"object":i&&i.length?n.command.collection=i:p.isElement(i,e.dom.document)?n.command.collection=[i]:
// Remove command
p.extend(n.command,i);break;case"boolean":n.animate=i;break;case"function":n.callback=i;break}if(n.command.collection.length)for(o=0;a=e.targets[o];o++)-1<n.command.collection.indexOf(a.dom.el)&&n.command.targets.push(a);return!n.command.targets.length&&e.config.debug.showWarnings&&console.warn(g.messages.warningRemoveNoElements()),p.freeze(n),n},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseDatasetArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandDataset,i=0;i<t.length;i++)if(null!==(a=t[i]))switch(typeof a){case"object":Array.isArray(a)||"number"==typeof a.length?n.command.dataset=a:
// Change layout command
p.extend(n.command,a);break;case"boolean":n.animate=a;break;case"function":n.callback=a;break}return p.freeze(n),n},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */
parseChangeLayoutArgs:function(t){var e=this,n=new g.UserInstruction,a=null,i=-1;for(n.animate=e.config.animation.enable,n.command=new g.CommandChangeLayout,i=0;i<t.length;i++)if(null!==(a=t[i]))switch(typeof a){case"string":n.command.containerClassName=a;break;case"object":
// Change layout command
p.extend(n.command,a);break;case"boolean":n.animate=a;break;case"function":n.callback=a;break}return p.freeze(n),n},
/**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */
queueMix:function(t){var e=this,n=null,a="";return e.callActions("beforeQueueMix",arguments),n=p.defer(g.libraries),e.config.animation.queue&&e.queue.length<e.config.animation.queueLimit?(t.deferred=n,e.queue.push(t),
// Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.
e.config.controls.enable&&(e.isToggling?(e.buildToggleArray(t.instruction.command),a=e.getToggleSelector(),e.updateControls({filter:{selector:a}})):e.updateControls(t.instruction.command))):(e.config.debug.showWarnings&&console.warn(g.messages.warningMultimixInstanceQueueFull()),n.resolve(e.state),g.events.fire("mixBusy",e.dom.container,{state:e.state,instance:e},e.dom.document),"function"==typeof e.config.callbacks.onMixBusy&&e.config.callbacks.onMixBusy.call(e.dom.container,e.state,e)),e.callFilters("promiseQueueMix",n.promise,arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */
getDataOperation:function(t){var e=this,n=new g.Operation,a=[];if(n=e.callFilters("operationUnmappedGetDataOperation",n,arguments),e.dom.targets.length&&!(a=e.state.activeDataset||[]).length)throw new Error(g.messages.errorDatasetNotSet());return n.id=p.randomHex(),n.startState=e.state,n.startDataset=a,n.newDataset=t.slice(),e.diffDatasets(n),n.startOrder=e.targets,n.newOrder=n.show,e.config.animation.enable&&(e.getStartMixData(n),e.setInter(n),n.docState=p.getDocumentState(e.dom.document),e.getInterMixData(n),e.setFinal(n),e.getFinalMixData(n),e.parseEffects(),n.hasEffect=e.hasEffect(),e.getTweenData(n)),e.targets=n.show.slice(),n.newState=e.buildState(n),
// NB: Targets to be removed must be included in `self.targets` for removal during clean up,
// but are added after state is built so that state is accurate
Array.prototype.push.apply(e.targets,n.toRemove),n=e.callFilters("operationMappedGetDataOperation",n,arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */
diffDatasets:function(t){var e=this,n=[],a=[],i=[],o=null,r=null,s=null,l=null,c=null,u={},f="",h=-1;for(e.callActions("beforeDiffDatasets",arguments),h=0;o=t.newDataset[h];h++){if(void 0===(f=o[e.config.data.uidKey])||f.toString().length<1)throw new TypeError(g.messages.errorDatasetInvalidUidKey({uidKey:e.config.data.uidKey}));if(u[f])throw new Error(g.messages.errorDatasetDuplicateUid({uid:f}));u[f]=!0,(r=e.cache[f])instanceof g.Target?(
// Already in cache
e.config.data.dirtyCheck&&!p.deepEquals(o,r.data)&&(
// change detected
s=r.render(o),r.data=o,s!==r.dom.el&&(
// Update target element reference
r.isInDom&&(r.unbindEvents(),e.dom.parent.replaceChild(s,r.dom.el)),r.isShown||(s.style.display="none"),r.dom.el=s,r.isInDom&&r.bindEvents())),s=r.dom.el):(
// New target
(r=new g.Target).init(null,e,o),r.hide()),r.isInDom?(
// Already in DOM
c=r.dom.el.nextElementSibling,a.push(f),l&&(
// Close and insert previously opened frag
l.lastElementChild&&l.appendChild(e.dom.document.createTextNode(" ")),e.insertDatasetFrag(l,r.dom.el,i),l=null)):(
// Adding to DOM
l||(
// Open frag
l=e.dom.document.createDocumentFragment()),l.lastElementChild&&l.appendChild(e.dom.document.createTextNode(" ")),l.appendChild(r.dom.el),r.isInDom=!0,r.unbindEvents(),r.bindEvents(),r.hide(),t.toShow.push(r),i.push(r)),t.show.push(r)}for(l&&(
// Unclosed frag remaining
(c=c||e.config.layout.siblingAfter)&&l.appendChild(e.dom.document.createTextNode(" ")),e.insertDatasetFrag(l,c,i)),h=0;o=t.startDataset[h];h++)f=o[e.config.data.uidKey],r=e.cache[f],t.show.indexOf(r)<0?(
// Previously shown but now absent
t.hide.push(r),t.toHide.push(r),t.toRemove.push(r)):n.push(f);p.isEqualArray(n,a)||(t.willSort=!0),e.callActions("afterDiffDatasets",arguments)},
/**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */
insertDatasetFrag:function(t,e,n){var a=this,i=e?p.arrayFromList(a.dom.parent.children).indexOf(e):a.targets.length;for(a.dom.parent.insertBefore(t,e);n.length;)a.targets.splice(i,0,n.shift()),i++},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */
willSort:function(t,e){var n=this,a=!1;return a=!!(n.config.behavior.liveSort||"random"===t.order||t.attribute!==e.attribute||t.order!==e.order||t.collection!==e.collection||null===t.next&&e.next||t.next&&null===e.next)||!(!t.next||!e.next)&&n.willSort(t.next,e.next),n.callFilters("resultWillSort",a,arguments)},
/**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */
show:function(){var t;return this.filter("all")},
/**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */
hide:function(){var t;return this.filter("none")},
/**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */
isMixing:function(){var t;return this.isBusy},
/**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
filter:function(){var t=this,e=t.parseFilterArgs(arguments);return t.multimix({filter:e.command},e.animate,e.callback)},
/**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
toggleOn:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a="";return t.isToggling=!0,t.toggleArray.indexOf(n)<0&&t.toggleArray.push(n),a=t.getToggleSelector(),t.multimix({filter:a},e.animate,e.callback)},
/**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
toggleOff:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a=t.toggleArray.indexOf(n),i="";return t.isToggling=!0,-1<a&&t.toggleArray.splice(a,1),i=t.getToggleSelector(),t.multimix({filter:i},e.animate,e.callback)},
/**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
sort:function(){var t=this,e=t.parseSortArgs(arguments);return t.multimix({sort:e.command},e.animate,e.callback)},
/**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
changeLayout:function(){var t=this,e=t.parseChangeLayoutArgs(arguments);return t.multimix({changeLayout:e.command},e.animate,e.callback)},
/**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
dataset:function(){var t=this,e=t.parseDatasetArgs(arguments),n=null,a=null,i=!1;return t.callActions("beforeDataset",arguments),t.isBusy?((a=new g.QueueItem).args=arguments,a.instruction=e,t.queueMix(a)):(e.callback&&(t.userCallback=e.callback),i=e.animate^t.config.animation.enable?e.animate:t.config.animation.enable,n=t.getDataOperation(e.command.dataset),t.goMix(i,n))},
/**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
multimix:function(){var t=this,e=null,n=!1,a=null,i=t.parseMultimixArgs(arguments);return t.callActions("beforeMultimix",arguments),t.isBusy?((a=new g.QueueItem).args=arguments,a.instruction=i,a.triggerElement=t.lastClicked,a.isToggling=t.isToggling,t.queueMix(a)):(e=t.getOperation(i.command),t.config.controls.enable&&(
// Update controls for API calls
i.command.filter&&!t.isToggling&&(
// As we are not toggling, reset the toggle array
// so new filter overrides existing toggles
t.toggleArray.length=0,t.buildToggleArray(e.command)),t.queue.length<1&&t.updateControls(e.command)),i.callback&&(t.userCallback=i.callback),
// Always allow the instruction to override the instance setting
n=i.animate^t.config.animation.enable?i.animate:t.config.animation.enable,t.callFilters("operationMultimix",e,arguments),t.goMix(n,e))},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */
getOperation:function(t){var e=this,n=t.sort,a=t.filter,i=t.changeLayout,o=t.remove,r=t.insert,s=new g.Operation;return(s=e.callFilters("operationUnmappedGetOperation",s,arguments)).id=p.randomHex(),s.command=t,s.startState=e.state,s.triggerElement=e.lastClicked,e.isBusy?(e.config.debug.showWarnings&&console.warn(g.messages.warningGetOperationInstanceBusy()),null):(r&&e.insertTargets(r,s),o&&(s.toRemove=o.targets),s.startSort=s.newSort=s.startState.activeSort,s.startOrder=s.newOrder=e.targets,n&&(s.startSort=s.startState.activeSort,s.newSort=n,s.willSort=e.willSort(n,s.startState.activeSort),s.willSort&&e.sortOperation(s)),s.startFilter=s.startState.activeFilter,s.newFilter=a||p.extend(new g.CommandFilter,s.startFilter),"all"===s.newFilter.selector?s.newFilter.selector=e.config.selectors.target:"none"===s.newFilter.selector&&(s.newFilter.selector=""),e.filterOperation(s),s.startContainerClassName=s.startState.activeContainerClassName,i?(s.newContainerClassName=i.containerClassName,s.newContainerClassName!==s.startContainerClassName&&(s.willChangeLayout=!0)):s.newContainerClassName=s.startContainerClassName,e.config.animation.enable&&(
// Populate the operation's position data
e.getStartMixData(s),e.setInter(s),s.docState=p.getDocumentState(e.dom.document),e.getInterMixData(s),e.setFinal(s),e.getFinalMixData(s),e.parseEffects(),s.hasEffect=e.hasEffect(),e.getTweenData(s)),s.willSort&&(e.targets=s.newOrder),s.newState=e.buildState(s),e.callFilters("operationMappedGetOperation",s,arguments))},
/**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */
tween:function(t,e){var n=null,a=null,i=-1,o=-1;for(e=Math.min(e,1),e=Math.max(e,0),o=0;n=t.show[o];o++)a=t.showPosData[o],n.applyTween(a,e);for(o=0;n=t.hide[o];o++)n.isShown&&n.hide(),-1<(i=t.toHide.indexOf(n))&&(a=t.toHidePosData[i],n.isShown||n.show(),n.applyTween(a,e))},
/**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert($newElement, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
insert:function(){var t=this,e=t.parseInsertArgs(arguments);return t.multimix({insert:e.command},e.animate,e.callback)},
/**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
insertBefore:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"before",e.command.sibling,e.animate,e.callback)},
/**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
insertAfter:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"after",e.command.sibling,e.animate,e.callback)},
/**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
prepend:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(0,e.command.collection,e.animate,e.callback)},
/**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
append:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(t.state.totalTargets,e.command.collection,e.animate,e.callback)},
/**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */
remove:function(){var t=this,e=t.parseRemoveArgs(arguments);return t.multimix({remove:e.command},e.animate,e.callback)},
/**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */
getConfig:function(t){var e=this,n=null;return n=t?p.getProperty(e.config,t):e.config,e.callFilters("valueGetConfig",n,arguments)},
/**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */
configure:function(t){var e=this;e.callActions("beforeConfigure",arguments),p.extend(e.config,t,!0,!0),e.callActions("afterConfigure",arguments)},
/**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */
getState:function(){var t=this,e=null;return e=new g.State,p.extend(e,t.state),p.freeze(e),t.callFilters("stateGetState",e,arguments)},
/**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */
forceRefresh:function(){var t;this.indexTargets()},
/**
         * Forces the re-rendering of all targets when using the Dataset API.
         *
         * By default, targets are only re-rendered when `data.dirtyCheck` is
         * enabled, and an item's data has changed when `dataset()` is called.
         *
         * The `forceRender()` method allows for the re-rendering of all targets
         * in response to some arbitrary event, such as the changing of the target
         * render function.
         *
         * Targets are rendered against their existing data.
         *
         * @example
         *
         * .forceRender()
         *
         * @example <caption>Example: Force render targets after changing the target render function</caption>
         *
         * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
         *
         * mixer.configure({
         *     render: {
         *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
         *     }
         * });
         *
         * mixer.forceRender();
         *
         * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
         *
         * @public
         * @instance
         * @since 3.2.1
         * @return {void}
         */
forceRender:function(){var t=this,e=null,n=null,a="";for(a in t.cache)(n=(e=t.cache[a]).render(e.data))!==e.dom.el&&(
// Update target element reference
e.isInDom&&(e.unbindEvents(),t.dom.parent.replaceChild(n,e.dom.el)),e.isShown||(n.style.display="none"),e.dom.el=n,e.isInDom&&e.bindEvents());t.state=t.buildState(t.lastOperation)},
/**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */
destroy:function(t){var e=this,n=null,a=null,i=0;for(e.callActions("beforeDestroy",arguments),i=0;n=e.controls[i];i++)n.removeBinding(e);for(i=0;a=e.targets[i];i++)t&&a.show(),a.unbindEvents();e.dom.container.id.match(/^MixItUp/)&&e.dom.container.removeAttribute("id"),delete g.instances[e.id],e.callActions("afterDestroy",arguments)}}),
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.IMoveData=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.posIn=null,this.posOut=null,this.operation=null,this.callback=null,this.statusChange="",this.duration=-1,this.staggerIndex=-1,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.IMoveData),g.IMoveData.prototype=Object.create(g.Base.prototype),g.IMoveData.prototype.constructor=g.IMoveData,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.TargetDom=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.TargetDom),g.TargetDom.prototype=Object.create(g.Base.prototype),g.TargetDom.prototype.constructor=g.TargetDom,
/**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Target=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.sortString="",this.mixer=null,this.callback=null,this.isShown=!1,this.isBound=!1,this.isExcluded=!1,this.isInDom=!1,this.handler=null,this.operation=null,this.data=null,this.dom=new g.TargetDom,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Target),g.Target.prototype=Object.create(g.Base.prototype),p.extend(g.Target.prototype,{constructor:g.Target,
/**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */
init:function(t,e,n){var a=this,i="";if(a.callActions("beforeInit",arguments),a.mixer=e,t||(
// If no element is provided, render it
t=a.render(n)),a.cacheDom(t),a.bindEvents(),"none"!==a.dom.el.style.display&&(a.isShown=!0),n&&e.config.data.uidKey){if(void 0===(i=n[e.config.data.uidKey])||i.toString().length<1)throw new TypeError(g.messages.errorDatasetInvalidUidKey({uidKey:e.config.data.uidKey}));a.id=i,a.data=n,e.cache[i]=a}a.callActions("afterInit",arguments)},
/**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */
render:function(t){var e=this,n=null,a=null,i=null,o="";if(e.callActions("beforeRender",arguments),"function"!=typeof(n=e.callFilters("renderRender",e.mixer.config.render.target,arguments)))throw new TypeError(g.messages.errorDatasetRendererNotSet());return(o=n(t))&&"object"==typeof o&&p.isElement(o)?a=o:"string"==typeof o&&((i=document.createElement("div")).innerHTML=o,a=i.firstElementChild),e.callFilters("elRender",a,arguments)},
/**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */
cacheDom:function(t){var e=this;e.callActions("beforeCacheDom",arguments),e.dom.el=t,e.callActions("afterCacheDom",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */
getSortString:function(t){var e=this,n=e.dom.el.getAttribute("data-"+t)||"";e.callActions("beforeGetSortString",arguments),n=isNaN(1*n)?n.toLowerCase():1*n,e.sortString=n,e.callActions("afterGetSortString",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */
show:function(){var t=this;t.callActions("beforeShow",arguments),t.isShown||(t.dom.el.style.display="",t.isShown=!0),t.callActions("afterShow",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */
hide:function(){var t=this;t.callActions("beforeHide",arguments),t.isShown&&(t.dom.el.style.display="none",t.isShown=!1),t.callActions("afterHide",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */
move:function(t){var e=this;e.callActions("beforeMove",arguments),e.isExcluded||e.mixer.targetsMoved++,e.applyStylesIn(t),requestAnimationFrame(function(){e.applyStylesOut(t)}),e.callActions("afterMove",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */
applyTween:function(t,e){var n=this,a="",i=null,o=t.posIn,r=[],s=new g.StyleData,l=-1;for(n.callActions("beforeApplyTween",arguments),s.x=o.x,s.y=o.y,0===e?n.hide():n.isShown||n.show(),l=0;a=g.features.TWEENABLE[l];l++)if(i=t.tweenData[a],"x"===a){if(!i)continue;s.x=o.x+i*e}else if("y"===a){if(!i)continue;s.y=o.y+i*e}else if(i instanceof g.TransformData){if(!i.value)continue;s[a].value=o[a].value+i.value*e,s[a].unit=i.unit,r.push(a+"("+s[a].value+i.unit+")")}else{if(!i)continue;s[a]=o[a]+i*e,n.dom.el.style[a]=s[a]}(s.x||s.y)&&r.unshift("translate("+s.x+"px, "+s.y+"px)"),r.length&&(n.dom.el.style[g.features.transformProp]=r.join(" ")),n.callActions("afterApplyTween",arguments)},
/**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */
applyStylesIn:function(t){var e=this,n=t.posIn,a=1!==e.mixer.effectsIn.opacity,i=[];e.callActions("beforeApplyStylesIn",arguments),i.push("translate("+n.x+"px, "+n.y+"px)"),e.mixer.config.animation.animateResizeTargets&&("show"!==t.statusChange&&(
// Don't apply posIn width or height or showing, as will be 0
e.dom.el.style.width=n.width+"px",e.dom.el.style.height=n.height+"px"),e.dom.el.style.marginRight=n.marginRight+"px",e.dom.el.style.marginBottom=n.marginBottom+"px"),a&&(e.dom.el.style.opacity=n.opacity),"show"===t.statusChange&&(i=i.concat(e.mixer.transformIn)),e.dom.el.style[g.features.transformProp]=i.join(" "),e.callActions("afterApplyStylesIn",arguments)},
/**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */
applyStylesOut:function(t){var e=this,n=[],a=[],i=e.mixer.config.animation.animateResizeTargets,o=void 0!==e.mixer.effectsIn.opacity;
// If no callback was provided, the element will
// not transition in any way so tag it as "immovable"
if(e.callActions("beforeApplyStylesOut",arguments),
// Build the transition rules
n.push(e.writeTransitionRule(g.features.transformRule,t.staggerIndex)),"none"!==t.statusChange&&n.push(e.writeTransitionRule("opacity",t.staggerIndex,t.duration)),i&&(n.push(e.writeTransitionRule("width",t.staggerIndex,t.duration)),n.push(e.writeTransitionRule("height",t.staggerIndex,t.duration)),n.push(e.writeTransitionRule("margin",t.staggerIndex,t.duration))),!t.callback)return e.mixer.targetsImmovable++,void(e.mixer.targetsMoved===e.mixer.targetsImmovable&&
// If the total targets moved is equal to the
// number of immovable targets, the operation
// should be considered finished
e.mixer.cleanUp(t.operation));
// If the target will transition in some fasion,
// assign a callback function
// Apply fade
switch(e.operation=t.operation,e.callback=t.callback,
// As long as the target is not excluded, increment
// the total number of targets bound
!e.isExcluded&&e.mixer.targetsBound++,
// Tag the target as bound to differentiate from transitionEnd
// events that may come from stylesheet driven effects
e.isBound=!0,
// Apply the transition
e.applyTransition(n),
// Apply width, height and margin negation
i&&0<t.posOut.width&&0<t.posOut.height&&(e.dom.el.style.width=t.posOut.width+"px",e.dom.el.style.height=t.posOut.height+"px",e.dom.el.style.marginRight=t.posOut.marginRight+"px",e.dom.el.style.marginBottom=t.posOut.marginBottom+"px"),e.mixer.config.animation.nudge||"hide"!==t.statusChange||
// If we're not nudging, the translation should be
// applied before any other transforms to prevent
// lateral movement
a.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),t.statusChange){case"hide":o&&(e.dom.el.style.opacity=e.mixer.effectsOut.opacity),a=a.concat(e.mixer.transformOut);break;case"show":o&&(e.dom.el.style.opacity=1)}(e.mixer.config.animation.nudge||!e.mixer.config.animation.nudge&&"hide"!==t.statusChange)&&
// Opposite of above - apply translate after
// other transform
a.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),
// Apply transforms
e.dom.el.style[g.features.transformProp]=a.join(" "),e.callActions("afterApplyStylesOut",arguments)},
/**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */
writeTransitionRule:function(t,e,n){var a=this,i=a.getDelay(e),o="";return o=t+" "+(0<n?n:a.mixer.config.animation.duration)+"ms "+i+"ms "+("opacity"===t?"linear":a.mixer.config.animation.easing),a.callFilters("ruleWriteTransitionRule",o,arguments)},
/**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */
getDelay:function(t){var e=this,n=-1;return"function"==typeof e.mixer.config.animation.staggerSequence&&(t=e.mixer.config.animation.staggerSequence.call(e,t,e.state)),n=e.mixer.staggerDuration?t*e.mixer.staggerDuration:0,e.callFilters("delayGetDelay",n,arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */
applyTransition:function(t){var e=this,n=t.join(", ");e.callActions("beforeApplyTransition",arguments),e.dom.el.style[g.features.transitionProp]=n,e.callActions("afterApplyTransition",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */
handleTransitionEnd:function(t){var e=this,n=t.propertyName,a=e.mixer.config.animation.animateResizeTargets;e.callActions("beforeHandleTransitionEnd",arguments),e.isBound&&t.target.matches(e.mixer.config.selectors.target)&&(-1<n.indexOf("transform")||-1<n.indexOf("opacity")||a&&-1<n.indexOf("height")||a&&-1<n.indexOf("width")||a&&-1<n.indexOf("margin"))&&(e.callback.call(e,e.operation),e.isBound=!1,e.callback=null,e.operation=null),e.callActions("afterHandleTransitionEnd",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */
eventBus:function(t){var e=this;switch(e.callActions("beforeEventBus",arguments),t.type){case"webkitTransitionEnd":case"transitionend":e.handleTransitionEnd(t)}e.callActions("afterEventBus",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */
unbindEvents:function(){var t=this;t.callActions("beforeUnbindEvents",arguments),p.off(t.dom.el,"webkitTransitionEnd",t.handler),p.off(t.dom.el,"transitionend",t.handler),t.callActions("afterUnbindEvents",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */
bindEvents:function(){var e=this,t="";e.callActions("beforeBindEvents",arguments),t="webkit"===g.features.transitionPrefix?"webkitTransitionEnd":"transitionend",e.handler=function(t){return e.eventBus(t)},p.on(e.dom.el,t,e.handler),e.callActions("afterBindEvents",arguments)},
/**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */
getPosData:function(t){var e=this,n={},a=null,i=new g.StyleData;return e.callActions("beforeGetPosData",arguments),i.x=e.dom.el.offsetLeft,i.y=e.dom.el.offsetTop,(e.mixer.config.animation.animateResizeTargets||t)&&(a=e.dom.el.getBoundingClientRect(),i.top=a.top,i.right=a.right,i.bottom=a.bottom,i.left=a.left,i.width=a.width,i.height=a.height),e.mixer.config.animation.animateResizeTargets&&(n=m.getComputedStyle(e.dom.el),i.marginBottom=parseFloat(n.marginBottom),i.marginRight=parseFloat(n.marginRight)),e.callFilters("posDataGetPosData",i,arguments)},
/**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */
cleanUp:function(){var t=this;t.callActions("beforeCleanUp",arguments),t.dom.el.style[g.features.transformProp]="",t.dom.el.style[g.features.transitionProp]="",t.dom.el.style.opacity="",t.mixer.config.animation.animateResizeTargets&&(t.dom.el.style.width="",t.dom.el.style.height="",t.dom.el.style.marginRight="",t.dom.el.style.marginBottom=""),t.callActions("afterCleanUp",arguments)}}),
/**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */
g.Collection=function(t){var e=null,n=-1;for(this.callActions("beforeConstruct"),n=0;e=t[n];n++)this[n]=e;this.length=t.length,this.callActions("afterConstruct"),p.freeze(this)},g.BaseStatic.call(g.Collection),g.Collection.prototype=Object.create(g.Base.prototype),p.extend(g.Collection.prototype,
/** @lends mixitup.Collection */
{constructor:g.Collection,
/**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */
mixitup:function(t){var e=this,n=null,a=Array.prototype.slice.call(arguments),i=[],o=-1;for(this.callActions("beforeMixitup"),a.shift(),o=0;n=e[o];o++)i.push(n[t].apply(n,a));return e.callFilters("promiseMixitup",p.all(i,g.libraries),arguments)}}),
/**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Operation=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.args=[],this.command=null,this.showPosData=[],this.toHidePosData=[],this.startState=null,this.newState=null,this.docState=null,this.willSort=!1,this.willChangeLayout=!1,this.hasEffect=!1,this.hasFailed=!1,this.triggerElement=null,this.show=[],this.hide=[],this.matching=[],this.toShow=[],this.toHide=[],this.toMove=[],this.toRemove=[],this.startOrder=[],this.newOrder=[],this.startSort=null,this.newSort=null,this.startFilter=null,this.newFilter=null,this.startDataset=null,this.newDataset=null,this.viewportDeltaX=0,this.viewportDeltaY=0,this.startX=0,this.startY=0,this.startHeight=0,this.startWidth=0,this.newX=0,this.newY=0,this.newHeight=0,this.newWidth=0,this.startContainerClassName="",this.startDisplay="",this.newContainerClassName="",this.newDisplay="",this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.Operation),g.Operation.prototype=Object.create(g.Base.prototype),g.Operation.prototype.constructor=g.Operation,
/**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */
g.State=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */
this.id="",
/**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */
this.activeFilter=null,
/**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */
this.activeSort=null,
/**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */
this.activeContainerClassName="",
/**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */
this.container=null,
/**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */
this.targets=[],
/**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */
this.hide=[],
/**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */
this.show=[],
/**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */
this.matching=[],
/**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */
this.totalTargets=-1,
/**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */
this.totalShow=-1,
/**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */
this.totalHide=-1,
/**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */
this.totalMatching=-1,
/**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */
this.hasFailed=!1,
/**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */
this.triggerElement=null,
/**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */
this.activeDataset=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.State),g.State.prototype=Object.create(g.Base.prototype),g.State.prototype.constructor=g.State,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.UserInstruction=function(){g.Base.call(this),this.callActions("beforeConstruct"),this.command={},this.animate=!1,this.callback=null,this.callActions("afterConstruct"),p.seal(this)},g.BaseStatic.call(g.UserInstruction),g.UserInstruction.prototype=Object.create(g.Base.prototype),g.UserInstruction.prototype.constructor=g.UserInstruction,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */
g.Messages=function(){g.Base.call(this),this.callActions("beforeConstruct"),
/* Errors
        ----------------------------------------------------------------------------- */
this.ERROR_FACTORY_INVALID_CONTAINER="[MixItUp] An invalid selector or element reference was passed to the mixitup factory function",this.ERROR_FACTORY_CONTAINER_NOT_FOUND="[MixItUp] The provided selector yielded no container element",this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS="[MixItUp] Invalid value for `animation.effects`",this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE="[MixItUp] Invalid value for `controls.scope`",this.ERROR_CONFIG_INVALID_PROPERTY='[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}',this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION='. Did you mean "${probableMatch}"?',this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET="[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`",this.ERROR_DATASET_INVALID_UID_KEY='[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items',this.ERROR_DATASET_DUPLICATE_UID='[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.',this.ERROR_INSERT_INVALID_ARGUMENTS="[MixItUp] Please provider either an index or a sibling and position to insert, not both",this.ERROR_INSERT_PREEXISTING_ELEMENT="[MixItUp] An element to be inserted already exists in the container",this.ERROR_FILTER_INVALID_ARGUMENTS="[MixItUp] Please provide either a selector or collection `.filter()`, not both",this.ERROR_DATASET_NOT_SET="[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`",this.ERROR_DATASET_PRERENDERED_MISMATCH="[MixItUp] `load.dataset` does not match pre-rendered targets",this.ERROR_DATASET_RENDERER_NOT_SET="[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`",this.ERROR_SORT_NON_EXISTENT_ELEMENT="[MixItUp] An element to be sorted does not already exist in the container",
/* Warnings
        ----------------------------------------------------------------------------- */
this.WARNING_FACTORY_PREEXISTING_INSTANCE="[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.",this.WARNING_INSERT_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.insert()`",this.WARNING_REMOVE_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.remove()`",this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL="[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.",this.WARNING_GET_OPERATION_INSTANCE_BUSY="[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.",this.WARNING_NO_PROMISE_IMPLEMENTATION="[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.",this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES='[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output',this.callActions("afterConstruct"),this.compileTemplates(),p.seal(this)},g.BaseStatic.call(g.Messages),g.Messages.prototype=Object.create(g.Base.prototype),g.Messages.prototype.constructor=g.Messages,
/**
     * @return {void}
     */
g.Messages.prototype.compileTemplates=function(){var t="",e="";for(t in this)"string"==typeof(e=this[t])&&(this[p.camelCase(t)]=p.template(e))},g.messages=new g.Messages,
/**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */
g.Facade=function t(e){g.Base.call(this),this.callActions("beforeConstruct",arguments),this.configure=e.configure.bind(e),this.show=e.show.bind(e),this.hide=e.hide.bind(e),this.filter=e.filter.bind(e),this.toggleOn=e.toggleOn.bind(e),this.toggleOff=e.toggleOff.bind(e),this.sort=e.sort.bind(e),this.changeLayout=e.changeLayout.bind(e),this.multimix=e.multimix.bind(e),this.dataset=e.dataset.bind(e),this.tween=e.tween.bind(e),this.insert=e.insert.bind(e),this.insertBefore=e.insertBefore.bind(e),this.insertAfter=e.insertAfter.bind(e),this.prepend=e.prepend.bind(e),this.append=e.append.bind(e),this.remove=e.remove.bind(e),this.destroy=e.destroy.bind(e),this.forceRefresh=e.forceRefresh.bind(e),this.forceRender=e.forceRender.bind(e),this.isMixing=e.isMixing.bind(e),this.getOperation=e.getOperation.bind(e),this.getConfig=e.getConfig.bind(e),this.getState=e.getState.bind(e),this.callActions("afterConstruct",arguments),p.freeze(this),p.seal(this)},g.BaseStatic.call(g.Facade),g.Facade.prototype=Object.create(g.Base.prototype),g.Facade.prototype.constructor=g.Facade,"object"==typeof exports&&"object"==typeof module?module.exports=g:"function"==typeof define&&define.amd?define(function(){return g}):void 0!==m.mixitup&&"function"==typeof m.mixitup||(m.mixitup=g),g.BaseStatic.call(g.constructor),g.NAME="mixitup",g.CORE_VERSION="3.3.1"}(window);