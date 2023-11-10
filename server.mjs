import express from 'express';
import bodyParser from 'body-parser';

const server = express();
const port = process.env.PORT;

server.use(bodyParser.urlencoded({ extended: true }));

const players = [];

server.get('/', (request, response) => {
	response.send(`<html><head><title>Players</title></head><body><ul>${players.map(toListItem).join('')}</ul><form method="post"><label>Name <input name="name" type="text" /></label><button>Add to Player Pool</button></form></body></html>`);
});

server.post('/', (request, response) => {
	players.push(request.body.name);

	response.redirect('/');
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

function toListItem(value) {
	return `<li>${value}</li>`;
}
