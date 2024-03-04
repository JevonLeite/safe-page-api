# DOCUMENTAÇÃO

## Introdução
A presente documentação tem por objetivo realizar a descrição do projeto back-end do desafio técnico da Hubbe e disponibilizar as devidas instruções para executá-lo.

## Descrição do Projeto
O projeto tem por objetivo disponibilizar uma aplicação, onde determinada tela permite o acesso de apenas 1 usuário por vez. Para isso, a lógica do back-end consiste em controlar os usuários que estão acessando a tela, através de uma tabela chamada **users**, que trata-se de uma tabela que possui apenas um registro por vez.\
Dessa forma, quando um usuário tentar acessar a tela pelo front-end, será recebido uma solicitação no back-end, que validará se existe algum usuário acessando a tela e caso existir, se é o mesmo usuário da solicitação, retornando assim o devido acesso/restrição à tela. Também possui um recurso de validação por tempo, para casos onde o usuário fecha o navegador, não manter a página bloqueada.

## Tecnologias
Para o back-end foi utilizado TypeScript como linguagem de programação, Node.js como ambiente de execução, Express.js para construção do servidor web, TypeORM como biblioteca de mapeamento objeto-relacional, PostgreSQL como sistema de gerenciamento de banco de dados e o DDD _(Domain Driven Design)_ como padrão de desenvolvimento.

## Configurações
Para iniciar o projeto, é necessário seguir as seguintes etapas:

1. Criar um banco de dados chamado **safe_page**;\
_Obs: não foi implementado nenhum procedimento de criação de banco de dados de forma automática, devido aos riscos em manter essa funcionalidade dentro da aplicação._

2. Dentro da pasta do projeto, renomear o arquivo **.env.example** para **.env**;

3. Caso for necessário utilizar uma porta que não seja **3333**, pode ser alterada na variável **PORT** no arquivo **.env**;

3. Dentro do arquivo **.env**, incluir os dados de conexão com o banco de dados (DB_HOST, DB_PORT, DB_USER e DB_PASS);

4. Através de um terminal, acessar a pasta do projeto e executar o comando **yarn install** ou **npm install**;

5. Através de um terminal, acessar a pasta do projeto e executar o comando **yarn build** ou **npm run build**;

## Execução
Através de um terminal, acessar a pasta do projeto e executar o comando **node dist/shared/infra/http/server.js**.


