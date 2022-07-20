const ficha = {
    "David":{
    "nome": "Bartolomeu D. Chester",
    "akuma-no-mi": "Oto-Oto no mi",
    "cargo": "Tripulante Daquela Cumbuquinha",
    "recompensa": "$13.000 berry",
    "level": 20,
    "status": 10,
    "forca": 3,
    "defesa": 1,
    "hp": 2,
    "agilidade": 1,
    "poder": 0,
    "sorte": 0
},
"Nathan":{
    "nome": "Jack o Caçador",
    "akuma-no-mi": "Sem fruta",
    "cargo": "Tripulante Daquela Cumbuquinha",
    "recompensa": "$10.000 berry",
    "level": 14,
    "status": 42
},
"batata":{
    "nome": "Lucas D. Zodiac",
    "akuma-no-mi": "lino lino no mi",
    "cargo": "Tripulante Daquela Cumbuquinha",
    "recompensa": "$1.000 berry",
    "level": 15,
    "status": 45
},
"biel":{
    "nome": "Sky Deep",
    "akuma-no-mi": "sem fruta",
    "cargo": "Capitão Daquela Cumbuquinha",
    "recompensa": "$7.000 berry",
    "level": 20,
    "status": 60
},

}


const jogador1 = document.getElementById('jogador1').innerHTML = ficha.David["nome"];
const jogador2 = document.getElementById('jogador2').innerHTML = ficha.Nathan["nome"];
const jogador3 = document.getElementById('jogador3').innerHTML = ficha.batata["nome"];
const jogador4 = document.getElementById('jogador4').innerHTML = ficha.biel["nome"];



