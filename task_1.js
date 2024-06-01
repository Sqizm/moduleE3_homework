function arrayElements() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"];

    let zero = 0, str = 0, even = 0, odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        } else if (typeof arr[i] === 'string') {
            str++;
        }
    }

    let outCon = `В массиве, кол-во чётных элементов: ${even}\nкол-во нечётных элементов: ${odd}\nкол-во строк: ${str}\nкол-во нулей: ${zero}`;

    console.log(outCon);
}

arrayElements(); // Вызов функции. FD
