var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function p(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var t=function o(){return this instanceof o?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}),t}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u.apply(null,arguments)}const l=Object.freeze(Object.defineProperty({__proto__:null,get default(){return u}},Symbol.toStringTag,{value:"Module"}));function _(e,r){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(r.includes(o))continue;t[o]=e[o]}return t}var c={exports:{}};(function(e){function r(t){return t&&t.__esModule?t:{default:t}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(c);var y=c.exports;const h=p(l);var i={exports:{}},f;function g(){return f||(f=1,function(e){function r(t,o){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(o.includes(s))continue;n[s]=t[s]}return n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(i)),i.exports}function a(e,r){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},a(e,r)}function O(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,a(e,r)}function j(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}export{u as _,_ as a,g as b,b as c,d,O as e,j as f,p as g,y as i,h as r};
