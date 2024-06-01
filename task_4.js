function printNumbers(a, b) {
    const intervalId = setInterval(function() {
        console.log(a);
        if (a === b) {
            clearInterval(intervalId);
        } else {
            a++;
        }
    }, 1000);
}

printNumbers(5, 15);