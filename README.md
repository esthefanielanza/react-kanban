# React Kanban

## Introdução

Este projeto trata-se de um quadro kanban desenvolvido em React, client-side e sem persistência de dados.

## Tecnologias Utilizadas e Decisões de Implementação

O projeto foi desenvolvido utilizando React.js para construção dos componentes e Sass para estilização dos mesmos. Como a aplicação era pequena, não foi necessário o uso do redux ou mobx para o controle do estados. O projeto pode ser divido em dois tipos de entidades: Containers e Components. Os "Containers" são responsáveis por lógicas de negócio e o controle do estado como um todo. Por outro lado, os "Components" são responsáveis pela renderização dos componentes e suas respectivas lógicas de render.

## Execução do Projeto

Para iniciar este projeto você precisa ter o Yarn ou o Npm instalados em sua máquina. Caso estes já estejam instalados basta executar os seguintes comandos:

1. Para instalar as dependências do projeto
   `yarn install`

ou

`npm install`

2. Para iniciar o projeto localmente
   `yarn start`

ou

`npm start`

## Melhorias Futuras

Algumas melhorias para este projeto consistem na melhor utilização do Sass para criação de mixins e um sistema de espaçamento e tipografia consistente, utilizando variáveis assim como foi realizado para as cores. Além disso, é prevista a implementaçao de testes utilizando o Enzyme em conjunto com o Mocha e o Sinon. Persistência de dados também seria um ponto importante nos futuros updates.

## Link para o Projeto 

Uma versão deste projeto está publicada no github pages deste usuário, para acessa-la basta utilizar o link https://esthefanielanza.github.io/react-kanban/


