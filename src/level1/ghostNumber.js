function solution(numbers){
    let ghostNumber =[];
    for(let i=0; i <10; i++){
        if(!numbers.includes(num)){
            ghostNumber.push(num);
        }
    }
    return ghostNumber.reduce((a,b)=>a+b,0);
}

//smarty smart...
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}