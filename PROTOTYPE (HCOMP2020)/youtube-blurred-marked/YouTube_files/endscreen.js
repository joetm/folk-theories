(function(g){var window=this;var Hya=function(a,b){a.oa("onAutonavCoundownStarted",b)},T4=function(a,b,c){var d=b.Aa();
g.J(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Kc(c?c:"mqdefault.jpg");var f=b instanceof g.nB&&b.lengthSeconds?g.ML(b.lengthSeconds):null,h=!!e;e=h&&"RD"===(new g.jC(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.nB?b.wa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.hm||g.LL("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.ni(),is_live:l,is_list:h,is_mix:e,background:c?"background-image: url("+
c+")":""};b instanceof g.kC&&(d.playlist_length=b.getLength());a.update(d)},U4=function(a,b){g.T.call(this,{D:"div",
W:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},W4=function(a){g.T.call(this,{D:"div",
W:["ytp-upnext","ytp-player-content"],P:{"aria-label":"{{aria_label}}"},K:[{D:"div",J:"ytp-cued-thumbnail-overlay-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-upnext-top",K:[{D:"span",J:"ytp-upnext-header",V:"Up Next"},{D:"span",J:"ytp-upnext-title",V:"{{title}}"},{D:"span",J:"ytp-upnext-author",V:"{{author}}"}]},{D:"a",J:"ytp-upnext-autoplay-icon",P:{role:"button",href:"{{url}}","aria-label":"Play next video"},K:[{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},K:[{D:"circle",
J:"ytp-svg-autoplay-circle",P:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",J:"ytp-svg-autoplay-ring",P:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",J:"ytp-svg-fill",P:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",J:"ytp-upnext-bottom",K:[{D:"span",J:"ytp-upnext-cancel"},{D:"span",J:"ytp-upnext-paused",V:"Autoplay is paused"}]}]});
this.api=a;this.cancelButton=null;this.C=this.ca("ytp-svg-autoplay-ring");this.u=this.notification=this.o=this.suggestion=null;this.A=new g.G(this.jp,5E3,this);this.B=0;var b=this.ca("ytp-upnext-cancel");this.cancelButton=new g.T({D:"button",W:["ytp-upnext-cancel-button","ytp-button"],P:{tabindex:"0","aria-label":"Cancel autoplay"},V:"Cancel"});g.C(this,this.cancelButton);this.cancelButton.ma("click",this.JJ,this);this.cancelButton.ba(b);g.C(this,this.A);g.BN(this.api,this.element,this,18788);b=this.ca("ytp-upnext-autoplay-icon");
this.L(b,"click",this.yM);this.KB();this.L(a,"autonavvisibility",this.KB);this.L(a,"mdxnowautoplaying",this.VL);this.L(a,"mdxautoplaycanceled",this.WL);this.L(a,"mdxautoplayupnext",this.kE);V4(this)&&(a=(a=g.jN(g.dN(this.api)))?a.IG():null)&&this.kE(a);g.J(this.element,"ytp-upnext-mobile",this.api.O().o)},Y4=function(a,b){a.o||(g.Uo("a11y-announce","Up Next "+a.suggestion.title),a.B=(0,g.M)(),a.o=new g.G(function(){X4(a,b)},25),X4(a,b),Hya(a.api,b||g.O(a.api.O().experiments,"autoplay_time")||1E4));
g.Jn(a.element,"ytp-upnext-autoplay-paused")},V4=function(a){return 3===a.api.getPresentingPlayerType()},X4=function(a,b){var c=b||g.O(a.api.O().experiments,"autoplay_time")||1E4,d=Math.min(Iya(a),c);
c=Math.min(d/c,1);a.C.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&!V4(a)?a.select(!0):a.o&&a.o.start()},Iya=function(a){return(0,g.M)()-a.B},$4=function(a){Z4(a);
a.B=(0,g.M)();X4(a);g.I(a.element,"ytp-upnext-autoplay-paused")},Z4=function(a){a.o&&(a.o.dispose(),a.o=null)},Jya=function(a){U4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.o=new g.T({D:"div",J:"ytp-subscribe-card",K:[{D:"img",J:"ytp-author-image",P:{src:b.Bd}},{D:"div",J:"ytp-subscribe-card-right",K:[{D:"div",J:"ytp-author-name",V:b.author},{D:"div",J:"html5-subscribe-button-container"}]}]});g.C(this,this.o);this.o.ba(this.element);this.subscribeButton=new g.qP("Subscribe",null,"Unsubscribe",null,!0,!1,b.wf,b.subscribed,"trailer-endscreen",null,null,a);g.C(this,this.subscribeButton);this.subscribeButton.ba(this.o.ca("html5-subscribe-button-container"));
this.hide()},a5=function(a){var b=a.O(),c=g.Tw||g.Gh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.T.call(this,{D:"a",W:e,P:{href:"{{url}}",target:d?b.F:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{D:"div",J:"ytp-videowall-still-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-videowall-still-info",K:[{D:"span",J:"ytp-videowall-still-info-bg",K:[{D:"span",J:"ytp-videowall-still-info-content",P:c,K:[{D:"span",J:"ytp-videowall-still-info-title",V:"{{title}}"},{D:"span",J:"ytp-videowall-still-info-author",
V:"{{author_and_views}}"},{D:"span",J:"ytp-videowall-still-info-live",V:"Live"},{D:"span",J:"ytp-videowall-still-info-duration",V:"{{duration}}"}]}]}]},{D:"span",W:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{D:"span",J:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",J:"ytp-videowall-still-listlabel-length",K:[" (",{D:"span",V:"{{playlist_length}}"},")"]}]},{D:"span",W:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{D:"span",J:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{D:"span",J:"ytp-videowall-still-listlabel-length",V:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.o=new g.es(this);g.C(this,this.o);this.ma("click",this.onClick);this.ma("keypress",this.A);this.o.L(a,"videodatachange",this.Oa);g.CN(a,this.element,this);this.Oa()},b5=function(a){U4.call(this,a,"videowall-endscreen");
var b=this;this.H=a;this.A=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.I=!1;this.G=null;this.u=new g.vP(this);g.C(this,this.u);this.F=new g.G(function(){g.I(b.element,"ytp-show-tiles")},0);
g.C(this,this.F);var c=new g.T({D:"button",W:["ytp-button","ytp-endscreen-previous"],P:{"aria-label":"Previous"},K:[g.mM()]});g.C(this,c);c.ba(this.element);c.ma("click",this.NI,this);this.table=new g.VL({D:"div",J:"ytp-endscreen-content"});g.C(this,this.table);this.table.ba(this.element);c=new g.T({D:"button",W:["ytp-button","ytp-endscreen-next"],P:{"aria-label":"Next"},K:[g.nM()]});g.C(this,c);c.ba(this.element);c.ma("click",this.MI,this);this.o=new W4(a);g.C(this,this.o);g.zN(this.player,this.o.element,
4);this.hide()},c5=function(a){return g.AN(a.player)&&a.fy()&&!a.B},Kya=function(a,b){return(0,g.Lc)(b.suggestions,function(c){c=g.OL(a.H.O(),c);
g.C(a,c);return c})},d5=function(a){var b=a.Tu();
b!==a.I&&(a.I=b,a.player.S("autonavvisibility"))},e5=function(a){g.NN.call(this,a);
this.endScreen=null;this.listeners=new g.es(this);g.C(this,this.listeners);this.o=a.O();Lya(a)?this.endScreen=new b5(this.player):this.o.eb?this.endScreen=new Jya(this.player):this.endScreen=new U4(this.player);g.C(this,this.endScreen);g.zN(this.player,this.endScreen.element,4);this.tD();this.listeners.L(a,"videodatachange",this.tD,this);this.listeners.L(a,g.$y("endscreen"),this.JI,this);this.listeners.L(a,"crx_endscreen",this.KI,this)},Lya=function(a){a=a.O();
return a.Ga&&!a.eb};g.t(U4,g.T);g.k=U4.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.fy=function(){return!1};
g.k.Tu=function(){return!1};
g.k.iA=function(){return!1};g.t(W4,g.T);g.k=W4.prototype;g.k.jp=function(){this.notification&&(this.A.stop(),this.ob(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.KB=function(){g.YL(this,g.eN(this.api));g.FN(this.api,this.element,g.eN(this.api))};
g.k.pM=function(){window.focus();this.jp()};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.P(this.api.O().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Aa(),this.jp(),this.notification=new Notification("Up Next",{body:b.title,icon:b.Kc()}),this.u=this.L(this.notification,"click",this.pM),this.A.start())}Z4(this);this.api.nextVideo(!1,a)};
g.k.yM=function(a){!g.Ee(this.cancelButton.element,g.jp(a))&&g.qO(a,this.api)&&this.select()};
g.k.JJ=function(){g.gN(this.api,!0)};
g.k.VL=function(a){V4(this);this.show();Y4(this,a)};
g.k.kE=function(a){V4(this);this.suggestion&&this.suggestion.Aa().videoId===a.Aa().videoId||(this.suggestion=a,T4(this,a,"hqdefault.jpg"))};
g.k.WL=function(){V4(this);Z4(this);this.hide()};
g.k.X=function(){Z4(this);this.jp();g.T.prototype.X.call(this)};g.t(Jya,U4);g.t(a5,g.T);a5.prototype.select=function(){var a=this.suggestion.Aa().videoId,b=this.suggestion.getPlaylistId();(g.tU(this.api.app,a,this.suggestion.Bc,b,void 0,void 0)||this.api.da("web_player_endscreen_double_log_fix_killswitch"))&&g.EN(this.api,this.element)};
a5.prototype.onClick=function(a){g.qO(a,this.api,this.u,this.suggestion.Bc||void 0)&&this.select()};
a5.prototype.A=function(a){switch(a.keyCode){case 13:case 32:g.op(a)||(this.select(),g.np(a))}};
a5.prototype.Oa=function(){var a=this.api.getVideoData(),b=this.api.O();this.u=a.fc?!1:b.u};g.t(b5,U4);g.k=b5.prototype;g.k.create=function(){U4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=Kya(this,a),this.videoData=a);this.Kh();this.u.L(this.player,"appresize",this.Kh);this.u.L(this.player,"onVideoAreaChange",this.Kh);this.u.L(this.player,"videodatachange",this.Oa);this.u.L(this.player,"autonavchange",this.Uu);this.u.L(this.player,"autonavcancel",this.LI);a=this.videoData.autonavState;a!==this.G&&this.Uu(a);this.u.L(this.element,"transitionend",this.HN)};
g.k.destroy=function(){g.gs(this.u);g.Pe(this.stills);this.stills=[];this.suggestions=null;U4.prototype.destroy.call(this);g.Jn(this.element,"ytp-show-tiles");this.F.stop();this.G=this.videoData.autonavState};
g.k.fy=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){U4.prototype.show.call(this);g.Jn(this.element,"ytp-show-tiles");this.player.O().o?g.Dn(this.F):this.F.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.gN(this.player,!1);c5(this)?(d5(this),2===this.videoData.autonavState?this.player.O().da("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.o.select(!0):Y4(this.o):3===this.videoData.autonavState&&$4(this.o)):(g.gN(this.player,!0),d5(this))};
g.k.hide=function(){U4.prototype.hide.call(this);$4(this.o);d5(this)};
g.k.HN=function(a){g.jp(a)===this.element&&this.Kh()};
g.k.Kh=function(){if(this.suggestions&&this.suggestions.length){g.I(this.element,"ytp-endscreen-paginate");var a=this.H.Vk(!0,this.H.isFullscreen()),b=g.$M(this.H);b&&(b=b.Lc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var q=b/2,r=e/2,u=b<=f-2&&n>=r*m,w=e<=h-2&&n>=q*m;if((q+1)/r*d/c>c/(q/(r+1)*d)&&w)n-=q*m,e+=2;else if(u)n-=
r*m,b+=2;else if(w)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Vh(a,m,n);g.Dh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.o;f=this.suggestions[0];c.suggestion=f;T4(c,f,"hqdefault.jpg");g.J(this.element,"ytp-endscreen-takeover",c5(this));d5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(q=c,r=0,d&&f>=b-2&&h>=
e-2?r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),q=g.Wd(q+this.A,l),0!==r){u=this.stills[c];u||(u=new a5(this.player),this.stills[c]=u,a.appendChild(u.element));w=Math.floor(n*h/e);var B=Math.floor(m*f/b),z=Math.floor(n*(h+r)/e)-w-4,D=Math.floor(m*(f+r)/b)-B-4;g.Lh(u.element,B,w);g.Vh(u.element,D,z);g.Dh(u.element,"transitionDelay",(h+f)/20+"s");g.J(u.element,"ytp-videowall-still-mini",1===r);g.J(u.element,"ytp-videowall-still-large",2<r);r=u;q=this.suggestions[q];r.suggestion!==q&&(r.suggestion=
q,u=r.api.O(),w=g.Hn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",T4(r,q,w),g.jy(u)&&(u=q.ni(),u=g.Fd(u,g.FI({},"emb_rel_end")),r.la("url",u)),(q=(q=q.Bc)&&q.itct)&&g.DN(r.api,r.element,q));c++}g.J(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Be(e.element),g.Oe(e);this.stills.length=c}};
g.k.Oa=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.A=0,this.suggestions=Kya(this,a),this.videoData=a,this.Kh())};
g.k.MI=function(){this.A+=this.stills.length;this.Kh()};
g.k.NI=function(){this.A-=this.stills.length;this.Kh()};
g.k.iA=function(){return!!this.o.o};
g.k.Uu=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,Z4(this.o),this.La()&&this.Kh()):(this.C=!0,this.La()&&c5(this)&&(2===a?Y4(this.o):3===a&&$4(this.o)))};
g.k.LI=function(a){if(a){for(a=0;a<this.stills.length;a++)g.FN(this.H,this.stills[a].element,!0);this.Uu(1)}else this.B=null,this.C=!1;this.Kh()};
g.k.Tu=function(){return this.La()&&c5(this)};g.t(e5,g.NN);g.k=e5.prototype;g.k.FA=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Lya(this.player)||b;var c=a.yk||g.sy(a.Xa),d=g.uU(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.EA=function(){return this.endScreen.Tu()};
g.k.yH=function(){return this.EA()?this.endScreen.iA():!1};
g.k.X=function(){g.rQ(this.player.app,"endscreen",void 0);g.NN.prototype.X.call(this)};
g.k.load=function(){g.NN.prototype.load.call(this);this.endScreen.show()};
g.k.unload=function(){g.NN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.JI=function(a){this.FA()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.KI=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.tD=function(){g.rQ(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.Xy(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.Xy(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.vN(this.player,[a,b])};g.YN.endscreen=e5;})(_yt_player);
