function exercise3(value1, value2) {
    let a = parseFloat(value1);
    let b = parseFloat(value2);

    let w = a - b + 2 * (a % b);
    
    console.log("El valor de w es: " + w);
    return w;
};
