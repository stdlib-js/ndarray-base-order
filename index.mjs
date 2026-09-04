// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.4.1-esm/index.mjs";var t=e.get("order"),d="row-major";function n(e){var n,i;return i=e.order,r(i)?i:"object"!=typeof(n=e.strides)||null===n||1===(i=s(n))?d:2===i?"column-major":3===i||0===e.shape.length?t:null}export{n as default};
//# sourceMappingURL=index.mjs.map
