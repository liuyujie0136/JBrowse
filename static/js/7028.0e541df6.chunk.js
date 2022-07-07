"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7028],{97028:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(96234),a=n(34795),s=n(9249),i=n(87371),u=n(45754),c=n(86906),o=n(77162),f=n.n(o),h=n(29598),l=n(33528),p=n(26131),d=n(14956),v=n(62821),k=n.n(v),g=n(2877),w=n(76254),m=n(49882).Buffer,b=440477507;function x(e,t){var n=e.prototype[t],r="_memo_".concat(t);e.prototype[t]=function(){return r in this||(this[r]=n.call(this)),this[r]}}for(var y=["T","C","A","G"],S=[],B=0;B<256;B++)S.push(y[B>>6&3]+y[B>>4&3]+y[B>>2&3]+y[3&B]);var _=S.map((function(e){return e.toLowerCase()})),z=function(){function e(t){var n=t.filehandle,r=t.path;if((0,s.Z)(this,e),n)this.filehandle=n;else{if(!r)throw new Error("must supply path or filehandle");this.filehandle=new g.LocalFile(r)}this.isBigEndian=void 0}return(0,i.Z)(e,[{key:"_getParser",value:function(){var e=(0,a.Z)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getParsers();case 2:if(e.t0=t,n=e.sent[e.t0]){e.next=6;break}throw new Error("parser ".concat(t," not found"));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_detectEndianness",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(m.allocUnsafe(8),0,8,0);case 2:if(t=e.sent,(n=t.buffer).readInt32LE(0)!==b){e.next=9;break}this.isBigEndian=!1,this.version=n.readInt32LE(4),e.next=15;break;case 9:if(n.readInt32BE(0)!==b){e.next=14;break}this.isBigEndian=!0,this.version=n.readInt32BE(4),e.next=15;break;case 14:throw new Error("not a 2bit file");case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getParsers",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n,r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._detectEndianness();case 2:return t=this.isBigEndian?"big":"little",n=this.isBigEndian?"be":"le",r=(new w.Parser).endianess(t).uint8("nameLength").string("name",{length:"nameLength"}),r=1===this.version?r.buffer("offsetBytes",{length:8}):r.uint32("offset"),a=(new w.Parser).endianess(t).int32("magic",{assert:function(e){return 440477507===e}}).int32("version",{assert:function(e){return 0===e||1===e}}).uint32("sequenceCount",{assert:function(e){return e>=0}}).uint32("reserved"),e.abrupt("return",{header:a,index:(new w.Parser).endianess(t).uint32("sequenceCount").uint32("reserved").array("index",{length:"sequenceCount",type:r}),record1:(new w.Parser).endianess(t).uint32("dnaSize").uint32("nBlockCount"),record2:(new w.Parser).endianess(t).uint32("nBlockCount").array("nBlockStarts",{length:"nBlockCount",type:"uint32".concat(n)}).array("nBlockSizes",{length:"nBlockCount",type:"uint32".concat(n)}).uint32("maskBlockCount"),record3:(new w.Parser).endianess(t).uint32("maskBlockCount").array("maskBlockStarts",{length:"maskBlockCount",type:"uint32".concat(n)}).array("maskBlockSizes",{length:"maskBlockCount",type:"uint32".concat(n)}).int32("reserved")});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._detectEndianness();case 2:return e.next=4,this.filehandle.read(m.allocUnsafe(16),0,16,0);case 4:return t=e.sent,n=t.buffer,e.next=8,this._getParser("header");case 8:return r=e.sent,e.abrupt("return",r.parse(n).result);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getIndex",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n,r,a,s,i,u,c=this;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHeader();case 2:return t=e.sent,n=8+t.sequenceCount*(257+(1===this.version?8:4)),e.next=6,this.filehandle.read(m.allocUnsafe(n),0,n,8);case 6:return r=e.sent,a=r.buffer,e.next=10,this._getParser("index");case 10:return s=e.sent,i=s.parse(a).result.index,u={},1===this.version?i.forEach((function(e){var t=e.name,n=e.offsetBytes,r=k().fromBytes(n,!0,!c.isBigEndian);if(r.greaterThan(Number.MAX_SAFE_INTEGER))throw new Error("integer overflow. File offset greater than 2^53-1 encountered. This library can only handle offsets up to 2^53-1.");u[t]=r.toNumber()})):i.forEach((function(e){var t=e.name,n=e.offset;u[t]=n})),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceNames",value:function(){var e=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:return t=e.sent,e.abrupt("return",Object.keys(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceSizes",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n,r,a,s,i,u=this;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:return t=e.sent,n=Object.keys(t),r=Object.values(t).map((function(e){return u._getSequenceSize(e)})),e.next=7,Promise.all(r);case 7:for(a=e.sent,s={},i=0;i<n.length;i+=1)s[n[i]]=a[i];return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceSize",value:function(){var e=(0,a.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:if(n=e.sent,r=n[t]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._getSequenceSize(r));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getSequenceSize",value:function(){var e=(0,a.Z)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===t||t<0)){e.next=2;break}throw new Error("invalid offset");case 2:return e.next=4,this._parseItem(t,8,"record1");case 4:return n=e.sent,e.abrupt("return",n.dnaSize);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getSequenceRecord",value:function(){var e=(0,a.Z)(f().mark((function e(t){var n,r,a,s,i,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===t||t<0)){e.next=2;break}throw new Error("invalid offset");case 2:return e.next=4,this._parseItem(t,8,"record1");case 4:return n=e.sent,r=8*n.nBlockCount+8,e.next=8,this._parseItem(t+4,r,"record2");case 8:return a=e.sent,s=8*a.maskBlockCount+8,e.next=12,this._parseItem(t+4+r-4,s,"record3");case 12:return i=e.sent,u={dnaSize:n.dnaSize,nBlocks:{starts:a.nBlockStarts,sizes:a.nBlockSizes},maskBlocks:{starts:i.maskBlockStarts,sizes:i.maskBlockSizes},dnaPosition:t+4+r-4+s},e.abrupt("return",u);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parseItem",value:function(){var e=(0,a.Z)(f().mark((function e(t,n,r){var a,s,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(m.allocUnsafe(n),0,n,t);case 2:return a=e.sent,s=a.buffer,e.next=6,this._getParser(r);case 6:return i=e.sent,e.abrupt("return",i.parse(s).result);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getSequence",value:function(){var e=(0,a.Z)(f().mark((function e(t){var n,r,a,s,i,u,c,o,h,l,p,d,v,k,g,w,b,x,y=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.length>1&&void 0!==y[1]?y[1]:0,r=y.length>2?y[2]:void 0,e.next=4,this.getIndex();case 4:if(a=e.sent,s=a[t]){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,this._getSequenceRecord(s);case 10:if(i=e.sent,!(n<0)){e.next=13;break}throw new TypeError("regionStart cannot be less than 0");case 13:return(void 0===r||r>i.dnaSize)&&(r=i.dnaSize),u=this._getOverlappingBlocks(n,r,i.nBlocks.starts,i.nBlocks.sizes),c=this._getOverlappingBlocks(n,r,i.maskBlocks.starts,i.maskBlocks.sizes),o=m.allocUnsafe(Math.ceil((r-n)/4)+1),h=Math.floor(n/4),e.next=20,this.filehandle.read(o,0,o.length,i.dnaPosition+h);case 20:for(l=e.sent,p=l.buffer,d="",v=n;v<r;v+=1){for(;c.length&&c[0].end<=v;)c.shift();if(k=c[0]&&c[0].start<=v&&c[0].end>v,u[0]&&v>=u[0].start&&v<u[0].end){for(g=u.shift();v<g.end&&v<r;v+=1)d+=k?"n":"N";v-=1}else w=Math.floor(v/4)-h,b=v%4,x=p[w],d+=k?_[x][b]:S[x][b]}return e.abrupt("return",d);case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getOverlappingBlocks",value:function(e,t,n,r){for(var a,s,i=0;i<n.length;i+=1){var u=n[i];if(e>=u+r[i]||t<=u){if(void 0!==a){s=i;break}}else void 0===a&&(a=i)}if(void 0===a)return[];void 0===s&&(s=n.length);for(var c=new Array(s-a),o=a;o<s;o+=1)c[o-a]={start:n[o],end:n[o]+r[o],size:r[o]};return c}}]),e}();x(z,"_getParsers"),x(z,"getIndex"),x(z,"getHeader");var E=n(9077),Z=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(e,r,a){var i;return(0,s.Z)(this,n),(i=t.call(this,e,r,a)).twobit=void 0,i.chromSizesData=void 0,i.chromSizesData=i.initChromSizes(),i.twobit=new z({filehandle:(0,l.openLocation)((0,E.readConfObject)(e,"twoBitLocation"),i.pluginManager)}),i}return(0,i.Z)(n,[{key:"initChromSizes",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/path/to/default.chrom.sizes"===(t=(0,E.readConfObject)(this.config,"chromSizesLocation")).uri||""===t.uri){e.next=7;break}return n=(0,l.openLocation)(t,this.pluginManager),e.next=5,n.readFile("utf8");case 5:return a=e.sent,e.abrupt("return",Object.fromEntries(null===a||void 0===a?void 0:a.split("\n").filter((function(e){return!!e.trim()})).map((function(e){var t=e.split("\t"),n=(0,r.Z)(t,2);return[n[0],+n[1]]}))));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.chromSizesData;case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",Object.keys(t));case 5:return e.abrupt("return",this.twobit.getSequenceNames());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRegions",value:function(){var e=(0,a.Z)(f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.chromSizesData;case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",Object.keys(t).map((function(e){return{refName:e,start:0,end:t[e]}})));case 5:return e.next=7,this.twobit.getSequenceSizes();case 7:return n=e.sent,e.abrupt("return",Object.keys(n).map((function(e){return{refName:e,start:0,end:n[e]}})));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=e.refName,r=e.start,s=e.end;return(0,p.ObservableCreate)(function(){var e=(0,a.Z)(f().mark((function e(a){var i,u,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.twobit.getSequenceSize(n);case 2:return i=e.sent,u=void 0!==i?Math.min(i,s):s,e.next=6,t.twobit.getSequence(n,r,u);case 6:(c=e.sent)&&a.next(new d.Z({id:"".concat(n," ").concat(r,"-").concat(u),data:{refName:n,start:r,end:u,seq:c}})),a.complete();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(h.BaseSequenceAdapter)}}]);
//# sourceMappingURL=7028.0e541df6.chunk.js.map