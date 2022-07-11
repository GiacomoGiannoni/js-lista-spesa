const lista =    [
    "Yogurt",
    "Pasta",
    "Biscotti",
    "Cereali",
    "Ceci",
    "Pomodori",
    "Ciliegie",
    "Fragole"
];

const listaDom = document.getElementById('lista-spesa');
let i = 0;
while ( i < lista.length) {

listaDom.innerHTML += `<li>${lista[i]}</li>`;
i++;
}