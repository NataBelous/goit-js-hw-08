!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),d?y(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=b();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return a=void 0,m&&o?y(e):(o=i=void 0,f)}function x(){var e=b(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(h,t),y(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=T(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(T(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},x.flush=function(){return void 0===a?f:w(b())},x}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form textarea"),lable:document.querySelector(".feedback-form lable")};j.form.addEventListener("submit",onformSubmit),j.input.addEventListener("input",e(t)(onTextareaInput,1e3)),j.form.addEventListener("input",(function(e){formData[e.target.name]=e.target.value,formData.localStorage.setItem(LOCALE_STORAGE_KEY),console.log(formData)})),populateTextarea()}();
//# sourceMappingURL=03-feedback.8a3d0d7a.js.map
