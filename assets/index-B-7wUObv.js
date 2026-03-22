(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="160",ds={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,xl=1,Tf=2,yh=1,Ef=2,ni=3,Ri=0,nn=1,zn=2,ri=0,ks=1,zs=2,yl=3,Sl=4,bf=5,Wi=100,wf=101,Af=102,Ml=103,Tl=104,Cf=200,Rf=201,Pf=202,Df=203,hc=204,dc=205,Lf=206,Nf=207,If=208,Of=209,Uf=210,Ff=211,kf=212,Bf=213,Vf=214,zf=0,Gf=1,Hf=2,Po=3,Wf=4,qf=5,Xf=6,jf=7,Sh=0,Yf=1,Zf=2,wi=0,$f=1,Kf=2,Qf=3,Jf=4,ep=5,tp=6,Mh=300,Gs=301,Hs=302,fc=303,pc=304,aa=306,mc=1e3,Pn=1001,gc=1002,jt=1003,El=1004,Pa=1005,mn=1006,np=1007,pr=1008,Ai=1009,ip=1010,sp=1011,Oc=1012,Th=1013,Ei=1014,bi=1015,oi=1016,Eh=1017,bh=1018,Zi=1020,rp=1021,Dn=1023,op=1024,ap=1025,$i=1026,Ws=1027,cp=1028,wh=1029,lp=1030,Ah=1031,Ch=1033,Da=33776,La=33777,Na=33778,Ia=33779,bl=35840,wl=35841,Al=35842,Cl=35843,Rh=36196,Rl=37492,Pl=37496,Dl=37808,Ll=37809,Nl=37810,Il=37811,Ol=37812,Ul=37813,Fl=37814,kl=37815,Bl=37816,Vl=37817,zl=37818,Gl=37819,Hl=37820,Wl=37821,Oa=36492,ql=36494,Xl=36495,up=36283,jl=36284,Yl=36285,Zl=36286,Ph=3e3,Ki=3001,hp=3200,dp=3201,fp=0,pp=1,_n="",Ut="srgb",ci="srgb-linear",Uc="display-p3",ca="display-p3-linear",Do="linear",rt="srgb",Lo="rec709",No="p3",ps=7680,$l=519,mp=512,gp=513,_p=514,Dh=515,vp=516,xp=517,yp=518,Sp=519,Kl=35044,Ql="300 es",_c=1035,si=2e3,Io=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,vc=180/Math.PI;function Dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function Mp(i,e){return(i%e+e)%e}function Ua(i,e,t){return(1-t)*i+t*e}function Jl(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tp={DEG2RAD:wo};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,r,a,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],y=s[1],v=s[4],w=s[7],S=s[2],E=s[5],T=s[8];return r[0]=a*_+o*y+c*S,r[3]=a*p+o*v+c*E,r[6]=a*f+o*w+c*T,r[1]=l*_+u*y+h*S,r[4]=l*p+u*v+h*E,r[7]=l*f+u*w+h*T,r[2]=d*_+m*y+g*S,r[5]=d*p+m*v+g*E,r[8]=d*f+m*w+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new je;function Lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){const i=Oo("canvas");return i.style.display="block",i}const eu={};function dr(i){i in eu||(eu[i]=!0,console.warn(i))}const tu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[ci]:{transfer:Do,primaries:Lo,toReference:i=>i,fromReference:i=>i},[Ut]:{transfer:rt,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ca]:{transfer:Do,primaries:No,toReference:i=>i.applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu)},[Uc]:{transfer:rt,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu).convertLinearToSRGB()}},bp=new Set([ci,ca]),nt={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yr[e].toReference,s=Yr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yr[i].primaries},getTransfer:function(i){return i===_n?Do:Yr[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ka(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ms;class Nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=Oo("canvas")),ms.width=e.width,ms.height=e.height;const n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wp=0,Ih=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;class hn extends cs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Pn,s=Pn,r=mn,a=pr,o=Dn,c=Ai,l=hn.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Dr(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ki?Ut:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Ki:Ph}set encoding(e){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?Ut:_n}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Mh;hn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,w=(m+1)/2,S=(f+1)/2,E=(u+d)/4,T=(h+_)/4,R=(g+p)/4;return v>w&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):w>S?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?Ut:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rp extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-o;const f=c*d+l*m+u*g+h*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,f*y);p=Math.sin(p*E)/S,o=Math.sin(o*E)/S}const w=o*y;if(c=c*p+d*w,l=l*p+m*w,u=u*p+g*w,h=h*p+_*w,p===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new F,iu=new ts;class Lr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),$r.subVectors(this.max,ar),gs.subVectors(e.a,ar),_s.subVectors(e.b,ar),vs.subVectors(e.c,ar),mi.subVectors(_s,gs),gi.subVectors(vs,_s),Bi.subVectors(gs,vs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!za(t,gs,_s,vs,$r)||(t=[1,0,0,0,1,0,0,0,1],!za(t,gs,_s,vs,$r))?!1:(Kr.crossVectors(mi,gi),t=[Kr.x,Kr.y,Kr.z],za(t,gs,_s,vs,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new F,new F,new F,new F,new F,new F,new F,new F],En=new F,Zr=new Lr,gs=new F,_s=new F,vs=new F,mi=new F,gi=new F,Bi=new F,ar=new F,$r=new F,Kr=new F,Vi=new F;function za(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);const o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pp=new Lr,cr=new F,Ga=new F;class la{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ga)),this.expandByPoint(cr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new F,Ha=new F,Qr=new F,_i=new F,Wa=new F,Jr=new F,qa=new F;class ua{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ha.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=_i.dot(this.direction),c=-_i.dot(Qr),l=_i.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ha).addScaledVector(Qr,d),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){Wa.subVectors(t,e),Jr.subVectors(n,e),qa.crossVectors(Wa,Jr);let a=this.direction.dot(qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(Jr.crossVectors(_i,Jr));if(c<0)return null;const l=o*this.direction.dot(Wa.cross(_i));if(l<0||c+l>a)return null;const u=-o*_i.dot(qa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Lp)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),eo.crossVectors(cn,vi),s[0]=vi.x,s[4]=eo.x,s[8]=cn.x,s[1]=vi.y,s[5]=eo.y,s[9]=cn.y,s[2]=vi.z,s[6]=eo.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],w=n[11],S=n[15],E=s[0],T=s[4],R=s[8],x=s[12],b=s[1],L=s[5],N=s[9],H=s[13],D=s[2],O=s[6],U=s[10],k=s[14],W=s[3],z=s[7],q=s[11],$=s[15];return r[0]=a*E+o*b+c*D+l*W,r[4]=a*T+o*L+c*O+l*z,r[8]=a*R+o*N+c*U+l*q,r[12]=a*x+o*H+c*k+l*$,r[1]=u*E+h*b+d*D+m*W,r[5]=u*T+h*L+d*O+m*z,r[9]=u*R+h*N+d*U+m*q,r[13]=u*x+h*H+d*k+m*$,r[2]=g*E+_*b+p*D+f*W,r[6]=g*T+_*L+p*O+f*z,r[10]=g*R+_*N+p*U+f*q,r[14]=g*x+_*H+p*k+f*$,r[3]=y*E+v*b+w*D+S*W,r[7]=y*T+v*L+w*O+S*z,r[11]=y*R+v*N+w*U+S*q,r[15]=y*x+v*H+w*k+S*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*m-n*c*m)+_*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],y=h*p*l-_*d*l+_*c*m-o*p*m-h*c*f+o*d*f,v=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,w=u*_*l-g*h*l+g*o*m-a*_*m-u*o*f+a*h*f,S=g*h*c-u*_*c-g*o*d+a*_*d+u*o*p-a*h*p,E=t*y+n*v+s*w+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*d*r-h*p*r-_*s*m+n*p*m+h*s*f-n*d*f)*T,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*f+n*c*f)*T,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*m-n*c*m)*T,e[4]=v*T,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*f+t*d*f)*T,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*T,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*m+t*c*m)*T,e[8]=w*T,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*f-t*h*f)*T,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*T,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*T,e[12]=S*T,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*T,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*T,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,_=a*u,p=a*h,f=o*h,y=c*l,v=c*u,w=c*h,S=n.x,E=n.y,T=n.z;return s[0]=(1-(_+f))*S,s[1]=(m+w)*S,s[2]=(g-v)*S,s[3]=0,s[4]=(m-w)*E,s[5]=(1-(d+f))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(p-y)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const l=1/r,u=1/a,h=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=si){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(o===si)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Io)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,m=(n+s)*u;let g,_;if(o===si)g=(a+r)*h,_=-2*h;else if(o===Io)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new F,bn=new It,Dp=new F(0,0,0),Lp=new F(1,1,1),vi=new F,eo=new F,cn=new F,su=new It,ru=new ts;class ha{constructor(e=0,t=0,n=0,s=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Np=0;const ou=new F,ys=new ts,Kn=new It,to=new F,lr=new F,Ip=new F,Op=new ts,au=new F(1,0,0),cu=new F(0,1,0),lu=new F(0,0,1),Up={type:"added"},Fp={type:"removed"};class sn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,t=new ha,n=new ts,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(lr,to,this.up):Kn.lookAt(to,lr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Kn),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new F,Qn=new F,Xa=new F,Jn=new F,Ss=new F,Ms=new F,uu=new F,ja=new F,Ya=new F,Za=new F;let no=!1;class Cn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),Qn.subVectors(n,t),Xa.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Qn),c=wn.dot(Xa),l=Qn.dot(Qn),u=Qn.dot(Xa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,n,s,r,a,o,c){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),Qn.subVectors(e,t),wn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return no===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),no=!0),Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,n),Ms.subVectors(r,n),ja.subVectors(e,n);const c=Ss.dot(ja),l=Ms.dot(ja);if(c<=0&&l<=0)return t.copy(n);Ya.subVectors(e,s);const u=Ss.dot(Ya),h=Ms.dot(Ya);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ss,a);Za.subVectors(e,r);const m=Ss.dot(Za),g=Ms.dot(Za);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ms,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return uu.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(uu,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Ss,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},io={h:0,s:0,l:0};function $a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Mp(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$a(a,r,e+1/3),this.g=$a(a,r,e),this.b=$a(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Yt(Gt.r*255,0,255))*65536+Math.round(Yt(Gt.g*255,0,255))*256+Math.round(Yt(Gt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ut){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(io);const n=Ua(xi.h,io.h,t),s=Ua(xi.s,io.s,t),r=Ua(xi.l,io.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Fe;Fe.NAMES=Uh;let kp=0;class Nr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=ks,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class da extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new F,so=new Pe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class Fh extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xn extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bp=0;const pn=new It,Ka=new sn,Ts=new F,ln=new Lr,ur=new Lr,Lt=new F;class Tn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?kh:Fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(ln.min,ur.min),ln.expandByPoint(Lt),Lt.addVectors(ln.max,ur.max),ln.expandByPoint(Lt)):(ln.expandByPoint(ur.min),ln.expandByPoint(ur.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(e,l),Lt.add(Ts)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new F,u[b]=new F;const h=new F,d=new F,m=new F,g=new Pe,_=new Pe,p=new Pe,f=new F,y=new F;function v(b,L,N){h.fromArray(s,b*3),d.fromArray(s,L*3),m.fromArray(s,N*3),g.fromArray(a,b*2),_.fromArray(a,L*2),p.fromArray(a,N*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const H=1/(_.x*p.y-p.x*_.y);isFinite(H)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(H),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(H),l[b].add(f),l[L].add(f),l[N].add(f),u[b].add(y),u[L].add(y),u[N].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,L=w.length;b<L;++b){const N=w[b],H=N.start,D=N.count;for(let O=H,U=H+D;O<U;O+=3)v(n[O+0],n[O+1],n[O+2])}const S=new F,E=new F,T=new F,R=new F;function x(b){T.fromArray(r,b*3),R.copy(T);const L=l[b];S.copy(L),S.sub(T.multiplyScalar(T.dot(L))).normalize(),E.crossVectors(R,L);const H=E.dot(u[b])<0?-1:1;c[b*4]=S.x,c[b*4+1]=S.y,c[b*4+2]=S.z,c[b*4+3]=H}for(let b=0,L=w.length;b<L;++b){const N=w[b],H=N.start,D=N.count;for(let O=H,U=H+D;O<U;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new Nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new It,zi=new ua,ro=new la,du=new F,Es=new F,bs=new F,ws=new F,Qa=new F,oo=new F,ao=new Pe,co=new Pe,lo=new Pe,fu=new F,pu=new F,mu=new F,uo=new F,ho=new F;class Ln extends sn{constructor(e=new Tn,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Qa.fromBufferAttribute(h,e),a?oo.addScaledVector(Qa,u):oo.addScaledVector(Qa.sub(t),u))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(ro.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ro,du)===null||zi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(r).invert(),zi.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,S=v;w<S;w+=3){const E=o.getX(w),T=o.getX(w+1),R=o.getX(w+2);s=fo(this,f,e,n,l,u,h,E,T,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),w=o.getX(p+2);s=fo(this,a,e,n,l,u,h,y,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,S=v;w<S;w+=3){const E=w,T=w+1,R=w+2;s=fo(this,f,e,n,l,u,h,E,T,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,w=p+2;s=fo(this,a,e,n,l,u,h,y,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Vp(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ri,o),c===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Es),i.getVertexPosition(c,bs),i.getVertexPosition(l,ws);const u=Vp(i,e,t,n,Es,bs,ws,uo);if(u){s&&(ao.fromBufferAttribute(s,o),co.fromBufferAttribute(s,c),lo.fromBufferAttribute(s,l),u.uv=Cn.getInterpolation(uo,Es,bs,ws,ao,co,lo,new Pe)),r&&(ao.fromBufferAttribute(r,o),co.fromBufferAttribute(r,c),lo.fromBufferAttribute(r,l),u.uv1=Cn.getInterpolation(uo,Es,bs,ws,ao,co,lo,new Pe),u.uv2=u.uv1),a&&(fu.fromBufferAttribute(a,o),pu.fromBufferAttribute(a,c),mu.fromBufferAttribute(a,l),u.normal=Cn.getInterpolation(uo,Es,bs,ws,fu,pu,mu,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};Cn.getNormal(Es,bs,ws,h.normal),u.face=h}return u}class Ir extends Tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function g(_,p,f,y,v,w,S,E,T,R,x){const b=w/T,L=S/R,N=w/2,H=S/2,D=E/2,O=T+1,U=R+1;let k=0,W=0;const z=new F;for(let q=0;q<U;q++){const $=q*L-H;for(let J=0;J<O;J++){const j=J*b-N;z[_]=j*y,z[p]=$*v,z[f]=D,l.push(z.x,z.y,z.z),z[_]=0,z[p]=0,z[f]=E>0?1:-1,u.push(z.x,z.y,z.z),h.push(J/T),h.push(1-q/R),k+=1}}for(let q=0;q<R;q++)for(let $=0;$<T;$++){const J=d+$+O*q,j=d+$+O*(q+1),Q=d+($+1)+O*(q+1),ee=d+($+1)+O*q;c.push(J,j,ee),c.push(j,Q,ee),W+=6}o.addGroup(m,W,x),m+=W,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=qs(i[t]);for(const s in n)e[s]=n[s]}return e}function zp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const Uo={clone:qs,merge:Xt};var Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vh extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends Vh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Cs=1;class Wp extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(As,Cs,e,t);s.layers=this.layers,this.add(s);const r=new gn(As,Cs,e,t);r.layers=this.layers,this.add(r);const a=new gn(As,Cs,e,t);a.layers=this.layers,this.add(a);const o=new gn(As,Cs,e,t);o.layers=this.layers,this.add(o);const c=new gn(As,Cs,e,t);c.layers=this.layers,this.add(c);const l=new gn(As,Cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zh extends hn{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?Ut:_n),this.texture=new zh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ir(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ri});r.uniforms.tEquirect.value=t;const a=new Ln(s,r),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=mn),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ja=new F,Xp=new F,jp=new je;class Si{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ja.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jp.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new la,po=new F;class Gh{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],y=s[13],v=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,p-m,w-f).normalize(),n[1].setComponents(c+r,d+l,p+m,w+f).normalize(),n[2].setComponents(c+a,d+u,p+g,w+y).normalize(),n[3].setComponents(c-a,d-u,p-g,w-y).normalize(),n[4].setComponents(c-o,d-h,p-_,w-v).normalize(),t===si)n[5].setComponents(c+o,d+h,p+_,w+v).normalize();else if(t===Io)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yp(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class kc extends Tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<l;v++){const w=v*h-r;g.push(w,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const v=y+l*f,w=y+l*(f+1),S=y+1+l*(f+1),E=y+1+l*f;m.push(v,w,E),m.push(w,S,E)}this.setIndex(m),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Zp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:Qp,alphatest_fragment:Jp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:cm,bumpmap_pars_fragment:lm,clipping_planes_fragment:um,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Sm,displacementmap_vertex:Mm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Em,colorspace_fragment:bm,colorspace_pars_fragment:wm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Lm,fog_pars_vertex:Nm,fog_fragment:Im,fog_pars_fragment:Om,gradientmap_pars_fragment:Um,lightmap_fragment:Fm,lightmap_pars_fragment:km,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Vm,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Wm,lights_phong_fragment:qm,lights_phong_pars_fragment:Xm,lights_physical_fragment:jm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Km,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphcolor_vertex:cg,morphnormal_vertex:lg,morphtarget_pars_vertex:ug,morphtarget_vertex:hg,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Sg,opaque_fragment:Mg,packing:Tg,premultiplied_alpha_fragment:Eg,project_vertex:bg,dithering_fragment:wg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ig,skinning_pars_vertex:Og,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:kg,specularmap_pars_fragment:Bg,tonemapping_fragment:Vg,tonemapping_pars_fragment:zg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:qg,uv_vertex:Xg,worldpos_vertex:jg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Kg,cube_vert:Qg,cube_frag:Jg,depth_vert:e_,depth_frag:t_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:o_,linedashed_frag:a_,meshbasic_vert:c_,meshbasic_frag:l_,meshlambert_vert:u_,meshlambert_frag:h_,meshmatcap_vert:d_,meshmatcap_frag:f_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:x_,meshtoon_vert:y_,meshtoon_frag:S_,points_vert:M_,points_frag:T_,shadow_vert:E_,shadow_frag:b_,sprite_vert:w_,sprite_frag:A_},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Vn={basic:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Vn.physical={uniforms:Xt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const mo={r:0,b:0,g:0};function C_(i,e,t,n,s,r,a){const o=new Fe(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===aa)?(u===void 0&&(u=new Ln(new Ir(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:qs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==rt,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ln(new kc(2,2),new Wt({name:"BackgroundMaterial",uniforms:qs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(mo,Bh(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function R_(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(D,O,U,k,W){let z=!1;if(a){const q=_(k,U,O);l!==q&&(l=q,m(l.object)),z=f(D,k,U,W),z&&y(D,k,U,W)}else{const q=O.wireframe===!0;(l.geometry!==k.id||l.program!==U.id||l.wireframe!==q)&&(l.geometry=k.id,l.program=U.id,l.wireframe=q,z=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,R(D,O,U,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,O,U){const k=U.wireframe===!0;let W=o[D.id];W===void 0&&(W={},o[D.id]=W);let z=W[O.id];z===void 0&&(z={},W[O.id]=z);let q=z[k];return q===void 0&&(q=p(d()),z[k]=q),q}function p(D){const O=[],U=[],k=[];for(let W=0;W<s;W++)O[W]=0,U[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:k,object:D,attributes:{},index:null}}function f(D,O,U,k){const W=l.attributes,z=O.attributes;let q=0;const $=U.getAttributes();for(const J in $)if($[J].location>=0){const Q=W[J];let ee=z[J];if(ee===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),Q===void 0||Q.attribute!==ee||ee&&Q.data!==ee.data)return!0;q++}return l.attributesNum!==q||l.index!==k}function y(D,O,U,k){const W={},z=O.attributes;let q=0;const $=U.getAttributes();for(const J in $)if($[J].location>=0){let Q=z[J];Q===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const ee={};ee.attribute=Q,Q&&Q.data&&(ee.data=Q.data),W[J]=ee,q++}l.attributes=W,l.attributesNum=q,l.index=k}function v(){const D=l.newAttributes;for(let O=0,U=D.length;O<U;O++)D[O]=0}function w(D){S(D,0)}function S(D,O){const U=l.newAttributes,k=l.enabledAttributes,W=l.attributeDivisors;U[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),W[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),W[D]=O)}function E(){const D=l.newAttributes,O=l.enabledAttributes;for(let U=0,k=O.length;U<k;U++)O[U]!==D[U]&&(i.disableVertexAttribArray(U),O[U]=0)}function T(D,O,U,k,W,z,q){q===!0?i.vertexAttribIPointer(D,O,U,W,z):i.vertexAttribPointer(D,O,U,k,W,z)}function R(D,O,U,k){if(n.isWebGL2===!1&&(D.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=k.attributes,z=U.getAttributes(),q=O.defaultAttributeValues;for(const $ in z){const J=z[$];if(J.location>=0){let j=W[$];if(j===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Q=j.normalized,ee=j.itemSize,he=t.get(j);if(he===void 0)continue;const me=he.buffer,se=he.type,Ce=he.bytesPerElement,Me=n.isWebGL2===!0&&(se===i.INT||se===i.UNSIGNED_INT||j.gpuType===Th);if(j.isInterleavedBufferAttribute){const ke=j.data,G=ke.stride,At=j.offset;if(ke.isInstancedInterleavedBuffer){for(let be=0;be<J.locationSize;be++)S(J.location+be,ke.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let be=0;be<J.locationSize;be++)w(J.location+be);i.bindBuffer(i.ARRAY_BUFFER,me);for(let be=0;be<J.locationSize;be++)T(J.location+be,ee/J.locationSize,se,Q,G*Ce,(At+ee/J.locationSize*be)*Ce,Me)}else{if(j.isInstancedBufferAttribute){for(let ke=0;ke<J.locationSize;ke++)S(J.location+ke,j.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ke=0;ke<J.locationSize;ke++)w(J.location+ke);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ke=0;ke<J.locationSize;ke++)T(J.location+ke,ee/J.locationSize,se,Q,ee*Ce,ee/J.locationSize*ke*Ce,Me)}}else if(q!==void 0){const Q=q[$];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(J.location,Q);break;case 3:i.vertexAttrib3fv(J.location,Q);break;case 4:i.vertexAttrib4fv(J.location,Q);break;default:i.vertexAttrib1fv(J.location,Q)}}}}E()}function x(){N();for(const D in o){const O=o[D];for(const U in O){const k=O[U];for(const W in k)g(k[W].object),delete k[W];delete O[U]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const U in O){const k=O[U];for(const W in k)g(k[W].object),delete k[W];delete O[U]}delete o[D.id]}function L(D){for(const O in o){const U=o[O];if(U[D.id]===void 0)continue;const k=U[D.id];for(const W in k)g(k[W].object),delete k[W];delete U[D.id]}}function N(){H(),u=!0,l!==c&&(l=c,m(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:H,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:w,disableUnusedAttributes:E}}function P_(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function D_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,w=a||e.has("OES_texture_float"),S=v&&w,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:E}}function L_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Si,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,v=y*4;let w=f.clippingState||null;c.value=w,w=u(g,d,v,m);for(let S=0;S!==v;++S)w[S]=t[S];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,w=m;v!==_;++v,w+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function N_(i){let e=new WeakMap;function t(a,o){return o===fc?a.mapping=Gs:o===pc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fc||o===pc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qp(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wh extends Vh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,gu=[.125,.215,.35,.446,.526,.582],qi=20,ec=new Wh,_u=new Fe;let tc=null,nc=0,ic=0;const Hi=(1+Math.sqrt(5))/2,Rs=1/Hi,vu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Hi,Rs),new F(0,Hi,-Rs),new F(Rs,0,Hi),new F(-Rs,0,Hi),new F(Hi,Rs,0),new F(-Hi,Rs,0)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:oi,format:Dn,colorSpace:ci,depthBuffer:!1},s=yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=O_(r,e,t)}return s}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,s){const o=new gn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_u),u.toneMapping=wi,u.autoClear=!1;const m=new da({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ln(new Ir,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(_u),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;go(s,y*v,f>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Gs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vu[(s-1)%vu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);const f=[];let y=0;for(let T=0;T<qi;++T){const R=T/_,x=Math.exp(-R*R/2);f.push(x),T===0?y+=x:T<p&&(y+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const w=this._sizeLods[s],S=3*w*(s>v-Ls?s-v+Ls:0),E=4*(this._cubeSize-w);go(t,S,E,3*w,2*w),c.setRenderTarget(t),c.render(h,ec)}}function I_(i){const e=[],t=[],n=[];let s=i;const r=i-Ls+1+gu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ls?c=gu[a-i+Ls-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,R=E>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(x,_*g*E),v.set(d,p*g*E);const b=[E,E,E,E,E,E];w.set(b,f*g*E)}const S=new Tn;S.setAttribute("position",new Nt(y,_)),S.setAttribute("uv",new Nt(v,p)),S.setAttribute("faceIndex",new Nt(w,f)),e.push(S),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yu(i,e,t){const n=new In(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function O_(i,e,t){const n=new Float32Array(qi),s=new F(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Su(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Mu(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fc||c===pc,u=c===Gs||c===Hs;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new xu(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function F_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k_(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,w=y.length;v<w;v+=3){const S=y[v+0],E=y[v+1],T=y[v+2];d.push(S,E,E,T,T,S)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){const S=v+0,E=v+1,T=v+2;d.push(S,E,E,T,T,S)}}else return;const p=new(Lh(d)?kh:Fh)(d,1);p.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function B_(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function V_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z_(i,e){return i[0]-e[0]}function G_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function H_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new kt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let O=function(){H.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),w===!0&&(x=2),S===!0&&(x=3);let b=u.attributes.position.count*x,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const N=new Float32Array(b*L*4*_),H=new Oh(N,b,L,_);H.type=bi,H.needsUpdate=!0;const D=x*4;for(let U=0;U<_;U++){const k=E[U],W=T[U],z=R[U],q=b*L*4*U;for(let $=0;$<k.count;$++){const J=$*D;v===!0&&(a.fromBufferAttribute(k,$),N[q+J+0]=a.x,N[q+J+1]=a.y,N[q+J+2]=a.z,N[q+J+3]=0),w===!0&&(a.fromBufferAttribute(W,$),N[q+J+4]=a.x,N[q+J+5]=a.y,N[q+J+6]=a.z,N[q+J+7]=0),S===!0&&(a.fromBufferAttribute(z,$),N[q+J+8]=a.x,N[q+J+9]=a.y,N[q+J+10]=a.z,N[q+J+11]=z.itemSize===4?a.w:1)}}p={count:_,texture:H,size:new Pe(b,L)},r.set(u,p),u.addEventListener("dispose",O)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[u.id]=_}for(let w=0;w<g;w++){const S=_[w];S[0]=w,S[1]=d[w]}_.sort(G_);for(let w=0;w<8;w++)w<g&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(z_);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const S=o[w],E=S[0],T=S[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+w)!==p[E]&&u.setAttribute("morphTarget"+w,p[E]),f&&u.getAttribute("morphNormal"+w)!==f[E]&&u.setAttribute("morphNormal"+w,f[E]),s[w]=T,y+=T):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function W_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class qh extends hn{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:$i,u!==$i&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$i&&(n=Ei),n===void 0&&u===Ws&&(n=Zi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xh=new hn,jh=new qh(1,1);jh.compareFunction=Dh;const Yh=new Oh,Zh=new Rp,$h=new zh,Tu=[],Eu=[],bu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Rt(t,n)}}function $_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Rt(t,n)}}function K_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Rt(t,n)}}function Q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function nv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?jh:Xh;t.setTexture2D(e||r,s)}function av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function cv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$h,s)}function lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function uv(i){switch(i){case 5126:return q_;case 35664:return X_;case 35665:return j_;case 35666:return Y_;case 35674:return Z_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return J_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(i,e){i.uniform1fv(this.addr,e)}function dv(i,e){const t=Js(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){const t=Js(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){const t=Js(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){const t=Js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){const t=Js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _v(i,e){const t=Js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vv(i,e){i.uniform1iv(this.addr,e)}function xv(i,e){i.uniform2iv(this.addr,e)}function yv(i,e){i.uniform3iv(this.addr,e)}function Sv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Tv(i,e){i.uniform2uiv(this.addr,e)}function Ev(i,e){i.uniform3uiv(this.addr,e)}function bv(i,e){i.uniform4uiv(this.addr,e)}function wv(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xh,r[a])}function Av(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function Cv(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$h,r[a])}function Rv(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function Pv(i){switch(i){case 5126:return hv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return Sv;case 5125:return Mv;case 36294:return Tv;case 36295:return Ev;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}class Dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function Cu(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){const n=i.name,s=n.length;for(sc.lastIndex=0;;){const r=sc.exec(n),a=sc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cu(t,l===void 0?new Dv(o,i,e):new Lv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Nv(o),Cu(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Iv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ru(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ov=37297;let Uv=0;function Fv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function kv(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===No&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case ca:return[n,"LinearTransferOETF"];case Ut:case Uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fv(i.getShaderSource(e),a)}else return s}function Bv(i,e){const t=kv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vv(i,e){let t;switch(e){case $f:t="Linear";break;case Kf:t="Reinhard";break;case Qf:t="OptimizedCineon";break;case Jf:t="ACESFilmic";break;case tp:t="AgX";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function Gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function Hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ns(i){return i!==""}function Du(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(qv,jv)}const Xv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jv(i,e){let t=He[e];if(t===void 0){const n=Xv.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(Yv,Zv)}function Zv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $v(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Kv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Hs:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Jv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yf:e="ENVMAP_BLENDING_MIX";break;case Zf:e="ENVMAP_BLENDING_ADD";break}return e}function e0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function t0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$v(t),l=Kv(t),u=Qv(t),h=Jv(t),d=e0(t),m=t.isWebGL2?"":zv(t),g=Gv(t),_=Hv(r),p=s.createProgram();let f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),y.length>0&&(y+=`
`)):(f=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),y=[m,Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?He.tonemapping_pars_fragment:"",t.toneMapping!==wi?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=yc(a),a=Du(a,t),a=Lu(a,t),o=yc(o),o=Du(o,t),o=Lu(o,t),a=Nu(a),o=Nu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=v+f+a,S=v+y+o,E=Ru(s,s.VERTEX_SHADER,w),T=Ru(s,s.FRAGMENT_SHADER,S);s.attachShader(p,E),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(N){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(T).trim();let U=!0,k=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,E,T);else{const W=Pu(s,E,"vertex"),z=Pu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+W+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||O==="")&&(k=!1);k&&(N.diagnostics={runnable:U,programLog:H,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:y}})}s.deleteShader(E),s.deleteShader(T),x=new Ao(s,p),b=Wv(s,p)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Ov)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}let n0=0;class i0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new s0(e),t.set(e,n)),n}}class s0{constructor(e){this.id=n0++,this.code=e,this.usedTimes=0}}function r0(i,e,t,n,s,r,a){const o=new Fc,c=new i0,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,b,L,N,H){const D=N.fog,O=H.geometry,U=x.isMeshStandardMaterial?N.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),W=k&&k.mapping===aa?k.image.height:null,z=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$=q!==void 0?q.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let j,Q,ee,he;if(z){const _t=Vn[z];j=_t.vertexShader,Q=_t.fragmentShader}else j=x.vertexShader,Q=x.fragmentShader,c.update(x),ee=c.getVertexShaderID(x),he=c.getFragmentShaderID(x);const me=i.getRenderTarget(),se=H.isInstancedMesh===!0,Ce=H.isBatchedMesh===!0,Me=!!x.map,ke=!!x.matcap,G=!!k,At=!!x.aoMap,be=!!x.lightMap,K=!!x.bumpMap,te=!!x.normalMap,Ie=!!x.displacementMap,ve=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,V=x.anisotropy>0,ne=x.clearcoat>0,ie=x.iridescence>0,re=x.sheen>0,Se=x.transmission>0,fe=V&&!!x.anisotropyMap,ye=ne&&!!x.clearcoatMap,Re=ne&&!!x.clearcoatNormalMap,ze=ne&&!!x.clearcoatRoughnessMap,oe=ie&&!!x.iridescenceMap,Qe=ie&&!!x.iridescenceThicknessMap,We=re&&!!x.sheenColorMap,Oe=re&&!!x.sheenRoughnessMap,we=!!x.specularMap,ge=!!x.specularColorMap,P=!!x.specularIntensityMap,ce=Se&&!!x.transmissionMap,Te=Se&&!!x.thicknessMap,xe=!!x.gradientMap,ae=!!x.alphaMap,I=x.alphaTest>0,le=!!x.alphaHash,pe=!!x.extensions,De=!!O.attributes.uv1,Ae=!!O.attributes.uv2,Ye=!!O.attributes.uv3;let Ze=wi;return x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:u,shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:Q,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ce,instancing:se,instancingColor:se&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ci,map:Me,matcap:ke,envMap:G,envMapMode:G&&k.mapping,envMapCubeUVHeight:W,aoMap:At,lightMap:be,bumpMap:K,normalMap:te,displacementMap:d&&Ie,emissiveMap:ve,normalMapObjectSpace:te&&x.normalMapType===pp,normalMapTangentSpace:te&&x.normalMapType===fp,metalnessMap:A,roughnessMap:M,anisotropy:V,anisotropyMap:fe,clearcoat:ne,clearcoatMap:ye,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,iridescence:ie,iridescenceMap:oe,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:We,sheenRoughnessMap:Oe,specularMap:we,specularColorMap:ge,specularIntensityMap:P,transmission:Se,transmissionMap:ce,thicknessMap:Te,gradientMap:xe,opaque:x.transparent===!1&&x.blending===ks,alphaMap:ae,alphaTest:I,alphaHash:le,combine:x.combine,mapUv:Me&&_(x.map.channel),aoMapUv:At&&_(x.aoMap.channel),lightMapUv:be&&_(x.lightMap.channel),bumpMapUv:K&&_(x.bumpMap.channel),normalMapUv:te&&_(x.normalMap.channel),displacementMapUv:Ie&&_(x.displacementMap.channel),emissiveMapUv:ve&&_(x.emissiveMap.channel),metalnessMapUv:A&&_(x.metalnessMap.channel),roughnessMapUv:M&&_(x.roughnessMap.channel),anisotropyMapUv:fe&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(x.sheenRoughnessMap.channel),specularMapUv:we&&_(x.specularMap.channel),specularColorMapUv:ge&&_(x.specularColorMap.channel),specularIntensityMapUv:P&&_(x.specularIntensityMap.channel),transmissionMapUv:ce&&_(x.transmissionMap.channel),thicknessMapUv:Te&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(te||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ae,vertexUv3s:Ye,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Me||ae),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pe&&x.extensions.derivatives===!0,extensionFragDepth:pe&&x.extensions.fragDepth===!0,extensionDrawBuffers:pe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function w(x){const b=g[x.type];let L;if(b){const N=Vn[b];L=Uo.clone(N.uniforms)}else L=x.uniforms;return L}function S(x,b){let L;for(let N=0,H=l.length;N<H;N++){const D=l[N];if(D.cacheKey===b){L=D,++L.usedTimes;break}}return L===void 0&&(L=new t0(i,b,x,r),l.push(L)),L}function E(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function T(x){c.remove(x)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:R}}function o0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function a0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||a0),n.length>1&&n.sort(d||Ou),s.length>1&&s.sort(d||Ou)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function c0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function l0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function u0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let h0=0;function d0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function f0(i,e){const t=new l0,n=u0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new F);const r=new F,a=new It,o=new It;function c(u,h){let d=0,m=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,w=0,S=0,E=0,T=0,R=0,x=0;u.sort(d0);const b=h===!0?Math.PI:1;for(let N=0,H=u.length;N<H;N++){const D=u[N],O=D.color,U=D.intensity,k=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*U*b,m+=O.g*U*b,g+=O.b*U*b;else if(D.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(D.sh.coefficients[z],U);x++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const q=D.shadow,$=n.get(D);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,s.directionalShadow[_]=$,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=D.shadow.matrix,w++}s.directional[_]=z,_++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(O).multiplyScalar(U*b),z.distance=k,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,s.spot[f]=z;const q=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&R++),s.spotLightMatrix[f]=q.matrix,D.castShadow){const $=n.get(D);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,s.spotShadow[f]=$,s.spotShadowMap[f]=W,E++}f++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(O).multiplyScalar(U),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=z,y++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*b),z.distance=D.distance,z.decay=D.decay,D.castShadow){const q=D.shadow,$=n.get(D);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,s.pointShadow[p]=$,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=D.shadow.matrix,S++}s.point[p]=z,p++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(U*b),z.groundColor.copy(D.groundColor).multiplyScalar(U*b),s.hemi[v]=z,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const L=s.hash;(L.directionalLength!==_||L.pointLength!==p||L.spotLength!==f||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==E||L.numSpotMaps!==T||L.numLightProbes!==x)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=y,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+T-R,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=x,L.directionalLength=_,L.pointLength=p,L.spotLength=f,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=E,L.numSpotMaps=T,L.numLightProbes=x,s.version=h0++)}function l(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const w=u[y];if(w.isDirectionalLight){const S=s.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(w.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),g++}else if(w.isRectAreaLight){const S=s.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const S=s.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function Fu(i,e){const t=new f0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function p0(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Fu(i,e),t.set(r,[c])):a>=o.length?(c=new Fu(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class m0 extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g0 extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x0(i,e,t){let n=new Gh;const s=new Pe,r=new Pe,a=new kt,o=new m0({depthPacking:dp}),c=new g0,l={},u=t.maxTextureSize,h={[Ri]:nn,[nn]:Ri,[zn]:zn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:_0,fragmentShader:v0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Tn;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ln(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let f=this.type;this.render=function(E,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const x=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ri),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=f!==ni&&this.type===ni,D=f===ni&&this.type!==ni;for(let O=0,U=E.length;O<U;O++){const k=E[O],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const z=W.getFrameExtents();if(s.multiply(z),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,W.mapSize.y=r.y)),W.map===null||H===!0||D===!0){const $=this.type!==ni?{minFilter:jt,magFilter:jt}:{};W.map!==null&&W.map.dispose(),W.map=new In(s.x,s.y,$),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const q=W.getViewportCount();for(let $=0;$<q;$++){const J=W.getViewport($);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(a),W.updateMatrices(k,$),n=W.getFrustum(),w(T,R,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&y(W,R),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(x,b,L)};function y(E,T){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,m,_,null)}function v(E,T,R,x){let b=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=b.uuid,H=T.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let O=D[H];O===void 0&&(O=b.clone(),D[H]=O,T.addEventListener("dispose",S)),b=O}if(b.visible=T.visible,b.wireframe=T.wireframe,x===ni?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=R}return b}function w(E,T,R,x,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const H=e.update(E),D=E.material;if(Array.isArray(D)){const O=H.groups;for(let U=0,k=O.length;U<k;U++){const W=O[U],z=D[W.materialIndex];if(z&&z.visible){const q=v(E,z,x,b);E.onBeforeShadow(i,E,T,R,H,q,W),i.renderBufferDirect(R,null,H,q,E,W),E.onAfterShadow(i,E,T,R,H,q,W)}}}else if(D.visible){const O=v(E,D,x,b);E.onBeforeShadow(i,E,T,R,H,O,null),i.renderBufferDirect(R,null,H,O,E,null),E.onAfterShadow(i,E,T,R,H,O,null)}}const N=E.children;for(let H=0,D=N.length;H<D;H++)w(N[H],T,R,x,b)}function S(E){E.target.removeEventListener("dispose",S);for(const R in l){const x=l[R],b=E.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function y0(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const le=new kt;let pe=null;const De=new kt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!I&&(i.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,Ye,Ze,pt,_t){_t===!0&&(Ae*=pt,Ye*=pt,Ze*=pt),le.set(Ae,Ye,Ze,pt),De.equals(le)===!1&&(i.clearColor(Ae,Ye,Ze,pt),De.copy(le))},reset:function(){I=!1,pe=null,De.set(-1,0,0,0)}}}function r(){let I=!1,le=null,pe=null,De=null;return{setTest:function(Ae){Ae?Ce(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ae){le!==Ae&&!I&&(i.depthMask(Ae),le=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case zf:i.depthFunc(i.NEVER);break;case Gf:i.depthFunc(i.ALWAYS);break;case Hf:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Wf:i.depthFunc(i.EQUAL);break;case qf:i.depthFunc(i.GEQUAL);break;case Xf:i.depthFunc(i.GREATER);break;case jf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){De!==Ae&&(i.clearDepth(Ae),De=Ae)},reset:function(){I=!1,le=null,pe=null,De=null}}}function a(){let I=!1,le=null,pe=null,De=null,Ae=null,Ye=null,Ze=null,pt=null,_t=null;return{setTest:function(Ke){I||(Ke?Ce(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!I&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,Et,Bn){(pe!==Ke||De!==Et||Ae!==Bn)&&(i.stencilFunc(Ke,Et,Bn),pe=Ke,De=Et,Ae=Bn)},setOp:function(Ke,Et,Bn){(Ye!==Ke||Ze!==Et||pt!==Bn)&&(i.stencilOp(Ke,Et,Bn),Ye=Ke,Ze=Et,pt=Bn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){_t!==Ke&&(i.clearStencil(Ke),_t=Ke)},reset:function(){I=!1,le=null,pe=null,De=null,Ae=null,Ye=null,Ze=null,pt=null,_t=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,w=null,S=null,E=null,T=null,R=null,x=new Fe(0,0,0),b=0,L=!1,N=null,H=null,D=null,O=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=z>=2);let $=null,J={};const j=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ee=new kt().fromArray(j),he=new kt().fromArray(Q);function me(I,le,pe,De){const Ae=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(I,Ye),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<pe;Ze++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(le+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Ye}const se={};se[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(se[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ce(i.DEPTH_TEST),c.setFunc(Po),ve(!1),A(xl),Ce(i.CULL_FACE),te(ri);function Ce(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Me(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function ke(I,le){return m[I]!==le?(i.bindFramebuffer(I,le),m[I]=le,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function G(I,le){let pe=_,De=!1;if(I)if(pe=g.get(le),pe===void 0&&(pe=[],g.set(le,pe)),I.isWebGLMultipleRenderTargets){const Ae=I.texture;if(pe.length!==Ae.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,Ze=Ae.length;Ye<Ze;Ye++)pe[Ye]=i.COLOR_ATTACHMENT0+Ye;pe.length=Ae.length,De=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,De=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function At(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const be={[Wi]:i.FUNC_ADD,[wf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};if(n)be[Ml]=i.MIN,be[Tl]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(be[Ml]=I.MIN_EXT,be[Tl]=I.MAX_EXT)}const K={[Cf]:i.ZERO,[Rf]:i.ONE,[Pf]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Df]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Of]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[Vf]:i.ONE_MINUS_CONSTANT_ALPHA};function te(I,le,pe,De,Ae,Ye,Ze,pt,_t,Ke){if(I===ri){f===!0&&(Me(i.BLEND),f=!1);return}if(f===!1&&(Ce(i.BLEND),f=!0),I!==bf){if(I!==y||Ke!==L){if((v!==Wi||E!==Wi)&&(i.blendEquation(i.FUNC_ADD),v=Wi,E=Wi),Ke)switch(I){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,S=null,T=null,R=null,x.set(0,0,0),b=0,y=I,L=Ke}return}Ae=Ae||le,Ye=Ye||pe,Ze=Ze||De,(le!==v||Ae!==E)&&(i.blendEquationSeparate(be[le],be[Ae]),v=le,E=Ae),(pe!==w||De!==S||Ye!==T||Ze!==R)&&(i.blendFuncSeparate(K[pe],K[De],K[Ye],K[Ze]),w=pe,S=De,T=Ye,R=Ze),(pt.equals(x)===!1||_t!==b)&&(i.blendColor(pt.r,pt.g,pt.b,_t),x.copy(pt),b=_t),y=I,L=!1}function Ie(I,le){I.side===zn?Me(i.CULL_FACE):Ce(i.CULL_FACE);let pe=I.side===nn;le&&(pe=!pe),ve(pe),I.blending===ks&&I.transparent===!1?te(ri):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const De=I.stencilWrite;l.setTest(De),De&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function A(I){I!==Mf?(Ce(i.CULL_FACE),I!==H&&(I===xl?i.cullFace(i.BACK):I===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),H=I}function M(I){I!==D&&(W&&i.lineWidth(I),D=I)}function V(I,le,pe){I?(Ce(i.POLYGON_OFFSET_FILL),(O!==le||U!==pe)&&(i.polygonOffset(le,pe),O=le,U=pe)):Me(i.POLYGON_OFFSET_FILL)}function ne(I){I?Ce(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ie(I){I===void 0&&(I=i.TEXTURE0+k-1),$!==I&&(i.activeTexture(I),$=I)}function re(I,le,pe){pe===void 0&&($===null?pe=i.TEXTURE0+k-1:pe=$);let De=J[pe];De===void 0&&(De={type:void 0,texture:void 0},J[pe]=De),(De.type!==I||De.texture!==le)&&($!==pe&&(i.activeTexture(pe),$=pe),i.bindTexture(I,le||se[I]),De.type=I,De.texture=le)}function Se(){const I=J[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function ce(I){he.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function Te(I,le){let pe=h.get(le);pe===void 0&&(pe=new WeakMap,h.set(le,pe));let De=pe.get(I);De===void 0&&(De=i.getUniformBlockIndex(le,I.name),pe.set(I,De))}function xe(I,le){const De=h.get(le).get(I);u.get(le)!==De&&(i.uniformBlockBinding(le,De,I.__bindingPointIndex),u.set(le,De))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,J={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,w=null,S=null,E=null,T=null,R=null,x=new Fe(0,0,0),b=0,L=!1,N=null,H=null,D=null,O=null,U=null,ee.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ce,disable:Me,bindFramebuffer:ke,drawBuffers:G,useProgram:At,setBlending:te,setMaterial:Ie,setFlipSided:ve,setCullFace:A,setLineWidth:M,setPolygonOffset:V,setScissorTest:ne,activeTexture:ie,bindTexture:re,unbindTexture:Se,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:we,texImage3D:ge,updateUBOMapping:Te,uniformBlockBinding:xe,texStorage2D:We,texStorage3D:Oe,texSubImage2D:Re,texSubImage3D:ze,compressedTexSubImage2D:oe,compressedTexSubImage3D:Qe,scissor:P,viewport:ce,reset:ae}}function S0(i,e,t,n,s,r,a){const o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):Oo("canvas")}function _(A,M,V,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=M?xc:Math.floor,Se=re(ie*A.width),fe=re(ie*A.height);h===void 0&&(h=g(Se,fe));const ye=V?g(Se,fe):h;return ye.width=Se,ye.height=fe,ye.getContext("2d").drawImage(A,0,0,Se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+fe+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Jl(A.width)&&Jl(A.height)}function f(A){return o?!1:A.wrapS!==Pn||A.wrapT!==Pn||A.minFilter!==jt&&A.minFilter!==mn}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==jt&&A.minFilter!==mn}function v(A){i.generateMipmap(A)}function w(A,M,V,ne,ie=!1){if(o===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=M;if(M===i.RED&&(V===i.FLOAT&&(re=i.R32F),V===i.HALF_FLOAT&&(re=i.R16F),V===i.UNSIGNED_BYTE&&(re=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.R8UI),V===i.UNSIGNED_SHORT&&(re=i.R16UI),V===i.UNSIGNED_INT&&(re=i.R32UI),V===i.BYTE&&(re=i.R8I),V===i.SHORT&&(re=i.R16I),V===i.INT&&(re=i.R32I)),M===i.RG&&(V===i.FLOAT&&(re=i.RG32F),V===i.HALF_FLOAT&&(re=i.RG16F),V===i.UNSIGNED_BYTE&&(re=i.RG8)),M===i.RGBA){const Se=ie?Do:nt.getTransfer(ne);V===i.FLOAT&&(re=i.RGBA32F),V===i.HALF_FLOAT&&(re=i.RGBA16F),V===i.UNSIGNED_BYTE&&(re=Se===rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(A,M,V){return y(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){return A===jt||A===El||A===Pa?i.NEAREST:i.LINEAR}function T(A){const M=A.target;M.removeEventListener("dispose",T),x(M),M.isVideoTexture&&u.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),L(M)}function x(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,ne=d.get(V);if(ne){const ie=ne[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(A),Object.keys(ne).length===0&&d.delete(V)}n.remove(A)}function b(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const V=A.source,ne=d.get(V);delete ne[M.__cacheKey],a.memory.textures--}function L(A){const M=A.texture,V=n.get(A),ne=n.get(M);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(V.__webglFramebuffer[ie]))for(let re=0;re<V.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(V.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(V.__webglFramebuffer[ie]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[ie])}else{if(Array.isArray(V.__webglFramebuffer))for(let ie=0;ie<V.__webglFramebuffer.length;ie++)i.deleteFramebuffer(V.__webglFramebuffer[ie]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,re=M.length;ie<re;ie++){const Se=n.get(M[ie]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(M[ie])}n.remove(M),n.remove(A)}let N=0;function H(){N=0}function D(){const A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function U(A,M){const V=n.get(A);if(A.isVideoTexture&&Ie(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,A,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function k(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ee(V,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function W(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ee(V,A,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function z(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){he(V,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const q={[mc]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},$={[jt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[np]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},J={[mp]:i.NEVER,[Sp]:i.ALWAYS,[gp]:i.LESS,[Dh]:i.LEQUAL,[_p]:i.EQUAL,[yp]:i.GEQUAL,[vp]:i.GREATER,[xp]:i.NOTEQUAL};function j(A,M,V){if(V?(i.texParameteri(A,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,$[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,$[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Pn||M.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==jt&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===jt||M.minFilter!==Pa&&M.minFilter!==pr||M.type===bi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===oi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Q(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const ne=M.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const re=O(M);if(re!==A.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[re].usedTimes++;const Se=ie[A.__cacheKey];Se!==void 0&&(ie[A.__cacheKey].usedTimes--,Se.usedTimes===0&&b(M)),A.__cacheKey=re,A.__webglTexture=ie[re].texture}return V}function ee(A,M,V){let ne=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=Q(A,M),re=M.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+V);const Se=n.get(re);if(re.version!==Se.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);const fe=nt.getPrimaries(nt.workingColorSpace),ye=M.colorSpace===_n?null:nt.getPrimaries(M.colorSpace),Re=M.colorSpace===_n||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ze=f(M)&&p(M.image)===!1;let oe=_(M.image,ze,!1,s.maxTextureSize);oe=ve(M,oe);const Qe=p(oe)||o,We=r.convert(M.format,M.colorSpace);let Oe=r.convert(M.type),we=w(M.internalFormat,We,Oe,M.colorSpace,M.isVideoTexture);j(ne,M,Qe);let ge;const P=M.mipmaps,ce=o&&M.isVideoTexture!==!0&&we!==Rh,Te=Se.__version===void 0||ie===!0,xe=S(M,oe,Qe);if(M.isDepthTexture)we=i.DEPTH_COMPONENT,o?M.type===bi?we=i.DEPTH_COMPONENT32F:M.type===Ei?we=i.DEPTH_COMPONENT24:M.type===Zi?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:M.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$i&&we===i.DEPTH_COMPONENT&&M.type!==Oc&&M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ei,Oe=r.convert(M.type)),M.format===Ws&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,M.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zi,Oe=r.convert(M.type))),Te&&(ce?t.texStorage2D(i.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,We,Oe,null));else if(M.isDataTexture)if(P.length>0&&Qe){ce&&Te&&t.texStorage2D(i.TEXTURE_2D,xe,we,P[0].width,P[0].height);for(let ae=0,I=P.length;ae<I;ae++)ge=P[ae],ce?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,We,Oe,ge.data):t.texImage2D(i.TEXTURE_2D,ae,we,ge.width,ge.height,0,We,Oe,ge.data);M.generateMipmaps=!1}else ce?(Te&&t.texStorage2D(i.TEXTURE_2D,xe,we,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,We,Oe,oe.data)):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,We,Oe,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ce&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,we,P[0].width,P[0].height,oe.depth);for(let ae=0,I=P.length;ae<I;ae++)ge=P[ae],M.format!==Dn?We!==null?ce?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,oe.depth,We,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,we,ge.width,ge.height,oe.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,oe.depth,We,Oe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,we,ge.width,ge.height,oe.depth,0,We,Oe,ge.data)}else{ce&&Te&&t.texStorage2D(i.TEXTURE_2D,xe,we,P[0].width,P[0].height);for(let ae=0,I=P.length;ae<I;ae++)ge=P[ae],M.format!==Dn?We!==null?ce?t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,We,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,We,Oe,ge.data):t.texImage2D(i.TEXTURE_2D,ae,we,ge.width,ge.height,0,We,Oe,ge.data)}else if(M.isDataArrayTexture)ce?(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,we,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,We,Oe,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,We,Oe,oe.data);else if(M.isData3DTexture)ce?(Te&&t.texStorage3D(i.TEXTURE_3D,xe,we,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,We,Oe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,We,Oe,oe.data);else if(M.isFramebufferTexture){if(Te)if(ce)t.texStorage2D(i.TEXTURE_2D,xe,we,oe.width,oe.height);else{let ae=oe.width,I=oe.height;for(let le=0;le<xe;le++)t.texImage2D(i.TEXTURE_2D,le,we,ae,I,0,We,Oe,null),ae>>=1,I>>=1}}else if(P.length>0&&Qe){ce&&Te&&t.texStorage2D(i.TEXTURE_2D,xe,we,P[0].width,P[0].height);for(let ae=0,I=P.length;ae<I;ae++)ge=P[ae],ce?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We,Oe,ge):t.texImage2D(i.TEXTURE_2D,ae,we,We,Oe,ge);M.generateMipmaps=!1}else ce?(Te&&t.texStorage2D(i.TEXTURE_2D,xe,we,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,Oe,oe)):t.texImage2D(i.TEXTURE_2D,0,we,We,Oe,oe);y(M,Qe)&&v(ne),Se.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,V){if(M.image.length!==6)return;const ne=Q(A,M),ie=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const re=n.get(ie);if(ie.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+V);const Se=nt.getPrimaries(nt.workingColorSpace),fe=M.colorSpace===_n?null:nt.getPrimaries(M.colorSpace),ye=M.colorSpace===_n||Se===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ae=0;ae<6;ae++)!Re&&!ze?oe[ae]=_(M.image[ae],!1,!0,s.maxCubemapSize):oe[ae]=ze?M.image[ae].image:M.image[ae],oe[ae]=ve(M,oe[ae]);const Qe=oe[0],We=p(Qe)||o,Oe=r.convert(M.format,M.colorSpace),we=r.convert(M.type),ge=w(M.internalFormat,Oe,we,M.colorSpace),P=o&&M.isVideoTexture!==!0,ce=re.__version===void 0||ne===!0;let Te=S(M,Qe,We);j(i.TEXTURE_CUBE_MAP,M,We);let xe;if(Re){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ge,Qe.width,Qe.height);for(let ae=0;ae<6;ae++){xe=oe[ae].mipmaps;for(let I=0;I<xe.length;I++){const le=xe[I];M.format!==Dn?Oe!==null?P?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,0,0,le.width,le.height,Oe,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,0,0,le.width,le.height,Oe,we,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,ge,le.width,le.height,0,Oe,we,le.data)}}}else{xe=M.mipmaps,P&&ce&&(xe.length>0&&Te++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ge,oe[0].width,oe[0].height));for(let ae=0;ae<6;ae++)if(ze){P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,oe[ae].width,oe[ae].height,Oe,we,oe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ge,oe[ae].width,oe[ae].height,0,Oe,we,oe[ae].data);for(let I=0;I<xe.length;I++){const pe=xe[I].image[ae].image;P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,0,0,pe.width,pe.height,Oe,we,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,ge,pe.width,pe.height,0,Oe,we,pe.data)}}else{P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,we,oe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ge,Oe,we,oe[ae]);for(let I=0;I<xe.length;I++){const le=xe[I];P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,0,0,Oe,we,le.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,ge,Oe,we,le.image[ae])}}}y(M,We)&&v(i.TEXTURE_CUBE_MAP),re.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,V,ne,ie,re){const Se=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),ye=w(V.internalFormat,Se,fe,V.colorSpace);if(!n.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>re),oe=Math.max(1,M.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,ye,ze,oe,M.depth,0,Se,fe,null):t.texImage2D(ie,re,ye,ze,oe,0,Se,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),te(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,0,K(M)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||te(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===bi?ne=i.DEPTH_COMPONENT32F:ie.type===Ei&&(ne=i.DEPTH_COMPONENT24));const re=K(M);te(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ne,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ne,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ne=K(M);V&&te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,M.width,M.height):te(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<ne.length;ie++){const re=ne[ie],Se=r.convert(re.format,re.colorSpace),fe=r.convert(re.type),ye=w(re.internalFormat,Se,fe,re.colorSpace),Re=K(M);V&&te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ye,M.width,M.height):te(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ye,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ye,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const ne=n.get(M.depthTexture).__webglTexture,ie=K(M);if(M.depthTexture.format===$i)te(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Ws)te(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Me(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=i.createRenderbuffer(),se(M.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(A,M,V){const ne=n.get(A);M!==void 0&&me(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Me(A)}function G(A){const M=A.texture,V=n.get(A),ne=n.get(M);A.addEventListener("dispose",R),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=M.version,a.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Se=p(A)||o;if(ie){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ye=0;ye<M.mipmaps.length;ye++)V.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else V.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)V.__webglFramebuffer[fe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){const fe=A.texture;for(let ye=0,Re=fe.length;ye<Re;ye++){const ze=n.get(fe[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&te(A)===!1){const fe=re?M:[M];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const Re=fe[ye];V.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ye]);const ze=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),Qe=w(Re.internalFormat,ze,oe,Re.colorSpace,A.isXRRenderTarget===!0),We=K(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Qe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,V.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),se(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),j(i.TEXTURE_CUBE_MAP,M,Se);for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)me(V.__webglFramebuffer[fe][ye],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else me(V.__webglFramebuffer[fe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(M,Se)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const fe=A.texture;for(let ye=0,Re=fe.length;ye<Re;ye++){const ze=fe[ye],oe=n.get(ze);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),j(i.TEXTURE_2D,ze,Se),me(V.__webglFramebuffer,A,ze,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),y(ze,Se)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),j(fe,M,Se),o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)me(V.__webglFramebuffer[ye],A,M,i.COLOR_ATTACHMENT0,fe,ye);else me(V.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,fe,0);y(M,Se)&&v(fe),t.unbindTexture()}A.depthBuffer&&Me(A)}function At(A){const M=p(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=V.length;ne<ie;ne++){const re=V[ne];if(y(re,M)){const Se=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(re).__webglTexture;t.bindTexture(Se,fe),v(Se),t.unbindTexture()}}}function be(A){if(o&&A.samples>0&&te(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ne=A.height;let ie=i.COLOR_BUFFER_BIT;const re=[],Se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){re.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&re.push(Se);const ze=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ze===!1&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),ye){const oe=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,V,ne,0,0,V,ne,ie,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const ze=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function K(A){return Math.min(s.maxSamples,A.samples)}function te(A){const M=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ve(A,M){const V=A.colorSpace,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===_c||V!==ci&&V!==_n&&(nt.getTransfer(V)===rt?o===!1?e.has("EXT_sRGB")===!0&&ne===Dn?(A.format=_c,A.minFilter=mn,A.generateMipmaps=!1):M=Nh.sRGBToLinear(M):(ne!==Dn||ie!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=G,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=me,this.useMultisampledRTT=te}function M0(i,e,t){const n=t.isWebGL2;function s(r,a=_n){let o;const c=nt.getTransfer(a);if(r===Ai)return i.UNSIGNED_BYTE;if(r===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ip)return i.BYTE;if(r===sp)return i.SHORT;if(r===Oc)return i.UNSIGNED_SHORT;if(r===Th)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===bi)return i.FLOAT;if(r===oi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rp)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===op)return i.LUMINANCE;if(r===ap)return i.LUMINANCE_ALPHA;if(r===$i)return i.DEPTH_COMPONENT;if(r===Ws)return i.DEPTH_STENCIL;if(r===_c)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===cp)return i.RED;if(r===wh)return i.RED_INTEGER;if(r===lp)return i.RG;if(r===Ah)return i.RG_INTEGER;if(r===Ch)return i.RGBA_INTEGER;if(r===Da||r===La||r===Na||r===Ia)if(c===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Da)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bl||r===wl||r===Al||r===Cl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rl||r===Pl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rl)return c===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dl||r===Ll||r===Nl||r===Il||r===Ol||r===Ul||r===Fl||r===kl||r===Bl||r===Vl||r===zl||r===Gl||r===Hl||r===Wl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Il)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ol)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ul)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wl)return c===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oa||r===ql||r===Xl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Oa)return c===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===up||r===jl||r===Yl||r===Zl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Oa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class T0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E0={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class b0 extends cs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const y=[],v=[],w=new Pe;let S=null;const E=new gn;E.layers.enable(1),E.viewport=new kt;const T=new gn;T.layers.enable(2),T.viewport=new kt;const R=[E,T],x=new T0;x.layers.enable(1),x.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=y[j];return Q===void 0&&(Q=new rc,y[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=y[j];return Q===void 0&&(Q=new rc,y[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=y[j];return Q===void 0&&(Q=new rc,y[j]=Q),Q.getHandSpace()};function N(j){const Q=v.indexOf(j.inputSource);if(Q===-1)return;const ee=y[Q];ee!==void 0&&(ee.update(j.inputSource,j.frame,l||a),ee.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",D);for(let j=0;j<y.length;j++){const Q=v[j];Q!==null&&(v[j]=null,y[j].disconnect(Q))}b=null,L=null,e.setRenderTarget(p),m=null,d=null,h=null,s=null,f=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new In(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ee=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?Ws:$i,ee=_.stencil?Zi:Ei);const me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new In(d.textureWidth,d.textureHeight,{format:Dn,type:Ai,depthTexture:new qh(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const se=e.properties.get(f);se.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(j){for(let Q=0;Q<j.removed.length;Q++){const ee=j.removed[Q],he=v.indexOf(ee);he>=0&&(v[he]=null,y[he].disconnect(ee))}for(let Q=0;Q<j.added.length;Q++){const ee=j.added[Q];let he=v.indexOf(ee);if(he===-1){for(let se=0;se<y.length;se++)if(se>=v.length){v.push(ee),he=se;break}else if(v[se]===null){v[se]=ee,he=se;break}if(he===-1)break}const me=y[he];me&&me.connect(ee)}}const O=new F,U=new F;function k(j,Q,ee){O.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(ee.matrixWorld);const he=O.distanceTo(U),me=Q.projectionMatrix.elements,se=ee.projectionMatrix.elements,Ce=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],G=(me[9]-1)/me[5],At=(me[8]-1)/me[0],be=(se[8]+1)/se[0],K=Ce*At,te=Ce*be,Ie=he/(-At+be),ve=Ie*-At;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=Ce+Ie,M=Me+Ie,V=K-ve,ne=te+(he-ve),ie=ke*Me/M*A,re=G*Me/M*A;j.projectionMatrix.makePerspective(V,ne,ie,re,A,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function W(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;x.near=T.near=E.near=j.near,x.far=T.far=E.far=j.far,(b!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,L=x.far);const Q=j.parent,ee=x.cameras;W(x,Q);for(let he=0;he<ee.length;he++)W(ee[he],Q);ee.length===2?k(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),z(j,x,Q)};function z(j,Q,ee){ee===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)};let q=null;function $(j,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){const ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let he=!1;ee.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let me=0;me<ee.length;me++){const se=ee[me];let Ce=null;if(m!==null)Ce=m.getViewport(se);else{const ke=h.getViewSubImage(d,se);Ce=ke.viewport,me===0&&(e.setRenderTargetTextures(f,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let Me=R[me];Me===void 0&&(Me=new gn,Me.layers.enable(me),Me.viewport=new kt,R[me]=Me),Me.matrix.fromArray(se.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(se.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(x.matrix.copy(Me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(Me)}}for(let ee=0;ee<y.length;ee++){const he=v[ee],me=y[ee];he!==null&&me!==void 0&&me.update(he,Q,l||a)}q&&q(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const J=new Hh;J.setAnimationLoop($),this.setAnimationLoop=function(j){q=j},this.dispose=function(){}}}function w0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Bh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,v,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A0(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const w=v.program;n.uniformBlockBinding(y,w)}function l(y,v){let w=s[y.id];w===void 0&&(g(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",p));const S=v.program;n.updateUBOMapping(y,S);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const w=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],w=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=w.length;E<T;E++){const R=Array.isArray(w[E])?w[E]:[w[E]];for(let x=0,b=R.length;x<b;x++){const L=R[x];if(m(L,E,x,S)===!0){const N=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let O=0;O<H.length;O++){const U=H[O],k=_(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+D,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,D),D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,w,S){const E=y.value,T=v+"_"+w;if(S[T]===void 0)return typeof E=="number"||typeof E=="boolean"?S[T]=E:S[T]=E.clone(),!0;{const R=S[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return S[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){const v=y.uniforms;let w=0;const S=16;for(let T=0,R=v.length;T<R;T++){const x=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,L=x.length;b<L;b++){const N=x[b],H=Array.isArray(N.value)?N.value:[N.value];for(let D=0,O=H.length;D<O;D++){const U=H[D],k=_(U),W=w%S;W!==0&&S-W<k.boundary&&(w+=S-W),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=k.storage}}}const E=w%S;return E>0&&(w+=S-E),y.__size=w,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Kh{constructor(e={}){const{canvas:t=Ep(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const v=this;let w=!1,S=0,E=0,T=null,R=-1,x=null;const b=new kt,L=new kt;let N=null;const H=new Fe(0);let D=0,O=t.width,U=t.height,k=1,W=null,z=null;const q=new kt(0,0,O,U),$=new kt(0,0,O,U);let J=!1;const j=new Gh;let Q=!1,ee=!1,he=null;const me=new It,se=new Pe,Ce=new F,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return T===null?k:1}let G=n;function At(C,B){for(let Y=0;Y<C.length;Y++){const Z=C[Y],X=t.getContext(Z,B);if(X!==null)return X}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),G=At(B,C),G===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,K,te,Ie,ve,A,M,V,ne,ie,re,Se,fe,ye,Re,ze,oe,Qe,We,Oe,we,ge,P,ce;function Te(){be=new F_(G),K=new D_(G,be,e),be.init(K),ge=new M0(G,be,K),te=new y0(G,be,K),Ie=new V_(G),ve=new o0,A=new S0(G,be,te,ve,K,ge,Ie),M=new N_(v),V=new U_(v),ne=new Yp(G,K),P=new R_(G,be,ne,K),ie=new k_(G,ne,Ie,P),re=new W_(G,ie,ne,Ie),We=new H_(G,K,A),ze=new L_(ve),Se=new r0(v,M,V,be,K,P,ze),fe=new w0(v,ve),ye=new c0,Re=new p0(be,K),Qe=new C_(v,M,V,te,re,d,c),oe=new x0(v,re,K),ce=new A0(G,Ie,K,te),Oe=new P_(G,be,Ie,K),we=new B_(G,be,Ie,K),Ie.programs=Se.programs,v.capabilities=K,v.extensions=be,v.properties=ve,v.renderLists=ye,v.shadowMap=oe,v.state=te,v.info=Ie}Te();const xe=new b0(v,G);this.xr=xe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(O,U,!1))},this.getSize=function(C){return C.set(O,U)},this.setSize=function(C,B,Y=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,U=B,t.width=Math.floor(C*k),t.height=Math.floor(B*k),Y===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(O*k,U*k).floor()},this.setDrawingBufferSize=function(C,B,Y){O=C,U=B,k=Y,t.width=Math.floor(C*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,B,Y,Z){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,B,Y,Z),te.viewport(b.copy(q).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,B,Y,Z){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,B,Y,Z),te.scissor(L.copy($).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){te.setScissorTest(J=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(C=!0,B=!0,Y=!0){let Z=0;if(C){let X=!1;if(T!==null){const _e=T.texture.format;X=_e===Ch||_e===Ah||_e===wh}if(X){const _e=T.texture.type,Ee=_e===Ai||_e===Ei||_e===Oc||_e===Zi||_e===Eh||_e===bh,Le=Qe.getClearColor(),Ue=Qe.getClearAlpha(),qe=Le.r,Ve=Le.g,Ge=Le.b;Ee?(m[0]=qe,m[1]=Ve,m[2]=Ge,m[3]=Ue,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=qe,g[1]=Ve,g[2]=Ge,g[3]=Ue,G.clearBufferiv(G.COLOR,0,g))}else Z|=G.COLOR_BUFFER_BIT}B&&(Z|=G.DEPTH_BUFFER_BIT),Y&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ye.dispose(),Re.dispose(),ve.dispose(),M.dispose(),V.dispose(),re.dispose(),P.dispose(),ce.dispose(),Se.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",_t),xe.removeEventListener("sessionend",Ke),he&&(he.dispose(),he=null),Et.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Ie.autoReset,B=oe.enabled,Y=oe.autoUpdate,Z=oe.needsUpdate,X=oe.type;Te(),Ie.autoReset=C,oe.enabled=B,oe.autoUpdate=Y,oe.needsUpdate=Z,oe.type=X}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pe(C){const B=C.target;B.removeEventListener("dispose",pe),De(B)}function De(C){Ae(C),ve.remove(C)}function Ae(C){const B=ve.get(C).programs;B!==void 0&&(B.forEach(function(Y){Se.releaseProgram(Y)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Y,Z,X,_e){B===null&&(B=Me);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,Le=vf(C,B,Y,Z,X);te.setMaterial(Z,Ee);let Ue=Y.index,qe=1;if(Z.wireframe===!0){if(Ue=ie.getWireframeAttribute(Y),Ue===void 0)return;qe=2}const Ve=Y.drawRange,Ge=Y.attributes.position;let vt=Ve.start*qe,an=(Ve.start+Ve.count)*qe;_e!==null&&(vt=Math.max(vt,_e.start*qe),an=Math.min(an,(_e.start+_e.count)*qe)),Ue!==null?(vt=Math.max(vt,0),an=Math.min(an,Ue.count)):Ge!=null&&(vt=Math.max(vt,0),an=Math.min(an,Ge.count));const Dt=an-vt;if(Dt<0||Dt===1/0)return;P.setup(X,Z,Le,Y,Ue);let Yn,ft=Oe;if(Ue!==null&&(Yn=ne.get(Ue),ft=we,ft.setIndex(Yn)),X.isMesh)Z.wireframe===!0?(te.setLineWidth(Z.wireframeLinewidth*ke()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(X.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),te.setLineWidth(Xe*ke()),X.isLineSegments?ft.setMode(G.LINES):X.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else X.isPoints?ft.setMode(G.POINTS):X.isSprite&&ft.setMode(G.TRIANGLES);if(X.isBatchedMesh)ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ft.renderInstances(vt,Dt,X.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wa=Math.min(Y.instanceCount,Xe);ft.renderInstances(vt,Dt,wa)}else ft.render(vt,Dt)};function Ye(C,B,Y){C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,jr(C,B,Y),C.side=Ri,C.needsUpdate=!0,jr(C,B,Y),C.side=zn):jr(C,B,Y)}this.compile=function(C,B,Y=null){Y===null&&(Y=C),p=Re.get(Y),p.init(),y.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==Y&&C.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const Z=new Set;return C.traverse(function(X){const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Le=_e[Ee];Ye(Le,Y,X),Z.add(Le)}else Ye(_e,Y,X),Z.add(_e)}),y.pop(),p=null,Z},this.compileAsync=function(C,B,Y=null){const Z=this.compile(C,B,Y);return new Promise(X=>{function _e(){if(Z.forEach(function(Ee){ve.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){X(C);return}setTimeout(_e,10)}be.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ze=null;function pt(C){Ze&&Ze(C)}function _t(){Et.stop()}function Ke(){Et.start()}const Et=new Hh;Et.setAnimationLoop(pt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(C){Ze=C,xe.setAnimationLoop(C),C===null?Et.stop():Et.start()},xe.addEventListener("sessionstart",_t),xe.addEventListener("sessionend",Ke),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(B),B=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,T),p=Re.get(C,y.length),p.init(),y.push(p),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(me),ee=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,ee),_=ye.get(C,f.length),_.init(),f.push(_),Bn(C,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,z),this.info.render.frame++,Q===!0&&ze.beginShadows();const Y=p.state.shadowsArray;if(oe.render(Y,C,B),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,C),p.setupLights(v._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let X=0,_e=Z.length;X<_e;X++){const Ee=Z[X];fl(_,C,Ee,Ee.viewport)}}else fl(_,C,B);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,B),P.resetDefaultState(),R=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Bn(C,B,Y,Z){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Z&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ee=re.update(C),Le=C.material;Le.visible&&_.push(C,Ee,Le,Y,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Ee=re.update(C),Le=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ce.copy(Ee.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Le)){const Ue=Ee.groups;for(let qe=0,Ve=Ue.length;qe<Ve;qe++){const Ge=Ue[qe],vt=Le[Ge.materialIndex];vt&&vt.visible&&_.push(C,Ee,vt,Y,Ce.z,Ge)}}else Le.visible&&_.push(C,Ee,Le,Y,Ce.z,null)}}const _e=C.children;for(let Ee=0,Le=_e.length;Ee<Le;Ee++)Bn(_e[Ee],B,Y,Z)}function fl(C,B,Y,Z){const X=C.opaque,_e=C.transmissive,Ee=C.transparent;p.setupLightsView(Y),Q===!0&&ze.setGlobalState(v.clippingPlanes,Y),_e.length>0&&_f(X,_e,B,Y),Z&&te.viewport(b.copy(Z)),X.length>0&&Xr(X,B,Y),_e.length>0&&Xr(_e,B,Y),Ee.length>0&&Xr(Ee,B,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function _f(C,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const _e=K.isWebGL2;he===null&&(he=new In(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?oi:Ai,minFilter:pr,samples:_e?4:0})),v.getDrawingBufferSize(se),_e?he.setSize(se.x,se.y):he.setSize(xc(se.x),xc(se.y));const Ee=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(H),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=wi,Xr(C,Y,Z),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he);let Ue=!1;for(let qe=0,Ve=B.length;qe<Ve;qe++){const Ge=B[qe],vt=Ge.object,an=Ge.geometry,Dt=Ge.material,Yn=Ge.group;if(Dt.side===zn&&vt.layers.test(Z.layers)){const ft=Dt.side;Dt.side=nn,Dt.needsUpdate=!0,pl(vt,Y,Z,an,Dt,Yn),Dt.side=ft,Dt.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he)),v.setRenderTarget(Ee),v.setClearColor(H,D),v.toneMapping=Le}function Xr(C,B,Y){const Z=B.isScene===!0?B.overrideMaterial:null;for(let X=0,_e=C.length;X<_e;X++){const Ee=C[X],Le=Ee.object,Ue=Ee.geometry,qe=Z===null?Ee.material:Z,Ve=Ee.group;Le.layers.test(Y.layers)&&pl(Le,B,Y,Ue,qe,Ve)}}function pl(C,B,Y,Z,X,_e){C.onBeforeRender(v,B,Y,Z,X,_e),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,B,Y,Z,C,_e),X.transparent===!0&&X.side===zn&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,v.renderBufferDirect(Y,B,Z,X,C,_e),X.side=Ri,X.needsUpdate=!0,v.renderBufferDirect(Y,B,Z,X,C,_e),X.side=zn):v.renderBufferDirect(Y,B,Z,X,C,_e),C.onAfterRender(v,B,Y,Z,X,_e)}function jr(C,B,Y){B.isScene!==!0&&(B=Me);const Z=ve.get(C),X=p.state.lights,_e=p.state.shadowsArray,Ee=X.state.version,Le=Se.getParameters(C,X.state,_e,B,Y),Ue=Se.getProgramCacheKey(Le);let qe=Z.programs;Z.environment=C.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(C.isMeshStandardMaterial?V:M).get(C.envMap||Z.environment),qe===void 0&&(C.addEventListener("dispose",pe),qe=new Map,Z.programs=qe);let Ve=qe.get(Ue);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Ee)return gl(C,Le),Ve}else Le.uniforms=Se.getUniforms(C),C.onBuild(Y,Le,v),C.onBeforeCompile(Le,v),Ve=Se.acquireProgram(Le,Ue),qe.set(Ue,Ve),Z.uniforms=Le.uniforms;const Ge=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ze.uniform),gl(C,Le),Z.needsLights=yf(C),Z.lightsStateVersion=Ee,Z.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function ml(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Ao.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function gl(C,B){const Y=ve.get(C);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function vf(C,B,Y,Z,X){B.isScene!==!0&&(B=Me),A.resetTextureUnits();const _e=B.fog,Ee=Z.isMeshStandardMaterial?B.environment:null,Le=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ci,Ue=(Z.isMeshStandardMaterial?V:M).get(Z.envMap||Ee),qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,an=!!Y.morphAttributes.color;let Dt=wi;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Yn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=Yn!==void 0?Yn.length:0,Xe=ve.get(Z),wa=p.state.lights;if(Q===!0&&(ee===!0||C!==x)){const fn=C===x&&Z.id===R;ze.setState(Z,C,fn)}let mt=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==wa.state.version||Xe.outputColorSpace!==Le||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||Xe.envMap!==Ue||Z.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ve||Xe.morphTargets!==Ge||Xe.morphNormals!==vt||Xe.morphColors!==an||Xe.toneMapping!==Dt||K.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Xe.__version=Z.version);let Fi=Xe.currentProgram;mt===!0&&(Fi=jr(Z,B,X));let _l=!1,rr=!1,Aa=!1;const Vt=Fi.getUniforms(),ki=Xe.uniforms;if(te.useProgram(Fi.program)&&(_l=!0,rr=!0,Aa=!0),Z.id!==R&&(R=Z.id,rr=!0),_l||x!==C){Vt.setValue(G,"projectionMatrix",C.projectionMatrix),Vt.setValue(G,"viewMatrix",C.matrixWorldInverse);const fn=Vt.map.cameraPosition;fn!==void 0&&fn.setValue(G,Ce.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Vt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Vt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,rr=!0,Aa=!0)}if(X.isSkinnedMesh){Vt.setOptional(G,X,"bindMatrix"),Vt.setOptional(G,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(K.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Vt.setValue(G,"boneTexture",fn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Vt.setOptional(G,X,"batchingTexture"),Vt.setValue(G,"batchingTexture",X._matricesTexture,A));const Ca=Y.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&K.isWebGL2===!0)&&We.update(X,Y,Fi),(rr||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Vt.setValue(G,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ki.envMap.value=Ue,ki.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),rr&&(Vt.setValue(G,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&xf(ki,Aa),_e&&Z.fog===!0&&fe.refreshFogUniforms(ki,_e),fe.refreshMaterialUniforms(ki,Z,k,U,he),Ao.upload(G,ml(Xe),ki,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ao.upload(G,ml(Xe),ki,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Vt.setValue(G,"center",X.center),Vt.setValue(G,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(G,"normalMatrix",X.normalMatrix),Vt.setValue(G,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let Ra=0,Sf=fn.length;Ra<Sf;Ra++)if(K.isWebGL2){const vl=fn[Ra];ce.update(vl,Fi),ce.bind(vl,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function xf(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function yf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,B,Y){ve.get(C.texture).__webglTexture=B,ve.get(C.depthTexture).__webglTexture=Y;const Z=ve.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const Y=ve.get(C);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Y=0){T=C,S=B,E=Y;let Z=!0,X=null,_e=!1,Ee=!1;if(C){const Ue=ve.get(C);Ue.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(G.FRAMEBUFFER,null),Z=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ue.__hasExternalTextures&&A.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const Ve=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?X=Ve[B][Y]:X=Ve[B],_e=!0):K.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?X=ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[Y]:X=Ve,b.copy(C.viewport),L.copy(C.scissor),N=C.scissorTest}else b.copy(q).multiplyScalar(k).floor(),L.copy($).multiplyScalar(k).floor(),N=J;if(te.bindFramebuffer(G.FRAMEBUFFER,X)&&K.drawBuffers&&Z&&te.drawBuffers(C,X),te.viewport(b),te.scissor(L),te.setScissorTest(N),_e){const Ue=ve.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,Y)}else if(Ee){const Ue=ve.get(C.texture),qe=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,qe)}R=-1},this.readRenderTargetPixels=function(C,B,Y,Z,X,_e,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){te.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ue=C.texture,qe=Ue.format,Ve=Ue.type;if(qe!==Dn&&ge.convert(qe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===oi&&(be.has("EXT_color_buffer_half_float")||K.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ve!==Ai&&ge.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===bi&&(K.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Z&&Y>=0&&Y<=C.height-X&&G.readPixels(B,Y,Z,X,ge.convert(qe),ge.convert(Ve),_e)}finally{const Ue=T!==null?ve.get(T).__webglFramebuffer:null;te.bindFramebuffer(G.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,B,Y=0){const Z=Math.pow(2,-Y),X=Math.floor(B.image.width*Z),_e=Math.floor(B.image.height*Z);A.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,C.x,C.y,X,_e),te.unbindTexture()},this.copyTextureToTexture=function(C,B,Y,Z=0){const X=B.image.width,_e=B.image.height,Ee=ge.convert(Y.format),Le=ge.convert(Y.type);A.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Z,C.x,C.y,X,_e,Ee,Le,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Z,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Z,C.x,C.y,Ee,Le,B.image),Z===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(C,B,Y,Z,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,Le=C.max.z-C.min.z+1,Ue=ge.convert(Z.format),qe=ge.convert(Z.type);let Ve;if(Z.isData3DTexture)A.setTexture3D(Z,0),Ve=G.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)A.setTexture2DArray(Z,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),vt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),an=G.getParameter(G.UNPACK_SKIP_PIXELS),Dt=G.getParameter(G.UNPACK_SKIP_ROWS),Yn=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(Ve,X,B.x,B.y,B.z,_e,Ee,Le,Ue,qe,ft.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ve,X,B.x,B.y,B.z,_e,Ee,Le,Ue,ft.data)):G.texSubImage3D(Ve,X,B.x,B.y,B.z,_e,Ee,Le,Ue,qe,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,an),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yn),X===0&&Z.generateMipmaps&&G.generateMipmap(Ve),te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,te.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===ca?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Ki:Ph}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?Ut:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class C0 extends Kh{}C0.prototype.isWebGL1Renderer=!0;class Vc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class R0 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class P0 extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new It,Sc=new ua,vo=new la,xo=new F;class Qh extends sn{constructor(e=new Tn,t=new P0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;ku.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);xo.fromBufferAttribute(h,p),Bu(xo,p,c,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++)xo.fromBufferAttribute(h,g),Bu(xo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bu(i,e,t,n,s,r,a){const o=Sc.distanceSqToPoint(i);if(o<t){const c=new F;Sc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class pa extends Tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new F,d=new F,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let w=0;f===0&&a===0?w=.5/t:f===n&&c===Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const E=S/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(E+w,1-v),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=u[f][y+1],w=u[f][y],S=u[f+1][y],E=u[f+1][y+1];(f!==0||a>0)&&m.push(v,w,E),(f!==n-1||c<Math.PI)&&m.push(w,S,E)}this.setIndex(m),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}let Jh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vu(){return(typeof performance>"u"?Date:performance).now()}class D0{constructor(e,t,n=0,s=1/0){this.ray=new ua(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(zu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mc(e[s],this,n,t);return n.sort(zu),n}}function zu(i,e){return i.distance-e.distance}function Mc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Mc(s[r],e,t,!0)}}class Gu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);const Hu={type:"change"},oc={type:"start"},Wu={type:"end"},yo=new ua,qu=new Si,L0=Math.cos(70*Tp.DEG2RAD);class N0 extends cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Re),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hu),n.update(),r=s.NONE},this.update=function(){const P=new F,ce=new ts().setFromUnitVectors(e.up,new F(0,1,0)),Te=ce.clone().invert(),xe=new F,ae=new ts,I=new F,le=2*Math.PI;return function(De=null){const Ae=n.object.position;P.copy(Ae).sub(n.target),P.applyQuaternion(ce),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&N(b(De)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ye=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(Ye)&&isFinite(Ze)&&(Ye<-Math.PI?Ye+=le:Ye>Math.PI&&(Ye-=le),Ze<-Math.PI?Ze+=le:Ze>Math.PI&&(Ze-=le),Ye<=Ze?o.theta=Math.max(Ye,Math.min(Ze,o.theta)):o.theta=o.theta>(Ye+Ze)/2?Math.max(Ye,o.theta):Math.min(Ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),P.setFromSpherical(o),P.applyQuaternion(Te),Ae.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let pt=!1;if(n.zoomToCursor&&E){let _t=null;if(n.object.isPerspectiveCamera){const Ke=P.length();_t=q(Ke*l);const Et=Ke-_t;n.object.position.addScaledVector(w,Et),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new F(S.x,S.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pt=!0;const Et=new F(S.x,S.y,0);Et.unproject(n.object),n.object.position.sub(Et).add(Ke),n.object.updateMatrixWorld(),_t=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;_t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(_t).add(n.object.position):(yo.origin.copy(n.object.position),yo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yo.direction))<L0?e.lookAt(n.target):(qu.setFromNormalAndCoplanarPoint(n.object.up,n.target),yo.intersectPlane(qu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pt=!0);return l=1,E=!1,pt||xe.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Hu),xe.copy(n.object.position),ae.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qe),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",V),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Re),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Gu,c=new Gu;let l=1;const u=new F,h=new Pe,d=new Pe,m=new Pe,g=new Pe,_=new Pe,p=new Pe,f=new Pe,y=new Pe,v=new Pe,w=new F,S=new Pe;let E=!1;const T=[],R={};let x=!1;function b(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function L(P){const ce=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ce)}function N(P){c.theta-=P}function H(P){c.phi-=P}const D=function(){const P=new F;return function(Te,xe){P.setFromMatrixColumn(xe,0),P.multiplyScalar(-Te),u.add(P)}}(),O=function(){const P=new F;return function(Te,xe){n.screenSpacePanning===!0?P.setFromMatrixColumn(xe,1):(P.setFromMatrixColumn(xe,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Te),u.add(P)}}(),U=function(){const P=new F;return function(Te,xe){const ae=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;P.copy(I).sub(n.target);let le=P.length();le*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Te*le/ae.clientHeight,n.object.matrix),O(2*xe*le/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Te*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),O(xe*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(P,ce){if(!n.zoomToCursor)return;E=!0;const Te=n.domElement.getBoundingClientRect(),xe=P-Te.left,ae=ce-Te.top,I=Te.width,le=Te.height;S.x=xe/I*2-1,S.y=-(ae/le)*2+1,w.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function $(P){h.set(P.clientX,P.clientY)}function J(P){z(P.clientX,P.clientX),f.set(P.clientX,P.clientY)}function j(P){g.set(P.clientX,P.clientY)}function Q(P){d.set(P.clientX,P.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;N(2*Math.PI*m.x/ce.clientHeight),H(2*Math.PI*m.y/ce.clientHeight),h.copy(d),n.update()}function ee(P){y.set(P.clientX,P.clientY),v.subVectors(y,f),v.y>0?k(L(v.y)):v.y<0&&W(L(v.y)),f.copy(y),n.update()}function he(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(_),n.update()}function me(P){z(P.clientX,P.clientY),P.deltaY<0?W(L(P.deltaY)):P.deltaY>0&&k(L(P.deltaY)),n.update()}function se(P){let ce=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),ce=!0;break}ce&&(P.preventDefault(),n.update())}function Ce(P){if(T.length===1)h.set(P.pageX,P.pageY);else{const ce=ge(P),Te=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);h.set(Te,xe)}}function Me(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const ce=ge(P),Te=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);g.set(Te,xe)}}function ke(P){const ce=ge(P),Te=P.pageX-ce.x,xe=P.pageY-ce.y,ae=Math.sqrt(Te*Te+xe*xe);f.set(0,ae)}function G(P){n.enableZoom&&ke(P),n.enablePan&&Me(P)}function At(P){n.enableZoom&&ke(P),n.enableRotate&&Ce(P)}function be(P){if(T.length==1)d.set(P.pageX,P.pageY);else{const Te=ge(P),xe=.5*(P.pageX+Te.x),ae=.5*(P.pageY+Te.y);d.set(xe,ae)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;N(2*Math.PI*m.x/ce.clientHeight),H(2*Math.PI*m.y/ce.clientHeight),h.copy(d)}function K(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const ce=ge(P),Te=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);_.set(Te,xe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(_)}function te(P){const ce=ge(P),Te=P.pageX-ce.x,xe=P.pageY-ce.y,ae=Math.sqrt(Te*Te+xe*xe);y.set(0,ae),v.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),k(v.y),f.copy(y);const I=(P.pageX+ce.x)*.5,le=(P.pageY+ce.y)*.5;z(I,le)}function Ie(P){n.enableZoom&&te(P),n.enablePan&&K(P)}function ve(P){n.enableZoom&&te(P),n.enableRotate&&be(P)}function A(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",V)),We(P),P.pointerType==="touch"?ze(P):ne(P))}function M(P){n.enabled!==!1&&(P.pointerType==="touch"?oe(P):ie(P))}function V(P){Oe(P),T.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",V)),n.dispatchEvent(Wu),r=s.NONE}function ne(P){let ce;switch(P.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case ds.DOLLY:if(n.enableZoom===!1)return;J(P),r=s.DOLLY;break;case ds.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;j(P),r=s.PAN}else{if(n.enableRotate===!1)return;$(P),r=s.ROTATE}break;case ds.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;$(P),r=s.ROTATE}else{if(n.enablePan===!1)return;j(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(oc)}function ie(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(P);break;case s.DOLLY:if(n.enableZoom===!1)return;ee(P);break;case s.PAN:if(n.enablePan===!1)return;he(P);break}}function re(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(oc),me(Se(P)),n.dispatchEvent(Wu))}function Se(P){const ce=P.deltaMode,Te={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ce){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return P.ctrlKey&&!x&&(Te.deltaY*=10),Te}function fe(P){P.key==="Control"&&(x=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(P){P.key==="Control"&&(x=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Re(P){n.enabled===!1||n.enablePan===!1||se(P)}function ze(P){switch(we(P),T.length){case 1:switch(n.touches.ONE){case fs.ROTATE:if(n.enableRotate===!1)return;Ce(P),r=s.TOUCH_ROTATE;break;case fs.PAN:if(n.enablePan===!1)return;Me(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),r=s.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(oc)}function oe(P){switch(we(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(P),n.update();break;default:r=s.NONE}}function Qe(P){n.enabled!==!1&&P.preventDefault()}function We(P){T.push(P.pointerId)}function Oe(P){delete R[P.pointerId];for(let ce=0;ce<T.length;ce++)if(T[ce]==P.pointerId){T.splice(ce,1);return}}function we(P){let ce=R[P.pointerId];ce===void 0&&(ce=new Pe,R[P.pointerId]=ce),ce.set(P.pageX,P.pageY)}function ge(P){const ce=P.pointerId===T[0]?T[1]:T[0];return R[ce]}n.domElement.addEventListener("contextmenu",Qe),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}const ed={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const I0=new Wh(-1,1,1,-1,0,1);class O0 extends Tn{constructor(){super(),this.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xn([0,2,0,0,2,0],2))}}const U0=new O0;class td{constructor(e){this._mesh=new Ln(U0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,I0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nd extends Or{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new td(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xu extends Or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class F0 extends Or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class k0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nd(ed),this.copyPass.material.blending=ri,this.clock=new Jh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(a instanceof Xu?n=!0:a instanceof F0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class B0 extends Or{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const V0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends Or{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new In(r,a,{type:oi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new In(r,a,{type:oi});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=V0;this.highPassUniforms=Uo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ed;this.copyUniforms=Uo.clone(u.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Fe,this.oldClearAlpha=1,this.basic=new da,this.fsQuad=new td(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xs.BlurDirectionX=new Pe(1,0);Xs.BlurDirectionY=new Pe(0,1);const id="14.9.17",ju=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),Yu=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),Tc=(i,e)=>({startTime:e,type:"setValue",value:i}),sd=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),rd=(i,e,{startTime:t,target:n,timeConstant:s})=>n+(e-n)*Math.exp((t-i)/s),Is=i=>i.type==="exponentialRampToValue",Fo=i=>i.type==="linearRampToValue",Mi=i=>Is(i)||Fo(i),zc=i=>i.type==="setValue",ii=i=>i.type==="setValueCurve",ko=(i,e,t,n)=>{const s=i[e];return s===void 0?n:Mi(s)||zc(s)?s.value:ii(s)?s.values[s.values.length-1]:rd(t,ko(i,e-1,s.startTime,n),s)},Zu=(i,e,t,n,s)=>t===void 0?[n.insertTime,s]:Mi(t)?[t.endTime,t.value]:zc(t)?[t.startTime,t.value]:ii(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,ko(i,e-1,t.startTime,s)],Ec=i=>i.type==="cancelAndHold",bc=i=>i.type==="cancelScheduledValues",yi=i=>Ec(i)||bc(i)?i.cancelTime:Is(i)||Fo(i)?i.endTime:i.startTime,$u=(i,e,t,{endTime:n,value:s})=>t===s?s:0<t&&0<s||t<0&&s<0?t*(s/t)**((i-e)/(n-e)):0,Ku=(i,e,t,{endTime:n,value:s})=>t+(i-e)/(n-e)*(s-t),z0=(i,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},G0=(i,{duration:e,startTime:t,values:n})=>{const s=(i-t)/e*(n.length-1);return z0(n,s)},So=i=>i.type==="setTarget";class H0{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=yi(e);if(Ec(e)||bc(e)){const n=this._automationEvents.findIndex(r=>bc(e)&&ii(r)?r.startTime+r.duration>=t:yi(r)>=t),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Ec(e)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&Mi(s)){if(r!==void 0&&So(r))throw new Error("The internal list is malformed.");const a=r===void 0?s.insertTime:ii(r)?r.startTime+r.duration:yi(r),o=r===void 0?this._defaultValue:ii(r)?r.values[r.values.length-1]:r.value,c=Is(s)?$u(t,a,o,s):Ku(t,a,o,s),l=Is(s)?ju(c,t,this._currenTime):Yu(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&So(r)&&this._automationEvents.push(Tc(this.getValue(t),t)),r!==void 0&&ii(r)&&r.startTime+r.duration>t){const a=t-r.startTime,o=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=sd(u,r.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>yi(a)>t),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&ii(s)&&yi(s)+s.duration>t)return!1;const r=Is(e)?ju(e.value,e.endTime,this._currenTime):Fo(e)?Yu(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(ii(e)&&t+e.duration>yi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>yi(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),s=n[0];So(s)&&n.unshift(Tc(ko(this._automationEvents,t-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(a=>yi(a)>e),n=this._automationEvents[t],s=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[s];if(r!==void 0&&So(r)&&(n===void 0||!Mi(n)||n.insertTime>e))return rd(e,ko(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&zc(r)&&(n===void 0||!Mi(n)))return r.value;if(r!==void 0&&ii(r)&&(n===void 0||!Mi(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?G0(e,r):r.values[r.values.length-1];if(r!==void 0&&Mi(r)&&(n===void 0||!Mi(n)))return r.value;if(n!==void 0&&Is(n)){const[a,o]=Zu(this._automationEvents,s,r,n,this._defaultValue);return $u(e,a,o,n)}if(n!==void 0&&Fo(n)){const[a,o]=Zu(this._automationEvents,s,r,n,this._defaultValue);return Ku(e,a,o,n)}return this._defaultValue}}const W0=i=>({cancelTime:i,type:"cancelAndHold"}),q0=i=>({cancelTime:i,type:"cancelScheduledValues"}),X0=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),j0=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),Y0=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),Z0=()=>new DOMException("","AbortError"),$0=i=>(e,t,[n,s,r],a)=>{i(e[s],[t,n,r],o=>o[0]===t&&o[1]===n,a)},K0=i=>(e,t,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(e,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},Q0=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},js=new WeakSet,od=new WeakMap,Gc=new WeakMap,ad=new WeakMap,Hc=new WeakMap,ma=new WeakMap,cd=new WeakMap,wc=new WeakMap,Ac=new WeakMap,Cc=new WeakMap,ld={construct(){return ld}},J0=i=>{try{const e=new Proxy(i,ld);new e}catch{return!1}return!0},Qu=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ju=(i,e)=>{const t=[];let n=i.replace(/^[\s]+/,""),s=n.match(Qu);for(;s!==null;){const r=s[1].slice(1,-1),a=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(a),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(Qu)}return[t.join(";"),n]},eh=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},th=i=>{if(!J0(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},ex=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>{let m=0;return(g,_,p={credentials:"omit"})=>{const f=u.get(g);if(f!==void 0&&f.has(_))return Promise.resolve();const y=l.get(g);if(y!==void 0){const S=y.get(_);if(S!==void 0)return S}const v=r(g),w=v.audioWorklet===void 0?s(_).then(([S,E])=>{const[T,R]=Ju(S,E),x=`${T};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${R}
})})(window,'_AWGS')`;return t(x)}).then(()=>{const S=d._AWGS.pop();if(S===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>S(class{},void 0,(E,T)=>{if(E.trim()==="")throw e();const R=Ac.get(v);if(R!==void 0){if(R.has(E))throw e();th(T),eh(T.parameterDescriptors),R.set(E,T)}else th(T),eh(T.parameterDescriptors),Ac.set(v,new Map([[E,T]]))},v.sampleRate,void 0,void 0))}):Promise.all([s(_),Promise.resolve(i(h,h))]).then(([[S,E],T])=>{const R=m+1;m=R;const[x,b]=Ju(S,E),D=`${x};((AudioWorkletProcessor,registerProcessor)=>{${b}
})(${T?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${T?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${T?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${R}',class extends AudioWorkletProcessor{process(){return !1}})`,O=new Blob([D],{type:"application/javascript; charset=utf-8"}),U=URL.createObjectURL(O);return v.audioWorklet.addModule(U,p).then(()=>{if(o(v))return v;const k=a(v);return k.audioWorklet.addModule(U,p).then(()=>k)}).then(k=>{if(c===null)throw new SyntaxError;try{new c(k,`__sac${R}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(U))});return y===void 0?l.set(g,new Map([[_,w]])):y.set(_,w),w.then(()=>{const S=u.get(g);S===void 0?u.set(g,new Set([_])):S.add(_)}).finally(()=>{const S=l.get(g);S!==void 0&&S.delete(_)}),w}},On=(i,e)=>{const t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},ga=(i,e)=>{const t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return i.delete(n),n},ud=(i,e,t,n)=>{const s=On(i,e),r=ga(s,a=>a[0]===t&&a[1]===n);return s.size===0&&i.delete(e),r},Ur=i=>On(cd,i),Ys=i=>{if(js.has(i))throw new Error("The AudioNode is already stored.");js.add(i),Ur(i).forEach(e=>e(!0))},hd=i=>"port"in i,Fr=i=>{if(!js.has(i))throw new Error("The AudioNode is not stored.");js.delete(i),Ur(i).forEach(e=>e(!1))},Rc=(i,e)=>{!hd(i)&&e.every(t=>t.size===0)&&Fr(i)},tx=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>{const m=new WeakMap;return(g,_,p,f,y)=>{const{activeInputs:v,passiveInputs:w}=r(_),{outputs:S}=r(g),E=o(g),T=R=>{const x=c(_),b=c(g);if(R){const L=ud(w,g,p,f);i(v,g,L,!1),!y&&!h(g)&&t(b,x,p,f),d(_)&&Ys(_)}else{const L=n(v,g,p,f);e(w,f,L,!1),!y&&!h(g)&&s(b,x,p,f);const N=a(_);if(N===0)u(_)&&Rc(_,v);else{const H=m.get(_);H!==void 0&&clearTimeout(H),m.set(_,setTimeout(()=>{u(_)&&Rc(_,v)},N*1e3))}}};return l(S,[_,p,f],R=>R[0]===_&&R[1]===p&&R[2]===f,!0)?(E.add(T),u(g)?i(v,g,[p,f,T],!0):e(w,f,[g,p,T],!0),!0):!1}},nx=i=>(e,t,[n,s,r],a)=>{const o=e.get(n);o===void 0?e.set(n,new Set([[s,t,r]])):i(o,[s,t,r],c=>c[0]===s&&c[1]===t,a)},ix=i=>(e,t)=>{const n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const s=()=>{t.removeEventListener("ended",s),t.disconnect(n),n.disconnect()};t.addEventListener("ended",s)},sx=i=>(e,t)=>{i(e).add(t)},rx={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},ox=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...rx,...c},h=n(l,u),d=r(l)?e():null;super(o,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},qt=(i,e)=>i.context===e,ax=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!qt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Bo=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},qn=()=>new DOMException("","IndexSizeError"),Wc=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?qn():n}})(i.getChannelData)},cx={numberOfChannels:1},lx=(i,e,t,n,s,r,a,o)=>{let c=null;return class dd{constructor(u){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:m}={...cx,...u};c===null&&(c=new s(1,1,44100));const g=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:m}):c.createBuffer(d,h,m);if(g.numberOfChannels===0)throw t();return typeof g.copyFromChannel!="function"?(a(g),Wc(g)):e(Bo,()=>Bo(g))||o(g),i.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===dd.prototype||i.has(u)}}},en=-34028234663852886e22,Zt=-en,ai=i=>js.has(i),ux={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},hx=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...ux,...u},m=s(h,d),g=a(h),_=g?e():null;super(l,!1,m,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=t(this,g,m.playbackRate,Zt,en)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Ys(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),ai(this)&&Fr(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},dx=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=qt(h,u);if(!d){const m={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,m),a!==null&&h.start(...a),o!==null&&h.stop(o)}return r.set(u,h),d?await i(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await s(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},fx=i=>"playbackRate"in i,px=i=>"frequency"in i&&"gain"in i,mx=i=>"offset"in i,gx=i=>!("frequency"in i)&&"gain"in i,_x=i=>"detune"in i&&"frequency"in i&&!("gain"in i),vx=i=>"pan"in i,$t=i=>On(od,i),kr=i=>On(ad,i),Pc=(i,e)=>{const{activeInputs:t}=$t(i);t.forEach(s=>s.forEach(([r])=>{e.includes(i)||Pc(r,[...e,i])}));const n=fx(i)?[i.playbackRate]:hd(i)?Array.from(i.parameters.values()):px(i)?[i.Q,i.detune,i.frequency,i.gain]:mx(i)?[i.offset]:gx(i)?[i.gain]:_x(i)?[i.detune,i.frequency]:vx(i)?[i.pan]:[];for(const s of n){const r=kr(s);r!==void 0&&r.activeInputs.forEach(([a])=>Pc(a,e))}ai(i)&&Fr(i)},fd=i=>{Pc(i.destination,[])},xx=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),yx=(i,e,t,n,s,r,a,o,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(g){throw g.code===12&&g.message==="sampleRate is not in range"?t():g}if(h===null)throw n();if(!xx(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:m}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/m:d==="interactive"||d===void 0?256/m:d==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(d*m/128)))*128/m,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const g=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",g)};h.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),fd(this)}))}createMediaElementSource(u){return new s(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new a(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new o(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},Sx=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d=a(h),m=s(h,u,d),g=d?e(o):null;super(l,!1,m,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Mx=i=>{const e=new WeakMap,t=async(n,s)=>{const r=s.destination;return e.set(s,r),await i(n,s,r),r};return{render(n,s){const r=e.get(s);return r!==void 0?Promise.resolve(r):t(n,s)}}},Tx=(i,e,t,n,s,r,a,o)=>(c,l)=>{const u=l.listener,h=()=>{const S=new Float32Array(1),E=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),T=a(l);let R=!1,x=[0,0,-1,0,1,0],b=[0,0,0];const L=()=>{if(R)return;R=!0;const O=n(l,256,9,0);O.onaudioprocess=({inputBuffer:U})=>{const k=[r(U,S,0),r(U,S,1),r(U,S,2),r(U,S,3),r(U,S,4),r(U,S,5)];k.some((z,q)=>z!==x[q])&&(u.setOrientation(...k),x=k);const W=[r(U,S,6),r(U,S,7),r(U,S,8)];W.some((z,q)=>z!==b[q])&&(u.setPosition(...W),b=W)},E.connect(O)},N=O=>U=>{U!==x[O]&&(x[O]=U,u.setOrientation(...x))},H=O=>U=>{U!==b[O]&&(b[O]=U,u.setPosition(...b))},D=(O,U,k)=>{const W=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:U});W.connect(E,0,O),W.start(),Object.defineProperty(W.offset,"defaultValue",{get(){return U}});const z=i({context:c},T,W.offset,Zt,en);return o(z,"value",q=>()=>q.call(z),q=>$=>{try{q.call(z,$)}catch(J){if(J.code!==9)throw J}L(),T&&k($)}),z.cancelAndHoldAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.cancelAndHoldAtTime),z.cancelScheduledValues=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.cancelScheduledValues),z.exponentialRampToValueAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.exponentialRampToValueAtTime),z.linearRampToValueAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.linearRampToValueAtTime),z.setTargetAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.setTargetAtTime),z.setValueAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.setValueAtTime),z.setValueCurveAtTime=(q=>T?()=>{throw s()}:(...$)=>{const J=q.apply(z,$);return L(),J})(z.setValueCurveAtTime),z};return{forwardX:D(0,0,N(0)),forwardY:D(1,0,N(1)),forwardZ:D(2,-1,N(2)),positionX:D(6,0,H(0)),positionY:D(7,0,H(1)),positionZ:D(8,0,H(2)),upX:D(3,0,N(3)),upY:D(4,1,N(4)),upZ:D(5,0,N(5))}},{forwardX:d,forwardY:m,forwardZ:g,positionX:_,positionY:p,positionZ:f,upX:y,upY:v,upZ:w}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return m},get forwardZ(){return g},get positionX(){return _},get positionY(){return p},get positionZ(){return f},get upX(){return y},get upY(){return v},get upZ(){return w}}},Vo=i=>"context"in i,Br=i=>Vo(i[0]),ls=(i,e,t,n)=>{for(const s of i)if(t(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},nh=(i,e,[t,n],s)=>{ls(i,[e,t,n],r=>r[0]===e&&r[1]===t,s)},ih=(i,[e,t,n],s)=>{const r=i.get(e);r===void 0?i.set(e,new Set([[t,n]])):ls(r,[t,n],a=>a[0]===t,s)},er=i=>"inputs"in i,zo=(i,e,t,n)=>{if(er(e)){const s=e.inputs[n];return i.connect(s,t,0),[s,t,0]}return i.connect(e,t,n),[e,t,n]},pd=(i,e,t)=>{for(const n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},Ex=(i,e,t)=>ga(i,n=>n[0]===e&&n[1]===t),md=(i,e)=>{if(!Ur(i).delete(e))throw new Error("Missing the expected event listener.")},gd=(i,e,t)=>{const n=On(i,e),s=ga(n,r=>r[0]===t);return n.size===0&&i.delete(e),s},Go=(i,e,t,n)=>{er(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},at=i=>On(Gc,i),mr=i=>On(Hc,i),ns=i=>wc.has(i),Co=i=>!js.has(i),sh=(i,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),a=r.getChannelData(0);a[0]=1,a[1]=1;const o=i.createBufferSource();o.buffer=r,o.loop=!0,o.connect(n).connect(i.destination),o.connect(s),o.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(i.destination)},o.start()}}),ac=(i,e)=>{const t=new Map;for(const n of i)for(const s of n){const r=t.get(s);t.set(s,r===void 0?1:r+1)}t.forEach((n,s)=>e(s,n))},Ho=i=>"context"in i,bx=i=>{const e=new Map;i.connect=(t=>(n,s=0,r=0)=>{const a=Ho(n)?t(n,s,r):t(n,s),o=e.get(n);return o===void 0?e.set(n,[{input:r,output:s}]):o.every(c=>c.input!==r||c.output!==s)&&o.push({input:r,output:s}),a})(i.connect.bind(i)),i.disconnect=(t=>(n,s,r)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(const[a,o]of e){const c=o.filter(l=>l.output!==n);c.length===0?e.delete(a):e.set(a,c)}else if(e.has(n))if(s===void 0)e.delete(n);else{const a=e.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==s&&(c.input!==r||r===void 0));o.length===0?e.delete(n):e.set(n,o)}}for(const[a,o]of e)o.forEach(c=>{Ho(a)?i.connect(a,c.output,c.input):i.connect(a,c.output)})})(i.disconnect)},wx=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=kr(e),{outputs:a}=$t(i),o=Ur(i),c=l=>{const u=at(i),h=mr(e);if(l){const d=gd(r,i,t);nh(s,i,d,!1),!n&&!ns(i)&&u.connect(h,t)}else{const d=Ex(s,i,t);ih(r,d,!1),!n&&!ns(i)&&u.disconnect(h,t)}};return ls(a,[e,t],l=>l[0]===e&&l[1]===t,!0)?(o.add(c),ai(i)?nh(s,i,[t,c],!0):ih(r,[i,t,c],!0),!0):!1},Ax=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=$t(e),a=pd(s[n],i,t);return a===null?[ud(r,i,t,n)[2],!1]:[a[2],!0]},Cx=(i,e,t)=>{const{activeInputs:n,passiveInputs:s}=kr(e),r=pd(n,i,t);return r===null?[gd(s,i,t)[1],!1]:[r[2],!0]},qc=(i,e,t,n,s)=>{const[r,a]=Ax(i,t,n,s);if(r!==null&&(md(i,r),a&&!e&&!ns(i)&&Go(at(i),at(t),n,s)),ai(t)){const{activeInputs:o}=$t(t);Rc(t,o)}},Xc=(i,e,t,n)=>{const[s,r]=Cx(i,t,n);s!==null&&(md(i,s),r&&!e&&!ns(i)&&at(i).disconnect(mr(t),n))},Rx=(i,e)=>{const t=$t(i),n=[];for(const s of t.outputs)Br(s)?qc(i,e,...s):Xc(i,e,...s),n.push(s[0]);return t.outputs.clear(),n},Px=(i,e,t)=>{const n=$t(i),s=[];for(const r of n.outputs)r[1]===t&&(Br(r)?qc(i,e,...r):Xc(i,e,...r),s.push(r[0]),n.outputs.delete(r));return s},Dx=(i,e,t,n,s)=>{const r=$t(i);return Array.from(r.outputs).filter(a=>a[0]===t&&(n===void 0||a[1]===n)&&(s===void 0||a[2]===s)).map(a=>(Br(a)?qc(i,e,...a):Xc(i,e,...a),r.outputs.delete(a),a[0]))},Lx=(i,e,t,n,s,r,a,o,c,l,u,h,d,m,g,_)=>class extends l{constructor(f,y,v,w){super(v),this._context=f,this._nativeAudioNode=v;const S=u(f);h(S)&&t(sh,()=>sh(S,_))!==!0&&bx(v),Gc.set(this,v),cd.set(this,new Set),f.state!=="closed"&&y&&Ys(this),i(this,w,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(f){this._nativeAudioNode.channelCount=f}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(f){this._nativeAudioNode.channelCountMode=f}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(f){this._nativeAudioNode.channelInterpretation=f}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(f,y=0,v=0){if(y<0||y>=this._nativeAudioNode.numberOfOutputs)throw s();const w=u(this._context),S=g(w);if(d(f)||m(f))throw r();if(Vo(f)){const R=at(f);try{const b=zo(this._nativeAudioNode,R,y,v),L=Co(this);(S||L)&&this._nativeAudioNode.disconnect(...b),this.context.state!=="closed"&&!L&&Co(f)&&Ys(f)}catch(b){throw b.code===12?r():b}if(e(this,f,y,v,S)){const b=c([this],f);ac(b,n(S))}return f}const E=mr(f);if(E.name==="playbackRate"&&E.maxValue===1024)throw a();try{this._nativeAudioNode.connect(E,y),(S||Co(this))&&this._nativeAudioNode.disconnect(E,y)}catch(R){throw R.code===12?r():R}if(wx(this,f,y,S)){const R=c([this],f);ac(R,n(S))}}disconnect(f,y,v){let w;const S=u(this._context),E=g(S);if(f===void 0)w=Rx(this,E);else if(typeof f=="number"){if(f<0||f>=this.numberOfOutputs)throw s();w=Px(this,E,f)}else{if(y!==void 0&&(y<0||y>=this.numberOfOutputs)||Vo(f)&&v!==void 0&&(v<0||v>=f.numberOfInputs))throw s();if(w=Dx(this,E,f,y,v),w.length===0)throw r()}for(const T of w){const R=c([this],T);ac(R,o)}}},Nx=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>(m,g,_,p=null,f=null)=>{const y=_.value,v=new H0(y),w=g?n(v):null,S={get defaultValue(){return y},get maxValue(){return p===null?_.maxValue:p},get minValue(){return f===null?_.minValue:f},get value(){return _.value},set value(E){_.value=E,S.setValueAtTime(E,m.context.currentTime)},cancelAndHoldAtTime(E){if(typeof _.cancelAndHoldAtTime=="function")w===null&&v.flush(m.context.currentTime),v.add(s(E)),_.cancelAndHoldAtTime(E);else{const T=Array.from(v).pop();w===null&&v.flush(m.context.currentTime),v.add(s(E));const R=Array.from(v).pop();_.cancelScheduledValues(E),T!==R&&R!==void 0&&(R.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(R.value,R.endTime):R.type==="linearRampToValue"?_.linearRampToValueAtTime(R.value,R.endTime):R.type==="setValue"?_.setValueAtTime(R.value,R.startTime):R.type==="setValueCurve"&&_.setValueCurveAtTime(R.values,R.startTime,R.duration))}return S},cancelScheduledValues(E){return w===null&&v.flush(m.context.currentTime),v.add(r(E)),_.cancelScheduledValues(E),S},exponentialRampToValueAtTime(E,T){if(E===0)throw new RangeError;if(!Number.isFinite(T)||T<0)throw new RangeError;const R=m.context.currentTime;return w===null&&v.flush(R),Array.from(v).length===0&&(v.add(l(y,R)),_.setValueAtTime(y,R)),v.add(a(E,T)),_.exponentialRampToValueAtTime(E,T),S},linearRampToValueAtTime(E,T){const R=m.context.currentTime;return w===null&&v.flush(R),Array.from(v).length===0&&(v.add(l(y,R)),_.setValueAtTime(y,R)),v.add(o(E,T)),_.linearRampToValueAtTime(E,T),S},setTargetAtTime(E,T,R){return w===null&&v.flush(m.context.currentTime),v.add(c(E,T,R)),_.setTargetAtTime(E,T,R),S},setValueAtTime(E,T){return w===null&&v.flush(m.context.currentTime),v.add(l(E,T)),_.setValueAtTime(E,T),S},setValueCurveAtTime(E,T,R){const x=E instanceof Float32Array?E:new Float32Array(E);if(h!==null&&h.name==="webkitAudioContext"){const b=T+R,L=m.context.sampleRate,N=Math.ceil(T*L),H=Math.floor(b*L),D=H-N,O=new Float32Array(D);for(let k=0;k<D;k+=1){const W=(x.length-1)/R*((N+k)/L-T),z=Math.floor(W),q=Math.ceil(W);O[k]=z===q?x[z]:(1-(W-z))*x[z]+(1-(q-W))*x[q]}w===null&&v.flush(m.context.currentTime),v.add(u(O,T,R)),_.setValueCurveAtTime(O,T,R);const U=H/L;U<b&&d(S,O[O.length-1],U),d(S,x[x.length-1],b)}else w===null&&v.flush(m.context.currentTime),v.add(u(x,T,R)),_.setValueCurveAtTime(x,T,R);return S}};return t.set(S,_),e.set(S,m),i(S,w),S},Ix=i=>({replay(e){for(const t of i)if(t.type==="exponentialRampToValue"){const{endTime:n,value:s}=t;e.exponentialRampToValueAtTime(s,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:s}=t;e.linearRampToValueAtTime(s,n)}else if(t.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=t;e.setTargetAtTime(s,n,r)}else if(t.type==="setValue"){const{startTime:n,value:s}=t;e.setValueAtTime(s,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=t;e.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class _d{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,s)=>e.call(t,n,s,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Ox={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Ux=(i,e,t,n,s,r,a,o,c,l,u,h,d,m)=>class extends e{constructor(_,p,f){var y;const v=o(_),w=c(v),S=u({...Ox,...f});d(S);const E=Ac.get(v),T=E==null?void 0:E.get(p),R=w||v.state!=="closed"?v:(y=a(v))!==null&&y!==void 0?y:v,x=s(R,w?null:_.baseLatency,l,p,T,S),b=w?n(p,S,T):null;super(_,!0,x,b);const L=[];x.parameters.forEach((H,D)=>{const O=t(this,w,H);L.push([D,O])}),this._nativeAudioWorkletNode=x,this._onprocessorerror=null,this._parameters=new _d(L),w&&i(v,this);const{activeInputs:N}=r(this);h(x,N)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const p=typeof _=="function"?m(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=p;const f=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=f!==null&&f===p?_:f}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Wo(i,e,t,n,s){if(typeof i.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),i.copyFromChannel(e[t],n,s);else{const r=i.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(s,s+128);else{const a=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(a)}}}const vd=(i,e,t,n,s)=>{typeof i.copyToChannel=="function"?e[t].byteLength!==0&&i.copyToChannel(e[t],n,s):e[t].byteLength!==0&&i.getChannelData(n).set(e[t],s)},qo=(i,e)=>{const t=[];for(let n=0;n<i;n+=1){const s=[],r=typeof e=="number"?e:e[n];for(let a=0;a<r;a+=1)s.push(new Float32Array(128));t.push(s)}return t},Fx=(i,e)=>{const t=On(Cc,i),n=at(e);return On(t,n)},kx=async(i,e,t,n,s,r,a)=>{const o=e===null?Math.ceil(i.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((p,f)=>p+f,0),u=l===0?null:t.createBuffer(l,o,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=$t(i),d=await Fx(t,i),m=qo(n.numberOfInputs,n.channelCount),g=qo(n.numberOfOutputs,s),_=Array.from(i.parameters.keys()).reduce((p,f)=>({...p,[f]:new Float32Array(128)}),{});for(let p=0;p<o;p+=128){if(n.numberOfInputs>0&&e!==null)for(let f=0;f<n.numberOfInputs;f+=1)for(let y=0;y<n.channelCount;y+=1)Wo(e,m[f],y,y,p);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:f},y)=>{Wo(e,_,f,c+y,p)});for(let f=0;f<n.numberOfInputs;f+=1)for(let y=0;y<s[f];y+=1)g[f][y].byteLength===0&&(g[f][y]=new Float32Array(128));try{const f=m.map((v,w)=>h.activeInputs[w].size===0?[]:v),y=a(p/t.sampleRate,t.sampleRate,()=>d.process(f,g,_));if(u!==null)for(let v=0,w=0;v<n.numberOfOutputs;v+=1){for(let S=0;S<s[v];S+=1)vd(u,g[v],S,w+S,p);w+=s[v]}if(!y)break}catch(f){i.dispatchEvent(new ErrorEvent("processorerror",{colno:f.colno,filename:f.filename,lineno:f.lineno,message:f.message}));break}}return u},Bx=(i,e,t,n,s,r,a,o,c,l,u,h,d,m,g,_)=>(p,f,y)=>{const v=new WeakMap;let w=null;const S=async(E,T)=>{let R=u(E),x=null;const b=qt(R,T),L=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(h===null){const N=L.reduce((U,k)=>U+k,0),H=s(T,{channelCount:Math.max(1,N),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,N)}),D=[];for(let U=0;U<E.numberOfOutputs;U+=1)D.push(n(T,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:L[U]}));const O=a(T,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1});O.connect=e.bind(null,D),O.disconnect=c.bind(null,D),x=[H,D,O]}else b||(R=new h(T,p));if(v.set(T,x===null?R:x[2]),x!==null){if(w===null){if(y===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const k=E.channelCount*E.numberOfInputs,W=y.parameterDescriptors===void 0?0:y.parameterDescriptors.length,z=k+W;w=kx(E,z===0?null:await(async()=>{const $=new d(z,Math.ceil(E.context.length/128)*128,T.sampleRate),J=[],j=[];for(let he=0;he<f.numberOfInputs;he+=1)J.push(a($,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),j.push(s($,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const Q=await Promise.all(Array.from(E.parameters.values()).map(async he=>{const me=r($,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:he.value});return await m($,he,me.offset),me})),ee=n($,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,k+W)});for(let he=0;he<f.numberOfInputs;he+=1){J[he].connect(j[he]);for(let me=0;me<f.channelCount;me+=1)j[he].connect(ee,me,he*f.channelCount+me)}for(const[he,me]of Q.entries())me.connect(ee,0,k+he),me.start(0);return ee.connect($.destination),await Promise.all(J.map(he=>g(E,$,he))),_($)})(),T,f,L,y,l)}const N=await w,H=t(T,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[D,O,U]=x;N!==null&&(H.buffer=N,H.start(0)),H.connect(D);for(let k=0,W=0;k<E.numberOfOutputs;k+=1){const z=O[k];for(let q=0;q<L[k];q+=1)D.connect(z,W+q,q);W+=L[k]}return U}if(b)for(const[N,H]of E.parameters.entries())await i(T,H,R.parameters.get(N));else for(const[N,H]of E.parameters.entries())await m(T,H,R.parameters.get(N));return await g(E,T,R),R};return{render(E,T){o(T,E);const R=v.get(T);return R!==void 0?Promise.resolve(R):S(E,T)}}},Vx=(i,e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p,f,y,v)=>class extends g{constructor(S,E){super(S,E),this._nativeContext=S,this._audioWorklet=i===void 0?void 0:{addModule:(T,R)=>i(this,T,R)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new s(this)}createBuffer(S,E,T){return new t({length:E,numberOfChannels:S,sampleRate:T})}createBufferSource(){return new n(this)}createChannelMerger(S=6){return new r(this,{numberOfInputs:S})}createChannelSplitter(S=6){return new a(this,{numberOfOutputs:S})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(S=1){return new u(this,{maxDelayTime:S})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(S,E){return new m(this,{feedback:E,feedforward:S})}createOscillator(){return new _(this)}createPanner(){return new p(this)}createPeriodicWave(S,E,T={disableNormalization:!1}){return new f(this,{...T,imag:E,real:S})}createStereoPanner(){return new y(this)}createWaveShaper(){return new v(this)}decodeAudioData(S,E,T){return l(this._nativeContext,S).then(R=>(typeof E=="function"&&E(R),R),R=>{throw typeof T=="function"&&T(R),R})}},zx={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Gx=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...zx,...u},m=s(h,d),g=a(h),_=g?t():null;super(l,!1,m,_),this._Q=e(this,g,m.Q,Zt,en),this._detune=e(this,g,m.detune,1200*Math.log2(Zt),-1200*Math.log2(Zt)),this._frequency=e(this,g,m.frequency,l.sampleRate/2,0),this._gain=e(this,g,m.gain,40*Math.log10(Zt),en),this._nativeBiquadFilterNode=m,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},Hx=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=qt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await i(c,o.Q,l.Q),await i(c,o.detune,l.detune),await i(c,o.frequency,l.frequency),await i(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},Wx=(i,e)=>(t,n)=>{const s=e.get(t);if(s!==void 0)return s;const r=i.get(t);if(r!==void 0)return r;try{const a=n();return a instanceof Promise?(i.set(t,a),a.catch(()=>!1).then(o=>(i.delete(t),e.set(t,o),o))):(e.set(t,a),a)}catch{return e.set(t,!1),!1}},qx={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},Xx=(i,e,t,n,s)=>class extends i{constructor(a,o){const c=n(a),l={...qx,...o},u=t(c,l),h=s(c)?e():null;super(a,!1,u,h)}},jx=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!qt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Yx={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Zx=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u=r({...Yx,...c}),h=t(l,u),d=s(l)?e():null;super(o,!1,h,d)}},$x=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!qt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Kx=i=>(e,t,n)=>i(t,e,n),Qx=i=>(e,t,n=0,s=0)=>{const r=e[n];if(r===void 0)throw i();return Ho(t)?r.connect(t,0,s):r.connect(t,0)},Jx=i=>(e,t)=>{const n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=e.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},ey={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},ty=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...ey,...l},d=n(u,h),m=r(u),g=m?t():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=e(this,m,d.offset,Zt,en),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Ys(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),ai(this)&&Fr(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},ny=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=qt(h,u);if(!d){const m={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,m),a!==null&&h.start(a),o!==null&&h.stop(o)}return r.set(u,h),d?await i(u,l.offset,h.offset):await n(u,l.offset,h.offset),await s(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},iy=i=>e=>(i[0]=e,i[0]),sy={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},ry=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u={...sy,...c},h=t(l,u),m=s(l)?e():null;super(o,!1,h,m),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},oy=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!qt(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=i(a,l)}return n.set(a,o),er(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},ay=(i,e)=>(t,n,s)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},cy=()=>new DOMException("","DataCloneError"),rh=i=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const s=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>s();try{e.postMessage(i,[i])}catch{}finally{s()}})},ly=(i,e,t,n,s,r,a,o,c,l,u)=>(h,d)=>{const m=a(h)?h:r(h);if(s.has(d)){const g=t();return Promise.reject(g)}try{s.add(d)}catch{}return e(c,()=>c(m))?m.decodeAudioData(d).then(g=>(rh(d).catch(()=>{}),e(o,()=>o(g))||u(g),i.add(g),g)):new Promise((g,_)=>{const p=async()=>{try{await rh(d)}catch{}},f=y=>{_(y),p()};try{m.decodeAudioData(d,y=>{typeof y.copyFromChannel!="function"&&(l(y),Wc(y)),i.add(y),p().then(()=>g(y))},y=>{f(y===null?n():y)})}catch(y){f(y)}})},uy=(i,e,t,n,s,r,a,o)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=o(h);if(u===l){if(e.delete(c),!d&&a(c)){const m=n(c),{outputs:g}=t(c);for(const _ of g)if(Br(_)){const p=n(_[0]);i(m,p,_[1],_[2])}else{const p=s(_[0]);m.connect(p,_[1])}}}else e.set(c,u-l)},hy={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},dy=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...hy,...l},d=n(u,h),m=r(u),g=m?t(h.maxDelayTime):null;super(c,!1,d,g),this._delayTime=e(this,m,d.delayTime),a(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},fy=(i,e,t,n,s)=>r=>{const a=new WeakMap,o=async(c,l)=>{let u=t(c);const h=qt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return a.set(l,u),h?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await s(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},py=i=>(e,t,n,s)=>i(e[s],r=>r[0]===t&&r[1]===n),my=i=>(e,t)=>{i(e).delete(t)},gy=i=>"delayTime"in i,_y=(i,e,t)=>function n(s,r){const a=Vo(r)?r:t(i,r);if(gy(a))return[];if(s[0]===a)return[s];if(s.includes(a))return[];const{outputs:o}=e(a);return Array.from(o).map(c=>n([...s,a],c[0])).reduce((c,l)=>c.concat(l),[])},Mo=(i,e,t)=>{const n=e[t];if(n===void 0)throw i();return n},vy=i=>(e,t=void 0,n=void 0,s=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?Mo(i,e,t).disconnect():Ho(t)?n===void 0?e.forEach(r=>r.disconnect(t)):s===void 0?Mo(i,e,n).disconnect(t,0):Mo(i,e,n).disconnect(t,0,s):n===void 0?e.forEach(r=>r.disconnect(t)):Mo(i,e,n).disconnect(t,0),xy={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},yy=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...xy,...u},m=n(h,d),g=a(h),_=g?t():null;super(l,!1,m,_),this._attack=e(this,g,m.attack),this._knee=e(this,g,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=e(this,g,m.ratio),this._release=e(this,g,m.release),this._threshold=e(this,g,m.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Sy=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=qt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await i(c,o.attack,l.attack),await i(c,o.knee,l.knee),await i(c,o.ratio,l.ratio),await i(c,o.release,l.release),await i(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},My=()=>new DOMException("","EncodingError"),Ty=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),a=new Blob([e],{type:"application/javascript"}),o=URL.createObjectURL(a),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(o)};i.onerror=(u,h,d,m,g)=>{if(h===o||h===i.location.href&&d===1&&m===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,m,g)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=o,r.type="module",s.appendChild(r)}}),Ey=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,s)}},by=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},wy=i=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},Ay={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},Cy=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...Ay,...c},h=n(l,u),d=r(l),m=d?t():null;super(o,!1,h,m),this._gain=e(this,d,h.gain,Zt,en)}get gain(){return this._gain}},Ry=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=qt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await i(c,o.gain,l.gain):await n(c,o.gain,l.gain),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},Py=(i,e)=>t=>e(i,t),Dy=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},Ly=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},Ny=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Iy=i=>e=>i.get(e),Ot=()=>new DOMException("","InvalidStateError"),Oy=i=>e=>{const t=i.get(e);if(t===void 0)throw Ot();return t},Uy=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},Fy=i=>e=>{const t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},_a=()=>new DOMException("","InvalidAccessError"),ky=i=>{i.getFrequencyResponse=(e=>(t,n,s)=>{if(t.length!==n.length||n.length!==s.length)throw _a();return e.call(i,t,n,s)})(i.getFrequencyResponse)},By={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Vy=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u=s(l),h={...By,...c},d=e(l,u?null:o.baseLatency,h),m=u?t(h.feedback,h.feedforward):null;super(o,!1,d,m),ky(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},xd=(i,e,t,n,s,r,a,o,c,l,u)=>{const h=l.length;let d=o;for(let m=0;m<h;m+=1){let g=t[0]*l[m];for(let _=1;_<s;_+=1){const p=d-_&c-1;g+=t[_]*r[p],g-=i[_]*a[p]}for(let _=s;_<n;_+=1)g+=t[_]*r[d-_&c-1];for(let _=s;_<e;_+=1)g-=i[_]*a[d-_&c-1];r[d]=l[m],a[d]=g,d=d+1&c-1,u[m]=g}return d},zy=(i,e,t,n)=>{const s=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),a=s.length,o=r.length,c=Math.min(a,o);if(s[0]!==1){for(let g=0;g<a;g+=1)r[g]/=s[0];for(let g=1;g<o;g+=1)s[g]/=s[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),m=i.numberOfChannels;for(let g=0;g<m;g+=1){const _=i.getChannelData(g),p=d.getChannelData(g);u.fill(0),h.fill(0),xd(s,a,r,o,c,u,h,0,l,_,p)}return d},Gy=(i,e,t,n,s)=>(r,a)=>{const o=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,m=e(u);const g=qt(m,h);if(h.createIIRFilter===void 0?d=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(m=h.createIIRFilter(a,r)),o.set(h,d===null?m:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const p=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,p,p.destination);const f=await s(p);return zy(f,h,r,a)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,m),m};return{render(u,h){const d=o.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Hy=(i,e,t,n,s,r)=>a=>(o,c)=>{const l=i.get(o);if(l===void 0){if(!a&&r(o)){const u=n(o),{outputs:h}=t(o);for(const d of h)if(Br(d)){const m=n(d[0]);e(u,m,d[1],d[2])}else{const m=s(d[0]);u.disconnect(m,d[1])}}i.set(o,c)}else i.set(o,l+c)},Wy=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},qy=(i,e)=>t=>i.has(t)||e(t),Xy=(i,e)=>t=>i.has(t)||e(t),jy=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},Yy=i=>e=>i!==null&&e instanceof i,Zy=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,$y=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,Ky=(i,e)=>t=>i(t)||e(t),Qy=i=>e=>i!==null&&e instanceof i,Jy=i=>i!==null&&i.isSecureContext,eS=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},tS={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},nS=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r);if(n(o))throw new TypeError;const c={...tS,...a},l=e(o,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},iS=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},sS=(i,e,t)=>class extends i{constructor(s,r){const a=t(s),o=e(a,r);super(s,!0,o,null)}},rS=(i,e,t,n,s,r)=>class extends t{constructor(o,c){super(o),this._nativeContext=o,ma.set(this,o),n(o)&&s.set(o,new Set),this._destination=new i(this,c),this._listener=e(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?r(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},gr=i=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},oS=(i,e)=>(t,n,s)=>{const r=new Set;return t.connect=(a=>(o,c=0,l=0)=>{const u=r.size===0;if(e(o))return a.call(t,o,c,l),i(r,[o,c,l],h=>h[0]===o&&h[1]===c&&h[2]===l,!0),u&&n(),o;a.call(t,o,c),i(r,[o,c],h=>h[0]===o&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(a=>(o,c,l)=>{const u=r.size>0;if(o===void 0)a.apply(t),r.clear();else if(typeof o=="number"){a.call(t,o);for(const d of r)d[1]===o&&r.delete(d)}else{e(o)?a.call(t,o,c,l):a.call(t,o,c);for(const d of r)d[0]===o&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&s()})(t.disconnect),t},ht=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},Pt=(i,e)=>{ht(i,e,"channelCount"),ht(i,e,"channelCountMode"),ht(i,e,"channelInterpretation")},oh=i=>typeof i.getFloatTimeDomainData=="function",aS=i=>{i.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);i.getByteTimeDomainData(t);const n=Math.max(t.length,i.fftSize);for(let s=0;s<n;s+=1)e[s]=(t[s]-128)*.0078125;return e}},cS=(i,e)=>(t,n)=>{const s=t.createAnalyser();if(Pt(s,n),!(n.maxDecibels>n.minDecibels))throw e();return ht(s,n,"fftSize"),ht(s,n,"maxDecibels"),ht(s,n,"minDecibels"),ht(s,n,"smoothingTimeConstant"),i(oh,()=>oh(s))||aS(s),s},lS=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,gt=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},uS=i=>{i.start=(e=>{let t=!1;return(n=0,s=0,r)=>{if(t)throw Ot();e.call(i,n,s,r),t=!0}})(i.start)},jc=i=>{i.start=(e=>(t=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,s)})(i.start)},Yc=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},hS=(i,e,t,n,s,r,a,o,c,l,u)=>(h,d)=>{const m=h.createBufferSource();return Pt(m,d),gt(m,d,"playbackRate"),ht(m,d,"buffer"),ht(m,d,"loop"),ht(m,d,"loopEnd"),ht(m,d,"loopStart"),e(t,()=>t(h))||uS(m),e(n,()=>n(h))||c(m),e(s,()=>s(h))||l(m,h),e(r,()=>r(h))||jc(m),e(a,()=>a(h))||u(m,h),e(o,()=>o(h))||Yc(m),i(h,m),m},dS=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,fS=(i,e)=>(t,n,s)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const a=i(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelCountMode=c}),e(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>r.maxChannelCount}),a.connect(r),a},pS=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,mS=i=>{const{port1:e}=new MessageChannel;try{e.postMessage(i)}finally{e.close()}},gS=(i,e,t,n,s)=>(r,a,o,c,l,u)=>{if(o!==null)try{const h=new o(r,c,u),d=new Map;let m=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>m,set:g=>{typeof m=="function"&&h.removeEventListener("processorerror",m),m=typeof g=="function"?g:null,typeof m=="function"&&h.addEventListener("processorerror",m)}}}),h.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const p=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(p!==null){const f=d.get(_[1]);f!==void 0?_[1]=f:(_[1]=y=>{y.type==="error"?(Object.defineProperties(y,{type:{value:"processorerror"}}),p(y)):p(new ErrorEvent(_[0],{...y}))},d.set(p,_[1]))}}return g.call(h,"error",_[1],_[2]),g.call(h,..._)})(h.addEventListener),h.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const p=d.get(_[1]);p!==void 0&&(d.delete(_[1]),_[1]=p)}return g.call(h,"error",_[1],_[2]),g.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const g=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(g).connect(r.destination),s(h,()=>g.disconnect(),()=>g.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return mS(u),e(r,a,l,u)},yd=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),_S=i=>new Promise((e,t)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),t(r)},s.postMessage(i)}),vS=async(i,e)=>{const t=await _S(e);return new i(t)},xS=(i,e,t,n)=>{let s=Cc.get(i);s===void 0&&(s=new WeakMap,Cc.set(i,s));const r=vS(t,n);return s.set(e,r),r},yS=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>(m,g,_,p)=>{if(p.numberOfInputs===0&&p.numberOfOutputs===0)throw c();const f=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(f.some(K=>K<1))throw c();if(f.length!==p.numberOfOutputs)throw e();if(p.channelCountMode!=="explicit")throw c();const y=p.channelCount*p.numberOfInputs,v=f.reduce((K,te)=>K+te,0),w=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(y+w>6||v>6)throw c();const S=new MessageChannel,E=[],T=[];for(let K=0;K<p.numberOfInputs;K+=1)E.push(a(m,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),T.push(s(m,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const R=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:K,maxValue:te,minValue:Ie,name:ve}of _.parameterDescriptors){const A=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:p.parameterData[ve]!==void 0?p.parameterData[ve]:K===void 0?0:K});Object.defineProperties(A.offset,{defaultValue:{get:()=>K===void 0?0:K},maxValue:{get:()=>te===void 0?Zt:te},minValue:{get:()=>Ie===void 0?en:Ie}}),R.push(A)}const x=n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,y+w)}),b=yd(g,m.sampleRate),L=o(m,b,y+w,Math.max(1,v)),N=s(m,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),H=[];for(let K=0;K<p.numberOfOutputs;K+=1)H.push(n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:f[K]}));for(let K=0;K<p.numberOfInputs;K+=1){E[K].connect(T[K]);for(let te=0;te<p.channelCount;te+=1)T[K].connect(x,te,K*p.channelCount+te)}const D=new _d(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:K},te)=>{const Ie=R[te];return Ie.connect(x,0,y+te),Ie.start(0),[K,Ie.offset]}));x.connect(L);let O=p.channelInterpretation,U=null;const k=p.numberOfOutputs===0?[L]:H,W={get bufferSize(){return b},get channelCount(){return p.channelCount},set channelCount(K){throw t()},get channelCountMode(){return p.channelCountMode},set channelCountMode(K){throw t()},get channelInterpretation(){return O},set channelInterpretation(K){for(const te of E)te.channelInterpretation=K;O=K},get context(){return L.context},get inputs(){return E},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},get onprocessorerror(){return U},set onprocessorerror(K){typeof U=="function"&&W.removeEventListener("processorerror",U),U=typeof K=="function"?K:null,typeof U=="function"&&W.addEventListener("processorerror",U)},get parameters(){return D},get port(){return S.port2},addEventListener(...K){return L.addEventListener(K[0],K[1],K[2])},connect:i.bind(null,k),disconnect:l.bind(null,k),dispatchEvent(...K){return L.dispatchEvent(K[0])},removeEventListener(...K){return L.removeEventListener(K[0],K[1],K[2])}},z=new Map;S.port1.addEventListener=(K=>(...te)=>{if(te[0]==="message"){const Ie=typeof te[1]=="function"?te[1]:typeof te[1]=="object"&&te[1]!==null&&typeof te[1].handleEvent=="function"?te[1].handleEvent:null;if(Ie!==null){const ve=z.get(te[1]);ve!==void 0?te[1]=ve:(te[1]=A=>{u(m.currentTime,m.sampleRate,()=>Ie(A))},z.set(Ie,te[1]))}}return K.call(S.port1,te[0],te[1],te[2])})(S.port1.addEventListener),S.port1.removeEventListener=(K=>(...te)=>{if(te[0]==="message"){const Ie=z.get(te[1]);Ie!==void 0&&(z.delete(te[1]),te[1]=Ie)}return K.call(S.port1,te[0],te[1],te[2])})(S.port1.removeEventListener);let q=null;Object.defineProperty(S.port1,"onmessage",{get:()=>q,set:K=>{typeof q=="function"&&S.port1.removeEventListener("message",q),q=typeof K=="function"?K:null,typeof q=="function"&&(S.port1.addEventListener("message",q),S.port1.start())}}),_.prototype.port=S.port1;let $=null;xS(m,W,_,p).then(K=>$=K);const j=qo(p.numberOfInputs,p.channelCount),Q=qo(p.numberOfOutputs,f),ee=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((K,{name:te})=>({...K,[te]:new Float32Array(128)}),{});let he=!0;const me=()=>{p.numberOfOutputs>0&&L.disconnect(N);for(let K=0,te=0;K<p.numberOfOutputs;K+=1){const Ie=H[K];for(let ve=0;ve<f[K];ve+=1)N.disconnect(Ie,te+ve,ve);te+=f[K]}},se=new Map;L.onaudioprocess=({inputBuffer:K,outputBuffer:te})=>{if($!==null){const Ie=h(W);for(let ve=0;ve<b;ve+=128){for(let A=0;A<p.numberOfInputs;A+=1)for(let M=0;M<p.channelCount;M+=1)Wo(K,j[A],M,M,ve);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:A},M)=>{Wo(K,ee,A,y+M,ve)});for(let A=0;A<p.numberOfInputs;A+=1)for(let M=0;M<f[A];M+=1)Q[A][M].byteLength===0&&(Q[A][M]=new Float32Array(128));try{const A=j.map((V,ne)=>{if(Ie[ne].size>0)return se.set(ne,b/128),V;const re=se.get(ne);return re===void 0?[]:(V.every(Se=>Se.every(fe=>fe===0))&&(re===1?se.delete(ne):se.set(ne,re-1)),V)});he=u(m.currentTime+ve/m.sampleRate,m.sampleRate,()=>$.process(A,Q,ee));for(let V=0,ne=0;V<p.numberOfOutputs;V+=1){for(let ie=0;ie<f[V];ie+=1)vd(te,Q[V],ie,ne+ie,ve);ne+=f[V]}}catch(A){he=!1,W.dispatchEvent(new ErrorEvent("processorerror",{colno:A.colno,filename:A.filename,lineno:A.lineno,message:A.message}))}if(!he){for(let A=0;A<p.numberOfInputs;A+=1){E[A].disconnect(T[A]);for(let M=0;M<p.channelCount;M+=1)T[ve].disconnect(x,M,A*p.channelCount+M)}if(_.parameterDescriptors!==void 0){const A=_.parameterDescriptors.length;for(let M=0;M<A;M+=1){const V=R[M];V.disconnect(x,0,y+M),V.stop()}}x.disconnect(L),L.onaudioprocess=null,Ce?me():G();break}}}};let Ce=!1;const Me=a(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),ke=()=>L.connect(Me).connect(m.destination),G=()=>{L.disconnect(Me),Me.disconnect()},At=()=>{if(he){G(),p.numberOfOutputs>0&&L.connect(N);for(let K=0,te=0;K<p.numberOfOutputs;K+=1){const Ie=H[K];for(let ve=0;ve<f[K];ve+=1)N.connect(Ie,te+ve,ve);te+=f[K]}}Ce=!0},be=()=>{he&&(ke(),me()),Ce=!1};return ke(),d(W,At,be)},Sd=(i,e)=>{const t=i.createBiquadFilter();return Pt(t,e),gt(t,e,"Q"),gt(t,e,"detune"),gt(t,e,"frequency"),gt(t,e,"gain"),ht(t,e,"type"),t},SS=(i,e)=>(t,n)=>{const s=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,s),Pt(s,n),s},MS=i=>{const e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw Ot()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw Ot()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw Ot()}})},Vr=(i,e)=>{const t=i.createChannelSplitter(e.numberOfOutputs);return Pt(t,e),MS(t),t},TS=(i,e,t,n,s)=>(r,a)=>{if(r.createConstantSource===void 0)return t(r,a);const o=r.createConstantSource();return Pt(o,a),gt(o,a,"offset"),e(n,()=>n(r))||jc(o),e(s,()=>s(r))||Yc(o),i(r,o),o},tr=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),ES=(i,e,t,n)=>(s,{offset:r,...a})=>{const o=s.createBuffer(1,2,44100),c=e(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(s,{...a,gain:r}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),m=()=>c.disconnect(l);return i(s,c),n(tr(h,l),d,m)},bS=(i,e)=>(t,n)=>{const s=t.createConvolver();if(Pt(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),ht(s,n,"buffer"),n.channelCount>2||(e(s,"channelCount",r=>()=>r.call(s),r=>a=>{if(a>2)throw i();return r.call(s,a)}),n.channelCountMode==="max"))throw i();return e(s,"channelCountMode",r=>()=>r.call(s),r=>a=>{if(a==="max")throw i();return r.call(s,a)}),s},Md=(i,e)=>{const t=i.createDelay(e.maxDelayTime);return Pt(t,e),gt(t,e,"delayTime"),t},wS=i=>(e,t)=>{const n=e.createDynamicsCompressor();if(Pt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return gt(n,t,"attack"),gt(n,t,"knee"),gt(n,t,"ratio"),gt(n,t,"release"),gt(n,t,"threshold"),n},on=(i,e)=>{const t=i.createGain();return Pt(t,e),gt(t,e,"gain"),t},AS=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);const s=e.createIIRFilter(n.feedforward,n.feedback);return Pt(s,n),s};function CS(i,e){const t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function RS(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function ah(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=RS(t,e),t[0]+=i[n];return t}const PS=(i,e,t,n)=>(s,r,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=yd(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),m=u instanceof Float64Array?u:new Float64Array(u),g=d.length,_=m.length,p=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(m[0]===0)throw e();if(d[0]!==1){for(let R=0;R<_;R+=1)m[R]/=d[0];for(let R=1;R<g;R+=1)d[R]/=d[0]}const f=t(s,h,a,a);f.channelCount=a,f.channelCountMode=o,f.channelInterpretation=c;const y=32,v=[],w=[],S=[];for(let R=0;R<a;R+=1){v.push(0);const x=new Float32Array(y),b=new Float32Array(y);x.fill(0),b.fill(0),w.push(x),S.push(b)}f.onaudioprocess=R=>{const x=R.inputBuffer,b=R.outputBuffer,L=x.numberOfChannels;for(let N=0;N<L;N+=1){const H=x.getChannelData(N),D=b.getChannelData(N);v[N]=xd(d,g,m,_,p,w[N],S[N],v[N],y,H,D)}};const E=s.sampleRate/2;return tr({get bufferSize(){return h},get channelCount(){return f.channelCount},set channelCount(R){f.channelCount=R},get channelCountMode(){return f.channelCountMode},set channelCountMode(R){f.channelCountMode=R},get channelInterpretation(){return f.channelInterpretation},set channelInterpretation(R){f.channelInterpretation=R},get context(){return f.context},get inputs(){return[f]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},addEventListener(...R){return f.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return f.dispatchEvent(R[0])},getFrequencyResponse(R,x,b){if(R.length!==x.length||x.length!==b.length)throw i();const L=R.length;for(let N=0;N<L;N+=1){const H=-Math.PI*(R[N]/E),D=[Math.cos(H),Math.sin(H)],O=ah(m,D),U=ah(d,D),k=CS(O,U);x[N]=Math.sqrt(k[0]*k[0]+k[1]*k[1]),b[N]=Math.atan2(k[1],k[0])}},removeEventListener(...R){return f.removeEventListener(R[0],R[1],R[2])}},f)},DS=(i,e)=>i.createMediaElementSource(e.mediaElement),LS=(i,e)=>{const t=i.createMediaStreamDestination();return Pt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},NS=(i,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,a)=>r.id<a.id?-1:r.id>a.id?1:0);const n=t.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:e}),s},IS=(i,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=t.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(e(t))throw new TypeError;return r},OS=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,US=(i,e,t,n,s,r)=>(a,o)=>{const c=a.createOscillator();return Pt(c,o),gt(c,o,"detune"),gt(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):ht(c,o,"type"),e(t,()=>t(a))||jc(c),e(n,()=>n(a))||r(c,a),e(s,()=>s(a))||Yc(c),i(a,c),c},FS=i=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?i(e,t):(Pt(n,t),gt(n,t,"orientationX"),gt(n,t,"orientationY"),gt(n,t,"orientationZ"),gt(n,t,"positionX"),gt(n,t,"positionY"),gt(n,t,"positionZ"),ht(n,t,"coneInnerAngle"),ht(n,t,"coneOuterAngle"),ht(n,t,"coneOuterGain"),ht(n,t,"distanceModel"),ht(n,t,"maxDistance"),ht(n,t,"panningModel"),ht(n,t,"refDistance"),ht(n,t,"rolloffFactor"),n)},kS=(i,e,t,n,s,r,a,o,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:m,distanceModel:g,maxDistance:_,orientationX:p,orientationY:f,orientationZ:y,panningModel:v,positionX:w,positionY:S,positionZ:E,refDistance:T,rolloffFactor:R,...x})=>{const b=u.createPanner();if(x.channelCount>2||x.channelCountMode==="max")throw a();Pt(b,x);const L={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},N=t(u,{...L,channelInterpretation:"speakers",numberOfInputs:6}),H=n(u,{...x,gain:1}),D=n(u,{...L,gain:1}),O=n(u,{...L,gain:0}),U=n(u,{...L,gain:0}),k=n(u,{...L,gain:0}),W=n(u,{...L,gain:0}),z=n(u,{...L,gain:0}),q=s(u,256,6,1),$=r(u,{...L,curve:new Float32Array([1,1]),oversample:"none"});let J=[p,f,y],j=[w,S,E];const Q=new Float32Array(1);q.onaudioprocess=({inputBuffer:se})=>{const Ce=[c(se,Q,0),c(se,Q,1),c(se,Q,2)];Ce.some((ke,G)=>ke!==J[G])&&(b.setOrientation(...Ce),J=Ce);const Me=[c(se,Q,3),c(se,Q,4),c(se,Q,5)];Me.some((ke,G)=>ke!==j[G])&&(b.setPosition(...Me),j=Me)},Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(W.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0});const ee={get bufferSize(){},get channelCount(){return b.channelCount},set channelCount(se){if(se>2)throw a();H.channelCount=se,b.channelCount=se},get channelCountMode(){return b.channelCountMode},set channelCountMode(se){if(se==="max")throw a();H.channelCountMode=se,b.channelCountMode=se},get channelInterpretation(){return b.channelInterpretation},set channelInterpretation(se){H.channelInterpretation=se,b.channelInterpretation=se},get coneInnerAngle(){return b.coneInnerAngle},set coneInnerAngle(se){b.coneInnerAngle=se},get coneOuterAngle(){return b.coneOuterAngle},set coneOuterAngle(se){b.coneOuterAngle=se},get coneOuterGain(){return b.coneOuterGain},set coneOuterGain(se){if(se<0||se>1)throw e();b.coneOuterGain=se},get context(){return b.context},get distanceModel(){return b.distanceModel},set distanceModel(se){b.distanceModel=se},get inputs(){return[H]},get maxDistance(){return b.maxDistance},set maxDistance(se){if(se<0)throw new RangeError;b.maxDistance=se},get numberOfInputs(){return b.numberOfInputs},get numberOfOutputs(){return b.numberOfOutputs},get orientationX(){return D.gain},get orientationY(){return O.gain},get orientationZ(){return U.gain},get panningModel(){return b.panningModel},set panningModel(se){b.panningModel=se},get positionX(){return k.gain},get positionY(){return W.gain},get positionZ(){return z.gain},get refDistance(){return b.refDistance},set refDistance(se){if(se<0)throw new RangeError;b.refDistance=se},get rolloffFactor(){return b.rolloffFactor},set rolloffFactor(se){if(se<0)throw new RangeError;b.rolloffFactor=se},addEventListener(...se){return H.addEventListener(se[0],se[1],se[2])},dispatchEvent(...se){return H.dispatchEvent(se[0])},removeEventListener(...se){return H.removeEventListener(se[0],se[1],se[2])}};h!==ee.coneInnerAngle&&(ee.coneInnerAngle=h),d!==ee.coneOuterAngle&&(ee.coneOuterAngle=d),m!==ee.coneOuterGain&&(ee.coneOuterGain=m),g!==ee.distanceModel&&(ee.distanceModel=g),_!==ee.maxDistance&&(ee.maxDistance=_),p!==ee.orientationX.value&&(ee.orientationX.value=p),f!==ee.orientationY.value&&(ee.orientationY.value=f),y!==ee.orientationZ.value&&(ee.orientationZ.value=y),v!==ee.panningModel&&(ee.panningModel=v),w!==ee.positionX.value&&(ee.positionX.value=w),S!==ee.positionY.value&&(ee.positionY.value=S),E!==ee.positionZ.value&&(ee.positionZ.value=E),T!==ee.refDistance&&(ee.refDistance=T),R!==ee.rolloffFactor&&(ee.rolloffFactor=R),(J[0]!==1||J[1]!==0||J[2]!==0)&&b.setOrientation(...J),(j[0]!==0||j[1]!==0||j[2]!==0)&&b.setPosition(...j);const he=()=>{H.connect(b),i(H,$,0,0),$.connect(D).connect(N,0,0),$.connect(O).connect(N,0,1),$.connect(U).connect(N,0,2),$.connect(k).connect(N,0,3),$.connect(W).connect(N,0,4),$.connect(z).connect(N,0,5),N.connect(q).connect(u.destination)},me=()=>{H.disconnect(b),o(H,$,0,0),$.disconnect(D),D.disconnect(N),$.disconnect(O),O.disconnect(N),$.disconnect(U),U.disconnect(N),$.disconnect(k),k.disconnect(N),$.disconnect(W),W.disconnect(N),$.disconnect(z),z.disconnect(N),N.disconnect(q),q.disconnect(u.destination)};return l(tr(ee,b),he,me)},BS=i=>(e,{disableNormalization:t,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),a=s instanceof Float32Array?s:new Float32Array(s),o=e.createPeriodicWave(a,r,{disableNormalization:t});if(Array.from(n).length<2)throw i();return o},zr=(i,e,t,n)=>i.createScriptProcessor(e,t,n),VS=(i,e)=>(t,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);const r=t.createStereoPanner();return Pt(r,n),gt(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:a=>{if(a!==s)throw e()}}),r},zS=(i,e,t,n,s,r)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,_,p,f)=>{const y=new Float32Array(16385),v=new Float32Array(16385);for(let x=0;x<16385;x+=1){const b=x/16384*c;y[x]=Math.cos(b),v[x]=Math.sin(b)}const w=t(g,{...l,gain:0}),S=n(g,{...u,curve:y}),E=n(g,{...u,curve:o}),T=t(g,{...l,gain:0}),R=n(g,{...u,curve:v});return{connectGraph(){_.connect(w),_.connect(E.inputs===void 0?E:E.inputs[0]),_.connect(T),E.connect(p),p.connect(S.inputs===void 0?S:S.inputs[0]),p.connect(R.inputs===void 0?R:R.inputs[0]),S.connect(w.gain),R.connect(T.gain),w.connect(f,0,0),T.connect(f,0,1)},disconnectGraph(){_.disconnect(w),_.disconnect(E.inputs===void 0?E:E.inputs[0]),_.disconnect(T),E.disconnect(p),p.disconnect(S.inputs===void 0?S:S.inputs[0]),p.disconnect(R.inputs===void 0?R:R.inputs[0]),S.disconnect(w.gain),R.disconnect(T.gain),w.disconnect(f,0,0),T.disconnect(f,0,1)}}},d=(g,_,p,f)=>{const y=new Float32Array(16385),v=new Float32Array(16385),w=new Float32Array(16385),S=new Float32Array(16385),E=Math.floor(16385/2);for(let k=0;k<16385;k+=1)if(k>E){const W=(k-E)/(16384-E)*c;y[k]=Math.cos(W),v[k]=Math.sin(W),w[k]=0,S[k]=1}else{const W=k/(16384-E)*c;y[k]=1,v[k]=0,w[k]=Math.cos(W),S[k]=Math.sin(W)}const T=e(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),R=t(g,{...l,gain:0}),x=n(g,{...u,curve:y}),b=t(g,{...l,gain:0}),L=n(g,{...u,curve:v}),N=n(g,{...u,curve:o}),H=t(g,{...l,gain:0}),D=n(g,{...u,curve:w}),O=t(g,{...l,gain:0}),U=n(g,{...u,curve:S});return{connectGraph(){_.connect(T),_.connect(N.inputs===void 0?N:N.inputs[0]),T.connect(R,0),T.connect(b,0),T.connect(H,1),T.connect(O,1),N.connect(p),p.connect(x.inputs===void 0?x:x.inputs[0]),p.connect(L.inputs===void 0?L:L.inputs[0]),p.connect(D.inputs===void 0?D:D.inputs[0]),p.connect(U.inputs===void 0?U:U.inputs[0]),x.connect(R.gain),L.connect(b.gain),D.connect(H.gain),U.connect(O.gain),R.connect(f,0,0),H.connect(f,0,0),b.connect(f,0,1),O.connect(f,0,1)},disconnectGraph(){_.disconnect(T),_.disconnect(N.inputs===void 0?N:N.inputs[0]),T.disconnect(R,0),T.disconnect(b,0),T.disconnect(H,1),T.disconnect(O,1),N.disconnect(p),p.disconnect(x.inputs===void 0?x:x.inputs[0]),p.disconnect(L.inputs===void 0?L:L.inputs[0]),p.disconnect(D.inputs===void 0?D:D.inputs[0]),p.disconnect(U.inputs===void 0?U:U.inputs[0]),x.disconnect(R.gain),L.disconnect(b.gain),D.disconnect(H.gain),U.disconnect(O.gain),R.disconnect(f,0,0),H.disconnect(f,0,0),b.disconnect(f,0,1),O.disconnect(f,0,1)}}},m=(g,_,p,f,y)=>{if(_===1)return h(g,p,f,y);if(_===2)return d(g,p,f,y);throw s()};return(g,{channelCount:_,channelCountMode:p,pan:f,...y})=>{if(p==="max")throw s();const v=i(g,{...y,channelCount:1,channelCountMode:p,numberOfInputs:2}),w=t(g,{...y,channelCount:_,channelCountMode:p,gain:1}),S=t(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:f});let{connectGraph:E,disconnectGraph:T}=m(g,_,w,S,v);Object.defineProperty(S.gain,"defaultValue",{get:()=>0}),Object.defineProperty(S.gain,"maxValue",{get:()=>1}),Object.defineProperty(S.gain,"minValue",{get:()=>-1});const R={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(N){w.channelCount!==N&&(x&&T(),{connectGraph:E,disconnectGraph:T}=m(g,N,w,S,v),x&&E()),w.channelCount=N},get channelCountMode(){return w.channelCountMode},set channelCountMode(N){if(N==="clamped-max"||N==="max")throw s();w.channelCountMode=N},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(N){w.channelInterpretation=N},get context(){return w.context},get inputs(){return[w]},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get pan(){return S.gain},addEventListener(...N){return w.addEventListener(N[0],N[1],N[2])},dispatchEvent(...N){return w.dispatchEvent(N[0])},removeEventListener(...N){return w.removeEventListener(N[0],N[1],N[2])}};let x=!1;const b=()=>{E(),x=!0},L=()=>{T(),x=!1};return r(tr(R,v),b,L)}},GS=(i,e,t,n,s,r,a)=>(o,c)=>{const l=o.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return t(o,c);Pt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();ht(l,{curve:u},"curve"),ht(l,c,"oversample");let h=null,d=!1;return a(l,"curve",_=>()=>_.call(l),_=>p=>(_.call(l,p),d&&(n(p)&&h===null?h=i(o,l):!n(p)&&h!==null&&(h(),h=null)),p)),s(l,()=>{d=!0,n(l.curve)&&(h=i(o,l))},()=>{d=!1,h!==null&&(h(),h=null)})},HS=(i,e,t,n,s)=>(r,{curve:a,oversample:o,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Pt(l,c),Pt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),m=t(r,{...c,gain:1}),g=t(r,{...c,gain:-1});let _=null,p=!1,f=null;const y={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(S){h.channelCount=S,d.channelCount=S,l.channelCount=S,m.channelCount=S,u.channelCount=S,g.channelCount=S},get channelCountMode(){return l.channelCountMode},set channelCountMode(S){h.channelCountMode=S,d.channelCountMode=S,l.channelCountMode=S,m.channelCountMode=S,u.channelCountMode=S,g.channelCountMode=S},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(S){h.channelInterpretation=S,d.channelInterpretation=S,l.channelInterpretation=S,m.channelInterpretation=S,u.channelInterpretation=S,g.channelInterpretation=S},get context(){return l.context},get curve(){return f},set curve(S){if(S!==null&&S.length<2)throw e();if(S===null)l.curve=S,u.curve=S;else{const E=S.length,T=new Float32Array(E+2-E%2),R=new Float32Array(E+2-E%2);T[0]=S[0],R[0]=-S[E-1];const x=Math.ceil((E+1)/2),b=(E+1)/2-1;for(let L=1;L<x;L+=1){const N=L/x*b,H=Math.floor(N),D=Math.ceil(N);T[L]=H===D?S[H]:(1-(N-H))*S[H]+(1-(D-N))*S[D],R[L]=H===D?-S[E-1-H]:-((1-(N-H))*S[E-1-H])-(1-(D-N))*S[E-1-D]}T[x]=E%2===1?S[x-1]:(S[x-2]+S[x-1])/2,l.curve=T,u.curve=R}f=S,p&&(n(f)&&_===null?_=i(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(S){l.oversample=S,u.oversample=S},addEventListener(...S){return h.addEventListener(S[0],S[1],S[2])},dispatchEvent(...S){return h.dispatchEvent(S[0])},removeEventListener(...S){return h.removeEventListener(S[0],S[1],S[2])}};a!==null&&(y.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==y.oversample&&(y.oversample=o);const v=()=>{h.connect(l).connect(m),h.connect(d).connect(u).connect(g).connect(m),p=!0,n(f)&&(_=i(r,h))},w=()=>{h.disconnect(l),l.disconnect(m),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(m),p=!1,_!==null&&(_(),_=null)};return s(tr(y,m),v,w)},Qt=()=>new DOMException("","NotSupportedError"),WS={numberOfChannels:1},qS=(i,e,t,n,s)=>class extends i{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...WS,...l},m=n(h,u,d);e(gr,()=>gr(m))||m.addEventListener("statechange",(()=>{let g=0;const _=p=>{this._state==="running"&&(g>0?(m.removeEventListener("statechange",_),p.stopImmediatePropagation(),this._waitForThePromiseToSettle(p)):g+=1)};return _})()),super(m,h),this._length=u,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,fd(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},XS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},jS=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...XS,...l},d=t(u,h),m=r(u),g=m?n():null,_=c.sampleRate/2;super(c,!1,d,g),this._detune=e(this,m,d.detune,153600,-153600),this._frequency=e(this,m,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Ys(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),ai(this)&&Fr(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},YS=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null,c=null;const l=async(u,h)=>{let d=t(u);const m=qt(d,h);if(!m){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:a===null?void 0:a,type:d.type};d=e(h,g),o!==null&&d.start(o),c!==null&&d.stop(c)}return r.set(h,d),m?(await i(h,u.detune,d.detune),await i(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await s(u,h,d),d};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},ZS={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},$S=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...ZS,...l},d=t(u,h),m=r(u),g=m?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=e(this,m,d.orientationX,Zt,en),this._orientationY=e(this,m,d.orientationY,Zt,en),this._orientationZ=e(this,m,d.orientationZ,Zt,en),this._positionX=e(this,m,d.positionX,Zt,en),this._positionY=e(this,m,d.positionY,Zt,en),this._positionZ=e(this,m,d.positionZ,Zt,en),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},KS=(i,e,t,n,s,r,a,o,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(m,g)=>{let _=null,p=r(m);const f={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation},y={...f,coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,panningModel:p.panningModel,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor},v=qt(p,g);if("bufferSize"in p)_=n(g,{...f,gain:1});else if(!v){const w={...y,orientationX:p.orientationX.value,orientationY:p.orientationY.value,orientationZ:p.orientationZ.value,positionX:p.positionX.value,positionY:p.positionY.value,positionZ:p.positionZ.value};p=s(g,w)}if(u.set(g,_===null?p:_),_!==null){if(h===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const L=new a(6,m.context.length,g.sampleRate),N=e(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});N.connect(L.destination),h=(async()=>{const H=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(D,O)=>{const U=t(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:O===0?1:0});return await o(L,D,U.offset),U}));for(let D=0;D<6;D+=1)H[D].connect(N,0,D),H[D].start(0);return l(L)})()}const w=await h,S=n(g,{...f,gain:1});await c(m,g,S);const E=[];for(let L=0;L<w.numberOfChannels;L+=1)E.push(w.getChannelData(L));let T=[E[0][0],E[1][0],E[2][0]],R=[E[3][0],E[4][0],E[5][0]],x=n(g,{...f,gain:1}),b=s(g,{...y,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:R[0],positionY:R[1],positionZ:R[2]});S.connect(x).connect(b.inputs[0]),b.connect(_);for(let L=128;L<w.length;L+=128){const N=[E[0][L],E[1][L],E[2][L]],H=[E[3][L],E[4][L],E[5][L]];if(N.some((D,O)=>D!==T[O])||H.some((D,O)=>D!==R[O])){T=N,R=H;const D=L/g.sampleRate;x.gain.setValueAtTime(0,D),x=n(g,{...f,gain:0}),b=s(g,{...y,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:R[0],positionY:R[1],positionZ:R[2]}),x.gain.setValueAtTime(1,D),S.connect(x).connect(b.inputs[0]),b.connect(_)}}return _}return v?(await i(g,m.orientationX,p.orientationX),await i(g,m.orientationY,p.orientationY),await i(g,m.orientationZ,p.orientationZ),await i(g,m.positionX,p.positionX),await i(g,m.positionY,p.positionY),await i(g,m.positionZ,p.positionZ)):(await o(g,m.orientationX,p.orientationX),await o(g,m.orientationY,p.orientationY),await o(g,m.orientationZ,p.orientationZ),await o(g,m.positionX,p.positionX),await o(g,m.positionY,p.positionY),await o(g,m.positionZ,p.positionZ)),er(p)?await c(m,g,p.inputs[0]):await c(m,g,p),p};return{render(m,g){const _=u.get(g);return _!==void 0?Promise.resolve(_):d(m,g)}}},QS={disableNormalization:!1},JS=(i,e,t,n)=>class Td{constructor(r,a){const o=e(r),c=n({...QS,...a}),l=i(o,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===Td.prototype||t.has(r)}},eM=(i,e)=>(t,n,s)=>(i(n).replay(s),e(n,t,s)),tM=(i,e,t)=>async(n,s,r)=>{const a=i(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const d=await e(l).render(l,s),m=n.context.destination;!t(l)&&(n!==m||!t(n))&&d.connect(r,u,c)})).reduce((o,c)=>[...o,...c],[]))},nM=(i,e,t)=>async(n,s,r)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await i(o).render(o,s);t(o)||u.connect(r,c)}))},iM=(i,e,t,n)=>s=>i(gr,()=>gr(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const a=t(s,512,0,1);s.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>s.currentTime,a.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const a=e(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=o=>{a.disconnect(),r(o.renderedBuffer)},a.connect(s.destination),s.startRendering()}),sM=i=>(e,t)=>{i.set(e,t)},rM=i=>(e,t)=>i.set(e,t),oM=(i,e,t,n,s,r,a,o)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>s(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),Wc(u)):e(r,()=>r(u))||o(u),i.add(u),u)),aM={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},cM=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...aM,...c},h=t(l,u),d=r(l),m=d?n():null;super(o,!1,h,m),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},lM=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=qt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await i(c,o.pan,l.pan):await n(c,o.pan,l.pan),er(l)?await s(o,c,l.inputs[0]):await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},uM=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},hM=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),s=URL.createObjectURL(t);let r=!1,a=!1;try{await n.audioWorklet.addModule(s);const o=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>r=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!a},dM=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{t.oncomplete=()=>{n.disconnect(),s(t.currentTime!==0)},t.startRendering()})},fM=()=>new DOMException("","UnknownError"),pM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},mM=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...pM,...l},d=t(u,h),g=r(u)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},gM=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!qt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=i(a,l)}return n.set(a,o),er(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},_M=()=>typeof window>"u"?null:window,vM=(i,e)=>t=>{t.copyFromChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)n[h]=l[h+a]},t.copyToChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)l[h+a]=n[h]}},xM=i=>e=>{e.copyFromChannel=(t=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<e.length)return t.call(e,n,o,a)})(e.copyFromChannel),e.copyToChannel=(t=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<e.length)return t.call(e,n,o,a)})(e.copyToChannel)},yM=i=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",s=>()=>{const r=s.call(e);return r===n?null:r},s=>r=>s.call(e,r===null?n:r))},SM=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=t.createBufferSource();e(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},Ed=(i,e,t)=>i.copyFromChannel===void 0?i.getChannelData(t)[0]:(i.copyFromChannel(e,t),e[0]),bd=i=>{if(i===null)return!1;const e=i.length;return e%2!==0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},Gr=(i,e,t,n)=>{let s=i;for(;!s.hasOwnProperty(e);)s=Object.getPrototypeOf(s);const{get:r,set:a}=Object.getOwnPropertyDescriptor(s,e);Object.defineProperty(i,e,{get:t(r),set:n(a)})},MM=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),TM=i=>({...i,channelCount:i.numberOfOutputs}),EM=i=>{const{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},wd=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;wd(i,e,t+1e-7)}},bM=i=>{const e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},wM=i=>{const e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},AM=i=>{const e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Zc=i=>{const e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Ad=i=>{const e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},$c=i=>{const e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},CM=i=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(i)}finally{e.close(),t.close()}},RM=i=>{i.start=(e=>(t=0,n=0,s)=>{const r=i.buffer,a=r===null?n:Math.min(r.duration,n);r!==null&&a>r.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,a,s)})(i.start)},Cd=(i,e)=>{const t=e.createGain();i.connect(t);const n=(s=>()=>{s.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),tr(i,t),i.stop=(s=>{let r=!1;return(a=0)=>{if(r)try{s.call(i,a)}catch{t.gain.setValueAtTime(0,a)}else s.call(i,a),r=!0}})(i.stop)},nr=(i,e)=>t=>{const n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},PM=$0(ls),DM=nx(ls),LM=py(ga),Rd=new WeakMap,NM=Ly(Rd),Un=Wx(new Map,new WeakMap),Gn=_M(),Pd=cS(Un,qn),Kc=Dy($t),Bt=tM($t,Kc,ns),IM=ax(Pd,at,Bt),st=Oy(ma),di=OS(Gn),it=Qy(di),Dd=new WeakMap,Ld=Ey(nr),Hr=dS(Gn),Qc=Yy(Hr),Jc=Zy(Gn),Nd=$y(Gn),_r=pS(Gn),Tt=Lx(K0(od),tx(PM,DM,zo,LM,Go,$t,NM,Ur,at,ls,ai,ns,Co),Un,Hy(wc,Go,$t,at,mr,ai),qn,_a,Qt,uy(zo,wc,$t,at,mr,st,ai,it),_y(Dd,$t,On),Ld,st,Qc,Jc,Nd,it,_r),OM=ox(Tt,IM,qn,Pd,st,it),el=new WeakSet,ch=lS(Gn),Id=iy(new Uint32Array(1)),tl=vM(Id,qn),nl=xM(Id),Od=lx(el,Un,Qt,ch,di,uM(ch),tl,nl),va=ix(on),Ud=nM(Kc,kr,ns),Xn=Kx(Ud),ir=hS(va,Un,bM,wM,AM,Zc,Ad,$c,RM,yM(Gr),Cd),jn=eM(Ny(kr),Ud),UM=dx(Xn,ir,at,jn,Bt),Fn=Nx(Q0(ad),Dd,Hc,Ix,W0,q0,X0,j0,Y0,Tc,sd,Hr,wd),FM=hx(Tt,UM,Fn,Ot,ir,st,it,nr),kM=Sx(Tt,Mx,qn,Ot,fS(on,Gr),st,it,Bt),BM=Hx(Xn,Sd,at,jn,Bt),us=rM(Rd),VM=Gx(Tt,Fn,BM,_a,Sd,st,it,us),Oi=oS(ls,Jc),zM=SM(Ot,Oi),Ui=SS(Hr,zM),GM=jx(Ui,at,Bt),HM=Xx(Tt,GM,Ui,st,it),WM=$x(Vr,at,Bt),qM=Zx(Tt,WM,Vr,st,it,TM),XM=ES(va,ir,on,Oi),sr=TS(va,Un,XM,Zc,$c),jM=ny(Xn,sr,at,jn,Bt),YM=ty(Tt,Fn,jM,sr,st,it,nr),Fd=bS(Qt,Gr),ZM=oy(Fd,at,Bt),$M=ry(Tt,ZM,Fd,st,it,us),KM=fy(Xn,Md,at,jn,Bt),QM=dy(Tt,Fn,KM,Md,st,it,us),kd=wS(Qt),JM=Sy(Xn,kd,at,jn,Bt),eT=yy(Tt,Fn,JM,kd,Qt,st,it,us),tT=Ry(Xn,on,at,jn,Bt),nT=Cy(Tt,Fn,tT,on,st,it),iT=PS(_a,Ot,zr,Qt),xa=iM(Un,on,zr,dM(on,di)),sT=Gy(ir,at,di,Bt,xa),rT=AS(iT),oT=Vy(Tt,rT,sT,st,it,us),aT=Tx(Fn,Ui,sr,zr,Qt,Ed,it,Gr),Bd=new WeakMap,cT=rS(kM,aT,Ld,it,Bd,nr),Vd=US(va,Un,Zc,Ad,$c,Cd),lT=YS(Xn,Vd,at,jn,Bt),uT=jS(Tt,Fn,Vd,lT,st,it,nr),zd=Jx(ir),hT=HS(zd,Ot,on,bd,Oi),ya=GS(zd,Ot,hT,bd,Oi,Hr,Gr),dT=kS(zo,Ot,Ui,on,zr,ya,Qt,Go,Ed,Oi),Gd=FS(dT),fT=KS(Xn,Ui,sr,on,Gd,at,di,jn,Bt,xa),pT=$S(Tt,Fn,Gd,fT,st,it,us),mT=BS(qn),gT=JS(mT,st,new WeakSet,EM),_T=zS(Ui,Vr,on,ya,Qt,Oi),Hd=VS(_T,Qt),vT=lM(Xn,Hd,at,jn,Bt),xT=cM(Tt,Fn,Hd,vT,st,it),yT=gM(ya,at,Bt),ST=mM(Tt,Ot,ya,yT,st,it,us),Wd=Jy(Gn),il=by(Gn),qd=new WeakMap,MT=Uy(qd,di),TT=Wd?ex(Un,Qt,Ty(Gn),il,wy(Z0),st,MT,it,_r,new WeakMap,new WeakMap,hM(_r,di),Gn):void 0,ET=Ky(Qc,it),bT=ly(el,Un,cy,My,new WeakSet,st,ET,Bo,gr,tl,nl),Xd=Vx(TT,OM,Od,FM,VM,HM,qM,YM,$M,bT,QM,eT,nT,oT,cT,uT,pT,gT,xT,ST),wT=eS(Tt,DS,st,it),AT=nS(Tt,LS,st,it),CT=iS(Tt,NS,st,it),RT=IS(Ot,it),PT=sS(Tt,RT,st),DT=yx(Xd,Ot,Qt,fM,wT,AT,CT,PT,Hr),sl=Fy(Bd),LT=sx(sl),jd=Qx(qn),NT=my(sl),Yd=vy(qn),Zd=new WeakMap,IT=Py(Zd,On),OT=yS(jd,qn,Ot,Ui,Vr,sr,on,zr,Qt,Yd,il,IT,Oi),UT=gS(Ot,OT,on,Qt,Oi),FT=Bx(Xn,jd,ir,Ui,Vr,sr,on,NT,Yd,il,at,_r,di,jn,Bt,xa),kT=Iy(qd),BT=sM(Zd),lh=Wd?Ux(LT,Tt,Fn,FT,UT,$t,kT,st,it,_r,MM,BT,CM,nr):void 0,VT=ay(Qt,di),zT=oM(el,Un,Kc,sl,xa,Bo,tl,nl),GT=qS(Xd,Un,Ot,VT,zT),HT=Wy(ma,Qc),WT=qy(Gc,Jc),qT=Xy(Hc,Nd),XT=jy(ma,it);function yn(i){return i===void 0}function $e(i){return i!==void 0}function jT(i){return typeof i=="function"}function Pi(i){return typeof i=="number"}function Qi(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function YT(i){return typeof i=="boolean"}function dn(i){return Array.isArray(i)}function li(i){return typeof i=="string"}function To(i){return li(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Ne(i,e){if(!i)throw new Error(e)}function Hn(i,e,t=1/0){if(!(e<=i&&i<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${i}`)}function $d(i){!i.isOffline&&i.state!=="running"&&Sa('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Kd=!1,uh=!1;function hh(i){Kd=i}function ZT(i){yn(i)&&Kd&&!uh&&(uh=!0,Sa("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Qd=console;function $T(...i){Qd.log(...i)}function Sa(...i){Qd.warn(...i)}function KT(i){return new DT(i)}function QT(i,e,t){return new GT(i,e,t)}const Ji=typeof self=="object"?self:null,JT=Ji&&(Ji.hasOwnProperty("AudioContext")||Ji.hasOwnProperty("webkitAudioContext"));function eE(i,e,t){return Ne($e(lh),"This node only works in a secure context (https or localhost)"),new lh(i,e,t)}function kn(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(r=(s<3?a(r):s>3?a(e,t,r):a(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function Mt(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{l(n.next(u))}catch(h){a(h)}}function c(u){try{l(n.throw(u))}catch(h){a(h)}}function l(u){u.done?r(u.value):s(u.value).then(o,c)}l((n=n.apply(i,e||[])).next())})}class tE{constructor(e,t,n,s){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function is(i){return qT(i)}function Ci(i){return WT(i)}function Ro(i){return XT(i)}function Ds(i){return HT(i)}function nE(i){return i instanceof Od}function iE(i,e){return i==="value"||is(e)||Ci(e)||nE(e)}function es(i,...e){if(!e.length)return i;const t=e.shift();if(Qi(i)&&Qi(t))for(const n in t)iE(n,t[n])?i[n]=t[n]:Qi(t[n])?(i[n]||Object.assign(i,{[n]:{}}),es(i[n],t[n])):Object.assign(i,{[n]:t[n]});return es(i,...e)}function sE(i,e){return i.length===e.length&&i.every((t,n)=>e[n]===t)}function ue(i,e,t=[],n){const s={},r=Array.from(e);if(Qi(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(o=>Reflect.has(i,o))||(es(s,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&Qi(r[0]))es(s,r[0]);else for(let a=0;a<t.length;a++)$e(r[a])&&(s[t[a]]=r[a]);return es(i,s)}function rE(i){return i.constructor.getDefaults()}function Vs(i,e){return yn(i)?e:i}function Dc(i,e){return e.forEach(t=>{Reflect.has(i,t)&&delete i[t]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class fi{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||Ji&&this.toString()===Ji.TONE_DEBUG_CLASS)&&$T(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}fi.version=id;const rl=1e-6;function Zs(i,e){return i>e+rl}function Lc(i,e){return Zs(i,e)||Rn(i,e)}function Xo(i,e){return i+rl<e}function Rn(i,e){return Math.abs(i-e)<rl}function oE(i,e,t){return Math.max(Math.min(i,t),e)}class Sn extends fi{constructor(){super(),this.name="Timeline",this._timeline=[];const e=ue(Sn.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Ne(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Ne(Lc(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Rn(this._timeline[t].time,e)){for(let n=t;n>=0&&Rn(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&Lc(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][t]<=e)return s-1;for(;n<r;){let a=Math.floor(n+(r-n)/2);const o=this._timeline[a],c=this._timeline[a+1];if(Rn(o[t],e)){for(let l=a;l<this._timeline.length;l++){const u=this._timeline[l];if(Rn(u[t],e))a=l;else break}return a}else{if(Xo(o[t],e)&&Zs(c[t],e))return a;Zs(o[t],e)?r=a:n=a+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let s=this._search(e),r=this._search(t);return s!==-1&&r!==-1?(this._timeline[s].time!==e&&(s+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Rn(this._timeline[n].time,e)){let s=n;for(let r=n;r>=0&&Rn(this._timeline[r].time,e);r--)s=r;this._iterate(r=>{t(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Jd=[];function Ma(i){Jd.push(i)}function aE(i){Jd.forEach(e=>e(i))}const ef=[];function Ta(i){ef.push(i)}function cE(i){ef.forEach(e=>e(i))}class Wr extends fi{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(s=>{yn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(t)}),this}once(e,t){const n=(...s)=>{t(...s),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(s=>{if(yn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(yn(t))this._events[s]=[];else{const r=this._events[s];for(let a=r.length-1;a>=0;a--)r[a]===t&&r.splice(a,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Wr.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class tf extends Wr{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class qr extends tf{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new Sn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=ue(qr.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=KT({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new tE(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(aE(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Ne(Ds(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Ne(Ds(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Ne(Ds(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Ne(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Ne(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Ne(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Ne(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return eE(this.rawContext,e,t)}addAudioWorkletModule(e){return Mt(this,void 0,void 0,function*(){Ne($e(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return Mt(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Ds(this._context)?this._context.resume():Promise.resolve()}close(){return Mt(this,void 0,void 0,function*(){Ds(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&cE(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=t,s.loop=!0,s.start(0),this._constants.set(e,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),s()},id:n,time:r+t})};return s(),n}}class lE extends tf{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return Mt(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function dt(i,e){dn(e)?e.forEach(t=>dt(i,t)):Object.defineProperty(i,e,{enumerable:!0,writable:!1})}function nf(i,e){dn(e)?e.forEach(t=>nf(i,t)):Object.defineProperty(i,e,{writable:!0})}const et=()=>{};class tt extends fi{constructor(){super(),this.name="ToneAudioBuffer",this.onload=et;const e=ue(tt.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,li(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:et,onload:et,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:vn().sampleRate}set(e){return e instanceof tt?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Mt(this,void 0,void 0,function*(){const t=tt.load(e).then(n=>{this.set(n),this.onload(this)});tt.downloads.push(t);try{yield t}finally{const n=tt.downloads.indexOf(t);tt.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=dn(e)&&e[0].length>0,n=t?e.length:1,s=t?e[0].length:e.length,r=vn(),a=r.createBuffer(n,s,r.sampleRate),o=!t&&n===1?[e]:e;for(let c=0;c<n;c++)a.copyToChannel(o[c],c);return this._buffer=a,this}toMono(e){if(Pi(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let a=0;a<r.length;a++)t[a]+=r[a]}t=t.map(s=>s/n),this.fromArray(t)}return this}toArray(e){if(Pi(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){Ne(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),s=Math.floor(t*this.sampleRate);Ne(n<s,"The start time must be less than the end time");const r=s-n,a=vn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let o=0;o<this.numberOfChannels;o++)a.copyToChannel(this.getChannelData(o).subarray(n,s),o);return new tt(a)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new tt().fromArray(e)}static fromUrl(e){return Mt(this,void 0,void 0,function*(){return yield new tt().load(e)})}static load(e){return Mt(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const c=t[1].split("|");let l=c[0];for(const u of c)if(tt.supportsType(u)){l=u;break}e=e.replace(t[0],l)}const n=tt.baseUrl===""||tt.baseUrl.endsWith("/")?tt.baseUrl:tt.baseUrl+"/",s=document.createElement("a");s.href=n+e,s.pathname=(s.pathname+s.hash).split("/").map(encodeURIComponent).join("/");const r=yield fetch(s.href);if(!r.ok)throw new Error(`could not load url: ${e}`);const a=yield r.arrayBuffer();return yield vn().decodeAudioData(a)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Mt(this,void 0,void 0,function*(){for(yield Promise.resolve();tt.downloads.length;)yield tt.downloads[0]})}}tt.baseUrl="";tt.downloads=[];class Ea extends qr{constructor(){super({clockSource:"offline",context:Ro(arguments[0])?arguments[0]:QT(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Ro(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Ro(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Mt(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(e=!0){return Mt(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new tt(t)})}close(){return Promise.resolve()}}const sf=new lE;let ji=sf;function vn(){return ji===sf&&JT&&uE(new qr),ji}function uE(i,e=!1){e&&ji.dispose(),Ds(i)?ji=new qr(i):Ro(i)?ji=new Ea(i):ji=i}function hE(){return ji.resume()}if(Ji&&!Ji.TONE_SILENCE_LOGGING){const e=` * Tone.js v${id} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function dE(i){return Math.pow(10,i/20)}function fE(i){return 20*(Math.log(i)/Math.LN10)}function rf(i){return Math.pow(2,i/12)}let ba=440;function pE(){return ba}function mE(i){ba=i}function Yi(i){return Math.round(of(i))}function of(i){return 69+12*Math.log2(i/ba)}function af(i){return ba*Math.pow(2,(i-69)/12)}class ol extends fi{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),s=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let s=0;return e&&e!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof ol&&this.fromType(this._val),yn(this._val))return this._noArg();if(li(this._val)&&yn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Qi(this._val)){let e=0;for(const t in this._val)if($e(this._val[t])){const n=this._val[t],s=new this.constructor(this.context,t).valueOf()*n;e+=s}return e}if($e(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return li(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class Nn extends ol{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new Nn(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),s=this.valueOf(),o=Math.round(s/n)*n-s;return s+o*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const a=Math.pow(2,r);t.push(a+"n."),t.push(a+"n"),t.push(a+"t")}t.push("0");let n=t[0],s=new Nn(this.context,t[0]).toSeconds();return t.forEach(r=>{const a=new Nn(this.context,r).toSeconds();Math.abs(a-e)<Math.abs(s-e)&&(n=r,s=a)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let s=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,t,s].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Yi(this.toFrequency())}_now(){return this.context.now()}}class tn extends Nn{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return pE()}static set A4(e){mE(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:tn.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const s=gE[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?s:tn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let s=1;return e&&e!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(e){return new tn(this.context,this.valueOf()*rf(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Yi(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/tn.A4);let n=Math.round(12*t)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),_E[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return af(e)}static ftom(e){return Yi(e)}}const gE={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},_E=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function cf(i,e){return new tn(vn(),i,e)}class fr extends Nn{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class rn extends fi{constructor(){super();const e=ue(rn.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:vn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return ZT(e),new Nn(this.context,e).toSeconds()}toFrequency(e){return new tn(this.context,e).toFrequency()}toTicks(e){return new fr(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{yn(e[n])&&delete t[n]}),t}get(){const e=rE(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];$e(n)&&$e(n.value)&&$e(n.setValueAtTime)?e[t]=n.value:n instanceof rn?e[t]=n._getPartialProperties(e[t]):dn(n)||Pi(n)||li(n)||YT(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&$e(this[t])&&(this[t]&&$e(this[t].value)&&$e(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof rn?this[t].set(e[t]):this[t]=e[t])}),this}}class al extends Sn{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return Hn(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===e)return r}}}class ut extends rn{constructor(){super(ue(ut.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const e=ue(ut.getDefaults(),arguments,["param","units","convert"]);for(Ne($e(e.param)&&(is(e.param)||e.param instanceof ut),"param must be an AudioParam");!is(e.param);)e.param=e.param._param;this._swappable=$e(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new Sn(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,$e(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(rn.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return $e(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return $e(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return $e(this.maxValue)&&$e(this.minValue)&&Hn(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?dE(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?fE(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),s=this._fromType(e);return Ne(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),s=this._events.get(t);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const a=this._events.getBefore(s.time);let o;a===null?o=this._initialValue:o=a.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,o,s.value,s.constant,t))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let a=s.value;if(s.type==="setTargetAtTime"){const o=this._events.getBefore(s.time);o===null?a=this._initialValue:a=o.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,a,n.time,n.value,t):r=this._exponentialInterpolate(s.time,a,n.time,n.value,t)}else r=s.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),s=this.toSeconds(t);return Ne(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Rn(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(t);return Ne(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,s),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const s=this._fromType(e);Ne(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(s),Ne(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(e,t,n,s=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*s;this.setValueAtTime(this._toType(r),t);const a=n/(e.length-1);for(let o=1;o<e.length;o++){const c=this._fromType(e[o])*s;this.linearRampToValueAtTime(this._toType(c),t+o*a)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Ne(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Ne(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const s=this._events.get(t),r=this._events.getAfter(t);return s&&Rn(s.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:t+2,a=(r-t)/10;for(let o=t;o<r;o+=a)e.linearRampToValueAtTime(this.getValueAtTime(o),o)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?e.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?e.setTargetAtTime(s.value,s.time,s.constant):e[s.type](s.value,s.time)}),this}setParam(e){Ne(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,s,r){return n+(t-n)*Math.exp(-(r-e)/s)}_linearInterpolate(e,t,n,s,r){return t+(s-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,s,r){return t*Math.pow(s/t,(r-e)/(n-e))}}class Be extends rn{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return $e(this.input)?is(this.input)||this.input instanceof ut?1:this.input.numberOfInputs:0}get numberOfOutputs(){return $e(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return $e(e)&&(e instanceof Be||Ci(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Ne(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return Di(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Sa("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return vE(this,e,t,n),this}chain(...e){return Nc(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),$e(this.input)&&(this.input instanceof Be?this.input.dispose():Ci(this.input)&&this.input.disconnect()),$e(this.output)&&(this.output instanceof Be?this.output.dispose():Ci(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function Nc(...i){const e=i.shift();i.reduce((t,n)=>(t instanceof Be?t.connect(n):Ci(t)&&Di(t,n),n),e)}function Di(i,e,t=0,n=0){for(Ne($e(i),"Cannot connect from undefined node"),Ne($e(e),"Cannot connect to undefined node"),(e instanceof Be||Ci(e))&&Ne(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Ne(i.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Be||e instanceof ut;)$e(e.input)&&(e=e.input);for(;i instanceof Be;)$e(i.output)&&(i=i.output);is(e)?i.connect(e,t):i.connect(e,t,n)}function vE(i,e,t=0,n=0){if($e(e))for(;e instanceof Be;)e=e.input;for(;!Ci(i);)$e(i.output)&&(i=i.output);is(e)?i.disconnect(e,t):Ci(e)?i.disconnect(e,t,n):i.disconnect()}class ct extends Be{constructor(){super(ue(ct.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const e=ue(ct.getDefaults(),arguments,["gain","units"]);this.gain=new ut({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),dt(this,"gain")}static getDefaults(){return Object.assign(Be.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class $s extends Be{constructor(e){super(e),this.onended=et,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new ct({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Be.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:et})}_startGain(e,t=1){Ne(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Ne(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==et&&(this.onended(this),this.onended=et,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Ne(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=et,this}}class jo extends $s{constructor(){super(ue(jo.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const e=ue(jo.getDefaults(),arguments,["offset"]);Di(this._source,this._gainNode),this.offset=new ut({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign($s.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class wt extends Be{constructor(){super(ue(wt.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const e=ue(wt.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new jo({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Be.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return cl(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,s){return this._param.setValueCurveAtTime(e,t,n,s),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function cl(i,e,t,n){(e instanceof ut||is(e)||e instanceof wt&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof wt&&(e.overridden=!0)),Di(i,e,t,n)}class Yo extends ut{constructor(){super(ue(Yo.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new Sn(1/0),this._multiplier=1;const e=ue(Yo.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ut.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const s=this._fromType(e),r=this._events.get(t),a=Math.round(Math.max(1/n,1));for(let o=0;o<=a;o++){const c=n*o+t,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),s=this._events.get(t),r=Math.round(Math.max((t-s.time)*10,1)),a=(t-s.time)/r;for(let o=0;o<=r;o++){const c=a*o+s.time,l=this._exponentialInterpolate(s.time,s.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(yn(e.ticks)){const a=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(a,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let s=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+s)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(t);return this.getTimeOfTick(s+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const s=this._fromType(this.getValueAtTime(t.time)),a=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-t.time),o=Math.sqrt(Math.pow(s,2)-2*a*(t.ticks-e)),c=(-s+o)/a,l=(-s-o)/a;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),s=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Zo extends wt{constructor(){super(ue(Zo.getDefaults(),arguments,["value"])),this.name="TickSignal";const e=ue(Zo.getDefaults(),arguments,["value"]);this.input=this._param=new Yo({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(wt.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class $o extends rn{constructor(){super(ue($o.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new al,this._tickOffset=new Sn,this._ticksAtTime=new Sn,this._secondsAtTime=new Sn;const e=ue($o.getDefaults(),arguments,["frequency"]);this.frequency=new Zo({context:this.context,units:e.units,value:e.frequency}),dt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},rn.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),$e(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),s=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let a=s||n,o=s?s.ticks:0,c=null;return this._state.forEachBetween(a.time,t+this.sampleTime,l=>{let u=a.time;const h=this._tickOffset.get(l.time);h&&h.time>=a.time&&(o=h.ticks,u=h.time),a.state==="started"&&l.state!=="started"&&(o+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:o})),a=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const s=this._secondsAtTime.get(e);let r=s||t,a=s?s.seconds:0,o=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(a=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(a+=c.time-l,c.time!==n.time&&(o={state:c.state,time:c.time,seconds:a})),r=c}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),s=this._state.get(t),r=Math.max(n.time,s.time),a=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(e,t,n){let s=this._state.get(e);this._state.forEachBetween(e,t,a=>{s&&s.state==="started"&&a.state!=="started"&&this.forEachTickBetween(Math.max(s.time,e),a.time-this.sampleTime,n),s=a});let r=null;if(s&&s.state==="started"){const a=Math.max(s.time,e),o=this.frequency.getTicksAtTime(a),c=this.frequency.getTicksAtTime(s.time),l=o-c;let u=Math.ceil(l)-l;u=Rn(u,1)?0:u;let h=this.frequency.getTimeOfTick(o+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class vr extends rn{constructor(){super(ue(vr.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=et,this._lastUpdate=0,this._state=new al("stopped"),this._boundLoop=this._loop.bind(this);const e=ue(vr.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new $o({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,dt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(rn.getDefaults(),{callback:et,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){$d(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,s)=>{this.callback(n,s)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Wr.mixin(vr);class ll extends fi{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=ue(ll.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:et,onload:et,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Ne(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=et,s=et){return li(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new tt(this.baseUrl+t,n,s))):this._buffers.set(e.toString(),new tt(t,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Ko extends tn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return Yi(super._frequencyToUnits(e))}_ticksToUnits(e){return Yi(super._ticksToUnits(e))}_beatsToUnits(e){return Yi(super._beatsToUnits(e))}_secondsToUnits(e){return Yi(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return af(this.toMidi())}transpose(e){return new Ko(this.context,this.toMidi()+e)}}class Os extends fr{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class xE extends rn{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Sn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Ma(i=>{i.draw=new xE({context:i})});Ta(i=>{i.draw.dispose()});class yE extends fi{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Ne($e(e.time),"Events must have a time property"),Ne($e(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new SE(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,s=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,s=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,s=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),s=e.right;s&&(e.right=s.left,s.left=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),s=e.left;s&&(e.left=s.right,s.right=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let s=1;s<t.length;s++)t[s].low>n.low&&(n=t[s]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class SE{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class ss extends Be{constructor(){super(ue(ss.getDefaults(),arguments,["volume"])),this.name="Volume";const e=ue(ss.getDefaults(),arguments,["volume"]);this.input=this.output=new ct({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,dt(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Qo extends Be{constructor(){super(ue(Qo.getDefaults(),arguments)),this.name="Destination",this.input=new ss({context:this.context}),this.output=new ct({context:this.context}),this.volume=this.input.volume;const e=ue(Qo.getDefaults(),arguments);Nc(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),Nc(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Ma(i=>{i.destination=new Qo({context:i})});Ta(i=>{i.destination.dispose()});class ME extends fi{constructor(e){super(),this.name="TimelineValue",this._timeline=new Sn({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class rs extends Be{constructor(){super(Object.assign(ue(rs.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return cl(this,e,t,n),this}}class os extends rs{constructor(){super(Object.assign(ue(os.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const e=ue(os.getDefaults(),arguments,["mapping","length"]);dn(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):jT(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(wt.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let s=0,r=t;s<r;s++){const a=s/(r-1)*2-1;n[s]=e(a,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Ne(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Jo extends rs{constructor(){super(Object.assign(ue(Jo.getDefaults(),arguments,["value"]))),this.name="Pow";const e=ue(Jo.getDefaults(),arguments,["value"]);this._exponentScaler=this.input=this.output=new os({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(rs.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class Li{constructor(e,t){this.id=Li._eventId++,this._remainderTime=0;const n=Object.assign(Li.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:et,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}Li._eventId=0;class ul extends Li{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(ul.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Li.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return Xo(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Os(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){Xo(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Os(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);Zs(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class xr extends rn{constructor(){super(ue(xr.getDefaults(),arguments)),this.name="Transport",this._loop=new ME(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Sn,this._repeatedEvents=new yE,this._syncedSignals=[],this._swingAmount=0;const e=ue(xr.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new vr({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),dt(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(rn.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;e+=new Os(this.context,this._swingTicks*2/3).toSeconds()*s}hh(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),hh(!1)}schedule(e,t){const n=new Li(this,{callback:e,time:new fr(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,s=1/0){const r=new ul(this,{callback:e,duration:new Nn(this.context,s).toTicks(),interval:new Nn(this.context,t).toTicks(),time:new fr(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new Li(this,{callback:e,once:!0,time:new fr(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Os(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return $e(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){dn(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Nn(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Nn(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Os(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Os(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+s;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),s=e-n%e;return this._clock.nextTickTime(s,t)}}syncSignal(e,t){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),a=[];if(e.units==="time"){const c=.015625/r,l=new ct(c),u=new Jo(-1),h=new ct(c);s.chain(l,u,h),s=h,r=1/r,a=[l,u,h]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const o=new ct(t);return s.connect(o),o.connect(e._param),a.push(o),this._syncedSignals.push({initial:e.value,nodes:a,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),nf(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Wr.mixin(xr);Ma(i=>{i.transport=new xr({context:i})});Ta(i=>{i.transport.dispose()});class Kt extends Be{constructor(e){super(e),this.input=void 0,this._state=new al("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=et,this._syncedStop=et,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new ss({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,dt(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,onstop:et,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let s=yn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")Ne(Zs(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,t,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(Vs(t,0)),r.duration=n?this.toSeconds(n):void 0);const a=this.context.transport.schedule(o=>{this._start(o,t,n)},s);this._scheduled.push(a),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else $d(this.context),this._start(s,t,n);return this}stop(e){let t=yn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||$e(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(Zs(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const s=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(e,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=et,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Ks extends $s{constructor(){super(ue(Ks.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const e=ue(Ks.getDefaults(),arguments,["url","onload"]);Di(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new ut({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new tt(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign($s.getDefaults(),{url:new tt,loop:!1,loopEnd:0,loopStart:0,onload:et,onerror:et,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,s=1){Ne(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,s),this.loop?t=Vs(t,this.loopStart):t=Vs(t,0);let a=Math.max(this.toSeconds(t),0);if(this.loop){const o=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=o-c;Lc(a,o)&&(a=(a-c)%l+c),Rn(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Xo(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,a)),$e(n)){let o=this.toSeconds(n);o=Math.max(o,0),this.stop(r+o)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class yr extends Kt{constructor(){super(ue(yr.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const e=ue(yr.getDefaults(),arguments,["type"]);this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Kt.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Ne(e in dh,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=dh[this._type];this._source=new Ks({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const Ps=44100*5,cc=2,ei={brown:null,pink:null,white:null},dh={get brown(){if(!ei.brown){const i=[];for(let e=0;e<cc;e++){const t=new Float32Array(Ps);i[e]=t;let n=0;for(let s=0;s<Ps;s++){const r=Math.random()*2-1;t[s]=(n+.02*r)/1.02,n=t[s],t[s]*=3.5}}ei.brown=new tt().fromArray(i)}return ei.brown},get pink(){if(!ei.pink){const i=[];for(let e=0;e<cc;e++){const t=new Float32Array(Ps);i[e]=t;let n,s,r,a,o,c,l;n=s=r=a=o=c=l=0;for(let u=0;u<Ps;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,s=.99332*s+h*.0750759,r=.969*r+h*.153852,a=.8665*a+h*.3104856,o=.55*o+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+s+r+a+o+c+l+h*.5362,t[u]*=.11,l=h*.115926}}ei.pink=new tt().fromArray(i)}return ei.pink},get white(){if(!ei.white){const i=[];for(let e=0;e<cc;e++){const t=new Float32Array(Ps);i[e]=t;for(let n=0;n<Ps;n++)t[n]=Math.random()*2-1}ei.white=new tt().fromArray(i)}return ei.white}};function hs(i,e){return Mt(this,void 0,void 0,function*(){const t=e/i.context.sampleRate,n=new Ea(1,t,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class ea extends $s{constructor(){super(ue(ea.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const e=ue(ea.getDefaults(),arguments,["frequency","type"]);Di(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new ut({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),dt(this,["frequency","detune"])}static getDefaults(){return Object.assign($s.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class St extends Kt{constructor(){super(ue(St.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const e=ue(St.getDefaults(),arguments,["frequency","type"]);this.frequency=new wt({context:this.context,units:"frequency",value:e.frequency}),dt(this,"frequency"),this.detune=new wt({context:this.context,units:"cents",value:e.detune}),dt(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Kt.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new ea({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return St._periodicWaveCache.find(t=>t.phase===this._phase&&sE(t.partials,this._partials));{const e=St._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if($e(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(e,this._phase),a=this.context.createPeriodicWave(s,r);this._wave=a,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),St._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),St._periodicWaveCache.length>100&&St._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){Hn(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const s=new Float32Array(e);this._partials.forEach((r,a)=>s[a]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(e,t){let s=2048;const r=new Float32Array(s),a=new Float32Array(s);let o=1;if(e==="custom"){if(o=this._partials.length+1,this._partialCount=this._partials.length,s=o,this._partials.length===0)return[r,a]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(o=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],o=Math.max(o,2),s=o):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=o?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),a[c]=u*Math.cos(t*c)):(r[c]=0,a[c]=0)}return[r,a]}_inverseFFT(e,t,n){let s=0;const r=e.length;for(let a=0;a<r;a++)s+=e[a]*Math.cos(a*n)+t[a]*Math.sin(a*n);return s}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let a=0;a<r;a++)n=Math.max(this._inverseFFT(e,t,a/r*s),n);return oE(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}St._periodicWaveCache=[];class TE extends rs{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new os({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class as extends wt{constructor(){super(Object.assign(ue(as.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const e=ue(as.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new ct({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(wt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Sr extends Kt{constructor(){super(ue(Sr.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new TE({context:this.context}),this._modulationNode=new ct({context:this.context});const e=ue(Sr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new St({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new St({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new as({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),dt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(St.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Mr extends Kt{constructor(){super(ue(Mr.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new ct({context:this.context,gain:0});const e=ue(Mr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new St({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new wt({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new St({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new as({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new as({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),dt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(St.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Qs extends Kt{constructor(){super(ue(Qs.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new ct({context:this.context,gain:0}),this._thresh=new os({context:this.context,mapping:t=>t<=0?-1:1});const e=ue(Qs.getDefaults(),arguments,["frequency","width"]);this.width=new wt({context:this.context,units:"audioRange",value:e.width}),this._triangle=new St({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),dt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Kt.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Tr extends Kt{constructor(){super(ue(Tr.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const e=ue(Tr.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new wt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new wt({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,dt(this,["frequency","detune"])}static getDefaults(){return Object.assign(St.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(Hn(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new St({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):et});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Er extends Kt{constructor(){super(ue(Er.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new as({context:this.context,value:2});const e=ue(Er.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new Qs({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new St({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),dt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Kt.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const fh={am:Sr,fat:Tr,fm:Mr,oscillator:St,pulse:Qs,pwm:Er};class br extends Kt{constructor(){super(ue(br.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const e=ue(br.getDefaults(),arguments,["frequency","type"]);this.frequency=new wt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new wt({context:this.context,units:"cents",value:e.detune}),dt(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(St.getDefaults(),Mr.getDefaults(),Sr.getDefaults(),Tr.getDefaults(),Qs.getDefaults(),Er.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=fh[e],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof fh[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Pi(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Pi(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&li(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return Mt(this,void 0,void 0,function*(){return hs(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function lf(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Hn(r,i,e),t.set(this,r)}})}}function pi(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Hn(this.toSeconds(r),i,e),t.set(this,r)}})}}class wr extends Kt{constructor(){super(ue(wr.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const e=ue(wr.getDefaults(),arguments,["url","onload"]);this._buffer=new tt({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Kt.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:et,onerror:et,playbackRate:1,reverse:!1})}load(e){return Mt(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=et){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=Vs(t,this._loopStart):t=Vs(t,0);const s=this.toSeconds(t),r=n;n=Vs(n,Math.max(this._buffer.duration-s,0));let a=this.toSeconds(n);a=a/this._playbackRate,e=this.toSeconds(e);const o=new Ks({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+a),this._state.setStateAtTime("stopped",e+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&yn(r)?o.start(e,s):o.start(e,s,a-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(e);this._stop(n),this._start(n,s)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&Hn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&Hn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}kn([pi(0)],wr.prototype,"fadeIn",void 0);kn([pi(0)],wr.prototype,"fadeOut",void 0);class EE extends rs{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new os({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class ui extends Be{constructor(){super(ue(ui.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new wt({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const e=ue(ui.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Be.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(li(e))return e;{let n;for(n in Eo)if(Eo[n][t]===e)return n;return e}}_setCurve(e,t,n){if(li(n)&&Reflect.has(Eo,n)){const s=Eo[n];Qi(s)?e!=="_decayCurve"&&(this[e]=s[t]):this[e]=s}else if(dn(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),a=this.getValueAtTime(e);if(a>0){const o=1/s;s=(1-a)/o}if(s<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,s,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,s,e);else{this._sig.cancelAndHoldAtTime(e);let o=this._attackCurve;for(let c=1;c<o.length;c++)if(o[c-1]<=a&&a<=o[c]){o=this._attackCurve.slice(c),o[0]=a;break}this._sig.setValueCurveAtTime(o,e,s,t)}if(r&&this.sustain<1){const o=t*this.sustain,c=e+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(o,r+c):this._sig.exponentialApproachValueAtTime(o,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Ne(dn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return cl(this,e,t,n),this}asArray(e=1024){return Mt(this,void 0,void 0,function*(){const t=e/this.context.sampleRate,n=new Ea(1,t,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),a=r*.1,o=r+a,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/o,decay:t*this.toSeconds(this.decay)/o,release:t*this.toSeconds(this.release)/o,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(s+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}kn([pi(0)],ui.prototype,"attack",void 0);kn([pi(0)],ui.prototype,"decay",void 0);kn([lf(0,1)],ui.prototype,"sustain",void 0);kn([pi(0)],ui.prototype,"release",void 0);const Eo=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const s=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;s[e]=d/10+t*.83}s[127]=1;const a=[],o=5;for(e=0;e<128;e++)a[e]=Math.ceil(e/127*o)/o;const c=[];for(e=0;e<128;e++)t=e/127,c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,m=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(m*(1-t))}function u(d){const m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]=1-d[g];return m}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:u(s)},sine:{In:c,Out:u(c)},step:{In:a,Out:u(a)}}})();class hi extends Be{constructor(){super(ue(hi.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t);const e=ue(hi.getDefaults(),arguments);this._volume=this.output=new ss({context:this.context,volume:e.volume}),this.volume=this._volume.volume,dt(this,"volume")}static getDefaults(){return Object.assign(Be.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...s)=>{const r=s[t],a=this.context.transport.schedule(o=>{s[t]=o,n.apply(this,s)},r);this._scheduledEvents.push(a)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,s){const r=this.toSeconds(n),a=this.toSeconds(t);return this.triggerAttack(e,r,s),this.triggerRelease(r+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Ni extends hi{constructor(){super(ue(Ni.getDefaults(),arguments));const e=ue(Ni.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(hi.getDefaults(),{detune:0,onsilence:et,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const s=this.toSeconds(t);return this._triggerEnvelopeAttack(s,n),this.setNote(e,s),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),s=e instanceof tn?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}kn([pi(0)],Ni.prototype,"portamento",void 0);class hl extends ui{constructor(){super(ue(hl.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new ct({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Ii extends Ni{constructor(){super(ue(Ii.getDefaults(),arguments)),this.name="Synth";const e=ue(Ii.getDefaults(),arguments);this.oscillator=new br(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new hl(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),dt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Ni.getDefaults(),{envelope:Object.assign(Dc(ui.getDefaults(),Object.keys(Be.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Dc(br.getDefaults(),[...Object.keys(Kt.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+s)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Ar extends Ii{constructor(){super(ue(Ar.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const e=ue(Ar.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,dt(this,["oscillator","envelope"])}static getDefaults(){return es(Ni.getDefaults(),Ii.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),s=this.toFrequency(e instanceof tn?e.toFrequency():e),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}kn([lf(0)],Ar.prototype,"octaves",void 0);kn([pi(0)],Ar.prototype,"pitchDecay",void 0);const uf=new Set;function dl(i){uf.add(i)}function hf(i,e){const t=`registerProcessor("${i}", ${e})`;uf.add(t)}const bE=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;dl(bE);const wE=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;dl(wE);const AE=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;dl(AE);const CE="feedback-comb-filter",RE=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;hf(CE,RE);class ta extends hi{constructor(){super(ue(ta.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=s=>this.releaseAll(s);const e=ue(ta.getDefaults(),arguments,["voice","options"]);Ne(!Pi(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(hi.getDefaults(),{maxPolyphony:32,options:{},voice:Ii})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return Ne(e instanceof Ni,"Voice must extend Monophonic class"),e.connect(this.output),this._voices.push(e),e}else Sa("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(s=>{const r=new Ko(this.context,s).toMidi(),a=this._getNextAvailableVoice();a&&(a.triggerAttack(s,t,n),this._activeVoices.push({midi:r,voice:a,released:!1}),this.log("triggerAttack",s,t))})}_triggerRelease(e,t){e.forEach(n=>{const s=new Ko(this.context,n).toMidi(),r=this._activeVoices.find(({midi:a,released:o})=>a===s&&!o);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,s){Ne(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,s):this._triggerRelease(t,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(e,t,n,s)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const s=this.toSeconds(t);return this._scheduleEvent("attack",e,s,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,s){const r=this.toSeconds(n);if(this.triggerAttack(e,r,s),dn(t)){Ne(dn(e),"If the duration is an array, the notes must also be an array"),e=e;for(let a=0;a<e.length;a++){const o=t[Math.min(a,t.length-1)],c=this.toSeconds(o);Ne(c>0,"The duration must be greater than 0"),this.triggerRelease(e[a],r+c)}}else{const a=this.toSeconds(t);Ne(a>0,"The duration must be greater than 0"),this.triggerRelease(e,r+a)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(e){const t=Dc(e,["onsilence","context"]);return this.options=es(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class Cr extends hi{constructor(){super(ue(Cr.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=ue(Cr.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{const s=parseInt(n,10);if(Ne(To(n)||Pi(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),To(n)){const r=new tn(this.context,n).toMidi();t[r]=e.urls[n]}else Pi(s)&&isFinite(s)&&(t[s]=e.urls[s])}),this._buffers=new ll({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(hi.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:et,onerror:et,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(s=>{const r=of(new tn(this.context,s).toFrequency()),a=Math.round(r),o=r-a,c=this._findClosest(a),l=a-c,u=this._buffers.get(l),h=rf(c+o),d=new Ks({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),dn(this._activeSources.get(a))||this._activeSources.set(a,[]),this._activeSources.get(a).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(a)){const m=this._activeSources.get(a),g=m.indexOf(d);g!==-1&&m.splice(g,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const s=new tn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);t=this.toSeconds(t),r.forEach(a=>{a.stop(t)}),this._activeSources.set(s,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,s),dn(t)?(Ne(dn(e),"notes must be an array when duration is array"),e.forEach((a,o)=>{const c=t[Math.min(o,t.length-1)];this.triggerRelease(a,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Ne(To(e)||isFinite(e),`note must be a pitch or midi: ${e}`),To(e)){const s=new tn(this.context,e).toMidi();this._buffers.add(s,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}kn([pi(0)],Cr.prototype,"attack",void 0);kn([pi(0)],Cr.prototype,"release",void 0);class na extends Be{constructor(){super(Object.assign(ue(na.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new EE({context:this.context}),this.a=new ct({context:this.context,gain:0}),this.b=new ct({context:this.context,gain:0}),this.output=new ct({context:this.context}),this._internalChannels=[this.a,this.b];const e=ue(na.getDefaults(),arguments,["fade"]);this.fade=new wt({context:this.context,units:"normalRange",value:e.fade}),dt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",Di(this._split,this.a.gain,0),Di(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Be.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class ph extends Be{constructor(e){super(e),this.name="Effect",this._dryWet=new na({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new ct({context:this.context}),this.effectReturn=new ct({context:this.context}),this.input=new ct({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],dt(this,"wet")}static getDefaults(){return Object.assign(Be.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class ia extends Be{constructor(){super(Object.assign(ue(ia.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=ue(ia.getDefaults(),arguments,["pan"]);this.pan=new ut({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",dt(this,"pan")}static getDefaults(){return Object.assign(Be.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const PE="bit-crusher",DE=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;hf(PE,DE);class sa extends Be{constructor(){super(ue(sa.getDefaults(),arguments,["channels"])),this.name="Merge";const e=ue(sa.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(Be.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class ra extends ph{constructor(){super(ue(ra.getDefaults(),arguments,["decay"])),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();const e=ue(ra.getDefaults(),arguments,["decay"]);this._decay=e.decay,this._preDelay=e.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(ph.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),Hn(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),Hn(e,0),this._preDelay=e,this.generate()}generate(){return Mt(this,void 0,void 0,function*(){const e=this.ready,t=new Ea(2,this._decay+this._preDelay,this.context.sampleRate),n=new yr({context:t}),s=new yr({context:t}),r=new sa({context:t});n.connect(r,0,0),s.connect(r,0,1);const a=new ct({context:t}).toDestination();r.connect(a),n.start(0),s.start(0),a.gain.setValueAtTime(0,0),a.gain.setValueAtTime(1,this._preDelay),a.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const o=t.render();return this.ready=o.then(et),yield e,this._convolver.buffer=(yield o).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class xt extends Be{constructor(){super(ue(xt.getDefaults(),arguments,["solo"])),this.name="Solo";const e=ue(xt.getDefaults(),arguments,["solo"]);this.input=this.output=new ct({context:this.context}),xt._allSolos.has(this.context)||xt._allSolos.set(this.context,new Set),xt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(Be.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),xt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){xt._soloed.has(this.context)||xt._soloed.set(this.context,new Set),xt._soloed.get(this.context).add(this)}_removeSolo(){xt._soloed.has(this.context)&&xt._soloed.get(this.context).delete(this)}_isSoloed(){return xt._soloed.has(this.context)&&xt._soloed.get(this.context).has(this)}_noSolos(){return!xt._soloed.has(this.context)||xt._soloed.has(this.context)&&xt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),xt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}xt._allSolos=new Map;xt._soloed=new Map;class oa extends Be{constructor(){super(ue(oa.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=ue(oa.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new ia({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new ss({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,dt(this,["pan","volume"])}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Xi extends Be{constructor(){super(ue(Xi.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=ue(Xi.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new xt({solo:e.solo,context:this.context}),this._panVol=this.output=new oa({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),dt(this,["pan","volume"])}static getDefaults(){return Object.assign(Be.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Xi.buses.has(e)||Xi.buses.set(e,new ct({context:this.context})),Xi.buses.get(e)}send(e,t=0){const n=this._getBus(e),s=new ct({context:this.context,units:"decibels",gain:t});return this.connect(s),s.connect(n),s}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Xi.buses=new Map;class LE extends Be{constructor(){super(...arguments),this.name="Listener",this.positionX=new ut({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new ut({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new ut({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new ut({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new ut({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new ut({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new ut({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new ut({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new ut({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Be.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Ma(i=>{i.listener=new LE({context:i})});Ta(i=>{i.listener.dispose()});vn().transport;vn().destination;vn().destination;vn().listener;vn().draw;vn();const Je={starCount:5e4,chunkSize:1e3,renderDistance:8,starsPerChunk:200,galaxiesPerChunk:.02,nebulaePerChunk:.015,colors:{starColors:[16777215,16774376,16770244,16766720,16753920,16739179,8900331,11393254,255,16711935,65535]}};function NE(i){return function(){let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function IE(i,e,t){const n=i*73856093^e*19349663^t*83492791;return Math.abs(n)}class OE{constructor(){this.chunks=new Map,this.starField=null,this.galaxies=[],this.nebulae=[],this.lastPlayerChunk=null,this.needsUpdate=!0}getChunkKey(e,t,n){const s=Math.floor(e/Je.chunkSize),r=Math.floor(t/Je.chunkSize),a=Math.floor(n/Je.chunkSize);return`${s},${r},${a}`}getChunkCoords(e,t,n){return{x:Math.floor(e/Je.chunkSize),y:Math.floor(t/Je.chunkSize),z:Math.floor(n/Je.chunkSize)}}update(e){const t=this.getChunkCoords(e.x,e.y,e.z);if(this.lastPlayerChunk&&this.lastPlayerChunk.x===t.x&&this.lastPlayerChunk.y===t.y&&this.lastPlayerChunk.z===t.z)return;this.lastPlayerChunk=t,this.needsUpdate=!0;const n=new Set;for(let s=-8;s<=Je.renderDistance;s++)for(let r=-8;r<=Je.renderDistance;r++)for(let a=-8;a<=Je.renderDistance;a++){const o=`${t.x+s},${t.y+r},${t.z+a}`;n.add(o)}for(const[s,r]of this.chunks)if(!n.has(s)){if(r.galaxy){Ht.remove(r.galaxy);const a=this.galaxies.indexOf(r.galaxy);a>-1&&this.galaxies.splice(a,1)}if(r.nebula){Ht.remove(r.nebula);const a=this.nebulae.indexOf(r.nebula);a>-1&&this.nebulae.splice(a,1)}this.chunks.delete(s)}for(const s of n)if(!this.chunks.has(s)){const[r,a,o]=s.split(",").map(Number);this.generateChunk(r,a,o)}this.updateStarField()}generateChunk(e,t,n){const s=IE(e,t,n),r=NE(s),a={x:e,y:t,z:n,stars:[],galaxy:null,nebula:null},o=e*Je.chunkSize,c=t*Je.chunkSize,l=n*Je.chunkSize,u=Math.floor(Je.starsPerChunk+r()*Je.starsPerChunk);for(let h=0;h<u;h++)a.stars.push({x:o+(r()-.5)*Je.chunkSize,y:c+(r()-.5)*Je.chunkSize,z:l+(r()-.5)*Je.chunkSize,colorIndex:Math.floor(r()*Je.colors.starColors.length),size:r()*3+1,brightness:r()*.7+.3});if(r()<Je.galaxiesPerChunk){const h=new F(o+(r()-.5)*Je.chunkSize*.8,c+(r()-.5)*Je.chunkSize*.3,l+(r()-.5)*Je.chunkSize*.8),d=r()>.3?"spiral":"elliptical";a.galaxy=mf(d,h),Ht.add(a.galaxy),this.galaxies.push(a.galaxy)}if(r()<Je.nebulaePerChunk){const h=new F(o+(r()-.5)*Je.chunkSize*.8,c+(r()-.5)*Je.chunkSize*.3,l+(r()-.5)*Je.chunkSize*.8);a.nebula=zE(h),Ht.add(a.nebula),this.nebulae.push(a.nebula)}this.chunks.set(`${e},${t},${n}`,a)}updateStarField(){this.starField&&Ht.remove(this.starField);const e=[];for(const[l,u]of this.chunks)e.push(...u.stars);if(e.length===0)return;const t=e.length,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t);for(let l=0;l<t;l++){const u=e[l];n[l*3]=u.x,n[l*3+1]=u.y,n[l*3+2]=u.z;const h=Je.colors.starColors[u.colorIndex],d=new Fe(h);s[l*3]=d.r,s[l*3+1]=d.g,s[l*3+2]=d.b,r[l]=u.size,a[l]=u.brightness}const o=new Tn;o.setAttribute("position",new Nt(n,3)),o.setAttribute("customColor",new Nt(s,3)),o.setAttribute("size",new Nt(r,1)),o.setAttribute("brightness",new Nt(a,1));const c=new Wt({uniforms:{},vertexShader:ff,fragmentShader:pf,transparent:!0,blending:zs,depthWrite:!1});this.starField=new Qh(o,c),Ht.add(this.starField)}getGalaxies(){return this.galaxies}getNebulae(){return this.nebulae}getStarField(){return this.starField}}let Ht,yt,Ti,Us,Ft,Fs,Rr=[],Pr=[],mh=new Jh,ot=null,An=null,un=1,bo=!1,df=!1,lc=!1;const lt={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1},UE=300,Wn={constellationMaker:{unlocked:!1,name:"Constellation Maker",icon:"♈",description:"Connect stars to create constellations"},timeTraveler:{unlocked:!1,name:"Time Traveler",icon:"⏰",description:"Accelerate or reverse cosmic time"},messageInStars:{unlocked:!1,name:"Message in the Stars",icon:"💫",description:"Hidden developer coordinates"},collector:{unlocked:!1,name:"The Collector",icon:"🖼️",description:"Gallery of discovered galaxies"},soundHunter:{unlocked:!1,name:"Sound Hunter",icon:"🎵",description:"Find musical stars for a symphony"},portal:{unlocked:!1,name:"The Portal",icon:"🌀",description:"Access the mirror universe"},konamiCode:{unlocked:!1,name:"Debug Mode",icon:"🎮",description:"Konami code activated"},birthdaySurprise:{unlocked:!1,name:"Birthday Surprise",icon:"🎂",description:"Special galaxy on your birthday"}};let hr=0;const gh=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],ff=`
  attribute float size;
  attribute vec3 customColor;
  attribute float brightness;
  
  varying vec3 vColor;
  varying float vBrightness;
  
  void main() {
    vColor = customColor;
    vBrightness = brightness;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,pf=`
  varying vec3 vColor;
  varying float vBrightness;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= vBrightness;
    
    vec3 glow = vColor * (1.0 + 0.5 * (1.0 - dist * 2.0));
    gl_FragColor = vec4(glow, alpha);
  }
`,FE=`
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kE=`
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform float intensity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }
  
  void main() {
    vec3 pos = vPosition * 0.001 + time * 0.01;
    
    float n = fbm(pos);
    n = (n + 1.0) * 0.5;
    
    vec3 color = mix(color1, color2, n);
    
    float alpha = n * intensity;
    alpha *= smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
    alpha *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    
    gl_FragColor = vec4(color, alpha * 0.3);
  }
`,BE={uniforms:{tDiffuse:{value:null},amount:{value:.003}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float amount;
    varying vec2 vUv;
    
    void main() {
      vec2 offset = amount * (vUv - 0.5);
      
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `};class VE{constructor(){this.initialized=!1,this.muted=!0,this.synths=[],this.masterGain=null,this.reverb=null,this.sequence=[]}async init(){if(this.initialized)return;await hE(),this.masterGain=new ct(.3).toDestination(),this.reverb=new ra({decay:4,wet:.5}).connect(this.masterGain);const e=new ta(Ii,{oscillator:{type:"sine"},envelope:{attack:2,decay:1,sustain:.8,release:3}}).connect(this.reverb);e.triggerAttack(["C2","G2","C3"]),this.synths.push(e),this.initialized=!0}playNote(e,t="8n",n=null){if(!this.initialized||this.muted)return;new Ii({oscillator:{type:"triangle"},envelope:{attack:.01,decay:.1,sustain:.3,release:.5}}).connect(this.reverb).triggerAttackRelease(e,t,n)}playStarNote(e,t){if(!this.initialized||this.muted)return;const n=["C","D","E","F","G","A","B"],s=Math.floor(e/7)+3,r=n[e%7],a=cf(`${r}${s}`).toFrequency();this.playNote(a,"16n")}setMuted(e){this.muted=e,this.masterGain&&(this.masterGain.gain.value=e?0:.3)}toggle(){return this.setMuted(!this.muted),this.muted}}function mf(i="spiral",e=new F){const t=5e3+Math.random()*1e4,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Fe,c=Math.random();o.setHSL(c,.8,.6);const l=new Fe;l.setHSL(c,.9,.8);const u=i==="spiral"?Math.floor(Math.random()*3)+2:1,h=i==="spiral"?.5+Math.random()*.5:2,d=100+Math.random()*200;for(let p=0;p<t;p++){let f,y,v;if(i==="spiral"){const T=Math.floor(Math.random()*u)/u*Math.PI*2,R=Math.pow(Math.random(),.7)*d,x=T+R/d*Math.PI*h+(Math.random()-.5)*.5,b=Math.random()*d*.3;f=Math.cos(x)*R+(Math.random()-.5)*b,v=Math.sin(x)*R+(Math.random()-.5)*b,y=(Math.random()-.5)*b*.3}else{const E=Math.random(),T=Math.random(),R=d*Math.pow(E,.5),x=2*Math.PI*T;f=Math.cos(x)*R,v=Math.sin(x)*R,y=(Math.random()-.5)*R*.5}n[p*3]=f+e.x,n[p*3+1]=y+e.y,n[p*3+2]=v+e.z;const w=Math.sqrt(f*f+v*v),S=new Fe().lerpColors(l,o,Math.min(w/d,1));s[p*3]=S.r,s[p*3+1]=S.g,s[p*3+2]=S.b,r[p]=Math.random()*2+.5,a[p]=Math.random()*.6+.4}const m=new Tn;m.setAttribute("position",new Nt(n,3)),m.setAttribute("customColor",new Nt(s,3)),m.setAttribute("size",new Nt(r,1)),m.setAttribute("brightness",new Nt(a,1));const g=new Wt({uniforms:{},vertexShader:ff,fragmentShader:pf,transparent:!0,blending:zs,depthWrite:!1}),_=new Qh(m,g);return _.userData={type:i,name:`Galaxy ${Math.floor(Math.random()*9999)}`,discovered:!1,position:e.clone()},_}function zE(i=new F){const e=new pa(200+Math.random()*300,32,32),t=new Fe,n=Math.random();t.setHSL(n,.8,.5);const s=new Fe,r=(n+.3+Math.random()*.4)%1;s.setHSL(r,.8,.5);const a=new Wt({uniforms:{time:{value:0},color1:{value:t},color2:{value:s},intensity:{value:.7}},vertexShader:FE,fragmentShader:kE,transparent:!0,side:zn,blending:zs,depthWrite:!1}),o=new Ln(e,a);return o.position.copy(i),o.userData={name:`Nebula ${Math.floor(Math.random()*9999)}`,baseIntensity:.7},o}function GE(i){switch(i){case"constellationMaker":HE();break;case"timeTraveler":WE();break;case"messageInStars":qE();break;case"collector":jE();break;case"soundHunter":YE();break;case"portal":ZE();break;case"birthdaySurprise":$E();break}}function HE(){if(Wn.constellationMaker.unlocked){Mn("Constellation mode already active!","success");return}Wn.constellationMaker.unlocked=!0,Mn("✨ Constellation Maker activated! Click stars to connect them.","secret"),window.constellationMode=!0,window.constellationLines=[],window.selectedStars=[]}function WE(){Wn.timeTraveler.unlocked=!0,Mn("⏰ Time Traveler activated! Use the time controls.","secret")}function qE(){Wn.messageInStars.unlocked=!0,Mn("💫 SECRET: 42.7459°N, 74.0060°W - The developers","secret"),XE()}function XE(){const i=new pa(5,16,16),e=new da({color:16711850,transparent:!0,opacity:.8}),t=new Ln(i,e);t.position.set(42.7459*10,0,-74.006*10),Ht.add(t)}function jE(){Wn.collector.unlocked=!0,Mn("🖼️ Collector activated! Gallery coming soon.","secret")}function YE(){Wn.soundHunter.unlocked=!0,Mn("🎵 Sound Hunter activated! Click stars to play notes.","secret"),window.soundHunterActive=!0}function ZE(){Wn.portal.unlocked=!0,lc=!lc,lc?(Ht.background=new Fe(16777215),document.body.style.filter="invert(1)",Mn("🌀 Entered the Mirror Universe!","secret")):(Ht.background=new Fe(17),document.body.style.filter="none",Mn("🌀 Returned to the normal universe.","secret"))}function $E(){const i=new Date,e=i.getMonth()+1,t=i.getDate();if(e===3&&t===22){Wn.birthdaySurprise.unlocked=!0;const n=mf("spiral",new F(500,200,-500));n.userData.name="🎂 Birthday Galaxy",n.userData.birthday=!0,Ht.add(n),Rr.push(n),Mn("🎂 HAPPY BIRTHDAY! A special galaxy has appeared!","success"),An&&!An.muted&&KE()}else Mn("🎂 No birthday today! Come back on March 22nd.","warning")}function KE(){["C4","C4","D4","C4","F4","E4"].forEach((e,t)=>{setTimeout(()=>{An.playNote(cf(e).toFrequency(),"8n")},t*300)})}function QE(i){i===gh[hr]?(hr++,hr>=gh.length&&(JE(),hr=0)):hr=0}function JE(){df=!0,Wn.konamiCode.unlocked=!0,document.getElementById("debug-indicator").classList.add("visible"),document.getElementById("stats").classList.add("visible"),Mn("🎮 DEBUG MODE ACTIVATED!","secret"),window.debugMode=!0}function Mn(i,e="info"){const t=document.getElementById("notifications"),n=document.createElement("div");n.className=`notification ${e}`,n.textContent=i,t.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},3e3)}function eb(){const i=document.getElementById("easter-eggs-list");i.innerHTML="",Object.entries(Wn).forEach(([e,t])=>{const n=document.createElement("div");n.className=`easter-item ${t.unlocked?"":"locked"}`,n.innerHTML=`
      <span class="easter-icon">${t.icon}</span>
      <span class="easter-name">${t.name}</span>
      <span class="easter-status">${t.unlocked?"✓":"🔒"}</span>
    `,t.unlocked&&n.addEventListener("click",()=>GE(e)),i.appendChild(n)})}function _h(){ti(10,"Creating universe..."),Ht=new R0,Ht.background=new Fe(17),Ht.fog=new Vc(17,15e-5),ti(20,"Initializing camera..."),yt=new gn(75,window.innerWidth/window.innerHeight,.1,1e4),yt.position.set(0,200,500),ti(30,"Setting up renderer..."),Ti=new Kh({antialias:!0,powerPreference:"high-performance"}),Ti.setSize(window.innerWidth,window.innerHeight),Ti.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.getElementById("canvas-container").appendChild(Ti.domElement),ti(40,"Adding controls..."),Ft=new N0(yt,Ti.domElement),Ft.enableDamping=!0,Ft.dampingFactor=.05,Ft.minDistance=50,Ft.maxDistance=3e3,Ft.autoRotate=!1,Ft.autoRotateSpeed=.5,document.addEventListener("keydown",r=>{switch(r.code){case"KeyW":case"ArrowUp":lt.forward=!0;break;case"KeyS":case"ArrowDown":lt.backward=!0;break;case"KeyA":case"ArrowLeft":lt.left=!0;break;case"KeyD":case"ArrowRight":lt.right=!0;break;case"KeyQ":lt.down=!0;break;case"KeyE":lt.up=!0;break}}),document.addEventListener("keyup",r=>{switch(r.code){case"KeyW":case"ArrowUp":lt.forward=!1;break;case"KeyS":case"ArrowDown":lt.backward=!1;break;case"KeyA":case"ArrowLeft":lt.left=!1;break;case"KeyD":case"ArrowRight":lt.right=!1;break;case"KeyQ":lt.down=!1;break;case"KeyE":lt.up=!1;break}}),ti(50,"Initializing infinite universe..."),ot=new OE;const i=ot.getChunkCoords(yt.position.x,yt.position.y,yt.position.z);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)ot.generateChunk(i.x+r,i.y+a,i.z+o);ot.updateStarField(),Rr=ot.getGalaxies(),Pr=ot.getNebulae(),Fs=ot.getStarField();let e=0;ot.chunks.forEach(r=>{e+=r.stars.length}),document.getElementById("star-count").textContent=`~${(e*10).toLocaleString()}`,ti(70,"Universe is infinite..."),ti(80,"Applying effects..."),Us=new k0(Ti);const t=new B0(Ht,yt);Us.addPass(t);const n=new Xs(new Pe(window.innerWidth,window.innerHeight),.8,.4,.85);Us.addPass(n);const s=new nd(BE);Us.addPass(s),window.bloomPass=n,window.chromaticPass=s,ti(90,"Initializing audio..."),An=new VE,ti(100,"Ready!"),tb(),setTimeout(()=>{document.getElementById("loading-screen").classList.add("hidden")},500),gf()}function ti(i,e){document.getElementById("loader-progress").style.width=`${i}%`,document.getElementById("loader-text").textContent=e}function tb(){window.addEventListener("resize",()=>{yt.aspect=window.innerWidth/window.innerHeight,yt.updateProjectionMatrix(),Ti.setSize(window.innerWidth,window.innerHeight),Us.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("keydown",e=>{if(QE(e.code),window.soundHunterActive&&An){const t=200+Math.random()*800;An.playNote(t,"32n")}}),Ti.domElement.addEventListener("click",i),document.getElementById("panel-toggle").addEventListener("click",()=>{const e=document.getElementById("control-panel");e.classList.toggle("collapsed"),document.getElementById("panel-toggle").textContent=e.classList.contains("collapsed")?"▶":"◀"}),document.getElementById("time-speed").addEventListener("input",e=>{un=parseFloat(e.target.value),document.getElementById("time-speed-value").textContent=`${un.toFixed(1)}x`}),document.getElementById("btn-time-forward").addEventListener("click",()=>{un=Math.min(un+1,10),document.getElementById("time-speed").value=un,document.getElementById("time-speed-value").textContent=`${un.toFixed(1)}x`}),document.getElementById("btn-time-reverse").addEventListener("click",()=>{un=Math.max(un-1,-10),document.getElementById("time-speed").value=un,document.getElementById("time-speed-value").textContent=`${un.toFixed(1)}x`}),document.getElementById("star-density").addEventListener("input",e=>{const t=parseInt(e.target.value);if(document.getElementById("star-density-value").textContent=`${t}K`,Je.starsPerChunk=t*2,ot){const n=yt.position.clone();for(const[a,o]of ot.chunks)o.galaxy&&Ht.remove(o.galaxy),o.nebula&&Ht.remove(o.nebula);ot.chunks.clear(),ot.galaxies=[],ot.nebulae=[];const s=ot.getChunkCoords(n.x,n.y,n.z);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++)ot.generateChunk(s.x+a,s.y+o,s.z+c);ot.updateStarField(),Rr=ot.getGalaxies(),Pr=ot.getNebulae(),Fs=ot.getStarField();let r=0;ot.chunks.forEach(a=>{r+=a.stars.length}),document.getElementById("star-count").textContent=`~${(r*10).toLocaleString()}`}}),document.getElementById("nebula-intensity").addEventListener("input",e=>{const t=parseFloat(e.target.value);document.getElementById("nebula-intensity-value").textContent=t.toFixed(1),Pr.forEach(n=>{n.material.uniforms.intensity.value=t})}),document.getElementById("bloom").addEventListener("input",e=>{const t=parseFloat(e.target.value);document.getElementById("bloom-value").textContent=t.toFixed(1),window.bloomPass&&(window.bloomPass.strength=t)}),document.getElementById("btn-reset-camera").addEventListener("click",()=>{yt.position.set(0,200,500),Ft.target.set(0,0,0),Ft.update()}),document.getElementById("btn-auto-rotate").addEventListener("click",e=>{bo=!bo,Ft.autoRotate=bo,e.target.classList.toggle("active",bo)}),document.getElementById("btn-easter-eggs").addEventListener("click",()=>{document.getElementById("easter-egg-panel").classList.toggle("visible"),eb()}),document.getElementById("audio-toggle").addEventListener("click",async()=>{An.initialized||await An.init();const e=An.toggle();document.getElementById("audio-toggle").textContent=e?"🔇":"🔊",document.getElementById("audio-toggle").classList.toggle("muted",e)});function i(e){const t=new Pe;t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1;const n=new D0;n.setFromCamera(t,yt);const s=n.intersectObject(Fs);if(s.length>0){const r=s[0].index,a=Fs.geometry.attributes.position.array,o=Fs.geometry.attributes.customColor.array,c=new Fe(o[r*3],o[r*3+1],o[r*3+2]),l=a[r*3].toFixed(2),u=a[r*3+1].toFixed(2),h=a[r*3+2].toFixed(2);Mn(`Star #${r} | Color: #${c.getHexString()} | Pos: (${l}, ${u}, ${h})`,"info"),window.soundHunterActive&&An&&An.playStarNote(r,Je.starCount)}}}let vh=0,uc=0,xh=60;function gf(){requestAnimationFrame(gf);const i=mh.getDelta(),e=mh.getElapsedTime();if(Ft.update(),lt.forward||lt.backward||lt.left||lt.right||lt.up||lt.down){const t=UE*i,n=new F;yt.getWorldDirection(n),n.y=0,n.normalize();const s=new F;s.crossVectors(n,yt.up).normalize(),lt.forward&&(yt.position.addScaledVector(n,t),Ft.target.addScaledVector(n,t)),lt.backward&&(yt.position.addScaledVector(n,-t),Ft.target.addScaledVector(n,-t)),lt.left&&(yt.position.addScaledVector(s,-t),Ft.target.addScaledVector(s,-t)),lt.right&&(yt.position.addScaledVector(s,t),Ft.target.addScaledVector(s,t)),lt.up&&(yt.position.y+=t,Ft.target.y+=t),lt.down&&(yt.position.y-=t,Ft.target.y-=t)}ot&&(ot.update(yt.position),Rr=ot.getGalaxies(),Pr=ot.getNebulae(),Fs=ot.getStarField()),Pr.forEach(t=>{t.material&&t.material.uniforms&&(t.material.uniforms.time.value=e*un),t.rotation.y+=1e-4*un}),Rr.forEach(t=>{t.rotation.y+=2e-4*un}),uc++,e-vh>=1&&(xh=uc,uc=0,vh=e,df&&(document.getElementById("fps").textContent=xh)),Us.render()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_h):_h();
