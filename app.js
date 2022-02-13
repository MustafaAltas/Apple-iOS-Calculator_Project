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

window.addEventListener("load",(event) => {
    let rakamlar = document.querySelectorAll(".rakamlar");
    for (let i = 0; i < rakamlar.length; i++) {
        rakamlar[i].addEventListener("click",(event) => {
            document.querySelector(".content3").innerHTML += rakamlar[i].value;
        },false)
    }

    
})






