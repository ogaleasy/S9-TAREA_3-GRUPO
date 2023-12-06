function tablaMultiplicar2(_numero) {
    let resultado = "Tabla de multiplicar del " + _numero + ":\n";
    
    for (let producto = 1; producto <= 12; producto++) {
        resultado += _numero + " x " + producto + " = " + _numero * producto + "\n";
    }
    
    return resultado;
};
