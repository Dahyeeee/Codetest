//other's solution
function solution(numbers) {
    var answer = '';
    numbers.sort(sortFunc)
    answer = numbers.join('')
    if(answer[0] === '0') return '0'
    return answer;
}
const sortFunc =  (a,b) =>{
    const compareA = parseInt(a.toString() + b.toString())
    const compareB = parseInt(b.toString() + a.toString())
    return compareB - compareA
}


//simper version
function solution2(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}