// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.2.3-esm/index.mjs";var e="row-major";function t(t){var n,d;return d=t.order,r(d)?d:"object"!=typeof(n=t.strides)||null===n||1===(d=s(n))||3===d?e:2===d?"column-major":0===t.shape.length?e:null}export{t as default};
//# sourceMappingURL=index.mjs.map
