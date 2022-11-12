const http = require('http');
const {testar} = require('./teste');
const produto = require('./produto');
const cliente = require('./cliente');

const servidor = 'localhost';
const porta = '8000';

function recepcao(req, res) {
    let rota = req.url; //recuperando a url que o cliente ta acessando

    let rotas = {
        '/': () => "documentação da api",
        '/add': produto.adicionar,
        '/produto/list': produto.listar,
        '/cliente/add': cliente.adicionar,
        '/cliente/list': cliente.listar,
    };

    if (undefined === rotas[rota]) {
        return res.end('Erro, pagina nao encontrada')
    }

    res.end(rotas[rota]());
}

http.createServer(recepcao).listen(porta, servidor, () => {
    console.log("Servidor rodando em http://localhost:8000")
});