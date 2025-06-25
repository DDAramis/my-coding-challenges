def reverse_filter(words, min_length):
    reverse = []

    for word in words:
        if len(word) > min_length:
            reverse_word = word[::-1]
            reverse.append(reverse_word)
    return reverse

print(reverse_filter(["hello", "cat", "world", "hi"], 3))