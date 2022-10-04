const porta = 3004;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos);
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco,
    });
    res.send(produto); // JSON
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});
