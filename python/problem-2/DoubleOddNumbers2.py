def double_odds(numbers):
    result = []

    for number in numbers:
        if number % 2 == 1:
            double = number * 2
            result.append(double)
        else:
            result.append(number)
    
    return result


result = double_odds([1, 2, 3 , 4, 5, 6, 7])

print(result)