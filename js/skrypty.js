$(function(){
	$("#obszar").html("<iframe src='./html/menu.html'></iframe>");

	$("#graj").click(function(){
		$("#obszar").html("<iframe src='./html/graj.html'></iframe>");
	});

	$("#jak_grac").click(function(){
		$("#obszar").html("<iframe src='./html/jak_grac.html'></iframe>");
	});

	$("#autor").click(function(){
		$("#obszar").html("<iframe src='.html/autor.html'></iframe>");
	});

	$("#wstecz").click(function(){
		$("#obszar").html("<iframe src='.html/menu.html'></iframe>");
	});

	$("#aktualizacje").on("click", function(){
		$(this).parent().parent().remove();
		$("#glowna").html("<iframe src='.html/aktualizacje.html'></iframe>");
	});
});