// En este ejercicio explicaré con más detalle cómo funciona.
/* Dado un array de enteros del 1 al n con un número faltante, devuelve dicho número. */

function findMissingNumber(numbers) {
    // Creamos una variable 'n' que recibirá del parámetro 'numbers' el array y mediremos su longitud.
    const n = numbers.length + 1; // Aquí, mediante el método length, se calcula la longitud del parámetro 'numbers'. En este caso es 4, ya que [3, 1, 4, 5] = 4, y se suma +1.

    const expectedSum = n * (n + 1) / 2; // Aquí lo que hace es calcular la suma esperada de los números del 1 al n (elementos del array).
    /* En este caso sería lo siguiente: (suma de 1 + 2 + 3 + 4 + 5) = 15. Recuerda que el array es: [3, 1, 4, 5], por eso +1 = 5.
       ¿Por qué 5? Pues por la variable que inicializamos antes: const n = numbers.length + 1.
    */

    let actualSum = 0; // Aquí inicializamos en 0 para el bucle cuando iteremos.

    for (let number of numbers) {
        actualSum += number;
        /* Aquí ya conocemos bien cómo itera, pero por si no lo ves del todo, te lo explico:
           Iteración 1: number = 3, actualSum = 0 + 3 = 3.
           Iteración 2: number = 1, actualSum = 3 + 1 = 4.
           Iteración 3: number = 4, actualSum = 4 + 4 = 8.
           Iteración 4: number = 5, actualSum = 8 + 5 = 13.
           Como al final la iteración da como resultado 13, entonces actualSum = 13.
        */
    }

    return expectedSum - actualSum;
    /* Como la fórmula de expectedSum representa la suma de todos los números del 1 al n, y en este caso el array es [3, 1, 4, 5],
       entonces expectedSum hará lo siguiente:
       Ya que el número faltante es la diferencia entre la suma esperada y la suma real:
       expectedSum - actualSum = 15 - 13 = 2.
    */
}

// Entonces el resultado calculado será 2 gracias a la fórmula.
console.log(findMissingNumber([3, 1, 4, 5]));
// El output debería ser: 2

//Nota: otra manera pero no tan buena sería con set().