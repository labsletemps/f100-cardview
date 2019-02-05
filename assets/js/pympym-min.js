/*
* Pym.js is library that resizes an iframe based on the width of the parent and the resulting height of the child.
* Check out the docs at http://blog.apps.npr.org/pym.js/ or the readme at README.md for usage.
*/
/** @module pym */
!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&module.exports?module.exports=t():window.pym=t.call(this)}(function(){var n="xPYMx",g={},m=function(t){var e=document.createEvent("Event");e.initEvent("pym:"+t,!0,!0),document.dispatchEvent(e)},a=function(t){var e,i=new RegExp("[\\?&]"+t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)").exec(location.search);return null===i?"":decodeURIComponent(i[1].replace(/\+/g," "))},r=function(t,e){if(("*"===e.xdomain||t.origin.match(new RegExp(e.xdomain+"$")))&&"string"==typeof t.data)return!0;
// Ignore events that do not carry string data #151
},o=function(t){
// Adapted from angular 2 url sanitizer
var e=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(t.match(e))return!0},l=function(t,e,i){var s;return["pym",t,e,i].join(n)},h=function(t){var e;return new RegExp("^"+["pym",t,"(\\S+)","(.*)"].join(n)+"$")},u=Date.now||function(){return(new Date).getTime()},d=function(i,s,n){var a,r,o,l=null,h=0;n||(n={});var d=function(){h=!1===n.leading?0:u(),l=null,o=i.apply(a,r),l||(a=r=null)};return function(){var t=u();h||!1!==n.leading||(h=t);var e=s-(t-h);return a=this,r=arguments,e<=0||s<e?(l&&(clearTimeout(l),l=null),h=t,o=i.apply(a,r),l||(a=r=null)):l||!1===n.trailing||(l=setTimeout(d,e)),o}},c=function(){
// Loop backwards to avoid index issues
for(var t,e=g.autoInitInstances.length-1;0<=e;e--){var i=g.autoInitInstances[e];
// If instance has been removed or is contentless then remove it
i.el.getElementsByTagName("iframe").length&&i.el.getElementsByTagName("iframe")[0].contentWindow||
// Remove the reference to the removed or orphan instance
g.autoInitInstances.splice(e,1)}};
// @endif
/**
     * Store auto initialized Pym instances for further reference
     * @name module:pym#autoInitInstances
     * @type Array
     * @default []
     */
return g.autoInitInstances=[],
/**
     * Initialize Pym for elements on page that have data-pym attributes.
     * Expose autoinit in case we need to call it from the outside
     * @instance
     * @method autoInit
     * @param {Boolean} doNotRaiseEvents flag to avoid sending custom events
     */
g.autoInit=function(t){var e=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),i=e.length;
// Clean stored instances in case needed
c();for(var s=0;s<i;++s){var n=e[s];
/*
            * Mark automatically-initialized elements so they are not
            * re-initialized if the user includes pym.js more than once in the
            * same document.
            */n.setAttribute("data-pym-auto-initialized",""),
// Ensure elements have an id
""===n.id&&(n.id="pym-"+s+"-"+Math.random().toString(36).substr(2,5));var a=n.getAttribute("data-pym-src"),r={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},o={};
// List of data attributes to configure the component
// structure: {'attribute name': 'type'}
for(var l in r)
// via https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute#Notes
if(null!==n.getAttribute("data-pym-"+l))switch(r[l]){case"boolean":o[l]=!("false"===n.getAttribute("data-pym-"+l));// jshint ignore:line
break;case"string":o[l]=n.getAttribute("data-pym-"+l);break;case"number":var h=Number(n.getAttribute("data-pym-"+l));isNaN(h)||(o[l]=h);break;default:console.err("unrecognized attribute type")}
// Store references to autoinitialized pym instances
var d=new g.Parent(n.id,a,o);g.autoInitInstances.push(d)}
// Fire customEvent
// Return stored autoinitalized pym instances
return t||m("pym-initialized"),g.autoInitInstances},
/**
     * The Parent half of a response iframe.
     *
     * @memberof module:pym
     * @class Parent
     * @param {String} id The id of the div into which the iframe will be rendered. sets {@link module:pym.Parent~id}
     * @param {String} url The url of the iframe source. sets {@link module:pym.Parent~url}
     * @param {Object} [config] Configuration for the parent instance. sets {@link module:pym.Parent~settings}
     * @param {string} [config.xdomain='*'] - xdomain to validate messages received
     * @param {string} [config.title] - if passed it will be assigned to the iframe title attribute
     * @param {string} [config.name] - if passed it will be assigned to the iframe name attribute
     * @param {string} [config.id] - if passed it will be assigned to the iframe id attribute
     * @param {boolean} [config.allowfullscreen] - if passed and different than false it will be assigned to the iframe allowfullscreen attribute
     * @param {string} [config.sandbox] - if passed it will be assigned to the iframe sandbox attribute (we do not validate the syntax so be careful!!)
     * @param {string} [config.parenturlparam] - if passed it will be override the default parentUrl query string parameter name passed to the iframe src
     * @param {string} [config.parenturlvalue] - if passed it will be override the default parentUrl query string parameter value passed to the iframe src
     * @param {string} [config.optionalparams] - if passed and different than false it will strip the querystring params parentUrl and parentTitle passed to the iframe src
     * @param {boolean} [config.trackscroll] - if passed it will activate scroll tracking on the parent
     * @param {number} [config.scrollwait] - if passed it will set the throttle wait in order to fire scroll messaging. Defaults to 100 ms.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe iFrame}
     */
g.Parent=function(t,e,i){
// Add any overrides to settings coming from config.
for(var s in
/**
         * The id of the container element
         *
         * @memberof module:pym.Parent
         * @member {string} id
         * @inner
         */
this.id=t,
/**
         * The url that will be set as the iframe's src
         *
         * @memberof module:pym.Parent
         * @member {String} url
         * @inner
         */
this.url=e,
/**
         * The container DOM object
         *
         * @memberof module:pym.Parent
         * @member {HTMLElement} el
         * @inner
         */
this.el=document.getElementById(t),
/**
         * The contained child iframe
         *
         * @memberof module:pym.Parent
         * @member {HTMLElement} iframe
         * @inner
         * @default null
         */
this.iframe=null,
/**
         * The parent instance settings, updated by the values passed in the config object
         *
         * @memberof module:pym.Parent
         * @member {Object} settings
         * @inner
         */
this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},
/**
         * RegularExpression to validate the received messages
         *
         * @memberof module:pym.Parent
         * @member {String} messageRegex
         * @inner
         */
this.messageRegex=h(this.id),
/**
         * Stores the registered messageHandlers for each messageType
         *
         * @memberof module:pym.Parent
         * @member {Object} messageHandlers
         * @inner
         */
this.messageHandlers={},
// ensure a config object
i=i||{},
/**
         * Construct the iframe.
         *
         * @memberof module:pym.Parent
         * @method _constructIframe
         * @inner
         */
this._constructIframe=function(){
// Calculate the width of this element.
var t=this.el.offsetWidth.toString();
// Create an iframe element attached to the document.
this.iframe=document.createElement("iframe");
// Save fragment id
var e="",i=this.url.indexOf("#");
// Replace the child content if needed
// (some CMSes might strip out empty elements)
for(-1<i&&(e=this.url.substring(i,this.url.length),this.url=this.url.substring(0,i)),
// If the URL contains querystring bits, use them.
// Otherwise, just create a set of valid params.
this.url.indexOf("?")<0?this.url+="?":this.url+="&",
// Append the initial width as a querystring parameter
// and optional params if configured to do so
this.iframe.src=this.url+"initialWidth="+t+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=e,
// Set some attributes to this proto-iframe.
this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),void 0!==this.settings.allowfullscreen&&!1!==this.settings.allowfullscreen&&this.iframe.setAttribute("allowfullscreen",""),void 0!==this.settings.sandbox&&"string"==typeof this.settings.sandbox&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);
// Append the iframe to our element.
this.el.appendChild(this.iframe),
// Add an event listener that will handle redrawing the child on resize.
window.addEventListener("resize",this._onResize),
// Add an event listener that will send the child the viewport.
this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},
/**
         * Send width on resize.
         *
         * @memberof module:pym.Parent
         * @method _onResize
         * @inner
         */
this._onResize=function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}.bind(this),
/**
         * Send viewport and iframe info on scroll.
         *
         * @memberof module:pym.Parent
         * @method _onScroll
         * @inner
         */
this._onScroll=function(){this.sendViewportAndIFramePosition()}.bind(this),
/**
         * Fire all event handlers for a given message type.
         *
         * @memberof module:pym.Parent
         * @method _fire
         * @inner
         *
         * @param {String} messageType The type of message.
         * @param {String} message The message data.
         */
this._fire=function(t,e){if(t in this.messageHandlers)for(var i=0;i<this.messageHandlers[t].length;i++)this.messageHandlers[t][i].call(this,e)},
/**
         * Remove this parent from the page and unbind it's event handlers.
         *
         * @memberof module:pym.Parent
         * @method remove
         * @instance
         */
this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),
// _cleanAutoInitInstances in case this parent was autoInitialized
c()},
/**
         * Process a new message from the child.
         *
         * @memberof module:pym.Parent
         * @method _processMessage
         * @inner
         *
         * @param {Event} e A message event.
         */
this._processMessage=function(t){
// First, punt if this isn't from an acceptable xdomain.
if(r(t,this.settings)&&"string"==typeof t.data)
// Discard object messages, we only care about strings
{
// Grab the message from the child and parse it.
var e=t.data.match(this.messageRegex);
// If there's no match or too many matches in the message, punt.
if(!e||3!==e.length)return!1;var i=e[1],s=e[2];this._fire(i,s)}}.bind(this),
/**
         * Resize iframe in response to new height message from child.
         *
         * @memberof module:pym.Parent
         * @method _onHeightMessage
         * @inner
         *
         * @param {String} message The new height.
         */
this._onHeightMessage=function(t){
/*
             * Handle parent height message from child.
             */
var e=parseInt(t);this.iframe.setAttribute("height",e+"px")},
/**
         * Navigate parent to a new url.
         *
         * @memberof module:pym.Parent
         * @method _onNavigateToMessage
         * @inner
         *
         * @param {String} message The url to navigate to.
         */
this._onNavigateToMessage=function(t){
/*
             * Handle parent scroll message from child.
             */
o(t)&&(document.location.href=t)},
/**
         * Scroll parent to a given child position.
         *
         * @memberof module:pym.Parent
         * @method _onScrollToChildPosMessage
         * @inner
         *
         * @param {String} message The offset inside the child page.
         */
this._onScrollToChildPosMessage=function(t){
// Get the child container position using getBoundingClientRect + pageYOffset
// via https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
var e,i=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset+parseInt(t);window.scrollTo(0,i)},
/**
         * Bind a callback to a given messageType from the child.
         *
         * Reserved message names are: "height", "scrollTo" and "navigateTo".
         *
         * @memberof module:pym.Parent
         * @method onMessage
         * @instance
         *
         * @param {String} messageType The type of message being listened for.
         * @param {module:pym.Parent~onMessageCallback} callback The callback to invoke when a message of the given type is received.
         */
this.onMessage=function(t,e){t in this.messageHandlers||(this.messageHandlers[t]=[]),this.messageHandlers[t].push(e)},
/**
         * @callback module:pym.Parent~onMessageCallback
         * @param {String} message The message data.
         */
/**
         * Send a message to the the child.
         *
         * @memberof module:pym.Parent
         * @method sendMessage
         * @instance
         *
         * @param {String} messageType The type of message to send.
         * @param {String} message The message data to send.
         */
this.sendMessage=function(t,e){
// When used alongside with pjax some references are lost
this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(l(this.id,t,e),"*"):
// Contentless child detected remove listeners and iframe
this.remove())},
/**
         * Transmit the current iframe width to the child.
         *
         * You shouldn't need to call this directly.
         *
         * @memberof module:pym.Parent
         * @method sendWidth
         * @instance
         */
this.sendWidth=function(){var t=this.el.offsetWidth.toString();this.sendMessage("width",t)},
/**
         * Transmit the current viewport and iframe position to the child.
         * Sends viewport width, viewport height
         * and iframe bounding rect top-left-bottom-right
         * all separated by spaces
         *
         * You shouldn't need to call this directly.
         *
         * @memberof module:pym.Parent
         * @method sendViewportAndIFramePosition
         * @instance
         */
this.sendViewportAndIFramePosition=function(){var t=this.iframe.getBoundingClientRect(),e,i,s=(window.innerWidth||document.documentElement.clientWidth)+" "+(window.innerHeight||document.documentElement.clientHeight);s+=" "+t.top+" "+t.left,s+=" "+t.bottom+" "+t.right,this.sendMessage("viewport-iframe-position",s)},i)this.settings[s]=i[s];
/**
         * Throttled scroll function.
         *
         * @memberof module:pym.Parent
         * @method _throttleOnScroll
         * @inner
         */return this._throttleOnScroll=d(this._onScroll.bind(this),this.settings.scrollwait),
// Bind required message handlers
this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),
// Add a listener for processing messages from the child.
window.addEventListener("message",this._processMessage,!1),
// Construct the iframe in the container element.
this._constructIframe(),this},
/**
     * The Child half of a responsive iframe.
     *
     * @memberof module:pym
     * @class Child
     * @param {Object} [config] Configuration for the child instance. sets {@link module:pym.Child~settings}
     * @param {function} [config.renderCallback=null] Callback invoked after receiving a resize event from the parent, sets {@link module:pym.Child#settings.renderCallback}
     * @param {string} [config.xdomain='*'] - xdomain to validate messages received
     * @param {number} [config.polling=0] - polling frequency in milliseconds to send height to parent
     * @param {number} [config.id] - parent container id used when navigating the child iframe to a new page but we want to keep it responsive.
     * @param {string} [config.parenturlparam] - if passed it will be override the default parentUrl query string parameter name expected on the iframe src
     */
g.Child=function(t){
/**
         * The initial width of the parent page
         *
         * @memberof module:pym.Child
         * @member {string} parentWidth
         * @inner
         */
this.parentWidth=null,
/**
         * The id of the parent container
         *
         * @memberof module:pym.Child
         * @member {String} id
         * @inner
         */
this.id=null,
/**
         * The title of the parent page from document.title.
         *
         * @memberof module:pym.Child
         * @member {String} parentTitle
         * @inner
         */
this.parentTitle=null,
/**
         * The URL of the parent page from window.location.href.
         *
         * @memberof module:pym.Child
         * @member {String} parentUrl
         * @inner
         */
this.parentUrl=null,
/**
         * The settings for the child instance. Can be overriden by passing a config object to the child constructor
         * i.e.: var pymChild = new pym.Child({renderCallback: render, xdomain: "\\*\.npr\.org"})
         *
         * @memberof module:pym.Child.settings
         * @member {Object} settings - default settings for the child instance
         * @inner
         */
this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},
/**
         * The timerId in order to be able to stop when polling is enabled
         *
         * @memberof module:pym.Child
         * @member {String} timerId
         * @inner
         */
this.timerId=null,
/**
         * RegularExpression to validate the received messages
         *
         * @memberof module:pym.Child
         * @member {String} messageRegex
         * @inner
         */
this.messageRegex=null,
/**
         * Stores the registered messageHandlers for each messageType
         *
         * @memberof module:pym.Child
         * @member {Object} messageHandlers
         * @inner
         */
this.messageHandlers={},
// Ensure a config object
t=t||{},
/**
         * Bind a callback to a given messageType from the child.
         *
         * Reserved message names are: "width".
         *
         * @memberof module:pym.Child
         * @method onMessage
         * @instance
         *
         * @param {String} messageType The type of message being listened for.
         * @param {module:pym.Child~onMessageCallback} callback The callback to invoke when a message of the given type is received.
         */
this.onMessage=function(t,e){t in this.messageHandlers||(this.messageHandlers[t]=[]),this.messageHandlers[t].push(e)},
/**
         * @callback module:pym.Child~onMessageCallback
         * @param {String} message The message data.
         */
/**
         * Fire all event handlers for a given message type.
         *
         * @memberof module:pym.Child
         * @method _fire
         * @inner
         *
         * @param {String} messageType The type of message.
         * @param {String} message The message data.
         */
this._fire=function(t,e){
/*
             * Fire all event handlers for a given message type.
             */
if(t in this.messageHandlers)for(var i=0;i<this.messageHandlers[t].length;i++)this.messageHandlers[t][i].call(this,e)},
/**
         * Process a new message from the parent.
         *
         * @memberof module:pym.Child
         * @method _processMessage
         * @inner
         *
         * @param {Event} e A message event.
         */
this._processMessage=function(t){
/*
            * Process a new message from parent frame.
            */
// First, punt if this isn't from an acceptable xdomain.
if(r(t,this.settings)&&"string"==typeof t.data)
// Discard object messages, we only care about strings
{
// Get the message from the parent.
var e=t.data.match(this.messageRegex);
// If there's no match or it's a bad format, punt.
if(e&&3===e.length){var i=e[1],s=e[2];this._fire(i,s)}}}.bind(this),
/**
         * Resize iframe in response to new width message from parent.
         *
         * @memberof module:pym.Child
         * @method _onWidthMessage
         * @inner
         *
         * @param {String} message The new width.
         */
this._onWidthMessage=function(t){
/*
             * Handle width message from the child.
             */
var e=parseInt(t);
// Change the width if it's different.
e!==this.parentWidth&&(this.parentWidth=e,
// Call the callback function if it exists.
this.settings.renderCallback&&this.settings.renderCallback(e),
// Send the height back to the parent.
this.sendHeight())},
/**
         * Send a message to the the Parent.
         *
         * @memberof module:pym.Child
         * @method sendMessage
         * @instance
         *
         * @param {String} messageType The type of message to send.
         * @param {String} message The message data to send.
         */
this.sendMessage=function(t,e){
/*
             * Send a message to the parent.
             */
window.parent.postMessage(l(this.id,t,e),"*")},
/**
         * Transmit the current iframe height to the parent.
         *
         * Call this directly in cases where you manually alter the height of the iframe contents.
         *
         * @memberof module:pym.Child
         * @method sendHeight
         * @instance
         */
this.sendHeight=function(){
// Get the child's height.
var t=document.getElementsByTagName("body")[0].offsetHeight.toString();
// Send the height to the parent.
return this.sendMessage("height",t),t}.bind(this),
/**
         * Ask parent to send the current viewport and iframe position information
         *
         * @memberof module:pym.Child
         * @method sendHeight
         * @instance
         */
this.getParentPositionInfo=function(){
// Send the height to the parent.
this.sendMessage("parentPositionInfo")},
/**
         * Scroll parent to a given element id.
         *
         * @memberof module:pym.Child
         * @method scrollParentTo
         * @instance
         *
         * @param {String} hash The id of the element to scroll to.
         */
this.scrollParentTo=function(t){this.sendMessage("navigateTo","#"+t)},
/**
         * Navigate parent to a given url.
         *
         * @memberof module:pym.Child
         * @method navigateParentTo
         * @instance
         *
         * @param {String} url The url to navigate to.
         */
this.navigateParentTo=function(t){this.sendMessage("navigateTo",t)},
/**
         * Scroll parent to a given child element id.
         *
         * @memberof module:pym.Child
         * @method scrollParentToChildEl
         * @instance
         *
         * @param {String} id The id of the child element to scroll to.
         */
this.scrollParentToChildEl=function(t){
// Get the child element position using getBoundingClientRect + pageYOffset
// via https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
var e=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(e)},
/**
         * Scroll parent to a particular child offset.
         *
         * @memberof module:pym.Child
         * @method scrollParentToChildPos
         * @instance
         *
         * @param {Number} pos The offset of the child element to scroll to.
         */
this.scrollParentToChildPos=function(t){this.sendMessage("scrollToChildPos",t.toString())};
/**
         * Mark Whether the child is embedded or not
         * executes a callback in case it was passed to the config
         *
         * @memberof module:pym.Child
         * @method _markWhetherEmbedded
         * @inner
         *
         * @param {module:pym.Child~onMarkedEmbeddedStatus} The callback to execute after determining whether embedded or not.
         */
var e=function(t){var e=document.getElementsByTagName("html")[0],i,s=e.className;try{i=window.self!==window.top?"embedded":"not-embedded"}catch(t){i="embedded"}s.indexOf(i)<0&&(e.className=s?s+" "+i:i,t&&t(i),m("marked-embedded"))};
/**
         * @callback module:pym.Child~onMarkedEmbeddedStatus
         * @param {String} classname "embedded" or "not-embedded".
         */
/**
         * Unbind child event handlers and timers.
         *
         * @memberof module:pym.Child
         * @method remove
         * @instance
         */
// Initialize settings with overrides.
for(var i in this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)},t)this.settings[i]=t[i];
// Identify what ID the parent knows this child as.
this.id=a("childId")||t.id,this.messageRegex=new RegExp("^pym"+n+this.id+n+"(\\S+)"+n+"(.*)$");
// Get the initial width from a URL parameter.
var s=parseInt(a("initialWidth"));
// Get the url of the parent frame
return this.parentUrl=a(this.settings.parenturlparam),
// Get the title of the parent frame
this.parentTitle=a("parentTitle"),
// Bind the required message handlers
this.onMessage("width",this._onWidthMessage),
// Set up a listener to handle any incoming messages.
window.addEventListener("message",this._processMessage,!1),
// If there's a callback function, call it.
this.settings.renderCallback&&this.settings.renderCallback(s),
// Send the initial height to the parent.
this.sendHeight(),
// If we're configured to poll, create a setInterval to handle that.
this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),e(t.onMarkedEmbeddedStatus),this},
// @ifdef AUTOINIT
// Initialize elements with pym data attributes
// if we are not in server configuration
"undefined"!=typeof document&&g.autoInit(!0),g});