(function(g){var window=this;var P5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().da("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.T.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.H=a;this.ma("click",this.onClick,this);this.la("title",g.uO(a,e,"i"));g.Ne(this,g.hP(b.wb(),this.element))},Q5=function(a){g.T.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.bl=!1;this.player=a;this.L(a,"minimized",this.Ih);this.L(a,"onStateChange",this.YO)},R5=function(a){g.NN.call(this,a);
this.o=new Q5(this.player);this.o.hide();g.zN(this.player,this.o.element,4);a.app.M.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(P5,g.T);P5.prototype.onClick=function(){this.H.oa("onExpandMiniplayer")};g.t(Q5,g.T);g.k=Q5.prototype;
g.k.show=function(){this.Gc=new g.An(this.En,null,this);this.Gc.start();if(!this.bl){this.tooltip=new g.tS(this.player,this);g.C(this,this.tooltip);g.zN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.tb=new g.aP(this.player);g.C(this,this.tb);this.Vi=new g.T({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Vi);this.Vi.ba(this.element);this.L(this.Vi.element,"click",this.vC);var a=new g.T({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.rM()]});
g.C(this,a);a.ba(this.Vi.element);this.L(a.element,"click",this.Bl);a=new P5(this.player,this);g.C(this,a);a.ba(this.Vi.element);this.lj=new g.T({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.lj);this.lj.ba(this.Vi.element);this.L(this.lj.element,"click",this.vC);var b=new g.T({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.lj.element);a=new g.T({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.lj.element);var c=new g.T({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,c);c.ba(this.lj.element);this.RC=new g.UQ(this.player,this,!1);g.C(this,this.RC);this.RC.ba(b.element);b=new g.RQ(this.player,this);g.C(this,b);b.ba(a.element);this.nextButton=new g.UQ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ba(c.element);this.hg=new g.dS(this.player,this);g.C(this,this.hg);this.hg.ba(this.Vi.element);this.jc=new g.cR(this.player,this);g.C(this,this.jc);g.zN(this.player,this.jc.element,4);this.Eq=new g.T({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,
this.Eq);g.zN(this.player,this.Eq.element,4);a=new g.T({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.rM()]});g.C(this,a);a.ba(this.Eq.element);this.L(a.element,"click",this.Bl);a=new g.T({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.GM()]});g.C(this,a);a.ba(this.Eq.element);this.L(a.element,"click",this.YM);this.L(this.player,"presentingplayerstatechange",this.Ub);this.L(this.player,"appresize",this.Pa);this.L(this.player,
"fullscreentoggled",this.Pa);this.Pa();this.bl=!0}0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.T.prototype.hide.call(this);this.player.app.M.o||(this.bl&&this.jc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.T.prototype.X.call(this)};
g.k.Bl=function(){this.player.stopVideo();this.player.oa("onCloseMiniplayer")};
g.k.YM=function(){this.player.playVideo()};
g.k.vC=function(a){if(a.target===this.Vi.element||a.target===this.lj.element)g.P(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.iG(g.iM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.oa("onExpandMiniplayer")};
g.k.Ih=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.M.o)};
g.k.bd=function(){this.jc.Xb();this.hg.Xb()};
g.k.En=function(){this.bd();this.Gc&&this.Gc.start()};
g.k.Ub=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Pa=function(){this.jc.setPosition(0,g.iN(this.player).getPlayerSize().width,!1);this.jc.Sw()};
g.k.YO=function(a){this.player.app.M.o&&(0===a?this.hide():this.show())};
g.k.wb=function(){return this.tooltip};
g.k.Lc=function(){return!1};
g.k.ne=function(){return!1};
g.k.Nf=function(){return!1};
g.k.mw=function(){};
g.k.nj=function(){};
g.k.Am=function(){};
g.k.xj=function(){return null};
g.k.Vk=function(){return new g.yh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Fl=function(a,b,c,d,e){var f=0,h=d=0,l=g.Wh(a);if(b){c=g.Hn(b,"ytp-prev-button")||g.Hn(b,"ytp-next-button");var m=g.Hn(b,"ytp-play-button"),n=g.Hn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Th(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Hn(b,"ytp-miniplayer-button-top-left"),f=g.Th(b,this.element),b=g.Wh(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.iN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Vd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mh=function(){};
g.k.lh=function(){return!1};g.t(R5,g.NN);R5.prototype.create=function(){};
R5.prototype.dg=function(){return!1};
R5.prototype.load=function(){this.player.hideControls();this.o.show()};
R5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.YN.miniplayer=R5;})(_yt_player);
