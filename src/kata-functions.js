

function existsHigher(numbers, num){
    let existsHigher = false;
    let index = 0;
    while(!existsHigher && index < numbers.length){
        existsHigher = (numbers[index] > num);
        index += 1;
    }
    return existsHigher;
}

console.log(existsHigher([1, 2, 5, 6], 9));
console.log(existsHigher([0, 3, 5], 2));
console.log(existsHigher([], 6));