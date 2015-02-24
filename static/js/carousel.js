(function(){
    var carouselIntervalTime = 5000;
  	$(document).ready(function carouselInit(){
			var intervalHandle = setInterval(function animate(){
				$("#carousel ul").animate({marginLeft:-780},1000,function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});
				})
			}, carouselIntervalTime);
	});
}());
