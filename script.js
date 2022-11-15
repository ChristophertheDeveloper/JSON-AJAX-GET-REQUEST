var pageCounter = 1;
var animalContainer = document.getElementById('animal-info')
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
		ourRequest.onload = function() {
			var ourData = ourRequest.responseText;
			ourData = JSON.parse(ourRequest.responseText)
			renderHTML(ourData)
		};
		ourRequest.send();
		pageCounter++;
		btn.classList.add('hide-me');
	})
	//add HTML to Page Div element
function renderHTML(data) {
	var htmlString = '';
	for(i = 0; i < data.length; i++) {
		htmlString += '<p> ' + data[i].name + ' is a ' + data[i].species + '.</p>'
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString)
}