function squareAndFilter(numbers) {
    const result = []

    for (let number of numbers) {
        if (number > 0) {
            const square = number ** 2
            result.push(square)
        }
    } return result

}

result = squareAndFilter([-2, 0, 3, -1, 4, 5])

console.log(result)