//Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//Constantes a cada boton
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnPostivoNegativo = document.getElementById("btnPostivoNegativo");
const btnNotaEstudiante = document.getElementById("btnNotaEstudiante");

const btnSecuencia = document.getElementById("btnSecuencia");
const btnSecuenciaReversa = document.getElementById("btnSecuenciaReversa");
const btnParesPositivosReversa = document.getElementById("btnParesPositivosReversa");
const btnSumaEnteros = document.getElementById("btnSumaEnteros");






let funcionEjercicioActual = null;
//Eventos por cada boton
btnParImpar.addEventListener("click", function(){
    abrirModal("Numero Par o Impar", "Ingresa un numero para verificar si es par o impar", verificarParImpar);
});

 btnMayorEdad.addEventListener("click", function(){
    abrirModal("Mayor de Edad", "Ingrsa tu edad para saber si eres mayor de edad", verificarEdad);
});


btnPostivoNegativo.addEventListener("click", function(){
    abrirModal("Numero negativo", "Ingresa un numero para evaluar si es negativo o positivo", verificarNumero);
});

btnNotaEstudiante.addEventListener("click", function(){
    abrirModal("Verificar nota" ,"Ingrese su nota para saber si aprobó o reprobó", verificarNota);
});

btnSecuencia.addEventListener("click", function(){
    abrirModal("Consulta la secuencia", "Ingrese un numero y se mostrará del 0 al numero", verificarSecuencia);
});

btnSecuenciaReversa.addEventListener("click", function(){
    abrirModal("Consulta la secuencia", "Ingrese un numero y se mostrará del numero al 0", verificarSecuenciaReversa);
});

btnParesPositivosReversa.addEventListener("click", function(){
    abrirModal("Consulta los pares", "Ingrese un numero y se mostraran los pares postivos", ParesPositivosReversa);
});

btnSumaEnteros.addEventListener("click", function(){
    abrirModal("Suma los enteros", "Ingrese un numero y se sumaran los enteros", SumaEnteros);
});





function abrirModal( titulo, descripcion, funcionEjercicio){
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";

    funcionEjercicioActual = funcionEjercicio;

    modal.classList.add("activarModal");

}
btnCerrar.addEventListener("click", function(){
    modal.classList.remove("activarModal");
});

// Funciones
function verificarParImpar(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un numero valido.";
    }else{
        mensaje.textContent = (numero % 2 === 0)? "Es un numero PAR" : "Es un numero IMPAR";
    }
}

function verificarEdad(){
     let edad = parseInt(respuesta.value);
    if(edad < 18){
        mensaje.textContent = "Eres menor de edad";
    }else{
        mensaje.textContent = "Eres mayor de edad";
    }
}

function verificarNumero(){
    let numero = parseInt(respuesta.value);
   if(numero < 0){
       mensaje.textContent = "El numero es negativo";
   }else{
       mensaje.textContent = "El numero es positivo";
   }
}

function verificarNota(){
    let nota = parseInt(respuesta.value);
   if(nota < 60){
       mensaje.textContent = "Lo siento, ha reprobado su examen";
   }else{
       mensaje.textContent = "Felicidades, ha ganado su examen";
   }
}

function verificarSecuencia(){
    let contar; 
    let numero = parseInt(respuesta.value);
    for (contar = 0; contar < numero; contar++)
    {
        mensaje.textContent += contar +",";
    } 
    mensaje.textContent += contar;
}

function verificarSecuenciaReversa(){
    let contar; 
    let numero = parseInt(respuesta.value);
    for (contar = numero; contar > 0; contar--)
    {
        mensaje.textContent += contar +",";
    } 
        mensaje.textContent += contar;
}

function ParesPositivosReversa(){
    let contar; 
    let par = 0;
    let numero = parseInt(respuesta.value);
    for (contar = 1; par < numero; contar++)
    {
        mensaje.textContent += par +"\n";
        par = contar*2;
    } 
}

function SumaEnteros(){
    let suma;
    let ctrl; 
    let numero = parseInt(respuesta.value);
    suma = 0;
    for (ctrl = 0; ctrl <= numero; ctrl++)
    {
        suma += ctrl;
        mensaje.textContent = "Los numeros enteros de 0 a " +numero+ " suman " +suma;

    } 
}



btnVerificar.addEventListener("click", function(){
   if (funcionEjercicioActual){
        funcionEjercicioActual();

   } 
});