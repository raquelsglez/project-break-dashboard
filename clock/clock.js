const time = document.querySelector('.time');
const phraseDay = document.querySelector('.phraseDay');
const date = document.querySelector('.date');
const phrase = document.querySelector('.phrase');
const daysWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];


function updateDigitalClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hours < 10) { hours = '0' + hours };
    if(minutes < 10) { minutes = '0' + minutes };
    if(seconds < 10) { seconds = '0' + seconds };

    const timeText = `${hours}:${minutes}:${seconds}`;

    time.innerHTML = "";
    const pTime = document.createElement('p');
    pTime.innerHTML = timeText;
    time.appendChild(pTime);

    updateDate(now);
    updatePhrase(hours);
    updatephraseDay(now.getDay())
}

function updateDate(dateTime){
    let day   = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let year  = dateTime.getFullYear();
    
    if(day < 10) { day = '0' + day };
    if(month < 10) { month = '0' + month };

    const dateText = `${day}/${month}/${year}`;

    date.innerHTML = "";
    const pDate = document.createElement('p');
    pDate.innerHTML = dateText;
    date.appendChild(pDate);
}

function updatePhrase(hour) {
    let phraseText = "";    
    if(hour > 0 && hour <= 8){
        phraseText = "A descansar. ¡Hasta mañana!"
    }else if(hour > 8 && hour <= 11){
        phraseText = "Buenos días. ¡A desayunar y a programar!"
    }else if(hour > 11 && hour <= 13){
        phraseText = "Venga, te queda poco para comer."
    }else if(hour > 13 && hour <= 15){
        phraseText = "Para y come un poco."
    }else if(hour > 15 && hour <= 17){
        phraseText = "Espero que hayas cogido fuerzas para continuar."
    }else if(hour > 17 && hour <= 19){
        phraseText = "Merienda un poquito y a seguir"
    }else if(hour > 19 && hour <= 21){
        phraseText = "¡Ya te queda nada!"
    }else if(hour > 21 && hour <= 23){
        phraseText = "¡Has terminado por hoy, disfruta de la cena!"
    }else if(hour > 23 && hour <= 0){
        phraseText = "A descansar. ¡Buenas noches!"
    }

    phrase.innerHTML = "";
    const pPhrase = document.createElement('p');
    pPhrase.innerHTML = phraseText;
    phrase.appendChild(pPhrase);
}

function updatephraseDay(day){
    const dayWeek = daysWeek[day];

    const phraseDayText = `¡Hoy es ${dayWeek}!`;

    phraseDay.innerHTML = "";
    const pPhraseDay = document.createElement('p');
    pPhraseDay.innerHTML = phraseDayText;
    phraseDay.appendChild(pPhraseDay);
}

updateDigitalClock();
setInterval(updateDigitalClock, 1000);
