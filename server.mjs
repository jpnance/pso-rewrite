import express from 'express';

const server = express();
const port = process.env.PORT;

const players = [];

server.get('/', (request, response) => {
	response.send(`<html><head><title>Players</title></head><body><form method="post"><ul>${players.map(toListItem)}</ul><label>Name <input type="text" /></label><button>Add to Player Pool</button></form></body></html>`);
});

server.post('/', (request, response) => {
	players.push('Vince Young');

	response.redirect('/');
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

function toListItem(value) {
	return `<li>${value}</li>`;
}
