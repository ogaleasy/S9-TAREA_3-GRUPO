// Function to print the multiplication table of a number
function tablaMultiplicar(_numero) {
    let resultado = "Tabla de multiplicar del " + _numero + ":\n";
    
    for (let producto = 1; producto <= 10; producto++) {
        resultado += _numero + " x " + producto + " = " + _numero * producto + "\n";
    }
    
    return resultado;
};
