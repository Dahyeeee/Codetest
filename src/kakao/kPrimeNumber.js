//isPrime 뭐야? 뭐야..? test하나 빼고 다 통과함.
function solution(n,k){
    const newN = n.toString(k);
    const newNArr = newN.split(/0+/).filter(a=>a !=='1');
    console.log(newN,newNArr)
    const answerArr =newNArr.filter((a)=>isPrime(a))

    function isPrime(x){
        if(+x===2||+x===3) return true;
        let result = true;
        const root = Math.sqrt(x) 
        for(let i=2 ; i<=root ; i++){
            if(x%i == 0){
            result = false;
            break;
            }
        }
        return result;
    }

    //return isPrime(27)
    console.log(answerArr)
    return answerArr.length;
}

console.log(solution(4568,3))