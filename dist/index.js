"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var n=s(function(d,u){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,a=require('@stdlib/ndarray-base-strides2order/dist'),i="row-major",v="column-major";function f(t){var r,e;return e=t.order,o(e)?e:(r=t.strides,typeof r!="object"||r===null||(e=a(r),e===1||e===3)?i:e===2?v:t.shape.length===0?i:null)}u.exports=f
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
