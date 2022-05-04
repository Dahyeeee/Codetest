//other's / unsolved try later
function solution(numbers){
    let numArr =numbers.split('');
    let answer = 0;
    const permutationAll =[]
    for(let i=1 ; i<= numArr.length ; i++){
        const combi = permutate(numArr, i).map(arr => +arr.join(''));
        console.log(combi)
        for(every of combi) permutationAll.push(every)
    }
    const permutationSet = [...new Set(permutationAll)]
    for(each of permutationSet){
        if(isPrime(each)) answer ++
    }
    console.log(permutationSet)
    return answer;
}

// function combine(array, length) {
//     if(length ===1) return array.map((v)=>[v]);
//     const result = [];
//     array.forEach((v,i)=>{
//         const rest = array.slice(i+1);
//         const combination = combine(rest, length-1);
//         const attached = combination.map((combi)=>[v,...combi]);
//         result.push(...attached);
//     })
//     return result;
//}; 

function permutate(arr,r){
    const result =[];
    if(r===1) return arr.map(num =>[num]);
    arr.forEach((fixed, index, org)=>{
        const rest =[...org.slice(0, index), ...org.slice(index+1)];
        const permutation = permutate(rest, r-1);
        const attached = permutation.map(numbers => [fixed, ...numbers]);
        result.push(...attached);
    });
    return result;
}

function isPrime(x){
    for(let i =2 ; i*i<=x ; i++){
        if(x%i === 0) return false;
    }
    return x>=2
}

console.log(solution('011'),isPrime(0))