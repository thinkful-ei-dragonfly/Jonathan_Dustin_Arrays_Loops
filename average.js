function computeAverage(num) {
    let total = 0;
    function summing(currentValue) {
        total += currentValue;
    }
    num.forEach(summing);

    return total / num.length;
}

let arr = [1, 2, 4, 5];
console.log(computeAverage(arr));

