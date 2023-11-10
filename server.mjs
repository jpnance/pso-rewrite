import express from 'express';

const server = express();

server.get('/', (request, response) => {
	response.send('<html><head><title>Rostered Players</title></head></html>');
});

server.listen(3000, () => {
	console.log('Listening on port 3000');
});
