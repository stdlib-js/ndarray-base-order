// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}function t(t){var n,e;return"string"==typeof(e=t.order)?e:"object"!=typeof(n=t.strides)||null===n||1===(e=function(t){var n,e,o,u,a,f;if(0===(e=t.length))return 0;for(n=!0,o=!0,u=r(t[0]),f=1;f<e;f++){if(a=r(t[f]),n&&a<u?n=!1:o&&a>u&&(o=!1),!o&&!n)return 0;u=a}return o&&n?3:o?1:2}(n))||3===e?"row-major":2===e?"column-major":0===t.shape.length?"row-major":null}export{t as default};
//# sourceMappingURL=mod.js.map
