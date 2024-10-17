/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isbissextile(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Fonction pour vérifier si une date est valide
function isDateValid(day, month, year) {
    let isValid = false;
    let maxDays = 31;

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxDays = 30;
    } else if (month === 2) {
        maxDays = 28;
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            maxDays = 29;
        }
    }
}

// Demander à l'utilisateur de saisir une date
const day = parseInt(prompt("Entrez un jour"));
const month = parseInt(prompt("Entrez un mois"));
const year = parseInt(prompt("Entrez une année"));

// Utilisation de la fonction isValid pour vérifier la date
function isValid() {
    if (day && month && year) {
        if (day > 0 && month > 0 && year > 0) {
            if (month <= 12) {
                if (day <= maxDays) {
                    console.log(`La date ${day}/${month}/${year} est valide.`);
                } else {
                    console.log(`Le jour doit être inférieur ou égal à ${maxDays}`);
                }
            } else {
                console.log("Le mois doit être inférieur ou égal à 12.");
            }
        } else {
            console.log("Un nombre POSITIF.");
        }
    } else {
        console.log("Entrez un NOMBRE svp.");
    }
}

