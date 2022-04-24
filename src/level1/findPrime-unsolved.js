function findPrime(num){
    function isPrime(num){
        let notPrime =true;
        for(let i =2 ; i <= Math.sqrt(num); i++){
            if(num%i ==0) notPrime = false;
        }
        return notPrime
    }
    let result =1;
    for(let i = 2; i<=num ; i++){
        if(isPrime(i)) result ++
    }
    return result;
}

function isPrime(num){
    let notPrime =true;
    for(let i =2 ; i <= Math.sqrt(num); i++){
        if(num%i ==0) notPrime = false;
    }
    return notPrime
}

console.log((findPrime(10)));
console.log(isPrime(9))