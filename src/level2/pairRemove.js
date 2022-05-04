//solved.
function solution(s){
    //s가 홀수일 때 바로 0 출력해줌
    if(s.length%2 != 0 ) return 0;
    let array =[];
    for(let i=0; i<=s.length; i++){
        if(array[array.length-1]===s[i]) array.pop();
        else array.push(s[i])
    }
    return array.length ===0 ? 1 : 0
}

console.log(solution('babbaba'))

//새로운 배열을 만들어서 차례대로 넣어주고 같은 게 있으면 없애버림.
//배열 안에서 삭제할 생각만했는데 이것도 가능
function solution(s)
{
    var answer = -1;
    let notPairStack = []
    notPairStack.push(s[0])
    for(let i=1; i<s.length; i++){
        if(notPairStack[notPairStack.length-1] === s[i]){
            notPairStack.pop()
        }else{
            notPairStack.push(s[i])
        }
    }
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}