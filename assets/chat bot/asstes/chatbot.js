function talk() {
    var know = {
        "oi" : "feijao com arroz",
        "tudo bom" : "faça logo a pergunta certa cara vc quer nao quer ganhar?",
        "quem e voce" : "Nao perca seu tempo faça a pergunta certa",
        "Qual é a pergunta certa" : "Eu pertenço ao mês de dezembro, e não a qualquer outro mês. Eu não sou um feriado. O que eu sou?",
        "a resposta e D" : "boa meu camarada vc ganhou!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Vc tem que fazer a pergunta certa e Qual é a pergunta certa <br>";
    }
}