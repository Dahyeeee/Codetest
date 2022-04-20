//x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    var answer = [];
    for(let i=0; i<n ; i++){
        answer.push(x*(i+1));
    }
    return answer;
}

function otherSolution(x,n){
    return Array(n).fill(x).map((v,i) =>(i +1)*v)
}