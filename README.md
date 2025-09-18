# 🚀 Exemplo de uso do Worker Thread no Node.js

Bem vindo(a)! 😄

Aqui você o código associado ao vídeo "Node.js MULTITHREADING? O segredo para backends de alto desempenho!" publicado no canal do YouTube [Codificando com Pedro](https://www.youtube.com/@CodificandoComPedro)!

## Sobre o projeto

Este projeto demonstra como o uso de _worker threads_ no Node.js evita bloqueio do Event Loop delegando o processamento pesado para um "trabalhador" e liberando a thread principal para os demais processamentos.

## Estrutura

- `src/server.ts`: Servidor Fastify que expõe endpoints HTTP.
- `src/fibonacci-worker.ts`: Worker responsável pelo cálculo do Fibonacci.
- `autocannon/script.js`: Script para teste de carga usando autocannon.
- `client.http`: Arquivo para testar endpoints HTTP.
- `package.json`: Dependências e scripts do projeto.

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor:
   ```sh
   npm run dev
   ```

3. Teste os endpoints usando o arquivo `client.http` (necessário a instalação da extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)!) ou ferramentas como curl/Postman.

## Endpoints

- `GET /health`: Verifica se o servidor está online.
- `GET /fibonacci/:number`: Calcula o Fibonacci do número informado usando _worker threads_.

## Teste de carga

Execute o script de teste de carga:
```sh
node autocannon/script.js
```

## Requisitos

- Node.js >= 20
- npm