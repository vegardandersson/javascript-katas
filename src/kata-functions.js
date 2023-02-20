

function existsHigher(numbers, num){
    let existsHigher = false;
    let index = 0;
    while(!existsHigher && index < numbers.length){
        existsHigher = (numbers[index] > num);
        index += 1;
    }
    return existsHigher;
}

//console.log(existsHigher([1, 2, 5, 6], 9));
//console.log(existsHigher([0, 3, 5], 2));
//console.log(existsHigher([], 6));


function toPigLatin(input) {
    const vowels = (/^[aeiou]$/i);
    return input.split(" ").map(element => {
        if(element[0].match(vowels)){
            return element += "way";
        }else{
            let vowel = false;
            let movedCharacters = "";
            while(!vowel){
                if(!element[0].match(vowels)){
                    movedCharacters += element[0];
                    element = element.substring(1);
                }else{
                    vowel = true;
                }
            }
            return element + movedCharacters + "ay";
        }
    }).join(" ");
}

function findBoomerangs(input) {
    let result  = [];
    for(let i = 0; i < input.length-2; i++){
        let temp = input.slice(i, i+3);
        if(temp[0] == temp[2] && temp[1] != temp[0]){
            result.push(temp)
        }
    }
    return result;
}

console.log(findBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))
console.log(findBoomerangs([1, 7, 1, 7, 1, 7, 1]))