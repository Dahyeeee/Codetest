function sumOfDivisors(num){
    let divisors=[];
    for(let i=1; i<=num ; i++){
        if(Number.isInteger(num / i))
            divisors.push(i)
    }
    return divisors.reduce((acc,val)=>acc+val,0);
}

//애초에 sum을 정해서 더해주는 방법도 있군. 
function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}