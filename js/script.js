let Respostas = [];

function getRespostas(event) {
    event.preventDefault();

    const saida_1 = document.getElementById('campo-identificador-visualizacao');
    const saida_2 = document.getElementById('campo-descricao-visualizacao');

    if (saida_1.textContent == 'preencha este campo' || saida_2.textContent == 'preencha este campo') {
        alert('Preencha todos os campos');
        return
    };

    // Limpa a lista de respostas
    Respostas = [];

    // Pergunta 1
    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked');
    if (pergunta1) {
        Respostas.push(parseInt(pergunta1.value));
    }

    // Pergunta 2
    var pergunta2 = document.querySelector('input[name="pergunta2"]:checked');
    if (pergunta2) {
        Respostas.push(parseInt(pergunta2.value));
    }

    // Pergunta 3
    var pergunta3 = document.querySelector('input[name="pergunta3"]:checked');
    if (pergunta3) {
        Respostas.push(parseInt(pergunta3.value));
    }

    // Pergunta 4
    var pergunta4 = document.querySelector('input[name="pergunta4"]:checked');
    if (pergunta4) {
        Respostas.push(parseInt(pergunta4.value));
    }

    if(Respostas.length < 4) {
        alert('Preencha todas as respostas')
        return
    };


    // Identificar maior valor
    var maiorValor = Math.max(...Respostas);
    var resultado = '';

    switch (maiorValor) {
        case 4:
            resultado = 'Crítico';
            break;
        case 3:
            resultado = 'Alto';
            break;
        case 2:
            resultado = 'Médio';
            break;
        case 1:
            resultado = 'Baixo';
            break;
        default:
            resultado = 'Não foi possível determinar';
    }

    getResultado(maiorValor);
 
}

function insereIdentificador() {
    const entrada_1 = document.getElementById('campo-identificador-1');
    const entrada_2 = document.getElementById('campo-identificador-2');
    const saida_1 = document.getElementById('campo-identificador-visualizacao');
    const saida_2 = document.getElementById('campo-descricao-visualizacao');

    saida_1.textContent = entrada_1.value;
    saida_2.textContent = entrada_2.value;
    saida_1.style.opacity = '1';
    saida_1.style.fontStyle = 'normal';
    saida_2.style.opacity = '1';
    saida_2.style.fontStyle = 'normal';

    entrada_1.value = '';
    entrada_2.value = '';

    document.getElementById('overlay').style.display = 'none';
}

function getResultado(n){
    const imagem = document.getElementById('indicador-img');
    const risco_name = document.getElementById('risco-name');
    const div_resultado = document.getElementById('resultado');
    const btn_enviar = document.getElementById('enviar');

    btn_enviar.style.display = 'none';

    switch (n) {
        case 4:
            imagem.src = `img/nivel/${4}.svg`;
            risco_name.textContent = 'RISCO CRÍTICO';
            break;
        case 3:
            imagem.src = `img/nivel/${3}.svg`;
            risco_name.textContent = 'RISCO ALTO';
            break;
        case 2:
            imagem.src = `img/nivel/${2}.svg`;
            risco_name.textContent = 'RISCO MÉDIO';
            break;
        case 1:
            imagem.src = `img/nivel/${1}.svg`;
            risco_name.textContent = 'RISCO BAIXO';
            break;
        default:
            return
    }

    div_resultado.style.display = 'flex';
}


//Over

document.getElementById('editar').addEventListener('click', function(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
})

document.getElementById('fechar').addEventListener('click', function(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
})


