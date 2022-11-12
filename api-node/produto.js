function adicionar() {
    return "Adicionando produto...";
}

function listar() {
    //simular buscar do banco de dados
    let produtos = [
        {
            id: 1,
            nome: 'Mouse',
            valor: 89.80
        },
        {
            id: 2,
            nome: 'Relogio',
            valor: 419.90
        },
        {
            id: 3,
            nome: 'Caneta',
            valor: 1.10
        }
    ];

    return JSON.stringify(produtos);
}

module.exports = {
    adicionar,
    listar,
};