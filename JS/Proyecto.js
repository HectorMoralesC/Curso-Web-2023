function cambiarPagina(pagina) {
	switch(pagina) {
		case 'pagina1':
			// Aqu� se puede hacer algo espec�fico para la p�gina 1
			break;
		case 'pagina2':
			// Aqu� se puede hacer algo espec�fico para la p�gina 2
			break;
		case 'pagina3':
			// Aqu� se puede hacer algo espec�fico para la p�gina 3
			break;
		default:
			console.log('P�gina no encontrada');
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