// richiesta numero km da percorrere
// richiesta età del passeggero
// moltiplicare i km dichiarati con il prezzo del biglietto al km
// se < 18 moltiplicare per 0.8, se > 65 moltiplicare per 0.4

var kmRequest = prompt("Quanti chilometri vuoi percorrere?");
var ageRequest = prompt("Quanti anni hai?");
var priceXKm = 0.21;
var over65 = 0.4;
var under18 = 0.2;

if (ageRequest < 18) {
    var totalprice = (1 - under18) * kmRequest * priceXKm;
} else if  (ageRequest > 65) {
    var totalprice = (1 - over65) * kmRequest * priceXKm;
}else {
    var totalprice = kmRequest * priceXKm;

}
console.log(totalprice);
