/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1 - creare un ciclo for che stampa i numeri da 1 a 100 (let i, i<=100, i++);
2 - condizione per multipli di 3 (i%3 == 0) stmapa "Fizz";
3 - condizione per multipli di 5 (i%5 == 0) stmapa "Buzz";
4 - condizione per multipli di 3 e di 5 (i%3 == 0 && i%5 == 0) stmapa "FizzBuzz"; */


const rowGrid = document.querySelector(".rowGrid");


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        rowGrid.innerHTML += `<div class="box box-red">${"FizzBuzz"}</div>`

    } else if (i % 3 == 0) {

        rowGrid.innerHTML += `<div class="box box-green">${"Fizz"}</div>`

    } else if (i % 5 == 0) {

        rowGrid.innerHTML += `<div class="box box-yellow">${"Buzz"}</div>`

    } else {

        rowGrid.innerHTML += `<div class="box box-blu">${i}</div>`

    }

}