"use strict";var u=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=u(function(c,n){
var s=require('@stdlib/ndarray-base-strides2order/dist'),i="row-major",a="column-major";function f(t){var r,e;return e=t.order,typeof e=="string"?e:(r=t.strides,typeof r!="object"||r===null||(e=s(r),e===1||e===3)?i:e===2?a:t.shape.length===0?i:null)}n.exports=f
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
