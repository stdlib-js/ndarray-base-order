// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.4.1-esm/index.mjs";var t=e.get("order");function d(e){var d,n;return n=e.order,r(n)?n:"object"!=typeof(d=e.strides)||null===d?"row-major":1===(n=s(d))||3===n?t:2===n?"column-major":0===e.shape.length?t:null}export{d as default};
//# sourceMappingURL=index.mjs.map
