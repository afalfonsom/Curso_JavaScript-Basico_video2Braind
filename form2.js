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