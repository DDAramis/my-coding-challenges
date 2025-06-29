function oddsAndEvens(numbers) {
    const group = { odds: [], evens: []}

    for (let number of numbers){
        if (number % 2 === 1) {
            group.odds.push(number);
        } else {
            group.evens.push(number);
        }
    }
    group.odds.sort((a, b) => a -b);
    group.evens.sort((a, b) => a -b);

    return group;
}

result = oddsAndEvens([3, 1, 4, 6, 2, 5]);

console.log(result);