function cambios() {
	var h2 = document.getElementById("form-signin-heading");
	h2.innerHTML = "Por Favor regístrese";

    var input = document.getElementById('inputEmail')
	input.placeholder="Por Favor ingresa tu Email";
    
    var input = document.getElementById('inputPassword')
    input.placeholder="Contraseña";

	var div = document.querySelector("span");
	div.innerHTML = "Recordar contraseña";

	var button = document.querySelector("button");
	button.innerHTML = "Regístrarse";
}

cambios();

