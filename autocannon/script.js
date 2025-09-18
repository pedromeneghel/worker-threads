import autocannon from 'autocannon'

autocannon({
  url: 'http://localhost:3333/fibonacci/40',
  connections: 5, 
  pipelining: 1, 
  duration: 20 
}, console.log)
