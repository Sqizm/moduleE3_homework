function isPrime(number) {
    if (number > 1000) {
        console.log('Данные неверны!');
    } else if (number <= 1) { // Проверка на число 0 и 1
        console.log('Число не простое!');
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                console.log('Число не простое!');
                return
            }
        }

        console.log('Число простое!');
    }
}

isPrime(5); // Вызов функции с аргументом. FD