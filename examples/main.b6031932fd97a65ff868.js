!function(e){function n(n){for(var r,a,l=n[0],u=n[1],c=n[2],p=0,f=[];p<l.length;p++)a=l[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(n);f.length;)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={12:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var s=u;i.push([175,0]),t()}({175:function(e,n,t){e.exports=t(176)},176:function(e,n,t){"use strict";t.r(n);var r=t(27),o=t(6),i=t(21),a=t(70),l=t(25),u=t(17),c=t(26);Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const s=new c.a({layers:[new u.a({source:new l.b})],controls:Object(a.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new i.a({center:Object(o.k)([25,20],"EPSG:4326","EPSG:3857"),zoom:3})}),p=document.getElementById("time"),f=new r.a({map:s,time(){const e=p.value;if(f.getCesiumScene().globe.enableLighting&&e){const n=new Date;return n.setUTCHours(e),Cesium.JulianDate.fromDate(n)}return Cesium.JulianDate.now()}}),d=f.getCesiumScene();d.terrainProvider=Cesium.createWorldTerrain(),f.setEnabled(!0),p.style.display="none",document.getElementById("enable").addEventListener("click",()=>f.setEnabled(!f.getEnabled())),window.toggleTime=function(){d.globe.enableLighting=!d.globe.enableLighting,"none"==p.style.display?p.style.display="inline-block":p.style.display="none"},n.default={}}});
//# sourceMappingURL=main.b6031932fd97a65ff868.js.map