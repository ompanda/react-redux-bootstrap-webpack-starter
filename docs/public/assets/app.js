!function(e){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)a=l[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={7:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var c=setTimeout(function(){u({type:"timeout",target:l})},12e4);function u(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}}l.onerror=l.onload=u,i.appendChild(l)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="public/assets/",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;i.push([348,0]),n()}({115:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(334);var r=function(){return window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),window.location.origin}},154:function(e,t,n){e.exports=n(347)},230:function(e){e.exports={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ",user:{id:111,login:"john.doe@fake.mail",firstname:"John",lastname:"Doe",isAdmin:!0}}},257:function(e,t,n){"use strict";n.r(t),n.d(t,"disconnectUser",function(){return m}),n.d(t,"checkUserIsConnected",function(){return g}),n.d(t,"logUserIfNeeded",function(){return S}),n.d(t,"fetchUserInfoDataIfNeeded",function(){return O});var r=n(153),o=n(53),i=n(230),a=n(115),l=n(84),c=(n(449),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});var u="REQUEST_USER_INFOS_DATA",s="RECEIVED_USER_INFOS_DATA",f="ERROR_USER_INFOS_DATA",p="REQUEST_LOG_USER",d="RECEIVED_LOG_USER",v="ERROR_LOG_USER",h="CHECK_IF_USER_IS_AUTHENTICATED",y="DISCONNECT_USER",b={isFetching:!1,isLogging:!1,time:"",id:"",login:"",firstname:"",lastname:"",token:null,isAuthenticated:!1};function m(){return l.a.clearAllAppStorage(),{type:y}}function g(){var e,t=l.a.getToken(),n=l.a.getUserInfo(),r=!!(t&&(e=n,e&&e._id));return c({type:h,token:t},n,{isAuthenticated:r})}function w(e,t){var n,r,l=this;return n=regeneratorRuntime.mark(function n(r){var c,u,s,f,h,y,b;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=o.a.DEV_MODE?"FETCH_MOCK":"FETCH",u="login",s=i,f=Object(a.a)()+"/"+u,h="post",y={},b={credentials:"same-origin",data:{login:e,password:t}},n.abrupt("return",r({type:"FETCH_MIDDLEWARE",fetch:{type:c,actionTypes:{request:p,success:d,fail:v},mockResult:s,url:f,method:h,headers:y,options:b}}));case 8:case"end":return n.stop()}},n,l)}),r=function(){var e=n.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})},function(e){return r.apply(this,arguments)}}function S(e,t){return function(n,r){return function(e){if(e.userAuth.isLogging)return!1;return!0}(r())?n(w(e,t)):Promise.resolve()}}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n){return function(e){if(e.userAuth.isFetching)return!1;return!0}(n())?t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){var n=l.a.getToken(),r=o.a.DEV_MODE,c=o.a.api.users,p=r?"FETCH_MOCK":"FETCH",d=i,v=Object(a.a)()+"/"+c+"/"+e;return t({type:"FETCH_MIDDLEWARE",fetch:{type:p,actionTypes:{request:u,success:s,fail:f},mockResult:d,url:v,method:"get",headers:{authorization:"Bearer "+n},options:{credentials:"same-origin"}}})}}(e)):Promise.resolve()}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments[1],n=Object(r.format)(new Date);switch(t.type){case h:return c({},e,{actionTime:n,isAuthenticated:t.isAuthenticated,token:t.token||b.token,id:t.user&&t.user.id?t.user.id:b.id,login:t.user&&t.user.login?t.user.login:b.login,firstname:t.user&&t.user.firstname?t.user.firstname:b.firstname,lastname:t.user&&t.user.lastname?t.user.lastname:b.firstname});case y:return c({},e,{actionTime:n,isAuthenticated:!1,token:b.token,id:b.id,login:b.login,firstname:b.firstname,lastname:b.lastname});case p:return c({},e,{actionTime:n,isLogging:!0});case d:var o=t.payload.data;return c({},e,{actionTime:n,isAuthenticated:!0,token:o.token,id:o.id,login:o.login,firstname:o.firstname,lastname:o.lastname,isLogging:!1});case v:return c({},e,{actionTime:n,isAuthenticated:!1,isLogging:!1});case u:return c({},e,{actionTime:n,isFetching:!0});case s:var i=t.payload.data;return c({},e,{actionTime:n,isFetching:!1,id:i.id,login:i.login,firstname:i.firstname,lastname:i.lastname});case f:return c({},e,{actionTime:n,isFetching:!1});default:return e}}},335:function(e){e.exports=[{id:1,label:"item 1"},{id:2,label:"item 2"}]},347:function(e,t,n){"use strict";n.r(t);var r=n(116),o=n(337),i=n.n(o),a=n(97),l=n(336),c=n(155),u=n.n(c),s=n(153),f=(n(335),n(53),n(115),n(453),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});var p="REQUEST_FAKE_FETCH",d="RECEIVED_FAKE_FETCH",v="ERROR_FAKE_FETCH",h={isFetching:!1,actionTime:"",data:[],error:{}};var y=n(257),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m={fakeModuleWithFetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments[1],n=Object(s.format)(new Date);switch(t.type){case p:return f({},e,{actionTime:n,isFetching:!0});case d:return f({},e,{actionTime:n,isFetching:!1,data:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t.payload))});case v:return f({},e,{actionTime:n,isFetching:!1,error:t.error?f({},t.error):{}});default:return e}},userAuth:y.default},g=Object(r.combineReducers)(b({},m,{routing:a.c})),w=n(332),S=n.n(w),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k=function(e){return function(t){return function(n){if(!n.fetch)return t(n);if(!n.fetch.type||"FETCH_MOCK"===!n.fetch.type||"FETCH"===!n.fetch.type)return t(n);if(!n.fetch.actionTypes)return t(n);if("FETCH_MOCK"===n.fetch.type){if(!n.fetch.mockResult)throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');var r=n.fetch,o=r.actionTypes,i=o.request,a=o.success,l=r.mockResult;return e.dispatch({type:i}),Promise.resolve(e.dispatch({type:a,payload:{status:200,data:l}}))}if("FETCH"===n.fetch.type){var c=n.fetch,u=c.actionTypes,s=u.request,f=u.success,p=u.fail,d=c.url,v=c.method,h=c.headers,y=c.options;return e.dispatch({type:s}),S.a.request(O({method:v,url:d,withCredentials:!0,headers:O({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},h)},y)).then(function(t){return e.dispatch({type:f,payload:t})}).catch(function(t){return e.dispatch({type:p,error:t.response}),Promise.reject(t.response)})}return t(n)}}};n.d(t,"history",function(){return _}),n.d(t,"default",function(){return E});var _=u()(),j=Object(l.composeWithDevTools)(Object(r.applyMiddleware)(i.a,k,Object(a.b)(_)));function E(e){return Object(r.createStore)(g,e,j)}},348:function(e,t,n){"use strict";n.r(t);n(778);var r,o,i=n(1),a=n.n(i),l=n(17),c=n(345),u=n.n(c),s=n(344),f=n(343),p=n.n(f),d=n(117),v=(r=["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],o=["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}})));var h=function(){return Object(d.c)(v)},y=n(97),b=n(24),m=n(233),g=n(118),w=n.n(g),S=n(154),O=n.n(S),k=n(26),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var j,E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),_(t,[{key:"componentDidUpdate",value:function(e){window&&(e.location!==this.props.location&&window.scrollTo(0,0))}},{key:"render",value:function(){return this.props.children}}]),t}(),C=Object(k.e)(E),I=n(84),T=(j="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:j,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),P(t,[{key:"componentDidMount",value:function(){I.a.clearAllAppStorage()}},{key:"render",value:function(){return a.a.createElement(b.c,this.props,T(b.b,{to:{pathname:"/login"}}))}}]),t}(),N=Object(b.e)(A),R=(n(346),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),x=R("button",{className:"navbar-toggle collapsed",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},void 0,R("span",{className:"sr-only"},void 0,"Toggle navigation"),R("span",{className:"icon-bar"}),R("span",{className:"icon-bar"}),R("span",{className:"icon-bar"})),F=function(){return x};F.displayName="Humburger";var L=F,D=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function $(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var U=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=$(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleLeftNavItemClick=function(e){var t=r.props;(0,t.onClick)(e,t.viewName)},$(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),M(t,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.label;return D("li",{},void 0,D(b.a,{to:t,onClick:this.handleLeftNavItemClick},void 0,n))}}]),t}(),B=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),H=function(e){var t=e.leftLinks,n=e.onLeftNavButtonClick;return B("ul",{className:"nav navbar-nav"},void 0,t.map(function(e,t){var r=e.link,o=e.label,i=e.viewName;return B(U,{link:r,label:o,viewName:i,onClick:n},t)}))};H.defaultProps={leftLinks:[]},H.displayName="LeftNav";var W=H,J=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function V(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var K=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=V(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleRightNavItemClick=function(e){var t=r.props;(0,t.onClick)(e,t.viewName)},V(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),z(t,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.label;return J("li",{},void 0,J(b.a,{to:t,onClick:this.handleRightNavItemClick},void 0,n))}}]),t}(),Y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),q=function(e){var t=e.rightLinks,n=e.onRightNavButtonClick;return Y("ul",{className:"nav navbar-nav navbar-right"},void 0,t.map(function(e,t){var r=e.link,o=e.label,i=e.viewName;return Y(K,{link:r,label:o,viewName:i,onClick:n},t)}))};q.defaultProps={rightLinks:[]},q.displayName="RightNav";var Z=q,G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Q=G(L,{}),X=function(e){var t=e.brand,n=e.navModel,r=e.handleLeftNavItemClick,o=e.handleRightNavItemClick;return G("nav",{className:"navbar navbar-default"},void 0,G("div",{className:"containersCustom"},void 0,G("div",{className:"navbar-header"},void 0,Q,G("a",{className:"navbar-brand"},void 0,t)),G("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},void 0,G("ul",{className:"nav navbar-nav"},void 0,G(W,{leftLinks:n.leftLinks,onLeftNavButtonClick:r})),G("ul",{className:"nav navbar-nav navbar-right"},void 0,G(Z,{rightLinks:n.rightLinks,onRightNavButtonClick:o})))))};X.defaultProps={brand:"brand"},X.displayName="NavigationBar";var ee=X,te=n(6),ne=n.n(te),re=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),oe=re("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"}),ie=function(e){var t=e.color;return re("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:""+t},void 0,oe)};ie.defaultProps={color:"#F1F1F1"},ie.displayName="UpIcon";var ae=ie,le=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"]);var ce=d.b.div(le),ue=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe="-10px",pe={position:"fixed",right:fe,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"},de=ue(ce,{},void 0,ue(ae,{color:"#F1F1F1"})),ve=function(e){var t=e.onClick,n=e.position,r=e.children,o=e.motionStyle,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom-right",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe,n=se({},t);switch(e){case"bottom-right":return n.right=fe,n.left="",n;case"bottom-left":return n.right="",n.left=fe,n;default:return t}}(n,se({},o,pe));return ue("button",{style:i,className:ne()({btn:!0}),onClick:t},void 0,!r&&de,!!r&&r)};ve.defaultProps={position:"bottom-right"},ve.displayName="BackToTopButton";var he=ve,ye=n(156),be=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),me=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function ge(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var we=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=ge(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={windowScrollY:0,showBackButton:!1,tickingScollObserve:!1},r.handleWindowScroll=function(){if(window){var e=r.state,t=e.windowScrollY,n=e.tickingScollObserve,o=r.props.minScrollY,i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;n||window.requestAnimationFrame(function(){if(t!==i){var e=i>=o;r.setState({windowScrollY:i,showBackButton:e})}r.setState({tickingScollObserve:!1})}),r.setState({tickingScollObserve:!0})}},r.handlesOnBackButtonClick=function(e){e&&e.preventDefault();var t=r.props.minScrollY,n=r.state.windowScrollY;window&&n&&n>t&&window.scroll({top:0,left:0,behavior:"smooth"})},r.scrollDone=function(){var e=r.props.onScrollDone;e&&e()},ge(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),me(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,t=this.state.showBackButton;return be(ye.Motion,{style:{x:Object(ye.spring)(t?0:120,ye.presets.stiff)}},void 0,function(t){var n=t.x;return be(he,{position:"bottom-right",onClick:e.handlesOnBackButtonClick,motionStyle:{WebkitTransform:"translate3d("+n+"px, 0, 0)",transform:"translate3d("+n+"px, 0, 0)"}})})}}]),t}();we.defaultProps={minScrollY:120,onScrollDone:function(){}};var Se=we,Oe={brand:"React Redux Bootstrap Starter",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"Protected",link:"/protected",view:"protected",isRouteBtn:!0},{label:"About",link:"/about",view:"about",isRouteBtn:!0},{label:"Disconnect",link:"/login",view:"login",isRouteBtn:!0}]},ke=n(53);"function"==typeof Symbol&&Symbol.iterator,ke.a.sw.path;var _e=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Ce(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var Ie=_e(Se,{minScrollY:40,scrollTo:"appContainer"});var Te=function(){return function(e){var t=function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=Ce(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r.state={navModel:Oe},r.handleLeftNavItemClick=function(e,t){},r.handleRightNavItemClick=function(e,t){},Ce(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.Component),Ee(n,[{key:"componentDidMount",value:function(){"undefined"==typeof window||je(window)}},{key:"render",value:function(){var t=this.props,n=(t.history,t.location,t.match,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["history","location","match"])),r=this.state.navModel;return _e("div",{id:"appContainer"},void 0,_e(ee,{brand:r.brand,navModel:r,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),_e("div",{className:"container-fluid"},void 0,a.a.createElement(e,n)),Ie)}}]),n}();return w()(k.e)(t)}},Pe=n(85),Ae=Object(Pe.a)(function(){return n.e(6).then(n.bind(null,781))},{modules:["../pages/home"]}),Ne=Object(Pe.a)(function(){return n.e(5).then(n.bind(null,786))},{modules:["../pages/about"]}),Re=Object(Pe.a)(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,787))},{modules:["../pages/login"]}),xe=(Object(Pe.a)(function(){return n.e(3).then(n.bind(null,785))},{modules:["../pages/protected"]}),Object(Pe.a)(function(){return n.e(2).then(n.bind(null,788))},{modules:["../pages/pageNotFound"]})),Fe=(Object(Pe.a)(function(){return n.e(1).then(n.bind(null,782))},{modules:["../components/privateRoute/PrivateRoute"]}),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),Le=Fe(k.c,{},void 0,Fe(k.a,{exact:!0,path:"/",component:Ae}),Fe(k.a,{path:"/about",component:Ne}),Fe(k.a,{path:"*",component:xe})),De=function(){return Le},Me=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),$e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Ue=w()(Te())(De),Be=O()(),He=Me(Ue,{}),We=Me(b.c,{exact:!0,path:"/login",component:Re}),Je=Me(N,{path:"/logout"}),ze=Me(b.c,{path:"*",component:xe}),Ve=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),$e(t,[{key:"render",value:function(){return Me(m.a,{store:Be},void 0,Me(y.a,{history:S.history},void 0,Me(C,{},void 0,Me(b.d,{},void 0,He,We,Je,ze))))}}]),t}(),Ke=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Ye=document.getElementById("root");p.a.polyfill(),window.__forceSmoothScrollPolyfill__=!0,h(),u()();var qe,Ze,Ge;qe=Ve,Ze=Ke(s.AppContainer,{},void 0,Ke(qe,{})),Ge=function(){return Ze},Ye.hasChildNodes()?Object(l.hydrate)(Ke(Ge,{}),Ye):Object(l.render)(Ke(Ge,{}),Ye)},449:function(e,t){},452:function(e,t){},453:function(e,t){},53:function(e,t,n){"use strict";t.a={DEV_MODE:!0,api:{fakeEndPoint:"api/somewhere",users:"api/someusersapi"},sw:{path:"public/assets/sw.js"}}},84:function(e,t,n){"use strict";n(452);var r=n(333),o=n.n(r),i=n(224),a=n.n(i),l=["localStorage","sessionStorage"],c=JSON.parse,u=JSON.stringify,s={getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===l[0]?localStorage&&localStorage.getItem(t)||null:e===l[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token";!e||e.length<=0||(t===l[0]&&localStorage&&localStorage.setItem(n,e),t===l[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===l[0]?!(!localStorage||!localStorage.getItem(t)):e===l[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return localStorage&&localStorage[e]?(localStorage.removeItem(e),!0):!(!sessionStorage||!sessionStorage[e])&&(sessionStorage.removeItem(e),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=o()(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date,r=a()(n,t);return r},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"userInfo";return e===l[0]?localStorage&&c(localStorage.getItem(t))||null:e===l[1]&&sessionStorage&&c(sessionStorage.getItem(t))||null},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";!e||e.length<=0||(t===l[0]&&localStorage&&localStorage.setItem(n,u(e)),t===l[1]&&sessionStorage&&sessionStorage.setItem(n,u(e)))},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";localStorage&&localStorage[e]&&localStorage.removeItem(e),sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()}};t.a=s}});