    

    /*
    var concatenacion = nombre + " "+ edad;
    
    var datos = document.getElementById("datos");
    datos.innerHTML = ` 
        <h1>Hola soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Tengo: ${edad} años de edad</h3>
        `;

        if(edad <=27){
            datos.innerHTML +='<h1>Eres una persona Joven </h1>';
        }else{
            datos.innerHTML += '<h1>Eres una persona vieja<h1/>';
        }

        for(var i = 2000; i<=2020; i++){
            // bloque de instrucciones
            datos.innerHTML += "<h2>Estamos en el año: "+i;
        }
      */  
        function MuestramMiNombre(nombre, edad){
            var datos = document.getElementById("datos");
            datos.innerHTML = ` 
                <h1>Hola soy la caja de datos</h1>
                <h2>Mi nombre es: ${nombre}</h2>
                <h3>Tengo: ${edad} años de edad</h3>
            `;
        }

        MuestramMiNombre("Alejandro Avila", 27);