function exercise1(value1, value2) {
    let result;

    // Parse input values as float for numerical operations
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Check if input values are valid numbers
    if (isNaN(value1) || isNaN(value2)) {
        console.error("Please enter valid numerical values.");
        return;
    }

    // Perform calculation
    result = 2 * value1 + value2 - (value1 % 3);

    console.log("The value of y is: " + result);

    // Return the result
    return result;
};
