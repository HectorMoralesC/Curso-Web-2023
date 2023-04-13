function cambiarPagina(pagina) {
	switch(pagina) {
		case 'pagina1':
			// Aquí se puede hacer algo específico para la página 1
			break;
		case 'pagina2':
			// Aquí se puede hacer algo específico para la página 2
			break;
		case 'pagina3':
			// Aquí se puede hacer algo específico para la página 3
			break;
		default:
			console.log('Página no encontrada');
			return;
	}

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('contenido').innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", pagina + ".html", true);
	xhttp.send();
}