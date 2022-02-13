// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

function spocitaj(a, b) {
  let c = document.querySelector('#vysledek');
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

// VYPRACOVANÝ ÚKOL

function priKliknuti() {
  let ctverecek = document.querySelector('body > div.ctverecek');
  ctverecek.style.backgroundColor = 'green';
}

function upozorni() {
	alert('Gratulace, právě si spustila tuto funkci!');
	console.log('Gratulace, právě si spustila tuto funkci!');
  let squareElement = document.getElementsByClassName('ctverecek')[0]
	squareElement.innerHTML = 'Gratulace!';
}


// ospravedlňujem sa, ale ten zápis pre spočítanie mi moc nedáva zmysel a neviem na to prísť