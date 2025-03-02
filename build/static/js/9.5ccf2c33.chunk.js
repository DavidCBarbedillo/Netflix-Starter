(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[9,10],{1266:function(t,e){},1267:function(t,e){},1320:function(t,e){},1324:function(t,e){},1327:function(t,e){},1329:function(t,e){},1502:function(t,e,n){"use strict";n.r(e),n.d(e,"WalletConnectV1Adapter",(function(){return j}));var r=n(8),c=n(6),a=n(7),o=n(9),i=n(49),s=n(35),u=n(10),h=n(11),d=n(1),l=n.n(d),p=n(13),f=n.n(p),b=n(571),v=n(12),O=n(1317),w=n(24),y=n.n(w);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),f()(Object(o.a)(t),"name",v.i.WALLET_CONNECT_V1),f()(Object(o.a)(t),"adapterNamespace",v.c.EIP155),f()(Object(o.a)(t),"currentChainNamespace",v.f.EIP155),f()(Object(o.a)(t),"type",v.a.EXTERNAL),f()(Object(o.a)(t),"adapterOptions",void 0),f()(Object(o.a)(t),"status",v.d.NOT_READY),f()(Object(o.a)(t),"adapterData",{uri:""}),f()(Object(o.a)(t),"connector",null),f()(Object(o.a)(t),"wcProvider",null),f()(Object(o.a)(t),"rehydrated",!1),t.adapterOptions=C({},r),t.chainConfig=r.chainConfig||null,t}return Object(a.a)(n,[{key:"connected",get:function(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(i.a)(Object(s.a)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(v.m)(v.f.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new O.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(v.b.READY,v.i.WALLET_CONNECT_V1),this.status=v.d.READY,!this.connector.connected){t.next=10;break}return this.rehydrated=!0,t.next=10,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=Object(r.a)(l.a.mark((function t(){var e,c=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(i.a)(Object(s.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw v.j.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 6:return t.abrupt("return",this.provider);case 7:if(this.status===v.d.CONNECTING){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),t.next=11,this.createNewSession();case 11:this.status=v.d.CONNECTING,this.emit(v.b.CONNECTING,{adapter:v.i.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise((function(t,e){if(!c.connector)return e(v.j.notReady("Wallet adapter is not ready yet"));c.connector.on("modal_closed",Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.status=v.d.READY,c.emit(v.b.READY,v.i.WALLET_CONNECT_V1),t.abrupt("return",e(new Error("User closed modal")));case 3:case"end":return t.stop()}}),t)}))));try{c.connector.on("connect",function(){var e=Object(r.a)(l.a.mark((function e(n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&c.emit(v.b.ERRORED,n),e.next=3,c.onConnectHandler(r.params[0]);case 3:return e.abrupt("return",t(c.provider));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}catch(n){y.a.error("Wallet connect v1 adapter error while connecting",n),c.status=v.d.READY,c.rehydrated=!0,c.emit(v.b.ERRORED,n),e(n instanceof v.l?n:v.k.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw v.k.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(r.a)(l.a.mark((function t(){var e,n,r=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},n=e.cleanup,this.connector&&this.connected){t.next=4;break}throw v.k.notConnectedError("Not connected with wallet");case 4:return t.next=6,this.connector.killSession();case 6:this.rehydrated=!1,n?(this.connector=null,this.status=v.d.NOT_READY,this.wcProvider=null):this.status=v.d.READY,this.emit(v.b.DISCONNECTED);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var t=Object(r.a)(l.a.mark((function t(){var e,n,c,a,o=this,i=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=i.length>0&&void 0!==i[0]?i[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw v.j.notReady("Wallet adapter is not ready yet");case 3:if(!c.forceNewSession||!this.connector.pending){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(null===(e=this.adapterOptions)||void 0===e||null===(n=e.adapterSettings)||void 0===n||!n.qrcodeModal){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(a=this.chainConfig)||void 0===a?void 0:a.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise((function(t,e){var n;if(!o.connector)return e(v.j.notReady("Wallet adapter is not ready yet"));y.a.debug("creating new session for web3auth wallet connect"),o.connector.on("display_uri",function(){var n=Object(r.a)(l.a.mark((function n(r,c){var a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=3;break}return o.emit(v.b.ERRORED,v.k.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(r));case 3:return i=c.params[0],o.updateAdapterData({uri:i}),null===(a=o.connector)||void 0===a||a.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),o.connector.createSession({chainId:parseInt((null===(n=o.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(t){return y.a.error("error while creating new wallet connect session",t),o.emit(v.b.ERRORED,t),e(t)}))})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var t=Object(r.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connector&&this.wcProvider){t.next=2;break}throw v.j.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw v.j.invalidParams("Chain config is not set");case 4:if(n=e.chainId,y.a.debug("connected chainId",n),(r=parseInt(n,Object(v.n)(n)?16:10))===parseInt(this.chainConfig.chainId,16)){t.next=12;break}return t.next=10,this.createNewSession({forceNewSession:!0});case 10:return this.emit(v.b.ERRORED,v.j.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(r,", Please switch to correct chain from wallet"))),t.abrupt("return");case 12:return t.next=14,this.wcProvider.setupProvider(this.connector);case 14:this.subscribeEvents(this.connector),this.status=v.d.CONNECTED,this.emit(v.b.CONNECTED,{adapter:v.i.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(t){var e=this;t.on("session_update",function(){var t=Object(r.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.emit(v.b.ERRORED,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new b.a(t)}}]),n}(v.e)}}]);
//# sourceMappingURL=9.5ccf2c33.chunk.js.map