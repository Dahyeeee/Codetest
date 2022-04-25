function solution(d,budget){
    // let result = 0;
    // const dSum = d.reduce((a,b)=>a+b,0);
    // if(dSum === budget){ result = d.length;}
    
    const dOrdered = d.sort((a,b)=>a-b);
    let sum =0;
    let answer = 0;
    for(let i =0; i<d.length ; i++){
        if(sum <budget){
            sum += dOrdered[i];
            answer++
        }
    }
    if(num.reduce((a,b)=>a+b,0)>budget) answer --
    return answer;
}

console.log(solution([1,3,2,5,5,4],9))

//내가 원하던건데! -still hard to think up this logic
function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            answer++;    
        }

    })
    return answer;
}