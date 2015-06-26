function entroEnfoco(elemento){
	elemento.className ='enfoco';
}
function salioDeFocus(elemento){
	elemento.className = '';
}
function revisarObligatorio(elemento){
	if(elemento.value==""){
		elemento.className ='error';
	}else{
		elemento.className='';
	}
}
function revisarNumerico(elemento){
	if(elemento.value!=""){
		var dato = elemento.value;
		if(isNaN(dato)){
			elemento.className='error';
		}else{
			elemento.className= '';
		}
	}
}
function revisarLogintud(elemento, minimoDeseado){
	if(elemento.value!=""){
		var dato = elemento.value;
		if(dato.length < minimoDeseado){
			elemento.className='error';
		}else{
			elemento.className='';
		}
	}
}

function revisarEmail(elemento){
	if(elemento.value!=""){
		//expresiones regular para validar si se cumple con un patron
		var dato = elemento.value;
		var expresion = /^([a-zA-Z0-9_.-])+@(([a-ZA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(!expresion.test(dato)){
			elemento.className='error';
		}else{
			elemento.className='';
		}
	}
}