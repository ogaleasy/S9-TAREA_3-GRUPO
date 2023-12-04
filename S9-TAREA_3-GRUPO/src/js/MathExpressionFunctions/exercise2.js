function exercise2(value1, value2) {
    let result;

    // Parse input values as float for numerical operations
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Perform calculation
    result = (value1 * value2 + 3) % (value1 + value2);

    console.log("The value of y is: " + result);

    // Return the result
    return result;
};
