function exercise4(value1, value2) {
    let a = parseFloat(value1);
    let b = parseFloat(value2);

    let v = 2 * b + Math.floor(a / 2) + 4 * (b % a);
    console.log("El valor de v es: " + v);

    return v;
};
