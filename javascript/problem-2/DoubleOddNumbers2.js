function OddsNumbers(numbers) {
    const OddsNumbers = [];

    for (number of numbers) {
        if (number % 2 == 1) {
            const double = number * 2;
            OddsNumbers.push(double);
        } else {
            OddsNumbers.push(number);
        }
    }
    return OddsNumbers
}

result = OddsNumbers([1, 2, 3, 4, 5, 6, 7])

console.log(result)