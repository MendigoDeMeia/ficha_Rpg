const controle = document.querySelectorAll("[data-controle")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "forca": {
        "forca": 3,
        "defesa": 1,
        "hp": 2,
        "agilidade": 1,
        "poder": 0,
        "sorte": 0,
    },
    "defesa": {
        "forca": 0,
        "defesa": 5,
        "hp": 3,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "hp": {
        "forca": 0,
        "defesa": 3,
        "hp": 20,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "agilidade": {
        "forca": 1,
        "defesa": 0,
        "hp": 1,
        "agilidade": 5,
        "poder": 3,
        "sorte": 2,
    },
    "poder/haki": {
        "forca": 0,
        "defesa": 3,
        "hp": 3,
        "agilidade": 1,
        "poder": 10,
        "sorte": 0,
    },
    "sorte": {
        "forca": 2,
        "defesa": 0,
        "hp": 0,
        "agilidade": 2,
        "poder": 2,
        "sorte": 15,
    },
    "forcaN": {
        "forca": -3,
        "defesa": -1,
        "hp": -2,
        "agilidade": -1,
        "poder": 0,
        "sorte": 0,
    },
    "defesaN": {
        "forca": 0,
        "defesa": -5,
        "hp": -3,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "hpN": {
        "forca": 0,
        "defesa": -3,
        "hp": -20,
        "agilidade": 0,
        "poder": 0,
        "sorte": 0,
    },
    "agilidadeN": {
        "forca": -1,
        "defesa": 0,
        "hp": -1,
        "agilidade": -5,
        "poder": -3,
        "sorte": -2,
    },
    "poder/hakiN": {
        "forca": 0,
        "defesa": -3,
        "hp": -3,
        "agilidade": -1,
        "poder": -10,
        "sorte": 0,
    },
    "sorteN": {
        "forca": -2,
        "defesa": 0,
        "hp": 0,
        "agilidade": -2,
        "poder": -2,
        "sorte": -15,
    }



}



controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    //const contador = document.getElementById('contadorPontos1')
    //const level = document.getElementById('contadorLevel1')


    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
        //contador.value = parseInt(contador.value + 1)
        //console.log(contador)
    }
    else {
        peca.value = parseInt(peca.value) + 1
        //contador.value = parseInt(contador.value - 1)
    }

}

function atualizaEstatistica(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}


