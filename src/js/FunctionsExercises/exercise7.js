function celsiusToFahrenheit(gradosCelsius) {
    // Parse input values as float for numerical operations
    gradosCelsius = parseInt(gradosCelsius);

    let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    return gradosFahrenheit;
};
