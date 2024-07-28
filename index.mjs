// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.2.1-esm/index.mjs";var e="row-major";function t(t){var s,o;return"string"==typeof(o=t.order)?o:"object"!=typeof(s=t.strides)||null===s||1===(o=r(s))||3===o?e:2===o?"column-major":0===t.shape.length?e:null}export{t as default};
//# sourceMappingURL=index.mjs.map
