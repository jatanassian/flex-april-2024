const net = require('net');

const client = net.createConnection({ host: 'localhost', port: 3000 });

client.setEncoding('utf-8');

client.on('data', data => {
  console.log(data);
});

process.stdin.on('data', data => {
  client.write(data);
});
