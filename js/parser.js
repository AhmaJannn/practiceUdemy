window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	let textNodes = [];

	function recurse(element) {
		element.childNodes.forEach(node => {
			if (node.nodeName.match(/^H\d/)) {
				const obj = {
					header: node.nodeName,
					content: node.textContent
				};
				textNodes.push(obj);
			} else {
				recurse(node);
			}
		});
	}

	recurse(body);

	fetch('http://localhost:3000/content', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(textNodes)
	})
		.then(response => response.json())
		.then(json => console.log(json));
});