function reverseAndFilter(words, minlength) {
    const result = []

    for ( let word of words) {
        
        if (word.length > minlength) {
            const reverseWord = word.split('').reverse().join('')
            result.push(reverseWord)
        }
    }
    return result
}
console.log(reverseAndFilter(['hello', 'cat', 'world', 'hi'], 3));