function exercise10(value1, value2) {
    let a = parseFloat(value1);
    let b = parseFloat(value2);

    let u = b - a + 3 * (a % b);
    console.log("El valor de u es: " + u);
    
    return u;
};
