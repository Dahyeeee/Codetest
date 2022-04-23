function solution(n){
    let possible =[];
    let result = 0;
    const root = Math.sqrt(n-1);
    for(let i =1; i<=root; i++){
        if((n-1)%i === 0){
            possible.push(i);
            possible.push((n-1)/i);
        } 
    }
    possible.length ===2 ? result = possible[1] : result= possible[2];
    return result;
}
//while문을 잘 못쓰는 것 같어..
function solution(n) {
    var answer = 1;
    while(n%answer!=1)answer++;
    return answer;
}