//****saat */

//sol üst köşede saat'in görünmesi için yazılan kodlar.

let saat = document.getElementById("saat");
let dakika = document.getElementById("dakika");



if (new Date().getHours() < 10 && new Date().getHours() >= 0) {
    saat.innerHTML = "0" + new Date().getHours();
} else {
    saat.innerHTML = new Date().getHours();
}

if (new Date().getMinutes() < 10 && new Date().getMinutes() >= 0) {
    dakika.innerHTML = "0" +new Date().getMinutes();
}else {
    dakika.innerHTML = new Date().getMinutes();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

//**RAKAMLARIN TANIMLANMASI */
let sıfır = document.getElementById("sıfır");
let bir = document.getElementById("bir");
let iki = document.getElementById("iki");
let üç = document.getElementById("üç");
let dört = document.getElementById("dört");
let beş = document.getElementById("beş");
let altı = document.getElementById("altı");
let yedi = document.getElementById("yedi");
let sekiz = document.getElementById("sekiz");
let dokuz = document.getElementById("dokuz");
let nokta = document.getElementById("nokta");

//**OPERATÖRLERİN TANIMLANMASI */
const modülüs = document.getElementById("modülüs");
const bölme = document.getElementById("bölme");
const çarpı = document.getElementById("çarpı");
const eksi = document.getElementById("eksi");
const artı = document.getElementById("artı");
const eşittir = document.getElementById("eşittir");
const ac_tuş = document.getElementById("ac_tuş");






