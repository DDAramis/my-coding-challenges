def reverse_and_filter(words, min_length):
    reverse_words = []

    for char in words:
        if len(char) > min_length:
            reverse_word = char[::-1]
            reverse_words.append(reverse_word)
    return reverse_words

result = reverse_and_filter(["hello", "cat", "World"], 3)

print(result)