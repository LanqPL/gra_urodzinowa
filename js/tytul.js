var powtarzaj = 1;
var predkosc = 250;
var tytul1 = ' [ ' + document.title + ' ] ';
var dlugosc = tytul1.length;
var i = 1;

function skrolowany_tytul() {
  tytul2 = tytul1.substring(i, dlugosc) + tytul1.substring(0, i);
  document.title = tytul2;
  i++;
  if (i == dlugosc + 1) {
    i = 0;
    if (powtarzaj == 0) return;
  }
  setTimeout("skrolowany_tytul()",predkosc);
}

if (document.title) skrolowany_tytul();