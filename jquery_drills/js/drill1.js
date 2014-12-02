$(document).ready(function(){
	$(".shape").on("click", function(){
		$(this).fadeOut().animate({
			// Previously, I just had the code below, but this went outside the stage div
			// left: Math.round(Math.random() * 100 + 300),
			// top: Math.round(Math.random() * 100 + 300)
			left: Math.floor(Math.random() * ($(".stage").width() - $(".shape").width())),
			top: Math.floor(Math.random() * ($(".stage").height() - $(".shape").height()))
		}, 500).fadeIn("slow");
	});
});