function verificar() {
    const ano_input = document.querySelector("input#txtano");
    const ano_number = Number(ano_input.value);
    const sexo = document.getElementsByName('radsex');
    const resposta = document.querySelector('div#resposta');
    const current_data = new Date();
    const current_ano = current_data.getFullYear();
    const imagem_resposta = document.createElement("img");
    imagem_resposta.setAttribute("id", "foto");

    if (ano_number < 0 || ano_number > current_ano) {
        alert("Ano inválido, tente outro ano!");
        return;
    }

    const idade = current_ano - ano_number;
    const genero = sexo[0].checked ? "m" : "f";
    if (idade >= 0 && idade < 12) {
        imagem_resposta.setAttribute("src", `./images/fotocrianca${genero}.png`);
    } else if (idade <= 21) {
        imagem_resposta.setAttribute("src", `./images/fotojovem${genero}.png`);
    } else if (idade <= 64) {
        imagem_resposta.setAttribute("src", `./images/fotoadulto${genero}.png`);
    } else {
        imagem_resposta.setAttribute("src", `./images/fotoidoso${genero}.png`);
    }
    resposta.innerHTML = `Detectamos ${genero === 'm' ? 'Homem' : 'Mulher'} de ${idade} anos.<br/>`
    resposta.appendChild(imagem_resposta);
    resposta.style.textAlign = 'center'
}