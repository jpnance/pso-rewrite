import express from 'express';

const server = express();
const port = process.env.PORT;

server.get('/', (request, response) => {
	response.send('<html><head><title>Players</title></head><body><form method="post"><ul></ul><label>Name <input type="text" /></label><button>Add to Player Pool</button></form></body></html>');
});

server.post('/', (request, response) => {
	response.send('<html><head><title>Players</title></head><body><form method="post"><ul><li>Vince Young</li></ul><label>Name <input type="text" /></label><button>Add to Player Pool</button></form></body></html>');
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
