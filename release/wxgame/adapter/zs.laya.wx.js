window.zsSdk=function(){function zsSdk(){}return zsSdk.rewardedVideoAd=null,zsSdk.videoCompletedHandler=null,zsSdk.videoInterruptHandler=null,zsSdk.videoErrorHandler=null,zsSdk.bannerAd=null,zsSdk.bannerAdUnitId=null,zsSdk.fullScreenAD=null,zsSdk.fullScreenADUnitId=null,zsSdk.userInfoButton=null,zsSdk.bannerAdScale=.9,zsSdk.bannerLiveTime=0,zsSdk.bannerLastShowTime=0,zsSdk.init=function(){wx.showShareMenu({withShareTicket:!0}),window.zsResUrl&&(Laya.URL.basePath=window.zsResUrl,Laya.MiniAdpter.nativefiles=window.zsNativefiles),Laya.MiniAdpter.getUrlEncode=function(n,e){return-1!=n.indexOf(".fnt")||-1!=n.indexOf(".json")?"utf8":"arraybuffer"==e?"":"ascii"},console.log("zsSdk.init")},zsSdk.login=function(n,e){wx.login({success:function(i){i.code?n&&n.runWith({identityId:i.code}):e&&e.runWith("Code不存在")},fail:function(){e&&e.runWith("登陆失败")},complete:function(){}})},zsSdk.loadSubpackage=function(n,e,i,t){var o=wx.loadSubpackage({name:n,success(n){i&&i.runWith(1)},fail(n){t&&t.runWith(1)}});return!!o&&(e&&o.onProgressUpdate(function(n){e.runWith(n.progress)}),!0)},zsSdk.createUserInfoButton=function(n,e){var i=wx.getSystemInfoSync();this.userInfoButton=wx.createUserInfoButton({type:"image",text:"",style:{left:i.windowWidth*n.x,top:i.windowHeight*n.y,width:i.windowWidth*n.width,height:i.windowHeight*n.height,opacity:1}});this.userInfoButton.onTap(function(n){console.log("userInfoButtonOnTap:"+n),e&&e.runWith(n)})},zsSdk.showUserInfoButton=function(){this.userInfoButton&&this.userInfoButton.show()},zsSdk.hideUserInfoButton=function(){this.userInfoButton&&this.userInfoButton.hide()},zsSdk.destroyUserInfoButton=function(){this.userInfoButton&&(this.userInfoButton.destroy(),this.userInfoButton=null)},zsSdk.openShare=function(n,e){wx.shareAppMessage({title:n,imageUrl:e})},zsSdk.initVideoAD=function(n){if(null!=n&&""!=n){if(this.rewardedVideoAd=wx.createRewardedVideoAd({adUnitId:n}),null!=this.rewardedVideoAd){var e=this;this.rewardedVideoAd.onError(function(n){console.log(n),e.rewardedVideoAd=null,e.errorHandler&&e.errorHandler.runWith(n)}),this.rewardedVideoAd.onClose(function(n){n&&n.isEnded||void 0===n?e.videoCompletedHandler&&e.videoCompletedHandler.run():e.videoInterruptHandler&&e.videoInterruptHandler.run()})}}else this.rewardedVideoAd=null},zsSdk.isVideoEnable=function(){return null!=this.rewardedVideoAd},zsSdk.playVideo=function(n,e,i){if(null!=this.rewardedVideoAd){this.videoErrorHandler=i,this.videoCompletedHandler=n,this.videoInterruptHandler=e;var t=this;this.rewardedVideoAd.show().catch(function(n){t.rewardedVideoAd.load().then(function(){t.rewardedVideoAd.show()})})}else i&&i.runWith("video disable")},zsSdk.initBannerAD=function(n,e,i,t){this.bannerAdUnitId=n,this.bannerAdScale=e,this.bannerLiveTime=i,this.bannerLastShowTime=0;var o=.5*(1-this.bannerAdScale),r=wx.getSystemInfoSync();if(this.bannerAd=wx.createBannerAd({adUnitId:n,style:{top:r.windowHeight-100,width:r.windowWidth*zsSdk.bannerAdScale,left:r.windowWidth*o}}),null!=this.bannerAd){this.bannerAd.onResize(function(n){console.log(r),zsSdk.bannerAd&&(zsSdk.bannerAd.style.top=r.windowHeight-n.height-10,zsSdk.bannerAd.style.left=.5*(r.windowWidth-n.width))});var s=this;this.bannerAd.onError(function(n){console.log(n),s.bannerAd=null,t&&t.run()}),this.bannerLastShowTime=Date.now(),console.log("initBanner:"+this.bannerLastShowTime+","+this.bannerLiveTime)}},zsSdk.showBanner=function(n){null!=this.bannerAdUnitId&&(null==this.bannerAd&&this.initBannerAD(this.bannerAdUnitId,this.bannerAdScale,this.bannerLiveTime,n),this.bannerAd&&this.bannerAd.show())},zsSdk.hideBanner=function(){this.bannerAd&&(this.bannerAd.hide(),this.bannerLastShowTime>0&&Date.now()-this.bannerLastShowTime>this.bannerLiveTime&&(this.bannerAd.destroy(),this.bannerAd=null,this.initBannerAD(this.bannerAdUnitId,this.bannerAdScale,this.bannerLiveTime)))},zsSdk.initFullScreenAD=function(n,e){var i=wx.getSystemInfoSync();i.SDKVersion<="2.6.0"?e&&e.runWith(i.SDKVersion+" <= 2.6.0"):this.fullScreenADUnitId=n},zsSdk.loadFullScreenAD=function(n,e){if(null!=this.fullScreenADUnitId&&(this.fullScreenAD=wx.createInterstitialAd({adUnitId:this.fullScreenADUnitId}),null!=this.fullScreenAD)){var i=this;this.fullScreenAD.onLoad(function(){n&&n.run()}),this.fullScreenAD.onError(function(n){console.log(n),i.fullScreenAD=null,e&&e.runWith(n)})}},zsSdk.showFullScreenAD=function(n){if(null!=this.fullScreenAD){var e=this;this.fullScreenAD.onClose(function(){e.fullScreenAD=null,n&&n.runWith(err)}),this.fullScreenAD.show()}},zsSdk.setUserCloudStorage=function(n,e,i,t){wx.setUserCloudStorage({KVDataList:n,success:function(n){console.log("-----success:"+JSON.stringify(n)),e&&e.runWith(n)},fail:function(n){console.log("-----fail:"+JSON.stringify(n)),i&&i.runWith(n)},complete:function(n){console.log("-----complete:"+JSON.stringify(n)),t&&t.runWith(n)}})},zsSdk}(),window.zsDevice=function(){function zsDevice(){}return zsDevice.deviceInfo=null,zsDevice.init=function(){this.deviceInfo=wx.getSystemInfoSync(),console.log(this.deviceInfo),console.log("zsDevice.init")},zsDevice.onShow=function(n){wx.onShow(function(e){console.log("zsDevice.show:"+Date.now()),n&&n.runWith(e)})},zsDevice.onHide=function(n){wx.onHide(function(){console.log("zsDevice.hide:"+Date.now()),n&&n.run()})},zsDevice.vibrateShort=function(){wx.vibrateShort({fail:function(){console.log("vibrateShort failed")}})},zsDevice.vibrateLong=function(){wx.vibrateLong({fail:function(){console.log("vibrateShort failed")}})},zsDevice.isNetValid=function(){return!0},zsDevice.statusBarHeight=function(){return this.deviceInfo?this.deviceInfo.statusBarHeight:0},zsDevice.screenWidth=function(){return this.deviceInfo?this.deviceInfo.screenWidth:1},zsDevice.screenHeight=function(){return this.deviceInfo?this.deviceInfo.screenHeight:1},zsDevice}();