function reverseAndFilterWord(words, minLength) {
    const result = []

    for ( let word of words) {
        if (word.length > minLength) {
            const reverse = word.split('').reverse().join('');
            result.push(reverse)
        }
    }
    return result
}

resultado = reverseAndFilterWord(["hello", "world"], 3);

console.log(resultado)