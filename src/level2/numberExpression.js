//close but unsolved.
function solution(n){
    let result = 0;
    let temp=[];
    function repeat(n,i){
        if(i<=n){
        for(let j= i ; j<=n ; j++){
            temp.push(j)
            if(temp.reduce((a,b)=>a+b,0)===n){
                result++;
                temp = [];
                break;
            }
            temp=[];
            }
        }
    }
    repeat(n, 1)
    return result;   
}

console.log(solution(15))