function entroEnfoco(elemento){
	elemento.className ='enfoco';
	/*acceder al padre del elemento es decir a la etiqueta contenedora de un elemento html 
	ejemplo: <div><input></div> el padre de input es div	*/
	var elementoLista = elemento.parentNode;
	var ayuda = document.getElementById("ayuda");
	if (ayuda != undefined) {
		//Eliminar un elmento desde su padre.
		ayuda.parentNode.removeChild(ayuda);
	}
	elementoLista.innerHTML += "<p class='ayuda' id='ayuda'> texto de prueba</p>"
}
function salioDeFocus(elemento){
	elemento.className = '';
}