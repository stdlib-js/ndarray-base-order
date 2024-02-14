// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.1.1-esm/index.mjs";function e(e){var t,o;return"string"==typeof(o=e.order)?o:"object"!=typeof(t=e.strides)||null===t||1===(o=r(t))||3===o?"row-major":2===o?"column-major":0===e.shape.length?"row-major":null}export{e as default};
//# sourceMappingURL=index.mjs.map
