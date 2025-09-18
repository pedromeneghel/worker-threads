import Fastify from 'fastify';
import { Worker } from "worker_threads";

function runFibonacci(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./src/fibonacci-worker.ts', {
      workerData: n,
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


const fastify = Fastify({
  logger: false
})

fastify.get('/health', async function (_request, reply) {
  reply.send({status: 'ok'})
})


fastify.get<{ Params: { number?: number } }>('/fibonacci/:number?', async function (request, reply) {
  const { number } = request.params;

  // const result = await fibonacci(number || 10);
  const result = await runFibonacci(number || 10);
  
  console.log('Fibonacci result:', result);
  
  reply.send({result})
})

fastify.listen({ port: 3333 })