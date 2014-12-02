$(document).ready(function(){

    $(document).on('keyup',function(event){
    	if(event.which === 39 && $(".shape").position().left < 800){
    		$(".shape").animate({
    			left: "+=50"
    		},500)
    	} else if(event.which === 37 && $(".shape").position().left > 0){
    		$(".shape").animate({
    			left: "+=-50"
    		}, 500)
    	} else if(event.which === 38 && $(".shape").position().top > 0){
    		$(".shape").animate({
    			top: "+=-50"
    		}, 500)
    	} else if(event.which === 40 && $(".shape").position().top < 400){
    		$(".shape").animate({
    			top: "+=50"
    		}, 500)
    	} else if(event.which === 83){
    		$(".shape").effect("shake", { times: 4 }, 500);
    	};
    });
});

