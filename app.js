//****saat */

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

//******** */