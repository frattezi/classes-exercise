/*
    Este exercício consiste em analisar a criação e utilização de classes em Javascript.
    Apenas exemplos básicos seguindo a lógico de um bar, onde um Barman atende clientes:
        - Sua idade.
        - Qual o drink desejado.
        - Cobra o cliente.
    TODO:
        - Criar version Typescript
*/

const { Client } = require('./Classes/Client');
const { Barman } = require('./Classes/Employees');

const melgaco = new Barman(
    'felipe melipe',
    'felipe@melipe.com',
    10461961628,
    28,
    '(31)3222-6885',
    '1800'
);

const luccas = new Client(
    'lucas melipe',
    'lucas@melipe.com',
    20.00,
    22
);

const poderuxo = new Client(
    'Poderuxo Jenkins',
    'poderuxo@jenkins',
    10000.00,
    22
);


melgaco.makeCaipirinha(luccas);
melgaco.makeCaipirinha(poderuxo);
melgaco.makeCaipvodka(luccas);
melgaco.makeCaipvodka(poderuxo);
