function isSum(x) { // Функция принимает число как аргумент
    return function(y) { // и возвращает функцию, которая также принимает число как аргумент
        return x + y; // и возвращает сумму этих двух чисел.
    }
}

const resultSum = isSum(5);
console.log(resultSum(3)); // Вывод