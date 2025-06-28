function maxConsecutiveRepeats(numbers) {
    if (!numbers || numbers.length === 0) {
        return 0;
    }
    if (numbers.length === 1) {
        
        return 1;
    }

    let count = 1;
    let maxRepeats = 1;
    let previous = numbers[0];

    for (let number of numbers.slice(1)) {
        if (number === previous) {
            count += 1;
        } else {
            
         count = 1;
        }
        maxRepeats = Math.max(maxRepeats, count);
        previous = number;
    }

    return maxRepeats;
}

let result = maxConsecutiveRepeats([1, 2, 2, 3, 3, 3, 2, 1, 1]);

console.log(result);