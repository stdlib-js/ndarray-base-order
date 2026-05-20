"use strict";var a=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,u){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/ndarray-base-strides2order/dist'),v=require('@stdlib/ndarray-defaults/dist'),i=v.get("order"),f="row-major",d="column-major";function l(t){var r,e;return e=t.order,n(e)?e:(r=t.strides,typeof r!="object"||r===null?f:(e=o(r),e===1||e===3?i:e===2?d:t.shape.length===0?i:null))}u.exports=l
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
