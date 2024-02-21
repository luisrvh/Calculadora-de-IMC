function calcularIMC() {
    var nombre = document.getElementById("nombre").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var fechaNacimiento = document.getElementById("fecha").value;
  
    if (nombre && !isNaN(peso) && !isNaN(altura) && altura > 0 && fechaNacimiento) {
      var imc = peso / (altura * altura);
      var clasificacion = obtenerClasificacionIMC(imc);
      var edad = calcularEdad(fechaNacimiento);
  
      console.log(
        `${nombre} tienes ${edad} años tu  IMC actual es de ${imc.toFixed(2)} y se clasifica como ${clasificacion}`
      );
  
      mostrarResultadoEnPagina(
        `${nombre} tienes ${edad} años tu  IMC actual es de ${imc.toFixed(2)} y se clasifica como ${clasificacion}`
      );
    } else {
      alert("Por favor, ingresa valores válidos para calcular el IMC.");
    }
  }

function obtenerClasificacionIMC(imc) {
  if (imc < 18.5) {
    return "bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "sobre peso";
  } else {
    return "obesidad";
  }
}
function calcularEdad(fechaNacimiento) {
    var fechaActual = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
    var mesActual = fechaActual.getMonth();
    var mesNac = fechaNac.getMonth();
  
    if (mesActual < mesNac || (mesActual === mesNac && fechaActual.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
  }


function mostrarResultadoEnPagina(resultado) {
  
    var resultadoAnterior = document.getElementById('resultadoIMC');
    if (resultadoAnterior) {
      resultadoAnterior.textContent = resultado;
    } else {
      var resultadoContainer = document.getElementById('resultadoContainer');
      var resultadoElement = document.createElement('p');
      resultadoElement.innerHTML = resultado; 
      resultadoElement.id = 'resultadoIMC';
      resultadoContainer.appendChild(resultadoElement);
    }
  }
function resetearFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

   
    var resultadoAnterior = document.getElementById('resultadoIMC');
    if (resultadoAnterior) {
        resultadoAnterior.parentNode.removeChild(resultadoAnterior);
    }
}
