(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getToaster=void 0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n(340));e.getToaster=function(t){return new o.default(t)};e.default=void 0},340:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"object"===o(t.instance)?t.instance:(t.instance=this,this.description=e,this.container=document.createElement("div"),this.container.classList.add("toaster"),this)}return i(t,[{key:"setDescription",value:function(t){this.description=t}},{key:"getDescription",value:function(){return this.description}},{key:"showToaster",value:function(){var t=this,e=document.querySelector("body");return this.container.textContent=this.description,e.appendChild(this.container),setTimeout(function(){e.removeChild(t.container)},3e3),this.container}}]),t}();e.default=r}}]);