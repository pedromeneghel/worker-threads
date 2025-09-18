# worker-threads

Este projeto demonstra o uso de _worker threads_ no Node.js para calcular números de Fibonacci de forma eficiente, utilizando Fastify como servidor HTTP.

## Estrutura do Projeto

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

3. Teste os endpoints usando o arquivo `client.http` ou ferramentas como curl/Postman.

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

## Licença

ISC