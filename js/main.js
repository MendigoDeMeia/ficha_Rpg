const controle = document.querySelectorAll("[data-controle")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "forca": {
        "forca": 5,
        "defesa": 3,
        "hp":5,
        "agilidade": 2,
        "poder": 0,
        "sorte": 0,
    },
    "defesa": {
        "forca": 0,
        "defesa": 10,
        "hp":5,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "hp": {
        "forca": 0,
        "defesa": 5,
        "hp":20,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "agilidade": {
        "forca": 2,
        "defesa": 2,
        "hp":1,
        "agilidade": 5,
        "poder": 3,
        "sorte": 5,
    },
    "poder/haki": {
        "forca": 0,
        "defesa": 2,
        "hp":2,
        "agilidade": 2,
        "poder": 10,
        "sorte": 1,
    },
    "sorte": {
        "forca": 0,
        "defesa": 0,
        "hp":0,
        "agilidade": 3,
        "poder": 2,
        "sorte": 15,
    },
    "forcaN": {
        "forca": -5,
        "defesa": -3,
        "hp":-5,
        "agilidade": -2,
        "poder": -0,
        "sorte": -0,
    },
    "defesaN": {
        "forca": -0,
        "defesa": -10,
        "hp":-5,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "hpN": {
        "forca": 0,
        "defesa": -5,
        "hp":-20,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "agilidadeN": {
        "forca": -2,
        "defesa": -2,
        "hp": -1,
        "agilidade": -5,
        "poder": -3,
        "sorte": -5,
    },
    "poder/hakiN": {
        "forca": 0,
        "defesa": -2,
        "hp":-2,
        "agilidade": -2,
        "poder": -10,
        "sorte": -1,
    },
    "sorteN": {
        "forca": 0,
        "defesa": 0,
        "hp":0,
        "agilidade": -3,
        "poder": -2,
        "sorte": -15,
    },

    

}



controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca
            )
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
    


    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1

    }
    else {
        peca.value = parseInt(peca.value) + 1

    }

}

function atualizaEstatistica(peca) {
    estatistica.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}


