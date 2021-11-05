const wybrana_linia = document.querySelectorAll("#linia option");
console.log(wybrana_linia);
const wynik = document.querySelector("legend #wybrana_linia");
console.log(wynik);
const fieldset = document.querySelector("#ukryte2");

const wynik2 = document.querySelector("#wynik2");


const linia_197 = document.querySelector("#linia_197");
const linia_32 = document.querySelector("#linia_32");
const linia_259 = document.querySelector("#linia_259");

function funkcja1() {
    for (i = 0; i < wybrana_linia.length; i++) {
        if (wybrana_linia[0].selected) {
            linia_197.style.display = "block";
            linia_32.style.display = "none";
            linia_259.style.display = "none";
            fieldset.style.display = "block";
        }

        if (wybrana_linia[1].selected) {
            linia_197.style.display = "none";
            linia_32.style.display = "block";
            linia_259.style.display = "none";
            fieldset.style.display = "block";
        }

        if (wybrana_linia[2].selected) {
            linia_197.style.display = "none";
            linia_32.style.display = "none";
            linia_259.style.display = "block";
            fieldset.style.display = "block";
        }

        if (wybrana_linia[3].selected) {
            linia_197.style.display = "none";
            linia_32.style.display = "none";
            linia_259.style.display = "none";
            fieldset.style.display = "none";
        }

        if (wybrana_linia[i].selected) {
            ;
            wynik.innerHTML = wybrana_linia[i].value;
        }
    }
}

    function funkcja2() {
        const data1 = document.querySelector("#OdKiedy").valueAsDate;
        console.log(data1.getTime());

        const data2 = new Date();
        console.log(data2.getTime());

        let rozw = data1.getTime() - data2.getTime();
        console.log(rozw);

        if (rozw < 0) {
            wynik2.innerHTML = "Podata data jest bledna.";
        } else {
            wynik2.innerHTML = "";
        }

    }

    const zakupbiletu = document.querySelector("#zakupbilety");
    console.log(zakupbiletu)
    const ukryte2 = document.querySelector("#ukryte2");
    console.log(ukryte2);


    function funkcja3() {
        if (zakupbiletu.checked) {
            ukryte2.style.display = "block";
        } else {
            ukryte2.style.display = "none";
        }
    }


    const bilet1 = document.querySelector("#ulgowy").value;
    console.log(bilet1);
    const bilet2 = document.querySelector("#normalny").value;
    console.log(bilet2);
    const ilosc = document.querySelector("#ilosc");
    console.log(ilosc);
    const finalnacena = document.querySelector("p #cenabiletow");

    function funkcja4() {
        if (bilet1.checked) {
            finalnacena.innerHTML = bilet1 * ilosc;
        } else if (bilet2.checked) {
            finalnacena.innerHTML = bilet2 * ilosc;
        } else {
            finalnacena.innerHTML = "wybierz cos";
        }
    }