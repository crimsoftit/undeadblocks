(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,a,t){e.exports=t.p+"static/media/add_icon.bc5dc96b.PNG"},218:function(e,a,t){e.exports=t.p+"static/media/home_logo.308c420b.png"},219:function(e,a,t){e.exports=t.p+"static/media/udb.086fc202.png"},222:function(e,a,t){e.exports=t.p+"static/media/amateur_bg.ec10d60b.PNG"},223:function(e,a,t){e.exports=t.p+"static/media/survivor_bg.fd5ab76f.png"},224:function(e,a,t){e.exports=t.p+"static/media/assassin_bg.3b746597.png"},225:function(e,a,t){e.exports=t.p+"static/media/z_killer.aef0822e.PNG"},229:function(e,a,t){e.exports=t(513)},234:function(e,a,t){},235:function(e){e.exports=JSON.parse("{}")},250:function(e,a){},252:function(e,a){},254:function(e,a){},258:function(e,a){},283:function(e,a){},285:function(e,a){},293:function(e,a){},295:function(e,a){},509:function(e,a,t){},513:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t.n(n),c=t(215),s=t.n(c),r=(t(234),t(4)),m=t(5),i=t(7),o=t(6),d=t(8),u=(t(235),t(3),t(216),t(80),t(509),t(218)),E=t.n(u),N=t(219),b=t.n(N),v=t(132),p=t.n(v),h=(t(510),t(130)),f=function(){var e=Object(n.useState)(null),a=(e.errMsg,e.setErrMsg,Object(n.useState)(null)),t=(a.defAcc,a.setDefAcc),c=Object(n.useState)(null),s=(c.userBal,c.setUserBal),r=Object(n.useState)("Connect Wallet.."),m=(r.connBtnText,r.setConnBtnText,function(e){t(e),i(e)}),i=function(e){window.ethereum.request({method:"eth_getBalance",params:[e,"latest"]}).then((function(e){s(h.a.utils.formatEther(e))}))};return window.ethereum.on("accountsChanged",m),window.ethereum.on("chainChanged",(function(){window.location.reload()})),l.a.createElement("div",null,l.a.createElement("button",{className:"cybr-btn enableEthereumButton",onClick:function(){window.ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){m(e[0])})):alert("ERROR: MetaMask not installed/enabled")}},"Connect Wallet",l.a.createElement("span",{"aria-hidden":!0},"_"),l.a.createElement("span",{"aria-hidden":!0,className:"cybr-btn__glitch"}),l.a.createElement("span",{"aria-hidden":!0,className:"cybr-btn__tag"},"R25")))},g=t(222),_=t.n(g),w=t(223),y=t.n(w),x=t(224),k=t.n(x),S=t(225),O=t.n(S),P=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={storageValue:0,web3:null,accounts:null,contract:null},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main_page"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:E.a})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Features")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"My Weapons")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Wagyu Games")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"}))),l.a.createElement(f,null)))),l.a.createElement("div",{className:"m_content"},l.a.createElement("div",{className:"c_slider"},l.a.createElement("div",{className:"slider_d"},l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel","data-interval":"false"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("div",{className:"the_images"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card_title"},"AMATEUR"),l.a.createElement("img",{className:"ban_i",src:_.a}),l.a.createElement("div",{className:"d_container"},l.a.createElement("h3",{className:"w_price",id:"a_text"},"0.1 ETH"),l.a.createElement("p",{className:"w_det"},l.a.createElement("b",null,"Knife + Pistol"),l.a.createElement("br",null),l.a.createElement("b",{className:"w_det1"},"Playable in game")),l.a.createElement("button",{id:"button",className:"noselect"},"Buy Now"))))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"the_images"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card_title"},"SURVIVOR"),l.a.createElement("img",{className:"ban_i",src:y.a}),l.a.createElement("div",{className:"d_container",id:"surv_d"},l.a.createElement("h3",{className:"w_price"},"0.3 ETH"),l.a.createElement("p",{className:"w_det"},l.a.createElement("b",null,"Knife + MP5 + Pistol"),l.a.createElement("br",null),l.a.createElement("b",{className:"w_det1"},"Playable in game")),l.a.createElement("button",{id:"button",className:"noselect"},"Buy Now"))))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"the_images"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card_title"},"ASSASSIN"),l.a.createElement("img",{className:"ban_i",src:k.a}),l.a.createElement("div",{className:"d_container",id:"ass_d"},l.a.createElement("h3",{className:"w_price"},"0.5 ETH"),l.a.createElement("p",{className:"w_det"},l.a.createElement("b",null,"Knife + AK47 + Pistol + Shotgun + 1 random perk"),l.a.createElement("br",null),l.a.createElement("b",{className:"w_det1"},"Playable in game")),l.a.createElement("button",{id:"button",className:"noselect"},"Buy Now"))))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"the_images"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card_title"},"ZOMBIE KILLER"),l.a.createElement("img",{className:"ban_i",src:O.a}),l.a.createElement("div",{className:"d_container",id:"zombie_d"},l.a.createElement("h3",{className:"w_price"},"1 ETH"),l.a.createElement("p",{className:"w_det"},l.a.createElement("b",null,"Knife + F1 + Pistol + Shotgun + 4 perks + Grenade"),l.a.createElement("br",null),l.a.createElement("b",{className:"w_det1"},"Playable in game")),l.a.createElement("button",{id:"button",className:"noselect"},"Buy Now")))))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"fa fa-chevron-left fa-lg","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"fa fa-chevron-right fa-lg","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))),l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"item2 udb1"},l.a.createElement("img",{className:"udb",src:b.a})),l.a.createElement("div",{className:"item3"},l.a.createElement("h6",null,"INTRODUCING THE WEAPONS MINTING GUIDE"),l.a.createElement("p",null,"Read our Medium guide and learn how minting works.")),l.a.createElement("div",{className:"item4"},l.a.createElement("button",{className:"button"},l.a.createElement("span",null,"Read Article ")))),l.a.createElement("div",{className:"me_weapons"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"My Weapons"),l.a.createElement("p",null,"Weapon loadouts found in your connected wallet will appear here.")),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column",onClick:B},l.a.createElement("img",{className:"icon_img",src:p.a})),l.a.createElement("div",{className:"column",onClick:B},l.a.createElement("img",{className:"icon_img",src:p.a})))))))}}]),a}(n.Component),B=function(){window.scrollTo({top:0,behavior:"smooth"})},C=P;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.6de839cc.chunk.js.map