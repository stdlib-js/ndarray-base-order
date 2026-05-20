"use strict";var a=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,n){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,v=require('@stdlib/ndarray-base-strides2order/dist'),f=require('@stdlib/ndarray-defaults/dist'),i=f.get("order"),u="row-major",d="column-major";function l(t){var r,e;return e=t.order,o(e)?e:(r=t.strides,typeof r!="object"||r===null||(e=v(r),e===1)?u:e===2?d:e===3||t.shape.length===0?i:null)}n.exports=l
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
