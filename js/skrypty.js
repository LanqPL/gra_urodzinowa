$(function(){
	$("#obszar").html("<iframe src='menu.html'></iframe>");
});

function graj(){
	$("#glowna").children().remove();
		$("#glowna").html('<canvas id="plotno"></canvas>');
	game_sterowanie();
	}

function jak_grac(){
	$("#glowna").children().remove();
		$("#glowna").html('<div id="menu"><br><div id="jak_grac">W - skok<br>A, D - porusznie się lewo/prawo<br/><br/> Zbieraj gwiazdki - punkty. Zbierz je wszystkie aby ukończyć dany poziom gry?</div></div><footer><div class="dprzycisk" id="wstecz" onclick="wstecz()"><button class="przycisk">WSTECZ</button></div></footer>');
	}

function autor(){
	$("#glowna").children().remove();
		$("#glowna").html('<div id="menu"><div class="autor_info_tytul">Grafika:</div><div class="autor_info">Kacper Kawala</div><br><div class="autor_info_tytul">Projekt:</div><div class="autor_info">Kacper Kawala</div><br><div class="autor_info_tytul">Programowanie:</div><div class="autor_info">Kacper Kawala</div><br><div class="autor_info_tytul">Podziękowanie dla testerów:</div><div class="autor_info">Paulina Pacyniak <br>Kacper Kawala</div></div><footer><div class="dprzycisk" id="wstecz" onclick="wstecz()"><button class="przycisk">WSTECZ</button></div></footer>');
	}

function wstecz(){
	$("#glowna").children().remove();
		$("#glowna").html('<div id="menu"><br><div class="dprzycisk" id="graj"><button class="przycisk" onclick="graj();">GRAJ</button></div><br><br><div class="dprzycisk" id="jak_grac" onclick="jak_grac()"><button class="przycisk">JAK GRAĆ</button></div><br><br><div class="dprzycisk"><button class="przycisk" id="autor" onclick="autor()">O AUTORZE</button></div><br><br><div class="dprzycisk"><button class="przycisk" id="aktualizacje" onclick="aktualizacja()">AKTUALIZACJA</button></div><br><br></div>');
	}

function aktualizacja() {
	$("#glowna").children().remove();
		$("#glowna").html('<div id="menu"><div class="update"><div class="update"><div class="update_tytul">Update #0.1.0</div><p class="data">16 października 2018</p><div class="update_info">Gra w fazie testów pre-alfa.</div><hr/><div class="update"><div class="update_tytul">Update #0.0.1</div><p class="data">10 czerwca 2018</p><div class="update_info">Ukończenie tworzenia menu. Rozpoczęcie prac nad grą</div><hr/><div class="update_tytul">Update #0.0.0</div><p class="data">29 maj 2018</p><div class="update_info">Rozpoczęcie pracy nad grą. Tworzenie menu.</div><hr/></div><footer><div class="dprzycisk" id="wstecz" onclick="wstecz()"><button class="przycisk">WSTECZ</button></div></footer></div>');
	}