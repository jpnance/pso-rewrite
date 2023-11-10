import express from 'express';

const server = express();
const port = process.env.PORT;

server.get('/', (request, response) => {
	response.send('<html><head><title>Rostered Players</title></head></html>');
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
