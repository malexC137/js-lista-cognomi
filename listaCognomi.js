// dichiaro le variabili
var surnamesList = ["46Rossi", "Iannone", "Petrucci", "Morbidelli", "Dovizioso"];
var userSurname = prompt("Insesrisci il cognome del tuo pilota preferito");
// creo un prompt per aggiungere un nuovo cognome all'array cognomi
surnamesList.push(userSurname);
// ordino la nuova array in ordine alfabetico
surnamesList.sort();
// creo una variabile che mi consenta di individuare il numero a cui corrisponde il nuove cognome inserito
var indexUser = surnamesList.indexOf(userSurname) + 1;
var numberedSurnamesList = document.getElementById("surnames-list");

// creo un ciclo per stampare una lista di cognomi
for (var i = 0; i < surnamesList.length; i++) {
    numberedSurnamesList.innerHTML += "<li><h2>" + (i + 1) + " - " + surnamesList.sort()[i] + "</h2></li>";
}

console.log(numberedSurnamesList);

console.log(userSurname + " partirà dalla " + indexUser + "a posizione")

document.getElementById("username-position").innerHTML = userSurname + " partirà dalla " + indexUser + "a posizione";





