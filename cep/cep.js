function buscarEndereco() {
    fetch(`http://viacep.com.br/ws/${cep.value}/json`) //buscando os dados
        .then(response => response.json()) //esperando a resposta e extraindo o json
        .then(dados => {
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
        });
}