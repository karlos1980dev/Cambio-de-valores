function converterValor(cambio, simbolo) {
    let valor = document.getElementById("valor").value;

    // Verifica se o valor foi informado
    if (valor === "") {
        alert("Digite algum valor para continuar.");
        return;
    }

    // Converte o valor
    let cota = valor * cambio;

    // Formatação do número com ponto como separador de milhares e vírgula como separador decimal
    let cotaFormatada = cota.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Exibe o resultado
    let res = document.getElementById("resultado");
    res.innerHTML = `${simbolo} ${cotaFormatada}`;
}

function pegarValor() {
    let valorDolar = 7; // Taxa de câmbio para o real (BRL)
    converterValor(valorDolar, 'R$');
}

function pegarEua() {
    let valorDolar = 4; // Taxa de câmbio para o dólar (USD)
    converterValor(valorDolar, '$');
}

function pegarJapao() {
    let valorYen = 3; // Taxa de câmbio para o iene (JPY)
    converterValor(valorYen, '¥');
}

function pegarAlemanha() {
    let valorEuro = 0.93; // Taxa de câmbio para o euro (EUR)
    converterValor(valorEuro, '€');
}
