function solution(s){
    let sArr = s.split(' ');
    //a[0]이 빈문자열일때 undefined를 반환하고 charAt은 빈문자열을 반환함.
    let answer = sArr.map(a=>{
        const firstLetter = a.charAt(0).toUpperCase();
        const rest = a.slice(1).toLowerCase();
        return firstLetter+rest
    })
    console.log(answer)
    return answer.join(' ')
}

console.log(solution('5nknnk 3everyone nnikklLk'))