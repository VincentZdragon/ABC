window.onload = function() {
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	//音乐播放完后，CD图标体质旋转效果
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	//点击CD图标，控制音乐播放状态
	// music.onclick = function () {
	// if(audio.paused){
	// 		audio.play();
	// 		// this.setAttribute("class","play");
	// 		this.style.animationPlayState = "running";//安卓兼容性不好
	// 	}else {
	// 		audio.pause();
	// 		// this.setAttribute("class","");
	// 		this.style.animationPlayState = "paused";
	// 	};
	// }
	// 手机屏触摸
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			// this.setAttribute("class","play");
			this.style.animationPlayState = "running";//安卓兼容性不好
		}else {
			audio.pause();
			// this.setAttribute("class","");
			this.style.animationPlayState = "paused";
		};
	},false);

	//第一页page1点击跳转到第二页page2
	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top		= "100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			page3.setAttribute("class","page fadein");
		},5500)
	},false)
};