# Projeto Node do Curso Web Moderno CRUD
Este é um projeto de uma API desenvolvida com Express, que faz parte do curso Web Moderno da Cod3r. A API utiliza um arquivo de banco de dados em memória para armazenar e manipular informações sobre produtos.

## Instalação
Para executar o projeto, é necessário ter o Node.js instalado na máquina. Após isso, é preciso instalar as dependências do projeto. Para isso, execute o seguinte comando no terminal dentro da pasta do projeto:

```node
npm install
```

## Execução
Para iniciar o servidor, execute o seguinte comando no terminal dentro da pasta do projeto:

```node
npm start
```

O servidor será iniciado na porta 3004. Para acessar as rotas da API, utilize a URL http://localhost:3004.

## Banco de dados
O banco de dados utilizado pela API é um arquivo em memória, que está localizado em src/bancoDeDados.js. O arquivo contém funções para salvar, buscar, atualizar e excluir produtos.

## Rotas
As rotas disponíveis na API são as seguintes:

## GET /produtos
Retorna uma lista com todos os produtos cadastrados.

## GET /produtos/:id
Retorna as informações de um produto específico, com base no ID informado.

## POST /produtos
Cria um novo produto com base nas informações enviadas no corpo da requisição.

## PUT /produtos/:id
Atualiza as informações de um produto específico, com base no ID informado e nas informações enviadas no corpo da requisição.

## DELETE /produtos/:id
Remove um produto específico, com base no ID informado.

## Tecnologias utilizadas
- Node.js
- Express
- body-parser
- nodemon

### Foi instalados
```node
npm init -y
npm i --save express@4.16.2 -E
npm i --save-dev nodemon@1.14.11 -E
```

```node
npm i --save body-parser@1.18.2 -E
 ```
