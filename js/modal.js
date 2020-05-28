let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for(let i = 0; i < imagenes.length; i++){ /* crea funcion click en la imagen para seleccionarla la manda al codigo que la muestra en el centro*/
	imagenes[i].addEventListener('click', function(e){
			modal.classList.toggle("modal--open");
			let src = e.target.src;
			img.setAttribute("src", src);
	});
}
boton.addEventListener("click", function(){ /*se le da funcion al boton de cerrar imagen en galeria*/
	modal.classList.toggle("modal--open");
});