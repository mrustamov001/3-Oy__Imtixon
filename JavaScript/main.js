// Birinchi masala
function func1 (arr){
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            count += arr[i]
        }
    }
    return count
}

console.log(func1(["13", "4", 12, 15]));




// // Ikkinch masala
function func2 (arr){
    let count1 = []
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] == arr[i][0].toUpperCase() || arr[i][0] == arr[i][0].toLowerCase() || arr[i].slice(1).tolowercase()){
            count1.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
        }
    }
    return count1
}

console.log(func2(['mavis', 'senaida', 'letti']));
console.log(func2(['Samuel', 'MABELLE', 'letItia', 'meridith']));



// Uchinchi masala
let numbers = [1,3,0,5,0,7,0]

function zeroEnd(numbers){
    let count1 = []
    let count2 = []
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] == 0){
            count2+=numbers[i]
        }
        else{
            count1+=numbers[i]
        }
    }
    return `${count1.concat(count2)}`
}

console.log(zeroEnd(numbers));



// To'rtinchi masala
function number1(str){
    let count1 = 0
    for(let i=0; i<str.length; i++){
        if(str[i] >= 0){
            count1+=str[i]
        }
    }
    return count1
}

console.log(number1([1,2,0,-1,-2, 3,4]));



// Beshinchi masala
function countTrue(str){
    let count1 = 0
    for(let i=0; i<str.length; i++){
        if(str[i] == true){
            count1 += str[i]
        }
    }
    return count1
}

console.log(countTrue([false,true,false,true,true]));