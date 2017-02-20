//check off specific todo by click
$("ul").on("click","li",function(){
     $(this).toggleClass("completed");
});



//click on X to delete todolist
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
    event.stopPropagation();
});


// add new todo list & keypress enter
$("input").keypress(function(event){
	//if press enter
	if(event.which === 13){
		//grabbing new todo from input
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + this.value + "</li>");
        //clear input text
        $("input").val("");
	}
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
});
