$(function(){

    console.log('The dom is ready! (drill 5)');

    // two separate switch statements. first on who, then what
    $("#doIt").on("click", function(){
        var who = $("#whoDo").val();
        var what = $("#whatDo").val();
        if(!who || !what){
            alert("Please make a selection from drop-down menus");
        };
        
        var items;
        switch(who);

        case "even":
            items = 
    });


    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);

});




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

