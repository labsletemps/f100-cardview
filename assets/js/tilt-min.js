/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
!function(i){"use strict";
// Helper vars and functions.
function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}
// from http://www.quirksmode.org/js/events_properties.html#position
function v(t){var e=0,n=0;if(!t)var t=i.event;return t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}}
/**
	 * TiltFx obj.
	 */function t(t,e){this.DOM={},this.DOM.el=t,this.options=n({},this.options),n(this.options,e),this._init()}t.prototype.options={movement:{imgWrapper:{translation:{x:0,y:0,z:0},rotation:{x:-5,y:5,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}},lines:{translation:{x:10,y:10,z:[0,10]},reverseAnimation:{duration:1e3,easing:"easeOutExpo",elasticity:600}},caption:{translation:{x:20,y:20,z:0},rotation:{x:0,y:0,z:0},reverseAnimation:{duration:1500,easing:"easeOutElastic",elasticity:600}},
/*
			overlay : {
				translation : {x: 10, y: 10, z: [0,50]},
				reverseAnimation : {
					duration : 500,
					easing : 'easeOutExpo'
				}
			},
			*/
shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}}}},
/**
	 * Init.
	 */
t.prototype._init=function(){this.DOM.animatable={},this.DOM.animatable.imgWrapper=this.DOM.el.querySelector(".tilter__figure"),this.DOM.animatable.lines=this.DOM.el.querySelector(".tilter__deco--lines"),this.DOM.animatable.caption=this.DOM.el.querySelector(".tilter__caption"),this.DOM.animatable.overlay=this.DOM.el.querySelector(".tilter__deco--overlay"),this.DOM.animatable.shine=this.DOM.el.querySelector(".tilter__deco--shine > div"),this._initEvents()},
/**
	 * Init/Bind events.
	 */
t.prototype._initEvents=function(){var e=this;this.mouseenterFn=function(){for(var t in e.DOM.animatable)anime.remove(e.DOM.animatable[t])},this.mousemoveFn=function(t){requestAnimationFrame(function(){e._layout(t)})},this.mouseleaveFn=function(t){requestAnimationFrame(function(){for(var t in e.DOM.animatable)null!=e.options.movement[t]&&anime({targets:e.DOM.animatable[t],duration:null!=e.options.movement[t].reverseAnimation?e.options.movement[t].reverseAnimation.duration||0:1,easing:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.easing||"linear",elasticity:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.elasticity||null,scaleX:1,scaleY:1,scaleZ:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0})})},this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn),this.DOM.el.addEventListener("mouseenter",this.mouseenterFn)},t.prototype._layout=function(t){
// Mouse position relative to the document.
var e=v(t),
// Document scrolls.
n=document.body.scrollLeft+document.documentElement.scrollLeft,i=document.body.scrollTop+document.documentElement.scrollTop,o=this.DOM.el.getBoundingClientRect(),
// Mouse position relative to the main element (this.DOM.el).
a=e.x-o.left-n,s=e.y-o.top-i;
// Movement settings for the animatable elements.
for(var r in this.DOM.animatable)if(null!=this.DOM.animatable[r]&&null!=this.options.movement[r]){var l=null!=this.options.movement[r]&&this.options.movement[r].translation||{x:0,y:0,z:0},m=null!=this.options.movement[r]&&this.options.movement[r].rotation||{x:0,y:0,z:0},u=function(t){for(var e in t)null==t[e]?t[e]=[0,0]:"number"==typeof t[e]&&(t[e]=[-1*t[e],t[e]])};u(l),u(m);var c={x:(l.x[1]-l.x[0])/o.width*a+l.x[0],y:(l.y[1]-l.y[0])/o.height*s+l.y[0],z:(l.z[1]-l.z[0])/o.height*s+l.z[0]},h={x:(m.x[1]-m.x[0])/o.height*s+m.x[0],y:(m.y[1]-m.y[0])/o.width*a+m.y[0],z:(m.z[1]-m.z[0])/o.width*a+m.z[0]};this.DOM.animatable[r].style.WebkitTransform=this.DOM.animatable[r].style.transform="translateX("+c.x+"px) translateY("+c.y+"px) translateZ("+c.z+"px) rotateX("+h.x+"deg) rotateY("+h.y+"deg) rotateZ("+h.z+"deg)"}},i.TiltFx=t}(window);