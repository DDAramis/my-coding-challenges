function removeDuplicates(numbers) {
    if (!numbers.length) return []; 
    const result = []; 
    const seen = new Set(); 

    for (let number of numbers) { 
        if (!seen.has(number)) { 
            result.push(number); 
            seen.add(number); 
        }
    }
    return result;
}


console.log(removeDuplicates([1, 2, 2, 3, 1, 4, 2])); 