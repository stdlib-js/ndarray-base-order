// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return Math.abs(e)}var n="row-major";return function(r){var t,o;return"string"==typeof(o=r.order)?o:"object"!=typeof(t=r.strides)||null===t||1===(o=function(n){var r,t,o,f,u,i;if(0===(t=n.length))return 0;for(r=!0,o=!0,f=e(n[0]),i=1;i<t;i++){if(u=e(n[i]),r&&u<f?r=!1:o&&u>f&&(o=!1),!o&&!r)return 0;f=u}return o&&r?3:o?1:2}(t))||3===o?n:2===o?"column-major":0===r.shape.length?n:null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).order=n();
//# sourceMappingURL=index.js.map
