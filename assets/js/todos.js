$("ul").on("click", "li", function(){			//when pg load ul present but all li isn't that's y $("ul") then click on li
	$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){     
	$(this).parent().fadeOut(500,function(){                       //parent is li here
		$(this).remove();                                          //here this refers to li
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" +  todoText + "</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
