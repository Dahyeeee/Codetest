//unsolved
function solution(s){
    let sArr = s.split('')
    for(let i=1 ; i <s.length ; i++){
        if(sArr[i] == sArr[i-1])
        sArr = sArr.filter((item,index)=> index !== i && index !== i-1);
        console.log(sArr)
    }
    if(sArr.length == 0) return 1 
    else return 0
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