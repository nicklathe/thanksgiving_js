// fix this

$(document).ready(function(){
	$(".task-list").find("li").on("click", function(){
		//make a switch statement
		switch($(this).index()){

			case 0:
				$(".stage").hide();
				break;
			case 1:
				$(".stage #first ul.first").hide();
				break;
			case 2:
				$("ul.first li.first").hide();
				break;
			case 3:
				$(".stage > #first").hide();
				break;
			case 4:
				$("ul.second li.second").hide();
				break;
			case 5:
				$(".task-list li:nth-child(1)").hide();
				break;
			case 6:
				$(".wrapper").css("background-color","red");
				break;
			case 7:
				$(".task-list li:nth-child(2)").css("background-color","red");
				break;
			case 8:
				$("li:nth-child(2)").css("background-color","red");
				break;
			case 9:
				$(".stage").delay(5000).fadeOut("slow");
				break;
			case 10:
				$("li:nth-child(1)").remove();
				break;
			case 11:
				$(".wrapper .stage #first ul.second").append('<li class="fourth">Fourth Item</li>');
				break;
			case 12:
				$(".wrapper .stage ul").append('<li class="fourth">Fourth Item</li>')
				break;
			case 13:
				$(".stage #first ul.second").detach().appendTo(".stage #second");
				break;
			case 14:
				$("li").on("click", function(){
				$(this).remove();
				});
				break;
			case 15:
				$(".stage li").on("click", function(){
				$(this).remove();
				});
				break;
			case 16:
				$("li").on("click", function(){
					$(this).delay(3000).fadeOut("slow");
				break;

		}

	});
	
});

