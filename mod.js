// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}var t="row-major";function n(n){var e,o;return"string"==typeof(o=n.order)?o:"object"!=typeof(e=n.strides)||null===e||1===(o=function(t){var n,e,o,u,a,f;if(0===(e=t.length))return 0;for(n=!0,o=!0,u=r(t[0]),f=1;f<e;f++){if(a=r(t[f]),n&&a<u?n=!1:o&&a>u&&(o=!1),!o&&!n)return 0;u=a}return o&&n?3:o?1:2}(e))||3===o?t:2===o?"column-major":0===n.shape.length?t:null}export{n as default};
//# sourceMappingURL=mod.js.map
