$(function(){
	$("#obszar").html("<iframe src='./html/menu.html'></iframe>");

	function graj(){
		$(this).parent().parent().remove();
		$("#glowna").html('');
	}

	function jak_grac(){
		$(this).parent().parent().remove();
		$("#glowna").html('');
	}

	function autor(){
		$(this).parent().parent().remove();
		$("#glowna").html('');
	}

	function wstecz(){
		$(this).parent().remove();
		$("#glowna").html('<div id="menu"><br><div class="dprzycisk" id="graj"><button class="przycisk" onclick="graj();">GRAJ</button></div><br><br><div class="dprzycisk" id="jak_grac" onclick="jak_grac()"><button class="przycisk">JAK GRAĆ</button></div><br><br><div class="dprzycisk"><button class="przycisk" id="autor" onclick="autor()">O AUTORZE</button></div><br><br><div class="dprzycisk"><button class="przycisk" id="aktualizacje" onclick="aktualizajca()">AKTUALIZACJA</button></div><br><br></div>');
	}

	function aktualizacja() {
		console.log('hello there');
		/*
		$("#glowna").children().remove();
		$("#glowna").html('<div id="menu"><div class="update"><div class="update_tytul">Update #0.0.0 <p class="data">29 maj 2018</p></div><br><div class="update_info">Rozpoczęcie pracy nad grą. Tworzenie menu.</div></div><footer><div class="dprzycisk" id="wstecz" onclick="wstecz()"><button class="przycisk">WSTECZ</button></div></footer></div>');*/
	}
	
});
