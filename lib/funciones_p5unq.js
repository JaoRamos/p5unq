(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';

  // This function will contain all our code
  function libreriaP5UNQ(){
    
	
	var _objetoLibreria = {};
    
    // Just create a property to our library object.
    _objetoLibreria.ratioNota = function(centro, nota){
		// centro es la nota (MIDI) de base, deberia ser la nota real
		// en la que esta afinado el audio a pitchear
		// nota es la nota MIDI objetivo a llegar en afinacion
		// la funcion devuelve un RATIO para escalar la velocidad de reproduccion de un sonido
		var ratio = pow(2,  (nota - centro)/12);
		return ratio;
    };

    return _objetoLibreria;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.p5unq) === 'undefined'){
    window.p5unq = libreriaP5UNQ();
  }
})(window); // We send the window variable within our function

// Then we can call our custom function using
// p5unq.ratioNota(centro, nota);
