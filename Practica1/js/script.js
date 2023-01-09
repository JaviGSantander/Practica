function calcularSalario() {

    var salarioAnual = parseInt(document.getElementById('salario').value);
    var sexo = document.getElementById('sexo').value;
    var nHijos = parseInt(document.getElementById('nHijos').value);

    var nuevoSalario = 0;

    
    if (salarioAnual <= 15000) {
        nuevoSalario += salarioAnual+(salarioAnual * 0.15);
    } else {
        nuevoSalario += salarioAnual+(salarioAnual * 0.05);
    }

    
    nuevoSalario += salarioAnual+(salarioAnual *= (0.02 * nHijos));

    
    if (sexo == "Mujer") {
        nuevoSalario += salarioAnual+(salarioAnual *= 0.01);
    } 

    document.getElementById('resultado').innerHTML = "Tu salario actualizado es de: " + nuevoSalario;


    document.getElementById('limpiar').reset();
}