 function crearTablaAmigos(){
 	var padre=document.getElementById("contenedor_amigos");
 	var tabla=document.createElement("table");
 	tabla.className="tabla";
 	padre.appendChild(tabla);

 	for (var i=0; i<amigos.length; i++) {
 		var fila=document.createElement("tr");
 		tabla.appendChild(fila)[i];

 		var col1=document.createElement("td");
 		var col2=document.createElement("td");
 		fila.appendChild(col1);
 		fila.appendChild(col2);

 		col1.innerHTML=amigos[i].nombre;
 		col2.innerHTML=amigos[i].apellido;
 	}
}