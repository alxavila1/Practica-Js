
//variables, se muestra como asignarle un valor a cada variable de manera global
var x = 10;
var y = 20;

//variable de forma local, el foo declara que solo puede ser usado en archivos typescript 
function foo() {
var y = 20;
}
// función simple que toma dos números como argumentos y devuelve su suma
function add(x, y){
    return x + y;
}
// Para llamar a esta función y utilizar su resultado, puede utilizar el nombre de la función seguido de los argumentos entre paréntesis
var result = add(10, 20);

//Un objeto es una colección de datos y funciones relacionados, que representan una entidad o concepto del mundo real. Por ejemplo, puede crear un objeto que represente a un usuario, con propiedades como: nombre, correo electrónico y edad, y métodos como login() y logout().

var user = new Object();
user.name = "John Doe";
user.email = "alxavila12@gmail.com";
user.age = "27";
user.login = function() {
    25991360
};

user.logout = function(){

};
// En JavaScript, los objetos se crean utilizando el constructor de objetos o la palabra clave "class".
class user{
    constructor(){
        this.name = "John Doe";
        this.email = "alxavila12@gmail.com";
        this.age = "27";
    }
    login(){//code to log user in
    }

    logout(){//code to log the user out
    }    
}

var user = new user();
console.log(username); // "John Doe"
user.login();