function exercise4(value1, value2) {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    let v = 2 * value2 + Math.floor(value1 / 2) + 4 * (value2 % value1);

    console.log("El valor de v es: " + v);
    return v;
};
