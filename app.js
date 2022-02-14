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
  dakika.innerHTML = "0" + new Date().getMinutes();
} else {
  dakika.innerHTML = new Date().getMinutes();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

//**Hesap Makinesinin çalışması için işlemler aşağıdadır.*/

//not : her işlemi ayrıntılı yorum satırları ile anlatmaya çalışacağım.

//load eventi ile js web sitemiz açıldığı anda yapılacak her işlemin manipülasyonuna hazı hale geliyor.
window.onload = function () {
  let selectedOperator = "";
  let leftSide = "";
  let rightSide = "";

  //operatör seçmeden önce sayılarımızı sol ve sağ sayı değerleri olmak üzere ikiye ayırıyoruz .

  //rakam butonları için event gerçekleştiriliyor .
  let numbers = document.querySelectorAll(".rakamlar");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener(
      "click",
      function () {
        document.querySelector(".content3").innerHTML += this.value;

        if (selectedOperator == "") {
          leftSide += this.value;
          console.log(leftSide);
        } else if (selectedOperator != "") {
          rightSide += this.value;
          console.log(rightSide);
        }
      },
      false
    );
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //******************************************************************* */
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // operatör butonları için event olayı gerçekleştiriliyor .
  let operators = document.querySelectorAll(".operator");
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener(
      "click",
      function () {
        selectedOperator = this.value;
        document.querySelector(".content3").innerHTML += this.value;
        if (selectedOperator == "+") {
          document.querySelector(".content2").innerHTML = leftSide + "+";
        } else if (selectedOperator == "-") {
          document.querySelector(".content2").innerHTML = leftSide + "-";
        } else if (selectedOperator == "x") {
          document.querySelector(".content2").innerHTML = leftSide + "x";
        } else if (selectedOperator == "/") {
          document.querySelector(".content2").innerHTML = leftSide + "/";
        } else if (selectedOperator == "%") {
          document.querySelector(".content2").innerHTML = leftSide + "%";
        }
      },
      false
    );
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //******************************************************************* */
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //eşittir olayları için event olayı gerçekleştiriliyor .
  document.getElementById("eşittir").addEventListener(
    "click",
    function () {
      if (selectedOperator == "+") {
        document.querySelector(".content3").innerHTML =
          parseInt(leftSide) + parseInt(rightSide);
      } else if (selectedOperator == "-") {
        document.querySelector(".content3").innerHTML =
          parseInt(leftSide) - parseInt(rightSide);
      } else if (selectedOperator == "x") {
        document.querySelector(".content3").innerHTML =
          parseInt(leftSide) * parseInt(rightSide);
      } else if (selectedOperator == "/") {
        document.querySelector(".content3").innerHTML =
          parseInt(leftSide) / parseInt(rightSide);
      } else if (selectedOperator == "%") {
        document.querySelector(".content3").innerHTML =
          parseInt(leftSide) % parseInt(rightSide);
      }
      document.querySelector(".content2").innerHTML = "";
    },
    false
  );

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //******************************************************************* */
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //silme işlemi için event olayı gerçekleştiriliyor .
  document.getElementById("silme").addEventListener(
    "click",
    function () {
      selectedOperator = "";
      leftSide = "";
      rightSide = "";
      document.querySelector(".content3").innerHTML = "";
      document.querySelector(".content2").innerHTML = "";
    },
    false
  );
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
