var iWidth = 800;
var iHeight = 600;
var screenHeight = 0;
var screenWidth = 0;

// 开发环境
if(!chrome.tabs){
	var $config = {
			url					:  '',
			title               :  '',
			description         :  '', // 
			source: 'https://ya2.top?from=chrome', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
		};

	$('.social-share-cs').share($config);
	// 获取屏幕宽高
	screenHeight = window.screen.height; 
	screenWidth  = window.screen.width; 
}else{ 
	// 获取页面相关信息
	chrome.tabs.getSelected(null, function (tab) { 
		
		// 分享设置
		$('.social-share-cs').share({
			url					: tab.url,
			title               : tab.title,
			description         : '', // 
			source: 'https://ya2.top?from=chrome', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
			disabled            : ['google','wechat','facebook', 'twitter','qq','tencent','diandian'], // 禁用的站点
		}); 
		
		// 获取屏幕宽高
		screenHeight =  tab.height; 
		screenWidth  =  tab.width;  
	});
}

var shareWindow = null;

$('body').on('click','.social-share-icon',function(e){
	 if(shareWindow){
		 shareWindow.close();
	 }
	 setTimeout(function(){ 
		 var iTop = (screenHeight-30-iHeight)/2;//获得窗口的垂直位置;
		 var iLeft = (screenWidth-10-iWidth)/2; //获得窗口的水平位置; 
		 shareWindow = window.open(e.target.href,'_blank','width='+iWidth+',height='+iHeight+',left='+iLeft+',top='+iTop);
		 shareWindow.focus(); 
	 },0); 
	 return false;
});