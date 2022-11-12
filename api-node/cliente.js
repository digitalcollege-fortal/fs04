function adicionar() {
    return "Adicionando cliente...";
}

function listar() {
    let clientes = [
        {
            id: 1,
            nome: 'Andre'
        },
        {
            id: 2,
            nome: 'Maycon'
        }
    ];

    return JSON.stringify(clientes);
}

module.exports = {
    adicionar,
    listar,
};