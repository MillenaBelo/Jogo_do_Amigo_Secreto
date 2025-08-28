let listaDeNomes = [];

function validarNome(){
    let campo = document.querySelector('input').value;
    if(campo.trim() !== ''){
        return true;
    }else{
        limparCampo()
    };
};

function adicionarNome(){
    if (validarNome() == true){
        let nome = document.querySelector("input").value;
        listaDeNomes.push(nome);
        limparCampo();
        exibirTexto('p', listaDeNomes);
        document.querySelector('p').classList.remove('nome__Selecionado');
    } else{
        alert('Nenhum nome foi digitado.')
    }
};

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
};

function exibirTexto(tag, texto){
    const escopo = document.querySelector(tag);
    if (escopo){
        escopo.innerHTML = '';
        listaDeNomes.forEach(nome => {
            const p = document.createElement('p');
            p.textContent = nome;
            escopo.appendChild(p);
        });
    } else{
        console.error('Ocorreu um erro.');
    }
};

function validarLista(){
    return qntDeNomes !== 0;
};

function sortearNome(){
    let qntDeNomes = listaDeNomes.length;
    let indiceNome = parseInt(Math.random()* qntDeNomes + 1);
    return listaDeNomes[indiceNome];
};

function exibirNomeSorteado(){
    const escopo = document.querySelector('p');
    let nomeSorteado = sortearNome();
    escopo.innerHTML = nomeSorteado;
    let estilizacao = document.querySelector('p').classList;
    estilizacao.add('nome__Selecionado');
};

function reiniciarJogo(){
    listaDeNomes = [];
    exibirTexto('p', '');
    document.querySelector('p').classList.remove('nome__Selecionado');
    alert('Jogo reiniciado! Não há mais nomes na lista.')
};