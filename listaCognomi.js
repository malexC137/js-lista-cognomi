var surnamesList = ["46Rossi", "Iannone", "Petrucci", "Morbidelli", "Dovizioso"];
var userSurname = prompt("Insesrisci il cognome del tuo pilota preferito");
surnamesList.push(userSurname);
surnamesList.sort();
var indexUser = surnamesList.indexOf(userSurname) + 1;
var numberedSurnamesList = document.getElementById("surnames-list");

for (var i = 0; i < surnamesList.length; i++) {
    numberedSurnamesList.innerHTML += "<li><h2>" + (i + 1) + " - " + surnamesList.sort()[i] + "</h2></li>";
}

console.log(numberedSurnamesList);

console.log(userSurname + " partirà dalla " + indexUser + "a posizione")

document.getElementById("username-position").innerHTML = userSurname + " partirà dalla " + indexUser + "a posizione";





