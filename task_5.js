const integer = (x, n) => {
    if (x <= 0 || n <= 0 || !Number.isInteger(x) || !Number.isInteger(n)) {
        console.log('Параметры должны быть положительными целыми числами!')
    }
    return Math.pow(x, n);
};

console.log(integer(3, 2));