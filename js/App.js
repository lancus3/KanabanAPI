var prefix = "https://cors-anywhere.herokuapp.com/";
var baseUrl = prefix + 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '3282',
	'X-Auth-Token': 'abe920cfd474c40f6fe8161a51e307f7'
};


fetch(baseUrl + '/board', { headers: myHeaders })
	.then(function (resp) {
		return resp.json();
	})
	.then(function (resp) {
		setupColumns(resp.columns);
	});




function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name);
		col.addCard(cardObj);
	});
}




// OGÓLNA FUNKCJA


function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
}
