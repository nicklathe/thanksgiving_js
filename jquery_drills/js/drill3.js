$(document).ready(function(){
    $(".shape").on("mouseover", function(){
    	$(this).css("background-color","red").removeClass("ball");
    	$(this).on("mouseout", function(){
    		$(this).css("background-color","#4444CC").addClass("ball");
    	});
    });
});

